import * as THREE from 'three';
import './style.css';

// Create a scene
const scene = new THREE.Scene();

// Create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ 
    color: "lightgreen",
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
    
// Create light
const light = new THREE.PointLight(0xffffff, 80, 100)
light.position.set(5, 10, 10);
scene.add(light);

// Create camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 15;
scene.add(camera);

// Create renderer
const canvas = document.querySelector(".webgl") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Resize
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    renderer.setSize(sizes.width, sizes.height);
});
    