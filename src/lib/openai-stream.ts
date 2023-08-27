export type ChatGPTAgent = 'user' | 'system'

export interface ChatGPTMessage {
  role: ChatGPTAgent // Open Ai provides chatgptagent
  content: string
}
