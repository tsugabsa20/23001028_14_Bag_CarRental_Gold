import LandingPage from "./pages/LandingPage"
import react from "react"
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import SearchCar from "./pages/SearchCar"
import DetailCar from "./pages/DetailCar"


function App () {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/SearchCar" element={<SearchCar/>}></Route>
          <Route path="/detailcar/:id" element={<DetailCar/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
