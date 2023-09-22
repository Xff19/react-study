import React,{useContext} from 'react'
import { ListDispatchContext } from './ListProvider'

export default function ListHead() {
    const listDispatch=useContext(ListDispatchContext)
  return (
    <div>
      <input type='text'/><button onClick={()=>listDispatch({type:'add'})}>add</button>
    </div>
  )
}
