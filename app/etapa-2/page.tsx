'use client'

import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import ProgressBar from '@/components/ProgressBar'

export default function Etapa2() {
  const router = useRouter()

  const options = [
    { text: '💰 Quitaria minhas contas e sobraria pra mim 💰', value: 'contas' },
    { text: '👑 Montaria minha loja de make online 👑', value: 'loja' },
    { text: '💅 Sairia do meu trabalho e viveria disso 💅', value: 'trabalho' }
  ]

  const handleOption = (value: string) => {
    router.push('/etapa-3')
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container-white">
        <Header />
        
        <main className="p-8 md:p-16">
          <ProgressBar step={2} total={7} />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 leading-tight">
            Sabia que tem meninas lucrando até R$800 por dia com maquiagem direto da fábrica? O que você faria com uma renda assim?
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
