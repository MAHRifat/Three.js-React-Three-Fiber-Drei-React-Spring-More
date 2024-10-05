import "./style.css";
import * as THREE from "three";
import {
  MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";

//Scene
const scene = new THREE.Scene();

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const pointLight = new THREE.PointLight(0xffffff, .5);
pointLight.position.set(2,2,2);
scene.add(ambientLight, pointLight);

// loadingManager -> use loading manager for texture when we upload the website it will reload first
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = ()=>{
  console.log("start");
};
loadingManager.onLoad = ()=>{
  console.log("loading...");
};
loadingManager.onProgress = ()=>{
  console.log("progress");
};
loadingManager.onError = ()=>{
  console.log("Error!");
};

// textureLoader
const texture = new THREE.TextureLoader(loadingManager);
const colorTexture = texture.load("/texture/color.jpg");
const matcapTexture = texture.load("/texture/mat2.png");
const bumpTexture = texture.load("/texture/bump.jpg");
const displacementTexture = texture.load("/texture/displacementMap.jpg");


//CubeTextureLoader
const CubeTextureLoader = new THREE.CubeTextureLoader();
const envTexture = CubeTextureLoader.load([
  "/env/px.png",
  "/env/py.png",
  "/env/pz.png",
  "/env/nx.png",
  "/env/ny.png",
  "/env/nz.png",
]);
scene.background = envTexture;


//Resizing
window.addEventListener("resize", () => {
  //Update Size
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  //New Aspect Ratio
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  //New RendererSize
  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Mesh
// const geometry = new THREE.PlaneBufferGeometry(1, 1, 64,64);
// console.log(geometry);
// const material = new THREE.MeshBasicMaterial();
// material.map = colorTexture;
// material.wireframe = true;
// material.color = new THREE.Color("rgb(255,0,0)");
// material.transparent = true;
// material.opacity = .3;
// material.side = THREE.DoubleSide;
// material.visible = false;

// const geometry = new THREE.TorusBufferGeometry(.3,.2,32,32);
// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcapTexture;

// const material = new THREE.MeshLambertMaterial();

// const material = new THREE.MeshPhongMaterial();
// material.shininess = 300;
// material.specular = new THREE.Color("green");

// const material = new THREE.MeshToonMaterial();
const geometry = new THREE.SphereBufferGeometry(.5,32,32);
const material = new THREE.MeshStandardMaterial();
material.metalness = .9;
material.roughness = .0001;
// material.map = colorTexture;
// material.bumpMap = bumpTexture;
// material.displacementMap = displacementTexture;
material.envMap = envTexture;




const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 1;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//OrbitControls
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;

//Clock Class
const clock = new THREE.Clock();

const animate = () => {
  //GetElapsedTime
  const elapsedTime = clock.getElapsedTime();

  //Update Controls
  orbitControls.update();

  //Renderer
  renderer.render(scene, camera);

  //RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();
