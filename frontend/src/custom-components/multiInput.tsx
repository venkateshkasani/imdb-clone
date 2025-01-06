'use client'
import { X } from "lucide-react";
import { useEffect, useState } from "react";
const MultiInput = ({placeholder,callbackFunction}:{placeholder:string,callbackFunction:(val:string[]) => void}) => {
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
        <div className="relative w-full max-w-sm">
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


// const bubble = (value:string) => {
//     return (
//         <span className="w-fit absolute left-0 top-0">{value}</span>
//     )
// }

export default MultiInput;