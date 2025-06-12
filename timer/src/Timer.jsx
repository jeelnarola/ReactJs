import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
const timerRef = useRef(null)
    var timer;

    const start = () => {
        // if (timerRef.current !== null) return
        timerRef.current = setInterval(() => {
            setSecond((prevSecond) => {
                if (prevSecond === 59) {
                    setMinute((prevMinute) => prevMinute + 1)
                    return 0
                }
                return prevSecond + 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }

    const stop = () =>{
        clearInterval(timerRef.current)
        timerRef.current = null
    }

    const reset = () => { 
        clearInterval(timer)
        setSecond(0)
        setMinute(0)
    }
    useEffect(() => {

    })
    return (
        <div className='text-center uppercase w-96 h-[50vh] p-10 pt-30 bg-red-900 text-white border-2 border-white '>
            <h1>Timer</h1>

            <div>
                <p className='text-3xl py-10'>{minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}</p>
                <button onClick={start} className='m-2'>Start</button>
                <button onClick={stop} className='m-2'>Stop</button>
                <button onClick={reset} className='m-2'>Reset</button>
            </div>
            {/* <h1>Timer</h1> */}
        </div>
    )
}

export default Timer