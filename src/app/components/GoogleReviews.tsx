"use client";
import { useEffect } from "react";

export default function GoogleReviews() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apps.elfsight.com/p/platform.js";
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div style={{ position: 'relative', overflowX: 'hidden' }}>
            <div className="elfsight-app-28a1cd3c-c90f-479e-b5b0-7d27ab264c9c" style={{ zIndex: 0 }}></div>
            <div
                style={{
                    right: '-20px',
                    bottom: '8px',
                    position: 'absolute',
                    width: '225px',
                    height: '52px',
                    zIndex: '9999',
                    backgroundColor: 'white'
                    
                }}
            >
            </div>
        </div>
    );
}