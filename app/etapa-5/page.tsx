'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'

export default function Etapa5() {
  const router = useRouter()

  const options = [
    { text: '💋 Montaria minha loja e já colocava pra vender 💋', value: 'loja' },
    { text: '💄 Testaria os produtos mais baratos pra começar leve 💄', value: 'testar' },
    { text: '👯‍♀️ Chamaria minhas amigas pra vender comigo 👯‍♀️', value: 'amigas' }
  ]

  const handleOption = (value: string) => {
    router.push('/etapa-6')
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container-white">
        <Header />
        
        <main className="p-8 md:p-16">
          <ProgressBar step={5} total={7} />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 leading-tight">
            Os fornecedores da nossa lista estão sempre abertos pra novas revendedoras 💕 Quanto antes você começar, mais rápido você lucra com os produtos de R$10 💄 O que você faria se tivesse acesso hoje?
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOption(option.value)}
                className="quiz-option"
              >
                {option.text}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
