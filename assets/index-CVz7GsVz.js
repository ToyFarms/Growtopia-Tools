var Q=Object.defineProperty;var J=(t,r,s)=>r in t?Q(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;var d=(t,r,s)=>J(t,typeof r!="symbol"?r+"":r,s);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();var B=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var t=0,r=arguments.length;r--;)t+=arguments[r]*arguments[r];return Math.sqrt(t)});function G(){var t=new B(16);return B!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function q(t,r){var s=r[0],i=r[1],e=r[2],o=r[3],n=r[4],a=r[5],h=r[6],c=r[7],l=r[8],f=r[9],_=r[10],u=r[11],g=r[12],T=r[13],A=r[14],m=r[15],p=s*a-i*n,N=s*h-e*n,v=s*c-o*n,S=i*h-e*a,x=i*c-o*a,F=e*c-o*h,L=l*T-f*g,C=l*A-_*g,O=l*m-u*g,w=f*A-_*T,I=f*m-u*T,b=_*m-u*A,E=p*b-N*I+v*w+S*O-x*C+F*L;return E?(E=1/E,t[0]=(a*b-h*I+c*w)*E,t[1]=(e*I-i*b-o*w)*E,t[2]=(T*F-A*x+m*S)*E,t[3]=(_*x-f*F-u*S)*E,t[4]=(h*O-n*b-c*C)*E,t[5]=(s*b-e*O+o*C)*E,t[6]=(A*v-g*F-m*N)*E,t[7]=(l*F-_*v+u*N)*E,t[8]=(n*I-a*O+c*L)*E,t[9]=(i*O-s*I-o*L)*E,t[10]=(g*x-T*v+m*p)*E,t[11]=(f*v-l*x-u*p)*E,t[12]=(a*C-n*w-h*L)*E,t[13]=(s*w-i*C+e*L)*E,t[14]=(T*N-g*S-A*p)*E,t[15]=(l*S-f*N+_*p)*E,t):null}function y(t,r,s){var i=s[0],e=s[1],o=s[2],n,a,h,c,l,f,_,u,g,T,A,m;return r===t?(t[12]=r[0]*i+r[4]*e+r[8]*o+r[12],t[13]=r[1]*i+r[5]*e+r[9]*o+r[13],t[14]=r[2]*i+r[6]*e+r[10]*o+r[14],t[15]=r[3]*i+r[7]*e+r[11]*o+r[15]):(n=r[0],a=r[1],h=r[2],c=r[3],l=r[4],f=r[5],_=r[6],u=r[7],g=r[8],T=r[9],A=r[10],m=r[11],t[0]=n,t[1]=a,t[2]=h,t[3]=c,t[4]=l,t[5]=f,t[6]=_,t[7]=u,t[8]=g,t[9]=T,t[10]=A,t[11]=m,t[12]=n*i+l*e+g*o+r[12],t[13]=a*i+f*e+T*o+r[13],t[14]=h*i+_*e+A*o+r[14],t[15]=c*i+u*e+m*o+r[15]),t}function K(t,r,s){var i=s[0],e=s[1],o=s[2];return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=r[3]*i,t[4]=r[4]*e,t[5]=r[5]*e,t[6]=r[6]*e,t[7]=r[7]*e,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=r[11]*o,t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function tt(t,r,s){var i=Math.sin(s),e=Math.cos(s),o=r[0],n=r[1],a=r[2],h=r[3],c=r[4],l=r[5],f=r[6],_=r[7];return r!==t&&(t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=o*e+c*i,t[1]=n*e+l*i,t[2]=a*e+f*i,t[3]=h*e+_*i,t[4]=c*e-o*i,t[5]=l*e-n*i,t[6]=f*e-a*i,t[7]=_*e-h*i,t}function rt(t,r,s,i,e,o,n){var a=1/(r-s),h=1/(i-e),c=1/(o-n);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(r+s)*a,t[13]=(e+i)*h,t[14]=(n+o)*c,t[15]=1,t}var st=rt;function k(){var t=new B(3);return B!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function et(t,r,s){var i=r[0],e=r[1],o=r[2],n=s[3]*i+s[7]*e+s[11]*o+s[15];return n=n||1,t[0]=(s[0]*i+s[4]*e+s[8]*o+s[12])/n,t[1]=(s[1]*i+s[5]*e+s[9]*o+s[13])/n,t[2]=(s[2]*i+s[6]*e+s[10]*o+s[14])/n,t}(function(){var t=k();return function(r,s,i,e,o,n){var a,h;for(s||(s=3),i||(i=0),e?h=Math.min(e*s+i,r.length):h=r.length,a=i;a<h;a+=s)t[0]=r[a],t[1]=r[a+1],t[2]=r[a+2],o(t,t,n),r[a]=t[0],r[a+1]=t[1],r[a+2]=t[2];return r}})();const it=t=>{const r=new Date,s={yyyy:r.getFullYear(),MM:String(r.getMonth()+1).padStart(2,"0"),dd:String(r.getDate()).padStart(2,"0"),HH:String(r.getHours()).padStart(2,"0"),mm:String(r.getMinutes()).padStart(2,"0"),ss:String(r.getSeconds()).padStart(2,"0"),M:r.getMonth()+1,d:r.getDate(),H:r.getHours(),m:r.getMinutes(),s:r.getSeconds(),a:r.getHours()<12?"AM":"PM"};return t.replace(/yyyy|MM|dd|HH|mm|ss|M|d|H|m|s|a/g,i=>s[i].toString())},Y=(t,r)=>{const s=G();q(s,t.projection_matrix);const i=[r[0]/t.width*2-1,1-r[1]/t.height*2,0],e=k();return et(e,i,s),[e[0],e[1]]},R=document.querySelector("#console"),ot=(t,r)=>{const s=document.createElement("p");s.textContent=`[${it("dd-mm-yyyy s:m:H")}] ${t}`,s.style.color=r,s.classList.add("console-text"),R==null||R.appendChild(s),R==null||R.classList.remove("hide"),setTimeout(()=>{R==null||R.classList.add("hide")},1e3*10)},P=t=>{ot(`[ ERROR ] ${t}`,"red")};let H;const W=document.querySelector("#app"),V=W==null?void 0:W.querySelector("canvas"),X=()=>{if(H)return H;if(!V)throw P("Could not find canvas element"),new Error("opengl_context() error");if(H=V.getContext("webgl2"),!H)throw P("WebGl is not supported in this device"),new Error("opengl_context() error");return H};class ${constructor(){d(this,"gl");this.gl=X()}}class Z extends ${constructor(){super();d(this,"id");this.id=0}}var z=(t=>(t[t.FRAGMENT=0]="FRAGMENT",t[t.VERTEX=1]="VERTEX",t))(z||{});const nt=(t,r)=>{const s=X(),i=[s.FRAGMENT_SHADER,s.VERTEX_SHADER],e=s.createShader(i[r]);if(!e)return P(`Failed to create shader type ${r}`),null;if(s.shaderSource(e,t),s.compileShader(e),!s.getShaderParameter(e,s.COMPILE_STATUS)){const o=s.getShaderInfoLog(e);if(o)return P(`Failed to compile shader type ${z[r]}: ${o}`),null}return e};class at extends Z{constructor(s){super();d(this,"shaders");d(this,"program");this.shaders=s;const i=this.gl.createProgram();if(!i)throw P("Cannot create program"),new Error;this.program=i,this.process_shaders(s)}bind(){this.gl.useProgram(this.program)}unbind(){this.gl.useProgram(null)}delete(){this.gl.deleteProgram(this.program)}get_uniform(s){const i=this.gl.getUniformLocation(this.program,s);if(!i)throw P(`Could not get uniform "${s}"`),new Error;return i}link(){if(this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS)){const s=this.gl.getProgramInfoLog(this.program);if(s){P(`Failed to link shader: ${s}`);return}}}process_shaders(s){for(const i of s){const e=nt(i.source,i.type);if(!e)throw new Error;this.gl.attachShader(this.program,e),this.gl.deleteShader(e)}this.link()}}const ct=`#version 300 es
precision mediump float;

in vec2 v_texcoord;
out vec4 frag_color;

uniform sampler2D tex;

void main()
{
  frag_color = texture(tex, v_texcoord);
}
`,ht=`#version 300 es
precision mediump float;

layout (location = 0) in vec2 position;
layout (location = 1) in vec2 offset;
layout (location = 2) in vec2 scale;
layout (location = 3) in vec4 texcoord;
layout (location = 4) in float rotation;

uniform mat4 projection;

out vec2 v_texcoord;

void main()
{
  float cos_rot = cos(rotation);
  float sin_rot = sin(rotation);

  mat2 rot_matrix = mat2(
    cos_rot, -sin_rot,
    sin_rot, cos_rot
  );

  vec2 rotated_scaled = rot_matrix * (position * scale);

  gl_Position = projection * vec4(rotated_scaled + offset, 0.0, 1.0);
  v_texcoord = mix(texcoord.xy, texcoord.zw, position + 0.5);
}
`,M=class M extends ${constructor(s,i,e,o){super();d(this,"pos");d(this,"size");d(this,"texcoord");d(this,"rotation");this.pos=s,this.size=i,this.texcoord=e,this.rotation=o||0}get_model_matrix(){const s=G();return y(s,s,[this.pos[0],this.pos[1],0]),K(s,s,[this.size[0],this.size[1],0]),tt(s,s,this.rotation*(Math.PI/180)),s}static setup_instanced_attributes(s,i){const o=new Float32Array(i.length*9),n=Float32Array.BYTES_PER_ELEMENT;i.forEach((c,l)=>{o[l*9+0]=c.pos[0],o[l*9+1]=c.pos[1],o[l*9+2]=c.size[0],o[l*9+3]=c.size[1],o[l*9+4]=c.texcoord[0],o[l*9+5]=c.texcoord[1],o[l*9+6]=c.texcoord[2],o[l*9+7]=c.texcoord[3],o[l*9+8]=c.rotation*(Math.PI/180)});const a=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,a),s.bufferData(s.ARRAY_BUFFER,o,s.STATIC_DRAW);const h=9*n;s.vertexAttribPointer(1,2,s.FLOAT,!1,h,0),s.enableVertexAttribArray(1),s.vertexAttribDivisor(1,1),s.vertexAttribPointer(2,2,s.FLOAT,!1,h,2*n),s.enableVertexAttribArray(2),s.vertexAttribDivisor(2,1),s.vertexAttribPointer(3,4,s.FLOAT,!1,h,4*n),s.enableVertexAttribArray(3),s.vertexAttribDivisor(3,1),s.vertexAttribPointer(4,1,s.FLOAT,!1,h,8*n),s.enableVertexAttribArray(4),s.vertexAttribDivisor(4,1)}};d(M,"vertices",new Float32Array([-.5,.5,.5,.5,-.5,-.5,.5,-.5])),d(M,"indices",new Uint16Array([0,1,2,2,1,3])),d(M,"vertex_count",M.vertices.length/2),d(M,"index_count",M.indices.length);let U=M;const j={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,PAUSE:19,CAPSLOCK:20,ESCAPE:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,ARROWLEFT:37,ARROWUP:38,ARROWRIGHT:39,ARROWDOWN:40,INSERT:45,DELETE:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,WINDOWS:91,"RIGHT CLICK":93,"NUMPAD 0":96,"NUMPAD 1":97,"NUMPAD 2":98,"NUMPAD 3":99,"NUMPAD 4":100,"NUMPAD 5":101,"NUMPAD 6":102,"NUMPAD 7":103,"NUMPAD 8":104,"NUMPAD 9":105,"NUMPAD *":106,"NUMPAD +":107,"NUMPAD -":109,"NUMPAD .":110,"NUMPAD /":111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"NUM LOCK":144,"SCROLL LOCK":145,"MY COMPUTER":182,"MY CALCULATOR":183,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222};var D=(t=>(t[t.BACKSPACE=8]="BACKSPACE",t[t.TAB=9]="TAB",t[t.ENTER=13]="ENTER",t[t.SHIFT=16]="SHIFT",t[t.CTRL=17]="CTRL",t[t.ALT=18]="ALT",t[t.PAUSEBREAK=19]="PAUSEBREAK",t[t.CAPSLOCK=20]="CAPSLOCK",t[t.ESC=27]="ESC",t[t.SPACE=32]="SPACE",t[t.PAGEUP=33]="PAGEUP",t[t.PAGEDOWN=34]="PAGEDOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN",t[t.INSERT=45]="INSERT",t[t.DELETE=46]="DELETE",t[t.ZERO=48]="ZERO",t[t.ONE=49]="ONE",t[t.TWO=50]="TWO",t[t.THREE=51]="THREE",t[t.FOUR=52]="FOUR",t[t.FIVE=53]="FIVE",t[t.SIX=54]="SIX",t[t.SEVEN=55]="SEVEN",t[t.EIGHT=56]="EIGHT",t[t.NINE=57]="NINE",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.G=71]="G",t[t.H=72]="H",t[t.I=73]="I",t[t.J=74]="J",t[t.K=75]="K",t[t.L=76]="L",t[t.M=77]="M",t[t.N=78]="N",t[t.O=79]="O",t[t.P=80]="P",t[t.Q=81]="Q",t[t.R=82]="R",t[t.S=83]="S",t[t.T=84]="T",t[t.U=85]="U",t[t.V=86]="V",t[t.W=87]="W",t[t.X=88]="X",t[t.Y=89]="Y",t[t.Z=90]="Z",t[t.WINDOWS=91]="WINDOWS",t[t.RIGHTCLICK=93]="RIGHTCLICK",t[t.NUMPAD0=96]="NUMPAD0",t[t.NUMPAD1=97]="NUMPAD1",t[t.NUMPAD2=98]="NUMPAD2",t[t.NUMPAD3=99]="NUMPAD3",t[t.NUMPAD4=100]="NUMPAD4",t[t.NUMPAD5=101]="NUMPAD5",t[t.NUMPAD6=102]="NUMPAD6",t[t.NUMPAD7=103]="NUMPAD7",t[t.NUMPAD8=104]="NUMPAD8",t[t.NUMPAD9=105]="NUMPAD9",t[t.NUMPADMUL=106]="NUMPADMUL",t[t.NUMPADADD=107]="NUMPADADD",t[t.NUMPADSUB=109]="NUMPADSUB",t[t.NUMPADDOT=110]="NUMPADDOT",t[t.NUMPADSLASH=111]="NUMPADSLASH",t[t.F1=112]="F1",t[t.F2=113]="F2",t[t.F3=114]="F3",t[t.F4=115]="F4",t[t.F5=116]="F5",t[t.F6=117]="F6",t[t.F7=118]="F7",t[t.F8=119]="F8",t[t.F9=120]="F9",t[t.F10=121]="F10",t[t.F11=122]="F11",t[t.F12=123]="F12",t[t.NUMLOCK=144]="NUMLOCK",t[t.SCROLLLOCK=145]="SCROLLLOCK",t[t.MYCOMPUTER=182]="MYCOMPUTER",t[t.MYCALCULATOR=183]="MYCALCULATOR",t[t.SEMICOLON=186]="SEMICOLON",t[t.EQUAL=187]="EQUAL",t[t.COMMA=188]="COMMA",t[t.DASH=189]="DASH",t[t.DOT=190]="DOT",t[t.SLASH=191]="SLASH",t[t.BACKTICK=192]="BACKTICK",t[t.LEFTSQRBRACKET=219]="LEFTSQRBRACKET",t[t.BACKSLASH=220]="BACKSLASH",t[t.RIGHTSQRBRACKET=221]="RIGHTSQRBRACKET",t[t.SINGLEQUOTE=222]="SINGLEQUOTE",t))(D||{});class lt{constructor(){d(this,"state");d(this,"mouse");d(this,"raf_id");this.state={},this.mouse={left:!1,middle:!1,right:!1,wheel:{x:0,y:0,z:0},pos:[0,0]},this.raf_id=null,document.addEventListener("keydown",r=>this.handle_key(r,!0)),document.addEventListener("keyup",r=>this.handle_key(r,!1)),document.addEventListener("mousedown",r=>this._mousedown(r,!0)),document.addEventListener("mouseup",r=>this._mousedown(r,!1)),document.addEventListener("wheel",r=>this.wheel(r)),document.addEventListener("mousemove",r=>this._mousemove(r))}keydown(r){return this.state[r]}_mousedown(r,s){const i=s||r.type==="mousedown";this.mouse.left=r.button===0&&i,this.mouse.middle=r.button===1&&i,this.mouse.right=r.button===2&&i}_mousemove(r){this.mouse.pos[0]=r.x,this.mouse.pos[1]=r.y}wheel(r){this.mouse.wheel.x=r.deltaX,this.mouse.wheel.y=r.deltaY,this.mouse.wheel.z=r.deltaZ,this.raf_id||(this.raf_id=requestAnimationFrame(()=>{this.mouse.wheel.x=0,this.mouse.wheel.y=0,this.mouse.wheel.z=0,this.raf_id=null}))}handle_key(r,s){r.key.toUpperCase()in j||P(`Unhandled key: ${r.key.toUpperCase()}`),this.state[j[r.key.toUpperCase()]]=s||r.type==="keydown"}}class dt{constructor(r,s,i){d(this,"width");d(this,"height");d(this,"pos");d(this,"zoom");d(this,"speed");d(this,"projection_matrix");d(this,"start_drag");d(this,"offset");this.width=r,this.height=s,this.pos=[0,0],this.zoom=1,this.speed=i||500,this.projection_matrix=G(),this.start_drag=null,this.offset=[0,0]}handle_zoom(r){this.zoom+=-Math.sign(r.mouse.wheel.y)*(this.zoom*.6),this.zoom=Math.min(Math.max(this.zoom,.1),10);const s=Y(this,r.mouse.pos);this.update_projection_matrix();const i=Y(this,r.mouse.pos);this.pos[0]+=s[0]-i[0],this.pos[1]+=s[1]-i[1]}handle_drag(r){this.start_drag&&(this.offset[0]=(this.start_drag[0]-r.mouse.pos[0])/this.zoom,this.offset[1]=(this.start_drag[1]-r.mouse.pos[1])/this.zoom)}update(r,s){let i=1/this.zoom*2*this.speed*s;r.keydown(D.SHIFT)&&(i*=5),r.keydown(D.W)&&(this.pos[1]+=-i),r.keydown(D.A)&&(this.pos[0]+=-i),r.keydown(D.S)&&(this.pos[1]+=i),r.keydown(D.D)&&(this.pos[0]+=i),r.mouse.left&&this.start_drag===null?this.start_drag=[...r.mouse.pos]:r.mouse.left&&this.start_drag?this.handle_drag(r):!r.mouse.left&&this.start_drag&&(this.start_drag=null,this.pos[0]+=this.offset[0],this.pos[1]+=this.offset[1],this.offset=[0,0]),r.mouse.wheel.y&&this.handle_zoom(r),this.update_projection_matrix()}update_projection_matrix(){const r=G(),s=this.pos[0]+this.offset[0],i=this.pos[0]+this.offset[0]+this.width/this.zoom,e=this.pos[1]+this.offset[1],o=this.pos[1]+this.offset[1]+this.height/this.zoom;st(r,s,i,o,e,-1,1),this.projection_matrix=r}}class At extends Z{constructor(s){super();d(this,"src");d(this,"texture");this.src=s,this.texture=this.load_texture(s)}load_texture(s){const i=this.gl.createTexture();if(!i)throw new Error;this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array([255,255,255,255])),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR);const e=new Image;return e.src=s,e.onload=()=>{this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.generateMipmap(this.gl.TEXTURE_2D)},i}bind(){this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)}unbind(){this.gl.bindTexture(this.gl.TEXTURE_2D,null)}delete(){this.gl.deleteTexture(this.texture)}}(async()=>{const t=X(),r=document.querySelector("#app"),s=r==null?void 0:r.querySelector("canvas");if(!s)return;s.width=window.innerWidth,s.height=window.innerHeight;const i=new at([{id:"default",type:z.FRAGMENT,source:ct},{id:"default",type:z.VERTEX,source:ht}]);i.bind();const e=await fetch("../assets/note_atlas.json").then(async A=>await A.json()),o=A=>{const m=A%e.tex_in_row*e.tex_size[0],p=Math.floor(A/e.tex_in_row)*e.tex_size[1];return[m/e.size[0],p/e.size[1],(m+e.tex_size[0])/e.size[0],(p+e.tex_size[1])/e.size[1]]},n=new At("../assets/note_atlas.png"),a=new lt,h=new dt(s.width,s.height),c=[],l=32;for(let A=0;A<100;A++)c.push(new U([A*l,A*l],[l,l],o(A%e.tex_count)));const f=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,f),t.bufferData(t.ARRAY_BUFFER,U.vertices,t.STATIC_DRAW);const _=Float32Array.BYTES_PER_ELEMENT;t.vertexAttribPointer(0,2,t.FLOAT,!1,2*_,0),t.enableVertexAttribArray(0);const u=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,u),t.bufferData(t.ELEMENT_ARRAY_BUFFER,U.indices,t.STATIC_DRAW),U.setup_instanced_attributes(t,c);let g=-1;const T=A=>{if(!t)return;const m=g>0?(A-g)/1e3:1;g=A,t.clearColor(30/255,30/255,30/255,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),h.update(a,m),t.uniformMatrix4fv(i.get_uniform("projection"),!1,h.projection_matrix),n.bind(),t.drawElementsInstanced(t.TRIANGLES,U.index_count,t.UNSIGNED_SHORT,0,c.length),requestAnimationFrame(T)};t.viewport(0,0,s.width,s.height),requestAnimationFrame(T)})();
