'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
    const targetRef = useRef();

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });
        }
    });

    return (
        <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            {/* Stand Base */}
            <mesh position={[0, -1.2, 0]}>
                <cylinderGeometry args={[0.5, 0.6, 0.1, 32]} />
                <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Stand Pole */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.06, 0.06, 2.4, 16]} />
                <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Target Mounting Bracket */}
            <mesh position={[0, 0.7, -0.05]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.12, 0.12, 0.15, 16]} />
                <meshStandardMaterial color="#222222" metalness={0.7} roughness={0.3} />
            </mesh>

            {/* Target Board Back */}
            <mesh position={[0, 0.7, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.9, 0.9, 0.06, 32]} />
                <meshStandardMaterial color="#1f2937" roughness={0.4} />
            </mesh>

            {/* Outer Ring - White */}
            <mesh position={[0, 0.7, 0.082]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.82, 0.82, 0.01, 32]} />
                <meshStandardMaterial color="#f9fafb" roughness={0.3} />
            </mesh>

            {/* Red Ring */}
            <mesh position={[0, 0.7, 0.086]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.62, 0.62, 0.01, 32]} />
                <meshStandardMaterial color="#ef4444" roughness={0.3} />
            </mesh>

            {/* Inner White Ring */}
            <mesh position={[0, 0.7, 0.09]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.42, 0.42, 0.01, 32]} />
                <meshStandardMaterial color="#f9fafb" roughness={0.3} />
            </mesh>

            {/* Center Bullseye - Yellow/Gold */}
            <mesh position={[0, 0.7, 0.094]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.22, 0.22, 0.01, 32]} />
                <meshStandardMaterial color="#eab308" emissive="#ca8a04" emissiveIntensity={0.2} roughness={0.2} />
            </mesh>

            {/* Center Dot - Red */}
            <mesh position={[0, 0.7, 0.098]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.08, 0.08, 0.01, 32]} />
                <meshStandardMaterial color="#ef4444" roughness={0.2} />
            </mesh>
        </group>
    );
};

export default Target;


