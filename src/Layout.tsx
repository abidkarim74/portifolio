// components/Layout.tsx
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


const Layout = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      <Navbar />
      
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout