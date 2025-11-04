import { GraduationCap, User, Shield, Clock, MessageSquare } from 'lucide-react'
import RoleCard from './RoleCard'

function RoleSelector() {
  return (
    <section className="relative py-16 bg-[#F8FBFE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">Pilih Peran Saat Mendaftar</h2>
          <p className="mt-2 text-gray-600">Silakan pilih tipe akun untuk pengalaman yang sesuai kebutuhan Anda.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <RoleCard
            icon={GraduationCap}
            title="Tutor"
            description="Bergabung sebagai tutor profesional dan mulai mengajar siswa yang membutuhkan bimbingan."
            features={[
              'Kelola jadwal dan mata pelajaran',
              'Terima chat & booking dari siswa',
              'Bangun reputasi lewat rating & ulasan',
            ]}
            actionLabel="Daftar sebagai Tutor"
            href="/register?role=tutor"
            accent="#2D9CDB"
          />

          <RoleCard
            icon={User}
            title="Siswa/Orang Tua"
            description="Daftar untuk mencari tutor terbaik sesuai level dan kebutuhan belajar Anda."
            features={[
              'Filter tutor berdasarkan lokasi & mapel',
              'Chat langsung untuk konsultasi',
              'Jadwalkan sesi belajar fleksibel',
            ]}
            actionLabel="Daftar sebagai Siswa"
            href="/register?role=user"
            accent="#10B981"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm">
          <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#2D9CDB]/10 text-[#2D9CDB]"><Shield className="h-4 w-4" /></div>
            <span className="text-gray-700">Akun terverifikasi untuk keamanan</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#10B981]/10 text-[#10B981]"><Clock className="h-4 w-4" /></div>
            <span className="text-gray-700">Penjadwalan fleksibel</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-100 text-indigo-600"><MessageSquare className="h-4 w-4" /></div>
            <span className="text-gray-700">Chat real-time</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoleSelector
