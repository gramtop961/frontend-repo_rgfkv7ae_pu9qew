import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TutorShowcase from './components/TutorShowcase'
import Footer from './components/Footer'
import { ShieldCheck, CalendarCheck, MessageCircle, Star } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="h-11 w-11 rounded-xl bg-[#2D9CDB]/10 text-[#2D9CDB] grid place-items-center mb-4">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <section id="features" className="py-14 bg-[#F8FBFE]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">Fitur Utama</h2>
            <p className="mt-2 text-gray-600">Dirancang untuk pengalaman belajar yang aman, fleksibel, dan efektif</p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Feature icon={ShieldCheck} title="Verifikasi Tutor" desc="Setiap tutor melalui proses verifikasi identitas dan kompetensi untuk keamanan dan kualitas." />
            <Feature icon={CalendarCheck} title="Jadwal Fleksibel" desc="Atur jadwal sesuai kebutuhan, mudah melakukan reschedule dan pengingat otomatis." />
            <Feature icon={MessageCircle} title="Chat Langsung" desc="Komunikasi real-time antara orang tua dan tutor untuk koordinasi belajar." />
            <Feature icon={Star} title="Rating & Ulasan" desc="Pilih tutor terbaik berdasarkan ulasan dan penilaian dari pengguna lain." />
          </div>
        </div>
      </section>

      <TutorShowcase />

      <Footer />
    </div>
  )
}

export default App
