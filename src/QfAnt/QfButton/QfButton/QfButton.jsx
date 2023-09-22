import React, { Children } from 'react'
import "./QfButton.css"
export default function QfButton({children}) {
  return (
    <div>
      <button className='qf-ant-btn-default qf-ant-btn'>{children}</button>
    </div>
  )
}
