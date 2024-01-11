import React from 'react'
import Styles from '../../styles/background.module.css'
import image from '../../assets/img/chain-image.webp'
import { Fade } from 'react-awesome-reveal'

const Modal = ({active, children}) => {

  return active ?  (
    <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black/50 grid justify-center pt-20'>
      <Fade className='relative' direction={'down'} duration={600}>
        <div className='relative'>
          <div className="relative z-50 h-[600px] md:h-[500px] w-[300px] md:w-[500px] bg-[#CF814E] p-2 grid rounded-xl">
            <div className={`${Styles.Hola2}`}>
              <div className={`${Styles.Hola} w-full h-full p-1`}>
                <div className={`${Styles.innerShadow} w-full h-full bg-[#51A746] border-black/40 border-2`}>
                  {children}
                </div>
              </div>
            </div>
          </div>
          <img src={image} alt='chain1' className='absolute left-0 -top-48 w-[100px] z-0'></img>
          <img src={image} alt='chain2' className='absolute right-0 -top-48 w-[100px] z-0'></img>
        </div>
      </Fade>
    </div>
  ):''
}

export default Modal
