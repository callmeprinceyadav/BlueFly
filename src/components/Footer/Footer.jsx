import React from 'react';
import './Footer.css'; //

const Footer = ()=>{
    return (
        <>
        <div className="footer">
        
                <div className='footer_links'>
                    <h3>About Us</h3>
                    <div className='footer_links_container'>
                        <div className='footer_links_container_item'>
                            Contact us
                        </div>
                        <div className='footer_links_container_item'>
                            Frequently Asked Questions
                        </div>
                        <div className='footer_links_container_item'>
                            Shipping & Returns
                        </div>
                        <div className='footer_links_container_item'>
                            Pre-Owned Guide
                        </div>
                        <div className='footer_links_container_item'>
                            Sell on Bluefly
                        </div>
                    </div>
                </div>
       
                             
                        <div className='footer_section'>
                                    <div className='footer_links_container_item'>
                                        Privacy Policy
                                    </div>
                                    <div className='footer_links_container_item'>
                                    Terms & Conditions
                                    </div>
                                    <div className='footer_links_container_item'>
                                    Do not sell my personal information
                                    </div>
                                    <div className='footer_links_container_item'>
                                    Shop Pay Installments
                                    </div>            
                        </div>

            <div className='footer_fill'>
                <h3>SIGN UP AND SAVE</h3>
                <div>Subscribe to get exclusive offers on designer brands</div>
                <div>
                    <input type="text" id="name" name="name"></input>
                    <button>SUBSCRIBE</button>
                </div>
                
                
            </div>
        </div>
        </>
    )
}

export default Footer;