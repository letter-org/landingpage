"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Send, MessageCircle, Loader2, Sparkles } from "lucide-react"
import { ChatbotIcon } from "./chatbot-icon"
import { createClient } from "@/lib/supabase/client"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

interface ChatbotResponse {
  id: string
  question: string
  keywords: string[]
  answer: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [responses, setResponses] = useState<ChatbotResponse[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Default responses when Supabase is not available
  const defaultResponses: ChatbotResponse[] = [
    {
      id: "1",
      question: "comment ca marche",
      keywords: ["comment", "marche", "fonctionne", "utiliser", "envoyer"],
      answer: "NextLetter simplifie l'envoi de courrier : 1) Uploadez votre document PDF ou Word, 2) Ajoutez l'adresse du destinataire, 3) Choisissez vos options (recommande, suivi...), 4) Validez et nous nous occupons du reste! Impression, mise sous pli et envoi sont geres par nos soins."
    },
    {
      id: "2", 
      question: "prix tarif",
      keywords: ["prix", "tarif", "cout", "combien", "cher"],
      answer: "Nos tarifs sont transparents: Lettre simple des CHF 1.90, lettre recommandee des CHF 5.90. Nous proposons aussi des forfaits pour les entreprises avec des volumes importants. Consultez notre page Tarifs pour plus de details."
    },
    {
      id: "3",
      question: "delai envoi",
      keywords: ["delai", "temps", "rapide", "quand", "reception"],
      answer: "Les courriers sont traites sous 24h ouvrees. Pour la Suisse: 1-2 jours ouvres. Pour l'Europe: 3-5 jours ouvres. Pour l'international: 5-10 jours ouvres. Les envois recommandes beneficient d'un suivi en temps reel."
    },
    {
      id: "4",
      question: "securite",
      keywords: ["securite", "securise", "donnees", "confidentiel", "suisse"],
      answer: "Vos donnees sont hebergees en Suisse, protegees par un chiffrement SSL/TLS de bout en bout. Nous sommes conformes GDPR et certifies ISO 27001. Vos documents sont supprimes automatiquement apres envoi."
    }
  ]

  // Load chatbot responses from Supabase
  useEffect(() => {
    async function loadResponses() {
      const supabase = createClient()
      if (!supabase) {
        setResponses(defaultResponses)
        return
      }
      
      try {
        const { data, error } = await supabase
          .from("chatbot_responses")
          .select("*")
          .eq("is_active", true)

        if (data && !error && data.length > 0) {
          setResponses(data)
        } else {
          setResponses(defaultResponses)
        }
      } catch {
        setResponses(defaultResponses)
      }
    }
    loadResponses()
  }, [])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  // Add welcome message when chat opens for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Bonjour! Je suis l'assistant NextLetter. Comment puis-je vous aider aujourd'hui?",
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, messages.length])

  // Find best matching response
  function findBestResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase()
    
    // Check for keyword matches
    for (const response of responses) {
      const questionMatch = response.question.toLowerCase()
      const keywordMatch = response.keywords.some(keyword => 
        lowerMessage.includes(keyword.toLowerCase())
      )
      
      if (lowerMessage.includes(questionMatch) || keywordMatch) {
        return response.answer
      }
    }

    // Check for partial matches in questions
    for (const response of responses) {
      const words = response.question.toLowerCase().split(" ")
      const matchCount = words.filter(word => 
        word.length > 3 && lowerMessage.includes(word)
      ).length
      
      if (matchCount >= 2) {
        return response.answer
      }
    }

    // Default response
    return "Je n'ai pas trouve de reponse precise a votre question. N'hesitez pas a nous contacter directement a contact@nextletter.ch ou consultez notre FAQ pour plus d'informations."
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate typing delay for natural feel
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700))

    const responseText = findBestResponse(userMessage.content)

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: responseText,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, assistantMessage])
    setIsLoading(false)

    // Log conversation to Supabase (if available)
    const supabase = createClient()
    if (supabase) {
      try {
        await supabase.from("chatbot_conversations").insert({
          user_message: userMessage.content,
          bot_response: responseText,
        })
      } catch {
        // Silently fail if Supabase is not available
      }
    }
  }

  // Quick action buttons
  const quickActions = [
    "Comment ca marche?",
    "Quels sont les tarifs?",
    "Delai d'envoi?",
  ]

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Ouvrir le chat"
      >
        <div className="relative group">
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-blue-500 rounded-full blur-xl transition-opacity duration-300 ${
            isHovered ? 'opacity-50' : 'opacity-0'
          }`} />
          
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
          <div className="absolute inset-[-4px] rounded-full bg-blue-500/10 animate-pulse" />
          
          {/* Main button */}
          <div className={`relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-blue-500/50' : ''
          }`}>
            <ChatbotIcon className="w-10 h-10" isAnimated={isHovered} />
          </div>
          
          {/* Tooltip */}
          <div className={`absolute bottom-full right-0 mb-3 whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}>
            <div className="bg-foreground text-background text-sm px-4 py-2 rounded-lg shadow-xl">
              Besoin d'aide?
              <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-foreground" />
            </div>
          </div>
        </div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] transition-all duration-500 ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col h-[600px] max-h-[calc(100vh-6rem)]">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <ChatbotIcon className="w-8 h-8" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Assistant NextLetter</h3>
                  <p className="text-blue-100 text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    En ligne
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Fermer le chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-secondary/50 to-background">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md"
                      : "bg-card border border-border text-foreground rounded-bl-md shadow-sm"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-1 text-xs text-muted-foreground">
                      <Sparkles className="w-3 h-3 text-blue-500" />
                      Assistant
                    </div>
                  )}
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => {
                    setInput(action)
                    inputRef.current?.focus()
                  }}
                  className="text-xs px-3 py-1.5 bg-secondary hover:bg-secondary/80 text-foreground rounded-full border border-border hover:border-blue-300 transition-all duration-200"
                >
                  {action}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ecrivez votre message..."
                className="flex-1 px-4 py-3 bg-secondary border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Propulse par NextLetter AI
            </p>
          </form>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
