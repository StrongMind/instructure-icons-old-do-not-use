import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconDragHandleLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconDragHandleLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M642 480h240V240H642v240zm400 0h240V240h-240v240zM642 880h240V640H642v240zm400 0h240V640h-240v240zm-400 400h240v-240H642v240zm400 0h240v-240h-240v240zm-400 400h240v-240H642v240zm400 0h240v-240h-240v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}