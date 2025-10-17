import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "@/pages/Home"
import About from "@/pages/About"
import SamplePage from "@/pages/sam"
import { Button } from "@/components/ui/button"

function App() {
  return (
    <Router>
      <nav className="flex items-center justify-between px-6 py-3 bg-background border-b">
        <h1 className="font-bold text-lg">🌐 My Vite + shadcn App</h1>
        <div className="flex gap-2">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost">About</Button>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/samplepage" element={<SamplePage />} />
      </Routes>
    </Router>
  )
}

export default App
