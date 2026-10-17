const INBOX = "sebascastroj70@gmail.com";
// Clave de Web3Forms — consíguela gratis en https://web3forms.com (pon el correo de arriba)
const WEB3FORMS_KEY = "f3795645-2c5f-42a9-b9f5-376610b047de";
const tree = {
  start:{title:"¿Qué está fallando?",sub:"Elige la categoría más cercana.",icon:"❓",options:[
    {l:"Computador o portátil",h:"No enciende, lento o pantalla negra",i:"💻",n:"pc"},
    {l:"Internet o WiFi",h:"No carga, sin red o solo un equipo",i:"📶",n:"net"},
    {l:"Proyector o televisor",h:"Sin imagen, HDMI o input",i:"📽️",n:"proj"},
    {l:"Impresora",h:"No imprime, atasco o desconectada",i:"🖨️",n:"print"},
    {l:"Audio o micrófono",h:"Sin sonido, mudo o cable",i:"🔊",n:"audio"},
    {l:"Cuenta o plataforma",h:"Correo, contraseña o bloqueo",i:"👤",n:"acc"}
  ]},
  pc:{title:"¿Qué ocurre con el computador?",icon:"💻",options:[
    {l:"No enciende",h:"Sin luces ni ventilador",i:"⚡",n:"pc_pwr"},
    {l:"Enciende pero no carga el sistema",i:"🔄",n:"r_boot"},
    {l:"Está muy lento",i:"🐢",n:"r_slow"},
    {l:"Pantalla negra o sin señal",i:"🖥️",n:"r_disp"}
  ]},
  pc_pwr:{title:"¿El cable de poder está bien conectado?",icon:"⚡",options:[
    {l:"No estoy seguro / se ve suelto",i:"🔌",n:"r_cable"},
    {l:"Es un portátil y la batería está en 0",i:"🔋",n:"r_charge"},
    {l:"Sí: está conectado y hay corriente",i:"⚠️",n:"r_dead"}
  ]},
  net:{title:"¿A cuántos equipos les falta internet?",icon:"📶",options:[
    {l:"Solo este computador",i:"💻",n:"r_net1"},
    {l:"Veo la red WiFi pero no entra",i:"🔒",n:"r_wifi"},
    {l:"Nadie del aula tiene internet",i:"⚠️",n:"r_netall"}
  ]},
  proj:{title:"¿Qué ves en el proyector o el televisor?",icon:"📽️",options:[
    {l:"Sin señal / pantalla azul o negra",i:"🖥️",n:"r_input"},
    {l:"El cable HDMI o VGA está suelto",i:"🔌",n:"r_hdmi"},
    {l:"Imagen muy oscura o parpadea",i:"💡",n:"r_lamp"}
  ]},
  print:{title:"¿Qué hace la impresora?",icon:"🖨️",options:[
    {l:"Papel atascado o no jala hoja",i:"📄",n:"r_jam"},
    {l:"Aparece desconectada / offline",i:"🔌",n:"r_off"},
    {l:"No imprime aunque está lista",i:"🖨️",n:"r_queue"}
  ]},
  audio:{title:"¿Qué pasa con el audio?",icon:"🔊",options:[
    {l:"No se oye nada (mudo o volumen 0)",i:"🔇",n:"r_mute"},
    {l:"Cable o dispositivo de salida",i:"🎧",n:"r_jack"}
  ]},
  acc:{title:"¿Qué falla con la cuenta?",icon:"👤",options:[
    {l:"Olvidé la contraseña o está bloqueada",i:"🔑",n:"r_pass"},
    {l:"No entra a Classroom / plataforma",i:"📚",n:"r_plat"}
  ]},
  r_cable:{s:"ok",t:"Revisa la alimentación",p:"La mayoría de los “no enciende” se resuelven reconectando el cable y el interruptor de la fuente.",steps:["Confirma que el tomacorriente tenga corriente.","Conecta el cable a fondo al CPU o al portátil.","En escritorio, el switch de la fuente (atrás) debe estar en I.","Mantén el botón de encendido 3 segundos.","Si no hay luces, reporta el equipo."],cat:"Computador"},
  r_charge:{s:"ok",t:"Carga el portátil",p:"Sin batería y sin cargador el equipo no arranca.",steps:["Conecta el cargador original.","Mira el LED del conector o del cargador.","Espera 5–10 minutos si estaba en 0%.","Prueba encender. Si no responde, reporta."],cat:"Computador"},
  r_dead:{s:"warn",t:"Equipo sin respuesta",p:"Puede ser fuente, placa o falla interna. No abras el equipo.",steps:["Prueba otro tomacorriente.","Revisa que el switch trasero esté en I.","Anota el código del equipo y el aula.","Reporta con urgencia media o alta."],cat:"Computador"},
  r_boot:{s:"warn",t:"El sistema no termina de cargar",p:"Puede ser un apagado incorrecto, actualización trabada o disco con error.",steps:["Espera 2 minutos: a veces está reparando el disco.","Si ves un porcentaje, no lo apagues.","Si se queda más de 10 minutos, apaga 8 segundos y vuelve a encender.","Si el ciclo se repite, reporta."],cat:"Computador"},
  r_slow:{s:"ok",t:"Acelera el equipo con una limpieza simple",p:"Lo más común es tener muchas pestañas o el disco lleno.",steps:["Cierra pestañas y programas que no uses.","Reinicia desde Inicio → Reiniciar.","Retira USB desconocidos.","Si sigue igual, reporta."],cat:"Computador"},
  r_disp:{s:"ok",t:"Recupera la imagen de la pantalla",p:"El equipo puede estar enviando video al proyector, o el cable está suelto.",steps:["Mira si el CPU tiene luces.","Reconecta HDMI/VGA en monitor y CPU.","En portátil: Fn + tecla de pantalla.","Prueba el botón de encendido del monitor.","Si sigue negro, reporta."],cat:"Computador"},
  r_net1:{s:"ok",t:"Reconecta la red de este equipo",p:"Si el resto del aula navega, el problema está en este computador.",steps:["Olvida y reconecta la red institucional.","Si es por cable, desconecta 5 segundos y vuelve a oír el clic.","Reinicia el computador.","Si no carga una página simple, reporta este puesto."],cat:"Red"},
  r_wifi:{s:"ok",t:"Entra al WiFi institucional",p:"Ver la red no basta: hay que autenticarse con la cuenta del colegio.",steps:["Elige solo la red oficial de I.E. La Unión.","Revisa mayúsculas y el teclado.","Si pide certificado, acéptalo solo en la red del colegio.","Si falla 2 veces, no sigas: reporta para no bloquear la cuenta."],cat:"Red"},
  r_netall:{s:"warn",t:"Caída de red en el aula",p:"Si nadie navega, es switch, access point o enlace del colegio.",steps:["Confirma con 2 o 3 equipos.","No reinicies el switch ni toques el rack.","Anota aula, hora y si fallan otras zonas.","Reporta con urgencia alta."],cat:"Red"},
  r_hdmi:{s:"ok",t:"Reconecta HDMI o VGA",p:"Un cable a medias es la causa más frecuente de “sin imagen”.",steps:["Apaga el proyector con el control.","Conecta HDMI/VGA a fondo.","Enciende primero el proyector y después el computador.","Usa Fn + icono de monitor para duplicar."],cat:"Aula"},
  r_input:{s:"ok",t:"Cambia la entrada de video",p:"El proyector puede estar en HDMI 2 o VGA mientras el PC está en HDMI 1.",steps:["Pulsa Source/Input hasta HDMI o VGA.","Espera 5–10 segundos entre entradas.","Si usas USB-C, conéctalo directo.","Si no hay imagen, reporta."],cat:"Aula"},
  r_lamp:{s:"warn",t:"Imagen débil: posible lámpara o filtro",p:"No abras el proyector. El recambio lo hace soporte.",steps:["Oscurece el aula y mira si se distingue algo.","No golpear el equipo encendido.","Apágalo con el control y espera el ventilador 1–2 min.","Reporta aula y modelo."],cat:"Aula"},
  r_jam:{s:"ok",t:"Saca el papel atascado con cuidado",p:"No tires con fuerza: sigue el sentido de avance del papel.",steps:["Apaga la impresora.","Abre las bandejas y retira el papel completo.","Cancela los trabajos en cola del computador.","Enciende y prueba una página de prueba.","Si se atasca de nuevo, reporta."],cat:"Impresora"},
  r_off:{s:"ok",t:"Vuelve a poner la impresora en línea",p:"Suele estar apagada, sin red o tomada por otro equipo.",steps:["Confirma que esté encendida y sin error.","Revisa Ethernet o WiFi del colegio.","Quita “Usar impresora sin conexión” y márcala predeterminada.","Si sigue offline, reporta."],cat:"Impresora"},
  r_queue:{s:"ok",t:"Limpia la cola de impresión",p:"Un trabajo trabado bloquea todo lo que sigue.",steps:["Abre la cola de impresión y cancela todo.","Reinicia el servicio de impresión o el computador.","Vuelve a enviar un documento corto.","Si no imprime, reporta."],cat:"Impresora"},
  r_mute:{s:"ok",t:"Revisa volumen y dispositivo de salida",p:"Casi siempre es mute o salida incorrecta.",steps:["Quita el mute del teclado y del volumen del sistema.","En Configuración de sonido elige parlantes o diadema.","Prueba un video de YouTube corto.","Si no hay dispositivo, reporta."],cat:"Audio"},
  r_jack:{s:"ok",t:"Reconecta audio",p:"Jack mal puesto o dispositivo dañado.",steps:["Desconecta y vuelve a conectar el cable.","Prueba otro puerto o parlante.","En portátil revisa el conector de diadema.","Si no se oye, reporta."],cat:"Audio"},
  r_pass:{s:"ok",t:"Recupera el acceso sin bloquear la cuenta",p:"Tres o más intentos malos suelen bloquear el usuario.",steps:["Confirma usuario institucional y que Bloq Mayús esté apagado.","No sigas adivinando. Anota el mensaje de error.","Pide restablecimiento con nombre completo, grado o área, y usuario."],cat:"Cuentas"},
  r_plat:{s:"ok",t:"Entra con la cuenta del colegio",p:"Classroom y el correo fallan si estás en una cuenta personal.",steps:["Cierra Gmail/Microsoft personal o usa incógnito.","Entra con el correo institucional, no un @gmail personal.","Acepta los permisos de la primera vez.","Si dice que no perteneces a la clase, reporta."],cat:"Cuentas"}
};
const guides=[
  {i:"💻",t:"El computador no enciende",p:"Cable, interruptor de la fuente y carga del portátil.",tag:"easy",lbl:"BÁSICO",n:"r_cable",tip:"En un portátil, busca el LED del cargador; en un equipo de mesa, revisa también el interruptor trasero.",ifNot:"Si no aparece ninguna luz después de probar otro tomacorriente, anota el aula y el código del equipo y repórtalo."},
  {i:"📶",t:"Sin internet en un solo PC",p:"Olvidar la red, cable o reinicio simple.",tag:"easy",lbl:"BÁSICO",n:"r_net1",tip:"Si el resto del aula navega, el fallo es local a este puesto.",ifNot:"Si tras reconectar y reiniciar no carga ni una página, reporta el puesto."},
  {i:"📽️",t:"Proyector sin imagen",p:"Entrada HDMI/VGA y cable bien puesto.",tag:"easy",lbl:"BÁSICO",n:"r_input",tip:"Cambia Source/Input y espera unos segundos entre cada opción.",ifNot:"Si no hay señal con cable bien conectado, reporta aula y modelo."},
  {i:"🖨️",t:"Impresora atascada o en cola",p:"Sacar papel sin romperlo y vaciar trabajos trabados.",tag:"med",lbl:"MEDIO",n:"r_jam",tip:"Cancela la cola antes de tirar del papel y retíralo siguiendo el sentido de avance.",ifNot:"Si vuelve a atascarse, no uses fuerza: deja la impresora apagada y repórtala con el mensaje de error."},
  {i:"🐢",t:"El equipo está muy lento",p:"Cerrar programas y reiniciar desde el menú.",tag:"easy",lbl:"BÁSICO",n:"r_slow",tip:"Guarda tu trabajo antes de reiniciar y desconecta memorias USB que no reconozcas.",ifNot:"Si continúa lento, anota qué programa estaba abierto y desde cuándo ocurre para el reporte."},
  {i:"👤",t:"No entra la cuenta institucional",p:"Evita el bloqueo y pide el restablecimiento.",tag:"med",lbl:"MEDIO",n:"r_pass",tip:"Confirma que estás usando la cuenta institucional y no una cuenta personal guardada en el navegador.",ifNot:"No sigas intentando contraseñas al azar; solicita restablecimiento con tu usuario y el mensaje de error."},
  {i:"🔊",t:"No se oye audio",p:"Mute, dispositivo de salida y cables.",tag:"easy",lbl:"BÁSICO",n:"r_mute",tip:"Revisa tanto el volumen del computador como el del parlante, proyector o diadema.",ifNot:"Si el dispositivo no aparece en la lista de sonido, reporta el equipo y el tipo de conexión."},
  {i:"⚠️",t:"Se cayó la red de todo el aula",p:"Confirma en 2 PCs. No toques switch ni rack.",tag:"hard",lbl:"URGENTE",n:"r_netall",tip:"Comprueba el fallo en dos o tres equipos y registra la hora exacta.",ifNot:"No reinicies switches ni abras el rack; reporta el aula, la hora y si otras zonas también están sin conexión."}
];

let path=[];
let urgency="media";
const notice=document.getElementById("formNotice");

function showNotice(kind, message){
  notice.className="notice show "+kind;
  notice.textContent=message;
}

async function sendReport(payload, form){
  if(!WEB3FORMS_KEY || WEB3FORMS_KEY === "TU_ACCESS_KEY_AQUI"){
    showNotice("err", "Falta configurar la clave de Web3Forms. Genera una en web3forms.com con el correo de soporte y actualiza app.js.");
    return false;
  }
  const body={
    access_key:WEB3FORMS_KEY,
    subject:payload._subject,
    from_name:"Mesa de ayuda I.E. La Unión",
    nombre:payload.nombre,
    rol:payload.rol,
    aula:payload.aula,
    equipo:payload.equipo,
    urgencia:payload.urgencia,
    problema:payload.problema,
    intentado:payload.intentado,
    email:payload._replyto || INBOX,
    destino:INBOX
  };
  const res=await fetch("https://api.web3forms.com/submit",{
    method:"POST",
    headers:{"Content-Type":"application/json","Accept":"application/json"},
    body:JSON.stringify(body)
  });
  const data=await res.json().catch(()=>({}));
  if(res.ok && data.success){
    showNotice("ok", "Reporte enviado correctamente a "+INBOX+". El equipo de soporte lo recibirá en esa bandeja.");
    form.reset();
    urgency="media";
    document.querySelectorAll(".urg").forEach(button=>{
      const selected=button.dataset.v==="media";
      button.classList.toggle("on",selected);
      button.setAttribute("aria-pressed",String(selected));
    });
    return true;
  }
  throw new Error(data.message || "No fue posible enviar el reporte.");
}

document.getElementById("reportForm").addEventListener("submit",async event=>{
  event.preventDefault();
  const form=event.currentTarget;
  if(form.elements._honey && form.elements._honey.value) return;
  const button=document.getElementById("submitBtn");
  button.disabled=true;
  button.innerHTML="Enviando…";
  const payload={
    _subject:"[MESA DE AYUDA] "+urgency.toUpperCase()+" · "+form.elements.equipo.value+" · "+form.elements.aula.value,
    nombre:form.elements.nombre.value.trim(),
    rol:form.elements.rol.value,
    aula:form.elements.aula.value.trim(),
    equipo:form.elements.equipo.value,
    urgencia:urgency,
    problema:form.elements.problema.value.trim(),
    intentado:form.elements.intentado.value.trim() || "(nada anotado)"
  };
  if(form.elements._replyto && form.elements._replyto.value) payload._replyto=form.elements._replyto.value.trim();
  try{
    await sendReport(payload,form);
  }catch(error){
    showNotice("err", "No se pudo enviar el reporte. Intenta de nuevo o escribe a "+INBOX+".");
    console.error(error);
  }finally{
    window.setTimeout(()=>{
      button.disabled=false;
      button.innerHTML='Enviar reporte <span aria-hidden="true">→</span>';
    },700);
  }
});

document.getElementById("urgWrap").addEventListener("click",event=>{
  const button=event.target.closest(".urg");
  if(!button) return;
  urgency=button.dataset.v;
  document.querySelectorAll(".urg").forEach(item=>{
    const selected=item===button;
    item.classList.toggle("on",selected);
    item.setAttribute("aria-pressed",String(selected));
  });
});

const menuButton=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
function closeMenu(){
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
  menuButton.setAttribute("aria-label","Abrir menú");
}
menuButton.addEventListener("click",()=>{
  const open=menuButton.getAttribute("aria-expanded")==="true";
  menuButton.setAttribute("aria-expanded",String(!open));
  menuButton.setAttribute("aria-label",open?"Abrir menú":"Cerrar menú");
  navLinks.classList.toggle("open",!open);
});
navLinks.addEventListener("click",event=>{if(event.target.closest("a")) closeMenu();});
document.addEventListener("keydown",event=>{if(event.key==="Escape") closeMenu();});

function renderStep(key,record=true){
  const node=tree[key];
  if(!node) return;
  if(record) path.push(key);
  const body=document.getElementById("wizardBody");
  const bar=document.getElementById("barFill");
  const stepNum=document.getElementById("stepNum");
  stepNum.textContent="Paso "+path.length;
  bar.style.width=Math.min(100,Math.max(25,path.length*25))+"%";
  if(node.s){
    body.innerHTML=`<div class="result ${node.s}"><h3>${node.t}</h3><p>${node.p}</p><ol>${node.steps.map(step=>`<li>${step}</li>`).join("")}</ol></div>
      <div class="wiz-actions"><button type="button" class="button button-dark" id="reportFromDiagnosis">Continuar con el reporte <span aria-hidden="true">→</span></button>
      <button type="button" class="back-link" id="wizBack">Volver al inicio</button></div>`;
    document.getElementById("reportFromDiagnosis").addEventListener("click",()=>{
      const description=document.getElementById("desc");
      description.value=node.t+". "+node.p;
      const equipmentByCategory={Red:"Red / WiFi",Aula:"Proyector / TV",Impresora:"Impresora",Audio:"Audio",Cuentas:"Cuenta / plataforma"};
      if(equipmentByCategory[node.cat]) document.getElementById("equipo").value=equipmentByCategory[node.cat];
      location.hash="#reportar";
      window.setTimeout(()=>document.getElementById("nombre").focus(),180);
    });
    document.getElementById("wizBack").addEventListener("click",()=>{path=[];renderStep("start");});
    return;
  }
  body.innerHTML=`<div class="q-title"><span class="icon" aria-hidden="true">${node.icon||"❓"}</span><span>${node.title}</span></div>
    ${node.sub?`<p class="q-sub">${node.sub}</p>`:""}
    <div class="opts">${node.options.map(option=>`<button type="button" class="opt" data-n="${option.n}"><span class="oicon" aria-hidden="true">${option.i||"•"}</span><span>${option.l}${option.h?`<small>${option.h}</small>`:""}</span></button>`).join("")}</div>
    ${path.length>1?`<div class="wiz-actions"><button type="button" class="back-link" id="wizBack">← Atrás</button></div>`:""}`;
  body.querySelectorAll(".opt").forEach(button=>button.addEventListener("click",()=>renderStep(button.dataset.n)));
  const back=body.querySelector("#wizBack");
  if(back) back.addEventListener("click",()=>{
    path.pop();
    renderStep(path[path.length-1]||"start",false);
  });
}
renderStep("start");

const cards=document.getElementById("guideCards");
cards.innerHTML=guides.map((guide,index)=>`<article class="guide-card" data-i="${index}">
  <button type="button" class="guide-trigger" aria-expanded="false" aria-controls="guide-details-${index}">
    <span class="guide-icon" aria-hidden="true">${guide.i}</span><h3>${guide.t}</h3><p>${guide.p}</p><span class="tag ${guide.tag}">${guide.lbl}</span>
  </button>
  <div class="guide-inline" id="guide-details-${index}" hidden></div>
</article>`).join("");
cards.addEventListener("click",event=>{
  const close=event.target.closest(".close-guide");
  if(close){
    const card=close.closest(".guide-card");
    card.querySelector(".guide-inline").hidden=true;
    card.querySelector(".guide-trigger").setAttribute("aria-expanded","false");
    card.classList.remove("is-open");
    return;
  }
  const trigger=event.target.closest(".guide-trigger");
  if(!trigger) return;
  const card=trigger.closest(".guide-card");
  const detail=card.querySelector(".guide-inline");
  const wasOpen=trigger.getAttribute("aria-expanded")==="true";
  cards.querySelectorAll(".guide-card").forEach(item=>{
    item.classList.remove("is-open");
    item.querySelector(".guide-inline").hidden=true;
    item.querySelector(".guide-trigger").setAttribute("aria-expanded","false");
  });
  if(wasOpen) return;
  const guide=guides[Number(card.dataset.i)];
  const node=tree[guide.n];
  detail.innerHTML=`<h4>${node.t}</h4><p>${node.p}</p><ol>${node.steps.map(step=>`<li>${step}</li>`).join("")}</ol>
    <div class="guide-tip">${guide.tip}</div><div class="guide-next">${guide.ifNot}</div>
    <button type="button" class="close-guide">Cerrar guía</button>`;
  detail.hidden=false;
  trigger.setAttribute("aria-expanded","true");
  card.classList.add("is-open");
});
