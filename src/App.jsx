import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./Components/Homepage"
//testing comment
//1
//test 2
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
