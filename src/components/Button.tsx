import React from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
    disabledValue: boolean
}

export const Button: React.FC<ButtonPropsType> = (
    {
        name,
        callback,
        disabledValue
    }
) => {

    const onClickHandler = () => {
        callback()
    }

    return (
        <>
            <button disabled={disabledValue} className="button" onClick={onClickHandler}>{name}</button>
        </>
    )
}