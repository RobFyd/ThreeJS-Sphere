"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
// Create a scene
var scene = new THREE.Scene();
// Create sphere
var geometry = new THREE.SphereGeometry(3, 64, 64);
var material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// Create camera
var camera = new THREE.PerspectiveCamera(45, 800, 600);
scene.add(camera);
