import React, { useContext, useEffect, useState } from 'react';
import en from "../assets/england.svg"
import sq from "../assets/albania.svg"
import { Context } from '../Context/Products';
import { lang } from '../assets/lang';

const Navbar = () => {
  const [{ language }, dispatch] = useContext(Context);
  const [y,setY] = useState(0);

  const chnageLang = () => {
    const langKey = language === "sq" ? "en" : "sq";
    localStorage.setItem('lang', langKey);
    dispatch({
      type: "LANG",
      payland: {
        language: langKey
      }
    })
  }

  const HandleScroll = () => {
    if (100 < window.scrollY) {
      setY(true);
    } else {
      setY(false);
    }
  }
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => HandleScroll(e));
  }, [])
  return (
    <nav id="tm-nav" className={`fixed w-full ${y ? "scroll" : ""}`}>
      <div className="tm-container mx-auto px-2 md:py-6 text-right">
        <button className="md:hidden py-2 px-2" id="menu-toggle"><i className="fas fa-2x fa-bars tm-text-gold"></i></button>
        <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
          {lang[language].menu.map((el) => (
            <li className="inline-block mb-4 mx-4"><a href={`#${el.slug}`} className="tm-text-gold py-1 md:py-3 px-4">{el.name}</a></li>
          ))}
          {/* <li className="inline-block mb-4 mx-4"><a href="#intro" className="tm-text-gold py-1 md:py-3 px-4">Intro</a></li>
          <li className="inline-block mb-4 mx-4"><a href="#menu" className="tm-text-gold py-1 md:py-3 px-4">Menu</a></li>
          <li className="inline-block mb-4 mx-4"><a href="#about" className="tm-text-gold py-1 md:py-3 px-4">About</a></li>
          <li className="inline-block mb-4 mx-4"><a href="#contact" className="tm-text-gold py-1 md:py-3 px-4">Contact</a></li> */}
          <li className="inline-block mb-4 mx-4" onClick={() => chnageLang()}>
            {language === "sq" ? 
              <img className='flag' src={en}/>
              : <img className='flag' src={sq}/>
            }
          </li>
        </ul>
      </div>            
    </nav>
  )
}

export default Navbar