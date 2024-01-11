import { useState } from 'react';
import confetti from 'canvas-confetti';
import { TURNS, WINNER_COMBOS } from './constants';
import BoardView from './container/BoardView';
import { SaveGame, RemoveGame, SaveMarker, RemoveMarker } from './logic/localStorage';


function App() {
  const [firstGame, setFirstGame] = useState(true);
  const [winner, setWinner] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });
  const [continueGame, setContinueGame] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? 'Continuar' : 'Empezar'
  });
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X
  });
  const [marker, setMarker] = useState(()=>{
    const markerFromStorage = window.localStorage.getItem('marker');
    return markerFromStorage ? JSON.parse(markerFromStorage) : {PlayerOne: 0, PlayerTwo: 0}
  });

  const startGame = () => setFirstGame(false);

  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo;
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }

    }
    return null;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setOpenModal(false)
    RemoveGame()
  }

  const resetGameAll = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setOpenModal(false)
    setMarker({
      PlayerOne: 0,
      PlayerTwo: 0,
    })
    setFirstGame(true)
    RemoveGame()
    RemoveMarker();
    setContinueGame('Empezar')
  }

  const resetMarker = () => {
    setMarker({
      PlayerOne: 0,
      PlayerTwo: 0,
    })
  }

  const checkEndGame = (newBoard) => (newBoard.every((Square) => Square != null))

  const updateBoard = (index) => {
    if(board[index] || winner || firstGame) return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)

    SaveGame({
      board:newBoard,
      turn:newTurn
    });

    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti();
      setWinner(newWinner);
      setOpenModal(true)

      if (newWinner === TURNS.X) {
        const newMarker = {
          PlayerOne: marker.PlayerOne+1,
          PlayerTwo: marker.PlayerTwo,
        }
        setMarker(newMarker);
        SaveMarker(newMarker);
      } else {
        const newMarker = {
          PlayerOne: marker.PlayerOne,
          PlayerTwo: marker.PlayerTwo+1,
        }
        setMarker(newMarker);
        SaveMarker(newMarker);
      }

    } else if (checkEndGame(newBoard)){
      setWinner(false);
      setOpenModal(true);
    }
  }

  return <BoardView 
    board={board} 
    updateBoard={updateBoard} 
    firstGame={firstGame}
    startGame={startGame}
    continueGame={continueGame}
    turn={turn}
    marker={marker}
    resetMarker={resetMarker}
    openModal={openModal}
    winner={winner}
    resetGame={resetGame}
    resetGameAll={resetGameAll}
  />;
}

export default App;
