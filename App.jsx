import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BookOpen, Brain, Code, Users, ChevronRight, Clock, Target, Award } from 'lucide-react'
import { SlidesSection, dia1Slides, dia2Slides } from '@/components/SlidesSection.jsx'
import { ProjectsSection } from '@/components/ProjectsSection.jsx'
import { ResourcesSection } from '@/components/ResourcesSection.jsx'
import './App.css'

// Componente Header
function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Mineração de Texto e PLN
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">
            Curso de Pós-Graduação em Inteligência Artificial
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              14 horas
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              2 dias intensivos
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              4 projetos práticos
            </Badge>
          </div>
        </div>
      </div>
    </header>
  )
}

// Componente de Navegação
function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-8 py-4">
          <button 
            onClick={() => scrollToSection('dia1')} 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Dia 1 - Fundamentos
          </button>
          <button 
            onClick={() => scrollToSection('dia2')} 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Brain className="w-5 h-5 mr-2" />
            Dia 2 - Modelos Avançados
          </button>
          <button 
            onClick={() => scrollToSection('projetos')} 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Code className="w-5 h-5 mr-2" />
            Projetos Práticos
          </button>
          <button 
            onClick={() => scrollToSection('recursos')} 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Users className="w-5 h-5 mr-2" />
            Recursos
          </button>
        </div>
      </div>
    </nav>
  )
}

// Componente Overview
function Overview() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visão Geral do Curso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um curso abrangente que combina teoria sólida com aplicação prática, 
            cobrindo desde fundamentos até as mais recentes inovações em PLN e IA generativa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <BookOpen className="w-6 h-6 mr-3" />
                Dia 1 - Fundamentos
              </CardTitle>
              <CardDescription>
                Base sólida em processamento de linguagem natural e mineração de texto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Introdução ao PLN e histórico da IA</li>
                <li>• Pré-processamento e representação de texto</li>
                <li>• Bag-of-Words e TF-IDF</li>
                <li>• Machine Learning para texto</li>
                <li>• Classificação e agrupamento</li>
              </ul>
              <Button 
                className="mt-4 w-full" 
                variant="outline"
                onClick={() => scrollToSection('dia1')}
              >
                Ver Slides do Dia 1
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-800">
                <Brain className="w-6 h-6 mr-3" />
                Dia 2 - Modelos Avançados
              </CardTitle>
              <CardDescription>
                Técnicas modernas e estado da arte em PLN
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Word Embeddings e Transformers</li>
                <li>• BERT e modelos de linguagem</li>
                <li>• Análise de sentimentos e NER</li>
                <li>• Hugging Face e democratização da IA</li>
                <li>• Futuro do PLN e oportunidades</li>
              </ul>
              <Button 
                className="mt-4 w-full" 
                variant="outline"
                onClick={() => scrollToSection('dia2')}
              >
                Ver Slides do Dia 2
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800">
              <Code className="w-6 h-6 mr-3" />
              Projetos Práticos
            </CardTitle>
            <CardDescription>
              4 projetos hands-on para aplicar os conhecimentos adquiridos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">1. Análise de Sentimentos</h4>
                <p className="text-sm text-gray-600">Sistema completo para e-commerce</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">2. Extração de Informações</h4>
                <p className="text-sm text-gray-600">Documentos jurídicos brasileiros</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">3. Chatbot Inteligente</h4>
                <p className="text-sm text-gray-600">RAG para atendimento ao cliente</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">4. Análise de Notícias</h4>
                <p className="text-sm text-gray-600">Resumo e detecção de tendências</p>
              </div>
            </div>
            <Button 
              className="mt-6 w-full bg-orange-600 hover:bg-orange-700"
              onClick={() => scrollToSection('projetos')}
            >
              Explorar Projetos
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Componente de Seções Detalhadas
function DetailedSections() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Dia 1 */}
        <div id="dia1">
          <SlidesSection 
            title="Dia 1 - Fundamentos" 
            slides={dia1Slides} 
            colorClass="text-blue-800" 
          />
        </div>

        {/* Dia 2 */}
        <div id="dia2">
          <SlidesSection 
            title="Dia 2 - Modelos Avançados" 
            slides={dia2Slides} 
            colorClass="text-purple-800" 
          />
        </div>

        {/* Projetos */}
        <div id="projetos">
          <ProjectsSection />
        </div>

        {/* Recursos */}
        <div id="recursos">
          <ResourcesSection />
        </div>
      </div>
    </section>
  )
}

// Componente Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Curso de PLN e Mineração de Texto</h3>
          <p className="text-gray-400 mb-6">
            Desenvolvido para pós-graduação em Inteligência Artificial
          </p>
          <div className="flex justify-center space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              Sobre o Curso
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Contato
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              Recursos
            </button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              © 2024 Curso de PLN. Desenvolvido com React e Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Componente principal App
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Overview />
      <DetailedSections />
      <Footer />
    </div>
  )
}

export default App

