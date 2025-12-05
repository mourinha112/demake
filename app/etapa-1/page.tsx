'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'

export default function Etapa1() {
  const router = useRouter()

  const options = [
    { text: '💄 Não sei onde achar fornecedores confiáveis 💄', value: 'fornecedores' },
    { text: '😬 Medo de comprar e não vender 😬', value: 'medo' },
    { text: '🕓 Tempo, porque trabalho o dia inteiro 🕓', value: 'tempo' }
  ]

  const handleOption = (value: string) => {
    router.push('/etapa-2')
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container-white">
        <Header />
        
        <main className="p-8 md:p-16">
          <ProgressBar step={1} total={7} />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 leading-tight">
            Se você pudesse transformar produtos de R$10 em lucro todos os dias… o que mais te impediria de começar hoje?
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
