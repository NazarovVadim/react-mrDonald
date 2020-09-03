import { useState }from 'react';

export function useCount(openItem){
    const counter = (openItem.count && openItem.count > 1) ? openItem.count : 1;
    const [count, setCount] = useState(counter);

    const onChange = e => setCount(e.target.value);

    return { count, setCount, onChange }

}