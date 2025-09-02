import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ArrowDown,
  Code,
  Palette,
  Video,
  Users,
  CheckCircle,
  Star,
  ExternalLink,
  Github,
  Download,
  Calendar,
  Building,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Portfolio</div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors">
                Portfólio
              </Link>
              <Link href="#experience" className="text-foreground hover:text-primary transition-colors">
                Experiência
              </Link>
              <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                Depoimentos
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
              <ThemeToggle />
            </div>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Profissional Multifuncional - Leo da Silva
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-balance">
                  Olá, eu sou <span className="text-primary">Criativo</span> e{" "}
                  <span className="text-secondary">Desenvolvedor</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Transformo ideias em experiências digitais impactantes através de design, desenvolvimento e estratégia
                  digital. Especialista em criar soluções completas que conectam marcas aos seus públicos.
                </p>
              </div>

              {/* Skills Highlight */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                  <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Desenvolvimento</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                  <Palette className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-sm font-medium">Design Gráfico</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                  <Video className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium">Edição de Vídeo</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Consultoria</p>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#portfolio">
                  <Button size="lg" className="text-lg px-8">
                    Ver Portfólio
                  </Button>
                </a>
                <a href="#contact">
                    <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                      Entre em Contacto
                    </Button>
                </a>
                
              </div>
            </div>

            {/* Right Content - Professional Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/professional-portrait-of-a-creative-developer-with.png"
                  alt="Profissional Criativo"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-accent/20 rounded-full blur-lg"></div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <img
                  src="/professional-headshot-of-a-multifunctional-creativ.png"
                  alt="Sobre Mim - Profissional Criativo"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full"></div>
              <div className="absolute top-1/3 -left-8 w-4 h-4 bg-primary rounded-full"></div>
              <div className="absolute bottom-1/3 -right-4 w-6 h-6 bg-secondary rounded-full"></div>
            </div>

            {/* Right Content - About Text */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary">
                  Sobre Mim
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Criando <span className="text-primary">experiências digitais</span> que fazem a diferença
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Com mais de 5 anos de experiência no mercado digital, sou um profissional apaixonado por transformar
                    ideias complexas em soluções visuais e funcionais que realmente conectam com as pessoas.
                  </p>
                  <p>
                    Minha jornada começou no design gráfico, onde desenvolvi um olhar apurado para estética e
                    comunicação visual. Naturalmente evolui para o desenvolvimento web, combinando criatividade com
                    tecnologia para criar experiências digitais completas e impactantes.
                  </p>
                  <p>
                    Hoje, actuo como consultor digital, designer, social media, desenvolvedor, editor de vídeo, ajudando empresas e empreendedores a 
                    construir sua presença online de forma estratégica, desde a concepção da identidade visual até a implementação 
                    de soluções tecnológicas robustas.
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Desenvolvimento
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      React & Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      Node.js & APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      TypeScript
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Palette className="w-5 h-5 text-secondary" />
                    Design & Criação
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      UI/UX Design
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      Identidade Visual
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      Branding
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projectos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">5+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">30+</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.canva.com/design/DAGdZDYd_I0/10rT0MUV-HsY0CaipW_L_g/view?utm_content=DAGdZDYd_I0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfb9b83503b" download="CV_leodasilva.pdf">
                  <Button className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Download CV
                  </Button>
                </a>
                
                <a href="http://wa.me/244936822703">
                  <Button variant="outline" className="bg-transparent">
                    Vamos Conversar
                  </Button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Portfólio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Meus <span className="text-primary">trabalhos</span> e <span className="text-secondary">projectos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Uma seleção dos meus melhores projectos em desenvolvimento, design, vídeo e consultoria digital
            </p>
          </div>

          <Tabs defaultValue="desenvolvimento" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="desenvolvimento" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span className="hidden sm:inline">Desenvolvimento</span>
                <span className="sm:hidden">Dev</span>
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                <span className="hidden sm:inline">Design</span>
                <span className="sm:hidden">Design</span>
              </TabsTrigger>
              <TabsTrigger value="video" className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span className="hidden sm:inline">Vídeo</span>
                <span className="sm:hidden">Vídeo</span>
              </TabsTrigger>
              <TabsTrigger value="consultoria" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Consultoria</span>
                <span className="sm:hidden">Cons</span>
              </TabsTrigger>
            </TabsList>

            {/* Desenvolvimento Web tab content */}
            <TabsContent value="desenvolvimento" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/modern-ecommerce-interface.png"
                      alt="E-commerce Platform"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href="https://orebeshopp.netlify.app/" >
                        <Button size="sm" variant="secondary">
                          <ExternalLink className="w-4 h-4 mr-2"/>
                          Ver Site
                        </Button>
                      </a>
                      <a href="https://github.com/leodasilva-ao/E-commerce.git">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                          <Github className="w-4 h-4 mr-2"/>
                          Código
                        </Button>
                      </a>
                      
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">E-commerce Platform</h3>
                      <Badge variant="secondary">Next.js</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de
                      estoque.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        React
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        TypeScript
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Stripe
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/modern-dashboard-analytics-interface.png"
                      alt="Analytics Dashboard"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Analytics Dashboard</h3>
                      <Badge variant="secondary">React</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Dashboard interativo para análise de dados com gráficos em tempo real e relatórios personalizados.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        D3.js
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Node.js
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        MongoDB
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/mobile-app-interface.png"
                      alt="Mobile App"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver App
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Task Management App</h3>
                      <Badge variant="secondary">React Native</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Aplicativo móvel para gestão de tarefas com sincronização em nuvem e colaboração em equipe.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Expo
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Firebase
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Redux
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Design Gráfico tab content */}
            <TabsContent value="design" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/modern-brand-identity-logo-design.png"
                      alt="Brand Identity"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Identidade Visual TechStart</h3>
                      <Badge variant="secondary">Branding</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Desenvolvimento completo da identidade visual para startup de tecnologia, incluindo logo, paleta
                      de cores e manual de marca.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Logo Design
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Brand Guide
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Stationery
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/social-media-post-designs-instagram.png"
                      alt="Social Media Design"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Social Media Pack</h3>
                      <Badge variant="secondary">Social Media</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Kit completo de templates para redes sociais com mais de 50 layouts para Instagram, Facebook e
                      LinkedIn.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Instagram
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Templates
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Stories
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/modern-website-ui-ux-design-mockup.png"
                      alt="UI/UX Design"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">FinTech App UI</h3>
                      <Badge variant="secondary">UI/UX</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Interface completa para aplicativo financeiro com foco em usabilidade e experiência do usuário.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Figma
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Prototyping
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        User Research
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Edição de Vídeo tab content */}
            <TabsContent value="video" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/corporate-video-production-behind-scenes.png"
                      alt="Corporate Video"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" variant="secondary">
                        <Video className="w-4 h-4 mr-2" />
                        Assistir
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Vídeo Institucional</h3>
                      <Badge variant="secondary">Corporativo</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Produção completa de vídeo institucional para empresa de tecnologia, incluindo roteiro, filmagem e
                      pós-produção.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        After Effects
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Premiere
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Motion Graphics
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/product-launch-trailer-video.png"
                      alt="Product Trailer"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" variant="secondary">
                        <Video className="w-4 h-4 mr-2" />
                        Assistir
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Trailer de Produto</h3>
                      <Badge variant="secondary">Marketing</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Trailer promocional para lançamento de aplicativo mobile com animações 3D e efeitos visuais
                      impactantes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Cinema 4D
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        3D Animation
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Sound Design
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/social-media-reels-instagram-stories.png"
                      alt="Social Media Reels"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" variant="secondary">
                        <Video className="w-4 h-4 mr-2" />
                        Ver Reels
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Reels & Stories</h3>
                      <Badge variant="secondary">Social Media</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Série de reels e stories para marca de moda com transições dinâmicas e trilha sonora
                      personalizada.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Mobile Editing
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Transitions
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Trending
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Consultoria tab content */}
            <TabsContent value="consultoria" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/digital-transformation-business-strategy.png"
                      alt="Digital Transformation"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Transformação Digital</h3>
                      <Badge variant="secondary">Estratégia</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Consultoria completa para modernização de processos empresariais e implementação de soluções
                      digitais.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Process Mapping
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Tech Stack
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ROI Analysis
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/online-presence-social-media-strategy.png"
                      alt="Online Presence"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Presença Online</h3>
                      <Badge variant="secondary">Marketing</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Desenvolvimento de estratégia digital completa para aumentar visibilidade e engajamento online.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        SEO Strategy
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Content Plan
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Analytics
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src="/brand-strategy-workshop-business.png"
                      alt="Brand Strategy"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Estratégia de Marca</h3>
                      <Badge variant="secondary">Branding</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Workshop intensivo para definição de posicionamento, valores e estratégia de comunicação da marca.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Brand Positioning
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Market Research
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Competitor Analysis
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section
            <div className="text-center mt-16">
              <Button size="lg" className="text-lg px-8">
                Ver Todos os Projectos
              </Button>
            </div>
          */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Experiência
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Minha <span className="text-primary">jornada</span> profissional
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Uma trajectória de crescimento constante, sempre buscando inovação e excelência em cada projecto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8">Histórico Profissional</h3>

              {/* Timeline Item 1 */}
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-border"></div>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">Colaborador na CN-IILP</h4>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Building className="w-4 h-4" />
                          <span>Comissão Nacional de Língua Portuguesa - Ministério da Educação | Freelance</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        2025 - Actual
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Trabalhei no desenvolvimento do sistemas e designer do projecto I Encontro 
                      Internacional sobre Lexicologia, Lexicografia e Terminologia em Angola.
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Trabalhei no desenvolvimento do sistemas e designer do projecto Semana da Língua Portuguesa.
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Trabalhei no desenvolvimento do sistemas e designer do evento “O escritor e a sua Época.
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Trabalhei como gestor de projectos, estrategista, assistente administrativo e social media.
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Principais conquistas:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          +20 mentes transformadas digitalmente e presencial
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          Aumento médio de 150% no engajamento online
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          Colaboração em equipe multidisciplinar (designers + devs, Organização e gestão de tempo).
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-border"></div>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">Estágio Profissional</h4>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Building className="w-4 h-4" />
                          <span>Desenvolvedor de Software e Artes gráficas</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        2023-2024
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Projectei sistemas e interfaces para visualização e processamento de grandes volumes de dados, unindo front-end 
                      funcional com design gráfico claro e intuitivo para garantir desempenho eficiente e comunicação visual eficaz.
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Desenvolvi habilidades como:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-accent" />
                          Lógica de programação
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-accent" />
                          Adobe Photoshop, Illustrator, InDesign
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-accent" />
                          Jornada do usuário, wireframes, prototipagem
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-accent" />
                          Líder de equipe
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-8 pb-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-border"></div>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">Designer Gráfico & Editor</h4>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Building className="w-4 h-4" />
                          <span>Creative Studio Pro</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        2019 - 2025
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Criação de identidades visuais completas e produção de conteúdo audiovisual para marcas de
                      diversos segmentos. Especialização em edição de vídeo.
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Principais conquistas:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          +50 identidades visuais criadas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          Designer certificado pelo MED, MINCULT e MESCTI
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          +100 vídeos produzidos
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-muted-foreground rounded-full border-4 border-background shadow-lg"></div>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">Designer Júnior</h4>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Building className="w-4 h-4" />
                          <span>Agência Digital Start</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        2018 - 2019
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Início da carreira profissional focado em design gráfico. Desenvolvimento de
                      habilidades fundamentais e aprendizado das melhores práticas do mercado.
                    </p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Principais conquistas:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          Domínio das ferramentas Adobe
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          +30 projetos gráficos entregues
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          Certificação em UX/UI Design
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Skills & Clients */}
            <div className="space-y-8">
              {/* Skills Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Competências Técnicas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-5 h-5 text-primary" />
                      <h4 className="font-medium">Desenvolvimento</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">React/Next.js</span>
                        <span className="text-xs text-muted-foreground">95%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Node.js</span>
                        <span className="text-xs text-muted-foreground">60%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">TypeScript</span>
                        <span className="text-xs text-muted-foreground">75%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Palette className="w-5 h-5 text-secondary" />
                      <h4 className="font-medium">Design</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">UI/UX Design</span>
                        <span className="text-xs text-muted-foreground">92%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Branding</span>
                        <span className="text-xs text-muted-foreground">88%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Motion Graphics</span>
                        <span className="text-xs text-muted-foreground">20%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Video className="w-5 h-5 text-accent" />
                      <h4 className="font-medium">Audiovisual</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">After Effects</span>
                        <span className="text-xs text-muted-foreground">50%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: "50%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Adobe Premiere</span>
                        <span className="text-xs text-muted-foreground">85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Adobe Photoshop</span>
                        <span className="text-xs text-muted-foreground">95%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-primary" />
                      <h4 className="font-medium">Consultoria</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Estratégia Digital</span>
                        <span className="text-xs text-muted-foreground">75%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Análise de Mercado</span>
                        <span className="text-xs text-muted-foreground">68%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Gestão de Projectos</span>
                        <span className="text-xs text-muted-foreground">92%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Clients Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Principais Clientes</h3>
                <Card className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                        <Building className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-sm font-medium">TechStart Inc.</div>
                      <div className="text-xs text-muted-foreground">Startup</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                        <Building className="w-8 h-8 text-secondary" />
                      </div>
                      <div className="text-sm font-medium">Fashion Brand</div>
                      <div className="text-xs text-muted-foreground">E-commerce</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                        <Building className="w-8 h-8 text-accent" />
                      </div>
                      <div className="text-sm font-medium">FinTech Pro</div>
                      <div className="text-xs text-muted-foreground">Fintech</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                        <Building className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-sm font-medium">Health Plus</div>
                      <div className="text-xs text-muted-foreground">Saúde</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                        <Building className="w-8 h-8 text-secondary" />
                      </div>
                      <div className="text-sm font-medium">EduTech</div>
                      <div className="text-xs text-muted-foreground">Educação</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                        <Building className="w-8 h-8 text-accent" />
                      </div>
                      <div className="text-sm font-medium">Green Energy</div>
                      <div className="text-xs text-muted-foreground">Sustentabilidade</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* CV Download */}
              <div className="text-center">
                <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Download className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Currículo Completo</h4>
                      <p className="text-muted-foreground text-sm mb-6">
                        Baixe meu currículo detalhado com todas as experiências, certificações e projectos realizados.
                      </p>
                      <a href="https://www.canva.com/design/DAGdZDYd_I0/10rT0MUV-HsY0CaipW_L_g/view?utm_content=DAGdZDYd_I0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfb9b83503b" download="CV_leodasilva.pdf">
                        <Button size="lg" className="flex items-center gap-2 mx-auto">
                          <Download className="w-4 h-4" />
                          Download CV (PDF)
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Depoimentos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              O que dizem sobre <span className="text-primary">meu trabalho</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Feedbacks reais de clientes e parceiros que confiaram em meu trabalho para transformar seus negócios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "Trabalhar com ele foi uma experiência transformadora. Não apenas entregou um site incrível, mas
                  também nos ajudou a repensar toda nossa estratégia digital. Os resultados superaram nossas
                  expectativas!"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src="/professional-woman-ceo.png"
                    alt="Maria Silva"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Maria Silva</div>
                    <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "A identidade visual que ele criou para nossa marca foi simplesmente perfeita. Capturou exatamente
                  nossa essência e nos diferenciou completamente no mercado. Profissionalismo e criatividade em cada
                  detalhe."
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src="/professional-marketing-director.png"
                    alt="João Santos"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">João Santos</div>
                    <div className="text-sm text-muted-foreground">Dir. Marketing, Fashion Brand</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "Os vídeos institucionais que produziu para nossa empresa foram um divisor de águas. A qualidade
                  técnica e criativa elevou nossa comunicação a outro patamar. Recomendo sem hesitar!"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src="/professional-woman-founder.png"
                    alt="Ana Costa"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Ana Costa</div>
                    <div className="text-sm text-muted-foreground">Fundadora, FinTech Pro</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Testimonial 4 */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "A consultoria digital foi fundamental para nossa transformação. Nos guiou por todo o processo com
                  expertise e paciência. Hoje somos uma empresa completamente digitalizada e mais eficiente."
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src="/professional-man-cto.png"
                    alt="Carlos Oliveira"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Carlos Oliveira</div>
                    <div className="text-sm text-muted-foreground">CTO, Health Plus</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Testimonial 5 */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "O aplicativo que desenvolveu para nossa plataforma educacional superou todas as expectativas.
                  Interface intuitiva, performance excelente e suporte contínuo. Parceria de longo prazo garantida!"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src="/professional-woman-education-director.png"
                    alt="Lucia Ferreira"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Lucia Ferreira</div>
                    <div className="text-sm text-muted-foreground">Diretora, EduTech</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Testimonial 6 */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "Sua visão estratégica para sustentabilidade digital nos ajudou a posicionar nossa marca como líder no
                  setor. Combinação perfeita de consciência ambiental e inovação tecnológica."
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src="/professional-man-sustainability-manager.png"
                    alt="Roberto Lima"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Roberto Lima</div>
                    <div className="text-sm text-muted-foreground">Gerente, Green Energy</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">88%</div>
              <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">20</div>
              <div className="text-sm text-muted-foreground">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Quer ser o próximo a ter sucesso?</h3>
                <p className="text-muted-foreground">
                  Vamos conversar sobre como posso ajudar a transformar seu negócio digitalmente
                </p>
                <a href="http://wa.me/244936822703">
                  <Button size="lg" className="text-lg px-8">
                    Iniciar Projecto
                  </Button>
                </a>
                
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-primary border-primary">
              Entre em Contacto
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Vamos <span className="text-primary">conversar</span> sobre seu projecto
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Pronto para transformar suas ideias em realidade digital? Entre em contacto e vamos criar algo incrível
              juntos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Envie sua mensagem</h3>

                <Card className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Nome completo *
                        </Label>
                        <Input id="name" name="name" placeholder="Seu nome" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Assunto *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Sobre o que você gostaria de conversar?"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Conte-me mais sobre seu projeto, objetivos e como posso ajudar..."
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg h-12">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Respondo todas as mensagens em até 24 horas úteis
                    </p>
                  </form>
                </Card>
              </div>

              {/* Quick Contact Options */}
              <div>
                <h4 className="font-semibold mb-4">Outras formas de contacto</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">WhatsApp</div>
                        <div className="text-xs text-muted-foreground">Resposta rápida</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">E-mail</div>
                        <div className="text-xs text-muted-foreground">leodasilva.geral.ao@gmail.com</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Informações de contacto</h3>

                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">E-mail</h4>
                        <p className="text-muted-foreground">leodasilva.geral.ao@gmail.com</p>
                        <p className="text-sm text-muted-foreground mt-1">Respondo em até 24h úteis</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">WhatsApp</h4>
                        <p className="text-muted-foreground">+244 936-822-703</p>
                        <p className="text-sm text-muted-foreground mt-1">Seg-Sex, 9h às 18h</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Localização</h4>
                        <p className="text-muted-foreground">Luanda, Viana, Vila Sede - Angola</p>
                        <p className="text-sm text-muted-foreground mt-1">Atendimento remoto e presencial</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold mb-4">Redes sociais</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-blue-500/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">LinkedIn</div>
                        <div className="text-xs text-muted-foreground">Conecte-se</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-pink-500/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                        <Instagram className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Instagram</div>
                        <div className="text-xs text-muted-foreground">@leodasilva.ao</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-blue-400/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-400/10 rounded-lg flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                        <Facebook className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Facebook</div>
                        <div className="text-xs text-muted-foreground">@leodasilva.ao</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-gray-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-800/10 rounded-lg flex items-center justify-center group-hover:bg-gray-800/20 transition-colors">
                        <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">GitHub</div>
                        <div className="text-xs text-muted-foreground">Projetos</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Availability Status */}
              <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                      Disponível para novos projectos
                    </h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Atualmente aceitando projectos para início. Entre em contato para discutirmos seu
                      projecto!
                    </p>
                  </div>
                </div>
              </Card>

              {/* FAQ */}
              <div>
                <h4 className="font-semibold mb-4">Perguntas frequentes</h4>
                <div className="space-y-3">
                  <Card className="p-4">
                    <h5 className="font-medium text-sm mb-2">Qual o prazo médio dos projectos?</h5>
                    <p className="text-xs text-muted-foreground">
                      Varia de 2-8 semanas dependendo da complexidade. Discutimos prazos detalhados na primeira
                      conversa.
                    </p>
                  </Card>

                  <Card className="p-4">
                    <h5 className="font-medium text-sm mb-2">Trabalha com projectos internacionais?</h5>
                    <p className="text-xs text-muted-foreground">
                      Sim! Tenho experiência com clientes do Brasil, EUA e Europa. Comunicação em português e inglês.
                    </p>
                  </Card>

                  <Card className="p-4">
                    <h5 className="font-medium text-sm mb-2">Oferece suporte pós-entrega?</h5>
                    <p className="text-xs text-muted-foreground">
                      Todos os projectos incluem suporte gratuito. Planos de manutenção disponíveis.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold">Pronto para começar seu projecto?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Seja um site, aplicativo, identidade visual ou estratégia digital completa - vamos transformar sua
                    visão em realidade. O primeiro orçamento é gratuito!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="http://wa.me/244936822703">
                    <Button size="lg" className="text-lg px-8 h-12">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chamar no WhatsApp
                    </Button>
                  </a>
                  <a href="mailto:leodasilva.gera.ao@gmail.com?subject=Contacto%20do%20Portfólio&body=Olá,%20tenho%20interesse%20nos%20seus%20serviços.">
                    <Button variant="outline" size="lg" className="text-lg px-8 h-12 bg-transparent">
                      <Mail className="w-5 h-5 mr-2" />
                      Enviar E-mail
                    </Button>
                  </a>
                  
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Orçamento gratuito</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Resposta em 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Sem compromisso</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-bold text-2xl mb-4 text-foreground">Portfolio</div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Transformando ideias em experiências digitais impactantes através de design, desenvolvimento e
                estratégia digital.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Twitter className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                  <Github className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Serviços</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Design Gráfico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Edição de Vídeo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Consultoria Digital
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>leodasilva@gmail.com</li>
                <li>+244 936-822-703</li>
                <li>Luanda, Viana, Vila Sede - Angola</li>
                <li>Segunda a Sexta, 9h-18h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Leo da Silva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
