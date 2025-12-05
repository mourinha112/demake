'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function PV() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleCheckout = () => {
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/cxhpO6J1tQma89xAY5Mm'
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <Header />
        
        <main className="p-8 md:p-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold mb-4 animate-pulse">
              🔥 OFERTA ESPECIAL - Últimas Vagas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Lista Completa de Fornecedores de Maquiagem
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acesse agora os mesmos fornecedores que estão transformando a vida de mais de 6.000 mulheres
            </p>
          </div>

          {/* Oferta Principal */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-4 border-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 rounded-bl-2xl font-bold">
                70% OFF
              </div>
              
              <div className="text-center mb-8">
                <p className="text-gray-600 line-through text-2xl mb-2">
                  De R$ 197,00
                </p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-6xl font-extrabold text-primary">
                    R$ 29,90
                  </span>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">ou 12x de</p>
                    <p className="text-2xl font-bold text-gray-900">R$ 2,99</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-6 px-12 rounded-2xl text-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mb-4"
              >
                GARANTIR MINHA VAGA AGORA! 🚀
              </button>

              <div className="text-center space-y-2">
                <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
                  <span>✅</span> Acesso imediato após pagamento
                </p>
                <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
                  <span>✅</span> 7 dias de garantia total
                </p>
                <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
                  <span>✅</span> Suporte exclusivo
                </p>
              </div>
            </div>
          </div>

          {/* O que está incluído */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              📦 O que você vai receber:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '📋',
                  title: 'Lista Completa de Fornecedores',
                  desc: 'Mais de 50 fornecedores verificados e confiáveis'
                },
                {
                  icon: '💰',
                  title: 'Produtos a partir de R$1,99',
                  desc: 'Monte sua loja de “tudo por 10” com margem alta'
                },
                {
                  icon: '📱',
                  title: 'Guia Completo Shopee',
                  desc: 'Como criar e otimizar sua loja na Shopee'
                },
                {
                  icon: '🎯',
                  title: 'Estratégias de Venda',
                  desc: 'Técnicas comprovadas para vender mais'
                },
                {
                  icon: '📸',
                  title: 'Templates Prontos',
                  desc: 'Artes e legendas para suas redes sociais'
                },
                {
                  icon: '👥',
                  title: 'Comunidade Exclusiva',
                  desc: 'Grupo VIP com outras revendedoras'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Depoimentos */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              💬 O que outras mulheres estão dizendo:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Carla Mendes',
                  text: 'Em 2 meses já faturei mais de R$15 mil! Melhor investimento que já fiz.',
                  stars: 5
                },
                {
                  name: 'Patricia Lima',
                  text: 'Consegui largar meu emprego e agora trabalho no meu horário. Vida transformada!',
                  stars: 5
                },
                {
                  name: 'Juliana Costa',
                  text: 'Os fornecedores são ótimos e os preços incríveis. Recomendo demais!',
                  stars: 5
                },
                {
                  name: 'Amanda Silva',
                  text: 'No primeiro mês já recuperei o investimento e lucrei. Vale muito a pena!',
                  stars: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-gray-900">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-primary-dark text-white rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronta para começar sua jornada?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a mais de 6.000 mulheres que já estão lucrando
            </p>
            <button
              onClick={handleCheckout}
              className="bg-white text-primary font-bold py-6 px-12 rounded-2xl text-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              SIM, QUERO COMEÇAR AGORA! 🚀
            </button>
            <p className="mt-6 text-sm opacity-75">
              🔒 Pagamento 100% seguro • ✅ Garantia de 7 dias
            </p>
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              ❓ Perguntas Frequentes
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: 'Preciso ter experiência para começar?',
                  a: 'Não! Fornecemos todo o material e suporte necessário para iniciantes.'
                },
                {
                  q: 'Quanto preciso investir inicialmente?',
                  a: 'Apenas R$29,90 para ter acesso. Os produtos você compra conforme for vendendo.'
                },
                {
                  q: 'Como funciona a garantia?',
                  a: '7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.'
                },
                {
                  q: 'Vou receber os produtos em casa?',
                  a: 'Não. Você recebe a lista de fornecedores e compra direto com eles conforme suas vendas.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="p-6 text-center bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
          <p>&copy; 2025 Demake. Todos os direitos reservados.</p>
        </footer>
      </div>

      {/* Modal de Sucesso */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md text-center animate-fade-in-up">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2">Parabéns!</h3>
            <p className="text-gray-600 mb-6">
              Você está prestes a transformar sua vida!
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="btn-primary"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
