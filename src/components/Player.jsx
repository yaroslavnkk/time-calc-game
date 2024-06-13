import { useState, useRef } from 'react'
export default function Player() {
  const player = useRef();
  const [playerName, setPlayerName] = useState(null);
  function handleButtonClick(){
    setPlayerName(player.current.value);
  }
    return (
    <section id="player">
      <h2>Welcome, { playerName ?? 'Player'}!</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
