# Simulador de examen — Ingeniería de Software 3

Simulador web (HTML/CSS/JS puro, sin dependencias) del **Cuestionario General de Repaso — Unidades 1 a 5** de Ingeniería de Software 3 (Ing. Informática, 3° curso — Docente: Juan Ramón Maqueda).

## Contenido

- 65 preguntas divididas en 4 secciones:
  - **Sección A** — Verdadero o Falso (20 preguntas, nivel fácil)
  - **Sección B** — Opción múltiple (20 preguntas, nivel intermedio)
  - **Sección C** — Completar (12 preguntas, nivel intermedio-alto)
  - **Sección D** — Análisis y aplicación (13 preguntas, nivel difícil)
- Clave de respuestas oficial incluida en `data.js`.

## Funcionalidad

- **Modo examen**: respondé todas las preguntas seleccionadas y obtené la corrección y el puntaje al finalizar, con una tabla de revisión completa (tu respuesta vs. la correcta).
- **Modo estudio**: corrección inmediata después de cada pregunta.
- Selección de secciones a incluir, orden aleatorio opcional y límite de tiempo opcional.
- Puntaje global y desglosado por sección.

## Uso local

Abrí `index.html` en cualquier navegador. No requiere servidor ni instalación.

## Estructura

```
index.html   → interfaz del simulador
app.js       → lógica (estado, navegación, corrección, resultados)
data.js      → banco de preguntas y clave de respuestas
```

## Fuente

Contenido extraído de `Cuestionario_Ingenieria_de_Software_Unidades_1a5.pdf`.
