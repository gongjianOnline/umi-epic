import React from "react"
import Header from "../../components/Header"
const Home:React.FC<any> = (props)=>{
  return  (
    <div>
      <Header></Header>
      {props.children}
    </div>
  )
}
export default Home