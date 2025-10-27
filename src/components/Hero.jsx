import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast without blocking scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-3 py-1 text-xs font-medium text-purple-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse" />
            v25.0.0 • Production-grade healthcare platform
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Connect patients, providers, and data seamlessly
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            MediConnect unifies appointments, records, and communications with secure, real-time experiences and delightful design.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-gray-800"
            >
              Explore Features
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
