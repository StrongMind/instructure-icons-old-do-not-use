import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconCalendarAddSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconCalendarAddSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1600 1480h-240v240h-160v-240H960v-160h240v-240h160v240h240v160zm0-1160h-120V120c0-66.32-53.76-120-120-120-66.24 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.24 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V480c0-88.4-71.6-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}