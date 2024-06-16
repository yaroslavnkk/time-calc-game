import { forwardRef } from "react";

const Result = forwardRef(function Result({time, timeRemaining, onReset}, ref){
    const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (time * 1000)) * 100);
    return <>
    <dialog ref={ref} className='result'>
        {timeRemaining > 0 ? <h2> Your score : <strong>{score}</strong></h2> : <h2>You lost</h2>}
        <p>
        Time was <strong>{time} second{time > 1 ? 's' : ''}</strong>
        </p>
        <p>
            You stopped timer with <strong>{formattedTimeRemaining} seconds left</strong>
        </p>
        <form method="dialog" onClose={onReset}>
            <button>Close</button>
        </form>
    </dialog>
    </>
})

export default Result;