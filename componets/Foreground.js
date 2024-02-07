"use client"
import React, { useRef, useState } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "success" }
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: "0.4mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "primary" }
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: "0.6mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "primary" }
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: "1.0mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "success" }
    }
  ]
  return <>
      <div ref={ref} className="foreground d-flex justify-content-center">
        {data.map((items, index) => (
          <Card data={items} referance ={ref} />
        ))}
      </div>
  </>
}

export default Foreground