'use client'


const MdxWrap = ({ children }) => {
    return (<>
        {children}
    </>);
}

export default MdxWrap;
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props

// 应该在server component 中wrap clietcomponet的children
// 而不是在client组件中wrap client组件的clildren
// 明天优化。