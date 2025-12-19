import { useState, useEffect } from "react";

import { doneTasksToDelete } from "../../../lib/hooks/config"
import Button from "../../ui/Button";
import ButtonQuery from "../../ui/ButtonQuery"
import Percent from "../../ui/Percent"
import ToggleList from "../../ui/ToggleList";
import useStorage from "../../../lib/hooks/useStorage"
import BinIcon from "../../ui/NavIcons/BinIcon";
import Confirm from "../../ui/Confirm";


// reusable Comp for Todo ('/') & Shop ('/shop') - state without date
export default function TodoShop({type}){
const [todoes, setTodoes, error] = useStorage(type, [])
const [maxReached, setMaxReached] = useState(false)
 const [confirm, setConfirm] = useState(false)

useEffect(() => {
  const doneTasks = todoes?.filter(t => t.done && !t.delete)?.length
  setMaxReached(doneTasks >= doneTasksToDelete);
}, [todoes]);


return (<>  {confirm && <Confirm clickYes={()=>{setTodoes((prev) => prev.filter((item) => !item.done)); setConfirm(false)}} clickNo={()=>setConfirm(false)}/>}  <div className="max-w-screen sm:px-5 flex flex-row items-center mx-1 sm:mx-6 justify-end  relative">
  {type === 'todoes' && <Percent arr={todoes}></Percent>}
         
     <div className="w-full flex items-center flex-row"><ButtonQuery tasks={todoes} setTasks={setTodoes} placeholder={type === 'todoes' ? 'Add Todoes / Notes..' : 'Add Shop Items..'}>
              </ButtonQuery>
<Button onClick={() => setConfirm(true)} 
disabledOnDefault={!maxReached} textSize="text-xs" > <BinIcon maxReached={maxReached}/>
</Button> </div>
            </div>
             {error ? (<div className='text-center'>Storage Problem.</div>) : todoes.length === 0 ? (<div className='text-emerald-400/50 text-center uppercase font-extrabold widest mt-9'>
 {type === 'todoes' ? 'No Todoes / Notes Yet 📋' : type === 'shopItem' ? 'No Shop Items Yet 🛒' : ''}</div>
) : (
    <ToggleList
    tasks={todoes}
    onDelete={(id) =>
      setTodoes((prev) => prev.filter((item) => item.id !== id))
    }
    onToggle={(id) =>
      setTodoes((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        )
      )
    }
    maxHeight={`${type === 'todoes' ? 'max-h-113 sm:max-h-113': 'max-h-120 sm:max-h-113'} `}
  />

)} </>)
}
