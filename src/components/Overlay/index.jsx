import React from "react"
import { SVG } from "./styles"

export const Overlay = (props) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M800 0S671.769 9.034 609.285 85.069c-62.484 76.035-29.19 162.019-77.541 214.931-79.799 87.327-125.371 37.141-210.038 134.379C250.433 516.235 248.683 600 248.683 600H0V0h800z"
        fill="#fff"
      />
    </SVG>
  )
}
