import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-lavender">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
          <Mail className="w-4 h-4" /> Newsletter
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Receba dicas de <span className="text-primary">bem-estar</span> no seu e-mail
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Conteúdos semanais sobre saúde mental, hábitos saudáveis e práticas de autocuidado diretamente na sua caixa de entrada.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
              />
            </div>
            <Button type="submit" size="lg" className="shadow-lg shadow-primary/25 shrink-0">
              Inscrever-se <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 text-primary font-medium">
            <CheckCircle2 className="w-5 h-5" />
            <span>Inscrição realizada com sucesso! Obrigado 💜</span>
          </div>
        )}

        <p className="text-xs text-muted-foreground mt-4">Sem spam. Cancele quando quiser.</p>
      </div>
    </section>
  );
};

export default NewsletterSection;
