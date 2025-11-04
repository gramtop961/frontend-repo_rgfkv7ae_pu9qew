import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RoleSelector from './components/RoleSelector'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <RoleSelector />
      </main>

      <Footer />
    </div>
  )
}

export default App
