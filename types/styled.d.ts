import "styled-components"

type ColorTypes = "black" | "white"
type MediaTypes = "mobile" | "tablet"

declare module "styled-components" {
    export interface DefaultTheme {
        color:Record<ColorTypes,string>,
        mq:Record<MediaTypes,string>
    }
}