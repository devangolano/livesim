"use client"

import { useState, useRef, useEffect } from "react"
import CountUp from "react-countup"
import {
  FaChevronDown,
  FaCalendarAlt,
  FaPills,
  FaMoneyBillWave,
  FaUsers,
  FaMicrochip,
  FaGraduationCap,
  FaLandmark,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaVideo,
  FaLaptop,
  FaTrophy,
  FaHandHoldingUsd,
  FaStore,
  FaGlobe,
  FaVoteYea,
  FaUsers as FaTeam,
  FaCogs,
  FaDesktop,
  FaShoppingCart,
  FaBullhorn,
  FaHeadset,
} from "react-icons/fa"

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <HeroSection />
      {/* Adicione mais seções aqui conforme necessário */}
    </main>
  )
}

// ==================== NAVBAR COMPONENT ====================
function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeMenu && !isMobileMenuOpen) {
        const clickedElement = event.target as Node
        const isOutsideClick = Object.keys(dropdownRefs.current).every((key) => {
          const ref = dropdownRefs.current[key]
          return ref && !ref.contains(clickedElement)
        })

        if (isOutsideClick) {
          setActiveMenu(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeMenu, isMobileMenuOpen])

  // Handle desktop menu hover
  const handleMouseEnter = (id: string) => {
    setActiveMenu(id)
  }

  // Handle mobile menu toggle
  const toggleMobileMenu = (id: string) => {
    setActiveMenu(activeMenu === id ? null : id)
  }

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={isScrolled ? "/Logo-escura.png" : "/Logo-branco.png"}
                alt="LiveSim"
                className="h-8 transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                ref={(el: HTMLDivElement | null) => {
                  dropdownRefs.current[item.id] = el
                }}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href="#"
                  className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeMenu === item.id
                      ? "bg-blue-500 text-white"
                      : isScrolled
                        ? "text-slate-800 hover:bg-slate-100"
                        : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <FaChevronDown
                      className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                        activeMenu === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeMenu === item.id && (
                  <div className="absolute left-0 mt-1 min-w-[600px] bg-white border border-slate-200 shadow-xl rounded-lg z-50 overflow-hidden">
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {item.submenu?.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="font-semibold text-xs uppercase text-slate-500 mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                              {section.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <a
                                    href="#"
                                    className="flex items-center gap-3 text-slate-600 hover:text-blue-500 transition-colors"
                                  >
                                    <span className="text-lg text-blue-400">{subItem.icon}</span>
                                    <span className="text-sm font-medium">{subItem.label}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium shadow-sm">
              Agendar uma reunião
            </button>
            <button
              className={`px-4 py-2.5 rounded-lg transition-colors duration-200 text-sm font-medium ${
                isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              Entrar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className={`text-2xl ${isScrolled ? "text-slate-800" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white fixed top-20 left-0 right-0 bottom-0 z-50 overflow-y-auto shadow-xl">
          <div className="px-4 py-2">
            {navItems.map((item) => (
              <div key={item.id} className="py-2 border-b border-slate-200">
                <button
                  onClick={() => toggleMobileMenu(item.id)}
                  className="flex items-center justify-between w-full text-left py-2 text-slate-800 hover:text-blue-500 transition-colors"
                >
                  <span className="text-base font-medium">{item.label}</span>
                  {item.hasDropdown && (
                    <FaChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        activeMenu === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.hasDropdown && activeMenu === item.id && (
                  <div className="pl-4 py-2 space-y-4">
                    {item.submenu?.map((section, idx) => (
                      <div key={idx} className="mb-4">
                        <h3 className="font-bold text-sm text-slate-500 py-2">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <a
                                href="#"
                                className="flex items-center gap-2 py-2 text-slate-700 hover:text-blue-500 transition-colors"
                              >
                                <span className="text-blue-400">{subItem.icon}</span>
                                <span>{subItem.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="py-4 space-y-2">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors duration-200 font-medium shadow-sm">
                Agendar uma reunião
              </button>
              <button className="w-full border border-slate-300 text-slate-700 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-slate-100">
                Entrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ==================== HERO SECTION COMPONENT ====================
function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const rotatingTexts = ["EVENTOS AO VIVO", "EVENTOS VIRTUAIS", "EVENTOS HÍBRIDOS"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/95 z-10"></div>
        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/048-GDU-MET-Blog-Meet-Animation-JH_1_wB6nFbK.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-20 pt-28 md:pt-32 px-4"> {/* Adjusted padding top */}
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full">
            <span className="text-white/90 text-xs md:text-sm font-medium">Plataforma completa para gerenciamento de eventos</span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Software de Gestão
            <br />
            de Eventos para
          </h1>

          <div className="h-16 md:h-20 flex items-center justify-center">
            <span
              key={rotatingTexts[currentTextIndex]}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 font-bold animate-fadeInOut mt-2 md:mt-4 text-3xl md:text-4xl lg:text-5xl"
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </div>

          <p className="mt-4 md:mt-6 text-white/80 max-w-2xl mx-auto text-base md:text-lg">
            Simplifique o planejamento, aumente o engajamento e maximize o ROI dos seus eventos com nossa plataforma
            completa.
          </p>

          <div className="max-w-xl mx-auto mt-6 md:mt-10">
            <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-center">
              <input
                type="email"
                placeholder="Digite seu email profissional"
                className="flex-grow p-4 rounded-xl md:rounded-l-full bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none  focus:ring-none focus:border-transparent placeholder-white/50 shadow-lg"
              />
              <button className="bg-blue-500 rounded-lg md:rounded-r-full hover:bg-blue-600 text-white px-8 py-4 transition-colors duration-200 font-medium whitespace-nowrap shadow-lg hover:shadow-blue-500/20">
                Agendar uma reunião
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 md:mt-20">
            <div className="text-center bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                <CountUp end={11} duration={2.5} />
                <span className="text-4xl">M</span>
              </div>
              <div className="text-sm mt-2 text-white/80 font-medium">Eventos Criados</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                <CountUp end={67} duration={2.5} />
                <span className="text-4xl">M</span>
              </div>
              <div className="text-sm mt-2 text-white/80 font-medium">Inscrições</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                <CountUp end={182} duration={2.5} />
              </div>
              <div className="text-sm mt-2 text-white/80 font-medium">Países alcançados</div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <div className="flex -space-x-2">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <span className="text-white/80 text-sm">Mais de 5.000 empresas confiam em nós</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ==================== NAVIGATION DATA ====================
const navItems = [
  {
    id: "solucoes",
    label: "Soluções",
    hasDropdown: true,
    submenu: [
      {
        title: "POR INDÚSTRIA",
        items: [
          { icon: <FaPills />, label: "Farmacêutica" },
          { icon: <FaMoneyBillWave />, label: "Serviços Financeiros" },
          { icon: <FaUsers />, label: "Associações Profissionais" },
          { icon: <FaUsers />, label: "Governo" },
          { icon: <FaMicrochip />, label: "Tecnologia" },
          { icon: <FaGraduationCap />, label: "Educação" },
          { icon: <FaLandmark />, label: "Conselho Tribal" },
          { icon: <FaBriefcase />, label: "Agências de Eventos" },
          { icon: <FaBuilding />, label: "Centro de Experiências" },
          { icon: <FaChartLine />, label: "Relações com Investidores" },
        ],
      },
      {
        title: "POR TIPO DE EVENTO",
        items: [
          { icon: <FaCalendarAlt />, label: "Conferências" },
          { icon: <FaUsers />, label: "Eventos Presenciais" },
          { icon: <FaVideo />, label: "Eventos Virtuais e Híbridos" },
          { icon: <FaLaptop />, label: "Webinars" },
          { icon: <FaTrophy />, label: "Premiações" },
          { icon: <FaHandHoldingUsd />, label: "Arrecadação de Fundos" },
          { icon: <FaStore />, label: "Feiras Comerciais" },
          { icon: <FaGlobe />, label: "EventHub" },
          { icon: <FaVoteYea />, label: "Campanhas Políticas" },
          { icon: <FaTeam />, label: "Reuniões de Equipe" },
        ],
      },
      {
        title: "POR FUNÇÃO",
        items: [
          { icon: <FaCogs />, label: "Produção de Eventos" },
          { icon: <FaDesktop />, label: "Gestão de TI" },
          { icon: <FaShoppingCart />, label: "Gestão de Vendas" },
          { icon: <FaBullhorn />, label: "Gestão de Marketing" },
          { icon: <FaHeadset />, label: "Experiência do Cliente (CCXP)" },
        ],
      },
    ],
  },
  {
    id: "produto",
    label: "Produto",
    hasDropdown: true,
    submenu: [
      {
        title: "PRODUTOS",
        items: [
          { icon: <FaCalendarAlt />, label: "Gestão de Eventos" },
          { icon: <FaVideo />, label: "Plataforma Virtual" },
          { icon: <FaUsers />, label: "Gestão de Comunidade" },
        ],
      },
    ],
  },
  {
    id: "recursos",
    label: "Recursos",
    hasDropdown: true,
    submenu: [
      {
        title: "RECURSOS",
        items: [
          { icon: <FaGraduationCap />, label: "Blog" },
          { icon: <FaVideo />, label: "Vídeos" },
          { icon: <FaCalendarAlt />, label: "Webinars" },
        ],
      },
    ],
  },
  {
    id: "empresa",
    label: "Empresa",
    hasDropdown: true,
    submenu: [
      {
        title: "SOBRE NÓS",
        items: [
          { icon: <FaBuilding />, label: "Sobre a LiveSim" },
          { icon: <FaUsers />, label: "Equipe" },
          { icon: <FaBriefcase />, label: "Carreiras" },
        ],
      },
    ],
  },
  { id: "precos", label: "Preços", hasDropdown: false },
]

export default App

