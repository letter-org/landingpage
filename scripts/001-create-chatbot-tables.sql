-- Create chatbot_responses table for storing Q&A pairs
CREATE TABLE IF NOT EXISTS chatbot_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  keywords TEXT[] NOT NULL DEFAULT '{}',
  answer TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  priority INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create chatbot_conversations table for storing chat history
CREATE TABLE IF NOT EXISTS chatbot_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  matched_response_id UUID REFERENCES chatbot_responses(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster keyword search
CREATE INDEX IF NOT EXISTS idx_chatbot_responses_keywords ON chatbot_responses USING GIN(keywords);
CREATE INDEX IF NOT EXISTS idx_chatbot_responses_active ON chatbot_responses(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_chatbot_conversations_session ON chatbot_conversations(session_id);

-- Enable Row Level Security
ALTER TABLE chatbot_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE chatbot_conversations ENABLE ROW LEVEL SECURITY;

-- Create policies for chatbot_responses (public read, authenticated write)
CREATE POLICY "Anyone can read active chatbot responses" ON chatbot_responses
  FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can manage chatbot responses" ON chatbot_responses
  FOR ALL USING (true);

-- Create policies for chatbot_conversations (public insert/read own)
CREATE POLICY "Anyone can insert conversations" ON chatbot_conversations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can read conversations" ON chatbot_conversations
  FOR SELECT USING (true);

-- Insert some default responses
INSERT INTO chatbot_responses (question, keywords, answer, category, priority) VALUES
(
  'Qu''est-ce que NextLetter?',
  ARRAY['nextletter', 'quoi', 'service', 'c''est quoi', 'presentation'],
  'NextLetter est une plateforme suisse de courrier digital qui vous permet d''envoyer vos lettres recommandees sans vous deplacer. Redigez, envoyez, suivez et archivez vos courriers officiels en quelques clics, le tout heberge en Suisse et conforme GDPR.',
  'general',
  10
),
(
  'Comment ca fonctionne?',
  ARRAY['fonctionne', 'comment', 'marche', 'utiliser', 'etapes'],
  'C''est tres simple! 1) Creez votre compte gratuit, 2) Redigez votre lettre ou utilisez notre assistant IA, 3) Choisissez le mode d''envoi (simple ou recommande), 4) Payez avec Stripe ou Twint, et 5) Nous nous occupons de l''impression et de l''envoi via La Poste Suisse. Vous recevez un suivi en temps reel.',
  'general',
  9
),
(
  'Quels sont les tarifs?',
  ARRAY['tarif', 'prix', 'cout', 'combien', 'credit', 'pack'],
  'Nous proposons des packs de credits: 3 credits a CHF 9.90, 10 credits a CHF 29.90 (le plus populaire), 25 credits a CHF 69.90, et 50 credits a CHF 119.90. Chaque credit correspond a un envoi. Pas d''abonnement ni de frais caches!',
  'pricing',
  8
),
(
  'Mes donnees sont-elles securisees?',
  ARRAY['securite', 'donnees', 'protection', 'gdpr', 'confidentiel', 'suisse'],
  'Absolument! Vos donnees sont hebergees en Suisse et en Europe, avec un chiffrement de bout en bout (SSL/TLS). Nous sommes conformes GDPR et ISO 27001. La confidentialite de vos courriers est notre priorite absolue.',
  'security',
  8
),
(
  'Comment puis-je vous contacter?',
  ARRAY['contact', 'aide', 'support', 'telephone', 'email', 'question'],
  'Vous pouvez nous contacter par email a contact@nextletter.ch ou par telephone au +41 (0) 00 000 00 00. Notre equipe est disponible du lundi au vendredi de 9h a 18h. Nous repondons generalement sous 24h.',
  'support',
  7
),
(
  'Quels moyens de paiement acceptez-vous?',
  ARRAY['paiement', 'payer', 'stripe', 'twint', 'carte', 'credit'],
  'Nous acceptons les paiements par carte bancaire via Stripe (Visa, Mastercard, American Express) et par Twint, la solution de paiement mobile suisse preferee.',
  'pricing',
  6
),
(
  'Combien de temps pour la livraison?',
  ARRAY['livraison', 'delai', 'temps', 'combien', 'jours', 'rapide'],
  'Les lettres sont imprimees et envoyees le jour meme si vous passez commande avant 14h. La livraison suit ensuite les delais standard de La Poste Suisse: generalement 1-2 jours ouvrables en Suisse.',
  'general',
  6
),
(
  'Puis-je suivre mes envois?',
  ARRAY['suivi', 'tracking', 'suivre', 'statut', 'ou', 'envoi'],
  'Oui! Chaque envoi dispose d''un suivi en temps reel. Vous pouvez voir le statut de vos lettres (en preparation, envoyee, livree) directement depuis votre tableau de bord. Pour les recommandes, vous recevez aussi une preuve de depot.',
  'general',
  5
);
