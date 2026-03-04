import  {  useEffect, useState } from 'react'

function AutoTImer() {
    
    const [timer ,setTimer] = useState(0)

    useEffect(() => {

      console.log("timer started")

      const intervalId =  setInterval(() => {
          setTimer(timer + 1) 
        }, 1000);

        return () => {
          console.log("Timer Stopped");
          clearInterval(intervalId)
        }

    },[])

  return (
    <div>
      <h1>Timer : {timer}</h1>
    </div>
  )
}

export default AutoTImer