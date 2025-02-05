import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./Components/Homepage"
import EventCard from "./Components/EventCard"
import AboutUs from "./Components/Aboutus"
import { scan } from "react-scan"
import Navbar from "./Components/Navbar"
function App() {
  scan({
    enabled: true,            // Enable or disable React Scan
    log: true,                // Log performance issues to the console
    renderThreshold: 5        // Highlight components re-rendering more than 5 times
  });

  return (
    
    <BrowserRouter>
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
