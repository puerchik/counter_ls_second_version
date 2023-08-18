import React from "react";
import { Button } from "./Button";


type CounterPropsType = {
    counterValue: number
    incrementValue: () => void
    resetValue: () => void
    counterDisabledButton: boolean
    resetDisabledButton: boolean
    limitValue: boolean
    setDisplay: () => void
}

export const Counter: React.FC<CounterPropsType> = (
    {
        counterValue,
        incrementValue,
        resetValue,
        counterDisabledButton,
        resetDisabledButton,
        limitValue,
        setDisplay
    }
) => {
    return (
        <div className="main-wrapper border">
            <div className="display-wrapper display-wrapper-counter border">
                <span className={`counter-value ${limitValue ? "limit-value" : ""}`}>{counterValue}</span>
            </div>
            <div className="button-bar-wrapper button-bar-wrapper-counter border">
                <Button disabledValue={counterDisabledButton} name={"inc"} callback={incrementValue} />
                <Button disabledValue={resetDisabledButton} name={"reset"} callback={resetValue} />
                <Button disabledValue={false} name={"set"} callback={setDisplay} />
            </div>
        </div>
    )
}