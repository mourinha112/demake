import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
  showProgress?: boolean
  currentStep?: number
  totalSteps?: number
}

export default function Layout({ children, showProgress, currentStep, totalSteps = 7 }: LayoutProps) {
  const progress = currentStep ? (currentStep / totalSteps) * 100 : 0

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <Header />
        
        {showProgress && currentStep && (
          <div className="px-6 md:px-10 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Etapa {currentStep} de {totalSteps}
              </span>
              <span className="text-sm font-bold text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-primary to-primary-light h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        
        <main className="p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  )
}

