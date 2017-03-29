import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconMediaSolid (props) {
  return (
    <SVGIcon
      {...props}
      name="IconMediaSolid"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1641 560h-160V400h160v160zm0 960h-160v-160h160v160zm-400-960h-160V400h160v160zm-480 640V720l480 240-480 240zm480 320h-160v-160h160v160zm-400 0H681v-160h160v160zM441 560H281V400h160v160zm0 960H281v-160h160v160zM681 400h160v160H681V400zm960-160H281c-88.4 0-160 71.6-160 160v1120c0 88.32 71.6 160 160 160h1360c88.32 0 160-71.68 160-160V400c0-88.4-71.68-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}