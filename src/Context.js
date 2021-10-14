import React,{useState, useEffect} from 'react';

const Context = React.createContext()

function ContextProvider({children}){
  const [premium, setPremium] = useState("monthly")
  const [billRange , setBillRange] = useState("100")
  const [isToggled, setIsToggled] = useState(false)
  const [amount, setAmount] = useState(0)

  function handleRange(event){
    const value = event.target.value
    setBillRange(value)
  }

  useEffect(() => {
    isToggled ? setPremium("yearly") : setPremium("monthly")
  },[isToggled])

  useEffect(() => {
    if(premium === "yearly"){
        setAmount( ((parseInt(billRange)/6.25)*0.75*12).toFixed(2))
    }else if(premium === "monthly"){
        setAmount(  (parseInt(billRange)/6.25).toFixed(2))
    }
  },[premium, billRange])

  function handleChange(event){
    // const name = event.target.name
    const value = event.target.checked
    setIsToggled(value)
  }
  console.log(billRange)

  return(
    <Context.Provider value={{isToggled, handleChange, billRange, handleRange, premium, amount}}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}
