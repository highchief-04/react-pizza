import React from 'react'
import "./css/footer.css"


const Footer = () => {
    const openTime=12
    const closeTime=22

    const currentTime= new Date().getHours();
    const isOpen = currentTime >= openTime && currentTime <= closeTime;
  return (
    <>
        <div className="order">
{isOpen ? (
    <>
    <h2 className="footer">
        we're happy to attend to your taste buds 
    </h2>
    <button className="btn">order your meal</button>
    </>
): (
    <>
    <h2 className="footer"> we will be glad to attend to u during our opening hours (12:00 to 22:00)</h2>
    </>
)}


</div>
</>

  )
}

export default Footer