import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Moon, Droplets, Pause, Leaf, Wind } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const habits = [
  {
    icon: Moon,
    title: "Sono Profundo",
    desc: "Durma 7-9 horas por noite para restaurar mente e corpo.",
    color: "from-primary/80 to-primary/40",
    details: "O sono é fundamental para a consolidação da memória, regulação emocional e recuperação física. Durante o sono profundo, o cérebro elimina toxinas acumuladas e processa as experiências do dia. Dicas: mantenha horários regulares, evite cafeína após 14h, crie um ambiente escuro e silencioso, e desligue telas 1 hora antes de dormir.",
  },
  {
    icon: Droplets,
    title: "Hidratação",
    desc: "Beba ao menos 2 litros de água por dia para manter o cérebro ativo.",
    color: "from-primary/60 to-accent",
    details: "A desidratação de apenas 2% já impacta negativamente a concentração, memória e humor. O cérebro é composto por cerca de 75% de água. Dicas: tenha uma garrafa sempre por perto, adicione frutas à água para variar o sabor, beba um copo ao acordar e antes de cada refeição.",
  },
  {
    icon: Pause,
    title: "Pausas Ativas",
    desc: "Faça intervalos regulares de 5 min a cada hora de trabalho.",
    color: "from-primary/70 to-primary/30",
    details: "O método Pomodoro e pausas regulares aumentam a produtividade em até 25%. Durante as pausas, levante-se, alongue-se e mova o corpo. Isso aumenta o fluxo sanguíneo cerebral e previne lesões por esforço repetitivo. Dicas: use um timer, faça alongamentos simples e olhe para longe da tela.",
  },
  {
    icon: Leaf,
    title: "Contato com a Natureza",
    desc: "Passe ao menos 20 minutos ao ar livre diariamente.",
    color: "from-primary/50 to-accent",
    details: "Estudos mostram que 20 minutos na natureza reduzem significativamente os níveis de cortisol (hormônio do estresse). A exposição à luz solar regula o ritmo circadiano e estimula a produção de vitamina D. Dicas: caminhe em parques, cuide de plantas, ou simplesmente tome sol pela manhã.",
  },
  {
    icon: Wind,
    title: "Respiração Consciente",
    desc: "Pratique exercícios respiratórios para reduzir a ansiedade.",
    color: "from-primary/80 to-primary/50",
    details: "A respiração diafragmática ativa o sistema nervoso parassimpático, reduzindo a frequência cardíaca e a pressão arterial. Técnicas como 4-7-8 (inspire por 4s, segure por 7s, expire por 8s) são eficazes contra ataques de pânico. Dicas: pratique 3x ao dia por 5 minutos, especialmente antes de dormir.",
  },
];

const HabitsCarousel = () => {
  const [selectedHabit, setSelectedHabit] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section id="habitos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Hábitos para sua <span className="text-primary">Mente</span></h2>
            <p className="text-muted-foreground">Pequenas mudanças diárias que transformam sua saúde mental. <span className="text-primary text-sm font-medium">Clique para saber mais →</span></p>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full" onClick={() => scrollCarousel("left")}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={() => scrollCarousel("right")}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div ref={carouselRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: "none" }}>
          {habits.map((item, i) => (
            <div key={i} className="min-w-[280px] sm:min-w-[300px] snap-start group cursor-pointer" onClick={() => setSelectedHabit(i)}>
              <div className={`rounded-2xl bg-gradient-to-br ${item.color} p-8 text-primary-foreground h-full flex flex-col justify-between min-h-[220px] hover:scale-[1.02] transition-transform duration-300`}>
                <item.icon className="w-10 h-10 mb-4 opacity-90" />
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedHabit !== null} onOpenChange={() => setSelectedHabit(null)}>
        {selectedHabit !== null && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                {(() => { const Icon = habits[selectedHabit].icon; return <Icon className="w-6 h-6 text-primary" />; })()}
              </div>
              <DialogTitle className="text-xl">{habits[selectedHabit].title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed pt-2">
                {habits[selectedHabit].details}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default HabitsCarousel;
