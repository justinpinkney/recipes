import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"
grandViewTheme.bodyFontFamily = ["Source Code Pro"]
grandViewTheme.headerFontFamily = ["Source Code Pro"]
grandViewTheme.googleFonts = [
  {
    name: "Source Code Pro",
    styles: ["400"],
  },
]
// grandViewTheme.overrideThemeStyles = () => {
//   return {
//     "body": {
//       fontFamily: ["Source Code Pro", "monospace"]
//     },
//   }
// }

const typography = new Typography(grandViewTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
