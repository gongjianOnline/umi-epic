import React from "react"
import styled from "styled-components"

const scriptElem = document.createElement("script")
scriptElem.src="./iconfont.js"
document.body.appendChild(scriptElem)

const SVG = styled.svg`
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
`

interface Props {
  iconName:String,
  [propsName:string]:any
}

const Icon:React.FC<Props> = (props)=>{
  return (
    <SVG className="icon" aria-hidden="true">
      <use xlinkHref={`#${props.iconName}`}></use>
    </SVG>
  )
}
export default Icon
