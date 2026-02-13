import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Com que frequência você se sente estressado(a)?",
    options: ["Raramente", "Às vezes", "Frequentemente", "Sempre"],
  },
  {
    question: "Como está a qualidade do seu sono?",
    options: ["Excelente", "Boa", "Regular", "Ruim"],
  },
  {
    question: "Você se sente motivado(a) na maioria dos dias?",
    options: ["Sim, muito", "Na maioria", "Às vezes", "Raramente"],
  },
  {
    question: "Com que frequência pratica atividades de autocuidado?",
    options: ["Diariamente", "Semanalmente", "Raramente", "Nunca"],
  },
  {
    question: "Como você avalia seu equilíbrio entre vida pessoal e trabalho?",
    options: ["Ótimo", "Bom", "Precisa melhorar", "Muito ruim"],
  },
];

const QuizSection = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const navigate = useNavigate();

  const answered = Object.keys(answers).length;
  const total = questions.length;
  const allAnswered = answered === total;

  const selectAnswer = (qIndex: number, oIndex: number) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: oIndex }));
  };

  const handleSeeResults = () => {
    setShowLoginPrompt(true);
  };

  return (
    <section className="py-20 bg-lavender">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <ClipboardCheck className="w-4 h-4" /> Autoavaliação
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Como está sua <span className="text-primary">Saúde Mental</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Responda às perguntas abaixo para uma avaliação rápida do seu bem-estar emocional.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{answered} de {total} respondidas</span>
            <span>{Math.round((answered / total) * 100)}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${(answered / total) * 100}%` }}
            />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-card rounded-2xl p-6 border border-border">
              <p className="font-semibold mb-4 flex items-start gap-2">
                <span className="bg-primary/10 text-primary text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0">
                  {qIndex + 1}
                </span>
                {q.question}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {q.options.map((opt, oIndex) => {
                  const selected = answers[qIndex] === oIndex;
                  return (
                    <button
                      key={oIndex}
                      onClick={() => selectAnswer(qIndex, oIndex)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        selected
                          ? "bg-primary text-primary-foreground border-primary shadow-md"
                          : "bg-secondary/50 border-border text-foreground hover:border-primary/50 hover:bg-secondary"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {selected && <CheckCircle2 className="w-4 h-4" />}
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="mt-8 text-center">
          {!showLoginPrompt ? (
            <Button
              size="lg"
              className="shadow-lg shadow-primary/25 text-base px-10"
              disabled={!allAnswered}
              onClick={handleSeeResults}
            >
              Ver Resultado <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          ) : (
            <div className="bg-card rounded-2xl p-8 border border-primary/30 shadow-lg max-w-md mx-auto">
              <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Crie sua conta gratuita</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Para ver seu resultado e acompanhar sua evolução ao longo do tempo, faça login ou crie uma conta.
              </p>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full" onClick={() => navigate("/auth")}>
                  Criar Conta / Entrar <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </div>
          )}
          {!allAnswered && !showLoginPrompt && (
            <p className="text-sm text-muted-foreground mt-3">Responda todas as perguntas para ver o resultado</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
