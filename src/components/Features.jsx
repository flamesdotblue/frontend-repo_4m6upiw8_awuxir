import { Shield, Smartphone, Cloud, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'HIPAA-grade security',
    desc: 'End-to-end encryption, audit logs, and role-based access control by default.'
  },
  {
    icon: Smartphone,
    title: 'Omnichannel access',
    desc: 'Responsive web and mobile experiences with real-time notifications.'
  },
  {
    icon: Cloud,
    title: 'Scalable by design',
    desc: 'Auto-scaling microservices and serverless processing for peak demand.'
  },
  {
    icon: Zap,
    title: 'Fast and reliable',
    desc: 'Optimized APIs, CDN caching, and background jobs keep things snappy.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Everything you need to build trust and deliver care
          </h2>
          <p className="mt-3 text-gray-600">
            Production-ready foundations: security, performance, and delightful UX.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 to-blue-600 text-white">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
