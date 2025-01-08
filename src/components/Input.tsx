import { useState } from "react";

const Input: React.FC = () => {
    const [value , SetValue] = useState("")
    
    function ClickFun() {
        SetValue('');
        console.log(value);

    }
    function WriteTask(event: React.ChangeEvent<HTMLInputElement>) {
        SetValue(event.target.value);
    }

    return (
      <div>
            <input value= {value} onChange={WriteTask} className='w-[381px] h-[32px] rounded-[10px] border-[#9E78CF] p-4'/>
            <button 
            className = 'bg-[#9E78CF] p-1 rounded-[10px] w-[32px] h-[32px] m-[10px]' 
            onClick={ClickFun}>+</button>
        </div>
    );
};

export default Input;