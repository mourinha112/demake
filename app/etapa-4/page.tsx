'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'

export default function Etapa4() {
  const router = useRouter()

  const options = [
    { text: '💰 Ver meu dinheiro crescendo todo dia 💰', value: 'dinheiro' },
    { text: '💄 Poder ajudar em casa e ainda sobrar pra mim 💄', value: 'ajudar' },
    { text: '👑 Montar minha marca e ser reconhecida 👑', value: 'marca' }
  ]

  const handleOption = (value: string) => {
    router.push('/etapa-5')
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container-white">
        <Header />
        
        <main className="p-8 md:p-16">
          <ProgressBar step={4} total={7} />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 leading-tight">
            Imagina ver suas notificações cheias de vendas 💬 e suas amigas perguntando onde você compra tão barato 😍 Qual seria a melhor parte disso pra você?
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
