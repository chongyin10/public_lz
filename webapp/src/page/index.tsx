import React from "react";
import Router from '@/page/router';
import '@/page/index.scss';

export default function Main() {
    return (
        <div className='_app' style={{ width: "100%", height: window.innerHeight }}>
            <Router />
        </div>
    );
}

