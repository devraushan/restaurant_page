(()=>{const e=(()=>{const e=document.createElement("div");e.setAttribute("class","welcomeBox"),e.innerText="WELCOME";const t=document.createElement("div");t.setAttribute("class","saluteBox");const n=document.createElement("p");return n.innerText="Thank You For Giving A Chance To Serve You",{appendElements:d=>{d.appendChild(e),d.appendChild(t),t.appendChild(n),console.log(d)}}})(),t=(()=>{const e=document.createElement("div");e.setAttribute("class","menuHeadBox"),e.innerText="Menu Card";const t=(e,t,n)=>(box=document.createElement("div"),box.setAttribute("class","dishCard"),dishTitle=document.createElement("h3"),dishDescription=document.createElement("p"),dishPrice=document.createElement("span"),dishTitle.innerText=e,dishDescription.innerText=t,dishPrice.innerText=`${n} ₹`,box.appendChild(dishTitle),box.appendChild(dishDescription),box.appendChild(dishPrice),box),n=t("Crispy Kabuli Chana Chaat","kdjflksdj jdkjf  jfkdjf dkfj riiture  eorjeiou fjkdfgdk roeuir efkdjfkd eiru f fvjdkg oer etjeriofjdk fikdi fikjfoer kjfkd",80),d=t("Chapati","Home made soft chapati 2 piece with fried potato. A nice choice for evening breakfast",30),a=t("Salad","Fresh Salad...\nnice combo of cool fruits and vegetables\nCan be taken with veg or nonveg plates and solo plates too are available",20),i=t("Tea","Made with pure milk and a nice refreshment for parties and meetings.Available in 40 different flavour.",10);return{appendElements:t=>{t.appendChild(e),t.appendChild(n),t.appendChild(d),t.appendChild(a),t.appendChild(i)}}})(),n=(()=>{const e=document.createElement("div");e.setAttribute("class","contactBox");const t=document.createElement("h3"),n=document.createElement("p");return t.innerText="Roja Prasad",n.innerText="Barauda road , \nPaschim Champaran , \nBihar \n 263345\n8988984353",e.appendChild(t),e.appendChild(n),{appendElements:t=>{t.appendChild(e)}}})(),d=e=>{e.innerHTML=""};eventExecuter=(()=>{const a=document.getElementById("homeBtn"),i=document.getElementById("menuBtn"),o=document.getElementById("contactBtn"),r=document.getElementById("content");a.addEventListener("click",(()=>{d(r),e.appendElements(r)})),i.addEventListener("click",(()=>{d(r),t.appendElements(r)})),o.addEventListener("click",(()=>{d(r),n.appendElements(r)}))})()})();