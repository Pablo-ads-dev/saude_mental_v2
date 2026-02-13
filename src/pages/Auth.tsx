import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Mail, Lock, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast({ title: "Bem-vindo(a) de volta!", description: "Login realizado com sucesso." });
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast({
          title: "Conta criada!",
          description: "Verifique seu e-mail para confirmar sua conta.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Algo deu errado. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full bg-accent/60 blur-3xl" />
      </div>

      <div className="w-full max-w-md relative">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <div className="bg-card rounded-2xl border border-border p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">MenteSã</span>
          </div>

          <h1 className="text-2xl font-bold mb-2">
            {isLogin ? "Bem-vindo(a) de volta" : "Crie sua conta"}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            {isLogin
              ? "Entre para acessar seus resultados e acompanhar sua evolução."
              : "Comece sua jornada de autoconhecimento e bem-estar mental."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-secondary rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full bg-secondary rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <Button type="submit" className="w-full shadow-lg shadow-primary/25" size="lg" disabled={loading}>
              {loading ? "Carregando..." : isLogin ? "Entrar" : "Criar Conta"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-medium hover:underline">
              {isLogin ? "Criar conta" : "Fazer login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
