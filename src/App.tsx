"use client"

import { useState } from "react"
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

function InEventNavbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            { icon: <FaBuilding />, label: "Sobre a InEvent" },
            { icon: <FaUsers />, label: "Equipe" },
            { icon: <FaBriefcase />, label: "Carreiras" },
          ],
        },
      ],
    },
    { id: "precos", label: "Preços", hasDropdown: false },
  ]

  // Update the handleMouseEnter function to toggle menus
  const handleMouseEnter = (id: string) => {
    setActiveMenu(activeMenu === id ? null : id)
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  return (
    <div className="w-full bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="text-white font-bold text-2xl">
                <span className="text-[#38b6ff]">In</span>Event<sup className="text-xs">®</sup>
              </div>
            </a>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                    activeMenu === item.id ? "bg-white text-[#333333]" : "hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <FaChevronDown className="ml-1 h-3 w-3" />}
                </a>

                {/* Submenu */}
                {item.hasDropdown && activeMenu === item.id && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-max min-w-[800px] bg-white text-[#333333] shadow-lg rounded-md z-50 grid grid-cols-3 p-6 gap-6">
                    {item.submenu?.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        <h3 className="font-bold text-sm text-gray-500">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <a href="#" className="flex items-center gap-2 hover:text-[#38b6ff] transition-colors">
                                <span className="text-gray-500">{subItem.icon}</span>
                                <span>{subItem.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Coluna adicional para "Explore InEvent now" */}
                    {item.id === "solucoes" && (
                      <div className="space-y-4">
                        <h3 className="font-bold text-[#38b6ff]">Explore InEvent agora</h3>
                        <ul className="space-y-3">
                          <li>
                            <a href="#" className="flex items-center gap-1 text-[#38b6ff] hover:underline">
                              Agendar uma reunião <FaChevronDown className="rotate-270 h-3 w-3" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center gap-1 text-[#38b6ff] hover:underline">
                              Envie sua RFP <FaChevronDown className="rotate-270 h-3 w-3" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center gap-1 text-[#38b6ff] hover:underline">
                              Torne-se um Parceiro Certificado <FaChevronDown className="rotate-270 h-3 w-3" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center gap-1 text-[#38b6ff] hover:underline">
                              Junte-se à Comunidade Eventprof <FaChevronDown className="rotate-270 h-3 w-3" />
                            </a>
                          </li>
                        </ul>
                        <div className="mt-4">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aFRvKXkSswnug3TSlAApB5pXDykllN.png"
                            alt="InEvent Support"
                            className="w-full max-w-[200px] rounded-md"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botões CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#38b6ff] hover:bg-[#2a9fe0] text-white px-4 py-2 rounded-md transition-colors duration-200">
              Agendar uma reunião
            </button>
            <button className="text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-700">
              Entrar
            </button>
          </div>

          {/* Botão menu mobile */}
          <div className="md:hidden flex items-center">
            <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#444444] absolute w-full z-50">
          <div className="px-4 py-2">
            {navItems.map((item) => (
              <div key={item.id} className="py-2">
                <button
                  onClick={() => handleMouseEnter(item.id)}
                  className="flex items-center justify-between w-full text-left py-2 hover:text-[#38b6ff] transition-colors"
                >
                  <span className="text-base">{item.label}</span>
                  {item.hasDropdown && (
                    <FaChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                      activeMenu === item.id ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {item.hasDropdown && activeMenu === item.id && (
                  <div className="pl-4 py-2 space-y-4">
                    {item.submenu?.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="font-bold text-sm text-gray-300 py-2">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <a href="#" className="flex items-center gap-2 py-2 hover:text-[#38b6ff]">
                                <span className="text-gray-400">{subItem.icon}</span>
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
              <button className="w-full bg-[#38b6ff] hover:bg-[#2a9fe0] text-white px-4 py-2 rounded-md transition-colors duration-200">
                Agendar uma reunião
              </button>
              <button className="w-full text-white px-4 py-2 rounded-md transition-colors duration-200 hover:bg-gray-700">
                Entrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Seção Hero */}
      <div className="relative py-20 px-4 bg-gradient-to-r from-[#333333] to-[#444444] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 text-[#38b6ff]">
            Software de Gestão
            <br className="hidden sm:block" />
            de Eventos para
            <br className="hidden sm:block" />
            <span className="text-white">EVENTOS AO VIVO</span>
          </h1>

          <div className="max-w-md mx-auto mt-10 flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Digite seu email de trabalho"
              className="flex-grow px-4 py-3 rounded-full bg-[#444444] border border-[#555555] text-white"
            />
            <button className="bg-[#38b6ff] hover:bg-[#2a9fe0] text-white rounded-full px-6 py-3 transition-colors duration-200">
              Agendar uma reunião
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-16 mt-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#38b6ff]">
                <CountUp end={11} duration={2.5} />
                <span className="text-3xl">M</span>
              </div>
              <div className="text-sm mt-2">Eventos Criados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#38b6ff]">
                <CountUp end={67} duration={2.5} />
                <span className="text-3xl">M</span>
              </div>
              <div className="text-sm mt-2">Inscrições</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#38b6ff]">
                <CountUp end={182} duration={2.5} />
              </div>
              <div className="text-sm mt-2">Países alcançados</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InEventNavbar

