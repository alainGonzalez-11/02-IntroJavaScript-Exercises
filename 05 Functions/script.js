function turnOnLights(frontLight, lateralLight){
  let colors = ['Red', 'Yellow', 'Green'];
  colors.forEach(color => {
    if(color.toLowerCase() == frontLight.toLowerCase()){
      let light = document.getElementById(`${color.toLowerCase()}`);
      console.log(light);
      light.setAttribute('src', `images/${color}On.svg`);
    }
    else {
      let light = document.getElementById(`${color.toLowerCase()}`);
      console.log(light);
      light.setAttribute('src', `images/${color}Off.svg`);
    }
    
    if(color.toLowerCase() == lateralLight.toLowerCase()){
      let light = document.getElementById(`${color.toLowerCase()}Left`);
      console.log(light);
      light.setAttribute('src', `images/${color}LeftOn.svg`);
      light = document.getElementById(`${color.toLowerCase()}Right`);
      console.log(light);
      light.setAttribute('src', `images/${color}RightOn.svg`);
    }
    else {
      let light = document.getElementById(`${color.toLowerCase()}Left`);
      console.log(light);
      light.setAttribute('src', `images/${color}LeftOff.svg`);
      light = document.getElementById(`${color.toLowerCase()}Right`);
      console.log(light);
      light.setAttribute('src', `images/${color}RightOff.svg`);
    }
  });


}

turnOnLights('red','green');

