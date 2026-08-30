'use client';
import { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
    const globeRef = useRef(null);

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.pointOfView({ lat: 23.0225, lng: 72.5714, altitude: 2.2 }, 1500);
        }
    }, []);

    return (
        <Globe
            ref={globeRef}
            height={300}
            width={300}
            backgroundColor="rgba(0, 0, 0, 0)"
            showAtmosphere
            atmosphereColor="#527A55"
            atmosphereAltitude={0.15}
            globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
            pointsData={[{ lat: 23.0225, lng: 72.5714, name: 'Ahmedabad, Gujarat', color: '#527A55', size: 1.8 }]}
            pointAltitude={0.05}
            pointRadius={1.5}
            ringsData={[{ lat: 23.0225, lng: 72.5714, maxR: 5, propagationSpeed: 2, repeatPeriod: 1000, color: () => '#527A55' }]}
            labelsData={[{ lat: 23.0225, lng: 72.5714, text: 'Ahmedabad, Gujarat', color: '#1F2922', size: 26, altitude: 0.08 }]}
            onGlobeReady={() => {
                globeRef.current?.pointOfView({ lat: 23.0225, lng: 72.5714, altitude: 2.2 }, 1500);
            }}
        />
    );
};

export default GlobeComponent;
