import React, { ChangeEvent } from "react";

type InputPropsType = {
    value: number
    callback: (value: number) => void
    incorrectValue: boolean
}

export const Input: React.FC<InputPropsType> = (
    {
        value,
        callback,
        incorrectValue
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
    }

    return (
        <>
            <input
                onChange={onChangeHandler}
                value={value}
                className={`input ${incorrectValue
                    ? "incorect-value-input"
                    : ""}`} type="number" />
        </>
    )
}