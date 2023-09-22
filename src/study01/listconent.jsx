import React,{useContext} from 'react'
import { ListDispatchContext,ListContext } from './ListProvider'
export default function ListConent() {
    const list=useContext(ListContext)
    const listDispatch=useContext(ListDispatchContext)
  return (
    <div>
      <ul>
        {list.map(item=>{
            return (
                <li key={item.id}>{item.text}
                <button onClick={()=>listDispatch({type:'edit',id:item.id})}>edit</button>
                <button onClick={()=>listDispatch({type:'remove',id:item.id})}>remove</button>
                </li>

            )
        })}
      </ul>
    </div>
  )
}
