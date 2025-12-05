'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'

export default function Etapa0() {
  const router = useRouter()

  const handleStart = () => {
    router.push('/etapa-1')
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container-white">
        <Header />
        
        <main className="p-8 md:p-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
            Transforme produtos de{' '}
            <span className="text-primary relative">
              R$10
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -z-10 rounded"></span>
            </span>{' '}
            em até{' '}
            <span className="text-primary relative">
              R$800 por dia
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 -z-10 rounded"></span>
            </span>{' '}
            — começando da sua casa
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Mulheres como você já estão mudando de vida vendendo na Shopee com fornecedores baratos e sem pedido mínimo
          </p>

          <button
            onClick={handleStart}
            className="btn-primary mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            COMEÇAR MEU TESTE DE LUCRO
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-600 mb-16">
            <span className="text-2xl">⏱️</span>
            <span className="text-base">Descubra em 30 segundos quanto pode ganhar por dia</span>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Resultados de vendas na Shopee
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Maria Silva', value: 'R$ 2.450/mês', emoji: '📱' },
                { name: 'Ana Costa', value: 'R$ 3.890/mês', emoji: '💄' },
                { name: 'Julia Santos', value: 'R$ 5.230/mês', emoji: '👗' }
              ].map((result, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-6xl mb-4">
                    {result.emoji}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {result.name}
                  </h3>
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold">
                    {result.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-white rounded-2xl border-2 border-dashed border-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-xl">✨</span>
              <span className="font-medium text-gray-700">Sem experiência necessária</span>
            </div>
            <span className="text-gray-300 text-xl hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-xl">🏠</span>
              <span className="font-medium text-gray-700">Trabalhe de casa</span>
            </div>
            <span className="text-gray-300 text-xl hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-xl">📦</span>
              <span className="font-medium text-gray-700">Sem estoque inicial</span>
            </div>
          </div>
        </main>

        <footer className="p-6 text-center bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
          <p>&copy; 2025 Demake. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  )
}
