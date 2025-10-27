export default function CTA() {
  return (
    <section id="demo" className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Ready to see MediConnect in action?
              </h3>
              <p className="mt-2 text-gray-600">
                Get a guided tour and learn how teams deliver care faster with confidence.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow hover:opacity-95"
              >
                Book a demo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
