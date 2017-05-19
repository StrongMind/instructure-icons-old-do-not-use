import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconWarningSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconWarningSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1751.547 1581.395l-720-1382.4c-27.12-51.993-116-51.993-143.12 0l-720 1382.4c-12.32 23.808-11.12 51.994 3.52 74.803 14.56 22.58 40.24 36.327 68 36.327h1440c27.76 0 53.44-13.824 68.08-36.403 14.56-22.733 15.84-50.842 3.52-74.727zm-871.6-810.47h160v460.8h-160v-460.8zm80 710.4c-55.2 0-100-42.931-100-96 0-52.992 44.8-96 100-96s100 43.008 100 96c0 53.069-44.8 96-100 96z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}