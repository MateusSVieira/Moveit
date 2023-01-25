import Banner from "./pages/Banner"
import Navbar from "./pages/Navbar"
import Feature from './pages/Feature';
import { Reset } from "./Reset";



function App() {

  return (
    <Reset >
      <Navbar/>
      <Banner/>
      <Feature/>


    </Reset>
  )
}

export default App
