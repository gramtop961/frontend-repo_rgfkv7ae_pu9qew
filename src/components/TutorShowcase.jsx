import TutorCard from './TutorCard'

const MOCK_TUTORS = [
  {
    id: 1,
    name: 'Aulia Rahman, S.Pd',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    subjects: ['Matematika', 'Fisika'],
    rate: 75000,
    rating: 4.9,
    location: 'Jakarta Selatan',
  },
  {
    id: 2,
    name: 'Dewi Kartika',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    subjects: ['Bahasa Inggris', 'TOEFL'],
    rate: 65000,
    rating: 4.8,
    location: 'Bandung',
  },
  {
    id: 3,
    name: 'Rizky Pratama',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    subjects: ['Kimia', 'Biologi'],
    rate: 70000,
    rating: 4.7,
    location: 'Yogyakarta',
  },
]

const TutorShowcase = () => {
  return (
    <section id="tutors" className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Tutor Pilihan</h2>
            <p className="text-gray-600 mt-1">Direkomendasikan berdasarkan rating dan pengalaman</p>
          </div>
          <a href="#" className="text-[#2D9CDB] font-medium hover:underline">Lihat semua</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOCK_TUTORS.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TutorShowcase
