import React from 'react'
import i1 from '../components/images/png5.png'
import i2 from '../components/images/png6.png'

export default function Contato() {
  return (
    <div>
      <>
        <section id="contato">
          <h2>Entre em contato com nossos atendentes.</h2>
          <div>
            <img src={i1} alt="telefone" width="100px" />
            <p>
              <a href="tel:7133628867"> (71)3362-8776 </a>
            </p>
          </div>

          <div>
            <img src={i2} alt="telefone" width="100px" />
            <p>
              <a href="mailto:goviagens@gmail.com"> Goviagens@gmail.com </a>
            </p>
          </div>
        </section>
      </>
    </div>
  )
}
