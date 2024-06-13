import { useState, useRef } from 'react';
export default function TimerChallenge({title, time}){
    let timer = useRef(0);
    const[timerExpired, setTimerExpired] = useState(false);
    const[timerStarted, setTimerStared] = useState(false);
    function handleButtonClick(){
       timer.current = setTimeout(() => {setTimerExpired(true)}, time * 1000);
        setTimerStared(true);
    }
    function handleStopChallenge(){
        clearTimeout(timer.current);
    }
    return <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p>{time} second{time > 1 ? 's' : ''}</p>
        <button onClick={timerStarted ? handleStopChallenge : handleButtonClick}>{timerStarted ? "Stop" : "Start"} Challenge</button>
    </section>
}