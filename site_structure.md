# Estrutura e Design do Site do Curso de PLN

## Visão Geral do Site

O site será uma plataforma educacional completa para o curso de pós-graduação em Processamento de Linguagem Natural e Mineração de Texto. A estrutura foi projetada para ser intuitiva, profissional e academicamente rigorosa, proporcionando uma experiência de aprendizado envolvente.

## Arquitetura de Informação

### Página Principal (Home)
- Hero section com título do curso e descrição
- Visão geral dos dois dias de aula
- Navegação clara para todas as seções
- Informações sobre o instrutor e objetivos

### Seção Dia 1 - Fundamentos
- Lista interativa dos 10 slides
- Navegação sequencial entre slides
- Barra de progresso
- Notas e recursos adicionais

### Seção Dia 2 - Modelos Avançados  
- Lista interativa dos 10 slides
- Navegação sequencial entre slides
- Barra de progresso
- Notas e recursos adicionais

### Seção Projetos Práticos
- Galeria dos 4 projetos
- Detalhes expandíveis para cada projeto
- Cronogramas e entregáveis
- Recursos e links úteis

### Seção Recursos
- Análise do plano de aula
- Divisão do conteúdo
- Bibliografia e referências
- Links para ferramentas

## Design System

### Paleta de Cores
- Primária: #1e40af (azul profundo)
- Secundária: #3b82f6 (azul médio)
- Accent: #f59e0b (laranja)
- Neutros: #f8fafc, #e2e8f0, #64748b, #1e293b
- Sucesso: #10b981
- Alerta: #ef4444

### Tipografia
- Headings: Inter (bold, semi-bold)
- Body: Inter (regular, medium)
- Code: JetBrains Mono

### Componentes
- Cards com hover effects
- Botões com transições suaves
- Navegação sticky
- Modais para conteúdo expandido
- Tooltips informativos
- Progress bars animadas

## Estrutura de Navegação

```
Home
├── Dia 1 - Fundamentos
│   ├── Slide 1: Introdução ao PLN
│   ├── Slide 2: Histórico da IA
│   ├── ...
│   └── Slide 10: Exercícios Práticos
├── Dia 2 - Modelos Avançados
│   ├── Slide 1: Word Embeddings
│   ├── Slide 2: Transformers
│   ├── ...
│   └── Slide 10: Futuro do PLN
├── Projetos Práticos
│   ├── Projeto 1: Análise de Sentimentos
│   ├── Projeto 2: Extração de Informações
│   ├── Projeto 3: Chatbot RAG
│   └── Projeto 4: Análise de Notícias
└── Recursos
    ├── Análise do Plano
    ├── Cronograma
    └── Bibliografia
```

## Funcionalidades Interativas

### Navegação de Slides
- Visualização em tela cheia
- Navegação por teclado (setas)
- Índice lateral com miniatura
- Busca por conteúdo
- Marcadores e favoritos

### Projetos
- Cards expansíveis
- Filtros por complexidade/tema
- Timeline interativa
- Recursos downloadáveis
- Formulário de submissão

### Recursos Adicionais
- Glossário de termos
- Calculadora de cronograma
- Quiz interativo
- Fórum de discussão (simulado)

## Responsividade

### Desktop (1200px+)
- Layout em grid de 3 colunas
- Sidebar fixa com navegação
- Conteúdo principal centralizado
- Área de recursos lateral

### Tablet (768px - 1199px)
- Layout em 2 colunas
- Navegação colapsável
- Cards redimensionados
- Texto otimizado

### Mobile (< 768px)
- Layout single column
- Menu hamburger
- Cards empilhados
- Navegação por swipe

## Performance e Acessibilidade

### Performance
- Lazy loading de imagens
- Minificação de CSS/JS
- Compressão de assets
- Cache estratégico

### Acessibilidade
- Contraste adequado (WCAG AA)
- Navegação por teclado
- Screen reader friendly
- Alt text em imagens
- Foco visível

## Tecnologias

### Frontend
- HTML5 semântico
- CSS3 com Flexbox/Grid
- JavaScript ES6+
- Tailwind CSS para styling
- Bibliotecas: AOS (animações), Prism (syntax highlighting)

### Assets
- Ícones: Heroicons/Feather
- Fontes: Google Fonts (Inter, JetBrains Mono)
- Imagens: WebP otimizadas
- SVG para ilustrações

## Estrutura de Arquivos

```
site/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── slides.css
│   ├── js/
│   │   ├── main.js
│   │   ├── slides.js
│   │   └── projects.js
│   ├── images/
│   │   ├── hero/
│   │   ├── slides/
│   │   └── projects/
│   └── fonts/
├── dia1/
│   ├── index.html
│   └── slides/
├── dia2/
│   ├── index.html
│   └── slides/
├── projetos/
│   └── index.html
└── recursos/
    └── index.html
```

