function turnOnLights(frontLight, lateralLight){

  let colors = ['Red', 'Yellow', 'Green'];
  colors.forEach(color => {
    if(color.toLowerCase() == frontLight.toLowerCase()){
      let light = document.getElementById(`${color.toLowerCase()}`);
      light.setAttribute('src', `images/${color}On.svg`);
    }
    else {
      let light = document.getElementById(`${color.toLowerCase()}`);
      light.setAttribute('src', `images/${color}Off.svg`);
    }
    
    if(color.toLowerCase() == lateralLight.toLowerCase()){
      let light = document.getElementById(`${color.toLowerCase()}Left`);
      light.setAttribute('src', `images/${color}LeftOn.svg`);
      light = document.getElementById(`${color.toLowerCase()}Right`);
      light.setAttribute('src', `images/${color}RightOn.svg`);
    }
    else {
      let light = document.getElementById(`${color.toLowerCase()}Left`);
      light.setAttribute('src', `images/${color}LeftOff.svg`);
      light = document.getElementById(`${color.toLowerCase()}Right`);
      light.setAttribute('src', `images/${color}RightOff.svg`);
    }
  });


}


colorPattern = [
  ['red', 'green'],
  ['red', 'yellow'],
  ['green', 'red'],
  ['yellow', 'red']
]
let index = 0;
function trafficLights () {
  turnOnLights(colorPattern[index][0], colorPattern[index][1]);
  index ++;
  if (index >= colorPattern.length) {
    index = 0;
  }

}

setInterval(trafficLights, 1000); 
