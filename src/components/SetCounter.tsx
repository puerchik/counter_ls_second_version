import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

type SetCounterPropsType = {
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setValue: () => void
    incorrectValue: boolean
}

export const SetCounter: React.FC<SetCounterPropsType> = (
    {
        startValue,
        maxValue,
        setStartValue,
        setMaxValue,
        setValue,
        incorrectValue
    }
) => {
    return (
        <div className="main-wrapper border">
            <div className="display-wrapper border">
                <div className="input-wrapper">
                    <span className="input-wrapper-text">max value:</span>
                    <Input incorrectValue={incorrectValue} callback={setMaxValue} value={maxValue} />
                </div>
                <div className="input-wrapper">
                    <span className="input-wrapper-text">start value:</span>
                    <Input incorrectValue={incorrectValue} callback={setStartValue} value={startValue} />
                </div>
            </div>
            <div className="button-bar-wrapper border">
                <Button disabledValue={incorrectValue} name={"set"} callback={setValue} />
            </div>
        </div>
    )
}