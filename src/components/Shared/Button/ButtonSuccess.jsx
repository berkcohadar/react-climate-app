import React from 'react'

export default function ButtonSuccess({content, onClickHandler}) {
  return (
    <div onClick={() => onClickHandler()} className='main-button-success'>{content}</div>
  )
}
