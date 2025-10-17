import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-6">
      <Card className="w-full max-w-md shadow-md">
        <CardContent className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-3">ℹ️ About Page</h1>
          <p className="text-muted-foreground mb-6">
            This app demonstrates navigation without page reload using React Router.
          </p>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default About
