import React from 'react'
import i9 from '../components/images/png1.png'
import i10 from '../components/images/png2.png'
import i11 from '../components/images/png3.png'
import i12 from '../components/images/png4.png'

export default function Promocao() {
  return (
    <div>
      <div>
        <section id="promocao">

          <img src={i9} alt="Promo" width="100px" />
          <h3>Online</h3>
          <p>
            Oferecemos atendimento gratuito em nossa plataforma virtual, te
            oferecendo praticidade sem necessidade de deslocamento para loja
            física. Participe do nosso programa de Referral para ganhar brindes!
          </p>
        </section>
      </div>

      <div>
        <img src={i10} alt="Variedade" width="100px" />
        <h3>Diversos Destinos</h3>
        <p>
          Possuimos diversas modalidade de viagem, ofertando um leque de
          possibilidades de investimento para o seu lazer e/ou estudo. Todas as
          modalidades estão enquadradas no sistema de milhas.
        </p>
      </div>

      <div>
        <img src={i11} alt="Câmbio de moeda" width="100px" />
        <h3>Casa de Câmbio</h3>
        <p>
          Possuimos serviços de troca de câmbio para passageiros vinculados à
          GoViagens. Troque uma porcentagem do valor do seu pacote conosco e
          ganhe benefícios acumulativos!
        </p>
      </div>

      <div>
        <img src={i12} alt="Suporte Online" width="100px" />
        <h3>Atendimento Móvel</h3>
        <p>
          Possuimos um aplicativo exclusivo para clientes onde conseguimos
          solucionar tanto os problemas pré quanto os pós embarque da sua
          viagem, prestando todo suporte necessário até a chegada no seu local
          de destino. Divulgue nosso aplicativo e ganhe descontos especiais em
          passagens locais.
        </p>
      </div>
    </div>
  )
}
