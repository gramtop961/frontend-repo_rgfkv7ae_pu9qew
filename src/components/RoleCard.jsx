import { ArrowRight } from 'lucide-react'

function RoleCard({ icon: Icon, title, description, features = [], actionLabel, href, accent = '#2D9CDB' }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ backgroundColor: `${accent}1A`, color: accent }}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      {features.length > 0 && (
        <ul className="mt-5 space-y-2 text-sm text-gray-700">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <a
        href={href}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white transition-colors"
        style={{ backgroundColor: accent }}
      >
        {actionLabel}
        <ArrowRight className="h-4 w-4" />
      </a>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-gray-200" />
    </div>
  )
}

export default RoleCard
