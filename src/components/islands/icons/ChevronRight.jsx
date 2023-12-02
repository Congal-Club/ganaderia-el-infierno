import * as React from "react"
const ChevronRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-chevron-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 6 6 6-6 6" />
  </svg>
)
export default ChevronRight
