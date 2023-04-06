import { gsap } from "gsap";
import "./App.css";
import { BsTelegram, BsFacebook,BsWhatsapp } from "react-icons/bs";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    gsap.fromTo(".icon",
    {opacity:0,y:100},
    {opacity:1,duration:1,y:0,stagger:.3});
    gsap.fromTo(".title",
    {opacity:0,y:-100},
    {opacity:1,duration:1,y:0,stagger:.3})

  }, [])
  
  return (
    <div className="App">
      <div className="socials">
        <h1 className="title">Contact</h1>
        <div className="social">
        <a href="https://wa.me/994777500037" className="icon" target="_blank" rel="noreferrer">
          <BsWhatsapp />
        </a>
        <a href="https://t.me/stomatoloji_avadanliqlar" className="icon" target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>
        <a
          href="https://www.facebook.com/groups/834791693924494/?ref=share&mibextid=NSMWBT"
          target="_blank" className="icon" rel="noreferrer"
        >
          <BsFacebook />
        </a>
        </div>
        
      </div>
    </div>
  );
}

export default App;
