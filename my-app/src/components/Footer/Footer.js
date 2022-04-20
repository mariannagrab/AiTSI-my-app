import React, { Component } from "react";
import './Footer.css';
class Footer extends Component {

    render() {
        return (<footer><div className="socials">
            <div className="socialdivs">
                <div className="fb">
                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                </div>
                <div className="yt">
                <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="tw">
                <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                </div>               
            </div>
            <div className="info">
                Zapraszam na social media!
                </div>
        </div>
        </footer>);
    }
}

export default Footer;