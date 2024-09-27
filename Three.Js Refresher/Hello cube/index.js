import * as THREE  from './three.module.min.js';

console.log(THREE);


// scene

const scene = new THREE.Scene();

// Mesh
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "white"});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera

const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height);   // near 1 and far 2000 is the default value
camera.position.z = 3;
camera.position.x =1;
camera.position.y = 1;
scene.add(camera);


// Renderer

const canvas = document.querySelector(".draw");   // select the canvas element
const renderer = new THREE.WebGLRenderer({canvas: canvas});  // add the webGl renderer
renderer.setSize(aspect.width,aspect.height); // renderere size
renderer.render(scene,camera);  // display what the camera in the scren captured