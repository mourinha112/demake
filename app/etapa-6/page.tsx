'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'

export default function Etapa6() {
  const router = useRouter()

  const options = [
    { text: '💄 Agora! Tô pronta pra começar 💄', value: 'agora' },
    { text: '👀 Depende, quero ver os resultados 👀', value: 'depende' },
    { text: '😐 Depois eu vejo isso com calma.', value: 'depois' }
  ]

  const handleOption = (value: string) => {
    router.push('/vsl')
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container-white">
        <Header />
        
        <main className="p-8 md:p-16">
          <ProgressBar step={6} total={7} />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 leading-tight">
            Se o acesso custasse menos que um lanche 🍔 e te desse a chance de lucrar todos os dias… você pegaria agora ou deixaria pra depois?
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
