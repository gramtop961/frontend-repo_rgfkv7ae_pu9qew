const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900">TutorIn</h3>
            <p className="mt-2 text-gray-600">Platform edukasi yang menghubungkan orang tua dan tutor profesional untuk pendampingan belajar terbaik.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Fitur</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>Pencarian Tutor</li>
              <li>Booking & Jadwal</li>
              <li>Chat Langsung</li>
              <li>Rating & Ulasan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Kontak</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>Email: hello@tutorin.app</li>
              <li>WhatsApp: +62 812-3456-7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 mt-6 border-t border-gray-200 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} TutorIn. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-gray-700" href="#">Kebijakan Privasi</a>
            <a className="hover:text-gray-700" href="#">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
