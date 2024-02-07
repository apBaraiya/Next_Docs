"use client"
import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
const Card = ({ data, referance }) => {
    return <>
        <motion.div className="card mt-3 mx-3" drag dragConstraints={referance} whileDrag={{scale:1.05}}>
            <div className="card-body">
                <FaFileAlt className='fs-4' />
                <p className="card-text fs-6 fw-semibold my-3">{data.desc}</p>
            </div>
            <div className="card-footer border-0 p-0 bg-transparent">
                <div className="filesize p-3 d-flex justify-content-between align-items-center">
                    <h6 className='fw-semibold'>{data.filesize}</h6>
                    <span className='download_icon d-flex align-items-center justify-content-center'>
                        {data.close ? <IoCloseSharp/>: <GoDownload />}
                    </span>
                </div>
                <div className={`tag w-100 bg-${data.tag.tagColor} d-flex align-items-center justify-content-center`}><h6 className='fs-6 fw-semibold text-white py-2 mb-0'>{data.tag.tagTitle}</h6></div>
            </div>
        </motion.div>
    </>
}

export default Card