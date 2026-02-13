import {
  Sparkles, Brain, Heart, Moon,
  Activity, Smile,
  Menu, X, Users, ArrowRight, Play, Clock, Leaf, Wind, Sun
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import ChatBot from "@/components/ChatBot";
import ProblemsSection from "@/components/landing/ProblemsSection";
import HabitsCarousel from "@/components/landing/HabitsCarousel";
import QuizSection from "@/components/landing/QuizSection";
import NewsletterSection from "@/components/landing/NewsletterSection";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Saúde Mental", href: "#saude-mental" },
    { label: "Hábitos", href: "#habitos" },
    { label: "Práticas", href: "#praticas" },
    { label: "Quiz", href: "#quiz" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Aura Mental</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm">Entrar</Button>
            <Button size="sm" className="shadow-lg shadow-primary/25">Começar Agora</Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm" className="flex-1">Entrar</Button>
              <Button size="sm" className="flex-1">Começar Agora</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full bg-accent/60 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                <Sparkles className="w-4 h-4" /> Plataforma de Bem-Estar
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Sua jornada para o{" "}
                <span className="text-primary">bem-estar</span>{" "}
                começa aqui
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Encontre equilíbrio emocional, desenvolva hábitos saudáveis e cuide da sua mente com práticas guiadas por especialistas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-lg shadow-primary/25 text-base px-8">
                  Começar Agora <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8">
                  <Play className="w-5 h-5 mr-1" /> Ver como funciona
                </Button>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                      <Users className="w-3.5 h-3.5 text-primary" />
                    </div>
                  ))}
                </div>
                <span><strong className="text-foreground">+2.000</strong> pessoas já começaram</span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-accent to-secondary rotate-6" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-primary/30 via-accent to-secondary -rotate-3" />
                <div className="relative rounded-3xl bg-card p-8 shadow-2xl shadow-primary/10 flex flex-col items-center justify-center gap-6 h-full">
                  <Brain className="w-24 h-24 text-primary" />
                  <h3 className="text-2xl font-bold text-center">Mente em Equilíbrio</h3>
                  <p className="text-muted-foreground text-center">Práticas diárias para clareza mental e paz interior</p>
                  <div className="flex gap-3">
                    <div className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">Meditação</div>
                    <div className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">Respiração</div>
                    <div className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">Foco</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que focar na Saúde Mental */}
      <section id="saude-mental" className="py-20 bg-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Por que focar na <span className="text-primary">Saúde Mental</span>?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Investir na saúde mental é fundamental para uma vida plena e produtiva.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Clareza Cognitiva", desc: "Melhore sua concentração, memória e tomada de decisão com práticas que estimulam a mente." },
              { icon: Heart, title: "Resiliência Emocional", desc: "Desenvolva a capacidade de lidar com desafios e se recuperar de situações difíceis." },
              { icon: Moon, title: "Qualidade do Sono", desc: "Técnicas de relaxamento que promovem um sono reparador e revitalizante." },
            ].map((item, i) => (
              <div key={i} className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas de saúde mental */}
      <ProblemsSection />

      {/* Hábitos */}
      <HabitsCarousel />

      {/* Quiz */}
      <div id="quiz">
        <QuizSection />
      </div>



      {/* Benefícios
      <section id="beneficios" className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Benefícios do <span className="text-primary">Exercício Mental</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Exercitar a mente traz benefícios comprovados pela ciência.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Activity, title: "Redução do Estresse", desc: "Práticas regulares reduzem em até 40% os níveis de cortisol, promovendo calma e equilíbrio no seu dia a dia." },
              { icon: Smile, title: "Dose de Felicidade", desc: "Exercícios mentais estimulam a liberação de endorfina e serotonina, aumentando a sensação de bem-estar." },
            ].map((item, i) => (
              <div key={i} className="group bg-card rounded-2xl p-10 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Exercícios Mentais Guiados */}
      <section id="praticas" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Exercícios Mentais <span className="text-primary">Guiados</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Escolha uma prática e comece a transformar sua mente hoje.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Mindfulness", time: "10 min", desc: "Atenção plena para o momento presente com técnicas de foco e observação.", gradient: "from-primary via-primary/80 to-primary/60" },
              { icon: Wind, title: "Relaxamento", time: "15 min", desc: "Relaxamento muscular progressivo e visualização guiada para aliviar tensões.", gradient: "from-primary/90 via-primary/70 to-accent" },
              { icon: Sun, title: "Foco", time: "20 min", desc: "Exercícios de concentração para aumentar produtividade e clareza mental.", gradient: "from-primary/80 via-primary/60 to-primary/40" },
            ].map((item, i) => (
              <div key={i} className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} min-h-[320px] flex flex-col justify-end p-8 text-primary-foreground hover:scale-[1.02] transition-transform duration-300`}>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                  <Clock className="w-3 h-3" /> {item.time}
                </div>
                <item.icon className="w-12 h-12 mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed mb-4">{item.desc}</p>
                <Button size="sm" variant="secondary" className="w-fit bg-background/20 backdrop-blur-sm border-0 text-primary-foreground hover:bg-background/30">
                  Começar agora <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Aura Mental</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Cuidando da sua saúde mental com ciência, empatia e tecnologia.</p>
            </div>
            {[
              { title: "Plataforma", links: ["Sobre nós", "Como funciona", "Preços", "Blog"] },
              { title: "Recursos", links: ["Meditações", "Exercícios", "Artigos", "Comunidade"] },
              { title: "Jurídico", links: ["Privacidade", "Termos de uso", "Cookies", "Contato"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link}><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aura Mental. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;
