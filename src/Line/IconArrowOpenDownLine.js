import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconArrowOpenDownLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconArrowOpenDownLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M960 1056.43L440.043 536.402c-64.444-64.453-168.117-64.45-232.062-.497-64.39 64.4-63.722 167.867.497 232.095l616.513 616.6c37.041 37.046 87.042 52.798 135.009 47.352 47.967 5.446 97.968-10.306 135.009-47.352l616.513-616.6c64.22-64.228 64.887-167.695.497-232.095-63.945-63.953-167.618-63.956-232.062.497L960 1056.431z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}