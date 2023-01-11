import { Animation, ArcRotateCamera, Color3, CubeTexture, DefaultRenderingPipeline, DepthOfFieldEffectBlurLevel, FreeCamera, HemisphericLight, PBRMetallicRoughnessMaterial, SceneLoader, Vector3 } from '@babylonjs/core';
import '@babylonjs/loaders';
import React from 'react';
import { Engine, Scene } from 'react-babylonjs';
var g_toggleTheme
function meshPicked(mesh) {
  console.log('mesh picked:', mesh)
}
var darkTheme = false

function onSceneMount(e) {
  const { scene } = e
  console.log('mount')
  var depthEnabled = false;
  scene.clearColor = new Color3(0.5,0.5,0.5)
 
  var camera = new FreeCamera("camera1", new Vector3(0, 0.0, -1.0), scene);
  camera.speed = 0.01;
  camera.minZ = 0.01;
  scene.activeCameras.push(camera);
  //camera.attachControl(canvas, true);
  var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;
  var pbr = new PBRMetallicRoughnessMaterial("pbr", scene);
  pbr.environmentTexture = CubeTexture.CreateFromPrefilteredData("textures/environment.dds", scene);
 


 // var knot = Mesh.CreateTorusKnot("knot", 0.2, 0.05, 128, 64, 2, 3, scene);
  SceneLoader.ImportMesh("",
  "", "lightbulb.glb",
  scene,
   (newMeshes)=> {
      newMeshes.forEach((bulb)=>{
        var scale = 0.47;
        bulb.scaling = new Vector3(scale, scale, scale);
        // bulb.rotation = new Vector3(0, 0, 0);
        bulb.position.set(0.0, -0.0, 0);

       animateObj(bulb)

      })
      // arm.name = 'arm';

  });


  var lightning
  SceneLoader.ImportMesh("",
  "", "lightning.glb",
  scene,
   (newMeshes)=> {
      newMeshes.forEach((mesh)=>{
        var scale = 0.5;
        mesh.scaling = new Vector3(scale, scale, scale);
        mesh.rotation = new Vector3(0, 20/180*3.142, 0);
        mesh.position.set(0.0, 0, 0);
        mesh.setEnabled(false)
        animateObj(mesh)
      })
      // arm.name = 'arm';
      lightning = newMeshes

    });


  //bulb.scaling.y = 0.1
  //var sphere = Mesh.CreateSphere("sphere1", 16, 0.2, scene);
  //knot.material = pbr;
  //knot.position.set(0, 0.0, 0);

  // Create default pipeline and enable dof with Medium blur level
  var pipeline = new DefaultRenderingPipeline("default", true, scene, [scene.activeCamera]);
  pipeline.depthOfFieldBlurLevel = DepthOfFieldEffectBlurLevel.Low;
  pipeline.depthOfFieldEnabled = depthEnabled;
  pipeline.depthOfField.focalLength = 50;
  pipeline.depthOfField.fStop = 3;
  pipeline.depthOfField.focusDistance = 2250;
  var moveFocusDistance = true;

  //add UI to adjust pipeline.depthOfField.fStop, kernelSize, focusDistance, focalLength
  var bgCamera = new ArcRotateCamera("BGCamera", Math.PI / 2 + Math.PI / 7, Math.PI / 2, 100,
      new Vector3(0, 20, 0),
      scene);
  bgCamera.layerMask = 0x10000000;
 
  scene.activeCameras = [scene.activeCamera, bgCamera];
  //
  var toggleLighting = () =>{
    console.log('toggle' + darkTheme)
    darkTheme = !darkTheme;
    scene.clearColor = darkTheme ? new Color3(0.009,0.009,0.009) : new Color3(1,1,1)
    light.intensity = darkTheme? 0.1 : 1.0;
    depthEnabled = !darkTheme;
    pipeline.depthOfFieldEnabled = depthEnabled;
   if(lightning)
   {
    lightning.forEach((v)=>{
      v.setEnabled(!darkTheme)
    })
   }
  
  }
  
  toggleLighting()
  
var animateObj = (obj) =>
{
           //Animate the Wheels
           const animWheel = new Animation("wheelAnimation", "rotation.y", 2, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE);

           const wheelKeys = []; 
       
           //At the animation key 0, the value of rotation.y is 0
           wheelKeys.push({
               frame: 0,
               value: 0
           });
       
           //At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
           wheelKeys.push({
               frame: 60,
               value: 2 * Math.PI
           });
       
           //set the keys
           animWheel.setKeys(wheelKeys);
       
           //Link this animation to a wheel
           obj.animations = [];
           obj.animations.push(animWheel);
       
           scene.beginAnimation(obj, 0, 60, true);
}

  // Move depth of field focus distance automatically at the start
  scene.onBeforeRenderObservable.add(function(){
      if(moveFocusDistance){
          pipeline.depthOfField.focusDistance = 600 + (4000 * (Math.sin((new Date()).getTime()/1000)+1)/2)
      }
  })
 
  scene.onPointerDown = function (evt) {
  console.log("click")
  g_toggleTheme()
  toggleLighting()
};

  scene.getEngine().runRenderLoop(() => {
      if (scene) {
          scene.render();
      }
  });
}

function NonDeclarative(props) {
  g_toggleTheme = props.toggleTheme
return (
        <Engine antialias={true} adaptToDeviceRatio={false} canvasId="sample-canvas">
          <Scene onMeshPicked={meshPicked} onSceneMount={onSceneMount} />
        </Engine>
  )
}

export default NonDeclarative