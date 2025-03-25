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
        <div style={{ position: 'relative' }}>
            <div className="elfsight-app-28a1cd3c-c90f-479e-b5b0-7d27ab264c9c" style={{ zIndex: 0 }}></div>
            <a
                href="https://g.co/kgs/qgMp9cV"
                className="btn btn-primary"
                id="reviewBtn"
                style={{
                    
                    right: '-20px',
                    bottom: '10px',
                    position: 'absolute',
                    display: 'flex',
                    width: '220px',
                    zIndex: 40,
                }}

            >
                ++ Ver todos os Comentários
            </a>

        </div>
    );
}