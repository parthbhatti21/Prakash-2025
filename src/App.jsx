import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./Components/Homepage"
import EventCard from "./Components/EventCard"
//testing comment
//1
//test 2
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/events' element={<EventCard/>}/>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
