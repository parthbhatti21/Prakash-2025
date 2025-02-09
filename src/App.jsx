import { HashRouter, Route, Routes } from "react-router"
import Homepage from "./Components/Homepage"
import EventCard from "./Components/EventCard"
import AboutUs from "./Components/Aboutus"
import Navbar from "./Components/Navbar"
function App() {

  return (

    <HashRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/events' element={<EventCard />} />
        {/* <Route path='/aboutus' element={<AboutPage/>}/> */}
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>

    </HashRouter>
  )
}

export default App
