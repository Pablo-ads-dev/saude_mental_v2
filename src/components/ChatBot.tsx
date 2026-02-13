import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const botResponses: Record<string, string> = {
  default: "Olá! Sou o assistente da MenteSã. Como posso ajudar você hoje? 😊",
  meditacao: "A meditação é uma prática poderosa! Recomendo começar com 5 minutos de respiração consciente pela manhã. Quer dicas de como iniciar?",
  ansiedade: "Entendo como a ansiedade pode ser desafiadora. Algumas técnicas que podem ajudar: respiração 4-7-8, grounding (5 sentidos), e caminhadas ao ar livre. 💜",
  sono: "Para melhorar o sono, tente: manter horários regulares, evitar telas 1h antes de dormir, e praticar relaxamento muscular progressivo.",
  estresse: "O estresse é natural, mas podemos gerenciá-lo! Experimente pausas de 5 minutos a cada hora, exercícios de respiração e atividades prazerosas.",
};

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("meditação") || lower.includes("meditar")) return botResponses.meditacao;
  if (lower.includes("ansiedade") || lower.includes("ansioso")) return botResponses.ansiedade;
  if (lower.includes("sono") || lower.includes("dormir") || lower.includes("insônia")) return botResponses.sono;
  if (lower.includes("estresse") || lower.includes("estressado")) return botResponses.estresse;
  return "Obrigado por compartilhar! Posso ajudar com temas como meditação, ansiedade, sono e estresse. Sobre o que gostaria de conversar? 💜";
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: botResponses.default, sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: Date.now(), text: trimmed, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: getBotReply(trimmed), sender: "bot" },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-4rem)] bg-card border border-border rounded-2xl shadow-2xl shadow-primary/10 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold text-sm">MenteSã Chat</span>
            </div>
            <button onClick={() => setOpen(false)} className="hover:opacity-80 transition-opacity">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-secondary-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-secondary text-foreground rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
            />
            <Button size="icon" className="rounded-lg shrink-0" onClick={send}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
