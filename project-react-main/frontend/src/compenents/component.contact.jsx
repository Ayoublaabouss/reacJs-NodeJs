import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import img from "../images/img.jpg"; 

export function Contact() {

 return (
    <>
      <div className="container-fluid py-5 bg-dark text-light">
        <h1 className="text-center mb-5">Contactez-nous</h1>
        <div className="row">
          <div className="col-md-6 p-5">
            <form method="POST" id="contactForm" name="contactForm" className="contactForm">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" className="form-control" name="name" id="name" placeholder="Nom" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Adresse e-mail</label>
                <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer le message</button>
            </form>
          </div>
          <div className="col-md-6 p-5">
            <div className="bg-light" style={{backgroundImage: `url(${img})`, height: "100%", backgroundSize: "cover", backgroundPosition: "center"}}>
             
            </div>
          </div>
        </div>
      </div>
    </>
 ); 
}