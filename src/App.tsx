import React, { useEffect, useState } from 'react';
import './App.css';
import { SetCounter } from './components/SetCounter';
import { Counter } from './components/Counter';

function App() {

  const [startValue, setStartValue] = useState(0)
  const [maxValue, setMaxValue] = useState(5)

  const [startCounterValue, setStartValueCounter] = useState(startValue)
  const [maxCounterValue, setMaxValueCounter] = useState(maxValue)

  const [counterValue, setCounterValue] = useState(startCounterValue)

  const [changeDispaly, setChangeDispaly] = useState('counterDisplay')

  let incorrectValue = startValue >= maxValue || startValue < 0 || maxValue <= 0
  let limitValue = counterValue === maxCounterValue
  let resetDisabledButton = counterValue === startCounterValue

  useEffect(() => {
    let counterValueAsString = localStorage.getItem('counterValue')
    let startCounterValueAsString = localStorage.getItem('startCounterValue')
    let maxCounterValueAsString = localStorage.getItem('maxCounterValue')
    let startValueAsString = localStorage.getItem('startValue')
    let maxValueAsString = localStorage.getItem('maxValue')
    let changeDispalyAsString = localStorage.getItem('changeDispaly')

    if (counterValueAsString) {
      let newCounterValueAsString = JSON.parse(counterValueAsString)
      setCounterValue(newCounterValueAsString)
    }

    if (startCounterValueAsString) {
      let newStartCounterValueAsString = JSON.parse(startCounterValueAsString)
      setStartValueCounter(newStartCounterValueAsString)
    }

    if (maxCounterValueAsString) {
      let newMaxCounterValueAsString = JSON.parse(maxCounterValueAsString)
      setMaxValueCounter(newMaxCounterValueAsString)
    }

    if(startValueAsString){
      let newStartValueAsString=JSON.parse(startValueAsString)
      setStartValue(newStartValueAsString)
    }

    if(maxValueAsString){
      let newMaxValueAsString=JSON.parse(maxValueAsString)
      setMaxValue(newMaxValueAsString)
    }

    if(changeDispalyAsString){
      let newChangeDispalyAsString = JSON.parse(changeDispalyAsString)
      setChangeDispaly(newChangeDispalyAsString)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(counterValue))
    localStorage.setItem('startCounterValue', JSON.stringify(startCounterValue))
    localStorage.setItem('maxCounterValue', JSON.stringify(maxCounterValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('changeDispaly', JSON.stringify(changeDispaly))
  }, [counterValue, startCounterValue, maxCounterValue, changeDispaly, startValue, maxValue])

  const setValueHandler = () => {
    setStartValueCounter(startValue)
    setMaxValueCounter(maxValue)
    setCounterValue(startValue)
    setChangeDispaly('counterDisplay')
  }

  const incrementValueHandler = () => {
    if (counterValue !== maxCounterValue) {
      setCounterValue(counterValue + 1)
    }
  }

  const resetValueHandler = () => {
    setCounterValue(startCounterValue)
  }

  const setDisplayHandler = () => {
    setChangeDispaly('setDisplay')
  }

  return (
    <div className="App">
      {changeDispaly === 'counterDisplay'
        ? <Counter
          counterValue={counterValue}
          incrementValue={incrementValueHandler}
          resetValue={resetValueHandler}
          counterDisabledButton={limitValue}
          resetDisabledButton={resetDisabledButton}
          limitValue={limitValue}
          setDisplay={setDisplayHandler} />
        : <SetCounter
          startValue={startValue}
          maxValue={maxValue}
          setStartValue={setStartValue}
          setMaxValue={setMaxValue}
          setValue={setValueHandler}
          incorrectValue={incorrectValue} />}
    </div>
  );
}

export default App;
