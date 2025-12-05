'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'

export default function Etapa3() {
  const router = useRouter()

  const options = [
    { text: '💄 Com certeza! Quero começar ainda hoje 💄', value: 'sim' },
    { text: '👀 Quero ver se é pra mim primeiro 👀', value: 'ver' },
    { text: '✨ Tô curiosa, quero entender como funciona ✨', value: 'curiosa' }
  ]

  const handleOption = (value: string) => {
    router.push('/etapa-4')
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container-white">
        <Header />
        
        <main className="p-8 md:p-16">
          <ProgressBar step={3} total={7} />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 leading-tight">
            Mais de 6.000 mulheres já começaram a vender maquiagem com nossa lista secreta 💋 E você... quer fazer parte desse grupo também?
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
