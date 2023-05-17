import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'

const Footer = () => {
    return (
      <footer className='footer'>
        <div  className='containerFooter'>
       

            <div md="4" className='colum'>
              <h1>Contacto</h1>
              <ul>
              <li><a href="#">+593 93 982 7636</a><i className='bx bxl-whatsapp'></i></li>
              <li><a href="#">martinezjhey65@gmail.com</a><i className='bx bxl-gmail'></i></li>
                <li><a href="#">Facebook</a><i className='bx bxl-facebook-square'></i></li>
                <li><a href="#">github</a><i className='bx bxl-github' ></i></li>
                <li><a href="#">Instagram</a><i className='bx bxl-instagram' ></i></li>
              </ul>
            </div>
      
        </div>
      </footer>
    );
  }
  
  export default Footer;