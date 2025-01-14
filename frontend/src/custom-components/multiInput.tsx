'use client'
import { multiInputProps } from "@/utils/multiInputProps";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
const MultiInput = ({placeholder,callbackFunction,initialData}:multiInputProps) => {
    const [value, setValue] = useState<string>('');
    const [arr, setArr] = useState<string[]>([]);
    const handleEnter = (e:any) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(value.trim() !== '') {
                setArr((prev) => [...prev,value])
                setValue('');
            }
        }
        if(e.key === 'Backspace' && value == '') {
            const tempArr = [...arr];
            tempArr.splice(tempArr.length-1,1);
            setArr(tempArr)
        }
    }

    useEffect(() => {
      if(initialData) {
        callbackFunction(initialData)
        setArr(initialData)
      }
    },[])

    const handleRemove = (e:any,index:number) => {
        e.preventDefault();
        const tempArr = [...arr];
        tempArr.splice(index,1)
        setArr(tempArr)
    }
    
    const handleInputChange = (e:any) => {
        e.preventDefault();  
        setValue(e.target.value) 
    }

    useEffect(() => {
        callbackFunction(arr);
    },[arr])
    return (
        <div className="relative w-full bg-slate-100">
            <div className="border-2 rounded p-2">
                <div className="flex flex-wrap gap-2">
                    {arr.map((val, index) => (
                        <span key={index} className="bg-yellow-500 px-2 text-white rounded-2xl flex justify-row items-start">
                            <span>{val}</span> 
                            <span className="pl-1 hover:cursor-pointer" onClick={(e) => handleRemove(e,index)}><X className="inline" size={15} color="red" /></span>
                        </span>
                    ))}
                </div>
                <textarea
                    onChange={(e) => handleInputChange(e)}
                    onKeyDown={(e) => handleEnter(e)}
                    className="w-full border-none focus:outline-none mt-2"
                    value={value}
                    rows={1}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default MultiInput;