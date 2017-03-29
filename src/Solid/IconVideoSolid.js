import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconVideoSolid (props) {
  return (
    <SVGIcon
      {...props}
      name="IconVideoSolid"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1600 240.24H240c-88.4 0-160 71.68-160 160v1120c0 88.4 71.6 160 160 160h1360c88.32 0 160-71.6 160-160v-1120c0-88.4-71.68-160-160-160zm-960 160h160v160H640v-160zm-240 1120H240v-160h160v160zm0-960H240v-160h160v160zm400 960H640v-160h160v160zm400 0h-160v-160h160v160zm-480-320v-480l480 240-480 240zm480-640h-160v-160h160v160zm400 960h-160v-160h160v160zm0-960h-160v-160h160v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}