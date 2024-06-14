"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
require("./style.css");
// Create a scene
var scene = new THREE.Scene();
// Create sphere
var geometry = new THREE.SphereGeometry(3, 64, 64);
var material = new THREE.MeshStandardMaterial({
    color: "lightgreen",
});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// Sizes
var sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
// Create light
var light = new THREE.PointLight(0xffffff, 80, 100);
light.position.set(5, 10, 10);
scene.add(light);
// Create camera
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 15;
scene.add(camera);
// Create renderer
var canvas = document.querySelector(".webgl");
var renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
