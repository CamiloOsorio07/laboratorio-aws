# Laboratorio DevOps — React + AWS Amplify
**Desarrollado por:** Camilo Andres Osorio Mejia

## Requisitos
Node.js LTS, npm, Git, cuenta de GitHub y acceso a AWS Amplify.

## Ejecutar localmente
```bash
npm install
npm run dev
```
Abre la URL que muestra Vite en la terminal.

## Validar producción
```bash
npm run build
npm run preview
```
Los archivos publicables quedan en `dist/`.

## Publicar con GitHub y Amplify
1. Crea en GitHub un repositorio vacío llamado `laboratorio-aws`.
2. En esta carpeta ejecuta:
```bash
git init
git add .
git commit -m "feat: primera version del laboratorio DevOps"
git branch -M main
git remote add origin https://github.com/USUARIO/laboratorio-aws.git
git push -u origin main
```
Sustituye `USUARIO` por tu usuario real.
3. En AWS Amplify crea una aplicación desde GitHub, autoriza el acceso y selecciona el repositorio y la rama `main`.
4. Revisa `amplify.yml` y pulsa **Save and deploy**.
5. Al finalizar, abre la URL pública que entrega Amplify y guarda capturas reales.

## Demostrar CI/CD
Modifica `src/App.jsx`, y ejecuta:
```bash
git add .
git commit -m "feat: actualiza informacion del laboratorio"
git push origin main
```
Confirma en Amplify que se inicia otro build vinculado al commit y que la web refleja el cambio.

## Reto de Pull Request
```bash
git checkout -b feature/mejora-ui
# realiza un cambio
git add .
git commit -m "feat: mejora interfaz"
git push -u origin feature/mejora-ui
```
Abre un Pull Request hacia `main` y revisa el cambio antes de fusionar.

## Solución de problemas
- Build fallido: ejecuta `npm run build` localmente y revisa los logs.
- Repositorio ausente: revisa la autorización de GitHub App en Amplify.
- Página vacía: comprueba que `baseDirectory` sea `dist`.
- Cambio sin publicar: confirma la rama conectada y el estado del build.
- `npm ci` falla: ejecuta `npm install` para crear `package-lock.json`, inclúyelo en Git y vuelve a desplegar.

**Importante:** el despliegue real requiere conectar las cuentas del estudiante; este proyecto no afirma que ya esté publicado en AWS.
