"use client"

import { MessageCircle, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero proteger meu veículo com a Iglu-Car. Gostaria de mais informações!",
  )

  const marcasModelos = [
    { logo: "/images/toyota.png" },
    { logo: "/images/honda.png" },
    { logo: "/images/volks.png" },
    { logo: "/images/ford.png" },
    { logo: "/images/chevrolet.png" },
    { logo: "/images/hiunday.png" },
    { logo: "/images/nissan.png" },
    { logo: "/images/bmw.png" },
    { logo: "/images/mercedes.png" },
    { logo: "/images/audi.png" },
    { logo: "/images/jeep.png" },
    { logo: "/images/fiat.png" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Iglu-Car Logo"
                width={150}
                height={80}
                className="h-16 w-auto"
              />
            </div>

            <div className="text-right">
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <p className="font-semibold text-yellow-600">Brasília e Goiânia</p>
                  <p className="text-gray-600">Vendas e Instalação</p>
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-100 to-yellow-200 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                ✨ SUA GARAGEM EXTERNA
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                PROTEJA SEU VEÍCULO DO CLIMA COM O IGLU-CAR
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Deixar o seu veículo exposto ao clima pode causar sérios problemas. Com o Iglu-Car você evita danos,
                sujeira, riscos e perda da cor original do seu carro.
              </p>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-xl font-bold"
                onClick={() => window.open(`https://wa.me/5561991241124?text=${whatsappMessage}`, "_blank")}
              >
                QUERO MEU IGLU-CAR
                <MessageCircle className="w-6 h-6 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <img
                src="/images/fusca.png"
                alt="Carro protegido com Iglu-Car"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                100% PROTEGIDO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas e Modelos Carrossel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Marcas e Modelos que Atendemos</h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* Primeira sequência */}
              {marcasModelos.map((item, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-4 p-6 min-w-[200px]">
                  <div className="text-center">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={`Logo da marca`}
                      className="w-32 h-16 mx-auto object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Segunda sequência para loop infinito */}
              {marcasModelos.map((item, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-4 p-6 min-w-[200px]">
                  <div className="text-center">
                    <img
                      src={item.logo || "/placeholder.svg"}
                      alt={`Logo da marca`}
                      className="w-32 h-16 mx-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              <strong>E muitas outras marcas!</strong> Temos o Iglu-Car ideal para qualquer veículo.
            </p>
          </div>
        </div>

        <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      </section>

      {/* Produtos */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossos Produtos</h2>
            <p className="text-xl text-gray-600">Temos o Iglu-Car ideal para cada tipo de veículo</p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
              {/* Carros de Passeio */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <CardContent className="flex flex-col justify-center p-4 text-center">
                  <div className="flex justify-center h-40">
                    <Image
                      src="/images/iglu-car-luxo.png"
                      alt="Iglu-Car Luxo"
                      width={160}
                      height={160}
                      className="rounded-lg mb-4 object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">IGLU-CAR LUXO</h3>
                  <Link href="/produto/iglu-car-luxo">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      CONSULTAR
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* SUVs e Carros Maiores */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <CardContent className="flex flex-col justify-center p-4 text-center">
                  <div className="flex justify-center h-40">
                    <Image
                      src="/images/iglu-car-maxluxo.png"
                      alt="Iglu-Car Max Luxo"
                      width={160}
                      height={160}
                      className="rounded-lg mb-4 object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">IGLU-CAR MAX LUXO</h3>
                  <Link href="/produto/iglu-car-max-luxo">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      CONSULTAR
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Pick-ups */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <CardContent className="flex flex-col justify-center p-4 text-center">
                  <div className="flex justify-center h-40">
                    <Image
                      src="/images/iglu-car-pickup.jpeg"
                      alt="Iglu-Car Pick-up"
                      width={160}
                      height={160}
                      className="rounded-lg mb-4 object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">IGLU-CAR PICK-UP</h3>
                  <Link href="/produto/iglu-car-pickup">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      CONSULTAR
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Ultra Max Pick-ups */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <CardContent className="flex flex-col justify-center p-4 text-center">
                  <div className="flex justify-center h-40">
                    <Image
                      src="/images/Iglu-CarUltra-MaxPickup.png"
                      alt="Iglu-Car Ultra Max"
                      width={160}
                      height={160}
                      className="rounded-lg mb-4 object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">IGLU-CAR ULTRA MAX</h3>
                  <Link href="/produto/iglu-car-ultra-max">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      CONSULTAR
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Motos */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <CardContent className="flex flex-col justify-center p-4 text-center">
                  <div className="flex justify-center h-40">
                    <Image
                      src="/images/Iglu-Moto-Luxo.png"
                      alt="Iglu-Moto Luxo"
                      width={160}
                      height={160}
                      className="rounded-lg mb-4 object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">IGLU-MOTO LUXO</h3>
                  <Link href="/produto/iglu-moto-luxo">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      CONSULTAR
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Quadriciclos */}
              <Card className="hover:shadow-lg transition-shadow border-2 border-yellow-200">
                <CardContent className="flex flex-col justify-center p-4 text-center">
                  <div className="flex justify-center h-40">
                    <Image
                      src="/images/Iglu-Car-Quadriciclo.png"
                      alt="Iglu-Car Quadriciclo"
                      width={160}
                      height={160}
                      className="rounded-lg mb-4 object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">IGLU-CAR QUADRICICLO</h3>
                  <Link href="/produto/iglu-car-quadriciclo">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      CONSULTAR
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-100 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Não sabe qual modelo escolher?</h3>
              <p className="text-gray-700 mb-4">
                Nossa equipe especializada te ajuda a encontrar o Iglu-Car perfeito para seu veículo!
              </p>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 font-bold"
                onClick={() => window.open(`https://wa.me/5561991241124?text=${whatsappMessage}`, "_blank")}
              >
                CONSULTAR MODELO IDEAL
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios do Iglu-Car */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Por que escolher o Iglu-Car?</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Proteção 100% Garantida</h3>
                    <p className="text-gray-600">
                      Protege contra chuva, sol, granizo, poeira e riscos. Seu veículo sempre como novo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Instalação Rápida e Fácil</h3>
                    <p className="text-gray-600">
                      Nossa equipe especializada instala em poucas horas. Sem complicação, sem bagunça.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Economia Garantida</h3>
                    <p className="text-gray-600">
                      Evita lavagens constantes, enceramento e reparos na pintura. Seu bolso agradece.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Valorização do Veículo</h3>
                    <p className="text-gray-600">
                      Mantém a pintura original intacta, preservando o valor de revenda do seu carro.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/iglu.png"
                alt="Carro protegido com Iglu-Car"
                width={600}
                height={400}
                className="object-cover rounded-lg w-full h-96 shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                PROTEÇÃO TOTAL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">O que nossos clientes dizem</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "É uma garagem externa super resistente. Meu Volvo está sempre protegido!"
                </p>
                <div className="font-semibold text-gray-800">André - Volvo XC-60</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Muito prática, fecha em fração de segundo. Recomendo de olhos fechados!"
                </p>
                <div className="font-semibold text-gray-800">Cícero - Florianópolis</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "A pintura do meu carro está intacta! Aqui o sol é terrível, mas não tenho mais preocupação."
                </p>
                <div className="font-semibold text-gray-800">Josiane - Cliente Satisfeita</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Atendimento */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Atendimento Unificado</h2>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-yellow-200">
              <CardContent className="p-8">
                <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-12 h-12 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">BRASÍLIA E GOIÂNIA</h3>
                <p className="text-gray-600 mb-6 text-lg">Um único número para atender toda a região Centro-Oeste</p>
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-4 text-xl"
                  onClick={() => window.open(`https://wa.me/5561991241124?text=${whatsappMessage}`, "_blank")}
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  (61) 99124-1124
                </Button>
                <p className="text-sm text-gray-500 mt-4">Vendas e instalação em ambas as cidades</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-4">PROTEJA SEU VEÍCULO HOJE MESMO!</h2>
          <p className="text-xl mb-8">Não deixe seu carro sofrer com o clima</p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-xl font-bold"
            onClick={() => window.open(`https://wa.me/5561991241124?text=${whatsappMessage}`, "_blank")}
          >
            SOLICITAR ORÇAMENTO GRÁTIS
            <MessageCircle className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Iglu-Car Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            <p className="text-gray-400 mb-4">Vendas e instalação em Brasília e Goiânia</p>
            <p className="text-sm text-gray-500">© 2024 Iglu-Car. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg"
          onClick={() => window.open(`https://wa.me/5561991241124?text=${whatsappMessage}`, "_blank")}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  )
}
