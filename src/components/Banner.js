import React from 'react'

export default function Banner(props) {
    return (
        props.bannerText && <div>
            <div className={`alert alert-${props.bannerText.type}`} role="alert">
                {props.bannerText.message}
            </div>
        </div>
    )
}
