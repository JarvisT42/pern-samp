import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-6">
      <Card className="w-full max-w-md shadow-md">
        <CardContent className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-3">🏠 Home Page</h1>
          <p className="text-muted-foreground mb-6">
            This is the Home page of your Vite + shadcn + React app.
          </p>
          <Link to="/about">
            <Button>Go to About Page</Button>
          </Link>
             <Link to="/samplepage">
            <Button>Go to About asa</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default Home
