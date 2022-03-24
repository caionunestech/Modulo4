import React from "react";
import i3 from '../components/images/jpg1.jpg'
import i4 from '../components/images/jpg2.jpg'
import i5 from '../components/images/jpg3.jpg'
import i6 from '../components/images/jpg4.jpg'
import i7 from '../components/images/jpg5.jpg'
import i8 from '../components/images/jpg6.jpg'

export default function Destinos() {
    return (
    <>
        <div>
            <section id="destinos">
            <h2>Destinos</h2>
            <img src={i3} alt="Praia" />
            <img src={i4} alt="Campo" />
            <img src={i5} alt="Céu estrelado" />
            <img src={i6} alt="Estrada" />
            <img src={i7} alt="Rio" />
            <img src={i8} alt="Praia e Rochas" />
            </section>
        </div>
    </>
    );
}