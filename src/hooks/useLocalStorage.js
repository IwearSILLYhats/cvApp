import { useState, useEffect } from "react";

export const useLocalStorage = (key, initVal) => {
    const [value, setValue] = useState(getLocalstorage(key, initVal))
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return {value, setValue};
}

function getLocalstorage (key, initVal) {
    const storageVal = localStorage.getItem(key)
    const parsedVal = JSON.parse(storageVal)
    return parsedVal || initVal;
}