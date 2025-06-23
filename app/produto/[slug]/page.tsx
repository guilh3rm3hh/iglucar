"use client"

import { MessageCircle, ArrowLeft, Shield, Truck, Award, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"

const produtos = {
  "iglu-car-luxo": {
    nome: "Iglu-Car Luxo",
    preco: "Consulte",
    descricao: "Proteção completa para carros de passeio com altura de 2,30m",
    altura: "2,30m",
    categoria: "Carros de Passeio",
    modelos: ["Honda Civic", "Toyota Corolla", "Chevrolet Onix", "Hyundai HB20", "Volkswagen Polo"],
    especificacoes: {
      Material: "Lona impermeável anti-UV",
      Estrutura: "Tubos de aço galvanizado",
      Altura: "2,30 metros",
      Largura: "Ajustável conforme veículo",
      Comprimento: "Ajustável conforme veículo",
      Peso: "Aproximadamente 45kg",
      Instalação: "Parafusos e buchas inclusos",
      Garantia: "12 meses contra defeitos de fabricação",
    },
    imagens: [
      "/images/iglu-car-luxo.png",],
  },
  "iglu-car-max-luxo": {
    nome: "Iglu-Car Max Luxo",
    preco: "Consulte",
    descricao: "Proteção premium para SUVs e carros maiores com altura de 2,40m",
    altura: "2,40m",
    categoria: "SUVs e Carros Maiores",
    modelos: ["Honda HR-V", "Jeep Compass", "Volkswagen Tiguan", "BMW X1", "Toyota RAV4"],
    especificacoes: {
      Material: "Lona impermeável anti-UV premium",
      Estrutura: "Tubos de aço galvanizado reforçado",
      Altura: "2,40 metros",
      Largura: "Ajustável conforme veículo",
      Comprimento: "Ajustável conforme veículo",
      Peso: "Aproximadamente 52kg",
      Instalação: "Parafusos e buchas inclusos",
      Garantia: "12 meses contra defeitos de fabricação",
    },
    imagens: [
      "/images/iglu-car-maxluxo.png",
     ],
  },
  "iglu-car-pickup": {
    nome: "Iglu-Car Pick-up",
    preco: "Consulte",
    descricao: "Proteção especial para caminhonetes com altura de 2,81m",
    altura: "2,81m",
    categoria: "Caminhonetes",
    modelos: ["Toyota Hilux", "Ford Ranger", "Chevrolet S10", "Volkswagen Amarok", "Mitsubishi L200"],
    especificacoes: {
      Material: "Lona impermeável anti-UV extra resistente",
      Estrutura: "Tubos de aço galvanizado extra reforçado",
      Altura: "2,81 metros",
      Largura: "Ajustável conforme veículo",
      Comprimento: "Ajustável conforme veículo",
      Peso: "Aproximadamente 65kg",
      Instalação: "Parafusos e buchas inclusos",
      Garantia: "12 meses contra defeitos de fabricação",
    },
    imagens: [
      "/images/iglu-car-pickup.jpeg",
     ],
  },
  "iglu-car-ultra-max": {
    nome: "Iglu-Car Ultra Max",
    preco: "Consulte",
    descricao: "Proteção especial para pick-ups grandes com altura extra",
    altura: "Extra alta",
    categoria: "Pick-ups Grandes",
    modelos: ["Ford F-150", "RAM 2500", "Toyota Tundra", "Chevrolet Silverado", "GMC Sierra"],
    especificacoes: {
      Material: "Lona impermeável anti-UV ultra resistente",
      Estrutura: "Tubos de aço galvanizado ultra reforçado",
      Altura: "Extra alta para pick-ups grandes",
      Largura: "Ajustável conforme veículo",
      Comprimento: "Ajustável conforme veículo",
      Peso: "Aproximadamente 75kg",
      Instalação: "Parafusos e buchas inclusos",
      Garantia: "12 meses contra defeitos de fabricação",
    },
    imagens: [
      "/images/Iglu-CarUltra-MaxPickup.png",
     ],
  },
  "iglu-moto-luxo": {
    nome: "Iglu-Moto Luxo",
    preco: "Consulte",
    descricao: "Proteção especial para motos com altura de 1,65m",
    altura: "1,65m",
    categoria: "Motocicletas",
    modelos: ["Honda CB 600", "Yamaha Fazer", "Kawasaki Ninja", "BMW GS", "Harley Davidson"],
    especificacoes: {
      Material: "Lona impermeável anti-UV para motos",
      Estrutura: "Tubos de aço galvanizado compacto",
      Altura: "1,65 metros",
      Largura: "Ajustável conforme moto",
      Comprimento: "Ajustável conforme moto",
      Peso: "Aproximadamente 25kg",
      Instalação: "Parafusos e buchas inclusos",
      Garantia: "12 meses contra defeitos de fabricação",
    },
    imagens: [
      "/images/Iglu-Moto-Luxo.png",
      ],
  },
  "iglu-car-quadriciclo": {
    nome: "Iglu-Car Quadriciclo",
    preco: "Consulte",
    descricao: "Proteção especial para quadriciclos com altura de 1,65m",
    altura: "1,65m",
    categoria: "Quadriciclos",
    modelos: ["Can-Am Outlander", "Yamaha Grizzly", "Polaris Sportsman", "Honda FourTrax", "Kawasaki Brute Force"],
    especificacoes: {
      Material: "Lona impermeável anti-UV resistente",
      Estrutura: "Tubos de aço galvanizado compacto",
      Altura: "1,65 metros",
      Largura: "Ajustável conforme quadriciclo",
      Comprimento: "Ajustável conforme quadriciclo",
      Peso: "Aproximadamente 30kg",
      Instalação: "Parafusos e buchas inclusos",
      Garantia: "12 meses contra defeitos de fabricação",
    },
    imagens: [
      "/images/Iglu-Car-Quadriciclo.png",
     ],
  },
}

export default function ProdutoPage() {
  const params = useParams()
  const slug = params.slug as string
  const produto = produtos[slug as keyof typeof produtos]
  const [imagemAtual, setImagemAtual] = useState(0)

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no ${produto?.nome}. Gostaria de mais informações e orçamento!`,
  )

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
          <Link href="/">
            <Button>Voltar ao início</Button>
          </Link>
        </div>
      </div>
    )
  }

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev + 1) % produto.imagens.length)
  }

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev - 1 + produto.imagens.length) % produto.imagens.length)
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <Image
                src="/images/logo.png"
                alt="Iglu-Car Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open(`https://wa.me/5561991241124?text=${whatsappMessage}`, "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              (61) 99124-1124
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={produto.imagens[imagemAtual] || "/placeholder.svg"}
                alt={`${produto.nome} - Imagem ${imagemAtual + 1}`}
                width={600}
                height={400}
                className="object-cover rounded-lg w-full h-96"
              />
              <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Miniaturas */}
            <div className="flex space-x-2 overflow-x-auto">
              {produto.imagens.map((imagem, index) => (
                <button
                  key={index}
                  onClick={() => setImagemAtual(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    imagemAtual === index ? "border-yellow-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={imagem || "/placeholder.svg"}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-yellow-100 text-yellow-800 mb-2">{produto.categoria}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{produto.nome}</h1>
              <p className="text-gray-600 text-lg">{produto.descricao}</p>
            </div>

            {/* Preço e Ações */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">Preço sob consulta</p>
                    <p className="text-sm text-gray-500">Orçamento personalizado para seu veículo</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                    onClick={() => window.open(`https://wa.me/5561991241124?text=${whatsappMessage}`, "_blank")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    SOLICITAR ORÇAMENTO
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                    onClick={() => window.open(`https://wa.me/5561991241124?text=${whatsappMessage}`, "_blank")}
                  >
                    TIRAR DÚVIDAS
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Benefícios */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Benefícios inclusos</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Proteção 100% contra chuva, sol e granizo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Instalação feita pela nossa equipe especializada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-green-500" />
                    <span className="text-sm">12 meses de garantia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modelos Compatíveis */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Modelos compatíveis</h3>
                <div className="flex flex-wrap gap-2">
                  {produto.modelos.map((modelo, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100">
                      {modelo}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Especificações Técnicas */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Especificações Técnicas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(produto.especificacoes).map(([chave, valor]) => (
                <div key={chave} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-600">{chave}:</span>
                  <span className="text-gray-900">{valor}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Perguntas Frequentes */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Como é feita a instalação?</h3>
                <p className="text-gray-600">
                  A instalação é realizada pela nossa equipe especializada e treinada. Levamos todas as ferramentas
                  necessárias e fazemos todo o trabalho para você, sem complicação.
                </p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">O produto resiste a ventos fortes?</h3>
                <p className="text-gray-600">
                  Sim, a estrutura é feita com tubos de aço galvanizado e foi projetada para resistir a condições
                  climáticas adversas, incluindo ventos fortes.
                </p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Qual o prazo de entrega?</h3>
                <p className="text-gray-600">
                  O prazo varia conforme a região, mas geralmente é de 7 a 15 dias úteis para Brasília e Goiânia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Fixo com Ação */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900">{produto.nome}</p>
              <p className="text-sm text-gray-600">Orçamento personalizado</p>
            </div>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
              onClick={() => window.open(`https://wa.me/5561991241124?text=${whatsappMessage}`, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              SOLICITAR ORÇAMENTO
            </Button>
          </div>
        </div>
      </div>

      {/* Espaçamento para o footer fixo */}
      <div className="h-20"></div>
    </div>
  )
}
