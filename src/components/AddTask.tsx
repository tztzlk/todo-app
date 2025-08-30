    import { useState } from "react";
    import React from "react";

    type InputProps = {
        onAdd: (title: string) => void; 
    }
    
    const Input: React.FC<InputProps> = ({onAdd}) => {
        const [value , SetValue] = useState("")
        
       

        function ClickFun() {
            if (value.trim() === '') return;
            SetValue('');
            console.log(value);
            onAdd(value);
        }
        function WriteTask(event: React.ChangeEvent<HTMLInputElement>) {
            SetValue(event.target.value);
        }

       

        return (
        <div>
                <input value= {value} onChange={WriteTask} onKeyPress={e => {
                    if (e.key === 'Enter') ClickFun();
                }} className='w-[381px] h-[40px] rounded-[10px] border border-[#9E78CF] px-4 bg-[#1D1825]' placeholder='Add a new task' />
                <button 
                className = 'bg-[#9E78CF] p-1  justify-center text-white font-bold rounded-[10px] w-[32px] h-[32px] m-[10px]' 
                onClick={ClickFun}>+</button>
            </div>
        );
    };

    export default Input;