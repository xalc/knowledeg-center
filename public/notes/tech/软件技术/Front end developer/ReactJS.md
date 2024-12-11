# ReactJS

React hook

[React hook](notes/tech/%E8%BD%AF%E4%BB%B6%E6%8A%80%E6%9C%AF/Front%20end%20developer/ReactJS/React%20hook.md)

1. Server SIde render

[React router](notes/tech/%E8%BD%AF%E4%BB%B6%E6%8A%80%E6%9C%AF/Front%20end%20developer/ReactJS/React%20router.md)

[React Ref](notes/tech/%E8%BD%AF%E4%BB%B6%E6%8A%80%E6%9C%AF/Front%20end%20developer/ReactJS/React%20Ref.md)

[React Portal](notes/tech/%E8%BD%AF%E4%BB%B6%E6%8A%80%E6%9C%AF/Front%20end%20developer/ReactJS/React%20Portal.md)

[React context](notes/tech/%E8%BD%AF%E4%BB%B6%E6%8A%80%E6%9C%AF/Front%20end%20developer/ReactJS/React%20context.md)

FireBase ——- 

[Effect hooks](notes/tech/%E8%BD%AF%E4%BB%B6%E6%8A%80%E6%9C%AF/Front%20end%20developer/ReactJS/Effect%20hooks.md)

[Hooks分类](notes/tech/%E8%BD%AF%E4%BB%B6%E6%8A%80%E6%9C%AF/Front%20end%20developer/ReactJS/Hooks%E5%88%86%E7%B1%BB.md)

# useState和useRef的区别联系

useRef通常用来DOM的reference，用于操作DOM，比如focs或者第三方instance的方法。

但其实useRef的用处不仅仅如此， 也可以类似于useState一样存储变量，只是这些变量不需要在重新渲染中更新。

useRef本质上也是一个useState，只是该state的地址不会改变。只是ref存储的变量放在ref.current下面，ref本身不会发生变化。

- **`useState`** 用于管理组件的状态，状态的变化会触发组件的重新渲染。
- **`useRef`** 用于创建一个可变的引用对象，该对象在组件的整个生命周期中保持不变，不会引起组件的重新渲染。