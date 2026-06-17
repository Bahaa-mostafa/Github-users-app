import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div className="layout">
      <Navbar/>
      <main className="content">
        <Outlet /> {/* ده المكان اللي هبعت فيه  ال Children  */}
      </main>
      <Footer/>
    </div>
  )
}