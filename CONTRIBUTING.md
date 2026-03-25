# 🤝 Guías de Contribución

¡Gracias por querer colaborar en **Tech Index**! Seguimos estos estándares para mantener la interfaz rápida y estéticamente atractiva.

---

## 📂 ¿Cómo añadir un Enlace/Recurso?

Para agregar contenido **no necesitas modificar componentes de React**. Solo necesitas editar el archivo de bases de datos:

📍 `src/data/resources.json`

### 1. Formato de Recursos
Cada recurso debe ser un objeto dentro del array `"resources"`. Copia y pega esta plantilla:

```json
{
  "id": "generar-un-id-unico-incrementable",
  "title": "Título del Recurso",
  "description": "Una breve descripción de máximo 2 líneas sobre qué es y para qué sirve.",
  "url": "https://enlace-al-sitio.com",
  "category": "agents", 
  "tags": ["Tag1", "Tag2"]
}
```

### 2. Categorías Disponibles
Asegúrate de que `"category"` coincida exactamente con uno de los IDs definidos en `"categories"` del mismo archivo:
- `agents`
- `tools`
- `learning`
- `workflows`
- `instructions`

### 3. Iconos Disponibles
Si añades una categoría o quieres cambiar el icono del recurso (por defecto es una flecha externa), puedes usar estos nombres definidos en `ResourceCard.jsx`:
- `Bot` (Para Inteligencia Artificial o Agentes)
- `Wrench` (Herramientas / Tools)
- `BookOpen` (Guías de aprendizaje / Documentación)
- `Workflow` (Automatizaciones)
- `FileText` (Instrucciones)
- `LayoutTemplate` (Plantillas de diseño)

---

## 🎨 Estándares de Diseño (Para desarrolladores)

Si vas a modificar los `.css` o crear componentes:
- **No uses Tailwind:** Preferimos Vanilla CSS modular para un control total de la opacidad y los efectos de brillo.
- **Glassmorphism:** Usa la clase `.glass` o `.glass-card` definidas en `src/index.css`.
- **Modo Oscuro Siempre:** No configures estilos `light-mode`. El diseño debe ser eternamente dark-mode para simular el copilot central.

---

## 🌿 Flujo de Trabajo (Pull Requests)

1. Crea una rama descriptiva para tu cambio: `git checkout -b feat/añadir-recurso-xyz`
2. Añade los datos y pruébalo localmente con `npm run dev`.
3. Haz Commit: `git commit -m "feat(data): añadir recurso xyz"`
4. Empuja los cambios y abre un **Pull Request**.
