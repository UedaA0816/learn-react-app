import React from "react"
import Button from "@material-ui/core/Button"

const Home:React.FC = () => {
  return (
    <div>
      <div>Home</div>
      <Button onClick={()=>{console.log("home ok")}}>ok</Button>
    </div>
  )
}

export default Home