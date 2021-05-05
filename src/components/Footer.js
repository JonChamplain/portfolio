import React from 'react'

export default function Footer() {
    let date = new Date()
    let currentYear = date.getFullYear()
    return (
        <div className='footer'>
            Jonathan Russell © {currentYear}
        </div>
    )
}