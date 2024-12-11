'use client';
import { useRef, forwardRef } from 'react';

// function MyInput({ value, onChange }) {
//     return (
//         <input
//             value={value}
//             onChange={onChange}
//         />
//     );
// }
const MyInput = forwardRef((props, ref) => {
	return <input {...props} ref={ref}></input>;
});

MyInput.displayName = 'Hello';

export default function Fref() {
	const inputRef = useRef(null);
	return (
		<>
			<MyInput ref={inputRef} />
		</>
	);
}
