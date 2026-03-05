# React + Vite + Tailwind v4 Setup (WSL / Raspberry)

## 1️⃣ Vérifier Node / NPM
```
node -v    # Node 20 recommandé
npm -v     # NPM 10 recommandé
```

## 2️⃣ Créer le dossier projet
```
cd ~
mkdir -p projects/raspberry
cd projects/raspberry
mkdir homeboard
cd homeboard
```

## 3️⃣ Créer le projet React avec Vite
```
npm create vite@latest .   # le point . = dossier courant
# Choisir : React + TypeScript
npm install
```

## 4️⃣ Installer Tailwind v4 (moderne)
```
npm install -D tailwindcss @tailwindcss/vite
```
**Config Vite (`vite.config.ts`)**
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
**Config CSS (`src/index.css`)**
```css
@import "tailwindcss";
```

## 5️⃣ Lancer le serveur dev
```
npm run dev
# ouvrir http://localhost:5173
```

## 6️⃣ Préparer pour Raspberry (build statique)
```
npm run build
# copier dist/ vers Raspberry
scp -r dist/* pi@IP_RPI:/var/www/html/
```
**Nginx config pour React Router**
```nginx
location / {
    root /var/www/html;
    try_files $uri $uri/ /index.html;
}
```

## 7️⃣ Notes importantes
- Node 20 LTS → stable pour Vite + Tailwind + React
- WebStorm → ouvrir le dossier `homeboard`