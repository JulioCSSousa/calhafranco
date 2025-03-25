// src/app/components/MapViewWrapper.tsx
'use client'

import dynamic from 'next/dynamic';

// Importa MapView dinamicamente, com SSR desativado
const MapView = dynamic(() => import('./MapView'), { ssr: false });

export default function MapViewWrapper() {
  return <MapView />;
}
