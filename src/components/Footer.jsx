export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© 2025 MediConnect v25.0.0. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Security</a>
          <a href="#" className="hover:text-gray-900">Status</a>
          <a href="#" className="hover:text-gray-900">Docs</a>
        </div>
      </div>
    </footer>
  )
}
