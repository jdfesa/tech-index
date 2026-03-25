# 🤝 Guías de Contribución

¡Gracias por colaborar en **Tech Index**! Seguimos estos estándares para mantener la aplicación rápida, extensible y estéticamente atractiva. **Seguir estas reglas es vital para la escalabilidad del proyecto.**

---

## 📂 ¿Cómo añadir un Enlace/Recurso?

Para agregar contenido **no necesitas modificar componentes de React**. Solo necesitas editar el archivo:

📍 `src/data/resources.json`

### 1. Formato de Recursos
Cada recurso debe ser un objeto dentro del array `"resources"`. Copia y pega esta plantilla:

```json
{
  "id": "1",
  "title": "Título del Recurso",
  "description": "Una breve descripción (máx. 2 líneas) de lo que es y por qué es útil.",
  "url": "https://sitio.com",
  "category": "agents", 
  "tags": ["AI", "Herramienta"],
  "icon": "Bot"
}
```

*   **`id`:** Usa un string con un número consecutivo (ej. `"4"`, `"5"`). Debe ser único.
*   **`icon`:** *Opcional.* Si no se especifica, por defecto se usará un icono de flecha externa (`ExternalLink`).

---

### 2. Categorías Disponibles
El campo `"category"` debe coincidir exactamente con una de estas opciones:
- `agents`
- `tools`
- `learning`
- `workflows`
- `instructions`

---

### 3. Iconos Disponibles
Si usas el campo `"icon"`, puedes usar cualquiera de estos nombres de la librería `Lucide`:
- `Bot` (Para Inteligencia Artificial o Assistants)
- `Wrench` (Herramientas / Tools / Utils)
- `BookOpen` (Guías, Tutoriales o Documentación)
- `Workflow` (Pipelines o Automatizaciones)
- `FileText` (Instrucciones o Prompts)
- `LayoutTemplate` (Plantillas de diseño)

---

## 🎨 Estándares de Diseño (Para Desarrolladores)

Si vas a modificar los archivos `.css` o componentes:
- **No uses Tailwind:** Preferimos Vanilla CSS modular para optimizar los efectos de vidrio.
- **Glassmorphism:** Usa las clases `.glass` o `.glass-card` de `src/index.css`.

---

## 🌿 Flujo de Trabajo y Buenas Prácticas (Git Flow)

Para prevenir errores accidentales que rompan la vista del sitio para todos, seguimos estas directrices estrictas:

### 1. 🛑 Regla de Oro: `main` es sagrado
*   **Nunca hagas push directo a la rama `main`.**
*   Todo cambio debe pasar por un **Pull Request (PR)** y ser aprobado por al menos otro miembro del equipo (o revisado por ti mismo si sois pocos, pero simulando la revisión).

### 2. 🌳 Nomenclatura de Ramas
Crea ramas descriptivas para tu trabajo. No uses ramas genéricas como `prueba` o `cambios`. Usa estos prefijos:
- ✅ **Añadir Enlaces:** `data/nombre-recurso` (ej. `data/guia-css`)
- 🎨 **Cambios Visuales:** `feat/nombre-mejora` (ej. `feat/animacion-hover`)
- 🐞 **Corregir Errores:** `fix/nombre-error` (ej. `fix/error-icono`)
- 🔧 **Mantenimiento:** `chore/nombre-tarea` (ej. `chore/actualizar-dependencias`)

### 3. 🧪 Pruebas Locales Obligatorias
Antes de hacer commit y abrir un PR, **debes**:
1. Correr `npm run dev` y `npm run build` en tu máquina para asegurar que no haya errores de compilación.
2. Navegar por el sitio y probar tu cambio en **Modo Oscuro** y **Modo Claro**.
3. Abrir la consola de desarrollador del navegador (F12) y verificar que **no existan errores en rojo**.

---

## 🚀 Pasos para tu primer Pull Request

1. Sincroniza tu local: `git checkout main && git pull`
2. Crea tu rama: `git checkout -b data/nuevo-recurso`
3. Añade tus datos o código y pruébalo localmente.
4. Haz Commit con un mensaje descriptivo: `git commit -m "feat(data): añadir documentación de Vite"`
5. Empuja tu rama: `git push origin data/nuevo-recurso`
6. Abre el Pull Request en GitHub. Asegúrate de rellenar la **[Plantilla de Pull Request](./.github/PULL_REQUEST_TEMPLATE.md)** que se cargará automáticamente.



