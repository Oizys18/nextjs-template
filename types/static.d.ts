// type-checking disabled
declare module '*.svg'{
    const value: string;
    export default value
}

declare module '*.png'{
    const value: string;
    export default value
}

declare module "*.svg" {
    import { ReactElement, SVGProps } from "react";
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}