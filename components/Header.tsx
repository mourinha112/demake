'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 md:p-8 bg-white border-b border-gray-200">
      <Link href="/etapa-0" className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl flex items-center justify-center text-2xl font-extrabold shadow-md">
          D
        </div>
        <span className="text-2xl font-bold text-gray-900">Demake</span>
      </Link>
      
      <div className="flex flex-col items-end bg-gray-50 px-6 py-3 rounded-xl">
        <span className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
          Seu saldo:
        </span>
        <span className="text-2xl font-bold text-primary">R$ 0,00</span>
      </div>
    </header>
  )
}
