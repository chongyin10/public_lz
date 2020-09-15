import React, { useState, useEffect } from 'react';
import styles from '@/page/components/system/power/index.module.css';
import scssStyles from '@/page/components/system/power/index.module.scss';

export default function Example() {
    const [a, setA] = useState((() => {
        return 3
    }));
    const [b, setB] = useState(-1);

    useEffect(() => {
        document.title = `You clicked ${a} times`;
    }, [a]);

    useEffect(() => {
        document.title = `You clicked ${b} times`;
    }, [b]);

    const handleClickA = () => {
        setA(a + 1);
    }
    return (
        <div>
            <h1 className={styles.fontsizeSpan}> hook写法应用 </h1>
            <span className={scssStyles.fontsizeSpan}> module.scss引用 </span>
            <p>You clicked {a} times</p>
            <button onClick={handleClickA}>
                Click a
            </button>
            <p>You clicked {b} times</p>
            <button onClick={() => setB(b - 1)}>
                Click b
            </button>
        </div>
    );
}