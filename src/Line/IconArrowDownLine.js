import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconArrowDownLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconArrowDownLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1642.354 360H277.876c-110.96 0-150.88 73.445-88.16 165.531l657.68 965.584c31.2 45.843 71.919 68.885 112.799 68.885 40.64 0 81.36-22.882 112.64-68.885l657.679-965.584c62.24-91.446 22.72-165.531-88.16-165.531m-101.68 160.01l-580.559 852.457-580.56-852.456h1161.12" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}