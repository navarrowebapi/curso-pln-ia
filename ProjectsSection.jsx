import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Clock, Target, Users, Code, Database, Brain, TrendingUp } from 'lucide-react'

// Dados dos projetos práticos
const projetos = [
  {
    id: 1,
    title: "Sistema de Análise de Sentimentos para E-commerce",
    description: "Desenvolvimento completo de um sistema de análise de sentimentos para reviews de produtos de e-commerce, comparando diferentes abordagens desde métodos tradicionais baseados em léxico até modelos modernos de deep learning.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-blue-500",
    tech: ["Python", "BERT", "Streamlit", "scikit-learn", "NLTK", "Pandas"],
    duration: "2 semanas",
    difficulty: "Intermediário",
    objectives: [
      "Compreender profundamente as nuances da análise de sentimentos",
      "Desenvolver habilidades em pré-processamento de texto",
      "Implementar e comparar diferentes algoritmos de ML",
      "Criar uma solução que possa ser implementada em produção"
    ],
    phases: [
      {
        title: "Coleta e Preparação de Dados",
        duration: "Dias 1-3",
        description: "Construção de um dataset robusto e representativo com reviews de diferentes categorias de produtos. Implementação de pipelines de validação e limpeza de dados."
      },
      {
        title: "Análise Exploratória e Pré-processamento", 
        duration: "Dias 4-5",
        description: "Análise de padrões nos dados, implementação de tokenização avançada, normalização específica para o contexto brasileiro."
      },
      {
        title: "Modelos Baseline",
        duration: "Dias 6-8", 
        description: "Implementação de abordagens lexicais, ML tradicional e ensemble methods para estabelecer linha de base."
      },
      {
        title: "Modelos Avançados com Deep Learning",
        duration: "Dias 9-11",
        description: "Fine-tuning de modelos BERT, implementação de análise de aspectos e otimização de performance."
      },
      {
        title: "Avaliação e Otimização",
        duration: "Dias 12-13",
        description: "Avaliação multidimensional, análise de erros e testes de robustez em diferentes cenários."
      },
      {
        title: "Deploy e Interface",
        duration: "Dia 14",
        description: "Desenvolvimento de interface web com Streamlit e demonstração do sistema completo."
      }
    ],
    deliverables: [
      "Relatório técnico completo com análise de resultados",
      "Código fonte documentado com testes unitários",
      "Dashboard interativo para demonstração",
      "Apresentação executiva com insights de negócio"
    ],
    research: "Investigação de questões específicas como impacto de regionalismos brasileiros, eficácia de diferentes estratégias de pré-processamento e comparação de modelos multilinguais versus específicos para português."
  },
  {
    id: 2,
    title: "Sistema de Extração de Informações de Documentos Jurídicos",
    description: "Desenvolvimento de um sistema de extração de informações estruturadas de documentos jurídicos brasileiros, utilizando técnicas de Named Entity Recognition (NER) e extração de relações para automatizar a análise de contratos, petições e decisões judiciais.",
    icon: <Database className="w-6 h-6" />,
    color: "bg-green-500",
    tech: ["spaCy", "Transformers", "Flask", "PostgreSQL", "OCR", "PDF2Text"],
    duration: "2 semanas",
    difficulty: "Avançado",
    objectives: [
      "Desenvolver competências avançadas em NER e extração de relações",
      "Trabalhar com dados sensíveis e estruturados",
      "Implementar pipelines de processamento robustos",
      "Criar interfaces para usuários não-técnicos"
    ],
    phases: [
      {
        title: "Coleta e Curadoria de Dados",
        duration: "Dias 1-3",
        description: "Trabalho com documentos públicos, conversão de PDFs, implementação de OCR e desenvolvimento de guidelines de anotação específicos para o domínio jurídico."
      },
      {
        title: "Desenvolvimento de Taxonomia e Ontologia",
        duration: "Dias 4-5",
        description: "Criação de taxonomia específica para o domínio jurídico brasileiro, mapeamento de entidades e relações, validação com especialistas."
      },
      {
        title: "Implementação de Modelos de NER",
        duration: "Dias 6-8",
        description: "Desenvolvimento de abordagens baseadas em regras, modelos estatísticos, deep learning e sistemas híbridos."
      },
      {
        title: "Extração de Relações e Estrutura Documental",
        duration: "Dias 9-10",
        description: "Implementação de análise de dependências, modelos de atenção e extração de estrutura hierárquica de documentos."
      },
      {
        title: "Interface e Visualização",
        duration: "Dias 11-12",
        description: "Desenvolvimento de interface web, dashboard de análise, editor de anotações e funcionalidades de exportação."
      },
      {
        title: "Validação e Testes",
        duration: "Dias 13-14",
        description: "Validação com casos reais, análise de performance detalhada e testes de usabilidade com usuários do setor jurídico."
      }
    ],
    deliverables: [
      "Sistema funcional para processamento de documentos jurídicos",
      "Dataset anotado de alta qualidade",
      "Relatório de pesquisa com análise comparativa",
      "Guia de implementação técnica"
    ],
    research: "Investigação de adaptação de modelos para terminologia jurídica, técnicas de anonimização automática, métodos de validação em domínios de alta precisão e comparação entre modelos generalistas e especializados."
  },
  {
    id: 3,
    title: "Chatbot Inteligente para Atendimento ao Cliente com RAG",
    description: "Desenvolvimento de um chatbot avançado que utiliza Retrieval-Augmented Generation (RAG) para fornecer respostas precisas e contextualizadas, combinando técnicas de recuperação de informação com modelos de linguagem generativos.",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-500",
    tech: ["LangChain", "Pinecone", "OpenAI", "React", "FastAPI", "Streamlit"],
    duration: "2 semanas", 
    difficulty: "Avançado",
    objectives: [
      "Dominar arquiteturas de sistemas conversacionais modernos",
      "Integrar modelos de linguagem com bases de conhecimento",
      "Implementar técnicas de recuperação semântica",
      "Desenvolver experiências conversacionais naturais"
    ],
    phases: [
      {
        title: "Arquitetura e Planejamento",
        duration: "Dias 1-2",
        description: "Design de arquitetura modular, seleção de tecnologias (LangChain, Pinecone, Streamlit) e definição detalhada de casos de uso."
      },
      {
        title: "Construção da Base de Conhecimento",
        duration: "Dias 3-5",
        description: "Agregação de informações, processamento e estruturação, criação de embeddings e implementação de indexação vetorial."
      },
      {
        title: "Sistema de Recuperação",
        duration: "Dias 6-7",
        description: "Implementação de busca semântica, algoritmos de reranking e técnicas de fusão de resultados."
      },
      {
        title: "Geração de Respostas",
        duration: "Dias 8-10",
        description: "Integração com LLMs, controle de qualidade, detecção de alucinações e personalização de respostas."
      },
      {
        title: "Gerenciamento Conversacional",
        duration: "Dias 11-12",
        description: "Implementação de contexto multi-turno, detecção de intenções e escalação inteligente."
      },
      {
        title: "Interface e Avaliação",
        duration: "Dias 13-14",
        description: "Desenvolvimento de interface conversacional, implementação de métricas e configuração de testes A/B."
      }
    ],
    deliverables: [
      "Sistema RAG funcional com interface web e API",
      "Base de conhecimento estruturada e indexada",
      "Framework de avaliação com métricas específicas",
      "Documentação técnica completa"
    ],
    research: "Investigação de otimização de estratégias de chunking, técnicas de few-shot learning, métodos de avaliação automática para sistemas RAG e impacto de diferentes modelos de embedding."
  },
  {
    id: 4,
    title: "Sistema de Resumo Automático e Análise de Tendências em Notícias",
    description: "Sistema abrangente que integra múltiplas técnicas de PLN para monitoramento, resumo e análise de tendências em notícias, coletando automaticamente artigos de múltiplas fontes e identificando tendências emergentes.",
    icon: <Code className="w-6 h-6" />,
    color: "bg-orange-500",
    tech: ["BeautifulSoup", "Transformers", "D3.js", "Docker", "Redis", "PostgreSQL"],
    duration: "2 semanas",
    difficulty: "Especialista",
    objectives: [
      "Integrar múltiplas técnicas avançadas de PLN",
      "Trabalhar com dados em tempo real",
      "Implementar arquiteturas distribuídas",
      "Desenvolver sistemas de produção completos"
    ],
    phases: [
      {
        title: "Arquitetura de Sistema Distribuído",
        duration: "Dias 1-2",
        description: "Design de microserviços, implementação de pipelines ETL e configuração de infraestrutura de armazenamento."
      },
      {
        title: "Sistema de Coleta Inteligente",
        duration: "Dias 3-4",
        description: "Web scraping ético, integração com APIs, detecção de duplicatas e classificação de fontes."
      },
      {
        title: "Processamento e Enriquecimento",
        duration: "Dias 5-7",
        description: "Pré-processamento avançado, análise de entidades, classificação temática e análise de sentimento."
      },
      {
        title: "Sumarização Inteligente",
        duration: "Dias 8-9",
        description: "Implementação de sumarização extrativa e abstrata, técnicas multi-documento e personalização de resumos."
      },
      {
        title: "Análise de Tendências e Detecção de Eventos",
        duration: "Dias 10-11",
        description: "Modelagem temporal, detecção de eventos emergentes, análise de influência e predição de tendências."
      },
      {
        title: "Visualização e Interface",
        duration: "Dias 12-13",
        description: "Dashboard interativo, visualizações temporais, mapas de calor e sistema de alertas personalizados."
      },
      {
        title: "Deploy e Monitoramento",
        duration: "Dia 14",
        description: "Containerização com Docker, implementação de monitoramento e testes de carga."
      }
    ],
    deliverables: [
      "Sistema completo em produção processando notícias em tempo real",
      "API documentada para acesso programático",
      "Relatório de pesquisa com contribuições originais",
      "Apresentação executiva e código fonte completo"
    ],
    research: "Pesquisa original em detecção precoce de eventos, métodos de avaliação de qualidade para resumos automáticos, algoritmos de ranking e técnicas de mitigação de viés."
  }
]

// Componente para exibir detalhes do projeto
function ProjectDetails({ project }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <div className={`${project.color} text-white p-3 rounded-lg mr-4`}>
          {project.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="phases">Fases</TabsTrigger>
          <TabsTrigger value="deliverables">Entregáveis</TabsTrigger>
          <TabsTrigger value="research">Pesquisa</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Duração
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600">{project.duration}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Dificuldade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {project.difficulty}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Modalidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Individual/Grupo</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tecnologias Utilizadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objetivos de Aprendizagem</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {objective}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="phases" className="space-y-4">
          {project.phases.map((phase, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{phase.title}</span>
                  <Badge variant="secondary">{phase.duration}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="deliverables" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Entregáveis do Projeto</CardTitle>
              <CardDescription>
                Produtos finais esperados ao término do projeto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">✓</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Componente de Pesquisa</CardTitle>
              <CardDescription>
                Questões de pesquisa e investigação científica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{project.research}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Componente principal para seção de projetos
function ProjectsSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-800">Projetos Práticos</h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Quatro projetos hands-on cuidadosamente desenvolvidos para aplicar os conhecimentos adquiridos 
        em problemas reais e relevantes, com progressão de complexidade e componentes de pesquisa.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projetos.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <div className={`${project.color} text-white p-2 rounded-lg mr-3`}>
                  {project.icon}
                </div>
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm">
                {project.description.substring(0, 150)}...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 4).map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 4 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.tech.length - 4}
                  </Badge>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Duração:</span> {project.duration}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">Ver Detalhes</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Projeto {project.id}</DialogTitle>
                      <DialogDescription>
                        Detalhes completos do projeto prático
                      </DialogDescription>
                    </DialogHeader>
                    <ProjectDetails project={project} />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { ProjectsSection }

