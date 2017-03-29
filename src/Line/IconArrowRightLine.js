import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconArrowRightLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconArrowRightLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M360 1642.354V277.876c0-110.96 73.445-150.88 165.531-88.16l965.584 657.68c45.843 31.2 68.885 71.919 68.885 112.799 0 40.64-22.882 81.36-68.885 112.64l-965.584 657.679c-91.446 62.24-165.531 22.72-165.531-88.16m160.01-101.68l852.457-580.559-852.456-580.56v1161.12" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}