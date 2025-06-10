import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { FileText, Calendar, BookOpen, Download, ExternalLink } from 'lucide-react'

// Dados da análise do plano de aula
const analiseData = {
  title: "Análise do Plano de Aula Original",
  summary: "Avaliação detalhada do plano de aula original com sugestões de melhorias e atualizações para adequação ao nível de pós-graduação e às tendências atuais em PLN.",
  sections: [
    {
      title: "Pontos Fortes Identificados",
      content: [
        "Estrutura lógica e progressiva dos conceitos",
        "Cobertura abrangente dos fundamentos de PLN",
        "Inclusão de componentes práticos",
        "Foco em ferramentas amplamente utilizadas na indústria"
      ]
    },
    {
      title: "Áreas de Melhoria",
      content: [
        "Necessidade de maior profundidade teórica para nível de pós-graduação",
        "Atualização com desenvolvimentos recentes em IA generativa",
        "Inclusão de aspectos éticos e de responsabilidade em IA",
        "Maior ênfase em aplicações multimodais"
      ]
    },
    {
      title: "Sugestões de Modernização",
      content: [
        "Integração de modelos Transformer e arquiteturas modernas",
        "Discussão sobre Large Language Models (LLMs)",
        "Abordagem de técnicas como RAG e fine-tuning",
        "Inclusão de tópicos sobre IA explicável e interpretabilidade"
      ]
    }
  ]
}

// Dados do cronograma
const cronogramaData = {
  title: "Cronograma Detalhado - 2 Dias",
  description: "Divisão otimizada do conteúdo em dois dias intensivos de 7 horas cada, balanceando teoria e prática.",
  dias: [
    {
      dia: "Dia 1 - Fundamentos",
      duracao: "7 horas",
      sessoes: [
        {
          horario: "09:00 - 10:30",
          titulo: "Introdução ao PLN e Histórico da IA",
          descricao: "Conceitos fundamentais e evolução histórica da IA",
          tipo: "Teórica"
        },
        {
          horario: "10:30 - 10:45", 
          titulo: "Intervalo",
          descricao: "Pausa para café",
          tipo: "Intervalo"
        },
        {
          horario: "10:45 - 12:00",
          titulo: "Aquisição e Pré-processamento de Dados",
          descricao: "Coleta, limpeza e preparação de dados textuais",
          tipo: "Teórica + Prática"
        },
        {
          horario: "12:00 - 13:00",
          titulo: "Almoço",
          descricao: "Pausa para refeição",
          tipo: "Intervalo"
        },
        {
          horario: "13:00 - 14:30",
          titulo: "Representação de Texto (BoW e TF-IDF)",
          descricao: "Técnicas tradicionais de representação vetorial",
          tipo: "Teórica + Prática"
        },
        {
          horario: "14:30 - 14:45",
          titulo: "Intervalo",
          descricao: "Pausa breve",
          tipo: "Intervalo"
        },
        {
          horario: "14:45 - 16:00",
          titulo: "Machine Learning para Texto",
          descricao: "Classificação e agrupamento de documentos",
          tipo: "Teórica + Prática"
        },
        {
          horario: "16:00 - 16:15",
          titulo: "Intervalo",
          descricao: "Pausa para café",
          tipo: "Intervalo"
        },
        {
          horario: "16:15 - 17:00",
          titulo: "Exercícios Práticos e Discussão",
          descricao: "Consolidação dos conceitos e preparação para o Dia 2",
          tipo: "Prática"
        }
      ]
    },
    {
      dia: "Dia 2 - Modelos Avançados",
      duracao: "7 horas",
      sessoes: [
        {
          horario: "09:00 - 10:30",
          titulo: "Word Embeddings e Transformers",
          descricao: "Representações densas e arquiteturas modernas",
          tipo: "Teórica"
        },
        {
          horario: "10:30 - 10:45",
          titulo: "Intervalo", 
          descricao: "Pausa para café",
          tipo: "Intervalo"
        },
        {
          horario: "10:45 - 12:00",
          titulo: "BERT e Modelos de Linguagem",
          descricao: "Estado da arte em modelos pré-treinados",
          tipo: "Teórica + Prática"
        },
        {
          horario: "12:00 - 13:00",
          titulo: "Almoço",
          descricao: "Pausa para refeição", 
          tipo: "Intervalo"
        },
        {
          horario: "13:00 - 14:30",
          titulo: "Tarefas de PLN (Sentimentos, NER, Resumo)",
          descricao: "Aplicações práticas de modelos modernos",
          tipo: "Teórica + Prática"
        },
        {
          horario: "14:30 - 14:45",
          titulo: "Intervalo",
          descricao: "Pausa breve",
          tipo: "Intervalo"
        },
        {
          horario: "14:45 - 16:00",
          titulo: "Ferramentas e Hugging Face",
          descricao: "Ecossistema prático para desenvolvimento",
          tipo: "Prática"
        },
        {
          horario: "16:00 - 16:15",
          titulo: "Intervalo",
          descricao: "Pausa para café",
          tipo: "Intervalo"
        },
        {
          horario: "16:15 - 17:00",
          titulo: "Futuro do PLN e Projetos",
          descricao: "Tendências e orientações para projetos práticos",
          tipo: "Teórica + Discussão"
        }
      ]
    }
  ]
}

// Dados da bibliografia
const bibliografiaData = {
  title: "Bibliografia e Recursos Complementares",
  description: "Referências essenciais e materiais complementares para aprofundamento nos tópicos do curso.",
  categorias: [
    {
      categoria: "Livros Fundamentais",
      recursos: [
        {
          titulo: "Speech and Language Processing",
          autores: "Dan Jurafsky & James H. Martin",
          descricao: "Referência clássica em PLN, cobrindo desde fundamentos até técnicas avançadas",
          link: "https://web.stanford.edu/~jurafsky/slp3/"
        },
        {
          titulo: "Natural Language Processing with Python",
          autores: "Steven Bird, Ewan Klein & Edward Loper",
          descricao: "Guia prático usando NLTK, ideal para implementação",
          link: "https://www.nltk.org/book/"
        },
        {
          titulo: "Deep Learning for Natural Language Processing",
          autores: "Palash Goyal, Sumit Pandey & Karan Jain",
          descricao: "Abordagem moderna com deep learning e transformers",
          link: "#"
        }
      ]
    },
    {
      categoria: "Papers Fundamentais",
      recursos: [
        {
          titulo: "Attention Is All You Need",
          autores: "Vaswani et al. (2017)",
          descricao: "Paper original dos Transformers que revolucionou o PLN",
          link: "https://arxiv.org/abs/1706.03762"
        },
        {
          titulo: "BERT: Pre-training of Deep Bidirectional Transformers",
          autores: "Devlin et al. (2018)",
          descricao: "Introdução do BERT e transfer learning em PLN",
          link: "https://arxiv.org/abs/1810.04805"
        },
        {
          titulo: "Language Models are Few-Shot Learners",
          autores: "Brown et al. (2020)",
          descricao: "GPT-3 e o paradigma de few-shot learning",
          link: "https://arxiv.org/abs/2005.14165"
        }
      ]
    },
    {
      categoria: "Ferramentas e Plataformas",
      recursos: [
        {
          titulo: "Hugging Face Transformers",
          autores: "Hugging Face Team",
          descricao: "Biblioteca principal para modelos de linguagem modernos",
          link: "https://huggingface.co/transformers/"
        },
        {
          titulo: "spaCy",
          autores: "Explosion AI",
          descricao: "Biblioteca industrial para processamento de linguagem natural",
          link: "https://spacy.io/"
        },
        {
          titulo: "NLTK",
          autores: "NLTK Team",
          descricao: "Toolkit educacional e de pesquisa para PLN",
          link: "https://www.nltk.org/"
        }
      ]
    }
  ]
}

// Componente para exibir análise detalhada
function AnaliseDetalhada() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-4">{analiseData.title}</h3>
        <p className="text-gray-600 mb-6">{analiseData.summary}</p>
      </div>
      
      {analiseData.sections.map((section, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {section.content.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Componente para cronograma detalhado
function CronogramaDetalhado() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-4">{cronogramaData.title}</h3>
        <p className="text-gray-600 mb-6">{cronogramaData.description}</p>
      </div>

      {cronogramaData.dias.map((dia, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-xl flex items-center justify-between">
              {dia.dia}
              <span className="text-sm font-normal text-gray-500">{dia.duracao}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dia.sessoes.map((sessao, i) => (
                <div key={i} className={`p-3 rounded-lg border-l-4 ${
                  sessao.tipo === 'Intervalo' ? 'bg-gray-50 border-gray-300' :
                  sessao.tipo === 'Teórica' ? 'bg-blue-50 border-blue-400' :
                  sessao.tipo === 'Prática' ? 'bg-green-50 border-green-400' :
                  'bg-purple-50 border-purple-400'
                }`}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold">{sessao.titulo}</h4>
                    <span className="text-sm text-gray-500">{sessao.horario}</span>
                  </div>
                  <p className="text-sm text-gray-600">{sessao.descricao}</p>
                  <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                    sessao.tipo === 'Intervalo' ? 'bg-gray-200 text-gray-700' :
                    sessao.tipo === 'Teórica' ? 'bg-blue-200 text-blue-700' :
                    sessao.tipo === 'Prática' ? 'bg-green-200 text-green-700' :
                    'bg-purple-200 text-purple-700'
                  }`}>
                    {sessao.tipo}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Componente para bibliografia
function Bibliografia() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-4">{bibliografiaData.title}</h3>
        <p className="text-gray-600 mb-6">{bibliografiaData.description}</p>
      </div>

      {bibliografiaData.categorias.map((categoria, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{categoria.categoria}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoria.recursos.map((recurso, i) => (
                <div key={i} className="border-l-2 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-900">{recurso.titulo}</h4>
                  <p className="text-sm text-gray-600 mb-1">{recurso.autores}</p>
                  <p className="text-sm text-gray-700 mb-2">{recurso.descricao}</p>
                  {recurso.link !== '#' && (
                    <a 
                      href={recurso.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                    >
                      Acessar recurso
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Componente principal para seção de recursos
function ResourcesSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Recursos Adicionais</h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Materiais complementares, análises detalhadas e recursos para aprofundamento 
        nos tópicos abordados no curso.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Análise do Plano
            </CardTitle>
            <CardDescription>
              Avaliação detalhada e melhorias sugeridas para o plano de aula original
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  Acessar Análise
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Análise do Plano de Aula</DialogTitle>
                  <DialogDescription>
                    Avaliação detalhada com sugestões de melhorias
                  </DialogDescription>
                </DialogHeader>
                <AnaliseDetalhada />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-purple-600" />
              Cronograma Detalhado
            </CardTitle>
            <CardDescription>
              Divisão completa dos dois dias com horários e atividades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  Ver Cronograma
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Cronograma Detalhado</DialogTitle>
                  <DialogDescription>
                    Programação completa dos dois dias de curso
                  </DialogDescription>
                </DialogHeader>
                <CronogramaDetalhado />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-green-600" />
              Bibliografia
            </CardTitle>
            <CardDescription>
              Referências essenciais e materiais complementares
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  Acessar Bibliografia
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Bibliografia e Recursos</DialogTitle>
                  <DialogDescription>
                    Materiais de referência e recursos complementares
                  </DialogDescription>
                </DialogHeader>
                <Bibliografia />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export { ResourcesSection }

