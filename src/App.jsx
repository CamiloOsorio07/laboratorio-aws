
import { useState } from "react";

const stages = [
  [
    "01",
    "Código fuente",
    "React y Vite organizan la interfaz y preparan los archivos de producción.",
  ],
  [
    "02",
    "Control de versiones",
    "Git registra cambios y GitHub aloja el repositorio y la rama main.",
  ],
  [
    "03",
    "Integración continua",
    "Amplify detecta el commit e instala dependencias antes de construir.",
  ],
  [
    "04",
    "Entrega continua",
    "La carpeta dist se publica en una URL HTTPS de Amplify.",
  ],
];

const checks = [
  "La aplicación se ejecuta localmente con npm run dev.",
  "npm run build termina sin errores.",
  "El repositorio de GitHub contiene la rama main.",
  "AWS Amplify muestra un despliegue exitoso y la URL funciona.",
];

const gitCommands = `git switch main
git pull origin main
git switch -c feature/mejora-ui
git add src/App.jsx
git commit -m "feat: agregar evidencia E07 del Pull Request"
git push -u origin feature/mejora-ui`;

export default function App() {
  const [done, setDone] = useState([]);
  const [repoUrl, setRepoUrl] = useState("");
  const [repoError, setRepoError] = useState("");

  const validRepoUrl = (value) => {
    try {
      const url = new URL(value.trim());
      return (
        url.hostname === "github.com" &&
        url.pathname.split("/").filter(Boolean).length >= 2
      );
    } catch {
      return false;
    }
  };

  const openPullRequest = () => {
    const cleanUrl = repoUrl.trim().replace(/\/+$/, "");

    if (!validRepoUrl(cleanUrl)) {
      setRepoError(
        "Introduce la URL completa de tu repositorio, por ejemplo: https://github.com/usuario/mi-proyecto"
      );
      return;
    }

    setRepoError("");

    const compareUrl = `${cleanUrl}/compare/main...feature/mejora-ui?expand=1`;
    window.open(compareUrl, "_blank", "noopener,noreferrer");
  };

  const copyCommands = async () => {
    try {
      await navigator.clipboard.writeText(gitCommands);
      alert("Comandos Git copiados. Pégalos en la terminal de tu proyecto.");
    } catch {
      alert("No se pudieron copiar automáticamente. Selecciona y copia los comandos manualmente.");
    }
  };

  return (
    <main className="shell">
      <header>
        <a className="logo" href="#inicio">
          DEV<span>OPS</span>
        </a>
        <small>LABORATORIO ACADÉMICO</small>
      </header>

      <section className="hero" id="inicio">
        <div>
          <p className="eyebrow">● PIPELINE CI/CD · REACT + AWS</p>
          <h1>
            Del código a la nube, <em>automáticamente.</em>
          </h1>
          <p className="lead">
            Aplicación demostrativa de despliegue continuo que conecta GitHub
            con AWS Amplify Hosting para construir y publicar un proyecto React.
          </p>
          <a className="cta" href="#flujo">
            Explorar el flujo ↘
          </a>
        </div>

        <div className="visual">
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="cloud">
            <b>☁ AWS</b>
            <small>AMPLIFY HOSTING</small>
          </div>
          <span className="bubble git">⌘ GitHub</span>
          <span className="bubble react">⚛ React + Vite</span>
          <span className="bubble deploy">↗ Deploy</span>
        </div>
      </section>

      <section className="identity">
        <div>
          <small>DESARROLLADO POR</small>
          <b>Camilo Andres Osorio Mejia</b>
        </div>
        <div>
          <small>ASIGNATURA</small>
          <b>Laboratorio DevOps</b>
        </div>
        <div>
          <small>TECNOLOGÍAS</small>
          <b>React · Vite · GitHub · AWS</b>
        </div>
      </section>

      <section className="section" id="flujo">
        <div className="heading">
          <div>
            <p className="eyebrow">01 / ARQUITECTURA</p>
            <h2>Un flujo reproducible</h2>
          </div>
          <p>
            Un cambio enviado a la rama conectada puede iniciar una nueva
            compilación y publicación.
          </p>
        </div>

        <div className="cards">
          {stages.map(([number, title, description]) => (
            <article key={number}>
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="pipeline">
          <span>DESARROLLO</span>
          <b>git push</b>
          <i>→</i>
          <span>GITHUB</span>
          <i>→</i>
          <span>AMPLIFY BUILD</span>
          <i>→</i>
          <strong>WEB PUBLICADA</strong>
        </div>
      </section>

      <section className="section" id="validacion">
        <div className="heading">
          <div>
            <p className="eyebrow">02 / VALIDACIÓN</p>
            <h2>Lista de comprobación</h2>
          </div>
          <p>
            Marca cada paso después de comprobarlo. El avance se calcula en
            esta página.
          </p>
        </div>

        <div className="progress">
          <div>
            <span>Progreso</span>
            <b>
              {done.length} de {checks.length}
            </b>
          </div>
          <div className="track">
            <div
              style={{
                width: `${(done.length / checks.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="checklist">
          {checks.map((check, index) => (
            <label
              key={check}
              className={done.includes(index) ? "checked" : ""}
            >
              <input
                type="checkbox"
                checked={done.includes(index)}
                onChange={() =>
                  setDone((previous) =>
                    previous.includes(index)
                      ? previous.filter((item) => item !== index)
                      : [...previous, index]
                  )
                }
              />
              <span className="tick">
                {done.includes(index) ? "✓" : ""}
              </span>
              {check}
            </label>
          ))}
        </div>

        <p className="note">
          Esta lista es interactiva y se reinicia al recargar. No reemplaza
          las capturas reales que se deben adjuntar como evidencia.
        </p>
      </section>

      {/* E07: Pull Request de feature hacia main */}
      <section className="section" id="e07">
        <div className="heading">
          <div>
            <p className="eyebrow">03 / EVIDENCIA E07</p>
            <h2>Pull Request hacia main</h2>
          </div>
          <p>
            Prepara una mejora en una rama independiente y solicita su revisión
            antes de integrarla en la rama principal.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            {
              number: "01",
              title: "Crear la rama",
              description:
                "Trabaja en feature/mejora-ui sin modificar directamente main.",
            },
            {
              number: "02",
              title: "Subir los cambios",
              description:
                "Publica la rama en GitHub y verifica que contenga tu commit.",
            },
            {
              number: "03",
              title: "Crear el Pull Request",
              description:
                "Selecciona feature/mejora-ui como origen y main como destino.",
            },
          ].map((step) => (
            <article
              key={step.number}
              style={{
                padding: "20px",
                border: "1px solid var(--line, #344054)",
                borderRadius: "10px",
                background: "var(--card, rgba(20, 30, 48, 0.65))",
              }}
            >
              <small>{step.number}</small>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid var(--line, #344054)",
            borderRadius: "10px",
          }}
        >
          <h3>Comandos para preparar la rama</h3>
          <p className="note">
            Ejecuta estos comandos en la terminal, desde la carpeta de tu
            proyecto. Primero guarda los cambios de tus archivos.
          </p>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
              padding: "16px",
              borderRadius: "8px",
              background: "#0b1220",
              color: "#d7e5f5",
              fontSize: "12px",
              lineHeight: 1.8,
              overflowX: "auto",
            }}
          >
            <code>{gitCommands}</code>
          </pre>

          <button
            type="button"
            className="cta"
            onClick={copyCommands}
            style={{ cursor: "pointer", border: 0 }}
          >
            Copiar comandos Git
          </button>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid var(--line, #344054)",
            borderRadius: "10px",
          }}
        >
          <label
            htmlFor="github-repo"
            style={{ display: "block", marginBottom: "10px" }}
          >
            <strong>URL de tu repositorio en GitHub</strong>
          </label>

          <input
            id="github-repo"
            type="url"
            value={repoUrl}
            onChange={(event) => {
              setRepoUrl(event.target.value);
              setRepoError("");
            }}
            placeholder="https://github.com/usuario/mi-proyecto"
            style={{
              display: "block",
              boxSizing: "border-box",
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "7px",
              border: "1px solid var(--line, #526078)",
              background: "var(--input-bg, #111b2c)",
              color: "inherit",
              font: "inherit",
            }}
          />

          {repoError && (
            <p role="alert" style={{ color: "#ff8c8c", fontSize: "13px" }}>
              {repoError}
            </p>
          )}

          <button
            type="button"
            className="cta"
            onClick={openPullRequest}
            style={{ cursor: "pointer", border: 0 }}
          >
            Abrir comparación en GitHub ↗
          </button>

          <p className="note" style={{ marginTop: "14px" }}>
            Este botón abre la comparación entre main y feature/mejora-ui.
            Debes haber creado y subido la rama primero. Después, revisa los
            cambios y pulsa Create pull request en GitHub.
          </p>
        </div>

        <div
          style={{
            marginTop: "16px",
            padding: "16px",
            borderLeft: "3px solid var(--cyan, #7de3dc)",
            background: "var(--card, rgba(20, 30, 48, 0.65))",
          }}
        >
          <strong>Qué entregar como evidencia E07</strong>
          <p>
            Adjunta una captura real de GitHub donde se vea el título del Pull
            Request, la rama feature/mejora-ui, la rama de destino main y los
            archivos modificados.
          </p>
          <p className="note">
            Estado: pendiente de crear y verificar el Pull Request real. Esta
            página no simula una aprobación ni confirma una fusión.
          </p>
        </div>
      </section>

      <footer>
        <div>
          <b>
            LABORATORIO <span>DEVOPS</span>
          </b>
          <p>Práctica de integración y entrega continua.</p>
        </div>
        <div>
          Camilo Andres Osorio Mejia
          <small>React · GitHub · AWS Amplify</small>
        </div>
      </footer>
    </main>
  );
}
