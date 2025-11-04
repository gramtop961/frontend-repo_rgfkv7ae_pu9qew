import { MapPin, Star, MessageCircle } from 'lucide-react'

const TutorCard = ({ tutor }) => {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <img
          src={tutor.photo}
          alt={tutor.name}
          className="h-16 w-16 rounded-xl object-cover ring-1 ring-gray-100"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
            <span className="text-[#2D9CDB] font-medium">Rp{tutor.rate.toLocaleString('id-ID')}/jam</span>
          </div>
          <p className="text-sm text-gray-600">{tutor.subjects.join(' • ')}</p>
          <div className="mt-2 flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 text-yellow-600">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {tutor.rating}
            </span>
            <span className="inline-flex items-center gap-1 text-gray-500">
              <MapPin className="h-4 w-4" />
              {tutor.location}
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button className="h-9 px-4 rounded-lg bg-[#2D9CDB] text-white text-sm hover:brightness-105">
              Booking
            </button>
            <button className="h-9 px-4 rounded-lg border border-gray-200 text-gray-700 text-sm hover:bg-gray-50 inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-[#2D9CDB]" /> Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorCard
