import React from "react"
import "../styles/footer.css"

function Footer(){
return ( <footer>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<div className="footer">
<div className="row">
<a href="#" className="text-color"><i className="fa fa-facebook"></i></a>
<a href="#" className="text-color"><i className="fa fa-instagram"></i></a>
<a href="#" className="text-color"><i className="fa fa-youtube"></i></a>
<a href="#" className="text-color"><i className="fa fa-twitter"></i></a>
</div>

<div className="row">
<ul>
<li><a href="#" className="text-color">Contact us</a></li>
<li><a href="#" className="text-color">Our Services</a></li>
<li><a href="#" className="text-color">Privacy Policy</a></li>
<li><a href="#" className="text-color">Terms & Conditions</a></li>

</ul>
</div>

<div className="row text-color" >
CampusConnect Copyright © 2023 
</div>
</div>
</footer>

);

}

export default Footer;