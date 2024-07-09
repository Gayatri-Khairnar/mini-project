
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Order from './Pages/Order'
import PageNotFound from './Pages/PageNotFound'
import CoffeeTable from './Pages/CoffeeTable'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import MyOrders from './Pages/MyOrders'
function App() {
  return (
    <div>
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/order" element={<CoffeeTable />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/myorders" element={<MyOrders />} />
            </Routes>
        </BrowserRouter>    
          
    </div>
  );
}

export default App;