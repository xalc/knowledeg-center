import { Code } from "bright"

export function useMDXComponents(components) {
    return {
        ...components,
        pre: Code
    }
}