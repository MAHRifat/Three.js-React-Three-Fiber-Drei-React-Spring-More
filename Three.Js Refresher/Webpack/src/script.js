import "./style.css"
import * as THREE from "three"

// scene

const scene = new THREE.Scene();


//Mesh


const geometry =new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "green"});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// camera
const aspect = {
    width : window.innerWidth,
    height : window.innerHeight
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;
scene.add(camera);

// renderer

const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);


// animation

// clock class -> use for show same things in different fps device like 60, 120
const clock = new THREE.Clock();

const animate = ()=> {
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    // mesh.position.x += 0.01;
    // mesh.position.y += 0.01;
    
    // GetElapsedTime
    const elapsedTime = clock.getElapsedTime();
    
    // Update rotation on X axis
    mesh.rotation.x = elapsedTime * Math.PI;
    mesh.rotation.y = elapsedTime * Math.PI;

    // Renderer
    renderer.render(scene, camera);    // draw what the camera inside the scene captured
    
    // RequestAnimationFrame
    window.requestAnimationFrame(animate);
};

animate();

// function will get called 60 time per second on some devices   .01 * 60 = .6 on x 
// function will get called 120 time per second on some devices  .o1 * 120 = 1.2 on x
// fps stands for frame per second