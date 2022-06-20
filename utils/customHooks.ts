import React, { useEffect, useRef } from "react"

/**
 * Custom hook for getting previous value of the state.  
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * @param value 以前の値を取得したいstate
 * @returns previous value
 */
export const usePrevious = <T>(value: T) => {
    const ref = useRef<T>(value)
    useEffect(() => {
      ref.current = value;
    })
    return ref.current
}