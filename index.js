var world = new CANNON.World();
world.gravity.set(0,0,-9.82);
world.broadphase = new CANNON.NaiveBroadphase();

var mass = 5, radius = 1;
var sphereShape = new CANNON.Sphere(radius); // Step 1
var sphereBody = new CANNON.Body({mass: mass, shape: sphereShape}); // Step 2
sphereBody.position.set(0,0,0);
world.add(sphereBody); // Step 3

var groundShape = new CANNON.Plane();
var groundBody = new CANNON.Body({ mass: 0, shape: groundShape });
world.add(groundBody);
var timeStep = 1.0 / 60.0; // seconds

for (var i = 0; i < 60; ++i){
  world.step(timeStep);
  console.log(sphereBody.position.x, sphereBody.position.y, sphereBody.position.z);
}
