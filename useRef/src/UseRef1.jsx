import React, { useRef } from 'react'

function UseRef1() {
    const [value, setValue] = React.useState('');
    const ref1 = useRef('');

    const handleChange = (e) => {
        setValue(e.target.value);
        if (ref1.current) {
            ref1.current.style.backgroundColor = 'green';
            ref1.current.style.fontSize = '25px';
        }
    };
    return (
        <div style={{ marginInline: '50px' }}>
            <h1>UseRef</h1>
            <input type="text" ref={ref1} value={value} onChange={handleChange} />
            <h2>Current :- {value}</h2>
        </div>
    )
}

export default UseRef1