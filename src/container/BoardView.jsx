import React from 'react'
import Styles from '../styles/background.module.css'
import Square from '../components/button/Square'
import Background from '../components/background'
import Modal from '../components/modal'
import image from '../assets/img/draw.webp'

const BoardView = ({
  board,updateBoard,firstGame,startGame,continueGame,turn,marker,resetMarker,
  openModal,winner,resetGame,resetGameAll
}) => {
  return (
    <Background>
        <h1 className='text-5xl md:text-6xl text-white mb-10'>Tic-Tac-Toe</h1>
        <div className='grid customView:grid-cols-3'>
          <div></div>
          <div className='flex justify-center items-center flex-col'>
            <div className={`${Styles.gridContainer} relative overflow-hidden`}>
              {board.map((square,index)=>{
                return (
                  <Square
                    key={index}
                    index={index}
                    updateBoard={updateBoard}
                  >
                    {square}
                  </Square>
                )
              })}

              <img src={image} alt='image1' className='max-w-[160%] absolute top-1/3 left-[-30%]'></img>
              <img src={image} alt='image2' className='max-w-[160%] absolute bottom-1/3 left-[-30%]'></img>

              <img src={image} alt='image3' className='max-w-[160%] absolute bottom-1/2 left-[-15%] rotate-90'></img>
              <img src={image} alt='image4' className='max-w-[160%] absolute bottom-1/2 right-[-15%] rotate-90'></img>
            </div>
            {firstGame ? (
              <h2 onClick={startGame} className='text-5xl md:text-6xl text-white my-10 cursor-pointer hover:text-[#ffa061] transition-colors duration-200'>
                {continueGame}
              </h2>
            ):(
              <h2 className='text-4xl md:text-5xl text-white my-10'>turno de: <span className='text-[#ffa061]'>{turn}</span></h2>
            )}
          </div>
          <div className='flex flex-col items-center customView:ml-10  mt-16  customView:mt-0 relative overflow-hidden'>

            {firstGame ? '' : (<>
              <img src={image} alt='image5' className='max-w-[160%] absolute top-0 left-[-30%] customView:opacity-0'></img>

              <h2 className='text-3xl text-white mb-2 mt-5  customView:mt-0'>Marcador</h2>
              <div className={`${Styles.gridMarcador} relative overflow-hidden`}>
                <div className={`${Styles.gridItem} text-6xl`}>o</div>
                <div className={`${Styles.gridItem} text-6xl`}>x</div>
                <div className={`${Styles.gridItem} text-6xl px-4`}>{marker?.PlayerTwo ? marker?.PlayerTwo : '-'}</div>
                <div className={`${Styles.gridItem} text-6xl`}>{marker?.PlayerOne ? marker?.PlayerOne : '-'}</div>
                <img src={image} alt='image6' className='max-w-[160%] absolute bottom-1/2 left-[-30%]'></img>
                <img src={image} alt='image7' className='max-w-[160%] absolute bottom-1/2 left-[-30%] rotate-90'></img>
              </div>
              {(marker.PlayerOne !== 0 || marker.PlayerTwo !== 0) ? (<h3 onClick={resetMarker} className='text-2xl text-white my-2 border py-2 px-6 rounded-md border-dotted cursor-pointer hover:text-[#ffa061] transition-colors duration-200'>
                Reiniciar
              </h3>) : ''}
              
            </>)}
            
          </div>
        </div>
        
        
        <Modal active={openModal}>
          <div className='flex justify-between flex-col h-full'>
            <div className='flex flex-col items-center'>
              <h2 className='text-3xl md:text-5xl my-5'>{winner ? (
                <>
                Ganador: <span className='text-cyan-300'>{winner}</span>
                </>
                ) : ('Empate')} </h2>
              <img src={image} alt='image8' className='my-5 w-[90%]'></img>
              <p className='text-5xl'>x: {marker?.PlayerOne ? marker?.PlayerOne : '-'}</p>
              <p className='text-5xl my-3'>o: {marker?.PlayerTwo ? marker?.PlayerTwo : '-'}</p>
            </div>
            <div className='flex justify-center gap-5 flex-wrap my-5'>
              <h3 onClick={resetGame} className='text-2xl text-white my-2 border py-2 px-6 rounded-md border-dotted cursor-pointer hover:text-[#ffa061] transition-colors duration-200'>
                Otra Ronda
              </h3>
              <h3 onClick={resetGameAll} className='text-2xl text-red-300 my-2 border py-2 px-6 rounded-md border-dotted cursor-pointer hover:text-[#ffa061] transition-colors duration-200'>
                Reiniciar Todo
              </h3>
            </div>
          </div>
          
        </Modal>
      </Background>
  )
}

export default BoardView
