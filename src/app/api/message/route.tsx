import { MessageArraySchema } from '@/lib/validators/message'

export async function POST(req: Request) {
  const { message } = await req.json()

  const parsedMessages = MessageArraySchema.parse(message)

  // const outboundMessages: ChatGPTMessage
}
