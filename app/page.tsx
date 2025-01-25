'use client';
import { About } from "@/components/About";
import Faq from "@/components/FAQs";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import {Prizes} from "@/components/Prizes";
import ScheduleCard from "@/components/schedule";
import PS from "@/components/theme2";

export default function Home() {
  
  return (<>
  
  <section id="home">
    <Main/>
  </section>
    <section className="py-11">
    <About/>
    </section>
    <section id="themes" className="py-11">
    <PS/>
    </section>
    <section id="timeline" className="py-11">
    
    <ScheduleCard/>
    </section>
    <section id="prizes" className="py-11">

      <Prizes/>
    </section>

    <section id="faqs" className="py-11 ">
        
        <Faq />
      </section>
    <section id="contact">
      <Footer/>
    </section>
    </>
  );
}