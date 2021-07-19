import React, {useState, useEffect} from 'react'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
import backImage from '../images/10.png'

const BoardGame = () => {

    const animals =[
        { id : 1, src: image1},   
        { id : 2, src: image2},   
        { id : 3, src: image3},   
        { id : 4, src: image4}   
    ]

    const doubleAnimals =[...animals, ...animals]

    const [openCard, setOpenCard] = useState([])
    const [matched, setMatched] = useState([])

    // const handleFlip = idx=>{
    //     setOpenCard(idx=>[...openCard,idx])
    // }
    const handleClick = index=>setOpenCard(openCard => [...openCard,index])

    useEffect(() => {
        const firstCard = doubleAnimals[openCard[0]]
        const secondCard = doubleAnimals[openCard[1]]
        if (secondCard && firstCard.id == secondCard.id){
            setMatched([...matched,firstCard.id])
        }
        if (openCard.length===2) setTimeout(() => {
            setOpenCard([])
        }, 1000);
    }, [openCard])

    return (
        <div className='board'>
            {doubleAnimals.map((animal, index)=>{

                let flipCard = false;
                if(openCard.includes(index)) flipCard=true;
                if (matched.includes(animal.id)) flipCard=true;
                return (
                    <div className="animal-card" key={index} onClick={()=>handleClick(index)}>
                        <div className={`inner ${ flipCard && 'flipped'}`}
                            >
                            <div className="front">
                                <img src={animal.src} alt='' width='100' />
                            </div>
                            <div className="back">
                                <img src={backImage} alt='' width='100'/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BoardGame
