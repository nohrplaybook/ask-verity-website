// @ts-nocheck -- vanilla DOM motion rig; authored against strict:false.
// Kept unchecked so the rest of the repo (incl. the waitlist API) stays strict:true.
"use client";

import { useEffect } from "react";

/* All page motion lives here: scroll rigs, the typing, the globe and the forms.
   Vanilla DOM on purpose — it drives markup React has already rendered. */
export default function Motion() {
  useEffect(() => {
(function(){
var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
var io = new IntersectionObserver(function(es){
es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
}, { rootMargin:"0px 0px -10% 0px", threshold:.01 });
document.querySelectorAll<HTMLElement>("[data-r]").forEach(function(el,i){
el.style.transitionDelay = (Math.min(i,4)*70)+"ms"; io.observe(el);
});
var coast=[[142.5,-10.7],[141.6,-12.9],[139.9,-17.1],[137.9,-16.5],[136.9,-12.3],[135.4,-12.2],[132.6,-12.1],
[130.8,-12.4],[129.6,-14.8],[128.0,-15.4],[125.2,-14.3],[122.2,-16.4],[121.3,-19.3],[119.1,-20.4],
[116.7,-20.6],[114.9,-21.6],[113.4,-22.6],[113.8,-25.6],[114.9,-28.9],[115.4,-31.5],[115.1,-34.3],
[117.6,-35.1],[120.0,-33.9],[123.5,-33.9],[126.1,-32.3],[129.0,-31.6],[131.5,-31.5],[134.2,-32.6],
[135.9,-34.8],[137.5,-35.6],[138.5,-35.6],[139.8,-37.4],[141.6,-38.4],[144.5,-38.4],[146.4,-38.9],
[148.4,-37.8],[150.0,-37.0],[151.3,-33.8],[153.1,-30.3],[153.5,-28.2],[152.5,-25.3],[151.0,-23.5],
[149.2,-21.1],[147.4,-19.2],[146.0,-17.5],[145.5,-15.0],[143.6,-13.0],[142.5,-10.7]];
var tas=[[144.7,-40.7],[145.3,-40.8],[147.0,-40.8],[148.3,-40.9],[148.3,-42.2],[147.9,-43.1],
[146.9,-43.6],[145.5,-42.6],[145.2,-41.5],[144.7,-40.7]];
function proj(lon,lat){
var R=168, cx=200, cy=200, l0=134*Math.PI/180, p0=-26*Math.PI/180;
var l=lon*Math.PI/180, p=lat*Math.PI/180;
var k=Math.cos(p0)*Math.cos(p)*Math.cos(l-l0)+Math.sin(p0)*Math.sin(p);
var x=R*Math.cos(p)*Math.sin(l-l0)*1.34;
var y=-R*(Math.cos(p0)*Math.sin(p)-Math.sin(p0)*Math.cos(p)*Math.cos(l-l0))*1.34;
return [cx+x, cy+y];
}
function path(pts){
return pts.map(function(pt,i){ var q=proj(pt[0],pt[1]); return (i?"L":"M")+q[0].toFixed(1)+" "+q[1].toFixed(1); }).join("")+"Z";
}
(function globe(){
var g = document.getElementById("meridians");
if(!g) return;
var R = 168, cx = 200, cy = 200, N = 14;
var paths = [];
for (var i = 0; i < N; i++){
var el = document.createElementNS("http://www.w3.org/2000/svg","path");
g.appendChild(el);
paths.push(el);
}
function draw(phase){
for (var i = 0; i < N; i++){
var a = (phase + i / N) * Math.PI * 2;
var facing = Math.cos(a);
var el = paths[i];
if (facing <= 0.02){ el.setAttribute("opacity","0"); continue; }
var rx = Math.abs(Math.sin(a)) * R;
var sweep = Math.sin(a) > 0 ? 1 : 0;
el.setAttribute("d","M"+cx+" "+(cy-R)+"A"+rx.toFixed(1)+" "+R+" 0 0 "+sweep+" "+cx+" "+(cy+R));
el.setAttribute("opacity", Math.min(1, facing * 1.6).toFixed(3));
}
}
if (reduce){ draw(0.06); return; }
var t0 = null;
requestAnimationFrame(function step(ts){
if (t0 === null) t0 = ts;
draw((((ts - t0) / 34000) % 1));      
requestAnimationFrame(step);
});
})();
var au=document.getElementById("auShape"), ts=document.getElementById("tasShape");
if(au) au.setAttribute("d", path(coast));
if(ts) ts.setAttribute("d", path(tas));
var hero=document.getElementById("hero"), copy=document.getElementById("heroCopy"),
panel=document.getElementById("panel"), fill=document.getElementById("railfill"),
cap=document.getElementById("pcap"),
qs=[].slice.call(document.querySelectorAll(".q")),
outs=[].slice.call(document.querySelectorAll(".out"));
var raf=0, last=-1;
function frame(){
raf=0;
if(!hero) return;
var r=hero.getBoundingClientRect();
var total=hero.offsetHeight-innerHeight;
var p=Math.min(1,Math.max(0,(-r.top)/Math.max(total,1)));
if(Math.abs(p-last)<.0008) return;
last=p;
if(fill) fill.style.setProperty("--rp",(p*100).toFixed(1)+"%");
if(copy && !reduce){
copy.style.setProperty("--hs",(1-p*0.075).toFixed(4));
copy.style.setProperty("--hy",(-p*26).toFixed(1)+"px");
}
if(panel && !reduce){
panel.style.setProperty("--ps",(0.965+p*0.035).toFixed(4));
panel.style.setProperty("--py",(18-p*18).toFixed(1)+"px");
}
qs.forEach(function(q){ q.classList.toggle("on", p>=parseFloat(q.dataset.at)); });
outs.forEach(function(o){
var at=parseFloat(o.dataset.at), on=p>=at, done=p>=at+.07;
o.classList.toggle("on",on);
var i=o.querySelector("i");
if(i){
i.textContent = done ? (o.classList.contains("rdy")?"Ready":(o.classList.contains("drf")?"Drafting":"Queued"))
: (on ? "Drafting" : "Queued");
if(o.classList.contains("rdy")&&!done) i.textContent = on ? "Drafting" : "Queued";
}
});
if(cap) cap.classList.toggle("on", p>.9);
}
addEventListener("scroll",function(){ if(!raf) raf=requestAnimationFrame(frame); },{passive:true});
addEventListener("resize",function(){ last=-1; frame(); },{passive:true});
frame();
(function(){
var h1 = document.querySelector(".hero h1"), hero = document.querySelector(".hero");
if(!h1 || !hero) return;
var i = 0;
(function walk(node){
[].slice.call(node.childNodes).forEach(function(n){
if(n.nodeType === 3){
var frag = document.createDocumentFragment();
n.nodeValue.split(/(\s+)/).forEach(function(tok){
if(!tok) return;
if(/^\s+$/.test(tok)){ frag.appendChild(document.createTextNode(tok)); return; }
var mask = document.createElement("span"); mask.className = "w";
var inner = document.createElement("span");
inner.textContent = tok;
inner.style.transitionDelay = (i * 38) + "ms";
i++;
mask.appendChild(inner);
frag.appendChild(mask);
});
node.replaceChild(frag, n);
} else if(n.nodeType === 1){ walk(n); }
});
})(h1);
requestAnimationFrame(function(){ requestAnimationFrame(function(){
hero.classList.add("lift");
});});
})();
var pq=document.querySelector("[data-type-now]");
if(pq&&!reduce){
var pqFull=pq.textContent, k=0;
pq.textContent="";
pq.classList.add("typing");
setTimeout(function(){
var pid=setInterval(function(){
k+=4;
pq.textContent=pqFull.slice(0,k);
if(k>=pqFull.length){ clearInterval(pid); pq.textContent=pqFull; pq.classList.remove("typing"); }
},14);
},200);
}
var con=document.querySelector(".console");
var tls=[].slice.call(document.querySelectorAll("[data-type]"));
tls.forEach(function(el){ el.setAttribute("data-full", el.textContent); if(!reduce) el.textContent=""; });
var typedOnce=false;
function runType(){
if(typedOnce||reduce||!con||!tls.length) return;
var r=con.getBoundingClientRect();
if(r.top>innerHeight*0.74||r.bottom<80) return;
typedOnce=true;
var i=0;
(function next(){
if(i>=tls.length){ con.classList.add("typed"); return; }
var el=tls[i], full=el.getAttribute("data-full"), n=0;
el.classList.add("typing");
var id=setInterval(function(){
n+=4+(n%3===0?1:0);
el.textContent=full.slice(0,n);
if(n>=full.length){
clearInterval(id); el.textContent=full; el.classList.remove("typing");
i++;
con.setAttribute("data-step", String(i));
setTimeout(next, 260);
}
},13);
})();
}
if(reduce&&con) con.classList.add("typed");
addEventListener("scroll",runType,{passive:true});
runType();
var factsEl=document.querySelector(".facts");
if(factsEl){
var ran=false;
var fio=new IntersectionObserver(function(es){
es.forEach(function(e){
if(!e.isIntersecting||ran) return;
ran=true; fio.disconnect();
[].slice.call(factsEl.querySelectorAll("b[data-n]")).forEach(function(b,i){
var to=parseInt(b.getAttribute("data-n"),10), unit=b.querySelector("i");
if(reduce){ b.firstChild.nodeValue=String(to); return; }
var t0=null, dur=900+i*90;
function step(ts){
if(t0===null) t0=ts;
var k=Math.min(1,(ts-t0)/dur);
var v=Math.round(to*(1-Math.pow(1-k,3)));
b.firstChild.nodeValue=String(v);
if(k<1) requestAnimationFrame(step);
}
setTimeout(function(){ requestAnimationFrame(step); }, 120+i*110);
});
});
},{threshold:.35});
fio.observe(factsEl);
}
var tl=document.querySelector(".tl") as HTMLElement;
if(tl){
var nodes=[].slice.call(tl.querySelectorAll(".tls")) as HTMLElement[];
var tick=0;
function spine(){
tick=0;
var r=tl.getBoundingClientRect(), h=r.height||1;
var p=Math.max(0,Math.min(1,(innerHeight*0.58-r.top)/h));
tl.style.setProperty("--p",p.toFixed(4));
nodes.forEach(function(n){
n.classList.toggle("on", p >= (n.offsetTop/h)-0.02);
});
}
addEventListener("scroll",function(){ if(!tick) tick=requestAnimationFrame(spine); },{passive:true});
addEventListener("resize",spine,{passive:true});
spine();
if(reduce) nodes.forEach(function(n){ n.classList.add("on"); });
}
var wrapEl=document.getElementById("railwrap") as HTMLElement, cards=document.getElementById("cards") as HTMLElement;
function rail(){
if(!wrapEl||!cards) return;
var track=document.getElementById("railtrack") as HTMLElement;
var stick=track?track.firstElementChild as HTMLElement:null;
if(reduce||innerWidth<900||!track||!stick){ cards.style.transform=""; if(track) track.style.height=""; return; }
var over=cards.scrollWidth-wrapEl.clientWidth;
if(over<=0){ cards.style.transform=""; track.style.height=""; return; }
var need=Math.round(stick.offsetHeight+over);
if(track.style.height!==need+"px") track.style.height=need+"px";
var span=Math.max(1,track.offsetHeight-stick.offsetHeight);
var p=Math.min(1,Math.max(0,(-track.getBoundingClientRect().top)/span));
cards.style.transform="translate3d("+(-over*p).toFixed(1)+"px,0,0)";
}
var raf2=0;
addEventListener("scroll",function(){ if(!raf2) raf2=requestAnimationFrame(function(){ raf2=0; rail(); }); },{passive:true});
addEventListener("resize",rail,{passive:true}); rail();
var bar=document.getElementById("top-bar");
addEventListener("scroll",function(){ bar.classList.toggle("stuck", scrollY>40); },{passive:true});
function fieldValue(form,fieldName){
var el=form.elements.namedItem(fieldName);
return el&&typeof el.value==="string"?el.value:"";
}
function formStatus(form,message,isError){
var el=form.querySelector(".fmsg");
if(!el){
el=document.createElement("p");
el.className="fmsg";
el.setAttribute("role","status");
el.setAttribute("aria-live","polite");
var fine=form.querySelector(".fine");
if(fine) form.insertBefore(el,fine); else form.appendChild(el);
}
el.classList.toggle("fmsg--err",!!isError);
el.textContent=message||"";
}
function wireForm(form,source,doneLabel){
if(!form) return;
form.addEventListener("submit",function(e){
e.preventDefault();
/* Honeypot: a filled hidden field means a bot. Look successful, send nothing. */
if(fieldValue(form,"web")) return;
if(!form.checkValidity()){ form.reportValidity(); return; }
var b=form.querySelector(".cta");
var restore=b.textContent;
b.disabled=true; b.style.opacity=".75"; b.textContent="Sending…";
formStatus(form,"",false);
fetch("/api/waitlist",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
name:fieldValue(form,"name"),
email:fieldValue(form,"email"),
companySize:fieldValue(form,"size"),
companyUrl:fieldValue(form,"company"),
issues:[].slice.call(form.querySelectorAll('input[name="issues"]:checked')).map(function(c){return c.value;}),
source:source,
website:fieldValue(form,"web")
})
}).then(function(res){
return res.json().then(
function(d){ return { ok:res.ok, message:d&&d.message }; },
function(){ return { ok:res.ok, message:"" }; }
);
}).then(function(r){
if(r.ok){
b.textContent=doneLabel;
formStatus(form,r.message||"",false);
} else {
b.textContent=restore; b.disabled=false; b.style.opacity="";
formStatus(form,r.message||"We couldn’t add you just now. Please try again.",true);
}
}).catch(function(){
b.textContent=restore; b.disabled=false; b.style.opacity="";
formStatus(form,"Couldn’t reach the server. Please check your connection and try again.",true);
});
});
}
wireForm(document.getElementById("wl"),"waitlist","Application received");
/* People-problem bingo: tap tiles; three or more = bingo. */
var bingo=document.getElementById("bingo"), bmsg=document.getElementById("bingoMsg");
if(bingo&&bmsg&&!bingo.dataset.wired){
bingo.dataset.wired="1";
var bdefault=bmsg.textContent;
bingo.addEventListener("click",function(e){
var t=e.target.closest&&e.target.closest(".v2-tile");
if(!t) return;
var on=t.getAttribute("aria-pressed")!=="true";
t.setAttribute("aria-pressed",on?"true":"false");
var n=bingo.querySelectorAll('[aria-pressed="true"]').length;
bingo.classList.toggle("is-bingo",n>=3);
bmsg.classList.toggle("is-bingo",n>=3);
bmsg.textContent = n>=3 ? n+" of 12. That is a lot to carry on your own. Verity is built to take these off your plate."
: (n>0 ? n+" of 12 so far." : bdefault);
});
}
wireForm(document.querySelector("[data-lib]"),"library","On its way");
})();
  }, []);
  return null;
}
