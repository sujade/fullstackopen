import {useState} from "react";

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [average, setAverage] = useState(0)
    const [positivePercentage, setPositivePercentage] = useState(0)

    const handleGoodClicks = () => {
        setGood(good + 1)
        setTotal(total + 1)
        setAverage((good + 1 - bad) / (total + 1))
        setPositivePercentage(((good + 1) / (total + 1)) * 100)
    }

    const handleNeutralClicks = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
        setAverage((good - bad) / (total + 1))
        setPositivePercentage((good / (total + 1)) * 100)
    }

    const handleBadClicks = () => {
        setBad(bad + 1)
        setTotal(total + 1)
        setAverage((good - (bad + 1)) / (total + 1))
        setPositivePercentage((good / (total + 1)) * 100)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClicks} text="good"/>
            <Button handleClick={handleNeutralClicks} text="neutral"/>
            <Button handleClick={handleBadClicks} text="bad"/>
            <h1>statistics</h1>
            <table>
                <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="total" value={total}/>
                <StatisticLine text="average" value={average}/>
                <StatisticLine text="positive" value={positivePercentage + "%"} />
                </tbody>
            </table>
        </div>
    )
}

export default App