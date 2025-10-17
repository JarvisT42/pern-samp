import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function SamplePage() {
  return (
    <div>
      <p>asdf</p>
      <Link to="/home">as</Link>
      <Link to="/about">
        <Button>Go to About asa</Button>
      </Link>
<Input />
<Label htmlFor="email">Your email address</Label>
    </div>
  )
}

export default SamplePage
