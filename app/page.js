"use client"
import React from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import Foreground from '@/componets/Foreground'
const page = () => {
  return <>
    <div className="main">
      <h1>Docs</h1>
    </div>
    <div className="background"></div>
    <Foreground />
  </>
}

export default page