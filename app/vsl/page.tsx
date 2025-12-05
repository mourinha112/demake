'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'
import { useEffect, useState } from 'react'

export default function VSL() {
  const router = useRouter()
  const [showButton, setShowButton] = useState(false)

  // Mostrar botão após 5 segundos (pode ajustar)
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container-white">
        <Header />
        
        <main className="p-8 md:p-16">
          <ProgressBar step={7} total={7} />

          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎥 Assista ao vídeo completo
            </h2>
            <p className="text-lg text-gray-600">
              Descubra como milhares de mulheres estão transformando suas vidas
            </p>
          </div>

          {/* Texto persuasivo em vez de vídeo */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white border-2 border-primary rounded-2xl p-8 shadow-xl space-y-4">
              <p className="text-xl font-bold text-gray-900">
                ⚡ Em 3 cliques você recebe a lista completa de fornecedores aprovados para revender maquiagem com margem alta.
              </p>
              <p className="text-lg text-gray-700">
                Mais de 6.000 alunas já usam esse passo a passo para vender na Shopee, no Instagram e no bairro — sem estoque inicial e com produtos a partir de R$1,99 para montar sua loja de “tudo por 10”.
              </p>
              <ul className="text-left space-y-2 text-gray-800">
                <li>• Fornecedores confiáveis com preços de atacado (sem pedido mínimo)</li>
                <li>• Sugestões de kits e combos para vender por R$10 com alta margem</li>
                <li>• Scripts de anúncios e respostas prontas para clientes indecisas</li>
                <li>• Treino rápido para publicar 10 anúncios que começam a girar hoje</li>
              </ul>
              <div className="bg-pink-50 border border-primary rounded-xl p-4 text-center text-gray-900">
                Investimento simbólico: <span className="font-extrabold text-primary text-2xl">R$ 29,90</span> pelo acesso imediato.
              </div>
              <p className="text-center text-sm text-gray-600">
                Clique em “Quero acesso agora” para entrar na área de membros e liberar a lista de fornecedores.
              </p>
            </div>
          </div>

          {/* Botão aparece após assistir */}
          {showButton && (
            <div className="text-center animate-fade-in-up">
              <button
                onClick={() => router.push('/pv')}
                className="btn-primary"
              >
                QUERO ACESSO AGORA! 🚀
              </button>
              <p className="mt-4 text-gray-600">
                ⚡ Oferta por tempo limitado
              </p>
            </div>
          )}

          {!showButton && (
            <div className="text-center">
              <p className="text-gray-500 italic">
                ⏳ Continue assistindo para desbloquear a oferta...
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
