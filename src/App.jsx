import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./Components/Homepage"
import EventCard from "./Components/EventCard"
import AboutUs from "./Components/Aboutus"
import { Monitoring } from "react-scan/monitoring"
function App() {


  return (
    <Monitoring apiKey="s63lfJ_VgzKxHiJhUJAVgcQI4SnJGDP-" // Safe to expose publically
    url="https://monitoring.react-scan.com/api/v1/ingest">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/events' element={<EventCard />}/>
      {/* <Route path='/aboutus' element={<AboutPage/>}/> */}
      <Route path='/aboutus' element={<AboutUs/>}/>

    </Routes>
    
    </BrowserRouter>
    </Monitoring>
  )
}

export default App
