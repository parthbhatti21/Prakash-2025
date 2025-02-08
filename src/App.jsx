import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./Components/Homepage"
import EventCard from "./Components/EventCard"
import AboutUs from "./Components/Aboutus"
import Navbar from "./Components/Navbar"
import { SpeedInsights } from "@vercel/speed-insights/next"
function App() {
  

  return (
    
    <BrowserRouter>
    <SpeedInsights/>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/events' element={<EventCard />}/>
      {/* <Route path='/aboutus' element={<AboutPage/>}/> */}
      <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
