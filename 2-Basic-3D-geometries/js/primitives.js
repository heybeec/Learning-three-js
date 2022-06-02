// Créer la scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();   
scene.background = new THREE.Color(0x333333);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000 ); // ( 75 -> Degrés champ de vision, aspect-ratio -> window width / window height, 01, 1000 -> Espace devant la )
camera.position.z = 120;



// Primitives exemples : https://threejs.org/manual/#en/primitives

const boxGeometry = new THREE.BoxGeometry(10, 10, 10); // Forme 
const basicMaterial = new THREE.MeshLambertMaterial({color: 0x0095DD}); // Material : Couleur
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
cube.position.x = -35;
cube.rotation.set(0.4, 0.2, 0);
//Add shape to the scene
scene.add(cube);

const torusGeometry = new THREE.TorusKnotGeometry(7.3, 3, 50, 16); //(radius, tubeRadius, tubulaireSegments, radialSegments, p, q)
const torusMaterial = new THREE.MeshPhongMaterial({color: 0xFF0000});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);

const dodecahedron = new THREE.DodecahedronGeometry(10); // (Radius - > 10)
const dodecahedronMaterial = new THREE.MeshPhongMaterial({color: 0xFF9500});
const dode = new THREE.Mesh(dodecahedron, dodecahedronMaterial);
dode.position.x = 35;
scene.add(dode);


/* const radius = 7;
const widthSegments = 12;
const heightSegments = 8;
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const material = new THREE.PointsMaterial({
    color: 'red',
    size: 1,     // en unités mondiales
});
const points = new THREE.Points(geometry, material);
points.position.y = -30;
scene.add(points);
 */


// Light
const light = new THREE.DirectionalLight(0xFFFFFF,1.05)  // (color, intensity);
light.position.set(-10, 15, 50);
// Add light to the scene
scene.add(light);


var time = 0;
function render() {
	time += 0.01; 
	requestAnimationFrame(render);
	cube.rotation.y += 0.01;
	torus.rotation.y += 0.01;
	dode.rotation.y += 0.01;
/* 	points.rotation.y += 0.5;
 */	renderer.render(scene, camera);
}
render();