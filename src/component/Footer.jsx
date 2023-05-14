import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">cooking</a>
                <a className="link link-hover">on time delivary</a>
                <a className="link link-hover">tasty</a>
                <a className="link link-hover">clean</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">mac donals</a>
                <a className="link link-hover">kfc</a>
                <a className="link link-hover"></a>
                <a className="link link-hover">sarinda</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">good behave</a>
                <a className="link link-hover">cheap food</a>
                <a className="link link-hover">responsibility</a>
            </div>
        </footer>
    );
};

export default Footer;