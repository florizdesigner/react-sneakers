import React from "react"
import ContentLoader from "react-content-loader"

import s from './Loader.module.scss'

export const ItemsLoader = (props) => (
    <ContentLoader
        speed={2}
        width={210}
        height={246}
        viewBox="0 0 210 246"
        backgroundColor="#ebebeb"
        foregroundColor="#d6d6d6"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
        <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
        <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
        <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
)

export const OrderLoader = (props) => (
    <ContentLoader
        speed={2}
        width={800}
        height={260}
        viewBox="0 0 800 260"
        backgroundColor="#ebebeb"
        foregroundColor="#d6d6d6"
        {...props}
    >
        <rect x="33" y="28" rx="0" ry="0" width="0" height="1" />
        <rect x="0" y="1" rx="10" ry="10" width="578" height="15" />
        <rect x="31" y="178" rx="0" ry="0" width="96" height="0" />
        <rect x="37" y="180" rx="0" ry="0" width="87" height="0" />
        <rect x="26" y="145" rx="0" ry="0" width="70" height="0" />
        <rect x="0" y="28" rx="10" ry="10" width="578" height="15" />
        <rect x="0" y="55" rx="10" ry="10" width="578" height="15" />
        <rect x="0" y="82" rx="10" ry="10" width="578" height="15" />
    </ContentLoader>
)
