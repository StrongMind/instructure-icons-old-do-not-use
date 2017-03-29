import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconTimerLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconTimerLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M962 0c-82.96 0-163.12 11.68-240 31.6v165.28C797.84 173.04 878.4 160 962 160c441.2 0 800 358.88 800 800s-358.8 800-800 800c-441.12 0-800-358.88-800-800 0-223.04 92.16-424.48 240-569.52V640h160V160H82v160h166.32C95.6 490 2 714 2 960c0 529.36 430.72 960 960 960 529.36 0 960-430.64 960-960S1491.36 0 962 0zm-80 400v560c0 21.2 8.4 41.6 23.44 56.64l320 320 113.12-113.2L1042 926.88V400H882z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}