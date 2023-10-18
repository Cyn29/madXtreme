import React from 'react'
import BannerDetailedCard from '../components/DetailedCard/BannerDetailedCard'
import ImgDetailedCard from '../components/DetailedCard/ImgDetailedCard.jsx'
import MenuDetailedCard from '../components/DetailedCard/MenuDetailedCard.jsx'
import PackDetailedCard from '../components/DetailedCard/PackDetailedCard.jsx'
import DescriptionDetailedCard from '../components/DetailedCard/DescriptionDetailedCard'

import iconBoulder from '../assets/detailedCard/iconBoulder.png'
import bgRed from '../assets/detailedCard/bgRed.png'
import imgBoulder from '../assets/detailedCard/imgBoulder.png'
import imgPack1 from '../assets/detailedCard/imgPack1.jpg'
import imgPack2 from '../assets/detailedCard/imgPack2.jpg'
import imgPack3 from '../assets/detailedCard/imgPack3.jpg'
import buyIcon from '../assets/detailedCard/buyIcon.png'


function DetailedCard() {
    return (
        <main>
            <BannerDetailedCard 
                title="Escalada/Boulder"
                icon={iconBoulder}
                backgroundRed={bgRed}
            />
            <ImgDetailedCard img={imgBoulder} />
            <section className='w-75 mx-auto'>
                <MenuDetailedCard/>
                <article className="d-flex flex-column flex-lg-row justify-content-between align-items-start">
                <div >
                        <DescriptionDetailedCard />
                        {/* <PriceDetailedCard /> */}
                        {/* <DetailsDetailedCard /> */}
                        {/* <CommentsDetailedCard /> */}
                        {/* <MeetingPointDetailedCard /> */}
                </div>
                <div className="d-flex flex-column justify-content-cener align-items-center">
                    <PackDetailedCard packImage={imgPack1} title={"15 de Noviembre"} price={"65€"} button={buyIcon} opinions={"4.7/5 opiniones"} />
                    <PackDetailedCard packImage={imgPack2} title={"20 de Diciembre"} price={"65€"} button={buyIcon} opinions={"4.9/5 opiniones"} />
                    <PackDetailedCard packImage={imgPack3} title={"1 de Enero 2024"} price={"65€"} button={buyIcon} opinions={"4.8/5 opiniones"} />
                    </div>
                </article>
             </section>
        </main>
    )
}

export default DetailedCard;
