import * as THREE from "three";
import "./style.css";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Create a scene
const scene = new THREE.Scene();

// Create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff00",
  // metalness: 1.5,
  roughness: 0.55,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Light
const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 10, 10);
light.intensity = 300;
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.setClearColor(0x000000, 0);
renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.enableZoom = false;
// controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 10;

// Resize
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
  // mesh.position.x = Math.sin(Date.now() * 0.0001) * 2;
  // mesh.position.y = Math.cos(Date.now() * 0.0001) * 2;

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

// timeline animation
const tl = gsap.timeline({ defaults: { duration: 2 } });
tl.fromTo(mesh.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 });
tl.fromTo("nav", { y: "-100%" }, { y: "0%" }, "-=1.5");
tl.fromTo(".title", { opacity: 0 }, { opacity: 1 }, "-=1");

// mouse animation color
let mouseDown = false;
let rgb = [];
window.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));

window.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.height) * 255),
      150,
    ];
    // animate color
    const newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
    gsap.to(mesh.material.color, {
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
    });
  }
});
