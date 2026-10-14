import { useState } from 'react';
const stages = [
 ['01','Código fuente','React y Vite organizan la interfaz y preparan los archivos de producción.'],
 ['02','Control de versiones','Git registra cambios y GitHub aloja el repositorio y la rama main.'],
 ['03','Integración continua','Amplify detecta el commit e instala dependencias antes de construir.'],
 ['04','Entrega continua','La carpeta dist se publica en una URL HTTPS de Amplify.']
];
const checks = [
 'La aplicación se ejecuta localmente con npm run dev.',
 'npm run build termina sin errores.',
 'El repositorio de GitHub contiene la rama main.',
 'AWS Amplify muestra un despliegue exitoso y la URL funciona.'
];
export default function App(){
 const [done,setDone] = useState([]);
 return <main className="shell">
  <header><a className="logo" href="#inicio">DEV<span>OPS</span></a><small>LABORATORIO ACADÉMICO</small></header>
  <section className="hero" id="inicio"><div><p className="eyebrow">● PIPELINE CI/CD · REACT + AWS</p>
   <h1>Del código a la nube, <em>automáticamente.</em></h1>
   <p className="lead">Aplicación demostrativa de despliegue continuo que conecta GitHub con AWS Amplify Hosting para construir y publicar un proyecto React.</p>
   <a className="cta" href="#flujo">Explorar el flujo ↘</a></div>
   <div className="visual"><div className="ring r1"></div><div className="ring r2"></div><div className="cloud"><b>☁ AWS</b><small>AMPLIFY HOSTING</small></div><span className="bubble git">⌘ GitHub</span><span className="bubble react">⚛ React + Vite</span><span className="bubble deploy">↗ Deploy</span></div>
  </section>
  <section className="identity"><div><small>DESARROLLADO POR</small><b>Camilo Andres Osorio Mejia</b></div><div><small>ASIGNATURA</small><b>Laboratorio DevOps</b></div><div><small>TECNOLOGÍAS</small><b>React · Vite · GitHub · AWS</b></div></section>
  <section className="section" id="flujo"><div className="heading"><div><p className="eyebrow">01 / ARQUITECTURA</p><h2>Un flujo reproducible</h2></div><p>Un cambio enviado a la rama conectada puede iniciar una nueva compilación y publicación.</p></div>
   <div className="cards">{stages.map(([n,t,d])=><article key={n}><small>{n}</small><h3>{t}</h3><p>{d}</p></article>)}</div>
   <div className="pipeline"><span>DESARROLLO</span><b>git push</b><i>→</i><span>GITHUB</span><i>→</i><span>AMPLIFY BUILD</span><i>→</i><strong>WEB PUBLICADA</strong></div>
  </section>
  <section className="section"><div className="heading"><div><p className="eyebrow">02 / VALIDACIÓN</p><h2>Lista de comprobación</h2></div><p>Marca cada paso después de comprobarlo. El avance se calcula en esta página.</p></div>
   <div className="progress"><div><span>Progreso</span><b>{done.length} de {checks.length}</b></div><div className="track"><div style={{width:`${done.length/checks.length*100}%`}}/></div></div>
   <div className="checklist">{checks.map((c,i)=><label key={c} className={done.includes(i)?'checked':''}><input type="checkbox" checked={done.includes(i)} onChange={()=>setDone(old=>old.includes(i)?old.filter(x=>x!==i):[...old,i])}/><span className="tick">{done.includes(i)?'✓':''}</span>{c}</label>)}</div>
   <p className="note">Esta lista es interactiva y se reinicia al recargar. No reemplaza las capturas reales que se deben adjuntar como evidencia.</p>
  </section>
  <footer><div><b>LABORATORIO <span>DEVOPS</span></b><p>Práctica de integración y entrega continua.</p></div><div>Camilo Andres Osorio Mejia<small>React · GitHub · AWS Amplify</small></div></footer>
 </main>
}