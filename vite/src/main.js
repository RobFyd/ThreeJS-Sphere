"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
require("./style.css");
var OrbitControls_js_1 = require("three/examples/jsm/controls/OrbitControls.js");
// Create a scene
var scene = new THREE.Scene();
// Create sphere
var geometry = new THREE.SphereGeometry(3, 64, 64);
var material = new THREE.MeshStandardMaterial({
    color: "#00ff00",
});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// Sizes
var sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
// Light
var light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 10, 10);
scene.add(light);
// Camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 20;
scene.add(camera);
// Renderer
var canvas = document.querySelector(".webgl");
var renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);
// Controls
var controls = new OrbitControls_js_1.OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.enableZoom = false;
// controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 10;
// Resize
window.addEventListener("resize", function () {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});
var loop = function () {
    // mesh.position.x = Math.sin(Date.now() * 0.0001) * 2;
    // mesh.position.y = Math.cos(Date.now() * 0.0001) * 2;
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
};
loop();
