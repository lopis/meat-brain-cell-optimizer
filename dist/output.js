document.write('<!doctype html><html lang=en><meta charset=UTF-8><title>Meat Brain Cell Optimizer</title><meta content="width=device-width,initial-scale=1" name=viewport><link rel="shortcut icon" type=image/x-icon><style>:root{--color-white:#e7d9ff;--color-1:#e6c300;--color-2:#c431b3;--color-3:#8539ff;--color-4:#750062;--color-5:#4e0075;--color-6:#1b00a0;--color-dark:#050031}#c2d{position:absolute;width:100vmin;aspect-ratio:1;max-width:600px;image-rendering:pixelated}body,html{user-select:none;margin:0;background-color:var(--color-dark);display:flex;justify-content:center;align-items:center;height:100%;width:100%;color:var(--color-white);font-family:Arial,Helvetica,sans-serif;font-size:20px;overscroll-behavior:none}.bck{position:fixed;height:200%;width:200%;background:url(wave.svg) center/200px;transform:rotate(-30deg)}h1{text-shadow:5px 5px var(--color-2),10px 10px var(--color-3),15px 15px var(--color-6);font-size:2em;animation:.8s linear infinite shadow}@keyframes shadow{from{text-shadow:0 0 var(--color-white),2px 2px var(--color-2),7px 7px var(--color-3),14px 14px 1px var(--color-6)}to{text-shadow:2px 2px var(--color-2),7px 7px var(--color-3),14px 14px 1px var(--color-6),21px 21px 5px var(--color-dark)}}.hide{display:none!important}#intro,#menu,#result{height:100%;width:100%;position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:2vmax;box-sizing:border-box}ul{list-style:none;padding:0;text-align:center;display:flex;flex-direction:column;align-content:stretch}ul button{--button-color:var(--color-2);color:var(--color-dark);background-color:var(--color-white);padding:.5em;margin:.5em 0;user-select:none;cursor:pointer;font-variant-caps:small-caps;font-weight:700;font-size:20px;box-shadow:5px 5px var(--button-color);border:3px solid var(--button-color);transition:transform .1s,box-shadow .1s;width:100%;display:inline-flex;justify-content:center;gap:1em}ul button :last-child{margin-left:auto}ul button:active{transform:translate(4px,4px);box-shadow:1px 1px var(--button-color)}ul button:hover{--button-color:var(--color-1)}#intro{max-width:60ch}.text{text-align:justify;text-indent:2em;line-height:1.4;box-shadow:0 0 100px 50px #050031;background:var(--color-dark)}b{color:var(--color-1)}#controls{position:fixed;bottom:0;width:90%;text-align:center;margin:2vh 0;display:flex;justify-content:center;transform:translateY(calc(100% + 2vh));transition:.5s ease-in-out .1s;gap:4vh;flex-wrap:wrap}#controls.slide{transform:translateY(0)}#fps{position:fixed;top:0;left:0;color:var(--color-1);padding:1vh;font-size:10px}input[type=range]{--range-width:25px;-webkit-appearance:none;max-width:100%;width:400px;background:0 0}input[type=range]:focus{outline:0}input[type=range]::-webkit-slider-runnable-track{width:100%;height:var(--range-width);cursor:pointer;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:var(--color-2);border-radius:99px;border:5px solid var(--color-dark)}input[type=range]::-webkit-slider-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:40px;width:40px;border-radius:40px;background:var(--color-dark);cursor:pointer;-webkit-appearance:none;margin-top:-12.5px}input[type=range]:focus::-webkit-slider-runnable-track{background:var(--color-2)}input[type=range]::-moz-range-track{width:100%;height:15px;cursor:pointer;box-shadow:0 0 0 #000,0 0 0 #0d0d0d;background:var(--color-2);border-radius:var(--range-width);border:5px solid var(--color-dark)}input[type=range]::-moz-range-thumb{box-shadow:0 0 0 #000,0 0 0 #0d0d0d;border:0 solid #000;height:40px;width:40px;border-radius:40px;background:var(--color-dark);cursor:pointer}#circleRangeElement{--circle-rang-size:150px;--range-width:17px;height:var(--circle-rang-size);aspect-ratio:1;flex-shrink:0;padding:20px;margin:-20px;overscroll-behavior-block:none}#ring{pointer-events:none;height:100%;width:100%;border:var(--range-width) solid var(--color-2);box-sizing:border-box;border-radius:999px;position:relative}#ring::after,#ring::before{content:"";position:absolute;display:block;border-radius:999px;box-sizing:border-box}#ring::before{height:calc(100% + var(--range-width)*2 - 2px);aspect-ratio:1;margin:calc(-1 * var(--range-width) + 1px);box-shadow:0 0 0 4px var(--color-dark)}#ring::after{height:calc(100% + 2px);aspect-ratio:1;border:4px solid var(--color-dark);margin:-1px}#thumb{font-size:48px;height:1em;aspect-ratio:1;background:var(--color-dark);border-radius:99px;position:absolute;top:calc(50% - .5em);right:calc(-.5em - var(--range-width)/ 2)}#submit{padding:1vh;border-radius:999px;height:100px;width:100px;background:var(--color-1);border:3px solid var(--color-dark);box-shadow:5px 5px var(--color-dark);font-size:30px;font-weight:700;color:var(--color-dark);transition:.1s ease-in-out 50ms;flex-shrink:0;cursor:pointer}#submit.clicked{transform:translate(4px,4px);box-shadow:1px 1px var(--color-dark)}#lights{position:fixed;top:0;display:flex;transform:translateY(calc(-150% + 2vh));transition:.5s ease-in-out .1s;padding:3vh}#controls.slide+#lights{transform:translateY(0)}.led{--color-lights:#ffffff55;position:relative;height:15px;width:20px;background:var(--color-lights);margin:15px}.led::after{content:"";height:6px;width:28px;position:absolute;background:var(--color-lights);bottom:-6px;left:-4px}.led::before{content:"";height:10px;width:20px;position:absolute;background:var(--color-lights);top:-10px;left:0;border-radius:99px 99px 0 0}.led.on{--color-lights:var(--color-white)}.led.on,.led.on::after,.led.on::before{box-shadow:0 0 5px 1px var(--color-white)}i{display:block;position:relative;top:20px}i::after,i::before{content:"";position:absolute;height:30px;width:20px;border:solid var(--color-dark);border-width:0 4px 4px 0;display:inline-block}i::before{left:-18px;border-radius:0 0 15px}i::after{right:-18px;border-width:0 0 4px 4px;border-radius:0 0 0 15px}</style><div class=bck></div><canvas height=1080 id=c2d width=1920></canvas><div id=menu><h1><span>Meat Brain</span><br><span>Cell Optimizer</span></h1><ul><li><button id=start>Start</button><li><button id=contGame>Continue</button><li><button id=fullscreen>Fullscreen</button></ul></div><div id=intro class=hide><div class=text><p>Your meat-brained species excels at <b>pattern&nbsp;recognition</b>, albeit through instinct rather than understanding. This experiment aims to determine if human intuition can <b>optimize</b> our multi-dimensional quintessence-fused energy cells effectively.<p><b>Do not concern yourself</b> with the intricacies of our technology; your limited brain could not begin to comprehend. Focus on <b>instinctively</b> finding the most <b>harmonious</b> parameter configurations.</div><ul><li><button id=play>Uh, OK...</button></ul></div><div id=result class=hide><h2 id=resultTitle></h2><p id=resultText><ul><li><button id=nextLevel><span>Continue</span><span>&twoheadrightarrow;</span></button><li><button id=retry><span>Retry</span><span>&circlearrowleft;</span></button></ul></div><div id=controls><input id=range max=100 min=0 step=5 type=range><div id=circleRangeElement class=hide><div id=ring><div id=thumb></div></div></div><button id=submit>OK</button></div><div id=lights></div><div id=fps></div>');let style="",TAU=2*Math.PI;
class CircleRange{constructor(a){this.previousAngle=this.value=this.turns=0;this.prevPos={x:0,y:0};this.multiplier=1;this.ringSize=0;a.addEventListener("pointerdown",b=>this.dragStart(b));this.inputHandler=b=>this.moveThumb(b);document.addEventListener("pointerup",()=>this.dragStop());this.input=a;this.ring=this.input.children[0];this.thumb=this.ring.children[0]}dragStart(a){this.previousAngle=this.calculateCircleAngle(a.x,a.y);document.addEventListener("pointermove",this.inputHandler)}dragStop(){document.removeEventListener("pointermove",this.inputHandler)}moveThumb(a){a=
this.calculateCircleAngle(a.x,a.y);let b=this.previousAngle-a;this.previousAngle=a;b>=Math.PI?this.turns++:b<=-Math.PI&&this.turns--;this.value-=Math.min(15,b);this.updateThumb()}updateThumb(){let {x:a,y:b}=this.angleToPos(this.ringSize,this.value);this.thumb.style.transform=`translate(${a-this.ringSize}px, ${b-this.ringSize/2}px)`}calculateCircleAngle(a,b){let {height:c,width:d,x:f,y:h}=this.input.getBoundingClientRect();return Math.atan2(b-(h+c/2),a-(f+d/2))}angleToPos(a,b){return{x:a/2+a/2*Math.cos(b),
y:a/2+a/2*Math.sin(b)}}toggle(a){this.value=0;this.updateThumb();this.input.classList.toggle("hide",!a);this.ringSize=this.input.children[0].clientHeight+15}getValue(){return this.multiplier*(this.turns+this.value/TAU)}}
class Controls{constructor(){this.isEscape=this.isConfirm=this.isRight=this.isLeft=this.isDown=this.isUp=!1;this.keyMap=new Map;this.previousState={isUp:this.isUp,isDown:this.isDown,isConfirm:this.isConfirm,isEscape:this.isEscape};document.addEventListener("keydown",a=>this.toggleKey(a,!0));document.addEventListener("keyup",a=>this.toggleKey(a,!1));this.inputDirection=new DOMPoint}queryController(){this.previousState.isUp=this.isUp;this.previousState.isDown=this.isDown;this.previousState.isConfirm=
this.isConfirm;this.previousState.isEscape=this.isEscape;let a=navigator.getGamepads()[0],b=this.keyMap.get("KeyA")||this.keyMap.get("ArrowLeft")||a?.buttons[14].pressed?-1:0,c=this.keyMap.get("KeyD")||this.keyMap.get("ArrowRight")||a?.buttons[15].pressed?1:0,d=this.keyMap.get("KeyW")||this.keyMap.get("ArrowUp")||a?.buttons[12].pressed?-1:0,f=this.keyMap.get("KeyS")||this.keyMap.get("ArrowDown")||a?.buttons[13].pressed?1:0;this.inputDirection.x=b+c||a?.axes[0]||0;this.inputDirection.y=d+f||a?.axes[1]||
0;.1>Math.hypot(this.inputDirection.x,this.inputDirection.y)&&(this.inputDirection.x=0,this.inputDirection.y=0);this.isUp=0>this.inputDirection.y;this.isDown=0<this.inputDirection.y;this.isLeft=0>this.inputDirection.x;this.isRight=0<this.inputDirection.x;this.isConfirm=!!(this.keyMap.get("Enter")||a?.buttons[0].pressed||a?.buttons[9].pressed);this.isEscape=!(!this.keyMap.get("Escape")&&!a?.buttons[8].pressed)}toggleKey(a,b){this.keyMap.set(a.code,b)}}let controls$1=new Controls,circleRange=new CircleRange(document.getElementById("circleRangeElement"));
class StateMachine{constructor(a,...b){this.currentState=a;this.currentState.onEnter?.(...b)}setState(a,...b){this.currentState.onLeave?.();this.currentState=a;this.currentState.onEnter?.(...b)}getState(){return this.currentState}}let gameStateMachine;function createGameStateMachine(a,...b){gameStateMachine=new StateMachine(a,...b)}var bodyStyles=window.getComputedStyle(document.body);let colorWhite=bodyStyles.getPropertyValue("--color-white");bodyStyles.getPropertyValue("--color-1");bodyStyles.getPropertyValue("--color-2");
bodyStyles.getPropertyValue("--color-3");let color4=bodyStyles.getPropertyValue("--color-4");bodyStyles.getPropertyValue("--color-5");let color6=bodyStyles.getPropertyValue("--color-6"),colorDark=bodyStyles.getPropertyValue("--color-dark");function renderLeds(){for(let a=0;5>a;a++)lights.innerHTML+='<div class="led"><i/></div>'}class DrawEngine{constructor(){let a=()=>{c2d.height=c2d.clientHeight;c2d.width=c2d.clientWidth};window.addEventListener("resize",a);a();renderLeds()}}new DrawEngine;
let W={models:{},reset:a=>{W.canvas=a;W.objs=0;W.current={};W.next={};W.textures={};W.gl=a.getContext("webgl2");W.gl.blendFunc(770,771);W.gl.activeTexture(33984);W.program=W.gl.createProgram();W.gl.enable(2884);W.gl.shaderSource(a=W.gl.createShader(35633),"#version 300 es\n      precision highp float;\n      in vec4 pos, col, uv, normal;\n      uniform mat4 pv, eye, m, im;\n      uniform vec4 bb;\n      out vec4 v_pos, v_col, v_uv, v_normal;\n      void main() {                                 \n        gl_Position = pv * ( \n          v_pos = bb.z > 0.\n          ? m[3] + eye * (pos * bb)\n          : m * pos\n        );                                          \n        v_col = col;\n        v_uv = uv;\n        v_normal = transpose(inverse(m)) * normal;\n      }");
W.gl.compileShader(a);W.gl.attachShader(W.program,a);console.log("vertex shader:",W.gl.getShaderInfoLog(a)||"OK");W.gl.shaderSource(a=W.gl.createShader(35632),"#version 300 es\n      precision highp float;\n      in vec4 v_pos, v_col, v_uv, v_normal;\n      uniform vec3 light;\n      uniform vec4 o;\n      uniform sampler2D sampler;\n      out vec4 c;\n\n      void main() {\n        c = mix(texture(sampler, v_uv.xy), v_col, o[3]); \n        if(o[1] > 0.){ \n          c = vec4(\n            c.rgb * (max(0., dot(light, -normalize(\n              o[0] > 0.\n              ? vec3(v_normal.xyz)\n              : cross(dFdx(v_pos.xyz), dFdy(v_pos.xyz)) \n            )))\n            + o[2]), \n            c.a \n          );\n        }\n      }");
W.gl.compileShader(a);W.gl.attachShader(W.program,a);console.log("fragment shader:",W.gl.getShaderInfoLog(a)||"OK");W.gl.linkProgram(W.program);W.gl.useProgram(W.program);console.log("program:",W.gl.getProgramInfoLog(W.program)||"OK");W.gl.enable(2929);W.light({y:-1});W.camera({fov:30});setTimeout(W.draw,16)},setState:(a,b,c,d,f,h,l,k,g,e,t,u,v)=>{let m;(m=a).n||(m.n="o"+W.objs++);a.size&&(a.w=a.h=a.d=a.size);a.t&&a.t.width&&!W.textures[a.t.id]&&(c=W.gl.createTexture(),W.gl.pixelStorei(37441,!0),
W.gl.bindTexture(3553,c),W.gl.pixelStorei(37440,1),W.gl.texImage2D(3553,0,6408,6408,5121,a.t),W.gl.generateMipmap(3553),W.textures[a.t.id]=c);a.fov&&(W.projection=new DOMMatrix([1/Math.tan(a.fov*Math.PI/180)/(W.canvas.width/W.canvas.height),0,0,0,0,1/Math.tan(a.fov*Math.PI/180),0,0,0,0,-1001/999,-1,0,0,-2002/999,0]));a={type:b,...(W.current[a.n]=W.next[a.n]||{w:1,h:1,d:1,x:0,y:0,z:0,rx:0,ry:0,rz:0,b:"888",mode:4,mix:0}),...a,f:0};W.models[a.type]?.vertices&&!W.models?.[a.type].verticesBuffer&&(W.gl.bindBuffer(34962,
W.models[a.type].verticesBuffer=W.gl.createBuffer()),W.gl.bufferData(34962,new Float32Array(W.models[a.type].vertices),35044),!W.models[a.type].normals&&W.smooth&&W.smooth(a),W.models[a.type].normals&&(W.gl.bindBuffer(34962,W.models[a.type].normalsBuffer=W.gl.createBuffer()),W.gl.bufferData(34962,new Float32Array(W.models[a.type].normals.flat()),35044)));W.models[a.type]?.uv&&!W.models[a.type].uvBuffer&&(W.gl.bindBuffer(34962,W.models[a.type].uvBuffer=W.gl.createBuffer()),W.gl.bufferData(34962,new Float32Array(W.models[a.type].uv),
35044));W.models[a.type]?.indices&&!W.models[a.type].indicesBuffer&&(W.gl.bindBuffer(34963,W.models[a.type].indicesBuffer=W.gl.createBuffer()),W.gl.bufferData(34963,new Uint16Array(W.models[a.type].indices),35044));a.t?a.t&&!a.mix&&(a.mix=0):a.mix=1;W.next[a.n]=a},draw:(a,b,c,d,f=[])=>{b=a-W.lastFrame;W.lastFrame=a;requestAnimationFrame(W.draw);W.next?.camera?.g&&W.render(W.next[W.next.camera.g],b,1);c=W.animation("camera");W.next?.camera?.g&&c.preMultiplySelf(W.next[W.next.camera.g].M||W.next[W.next.camera.g].m);
W.gl.uniformMatrix4fv(W.gl.getUniformLocation(W.program,"eye"),!1,c.toFloat32Array());c.invertSelf();c.preMultiplySelf(W.projection);W.gl.uniformMatrix4fv(W.gl.getUniformLocation(W.program,"pv"),!1,c.toFloat32Array());W.gl.clear(16640);for(d in W.next)W.next[d].t||1!=W.col(W.next[d].b)[3]?f.push(W.next[d]):W.render(W.next[d],b);f.sort((h,l)=>W.dist(l)-W.dist(h));W.gl.enable(3042);for(d of f)["plane","billboard"].includes(d.type)&&W.gl.depthMask(0),W.render(d,b),W.gl.depthMask(1);W.gl.disable(3042);
W.gl.uniform3f(W.gl.getUniformLocation(W.program,"light"),W.lerp("light","x"),W.lerp("light","y"),W.lerp("light","z"))},render:(a,b,c=["camera","light","group"].includes(a.type),d)=>{a.t&&(W.gl.bindTexture(3553,W.textures[a.t.id]),W.gl.uniform1i(W.gl.getUniformLocation(W.program,"sampler"),0));a.f<a.a&&(a.f+=b);a.f>a.a&&(a.f=a.a);W.next[a.n].m=W.animation(a.n);W.next[a.g]&&W.next[a.n].m.preMultiplySelf(W.next[a.g].M||W.next[a.g].m);W.gl.uniformMatrix4fv(W.gl.getUniformLocation(W.program,"m"),!1,(W.next[a.n].M||
W.next[a.n].m).toFloat32Array());W.gl.uniformMatrix4fv(W.gl.getUniformLocation(W.program,"im"),!1,(new DOMMatrix(W.next[a.n].M||W.next[a.n].m)).invertSelf().toFloat32Array());c||(W.gl.bindBuffer(34962,W.models[a.type].verticesBuffer),W.gl.vertexAttribPointer(d=W.gl.getAttribLocation(W.program,"pos"),3,5126,!1,0,0),W.gl.enableVertexAttribArray(d),W.models[a.type].uvBuffer&&(W.gl.bindBuffer(34962,W.models[a.type].uvBuffer),W.gl.vertexAttribPointer(d=W.gl.getAttribLocation(W.program,"uv"),2,5126,!1,
0,0),W.gl.enableVertexAttribArray(d)),(a.s||W.models[a.type].customNormals)&&W.models[a.type].normalsBuffer&&(W.gl.bindBuffer(34962,W.models[a.type].normalsBuffer),W.gl.vertexAttribPointer(d=W.gl.getAttribLocation(W.program,"normal"),3,5126,!1,0,0),W.gl.enableVertexAttribArray(d)),W.gl.uniform4f(W.gl.getUniformLocation(W.program,"o"),a.s,(3<a.mode||3<W.gl[a.mode])&&!a.ns?1:0,W.ambientLight||.2,a.mix),W.gl.uniform4f(W.gl.getUniformLocation(W.program,"bb"),a.w,a.h,"billboard"==a.type,0),W.models[a.type].indicesBuffer&&
W.gl.bindBuffer(34963,W.models[a.type].indicesBuffer),W.gl.vertexAttrib4fv(W.gl.getAttribLocation(W.program,"col"),W.col(a.b)),W.models[a.type].indicesBuffer?W.gl.drawElements(+a.mode||W.gl[a.mode],W.models[a.type].indices.length,5123,0):W.gl.drawArrays(+a.mode||W.gl[a.mode],0,W.models[a.type].vertices.length/3))},lerp:(a,b)=>W.next[a]?.a?W.current[a][b]+W.next[a].f/W.next[a].a*(W.next[a][b]-W.current[a][b]):W.next[a][b],animation:(a,b=new DOMMatrix)=>W.next[a]?b.translateSelf(W.lerp(a,"x"),W.lerp(a,
"y"),W.lerp(a,"z")).rotateSelf(W.lerp(a,"rx"),W.lerp(a,"ry"),W.lerp(a,"rz")).scaleSelf(W.lerp(a,"w"),W.lerp(a,"h"),W.lerp(a,"d")):b,dist:(a,b=W.next.camera)=>a?.m&&b?.m?(b.m.m41-a.m.m41)**2+(b.m.m42-a.m.m42)**2+(b.m.m43-a.m.m43)**2:0,ambient:a=>W.ambientLight=a,col:a=>[...a.replace("#","").match(5>a.length?/./g:/../g).map(b=>("0x"+b)/(5>a.length?15:255)),1],add:(a,b)=>{W.models[a]=b;b.normals&&(W.models[a].customNormals=1);W[a]=c=>W.setState(c,a)},group:a=>W.setState(a,"group"),move:(a,b)=>setTimeout(()=>
{W.setState(a)},b||1),delete:(a,b)=>setTimeout(()=>{delete W.next[a]},b||1),camera:(a,b)=>setTimeout(()=>{W.setState(a,a.n="camera")},b||1),light:(a,b)=>b?setTimeout(()=>{W.setState(a,a.n="light")},b):W.setState(a,a.n="light"),smooth:(a,b={},c=[],d,f,h,l,k,g,e,t,u,v,m)=>{W.models[a.type].normals=[];for(h=0;h<W.models[a.type].vertices.length;h+=3)c.push(W.models[a.type].vertices.slice(h,h+3));(d=W.models[a.type].indices)?f=1:(d=c,f=0);for(h=0;h<2*d.length;h+=3){l=h%d.length;k=c[t=f?W.models[a.type].indices[l]:
l];g=c[u=f?W.models[a.type].indices[l+1]:l+1];e=c[v=f?W.models[a.type].indices[l+2]:l+2];let n=[g[0]-k[0],g[1]-k[1],g[2]-k[2]],p=[e[0]-g[0],e[1]-g[1],e[2]-g[2]];m=h>l?[0,0,0]:[n[1]*p[2]-n[2]*p[1],n[2]*p[0]-n[0]*p[2],n[0]*p[1]-n[1]*p[0]];let w,x;(w=b)[x=k[0]+"_"+k[1]+"_"+k[2]]||(w[x]=[0,0,0]);let y,z;(y=b)[z=g[0]+"_"+g[1]+"_"+g[2]]||(y[z]=[0,0,0]);let A,B;(A=b)[B=e[0]+"_"+e[1]+"_"+e[2]]||(A[B]=[0,0,0]);W.models[a.type].normals[t]=b[k[0]+"_"+k[1]+"_"+k[2]]=b[k[0]+"_"+k[1]+"_"+k[2]].map((q,r)=>q+m[r]);
W.models[a.type].normals[u]=b[g[0]+"_"+g[1]+"_"+g[2]]=b[g[0]+"_"+g[1]+"_"+g[2]].map((q,r)=>q+m[r]);W.models[a.type].normals[v]=b[e[0]+"_"+e[1]+"_"+e[2]]=b[e[0]+"_"+e[1]+"_"+e[2]].map((q,r)=>q+m[r])}}};W.add("plane",{vertices:[.5,.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0],uv:[1,1,0,1,0,0,1,1,0,0,1,0]});
W.add("cube",{vertices:[.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5],uv:[1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,
0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0]});W.cube=a=>W.setState(a,"cube");W.add("pyramid",{vertices:[-.5,-.5,.5,.5,-.5,.5,0,.5,0,.5,-.5,.5,.5,-.5,-.5,0,.5,0,.5,-.5,-.5,-.5,-.5,-.5,0,.5,0,-.5,-.5,-.5,-.5,-.5,.5,0,.5,0,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5],uv:[0,0,1,0,.5,1,0,0,1,0,.5,1,0,0,1,0,.5,1,0,0,1,0,.5,1,1,1,0,1,0,0,1,1,0,0,1,0]});
((a,b,c,d,f,h,l=[],k=[],g=[],e=20)=>{for(c=0;c<=e;c++)for(d=c*Math.PI/e,a=0;a<=e;a++)b=2*a*Math.PI/e,l.push(+(Math.sin(b)*Math.sin(d)/2).toFixed(6),+(Math.cos(d)/2).toFixed(6),+(Math.cos(b)*Math.sin(d)/2).toFixed(6)),g.push(3.5*Math.sin(a/e),-Math.sin(c/e)),a<e&&c<e&&k.push(f=c*(e+1)+a,h=f+(e+1),f+1,f+1,h,h+1);W.add("sphere",{vertices:l,uv:g,indices:k})})();
let results={perfect:{pass:!0,title:"Perfect!",text:"I'm making a note here: huge success!"},great:{pass:!0,title:"Great job",text:"These results are very promising."},bad:{pass:!1,title:"Disappointing",text:"These results are not satisfactory. Try again."}};
class ResultState{constructor(){this.text=this.title="";this.pass=!0;nextLevel.addEventListener("click",()=>{let a=gameData.nextLevel();a&&(gameData.level++,gameStateMachine.setState(a))});retry.addEventListener("click",()=>{let a=gameData.getLevel();a&&gameStateMachine.setState(a)})}onEnter(){W.reset(c2d);document.body.style.background=colorDark;resultTitle.innerText=this.title;resultText.innerText=this.text;result.classList.remove("hide");nextLevel.classList.toggle("hide",!this.pass)}onLeave(){result.classList.add("hide")}onUpdate(){}}
let resultState=new ResultState,newResultState=a=>{a=5<a?results.perfect:4.5<a?results.great:results.bad;resultState.title=a.title;resultState.text=a.text;resultState.pass=a.pass;return resultState};class Level{constructor(){this.score=0}calculatePower(a){this.score=5*a+.25;a=Math.floor(this.score);for(let b=0;5>b;b++)lights.children[b].classList.toggle("on",a>=b+1)}submit(){submit.classList.add("clicked");setTimeout(()=>{gameStateMachine.setState(newResultState(this.score))},500)}}
class TwoGearsLevel extends Level{constructor(){super();this.frameG2=this.frameG1=0;this.speed=-.5;this.score=this.counter=0;this.targetSpeed=1;this.inputListener=()=>this.updateRange();this.submitListener=()=>this.submit()}onEnter(){controls.classList.add("slide");range.value="50";range.step="10";this.updateRange();W.reset(c2d);W.camera({y:.5,z:7,rx:-7,fov:10});W.light({x:1,y:-5,z:-1});W.ambient(.5);document.body.style.background=color4;W.group({n:"G1",ry:0});W.cube({g:"G1",w:.5,h:1,d:1,x:-.25,y:0,
b:colorDark});W.group({n:"G2",ry:0});W.cube({g:"G2",w:.5,h:1,d:1,x:.25,y:0,b:colorWhite});range.addEventListener("input",this.inputListener);submit.addEventListener("click",this.submitListener)}onLeave(){document.removeEventListener("input",this.inputListener);controls.classList.remove("slide")}onUpdate(){this.frameG1++;360<this.frameG1&&(this.frameG1-=360);W.move({n:"G1",rx:this.frameG1,ry:45});this.frameG2+=this.speed;360<this.frameG2?this.frameG2-=360:0>this.frameG2&&(this.frameG2+=360);W.move({n:"G2",
rx:this.frameG2,ry:45});this.counter++;20<this.counter&&(this.counter=0,this.calculatePower())}updateRange(){this.speed=((parseInt(range.value)||0)-50)/40}submit(){document.removeEventListener("submit",this.inputListener);super.submit()}calculatePower(){super.calculatePower(Math.pow((1-Math.abs(this.targetSpeed-this.speed))*(1-Math.abs(this.frameG1%90-this.frameG2%90)/90),5))}}let twoGearsLevel=new TwoGearsLevel,HEIGHT=.3,WIDTH=.2;
class HelixLevel extends Level{constructor(){super();this.numObjects=12;this.radius=.9;this.maxFrames=1200;this.radiusOffset=this.counter=this.frame=0;this.objectArc=360/this.numObjects;this.expectedRadius=.8;this.expectedAngle=360/this.numObjects;this.inputListener=()=>this.updateRange();this.submitListener=()=>this.submit()}onEnter(){controls.classList.add("slide");range.value="0";this.updateRange();circleRange.toggle(!0);circleRange.multiplier=8;W.reset(c2d);W.camera({y:1,z:1.8,rx:-45,fov:38});
document.body.style.background=color4;for(let a=0;a<this.numObjects;a++)W.group({n:`GG${a}`}),W.group({g:`GG${a}`,n:`G${a}`}),W.pyramid({g:`G${a}`,n:`P${a}`,ns:1,w:WIDTH,h:HEIGHT,d:WIDTH,b:a%2?colorDark:colorWhite});range.addEventListener("input",this.inputListener);submit.addEventListener("click",this.submitListener)}onLeave(){circleRange.toggle(!1);document.removeEventListener("input",this.inputListener);controls.classList.remove("slide")}updateObjects(){for(let a=0;a<this.numObjects;a+=2){let b=
360*(1/this.numObjects*a+this.frame/this.maxFrames),c=8*b;W.move({n:`GG${a}`,ry:b});W.move({n:`G${a}`,rx:c,z:this.radius});W.move({n:`P${a}`,y:HEIGHT/2});W.move({n:`GG${a+1}`,ry:b+circleRange.getValue()-this.expectedAngle});W.move({n:`G${a+1}`,rx:c+180,z:this.radius-this.radiusOffset});W.move({n:`P${a+1}`,y:HEIGHT/2})}}onUpdate(){this.frame++;this.frame===this.maxFrames&&(this.frame=0);this.updateObjects();this.counter++;20<this.counter&&(this.counter=0,this.calculatePower())}updateRange(){this.radiusOffset=
this.expectedRadius-parseInt(range.value)/100}calculatePower(){let a=1-Math.abs(this.radiusOffset),b=Math.max(0,1-Math.abs(this.expectedAngle-circleRange.getValue()));super.calculatePower((b+a)/2)}submit(){document.removeEventListener("submit",this.inputListener);super.submit()}}let helixLevel=new HelixLevel;
class MetronomeLevel extends Level{constructor(){super();this.MAX_FRAMES=60;this.AMPLITUDE_RANGE=1.5;this.frame=0;this.amplitudeG1=1;this.score=this.counter=this.amplitudeG2=0;this.inputListener=()=>this.updateRange();this.submitListener=()=>this.submit()}onEnter(){controls.classList.add("slide");range.value="0";this.updateRange();W.reset(c2d);W.camera({y:.5,z:7,rx:-7,fov:10});document.body.style.background=color6;W.group({n:"G1",ry:0});W.cube({g:"G1",w:.1,h:1,d:.1,x:0,y:.5,ns:1,b:colorDark});W.group({n:"G2",
ry:0});W.cube({g:"G2",w:.1,h:1,d:.1,x:0,y:.5,ns:1,b:colorWhite});range.addEventListener("input",this.inputListener);submit.addEventListener("click",this.submitListener)}onLeave(){document.removeEventListener("input",this.inputListener);controls.classList.remove("slide")}onUpdate(){this.frame++;this.frame>this.MAX_FRAMES&&(this.frame=0);W.move({n:"G1",x:-.5,y:-.5,rz:30*this.amplitudeG1*Math.cos(2*Math.PI*this.frame/this.MAX_FRAMES)});W.move({n:"G2",x:.5,y:-.5,rz:30*this.amplitudeG2*Math.cos(2*Math.PI*
this.frame/this.MAX_FRAMES)});this.counter++;20<this.counter&&(this.counter=0,this.calculatePower())}updateRange(){this.amplitudeG2=this.AMPLITUDE_RANGE*range.value/100}calculatePower(){super.calculatePower(1-Math.abs(this.amplitudeG1-this.amplitudeG2))}submit(){document.removeEventListener("submit",this.inputListener);super.submit()}}let metronomeLevel=new MetronomeLevel;
class TwoCubesLevel extends Level{constructor(){super();this.frameG2=this.frameG1=0;this.speed=-.5;this.score=this.counter=0;this.targetSpeed=1;this.inputListener=()=>this.updateRange();this.submitListener=()=>this.submit()}onEnter(){controls.classList.add("slide");range.value="45";this.updateRange();W.reset(c2d);W.camera({y:4,z:7,rx:-30,fov:10});W.light({x:0,y:-5,z:0});W.ambient(.8);document.body.style.background=color6;W.group({n:"G1",ry:0});W.cube({g:"G1",w:1.5,h:1,d:1,x:0,y:0,b:colorWhite});W.group({n:"G2",
ry:0});W.cube({g:"G2",w:1.5,h:1,d:1,x:0,y:0,b:colorWhite});range.addEventListener("input",this.inputListener);submit.addEventListener("click",this.submitListener)}onLeave(){document.removeEventListener("input",this.inputListener);controls.classList.remove("slide")}onUpdate(){this.frameG1++;360<this.frameG1&&(this.frameG1-=360);W.move({n:"G1",ry:this.frameG1});this.frameG2+=this.speed;360<this.frameG2?this.frameG2-=360:0>this.frameG2&&(this.frameG2+=360);W.move({n:"G2",ry:this.frameG2});this.counter++;
20<this.counter&&(this.counter=0,this.calculatePower())}updateRange(){this.speed=2*(range.value-50)/100}submit(){document.removeEventListener("submit",this.inputListener);super.submit()}calculatePower(){this.score=Math.pow((1-Math.abs(this.targetSpeed-this.speed))*(1-Math.abs(this.frameG1%180-this.frameG2%180)/180),5);super.calculatePower(this.score)}}let twoCubesLevel=new TwoCubesLevel,levels=[metronomeLevel,twoCubesLevel,twoGearsLevel,helixLevel];
class GameData{constructor(){this.level=0}getLevel(){return levels[this.level]}nextLevel(){return levels[this.level+1]}prevLevel(){return levels[this.level-1]}}let gameData=new GameData;class GameState{onEnter(){gameStateMachine.setState(gameData.getLevel())}onUpdate(){}}let gameState=new GameState;
class IntroState{onEnter(){intro.classList.remove("hide");play.addEventListener("click",this.startGame)}onLeave(){intro.classList.add("hide");play.removeEventListener("click",this.startGame)}onUpdate(){this.updateControls()}updateControls(){controls$1.isConfirm&&!controls$1.previousState.isConfirm&&this.startGame()}startGame(){gameStateMachine.setState(gameState)}}let introState=new IntroState;
class MenuState{constructor(){this.selectedButton=0;this.buttons=[this.startGame,this.continueGame,this.toggleFullscreen]}onEnter(){menu.classList.remove("hide");start.addEventListener("click",this.startGame);contGame.addEventListener("click",this.continueGame);fullscreen.addEventListener("click",this.toggleFullscreen)}onLeave(){menu.classList.add("hide");start.removeEventListener("click",this.startGame);contGame.removeEventListener("click",this.continueGame);fullscreen.removeEventListener("click",
this.toggleFullscreen)}onUpdate(){this.updateControls()}updateControls(){controls$1.isUp&&!controls$1.previousState.isUp&&(this.selectedButton--,0>this.selectedButton&&(this.selectedButton=this.buttons.length-1));controls$1.isDown&&!controls$1.previousState.isDown&&(this.selectedButton++,this.selectedButton>=this.buttons.length&&(this.selectedButton=0));if(controls$1.isConfirm&&!controls$1.previousState.isConfirm){let a=this.buttons[this.selectedButton];a&&a()}}startGame(){gameStateMachine.setState(introState)}continueGame(){}toggleFullscreen(){document.fullscreenElement?
document.exitFullscreen():document.documentElement.requestFullscreen()}}let menuState=new MenuState;document.querySelector('link[type="image/x-icon"]').href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E\ud83d\udd35%3C/text%3E%3C/svg%3E";createGameStateMachine(menuState);let previousTime=0,interval=1E3/60,fpsBacklog=[];
(function draw(a){let c=a-previousTime;c>=interval&&(previousTime=a-c%interval,controls$1.queryController(),gameStateMachine.getState().onUpdate(c),fpsBacklog.push(1E3/c),15===fpsBacklog.length&&(fps.innerHTML=`${Math.round(fpsBacklog.reduce((d,f)=>d+f)/15)} FPS`,fpsBacklog=[]));requestAnimationFrame(draw)})(0);