import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = (props) => {
  return (
    <footer className="site-footer">

    <div className="wrapper">

      <h2 className="footer-heading">Open Legend Grimoire</h2>

      <div className="footer-col-wrapper">
        <div className="footer-col footer-col-1">
          <ul className="contact-list">
            <li><p className="text">A searchable database for <a href="https://openlegendrpg.com/" target="_blank" rel="noopener noreferrer">Open Legend RPG</a></p></li>
          </ul>
        </div>

        <div className="footer-col footer-col-2">
          <p>Based on the <a href="https://thebombzen.com/grimoire/" target="_blank" rel="noopener noreferrer">D&amp;D Grimoire</a> maintained by <a href="https://github.com/thebombzen/grimoire/" target="_blank" rel="noopener noreferrer">thebombzen</a></p>
        </div>
      
      <div className="footer-col footer-col-3">
        <p>Source available on <a href="https://github.com/frankieali/open-legend-grimoire" target="_blank" rel="noopener noreferrer">Github</a>.</p>
      </div>
    </div>
    <div className="footer-top-link"><Link to="#top">Back to top &#8593;</Link></div>

    </div>

    </footer>
  )
}

export default Footer
