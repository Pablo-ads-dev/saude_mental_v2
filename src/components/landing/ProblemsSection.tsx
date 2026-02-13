import { AlertTriangle, CloudLightning, Frown, HeartCrack, BrainCog, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: Frown,
    title: "Depressão",
    desc: "A depressão afeta mais de 300 milhões de pessoas no mundo, prejudicando relações, trabalho e qualidade de vida.",
    stat: "300M+",
    statLabel: "pessoas afetadas",
  },
  {
    icon: CloudLightning,
    title: "Burnout",
    desc: "O esgotamento profissional causa exaustão física e emocional, reduzindo drasticamente a produtividade e motivação.",
    stat: "76%",
    statLabel: "dos profissionais",
  },
  {
    icon: HeartCrack,
    title: "Ansiedade",
    desc: "Transtornos de ansiedade são a condição mental mais comum, gerando medo constante e limitando o potencial pessoal.",
    stat: "1 em 4",
    statLabel: "pessoas no mundo",
  },
  {
    icon: BrainCog,
    title: "Déficit de Atenção",
    desc: "Dificuldade de concentração e foco impacta diretamente o desempenho acadêmico e profissional.",
    stat: "5-8%",
    statLabel: "da população",
  },
  {
    icon: ShieldAlert,
    title: "Estresse Crônico",
    desc: "O estresse prolongado enfraquece o sistema imunológico e aumenta o risco de doenças cardiovasculares.",
    stat: "83%",
    statLabel: "sofrem no trabalho",
  },
  {
    icon: AlertTriangle,
    title: "Insônia",
    desc: "A privação de sono prejudica a memória, o humor e a capacidade de raciocínio, criando um ciclo vicioso.",
    stat: "45%",
    statLabel: "têm dificuldades",
  },
];

const ProblemsSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-destructive/10 rounded-full px-4 py-1.5 text-sm font-medium text-destructive mb-4">
          <AlertTriangle className="w-4 h-4" /> Atenção
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Os riscos de <span className="text-destructive">ignorar</span> sua saúde mental
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Uma saúde mental mal cuidada pode desencadear problemas sérios que afetam todas as áreas da vida.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((item, i) => (
          <div
            key={i}
            className="group bg-card rounded-2xl p-6 border border-border hover:border-destructive/40 hover:shadow-xl hover:shadow-destructive/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                <item.icon className="w-6 h-6 text-destructive" />
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-destructive">{item.stat}</span>
                <p className="text-xs text-muted-foreground">{item.statLabel}</p>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
