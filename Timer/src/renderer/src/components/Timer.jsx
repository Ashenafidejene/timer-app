import React, { useState,useEffect } from 'react'
import InputFiled from './InputFiled'
export default function Timer({ isOverlay }) {
  const [isEditing, setIsEditing] = useState(true);
  const [minute, setMinute] = useState(1);
  const [hour, setHour] = useState(2);
  const [second, setSecond] = useState(3);
  const [active, setActive] = useState(false);
  useEffect(()=>{
    let intervalid
    if (active) {
      intervalid = setInterval(()=>{
        if(second > 0){
          setSecond((second)=> second - 1)
        }else{
          if (minute === 0 && hour === 0){
            clearInterval(intervalid)
            setActive(false)
          }
          else{
            if (minute ==0){
              setHour((hour)=>hour - 1)
              setMinute(59)
            }
            else{
             setMinute((minute)=>minute-1)
            }

            setSecond(59)

          }
        }

      },1000)
    }else{
      clearInterval(intervalid)
    }
    return ()=> clearInterval(intervalid)
  })

  return (
    <div className='flex justify-center'>
      {isEditing ? (
        <div>
          <InputFiled
            label={"minute"}
            value={minute}
            placeholder={"minute"}
            onChange={(e) => setMinute(parseInt(e.target.value))}
          ></InputFiled>
          <InputFiled
            label={"hour"}
            value={hour}
            placeholder={"hour"}
            onChange={(e) => setHour(parseInt(e.target.value))}
          ></InputFiled>
          <InputFiled
            label={"second"}
            value={second}
            placeholder={"second"}
            onChange={(e) => setSecond(parseInt(e.target.value))}
          ></InputFiled>
          <button
            className='bg-blue-500 text-stone-200 px-20 py-1 rounded-xl ml-1'
            onClick={() => setIsEditing(false)}
          >
            &#x2713;
          </button>
        </div>
      ) : (
        <div>
          <div className='text-green-500 text-6xl'>
            {hour.toString().padStart(2, 0)}:
            {minute.toString().padStart(2, 0)}:
            {second.toString().padStart(2, 0)}
          </div>
          {active ? (
            <div className='flex justify-center'>
              <button className='text-orange-400 text-2xl ' id='pause' onClick={()=>{
                setActive(false)
              }} >||</button>
              <button id='stop'  className='text-red-800 text-5xl' onClick={()=>{
                setHour(0)
                setMinute(0)
                setSecond(0)
                setActive(false)
              }}>&#x2022;</button>
            </div>
          ) : (
            <div  className='flex justify-center'>
              <button className='text-green-600 text-3xl' id='start' onClick={()=>{
                setActive(true)
              }}>&#9658;</button>
              <button className='text-yellow-500 text-xl pe-1' id="edit" onClick={()=>{
                setIsEditing(true)
              }} >&#9998;</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
