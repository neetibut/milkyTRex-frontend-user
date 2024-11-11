import React from "react";
import { Link } from "react-router-dom";
import facebookLogo from '../assets/Facebook-logo.svg';
import instagramLogo from '../assets/Instagram-logo.svg';

const Footer = () => {
    return (
        <div className="bg-slate-600">
            <div className="flex justify-between">
                <div className="text-left">
                    <h1>MILKY-TEA-REX</h1>
                    <p>Incredible, sustainably sourced tea delivered fresh <br />from the best roasters in the nation.</p>
                    <div className="flex">
                        <img src={facebookLogo} alt="facebook"
                        className="w-5" />
                        <img src={instagramLogo} alt="instagram"
                        className="w-5" />
                    </div>
                </div>
                <div className="text-left">
                    <h2>OVERVIEW</h2>
                    <div className="flex gap-7">
                        <div>
                            <p>HOME</p>
                            <p>SHOP</p>
                            <p>HOW TO</p>
                        </div>
                        <div>
                            <p>RECOMMENDATION</p>
                            <p>ROASTER</p>
                            <p>BLOG</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <p>Copyright 2024 All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer;