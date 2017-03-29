import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconCopyLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconCopyLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M480 1920h1280V319.987H480V1920zm160-160.001h960.08V479.988H640v1280.01zm800-719.99h-240V800.007h-160v240.002H800v160.001h240v240.002h160V1200.01h240v-160.001zM160 0v1600.013h160V160.001h1040V0H160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}