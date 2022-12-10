
const cubes = document.querySelectorAll('.cube')

cubes.forEach((cube, i) => {
  cube.addEventListener('click', getCubesToRotate)
})

// each cube is part of 3 possible rotation groups: X,Y,Z
// X axis rotate
const x1 = [1,2,3,10,11,12,19,20,21]
const x2 = [4,5,6,13,14,15,22,23,24]
const x3 = [7,8,9,15,16,17,25,26,27]
// Y axis rotate
const y1 = [1,4,7,10,13,16,19,22,25]
const y2 = [2,5,8,11,14,17,20,23,26]
const y3 = [3,6,9,12,15,18,21,24,27]
// Z axis? outside faces
const z1 = [1,2,3,4,5,6,7,8,9]
const z2 = [19,10,1,22,13,4,25,16,7]
const z3 = [7,8,9,16,17,18,25,26,27]
const z4 = [3,12,21,6,15,24,9,18,27]
const z5 = [19,20,21,10,11,12,1,2,3]
const z6 = [19,22,25,20,23,26,21,24,27]
const groups = [x1,x2,x3,y1,y2,y3,z1,z2,z3,z4,z5,z6]

// track current selected cube's, rotation options
const options = {
  xAxis: [],
  yAxis: [],
  zAxis: []
}

// get cubes X,Y,Z rotation options, save to options object
function getCubesToRotate(e) {

  let targetCube = null
  // if target is cube, set target, otherwise target is face, get parent which is cube
  if (e.target.classList.contains('cube')) {
    targetCube = e.target
  } else {
    targetCube = e.target.offsetParent
  }
  let targetIndex = Number(targetCube.dataset.index)

  console.log(targetCube)
  console.log(targetIndex)

  // first value will always be x axis, second will always be y axis
  let test = []
  groups.forEach(group => {
    if (testGroup(group, targetIndex)) return test.push(group)
    else return
  })

  options.xAxis = test[0]
  options.yAxis = test[1]
  options.zAxis = test[2]
  console.log(options)

}

// get the groups selected cube is a part of
function testGroup(array, targetIndex) {
  if (array.includes(targetIndex+1))  return true
  else return false
}

// TODO: user selects either w,s,a,d,q,e to rotate either X (a,d) or Y (w,s) or Z (q,e)
// either positive or negative direction
// then we need to update the data-indexes back to correct order
let deg = 0
document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'w':
      deg += 90
      // init val: translateX(0) translateZ(100px)
      cubes[0].style.transform = `translateX(200px) translateZ(100px) rotateZ(${deg}deg)`
      // init val: translateX(100px) translateZ(100px)
      cubes[1].style.transform = `translateX(200px) translateY(100px) translateZ(100px) rotateZ(${deg}deg)`
      // init val: translateY(0) translateX(200px) translateZ(100px)
      cubes[2].style.transform = `translateX(200px) translateY(200px) translateZ(100px) rotateZ(${deg}deg)`
      // init val: translateY(100px) translateX(0) translateZ(100px)
      cubes[3].style.transform = `translateX(100px) translateY(0) translateZ(100px) rotateZ(${deg}deg)`
      // init val: translateY(100px) translateX(100px) translateZ(100px)
      cubes[4].style.transform = `translateX(100px) translateY(100px) translateZ(100px) rotateZ(${deg}deg)`
      // init val: translateY(100px) translateX(200px) translateZ(100px)
      cubes[5].style.transform = `translateX(100px) translateY(200px) translateZ(100px) rotateZ(${deg}deg)`
      // init val: translateY(200px) translateX(0) translateZ(100px)
      cubes[6].style.transform = `translateX(0) translateY(0) translateZ(100px) rotateZ(${deg}deg)`
      // init val: translateY(200px) translateX(100px) translateZ(100px)
      cubes[7].style.transform = `translateX(0) translateY(100px) translateZ(100px) rotateZ(${deg}deg)`
      // init val: translateY(200px) translateX(200px) translateZ(100px)
      cubes[8].style.transform = `translateX(0) translateY(200px) translateZ(100px) rotateZ(${deg}deg)`
      break;
    case 's':
      deg -= 90

      break;
    case 'a':
      deg -= 90

      break;
    case 'd':
      deg += 90
      cubes.forEach(cube => {
      })
      break;
    default:
      break;
  }
})