let style="",TAU=2*Math.PI;
class CircleRange{constructor(a){this.previousAngle=this.value=this.turns=0;this.prevPos={x:0,y:0};this.multiplier=1;this.ringSize=0;a.addEventListener("pointerdown",b=>this.dragStart(b));this.inputHandler=b=>this.moveThumb(b);document.addEventListener("pointerup",()=>this.dragStop());this.input=a;this.ring=this.input.children[0];this.thumb=this.ring.children[0]}dragStart(a){this.previousAngle=this.calculateCircleAngle(a.x,a.y);document.addEventListener("pointermove",this.inputHandler)}dragStop(){document.removeEventListener("pointermove",this.inputHandler)}moveThumb(a){a=
this.calculateCircleAngle(a.x,a.y);let b=this.previousAngle-a;this.previousAngle=a;b>=Math.PI?this.turns++:b<=-Math.PI&&this.turns--;this.value-=Math.min(15,b);this.updateThumb()}updateThumb(){let {x:a,y:b}=this.angleToPos(this.ringSize,this.value);this.thumb.style.transform=`translate(${a-this.ringSize}px, ${b-this.ringSize/2}px)`}calculateCircleAngle(a,b){let {height:c,width:e,x:f,y:g}=this.input.getBoundingClientRect();return Math.atan2(b-(g+c/2),a-(f+e/2))}angleToPos(a,b){return{x:a/2+a/2*Math.cos(b),
y:a/2+a/2*Math.sin(b)}}toggle(a){this.value=0;this.updateThumb();this.input.classList.toggle("hide",!a);this.ringSize=this.input.children[0].clientHeight+15}getValue(){return this.multiplier*(this.turns+this.value/TAU)}}
class Controls{constructor(){this.isEscape=this.isConfirm=this.isRight=this.isLeft=this.isDown=this.isUp=!1;this.keyMap=new Map;this.previousState={isUp:this.isUp,isDown:this.isDown,isConfirm:this.isConfirm,isEscape:this.isEscape};document.addEventListener("keydown",a=>this.toggleKey(a,!0));document.addEventListener("keyup",a=>this.toggleKey(a,!1));this.inputDirection=new DOMPoint}queryController(){this.previousState.isUp=this.isUp;this.previousState.isDown=this.isDown;this.previousState.isConfirm=
this.isConfirm;this.previousState.isEscape=this.isEscape;let a=navigator.getGamepads()[0],b=this.keyMap.get("KeyA")||this.keyMap.get("ArrowLeft")||a?.buttons[14].pressed?-1:0,c=this.keyMap.get("KeyD")||this.keyMap.get("ArrowRight")||a?.buttons[15].pressed?1:0,e=this.keyMap.get("KeyW")||this.keyMap.get("ArrowUp")||a?.buttons[12].pressed?-1:0,f=this.keyMap.get("KeyS")||this.keyMap.get("ArrowDown")||a?.buttons[13].pressed?1:0;this.inputDirection.x=b+c||a?.axes[0]||0;this.inputDirection.y=e+f||a?.axes[1]||
0;.1>Math.hypot(this.inputDirection.x,this.inputDirection.y)&&(this.inputDirection.x=0,this.inputDirection.y=0);this.isUp=0>this.inputDirection.y;this.isDown=0<this.inputDirection.y;this.isLeft=0>this.inputDirection.x;this.isRight=0<this.inputDirection.x;this.isConfirm=!!(this.keyMap.get("Enter")||a?.buttons[0].pressed||a?.buttons[9].pressed);this.isEscape=!(!this.keyMap.get("Escape")&&!a?.buttons[8].pressed)}toggleKey(a,b){this.keyMap.set(a.code,b)}}
let controls$1=new Controls,circleRange=new CircleRange(circleRangeElement),circleRange2=new CircleRange(circleRangeElement2);class StateMachine{constructor(a,...b){this.currentState=a;this.currentState.onEnter?.(...b)}setState(a,...b){this.currentState.onLeave?.();this.currentState=a;this.currentState.onEnter?.(...b)}getState(){return this.currentState}}let gameStateMachine;function createGameStateMachine(a,...b){gameStateMachine=new StateMachine(a,...b)}var bodyStyles=window.getComputedStyle(document.body);
let colorWhite=bodyStyles.getPropertyValue("--color-white"),color1=bodyStyles.getPropertyValue("--color-1");bodyStyles.getPropertyValue("--color-2");bodyStyles.getPropertyValue("--color-3");let color4=bodyStyles.getPropertyValue("--color-4"),color5=bodyStyles.getPropertyValue("--color-5"),color6=bodyStyles.getPropertyValue("--color-6"),colorDark=bodyStyles.getPropertyValue("--color-dark");function renderLeds(){for(let a=0;5>a;a++)lights.innerHTML+='<div class="led"><i/></div>'}
function background(a){document.body.style.background=a}function exponencialSmoothing(a,b,c,e=3){return a+c*e/1E3*(b-a)}class DrawEngine{constructor(){let a=()=>{c2d.height=c2d.clientHeight;c2d.width=c2d.clientWidth};window.addEventListener("resize",a);a();renderLeds()}}new DrawEngine;
let W={models:{},reset:a=>{W.canvas=a;W.objs=0;W.current={};W.next={};W.textures={};W.gl=a.getContext("webgl2");W.gl.blendFunc(770,771);W.gl.activeTexture(33984);W.program=W.gl.createProgram();W.gl.enable(2884);W.gl.shaderSource(a=W.gl.createShader(35633),"#version 300 es\n      precision highp float;\n      in vec4 pos, col, uv, normal;\n      uniform mat4 pv, eye, m, im;\n      uniform vec4 bb;\n      out vec4 v_pos, v_col, v_uv, v_normal;\n      void main() {                                 \n        gl_Position = pv * ( \n          v_pos = bb.z > 0.\n          ? m[3] + eye * (pos * bb)\n          : m * pos\n        );                                          \n        v_col = col;\n        v_uv = uv;\n        v_normal = transpose(inverse(m)) * normal;\n      }");
W.gl.compileShader(a);W.gl.attachShader(W.program,a);W.gl.shaderSource(a=W.gl.createShader(35632),"#version 300 es\n      precision highp float;\n      in vec4 v_pos, v_col, v_uv, v_normal;\n      uniform vec3 light;\n      uniform vec4 o;\n      uniform sampler2D sampler;\n      out vec4 c;\n\n      void main() {\n        c = mix(texture(sampler, v_uv.xy), v_col, o[3]); \n        if(o[1] > 0.){ \n          c = vec4(\n            c.rgb * (max(0., dot(light, -normalize(\n              o[0] > 0.\n              ? vec3(v_normal.xyz)\n              : cross(dFdx(v_pos.xyz), dFdy(v_pos.xyz)) \n            )))\n            + o[2]), \n            c.a \n          );\n        }\n      }");
W.gl.compileShader(a);W.gl.attachShader(W.program,a);W.gl.linkProgram(W.program);W.gl.useProgram(W.program);W.gl.enable(2929);W.light({y:-1});W.camera({fov:30});setTimeout(W.draw,16)},setState:(a,b,c,e,f,g,l,k,h,d,r,n,t)=>{let m;(m=a).n||(m.n="o"+W.objs++);a.size&&(a.w=a.h=a.d=a.size);a.t&&a.t.width&&!W.textures[a.t.id]&&(c=W.gl.createTexture(),W.gl.pixelStorei(37441,!0),W.gl.bindTexture(3553,c),W.gl.pixelStorei(37440,1),W.gl.texImage2D(3553,0,6408,6408,5121,a.t),W.gl.generateMipmap(3553),W.textures[a.t.id]=
c);a.fov&&(W.projection=new DOMMatrix([1/Math.tan(a.fov*Math.PI/180)/(W.canvas.width/W.canvas.height),0,0,0,0,1/Math.tan(a.fov*Math.PI/180),0,0,0,0,-1001/999,-1,0,0,-2002/999,0]));a={type:b,...(W.current[a.n]=W.next[a.n]||{w:1,h:1,d:1,x:0,y:0,z:0,rx:0,ry:0,rz:0,b:"888",mode:4,mix:0}),...a,f:0};W.models[a.type]?.vertices&&!W.models?.[a.type].verticesBuffer&&(W.gl.bindBuffer(34962,W.models[a.type].verticesBuffer=W.gl.createBuffer()),W.gl.bufferData(34962,new Float32Array(W.models[a.type].vertices),
35044),!W.models[a.type].normals&&W.smooth&&W.smooth(a),W.models[a.type].normals&&(W.gl.bindBuffer(34962,W.models[a.type].normalsBuffer=W.gl.createBuffer()),W.gl.bufferData(34962,new Float32Array(W.models[a.type].normals.flat()),35044)));W.models[a.type]?.uv&&!W.models[a.type].uvBuffer&&(W.gl.bindBuffer(34962,W.models[a.type].uvBuffer=W.gl.createBuffer()),W.gl.bufferData(34962,new Float32Array(W.models[a.type].uv),35044));W.models[a.type]?.indices&&!W.models[a.type].indicesBuffer&&(W.gl.bindBuffer(34963,
W.models[a.type].indicesBuffer=W.gl.createBuffer()),W.gl.bufferData(34963,new Uint16Array(W.models[a.type].indices),35044));a.t?a.t&&!a.mix&&(a.mix=0):a.mix=1;W.next[a.n]=a},draw:(a,b,c,e,f=[])=>{if(W.isDrawing)console.log("drop frame");else{W.isDrawing=!0;b=a-W.lastFrame;W.lastFrame=a;requestAnimationFrame(W.draw);W.next?.camera?.g&&W.render(W.next[W.next.camera.g],b,1);c=W.animation("camera");W.next?.camera?.g&&c.preMultiplySelf(W.next[W.next.camera.g].M||W.next[W.next.camera.g].m);W.gl.uniformMatrix4fv(W.gl.getUniformLocation(W.program,
"eye"),!1,c.toFloat32Array());c.invertSelf();c.preMultiplySelf(W.projection);W.gl.uniformMatrix4fv(W.gl.getUniformLocation(W.program,"pv"),!1,c.toFloat32Array());W.gl.clear(16640);for(e in W.next)W.next[e].t||1!=W.col(W.next[e].b)[3]?f.push(W.next[e]):W.render(W.next[e],b);f.sort((g,l)=>W.dist(l)-W.dist(g));W.gl.enable(3042);for(e of f)["plane","billboard"].includes(e.type)&&W.gl.depthMask(0),W.render(e,b),W.gl.depthMask(1);W.gl.disable(3042);W.gl.uniform3f(W.gl.getUniformLocation(W.program,"light"),
W.lerp("light","x"),W.lerp("light","y"),W.lerp("light","z"));W.isDrawing=!1}},render:(a,b,c=["camera","light","group"].includes(a.type),e)=>{a.t&&(W.gl.bindTexture(3553,W.textures[a.t.id]),W.gl.uniform1i(W.gl.getUniformLocation(W.program,"sampler"),0));a.f<a.a&&(a.f+=b);a.f>a.a&&(a.f=a.a);W.next[a.n].m=W.animation(a.n);W.next[a.g]&&W.next[a.n].m.preMultiplySelf(W.next[a.g].M||W.next[a.g].m);W.gl.uniformMatrix4fv(W.gl.getUniformLocation(W.program,"m"),!1,(W.next[a.n].M||W.next[a.n].m).toFloat32Array());
W.gl.uniformMatrix4fv(W.gl.getUniformLocation(W.program,"im"),!1,(new DOMMatrix(W.next[a.n].M||W.next[a.n].m)).invertSelf().toFloat32Array());c||(W.gl.bindBuffer(34962,W.models[a.type].verticesBuffer),W.gl.vertexAttribPointer(e=W.gl.getAttribLocation(W.program,"pos"),3,5126,!1,0,0),W.gl.enableVertexAttribArray(e),W.models[a.type].uvBuffer&&(W.gl.bindBuffer(34962,W.models[a.type].uvBuffer),W.gl.vertexAttribPointer(e=W.gl.getAttribLocation(W.program,"uv"),2,5126,!1,0,0),W.gl.enableVertexAttribArray(e)),
(a.s||W.models[a.type].customNormals)&&W.models[a.type].normalsBuffer&&(W.gl.bindBuffer(34962,W.models[a.type].normalsBuffer),W.gl.vertexAttribPointer(e=W.gl.getAttribLocation(W.program,"normal"),3,5126,!1,0,0),W.gl.enableVertexAttribArray(e)),W.gl.uniform4f(W.gl.getUniformLocation(W.program,"o"),a.s,(3<a.mode||3<W.gl[a.mode])&&!a.ns?1:0,W.ambientLight||.2,a.mix),W.gl.uniform4f(W.gl.getUniformLocation(W.program,"bb"),a.w,a.h,"billboard"==a.type,0),W.models[a.type].indicesBuffer&&W.gl.bindBuffer(34963,
W.models[a.type].indicesBuffer),W.gl.vertexAttrib4fv(W.gl.getAttribLocation(W.program,"col"),W.col(a.b)),W.models[a.type].indicesBuffer?W.gl.drawElements(+a.mode||W.gl[a.mode],W.models[a.type].indices.length,5123,0):W.gl.drawArrays(+a.mode||W.gl[a.mode],0,W.models[a.type].vertices.length/3))},lerp:(a,b)=>W.next[a]?.a?W.current[a][b]+W.next[a].f/W.next[a].a*(W.next[a][b]-W.current[a][b]):W.next[a][b],animation:(a,b=new DOMMatrix)=>W.next[a]?b.translateSelf(W.lerp(a,"x"),W.lerp(a,"y"),W.lerp(a,"z")).rotateSelf(W.lerp(a,
"rx"),W.lerp(a,"ry"),W.lerp(a,"rz")).scaleSelf(W.lerp(a,"w"),W.lerp(a,"h"),W.lerp(a,"d")):b,dist:(a,b=W.next.camera)=>a?.m&&b?.m?(b.m.m41-a.m.m41)**2+(b.m.m42-a.m.m42)**2+(b.m.m43-a.m.m43)**2:0,ambient:a=>W.ambientLight=a,col:a=>[...a.replace("#","").match(5>a.length?/./g:/../g).map(b=>("0x"+b)/(5>a.length?15:255)),1],add:(a,b)=>{W.models[a]=b;b.normals&&(W.models[a].customNormals=1);W[a]=c=>W.setState(c,a)},group:a=>W.setState(a,"group"),move:(a,b)=>setTimeout(()=>{W.setState(a)},b||1),delete:(a,
b)=>setTimeout(()=>{delete W.next[a]},b||1),camera:(a,b)=>setTimeout(()=>{W.setState(a,a.n="camera")},b||1),light:(a,b)=>b?setTimeout(()=>{W.setState(a,a.n="light")},b):W.setState(a,a.n="light"),smooth:(a,b={},c=[],e,f,g,l,k,h,d,r,n,t,m)=>{W.models[a.type].normals=[];for(g=0;g<W.models[a.type].vertices.length;g+=3)c.push(W.models[a.type].vertices.slice(g,g+3));(e=W.models[a.type].indices)?f=1:(e=c,f=0);for(g=0;g<2*e.length;g+=3){l=g%e.length;k=c[r=f?W.models[a.type].indices[l]:l];h=c[n=f?W.models[a.type].indices[l+
1]:l+1];d=c[t=f?W.models[a.type].indices[l+2]:l+2];let p=[h[0]-k[0],h[1]-k[1],h[2]-k[2]],q=[d[0]-h[0],d[1]-h[1],d[2]-h[2]];m=g>l?[0,0,0]:[p[1]*q[2]-p[2]*q[1],p[2]*q[0]-p[0]*q[2],p[0]*q[1]-p[1]*q[0]];let w,x;(w=b)[x=k[0]+"_"+k[1]+"_"+k[2]]||(w[x]=[0,0,0]);let y,z;(y=b)[z=h[0]+"_"+h[1]+"_"+h[2]]||(y[z]=[0,0,0]);let A,B;(A=b)[B=d[0]+"_"+d[1]+"_"+d[2]]||(A[B]=[0,0,0]);W.models[a.type].normals[r]=b[k[0]+"_"+k[1]+"_"+k[2]]=b[k[0]+"_"+k[1]+"_"+k[2]].map((u,v)=>u+m[v]);W.models[a.type].normals[n]=b[h[0]+
"_"+h[1]+"_"+h[2]]=b[h[0]+"_"+h[1]+"_"+h[2]].map((u,v)=>u+m[v]);W.models[a.type].normals[t]=b[d[0]+"_"+d[1]+"_"+d[2]]=b[d[0]+"_"+d[1]+"_"+d[2]].map((u,v)=>u+m[v])}}};W.add("plane",{vertices:[.5,.5,0,-.5,.5,0,-.5,-.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0],uv:[1,1,0,1,0,0,1,1,0,0,1,0]});
W.add("cube",{vertices:[.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5],uv:[1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,
0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0]});W.cube=a=>W.setState(a,"cube");W.add("pyramid",{vertices:[-.5,-.5,.5,.5,-.5,.5,0,.5,0,.5,-.5,.5,.5,-.5,-.5,0,.5,0,.5,-.5,-.5,-.5,-.5,-.5,0,.5,0,-.5,-.5,-.5,-.5,-.5,.5,0,.5,0,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5],uv:[0,0,1,0,.5,1,0,0,1,0,.5,1,0,0,1,0,.5,1,0,0,1,0,.5,1,1,1,0,1,0,0,1,1,0,0,1,0]});
((a,b,c,e,f,g,l=[],k=[],h=[],d=20)=>{for(c=0;c<=d;c++)for(e=c*Math.PI/d,a=0;a<=d;a++)b=2*a*Math.PI/d,l.push(+(Math.sin(b)*Math.sin(e)/2).toFixed(6),+(Math.cos(e)/2).toFixed(6),+(Math.cos(b)*Math.sin(e)/2).toFixed(6)),h.push(3.5*Math.sin(a/d),-Math.sin(c/d)),a<d&&c<d&&k.push(f=c*(d+1)+a,g=f+(d+1),f+1,f+1,g,g+1);W.add("sphere",{vertices:l,uv:h,indices:k})})();
((a,b,c,e,f,g,l=[],k=[],h=[],d=20)=>{e=.2*d;let r=.8*d;for(c=0;c<=d;c++){a=c<=e;b=c>=r;let n=a?c/e*.5:b?0:.5,t=a?.5:b?-.5:2*((d-c)/d-.5);for(a=0;a<=d;a++)b=2*a*Math.PI/d,l.push(+(Math.sin(b)*n).toFixed(6),t,+(Math.cos(b)*n).toFixed(6)),h.push(3.5*Math.sin(a/d),-Math.sin(c/d)),a<d&&c<d&&k.push(f=c*(d+1)+a,g=f+(d+1),f+1,f+1,g,g+1)}W.add("cylinder",{vertices:l,uv:h,indices:k})})();
class LevelListState{constructor(){lobby.addEventListener("click",a=>{"submit"===a?.target?.type&&(a=parseInt(a.target.innerText)-1,gameData.level=a,this.startGame())})}onEnter(){background(colorDark);list.innerHTML="";for(let a=0;a<levels.length;a++)list.innerHTML+=`<button ${gameData.level<a?'disabled="disabled"':""}">${a+1}</button>`;lobby.classList.remove("hide")}onLeave(){lobby.classList.add("hide");play.removeEventListener("click",this.startGame)}onUpdate(){this.updateControls()}updateControls(){controls$1.isConfirm&&
!controls$1.previousState.isConfirm&&this.startGame()}startGame(){gameStateMachine.setState(gameState)}}let levelListState=new LevelListState,results={perfect:{pass:!0,title:"Perfect!",text:"I'm making a note here: huge success!"},great:{pass:!0,title:"Great job",text:"These results are very promising."},bad:{pass:!1,title:"Disappointing",text:"These results are not satisfactory. Try again."}};
class ResultState{constructor(){this.text=this.title="";this.pass=!0;nextLevel.addEventListener("click",()=>{let a=gameData.nextLevel();a&&gameStateMachine.setState(a)});retry.addEventListener("click",()=>{let a=gameData.getLevel();a&&gameStateMachine.setState(a)});thanks.addEventListener("click",()=>{gameStateMachine.setState(levelListState)})}onEnter(){background(colorDark);W.reset(c2d);this.pass&&gameData.nextLevel()&&(gameData.level++,gameData.storeLevel());this.pass&&!gameData.nextLevel()?(resultTitle.innerText=
"End of experiment",resultText.innerText="You have demonstrated promising results for your species. We will keep in touch.",result.classList.remove("hide"),thanks.classList.remove("hide"),nextLevel.classList.add("hide")):(resultTitle.innerText=this.title,resultText.innerText=this.text,thanks.classList.add("hide"),result.classList.remove("hide"),nextLevel.classList.toggle("hide",!this.pass))}onLeave(){result.classList.add("hide")}onUpdate(){}}
let resultState=new ResultState,newResultState=a=>{a=5<a?results.perfect:4.5<a?results.great:results.bad;resultState.title=a.title;resultState.text=a.text;resultState.pass=a.pass;return resultState};function updateLeds(a){for(let b=0;5>b;b++)lights.children[b].classList.toggle("on",a>=b+1)}
class Level{constructor(){this.score=0;this.inputListener=()=>this.updateRange();this.submitListener=()=>this.submit()}onEnter(){background(gameData.color());range.addEventListener("input",this.inputListener);submit.addEventListener("click",this.submitListener);this.updateRange();controls.classList.add("slide")}onLeave(){range.removeEventListener("input",this.inputListener);submit.removeEventListener("click",this.submitListener);controls.classList.remove("slide");overlay.classList.add("hide");submit.classList.remove("clicked");
circleRange.toggle(!1);range.step="1";range2.step="1";updateLeds(0)}calculatePower(a){this.score=5*a+.25;updateLeds(Math.floor(this.score))}submit(){submit.removeEventListener("submit",this.inputListener);submit.classList.add("clicked");setTimeout(()=>{gameStateMachine.setState(newResultState(this.score))},500)}updateRange(){}}
class TwoGearsLevel extends Level{constructor(){super(...arguments);this.frameG2=this.frameG1=0;this.speed=-.5;this.counter=0;this.targetSpeed=1}onEnter(){range.value="50";range.step="10";W.reset(c2d);W.camera({y:.5,z:7,rx:-7,fov:10});W.light({x:1,y:-5,z:-1});W.ambient(.5);W.group({n:"G1",ry:0});W.cube({g:"G1",w:.5,h:1,d:1,x:-.25,y:0,b:colorDark});W.group({n:"G2",ry:0});W.cube({g:"G2",w:.5,h:1,d:1,x:.25,y:0,b:colorWhite});super.onEnter()}onUpdate(){this.frameG1++;360<this.frameG1&&(this.frameG1-=
360);W.move({n:"G1",rx:this.frameG1,ry:45});this.frameG2+=this.speed;360<this.frameG2?this.frameG2-=360:0>this.frameG2&&(this.frameG2+=360);W.move({n:"G2",rx:this.frameG2,ry:45});this.counter++;20<this.counter&&(this.counter=0,this.calculatePower())}updateRange(){this.speed=((parseInt(range.value)||0)-50)/40}calculatePower(){super.calculatePower(Math.pow((1-Math.abs(this.targetSpeed-this.speed))*(1-Math.abs(this.frameG1%90-this.frameG2%90)/90),5))}}
let twoGearsLevel=new TwoGearsLevel,HEIGHT=.3,WIDTH=.2;
class HelixLevel extends Level{constructor(){super(...arguments);this.numObjects=12;this.radius=.9;this.maxFrames=1200;this.radiusOffset=this.counter=this.frame=0;this.objectArc=360/this.numObjects;this.expectedRadius=.8;this.expectedAngle=360/this.numObjects}onEnter(){range.value="0";circleRange.toggle(!0);circleRange.multiplier=8;W.reset(c2d);W.camera({y:1,z:1.8,rx:-45,fov:38});for(let a=0;a<this.numObjects;a++)W.group({n:`GG${a}`}),W.group({g:`GG${a}`,n:`G${a}`}),W.pyramid({g:`G${a}`,n:`P${a}`,
ns:1,w:WIDTH,h:HEIGHT,d:WIDTH,b:a%2?colorDark:colorWhite});super.onEnter()}updateObjects(){for(let a=0;a<this.numObjects;a+=2){let b=360*(1/this.numObjects*a+this.frame/this.maxFrames),c=8*b;W.move({n:`GG${a}`,ry:b});W.move({n:`G${a}`,rx:c,z:this.radius});W.move({n:`P${a}`,y:HEIGHT/2});W.move({n:`GG${a+1}`,ry:b+circleRange.getValue()-this.expectedAngle});W.move({n:`G${a+1}`,rx:c+180,z:this.radius-this.radiusOffset});W.move({n:`P${a+1}`,y:HEIGHT/2})}}onUpdate(a){this.frame+=a/16;this.frame>=this.maxFrames&&
(this.frame-=this.maxFrames);this.updateObjects();this.counter++;20<this.counter&&(this.counter=0,this.calculatePower())}updateRange(){this.radiusOffset=this.expectedRadius-parseInt(range.value)/100}calculatePower(){let a=1-Math.abs(this.radiusOffset),b=Math.max(0,1-Math.abs(this.expectedAngle-circleRange.getValue()));super.calculatePower((b+a)/2)}}let helixLevel=new HelixLevel;
class MetronomeLevel extends Level{constructor(){super(...arguments);this.MAX_FRAMES=60;this.AMPLITUDE_RANGE=1.5;this.frame=0;this.amplitudeG1=1;this.score=this.counter=this.amplitudeG2=0}onEnter(){range.value="0";W.reset(c2d);W.camera({y:.5,z:7,rx:-7,fov:10});W.group({n:"G1",ry:0});W.cube({g:"G1",w:.1,h:1,d:.1,x:0,y:.5,ns:1,b:colorDark});W.group({n:"G2",ry:0});W.cube({g:"G2",w:.1,h:1,d:.1,x:0,y:.5,ns:1,b:colorWhite});super.onEnter()}onUpdate(){this.frame++;this.frame>this.MAX_FRAMES&&(this.frame=
0);W.move({n:"G1",x:-.5,y:-.5,rz:30*this.amplitudeG1*Math.cos(2*Math.PI*this.frame/this.MAX_FRAMES)});W.move({n:"G2",x:.5,y:-.5,rz:30*this.amplitudeG2*Math.cos(2*Math.PI*this.frame/this.MAX_FRAMES)});this.counter++;20<this.counter&&(this.counter=0,this.calculatePower())}updateRange(){this.amplitudeG2=this.AMPLITUDE_RANGE*parseInt(range.value)/100}calculatePower(){super.calculatePower(1-Math.abs(this.amplitudeG1-this.amplitudeG2))}}let metronomeLevel=new MetronomeLevel;
class CylinderLevel extends Level{constructor(){super(...arguments);this.ry=this.targetRy=this.rx=this.targetRx=this.frame=0}onEnter(){range.value="75";range2.value="95";range2.classList.remove("hide");overlay.classList.remove("hide");W.reset(c2d);W.camera({y:0,z:2,fov:30});W.light({x:0,y:0,z:-1});W.group({n:"G1",ry:0});W.cylinder({g:"G1",n:"C1",w:.7,h:1.8,d:.7,x:0,y:0,rx:45,ns:1,b:color1});super.onEnter()}onUpdate(a){W.move({n:"G1",rz:this.frame++});let b=parseInt(range.value)-10,c=parseInt(range2.value)+
10;this.targetRx=90-90*b/100;this.targetRy=90-90*c/100;this.rx=exponencialSmoothing(this.rx,this.targetRx,a);this.ry=exponencialSmoothing(this.ry,this.targetRy,a);W.move({n:"C1",rx:this.rx,ry:this.ry});this.calculatePower()}calculatePower(){super.calculatePower((1-10*Math.abs(90-this.targetRx)/360+(1-10*Math.abs(this.targetRy)/360))/2)}}let cylinderLevel=new CylinderLevel;
class TwoCubesLevel extends Level{constructor(){super();this.frameG2=this.frameG1=0;this.speed=-.5;this.score=this.counter=0;this.targetSpeed=1;this.inputListener=()=>this.updateRange();this.submitListener=()=>this.submit()}onEnter(){range.value="45";W.reset(c2d);W.camera({y:4,z:7,rx:-30,fov:10});W.light({x:0,y:-5,z:0});W.ambient(.8);W.group({n:"G1",ry:0});W.cube({g:"G1",w:1.5,h:1,d:1,x:0,y:0,b:colorWhite});W.group({n:"G2",ry:0});W.cube({g:"G2",w:1.5,h:1,d:1,x:0,y:0,b:colorWhite});super.onEnter()}onLeave(){document.removeEventListener("input",
this.inputListener);controls.classList.remove("slide")}onUpdate(){this.frameG1++;360<this.frameG1&&(this.frameG1-=360);W.move({n:"G1",ry:this.frameG1});this.frameG2+=this.speed;360<this.frameG2?this.frameG2-=360:0>this.frameG2&&(this.frameG2+=360);W.move({n:"G2",ry:this.frameG2});this.counter++;20<this.counter&&(this.counter=0,this.calculatePower())}updateRange(){this.speed=2*(range.value-50)/100}calculatePower(){this.score=Math.pow((1-Math.abs(this.targetSpeed-this.speed))*(1-Math.abs(this.frameG1%
180-this.frameG2%180)/180),5);super.calculatePower(this.score)}}let twoCubesLevel=new TwoCubesLevel,A1=90,A2=210,MAX_RANGE=4;
class FlyLevel extends Level{constructor(){super(...arguments);this.counter=this.frame=0;this.targetAngle1=this.angle1=A1;this.targetAngle2=this.angle2=A2}onEnter(){c2d.classList.add("hide");plane.classList.remove("hide");range2.classList.remove("hide");range.value="50";range2.value="50";this.updateAngles();super.onEnter()}onLeave(){c2d.classList.remove("hide");plane.classList.add("hide");circleRange.toggle(!1);circleRange2.toggle(!1);super.onLeave()}onUpdate(a){this.targetAngle1=MAX_RANGE*(parseInt(range.value)-
50)+A1;this.targetAngle2=MAX_RANGE*(parseInt(range2.value)-50)+A2;this.angle1=exponencialSmoothing(this.angle1,this.targetAngle1,a);this.angle2=exponencialSmoothing(this.angle2,this.targetAngle2,a);this.updateAngles();this.counter++;20<this.counter&&(this.counter=0,this.calculatePower())}calculatePower(){super.calculatePower(Math.pow(1-(Math.abs(this.angle1/400)+Math.abs((360-this.angle2)/400)),5))}updateAngles(){pl1.style.transform=`rotate(${this.angle1}deg)`;pl2.style.transform=`rotate(${this.angle2}deg)`}}
let flyLevel=new FlyLevel,levels=[metronomeLevel,twoCubesLevel,helixLevel,twoGearsLevel,cylinderLevel,flyLevel],levelColors=[color6,color5,color4];function getStorage(){var a=localStorage.getItem("meat_brain_cell_optimizer__level")||"";a=parseInt(a);return levels[a]?a:0}
class GameData{constructor(){this.level=0;this.level=getStorage()}getLevel(){return levels[this.level]}nextLevel(){return levels[this.level+1]}prevLevel(){return levels[this.level-1]}storeLevel(){let a=getStorage();(!a||a<this.level)&&localStorage.setItem("meat_brain_cell_optimizer__level",`${this.level}`)}color(){return levelColors[this.level%levelColors.length]}}let gameData=new GameData;class GameState{onEnter(){gameStateMachine.setState(gameData.getLevel())}onUpdate(){}}let gameState=new GameState;
class IntroState{onEnter(){background(colorDark);intro.classList.remove("hide");play.addEventListener("click",this.startGame)}onLeave(){intro.classList.add("hide");play.removeEventListener("click",this.startGame)}onUpdate(){this.updateControls()}updateControls(){controls$1.isConfirm&&!controls$1.previousState.isConfirm&&this.startGame()}startGame(){gameStateMachine.setState(gameState)}}let introState=new IntroState;
class MenuState{constructor(){this.selectedButton=0;this.buttons=[this.startGame,this.continueGame,this.toggleFullscreen]}onEnter(){menu.classList.remove("hide");start.addEventListener("click",this.startGame);contGame.addEventListener("click",this.continueGame);fullscreen.addEventListener("click",this.toggleFullscreen)}onLeave(){menu.classList.add("hide");start.removeEventListener("click",this.startGame);contGame.removeEventListener("click",this.continueGame);fullscreen.removeEventListener("click",
this.toggleFullscreen)}onUpdate(){this.updateControls()}updateControls(){controls$1.isUp&&!controls$1.previousState.isUp&&(this.selectedButton--,0>this.selectedButton&&(this.selectedButton=this.buttons.length-1));controls$1.isDown&&!controls$1.previousState.isDown&&(this.selectedButton++,this.selectedButton>=this.buttons.length&&(this.selectedButton=0));if(controls$1.isConfirm&&!controls$1.previousState.isConfirm){let a=this.buttons[this.selectedButton];a&&a()}}startGame(){gameData.level=0;setTimeout(()=>
{gameStateMachine.setState(introState)},100)}continueGame(){setTimeout(()=>{gameStateMachine.setState(levelListState)},100)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}}let menuState=new MenuState;document.querySelector('link[type="image/x-icon"]').href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E\ud83d\udd35%3C/text%3E%3C/svg%3E";createGameStateMachine(menuState);
let previousTime=0,interval=1E3/60,fpsBacklog=[];(function draw(a){let c=a-previousTime;c>=interval&&(previousTime=a-c%interval,controls$1.queryController(),gameStateMachine.getState().onUpdate(c),fpsBacklog.push(1E3/c),15===fpsBacklog.length&&(fps.innerHTML=`${Math.round(fpsBacklog.reduce((e,f)=>e+f)/15)} FPS`,fpsBacklog=[]));requestAnimationFrame(draw)})(0);
