import React from 'react'
import Styles from '../../styles/background.module.css'

const Background = ({children}) => {
  return (
    <div className="relative min-h-screen w-full bg-[#CF814E] p-3 md:p-5 grid">
      <div className={`${Styles.Hola2}`}>
        <div className={`${Styles.Hola} w-full h-full p-2 md:p-3`}>
          <div className={`${Styles.innerShadow} w-full h-full bg-[#51A746] border-black/40 border-4
          flex customView:justify-center items-center flex-col py-10 px-2`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Background
