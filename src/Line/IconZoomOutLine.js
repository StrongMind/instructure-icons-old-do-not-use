import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconZoomOutLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconZoomOutLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825zM537.64 822.437h480v-158.32h-480v158.32z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}