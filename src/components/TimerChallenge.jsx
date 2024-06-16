import { useState, useRef } from 'react';
import Result from './Result.jsx';
export default function TimerChallenge({title, time}){
    let timer = useRef(0);
    let dialog = useRef(null);
    const [timeRemaining, setTimeRemaining] = useState(time * 1000);
    const timeIsActive = timeRemaining > 0 && timeRemaining < time * 1000;
    if(timeRemaining <= 0){
        clearTimeout(timer.current);
        dialog.current.showModal();
    }
    function handleButtonClick(){
       timer.current = setInterval(() => setTimeRemaining(prevTime => prevTime - 10), 10);
    }
    function handleStopChallenge(){
        dialog.current.showModal();
        clearInterval(timer.current);
    }
    function handleReset(){
        setTimeRemaining(time * 1000);
    }
    return <>
        <Result ref={dialog} time={time} timeRemaining={timeRemaining} onReset={handleReset} />
        <section className='challenge'>
            <h2>{title}</h2>
            <p>{time} second{time > 1 ? 's' : ''}</p>
            <button
                onClick={timeIsActive ? handleStopChallenge : handleButtonClick}>
                {timeIsActive ? "Stop" : "Start"} Challenge
            </button>
        </section>
    </>

}