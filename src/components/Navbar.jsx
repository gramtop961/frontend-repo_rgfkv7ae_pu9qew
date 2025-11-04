import { BookOpen, MessageCircle, Calendar, User } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-[#2D9CDB] grid place-items-center shadow-sm">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900 text-lg">TutorIn</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[#2D9CDB]" /> Fitur
          </a>
          <a href="#tutors" className="hover:text-gray-900 transition-colors flex items-center gap-2">
            <User className="h-4 w-4 text-[#2D9CDB]" /> Tutor
          </a>
          <a href="#booking" className="hover:text-gray-900 transition-colors flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#2D9CDB]" /> Booking
          </a>
          <a href="#chat" className="hover:text-gray-900 transition-colors flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-[#2D9CDB]" /> Chat
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 items-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
            Masuk
          </button>
          <button className="h-9 px-4 items-center rounded-lg bg-[#2D9CDB] text-white shadow-sm hover:brightness-105 transition">
            Daftar
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
