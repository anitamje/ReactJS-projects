import React from 'react';
import img1 from "../assets/img/menu-item-1.jpg"
import img2 from "../assets/img/menu-item-2.jpg"
import img3 from "../assets/img/menu-item-3.jpg"
import img4 from "../assets/img/menu-item-4.jpg"
import img5 from "../assets/img/menu-item-5.jpg"
import img6 from "../assets/img/menu-item-6.jpg"
import img7 from "../assets/img/menu-item-7.jpg"
import img8 from "../assets/img/menu-item-8.jpg"

const CafeMenu = () => {
  return (
    <div id="menu" class="parallax-window" data-parallax="scroll" >
      <div class="container mx-auto tm-container py-24 sm:py-48">
          <div class="text-center mb-16">
              <h2 class="bg-white tm-text-brown py-6 px-12 text-4xl font-medium inline-block rounded-md">Our Cafe Menu</h2>
          </div>            
          <div class="flex flex-col lg:flex-row justify-around items-center">
              <div class="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
                  <div class="flex items-start mb-6 tm-menu-item">
                      <img src={img1} alt="Image" class="rounded-md" />
                      <div class="ml-3 sm:ml-6">
                          <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Cappuccino</h3>
                          <div class="text-white text-md sm:text-lg font-light mb-1">S $8.50</div>
                          <div class="text-white text-md sm:text-lg font-light">L $10.50</div>
                      </div>                    
                  </div>
                  <div class="flex items-start mb-6 tm-menu-item">
                      <img src={img2} alt="Image" class="rounded-md" />
                      <div class="ml-3 sm:ml-6">
                          <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Americano</h3>
                          <div class="text-white text-md sm:text-lg font-light mb-1">S $9.50 . BG #544639</div>
                          <div class="text-white text-md sm:text-lg font-light">L $12.50</div>
                      </div>                    
                  </div>
                  <div class="flex items-start mb-6 tm-menu-item">
                      <img src={img3} alt="Image" class="rounded-md" />
                      <div class="ml-3 sm:ml-6">
                          <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Latte #FC6</h3>
                          <div class="text-white text-md sm:text-lg font-light mb-1">M $11.75</div>
                          <div class="text-white text-md sm:text-lg font-light">L $14.75</div>
                      </div>                    
                  </div>
                  <div class="flex items-start mb-6 tm-menu-item">
                      <img src={img4} alt="Image" class="rounded-md" />
                      <div class="ml-3 sm:ml-6">
                          <h3 class="text-lg sm:text-xl tm-text-yellow mb-1">Hot Espresso</h3>
                          <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Hot Chocolate</h3>
                          <div class="text-white text-md sm:text-lg font-light">Size M $11.75 . L $14.75</div>
                      </div>                    
                  </div>
              </div>
              <div class="flex-1 m-5 rounded-xl px-4 py-6 sm:px-8 sm:py-10 tm-bg-brown tm-item-container">
                  <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                      <div class="text-right mr-6">
                          <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Cappuccino</h3>
                          <div class="text-white text-md sm:text-lg font-light mb-1">Small $10</div>
                          <div class="text-white text-md sm:text-lg font-light">Large $15</div>
                      </div>
                      <img src={img5} alt="Image" class="rounded-md" />                   
                  </div>
                  <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                      <div class="text-right mr-6">
                          <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Americano</h3>
                          <div class="text-white text-md sm:text-lg font-light mb-1">Small $12.50</div>
                          <div class="text-white text-md sm:text-lg font-light">Large $16.50</div>
                      </div>
                      <img src={img6} alt="Image" class="rounded-md" />                    
                  </div>
                  <div class="flex items-start justify-end mb-6 tm-menu-item-2">
                      <div class="text-right mr-6">
                          <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Milky Latte</h3>
                          <div class="text-white text-md sm:text-lg font-light mb-1">Small $14</div>
                          <div class="text-white text-md sm:text-lg font-light">Large $18</div>
                      </div>   
                      <img src={img7} alt="Image" class="rounded-md" />                 
                  </div>
                  <div class="flex items-start justify-end mb-6 tm-menu-item-2">                    
                      <div class="text-right mr-6">
                          <h3 class="text-lg sm:text-xl tm-text-yellow mb-1">Iced Espresso</h3>
                          <h3 class="text-lg sm:text-xl mb-2 sm:mb-3 tm-text-yellow">Iced Mocha</h3>
                          <div class="text-white text-md sm:text-lg font-light">Small $10 . Large $15</div>
                      </div> 
                      <img src={img8} alt="Image" class="rounded-md" />                   
                  </div>
              </div>
          </div>
      </div>        
    </div>
  )
}

export default CafeMenu