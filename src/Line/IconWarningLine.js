import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconWarningLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconWarningLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1680.027 1756.46h-1440c-27.76 0-53.44-14.4-68.08-37.92-14.64-23.68-15.84-53.04-3.52-77.92l720-1440c27.12-54.16 116-54.16 143.12 0l720 1440c12.32 24.88 11.12 54.16-3.52 77.92-14.56 23.6-40.24 37.92-68 37.92zm-1310.56-160h1181.12L960.027 415.42l-590.56 1181.04zm510.56-800h160v480h-160v-480zm80 740c55.229 0 100-44.772 100-100s-44.771-100-100-100c-55.228 0-100 44.772-100 100s44.772 100 100 100z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}