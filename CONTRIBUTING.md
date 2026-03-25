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

## 🌿 Flujo de Trabajo (Pull Requests)

1. Crea una rama descriptiva: `git checkout -b feat/nuevo-recurso-xyz`
2. Añade los datos y pruébalo localmente con `npm run dev`.
3. Haz Commit: `git commit -m "feat(data): añadir recurso xyz"`
4. Empuja los cambios y abre un **Pull Request**.

