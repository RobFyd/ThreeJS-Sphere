import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshBasicMaterial({ 
    color: 0xff0000,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Create camera