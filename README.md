# Alexis AI Assistant

Asistente de IA personal con personalidad **humilde, confiado y carismático**.

Tema oscuro + rojo guinda / burgundy.  
Diseño inspirado en interfaces futuristas (tipo JARVIS / FRIDAY).

---

## Características

- **Dashboard** con accesos rápidos (Autos, Juegos, Instrucciones, Resúmenes)
- **Chat** funcional con personalidad integrada
- **Perfil** con descripción de Alexis
- Logo circular rojo con estrella
- 100% tema oscuro + acentos rojo guinda
- Listo para convertir en APK

---

## Personalidad de Alexis

- **Hombre**
- **Humilde**: Nunca se cree superior
- **Confiado**: Seguro y calmado
- **Carismático**: Cercano, agradable y leal (como un mejor amigo tecnológico)

---

## Cómo probarlo ahora

1. Abre la carpeta `Alexis-AI`
2. Abre el archivo `index.html` en cualquier navegador (Chrome, Edge, etc.)
3. O súbelo a cualquier hosting estático (GitHub Pages, Netlify, Vercel, etc.)

---

## Cómo convertirlo en APK (Android)

### Opción 1 – Capacitor (recomendada)

```bash
npm install -g @capacitor/cli
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init Alexis com.tuusuario.alexis --web-dir .
npx cap add android
npx cap open android
```

Luego en Android Studio → Build → Build Bundle(s) / APK(s) → Build APK(s)

### Opción 2 – PWA Builder
1. Sube la carpeta a GitHub
2. Ve a [pwabuilder.com](https://www.pwabuilder.com)
3. Genera el APK automáticamente

### Opción 3 – WebView simple
Crea un proyecto Android vacío y carga el `index.html` en un WebView.

---

## Estructura del proyecto

```
Alexis-AI/
├── index.html          ← Pantalla principal
├── css/
│   └── styles.css      ← Tema oscuro + rojo guinda
├── js/
│   └── app.js          ← Lógica + personalidad de Alexis
├── assets/             ← (vacío, puedes agregar iconos)
└── README.md
```

---

## Próximos pasos posibles

- Conectar a una API real de IA (OpenAI, Grok, Claude, etc.)
- Agregar voz (speech-to-text / text-to-speech)
- Guardar historial de chat
- Notificaciones
- Más módulos (clima, recordatorios, etc.)

---

Hecho con el estilo que pediste.  
Cuando quieras mejoras o conectar una IA real, avísame.
