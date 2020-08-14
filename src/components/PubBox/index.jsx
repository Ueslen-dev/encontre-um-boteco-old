import React from 'react'

import HeartIcon from '../../assets/icons/heart.svg'

import { Boxpub, Boxpubcontain, Likepub, Boxpubbutton } from './styles.js'

const PubBox = ({ PubImage, PubName, PubState, PubEnd, PubRef, PubLiked, PubInstagram, PubWahtsapp}) => {
    return(
        <Boxpub>
            <img src={PubImage} alt={PubName} id="photo"></img>
            <Boxpubcontain>
                <h2>Boteco do Tomé</h2>
                <h3>{PubState}</h3>
                <p>{PubEnd}</p>
                <p><strong>Ref:</strong> {PubRef}</p>
                <Likepub>
                    <img src={HeartIcon} alt="Ícone coração like"></img>
                    <span>{PubLiked} Curtidas</span>
                </Likepub>
            </Boxpubcontain>
            <Boxpubbutton>
                <a href={PubInstagram}>Instagram</a>
                <a href={PubWahtsapp}>Whatsapp</a>
            </Boxpubbutton>
        </Boxpub>
    )
}

export default PubBox