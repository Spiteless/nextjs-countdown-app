import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'

// import data from '../config'

export default function Timer() {
    const [targetTime, setTimer] = useState(moment())
    const [currentTime, setCurrentTime] = useState(moment())
    const timeBetween = moment.duration(targetTime.diff(currentTime))

    useEffect(() => {
        setTimer(moment("May 1, 2022 16:00:00 UTC"))
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const countdownDisplay = []

    const outputString = () => {
        const data = [
            [timeBetween.years(), 'Years'],
            [timeBetween.months(), 'Months'],
            [timeBetween.days(), 'Days'],
            [timeBetween.hours(), 'Hours'],
            [timeBetween.minutes(), 'Minutes'],
            [timeBetween.seconds(), 'Seconds'],
        ]
        return data.filter((val) => val[0] > 0)
    }

    return (
        <div>
            <h2 className="counter">
                {outputString().map(vals => {
                 const [num, text] = vals
                 return (<span key={`${text}${num}`}>{num} {text} </span>)})}
            </h2>
        </div>
    )
}
