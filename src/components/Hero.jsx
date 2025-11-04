import { Search, Star, ShieldCheck } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E9F6FE] via-white to-[#F2F8FD]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2D9CDB]/20 bg-white px-3 py-1 text-sm text-[#2D9CDB] shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Belajar aman & fleksibel bersama TutorIn
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Temukan Tutor Terbaik untuk Pendamping Belajar Anak Anda
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Platform pendidikan modern untuk menghubungkan orang tua dengan tutor profesional. Booking mudah, chat cepat, dan pengaturan jadwal yang fleksibel.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari mapel, lokasi, atau nama tutor..."
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D9CDB]/30 focus:border-[#2D9CDB]"
                />
              </div>
              <button className="h-12 px-6 rounded-xl bg-[#2D9CDB] text-white font-medium shadow-sm hover:brightness-105">
                Cari Tutor
              </button>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" /> 4.9/5 rating rata-rata
              </div>
              <div>10k+ sesi belajar sukses</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#2D9CDB]/10 to-[#2D9CDB]/5 p-2">
              <div className="h-full w-full rounded-xl bg-white shadow-xl grid grid-cols-2 gap-4 p-4">
                <div className="space-y-4">
                  <div className="h-24 rounded-lg bg-[#F2F2F2]" />
                  <div className="h-24 rounded-lg bg-[#E9F6FE]" />
                  <div className="h-24 rounded-lg bg-[#F2F2F2]" />
                </div>
                <div className="space-y-4">
                  <div className="h-24 rounded-lg bg-[#E9F6FE]" />
                  <div className="h-24 rounded-lg bg-[#F2F2F2]" />
                  <div className="h-24 rounded-lg bg-[#E9F6FE]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
