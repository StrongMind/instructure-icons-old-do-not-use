import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconTargetLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconTargetLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1042 1432.8V1120H882v312.8c-200.56-33.84-358.88-192.16-392.8-392.8H802V880H489.2C523.12 679.44 681.44 521.12 882 487.28V800h160V487.28c200.56 33.84 358.88 192.16 392.8 392.72H1122v160h312.8c-33.92 200.64-192.24 358.96-392.8 392.8zM1842 880h-245.52c-36.32-288.88-265.6-518.16-554.48-554.4V80H882v245.6C593.12 361.84 363.84 591.12 327.52 880H82v160h245.52c36.32 288.96 265.6 518.24 554.48 554.48V1840h160v-245.52c288.88-36.24 518.16-265.52 554.48-554.48H1842V880z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}