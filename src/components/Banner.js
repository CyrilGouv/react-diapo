import { useEffect, useState } from 'react'
import { data } from '../data.js'

import './Banner.css'

const Banner = () => {

    const [num, setNum] = useState(0)
    const { img } = data[num]

    useEffect(() => {
        const runInterval = setInterval(() => {

            setNum((num) => {
                let newIndex = num + 1

                return checkNum(newIndex)
            })
            
        }, 600)

        return () => clearInterval(runInterval)
    }, [])


    const checkNum = (index) => {
        if (index > data.length - 1) {
            return 0
        }

        return index
    }
    

    return (
        <section className="Banner">
           <img src={ img } alt='Banner' />
        </section>
    )
}

export default Banner