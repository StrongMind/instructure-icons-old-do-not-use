import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconImportContentSolid (props) {
  return (
    <SVGIcon
      {...props}
      name="IconImportContentSolid"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1360 960c88.24 0 160 71.84 160 160v80h160v-80c0-176.48-143.52-320-320-320H913.12l160-160L960 526.88 606.88 880 960 1233.12 1073.12 1120l-160-160H1360zm-80-640v160H400v960h720v-240h160v400H240V320h1040z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}