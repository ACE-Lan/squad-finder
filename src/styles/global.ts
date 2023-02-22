import { globalCss } from "./styles";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0
    },

    body: {
        "-webkit-font-smoothing": "antialiased"
    }
})