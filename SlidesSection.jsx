import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react'

// Componente para visualizar slides
function SlideViewer({ slides, isOpen, onClose, currentSlide, setCurrentSlide }) {
  if (!isOpen) return null

  const slide = slides[currentSlide]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="w-full h-full max-w-7xl mx-auto p-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 text-white">
          <div>
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p className="text-gray-300">Slide {currentSlide + 1} de {slides.length}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-gray-800">
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Slide Content */}
        <div className="flex-1 bg-white rounded-lg overflow-hidden">
          <iframe 
            src={slide.url} 
            className="w-full h-full border-0"
            title={slide.title}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-4">
          <Button 
            variant="secondary" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button 
            variant="secondary" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Próximo
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Dados dos slides do Dia 1
const dia1Slides = [
  {
    title: "Introdução ao PLN e Mineração de Texto",
    description: "Definições fundamentais, distinções entre PLN e mineração de texto, e suas aplicações em ciência de dados e IA.",
    url: "/apresentacao_dia1/introducao_pln.html"
  },
  {
    title: "Histórico da Inteligência Artificial", 
    description: "Evolução da IA desde suas origens até a era atual, incluindo os invernos da IA e o ressurgimento com aprendizado de máquina e IA generativa.",
    url: "/apresentacao_dia1/historico_ia.html"
  },
  {
    title: "Aquisição e Coleta de Dados Textuais",
    description: "Métodos para obtenção de dados textuais, incluindo leitura de arquivos, web scraping simples, ética e boas práticas.",
    url: "/apresentacao_dia1/aquisicao_dados.html"
  },
  {
    title: "Pré-processamento de Textos",
    description: "Técnicas essenciais de limpeza e normalização de texto: remoção de pontuação, normalização de caracteres, tokenização.",
    url: "/apresentacao_dia1/preprocessamento.html"
  },
  {
    title: "Tokenização, Stopwords e Normalização",
    description: "Processos de segmentação de texto, remoção de palavras irrelevantes, stemming e lematização com exemplos práticos.",
    url: "/apresentacao_dia1/tokenizacao_stopwords.html"
  },
  {
    title: "Representação de Texto: Bag-of-Words",
    description: "Conceito, construção e implementação da representação Bag-of-Words, suas vantagens e limitações fundamentais.",
    url: "/apresentacao_dia1/representacao_bow.html"
  },
  {
    title: "Representação TF-IDF",
    description: "Term Frequency-Inverse Document Frequency: conceito, cálculo matemático e vantagens sobre BoW com exemplos práticos.",
    url: "/apresentacao_dia1/representacao_tfidf.html"
  },
  {
    title: "Aprendizado de Máquina para Texto: Classificação",
    description: "Introdução à classificação de documentos usando Naïve Bayes e SVM, teoria por trás dos algoritmos e aplicações práticas.",
    url: "/apresentacao_dia1/ml_classificacao.html"
  },
  {
    title: "Agrupamento e Descoberta de Tópicos",
    description: "Técnicas de agrupamento (k-means, hierárquico) para descoberta de tópicos em grandes volumes de texto.",
    url: "/apresentacao_dia1/ml_agrupamento.html"
  },
  {
    title: "Exercícios Práticos e Discussão",
    description: "Atividades hands-on para consolidar os conceitos aprendidos e preparação para o segundo dia do curso.",
    url: "/apresentacao_dia1/exercicios_praticos.html"
  }
]

// Dados dos slides do Dia 2
const dia2Slides = [
  {
    title: "Word Embeddings: Word2Vec e GloVe",
    description: "Introdução aos embeddings de palavras, Word2Vec e GloVe, como capturam relações semânticas e sintáticas, e suas vantagens sobre representações tradicionais.",
    url: "/apresentacao_dia2/word_embeddings.html"
  },
  {
    title: "Transformers: A Revolução do PLN",
    description: "Arquitetura dos Transformers, mecanismo de atenção, como revolucionaram o PLN e a IA generativa, com exemplo contrapondo IA generativa antes e depois dos Transformers.",
    url: "/apresentacao_dia2/transformers_revolucao.html"
  },
  {
    title: "BERT e Modelos de Linguagem Modernos",
    description: "Introdução ao BERT e outros modelos baseados em Transformers, arquitetura, pré-treinamento e fine-tuning, impacto no estado da arte.",
    url: "/apresentacao_dia2/bert_modelos.html"
  },
  {
    title: "Análise de Sentimentos",
    description: "Técnicas para análise de sentimentos, desde abordagens tradicionais até modelos modernos, desafios, aplicações e métricas de avaliação.",
    url: "/apresentacao_dia2/analise_sentimentos.html"
  },
  {
    title: "Extração de Entidades Nomeadas (NER)",
    description: "Extração de entidades nomeadas (NER), tipos de entidades, abordagens clássicas e modernas, aplicações práticas e desafios.",
    url: "/apresentacao_dia2/ner_entidades.html"
  },
  {
    title: "Resumo Automático de Textos",
    description: "Técnicas de resumo automático de textos, abordagens extrativas vs abstratas, modelos seq2seq, aplicações e avaliação de qualidade.",
    url: "/apresentacao_dia2/resumo_automatico.html"
  },
  {
    title: "Ferramentas Python: NLTK, spaCy, scikit-learn",
    description: "Visão geral das principais bibliotecas Python para PLN: NLTK, spaCy, scikit-learn, com exemplos práticos e casos de uso.",
    url: "/apresentacao_dia2/ferramentas_python.html"
  },
  {
    title: "Hugging Face e a Democratização da IA",
    description: "Introdução detalhada ao Hugging Face e biblioteca Transformers, como democratizou o acesso a modelos de ponta, exemplos práticos de uso.",
    url: "/apresentacao_dia2/huggingface_transformers.html"
  },
  {
    title: "Projeto Prático: Pipeline Completo",
    description: "Orientações para o projeto prático, definição de problema, coleta de dados, implementação de pipeline completo e apresentação de resultados.",
    url: "/apresentacao_dia2/projeto_pratico.html"
  },
  {
    title: "O Futuro do PLN e Oportunidades",
    description: "Tendências futuras em PLN, IA generativa, modelos multimodais, ética e responsabilidade, oportunidades de carreira e pesquisa.",
    url: "/apresentacao_dia2/futuro_pln.html"
  }
]

// Componente para seção de slides
function SlidesSection({ title, slides, colorClass }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const openSlide = (index) => {
    setCurrentSlide(index)
    setIsViewerOpen(true)
  }

  return (
    <div className="mb-16">
      <h2 className={`text-3xl font-bold text-center mb-8 ${colorClass}`}>{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((slide, index) => (
          <Card 
            key={index} 
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => openSlide(index)}
          >
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                {slide.title}
                <Badge variant="secondary">{index + 1}</Badge>
              </CardTitle>
              <CardDescription>{slide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" className="w-full">
                Ver Slide
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <SlideViewer
        slides={slides}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  )
}

export { SlidesSection, dia1Slides, dia2Slides }

