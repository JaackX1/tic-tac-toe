export const SaveGame = ({board,turn}) => {
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);
}

export const RemoveGame = () => {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
}

export const SaveMarker = (marker) => {
  window.localStorage.setItem('marker', JSON.stringify(marker));
}

export const RemoveMarker = () => {
  window.localStorage.removeItem('marker');
}