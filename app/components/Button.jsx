'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Button = ({className,path,children}) => {

    const router = useRouter()
    const handleClick = ()=>{
        router.push(path)
    }
  return (
    <button onClick={handleClick} className={className}>{children}</button>
  )
}

export default Button