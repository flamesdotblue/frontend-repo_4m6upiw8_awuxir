import { Rocket, Shield, Users, Calendar } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-blue-500" />
          <span className="font-semibold tracking-tight text-gray-900">MediConnect v25.0</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 inline-flex items-center gap-1">
            <Rocket size={16} /> Features
          </a>
          <a href="#security" className="hover:text-gray-900 inline-flex items-center gap-1">
            <Shield size={16} /> Security
          </a>
          <a href="#team" className="hover:text-gray-900 inline-flex items-center gap-1">
            <Users size={16} /> Team
          </a>
          <a href="#appointments" className="hover:text-gray-900 inline-flex items-center gap-1">
            <Calendar size={16} /> Appointments
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center rounded-md border border-gray-300 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Sign in
          </button>
          <button className="inline-flex h-9 items-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 text-sm font-medium text-white shadow hover:opacity-95">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
