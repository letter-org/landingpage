"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Plus, Trash2, Edit2, Save, X, MessageSquare, BarChart3, Search, AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

interface ChatbotResponse {
  id: string
  question: string
  keywords: string[]
  answer: string
  is_active: boolean
  created_at: string
  updated_at: string
}

interface Conversation {
  id: string
  user_message: string
  bot_response: string
  created_at: string
}

function Loading() {
  return null
}

export default function AdminChatbotPage() {
  const [responses, setResponses] = useState<ChatbotResponse[]>([])
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"responses" | "conversations">("responses")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null)
  
  // Form state for new/editing response
  const [formData, setFormData] = useState({
    question: "",
    keywords: "",
    answer: "",
    is_active: true,
  })
  const [isAddingNew, setIsAddingNew] = useState(false)
  const searchParams = useSearchParams()

  const supabase = createClient()

  // Load data
  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setIsLoading(true)
    
    const [responsesResult, conversationsResult] = await Promise.all([
      supabase.from("chatbot_responses").select("*").order("created_at", { ascending: false }),
      supabase.from("chatbot_conversations").select("*").order("created_at", { ascending: false }).limit(100),
    ])

    if (responsesResult.data) setResponses(responsesResult.data)
    if (conversationsResult.data) setConversations(conversationsResult.data)
    
    setIsLoading(false)
  }

  function showNotification(type: "success" | "error", message: string) {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 3000)
  }

  async function handleSave() {
    if (!formData.question.trim() || !formData.answer.trim()) {
      showNotification("error", "La question et la reponse sont obligatoires")
      return
    }

    const keywords = formData.keywords.split(",").map(k => k.trim()).filter(k => k)
    
    if (editingId) {
      // Update existing
      const { error } = await supabase
        .from("chatbot_responses")
        .update({
          question: formData.question,
          keywords,
          answer: formData.answer,
          is_active: formData.is_active,
          updated_at: new Date().toISOString(),
        })
        .eq("id", editingId)

      if (error) {
        showNotification("error", "Erreur lors de la mise a jour")
      } else {
        showNotification("success", "Reponse mise a jour avec succes")
        setEditingId(null)
        loadData()
      }
    } else {
      // Create new
      const { error } = await supabase.from("chatbot_responses").insert({
        question: formData.question,
        keywords,
        answer: formData.answer,
        is_active: formData.is_active,
      })

      if (error) {
        showNotification("error", "Erreur lors de la creation")
      } else {
        showNotification("success", "Reponse creee avec succes")
        setIsAddingNew(false)
        loadData()
      }
    }

    setFormData({ question: "", keywords: "", answer: "", is_active: true })
  }

  async function handleDelete(id: string) {
    if (!confirm("Etes-vous sur de vouloir supprimer cette reponse?")) return

    const { error } = await supabase.from("chatbot_responses").delete().eq("id", id)

    if (error) {
      showNotification("error", "Erreur lors de la suppression")
    } else {
      showNotification("success", "Reponse supprimee")
      loadData()
    }
  }

  async function toggleActive(id: string, currentState: boolean) {
    const { error } = await supabase
      .from("chatbot_responses")
      .update({ is_active: !currentState })
      .eq("id", id)

    if (!error) loadData()
  }

  function startEdit(response: ChatbotResponse) {
    setEditingId(response.id)
    setFormData({
      question: response.question,
      keywords: response.keywords.join(", "),
      answer: response.answer,
      is_active: response.is_active,
    })
    setIsAddingNew(false)
  }

  function cancelEdit() {
    setEditingId(null)
    setIsAddingNew(false)
    setFormData({ question: "", keywords: "", answer: "", is_active: true })
  }

  const filteredResponses = responses.filter(r =>
    r.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                &larr; Retour au site
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-bold text-foreground">Administration Chatbot</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                {responses.length} reponses
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1">
                <BarChart3 className="w-4 h-4 inline mr-2" />
                {conversations.length} conversations
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-up ${
          notification.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}>
          {notification.type === "success" ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {notification.message}
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("responses")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "responses"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Reponses programmees
          </button>
          <button
            onClick={() => setActiveTab("conversations")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "conversations"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <BarChart3 className="w-4 h-4 inline mr-2" />
            Historique conversations
          </button>
        </div>

        {activeTab === "responses" && (
          <>
            {/* Actions bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher une question ou reponse..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={() => { setIsAddingNew(true); setEditingId(null); setFormData({ question: "", keywords: "", answer: "", is_active: true }) }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <Plus className="w-5 h-5" />
                Nouvelle reponse
              </button>
            </div>

            {/* Add/Edit Form */}
            {(isAddingNew || editingId) && (
              <div className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {editingId ? "Modifier la reponse" : "Ajouter une nouvelle reponse"}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Question</label>
                    <input
                      type="text"
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      placeholder="Ex: Comment envoyer une lettre recommandee?"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Mots-cles (separes par des virgules)
                    </label>
                    <input
                      type="text"
                      value={formData.keywords}
                      onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                      placeholder="Ex: recommande, envoyer, lettre, envoi"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Ces mots-cles aident le chatbot a trouver la bonne reponse
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Reponse</label>
                    <textarea
                      value={formData.answer}
                      onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                      placeholder="Entrez la reponse du chatbot..."
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="is_active"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                      className="w-4 h-4 rounded border-border"
                    />
                    <label htmlFor="is_active" className="text-sm text-foreground">Actif</label>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Enregistrer
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-6 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Responses List */}
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-muted-foreground mt-2">Chargement...</p>
                </div>
              ) : filteredResponses.length === 0 ? (
                <div className="text-center py-12 bg-card border border-border rounded-2xl">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Aucune reponse trouvee</p>
                </div>
              ) : (
                filteredResponses.map((response) => (
                  <div
                    key={response.id}
                    className={`bg-card border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${
                      response.is_active ? "border-border" : "border-red-200 bg-red-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">{response.question}</h4>
                          {!response.is_active && (
                            <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full">Inactif</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{response.answer}</p>
                        <div className="flex flex-wrap gap-1">
                          {response.keywords.map((keyword, i) => (
                            <span key={i} className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleActive(response.id, response.is_active)}
                          className={`p-2 rounded-lg transition-colors ${
                            response.is_active
                              ? "bg-green-100 text-green-600 hover:bg-green-200"
                              : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                          }`}
                          title={response.is_active ? "Desactiver" : "Activer"}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => startEdit(response)}
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          title="Modifier"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(response.id)}
                          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}

        {activeTab === "conversations" && (
          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-muted-foreground mt-2">Chargement...</p>
              </div>
            ) : conversations.length === 0 ? (
              <div className="text-center py-12 bg-card border border-border rounded-2xl">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Aucune conversation enregistree</p>
              </div>
            ) : (
              conversations.map((conv) => (
                <div key={conv.id} className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{new Date(conv.created_at).toLocaleDateString("fr-CH")}</span>
                    <span>{new Date(conv.created_at).toLocaleTimeString("fr-CH")}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-xs font-medium text-blue-600">U</span>
                      </div>
                      <div className="flex-1 bg-blue-50 rounded-xl rounded-tl-none p-3">
                        <p className="text-sm text-foreground">{conv.user_message}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-xs font-medium text-green-600">B</span>
                      </div>
                      <div className="flex-1 bg-secondary rounded-xl rounded-tl-none p-3">
                        <p className="text-sm text-foreground">{conv.bot_response}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export const dynamic = "force-dynamic"

export default function AdminChatbotPageWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <AdminChatbotPage />
    </Suspense>
  )
}
