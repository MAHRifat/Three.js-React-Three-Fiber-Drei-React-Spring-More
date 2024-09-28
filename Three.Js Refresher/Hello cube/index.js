import * as THREE  from './three.module.min.js';

console.log(THREE);


// scene

const scene = new THREE.Scene();

// Group
const group = new THREE.Group();

// Mesh
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "red"});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 1;
// mesh.position.y = 1;
// mesh.position.z = 1;
mesh.scale.x = 2;
mesh.rotation.x = Math.PI * 1.57;
mesh.rotation.y = Math.PI * 1.2;
// scene.add(mesh);

// Mesh 2

const geometryT = new THREE.BoxGeometry(1,1,1);
const materialT = new THREE.MeshBasicMaterial({color: "green"});

const meshT = new THREE.Mesh(geometryT, materialT);
// scene.add(meshT);

//group

group.add(mesh, meshT);
group.position.x = 3;
scene.add(group);

// AxesHelper
const axesHelper = new THREE.AxesHelper( 2 );
scene.add( axesHelper );

// Camera

const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
};
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height);   // near 1 and far 2000 is the default value
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);


// Renderer

const canvas = document.querySelector(".draw");   // select the canvas element
const renderer = new THREE.WebGLRenderer({canvas: canvas});  // add the webGl renderer
renderer.setSize(aspect.width,aspect.height); // renderere size
renderer.render(scene,camera);  // display what the camera in the scren captured