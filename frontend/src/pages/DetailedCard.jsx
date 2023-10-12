import React from 'react'
import BannerDetailedCard from '../components/DetailedCard/BannerDetailedCard'
import ImgDetailedCard from '../components/DetailedCard/ImgDetailedCard.jsx'
import MainDetailedCard from '../components/DetailedCard/MainDetailedCard.jsx'

import iconBoulder from '../assets/detailedCard/iconBoulder.png'
import bgRed from '../assets/detailedCard/bgRed.png'
import imgBoulder from '../assets/detailedCard/imgBoulder.png'

function DetailedCard() {
    return (
        <main>
            <BannerDetailedCard 
                title="Escalada/Boulder"
                icon={iconBoulder}
                backGoundRed={bgRed}
            />
            <ImgDetailedCard img={imgBoulder} />
            <MainDetailedCard/>
        </main>
    )
}

export default DetailedCard;
