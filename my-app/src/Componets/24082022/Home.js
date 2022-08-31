import React from "react";
import './Home.css';
const Home=() => {
    return (
        
        <div className="App">
           
        <div class="footer">
     <div class="inner-footer">
         <img class="footer-logo" src="./logo512.png" alt=""/> React Js<br/>
         <img class="logo" src="./footer-logo.png" alt=""/> React Js
         <div class="footer-section">
             <div class="footer-left_section">
                 <div class="footer-left_text">Lorum ipsum dolor sit amet,consectator adipising elit, sed do<br/>
                     eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                     Quis ipsum suspendisse ultrices gravida. Risus commodo viver<br/>
                     ra maecenas accumsan lacus vel facilisis.</div>
                 <div class="footer-copyright">@COMPANY NAME 2020 ALL RIGHTS RESERVED</div>

             </div>
             <div class="footer-right_section">
                 <div class="footer-mail-location_section">
                     <div class="footer-location_section">
                         <a href="#"><span class="footer-location_icon"><i
                                     class="fa-solid fa-location-dot"></i></span>
                             <span class="footer-icon_text">MAIN ROAD. BUILDING NAME. COUNTRY</span></a>
                     </div>
                     <div class="footer-mail_section">
                         <a href="#"><span class="footer-mail_icon"><i class="fa-solid fa-envelope"></i></span>
                             <span class="footer-icon_text">INFO@COMPANYNAME.COM</span></a>
                     </div>
                 </div>
                 <div class="footer-icon">
                     <a class="footer-social_icon" href=""><i class="fa-brands fa-instagram"></i></a>
                     <a class="footer-social_icon footer-facebook" href=""><i
                             class="fa-brands fa-facebook-f"></i></a>
                     <a class="footer-social_icon" href=""><i class="fa-brands fa-twitter"></i></a>
                     <a class="footer-social_icon" href=""><i class="fa-brands fa-whatsapp"></i></a>
                 </div>
             </div>
         </div>
    </div>
 </div>
 </div>
    );
}
export default Home ;