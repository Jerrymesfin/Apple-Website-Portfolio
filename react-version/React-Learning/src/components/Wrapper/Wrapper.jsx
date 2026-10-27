import React from 'react'

 function Wrapper() {
  return (
    <div>
      <section className="wrapper">
         <div className="container">
            <div className="model">
                <p>16-inch model</p>
            </div>
            <div className="title">
                <p>MacBook Pro</p>           
             </div>
            <div className="discription">
                <p>The best for brightest</p>
            </div>
            <div className="links">
                <ul>
                    <li><a href="#">Learn more</a></li>
                    <li><a href="#">Buy</a></li>
                </ul>
            </div>
            <div className="image">
                <img src="/images/home/mac-laptop.jpg" alt="MacBook Pro" />
            </div>

         </div>
     </section>
    </div>
  )
}
export default Wrapper;