import Image from 'next/image'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import Announcements from '../../components/Announcements';
import UpcomingEvents from "../../components/UpcomingEvents"

export default function Home() {
  return (

  <main className="">
    <div>
      <Footer />
      <Navbar />  
       <div className="flex flex-row py-4 translate-y-20 translate-x-60 gap-x-4">
        <Announcements />
        <UpcomingEvents />
         
       </div>
    </div>
  </main>
  );
}
