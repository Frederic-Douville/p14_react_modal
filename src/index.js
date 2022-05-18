import React from 'react'

export const Modal = ({ text, textBtn, functionBtn }) => {
  return (
    <div className='modal-bg'>
      <div className='modal-ctn'>
        <span className='modal-msg'>{text}</span>
        <button className='modal-btn' onClick={functionBtn}>
          {textBtn}
        </button>
      </div>
    </div>
  )
}
