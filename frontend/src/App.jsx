import Home from "./pages/Home"
import Mess from './pages/Mess'
import Canteen from "./pages/Canteen"
import Teapost from "./pages/TeaPost"
import DashboardCanteen from "./pages/DashboardCanteen"
import DashboardMess from "./pages/DashboardMess"
import DashboardTp from "./pages/DashboardTp"
import Reviews from "./components/Reviews"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/mess" element={<Mess />}/>
          <Route path="/canteen" element={<Canteen />}/>
          <Route path="/teapost" element={<Teapost />} />
          <Route path="/dashboard/mess" element={<DashboardMess />} />
          <Route path="/dashboard/tp" element={<DashboardTp />} />
          <Route path="/dashboard/canteen" element={<DashboardCanteen />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
