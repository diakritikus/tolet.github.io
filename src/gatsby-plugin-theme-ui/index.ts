import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const theme = merge(originalTheme, {
  fonts: {
    body: `"Work Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
})

export default theme
