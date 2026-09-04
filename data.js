// Datos del Cuestionario General de Repaso — Ingeniería de Software 3 — Unidades 1 a 5
// Fuente: Cuestionario_Ingenieria_de_Software_Unidades_1a5.pdf

const EXAM_DATA = {
  title: "Ingeniería de Software 3 — Cuestionario General de Repaso (Unidades 1 a 5)",
  meta: {
    materia: "Ingeniería de Software 3",
    carrera: "Ing. Informática — 3° curso",
    docente: "Juan Ramón Maqueda",
    contenido: "Unidades 1 a 5 (27-07-2026 al 31-08-2026)",
    cantidadPreguntas: 65
  },
  sections: [
    {
      id: "A",
      name: "Sección A — Verdadero o Falso",
      level: "Nivel fácil",
      type: "vf",
      questions: [
        { text: "La Ingeniería de Software, según el IEEE, es la aplicación de un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software.", answer: "V" },
        { text: "La “crisis del software” surgió en la década de 1960, cuando los proyectos se volvieron más ambiciosos y empezaron a fallar sistemáticamente en costo, plazo y calidad.", answer: "V" },
        { text: "El término “Ingeniería de Software” fue acuñado en la Conferencia de la OTAN de 1968, realizada en Garmisch, Alemania.", answer: "V" },
        { text: "Según la curva de costo del cambio (Barry Boehm), cuanto más tarde se detecta y corrige un error, más barato resulta corregirlo.", answer: "F" },
        { text: "Fred Brooks documentó el desarrollo del sistema operativo OS/360 de IBM en su libro “El mítico hombre-mes”.", answer: "V" },
        { text: "El modelo en cascada (Waterfall) fue publicado por Winston Royce en 1970.", answer: "V" },
        { text: "El CMM (Capability Maturity Model) fue publicado por el SEI de la Universidad Carnegie Mellon hacia 1987.", answer: "V" },
        { text: "UML fue creado únicamente por Grady Booch, sin la participación de otros autores.", answer: "F" },
        { text: "El Manifiesto por el Desarrollo Ágil de Software fue redactado en 2001 por un grupo de 17 desarrolladores.", answer: "V" },
        { text: "El software se desgasta físicamente con el uso, de la misma forma que un puente o un edificio.", answer: "F" },
        { text: "La corrección (correctness) se considera la cualidad más básica de todas, porque ninguna otra cualidad compensa que un sistema no haga lo que su especificación indica.", answer: "V" },
        { text: "La confiabilidad se mide contra una especificación formal, mientras que la corrección es una medida probabilística basada en el uso real.", answer: "F" },
        { text: "La mantenibilidad puede representar entre el 60% y el 80% del costo total de un sistema de software a lo largo de su ciclo de vida.", answer: "V" },
        { text: "Las cualidades de proceso vistas en clase son productividad, puntualidad (timeliness) y visibilidad.", answer: "V" },
        { text: "El rigor y la formalidad son exactamente lo mismo: dos palabras distintas para un único concepto.", answer: "F" },
        { text: "La separación de intereses puede pensarse como una aplicación específica de la estrategia general de “dividir y conquistar”.", answer: "V" },
        { text: "En un buen diseño modular, se busca que el acoplamiento entre módulos sea alto y la cohesión dentro de cada módulo sea baja.", answer: "F" },
        { text: "Un tipo de dato abstracto (TDA) especifica QUÉ operaciones se pueden hacer con un dato, sin especificar CÓMO están implementadas por dentro.", answer: "V" },
        { text: "Rational Rose es una herramienta CASE para modelado orientado a objetos, desarrollada originalmente por Rational Software.", answer: "V" },
        { text: "En un diagrama de casos de uso, un actor representa una funcionalidad concreta que el sistema ofrece a sus usuarios.", answer: "F" }
      ]
    },
    {
      id: "B",
      name: "Sección B — Opción Múltiple",
      level: "Nivel intermedio",
      type: "mc",
      questions: [
        { text: "Según la definición del IEEE, la Ingeniería de Software es:", options: { a: "Solo la actividad de escribir código de forma eficiente", b: "La aplicación de un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software", c: "Un conjunto de lenguajes de programación orientados a objetos", d: "La disciplina que estudia exclusivamente las pruebas de software" }, answer: "b" },
        { text: "¿Cuál de los siguientes NO es uno de los tipos de sistemas de software vistos en la Unidad 1?", options: { a: "Sistemas de información", b: "Sistemas embebidos", c: "Sistemas de tiempo real", d: "Sistemas de compresión de audio" }, answer: "d" },
        { text: "La “Ley de Brooks”, derivada del caso del desarrollo del OS/360 de IBM, establece que:", options: { a: "Agregar más gente a un proyecto de software atrasado lo atrasa todavía más", b: "Todo software debe probarse al 100% antes de entregarse", c: "El software nunca se desgasta con el tiempo", d: "Los proyectos ágiles nunca fallan" }, answer: "a" },
        { text: "¿Qué modelo de proceso, publicado por Barry Boehm en 1986, combina ideas del modelo en cascada con el desarrollo iterativo y la gestión explícita de riesgos?", options: { a: "Modelo espiral", b: "RUP", c: "Kanban", d: "CMM" }, answer: "a" },
        { text: "Las etapas del ciclo de vida del software, en el orden en que se presentaron en clase, son:", options: { a: "Diseño, requisitos, análisis, pruebas, implementación, despliegue, mantenimiento", b: "Requisitos, análisis, diseño, implementación, pruebas, despliegue, mantenimiento", c: "Análisis, requisitos, pruebas, diseño, implementación, mantenimiento, despliegue", d: "Implementación, requisitos, análisis, diseño, pruebas, mantenimiento, despliegue" }, answer: "b" },
        { text: "¿Cuál de las siguientes es una cualidad EXTERNA del software (visible para el usuario final)?", options: { a: "Comprensibilidad del código", b: "Modularidad", c: "Facilidad de uso", d: "Estructura interna del código" }, answer: "c" },
        { text: "La capacidad de un sistema de comportarse razonablemente ante entradas inválidas o condiciones anómalas, sin colapsar de forma catastrófica, se llama:", options: { a: "Corrección", b: "Robustez", c: "Portabilidad", d: "Reusabilidad" }, answer: "b" },
        { text: "¿Cuál de las siguientes NO es una métrica de calidad de software vista en clase?", options: { a: "Complejidad ciclomática", b: "MTBF (tiempo medio entre fallas)", c: "Puntos de función", d: "Índice de masa corporal" }, answer: "d" },
        { text: "El modelo GQM propone definir, en este orden:", options: { a: "Métrica, pregunta, objetivo", b: "Objetivo, pregunta, métrica", c: "Pregunta, objetivo, métrica", d: "Objetivo, métrica, pregunta" }, answer: "b" },
        { text: "¿Cuál de los siguientes NO es uno de los 7 principios de la Ingeniería de Software vistos en la Unidad 3?", options: { a: "Modularidad", b: "Anticipación al cambio", c: "Generalidad", d: "Virtualización" }, answer: "d" },
        { text: "En un buen diseño modular, se busca combinar:", options: { a: "Alto acoplamiento y alta cohesión", b: "Bajo acoplamiento y baja cohesión", c: "Bajo acoplamiento y alta cohesión", d: "Alto acoplamiento y baja cohesión" }, answer: "c" },
        { text: "El principio de ocultamiento de información (information hiding) fue propuesto en 1972 por:", options: { a: "David Parnas", b: "Barry Boehm", c: "Winston Royce", d: "Fred Brooks" }, answer: "a" },
        { text: "En Rational Rose, ¿qué panel muestra, en forma de árbol jerárquico, todos los elementos del modelo (paquetes, clases, casos de uso, diagramas)?", options: { a: "Ventana de documentación", b: "Barra de herramientas (Toolbar)", c: "Browser (navegador de modelo)", d: "Diagram Window" }, answer: "c" },
        { text: "La técnica de modularización que organiza el sistema en objetos, combinando datos y comportamiento relacionados con una misma entidad, se llama:", options: { a: "Descomposición funcional", b: "Modularización orientada a objetos", c: "Modularización orientada a datos", d: "Criterios de Parnas exclusivamente" }, answer: "b" },
        { text: "Según la clasificación vista en clase, ¿cuál es el nivel de cohesión de MAYOR calidad?", options: { a: "Cohesión coincidental", b: "Cohesión temporal", c: "Cohesión funcional", d: "Cohesión lógica" }, answer: "c" },
        { text: "¿Cuál es el nivel de acoplamiento MÁS deseable entre dos módulos?", options: { a: "Acoplamiento de contenido", b: "Acoplamiento común", c: "Acoplamiento de control", d: "Acoplamiento de datos" }, answer: "d" },
        { text: "La técnica que consiste en tomar la descripción de un problema e identificar sustantivos como clases candidatas y verbos como operaciones candidatas se llama:", options: { a: "Tarjetas CRC", b: "Análisis de sustantivos y verbos", c: "Diagrama entidad-relación", d: "Diseño por contrato" }, answer: "b" },
        { text: "Las tarjetas CRC representan cada clase candidata dividida en tres partes:", options: { a: "Nombre, atributos, operaciones", b: "Nombre, responsabilidades, colaboradores", c: "Actor, caso de uso, relación", d: "Precondición, postcondición, invariante" }, answer: "b" },
        { text: "En el diseño orientado a objetos, la visibilidad “protegida” permite el acceso a un atributo u operación:", options: { a: "Desde cualquier parte del sistema", b: "Solo desde la propia clase", c: "Desde la clase y sus subclases", d: "Solo desde las clases de interfaz de usuario" }, answer: "c" },
        { text: "¿Cuál de los siguientes NO es un principio general de diseño de interfaz de usuario visto en clase?", options: { a: "Consistencia", b: "Retroalimentación (feedback)", c: "Prevención de errores", d: "Maximizar el uso de memoria RAM" }, answer: "d" }
      ]
    },
    {
      id: "C",
      name: "Sección C — Completar",
      level: "Nivel intermedio-alto",
      type: "fill",
      questions: [
        { text: "La especificación de software se ubica del lado del ______ (qué debe hacer el sistema), mientras que el diseño se ubica del lado del ______ (cómo se va a construir la solución).", answer: "QUÉ / CÓMO", accept: ["que", "como", "qué / cómo", "que/como"] },
        { text: "El estilo de especificación que usa lenguaje natural, sin ninguna notación formal específica, se denomina especificación ______.", answer: "informal", accept: ["informal"] },
        { text: "El estilo de especificación que usa una notación gráfica o estructurada estandarizada (como UML), más precisa que el lenguaje natural pero sin la rigurosidad matemática completa, se denomina especificación ______.", answer: "semi-formal", accept: ["semi-formal", "semiformal", "semi formal"] },
        { text: "Una buena especificación debe ser completa, consistente, no ambigua y ______.", answer: "verificable", accept: ["verificable"] },
        { text: "La condición que debe cumplirse ANTES de ejecutar una operación se llama ______, y la que debe cumplirse DESPUÉS de ejecutarla (si la anterior se cumplió) se llama ______.", answer: "precondición / postcondición", accept: ["precondicion", "postcondicion", "precondición / postcondición", "precondicion/postcondicion"] },
        { text: "Una condición que debe mantenerse siempre verdadera, y no solo antes o después de una operación puntual, se llama ______.", answer: "invariante", accept: ["invariante"] },
        { text: "El modelo gráfico compuesto por lugares, transiciones, fichas (tokens) y arcos, especialmente adecuado para representar concurrencia y recursos compartidos, se llama ______.", answer: "red de Petri", accept: ["red de petri", "redes de petri"] },
        { text: "En un Diagrama Entidad-Relación, el atributo (o combinación de atributos) que identifica de forma única a cada instancia de una entidad se llama ______.", answer: "clave primaria", accept: ["clave primaria"] },
        { text: "Una relación muchos a muchos (N:M) se resuelve típicamente creando una entidad ______ que la descompone en dos relaciones uno a muchos.", answer: "intermedia (de asociación)", accept: ["intermedia", "de asociacion", "intermedia de asociacion"] },
        { text: "Las especificaciones ______ describen un tipo de dato abstracto mediante ecuaciones llamadas axiomas, sin describir cómo está implementado internamente.", answer: "algebraicas", accept: ["algebraicas", "algebraica"] },
        { text: "La capacidad de vincular cada parte de una especificación con el requisito que la originó y con el diseño o la prueba que la implementa/verifica se llama ______.", answer: "trazabilidad", accept: ["trazabilidad"] },
        { text: "El desgaste o desactualización de una especificación, cuando esta deja de reflejar fielmente el sistema real, se conoce informalmente como “______”.", answer: "spec rot", accept: ["spec rot", "specrot"] }
      ]
    },
    {
      id: "D",
      name: "Sección D — Análisis y Aplicación",
      level: "Nivel difícil",
      type: "mixed",
      questions: [
        { type: "mc", text: "Un sistema guarda el año con solo dos dígitos, sin prever que seguiría funcionando después del año 2000 (problema Y2K). Este caso histórico es un ejemplo claro de la falta de aplicación de qué principio de la Unidad 3:", options: { a: "Modularidad", b: "Anticipación al cambio", c: "Rigor y formalidad", d: "Incrementalidad" }, answer: "b" },
        { type: "vf", text: "Un proyecto puede tener un buen “proceso” de desarrollo (muy productivo y puntual) y, aun así, producir un software de mala calidad como producto final.", answer: "V" },
        { type: "mc", text: "Para un sistema de historia clínica electrónica de un hospital, según su área de aplicación (sistema de misión crítica / de información sensible), ¿qué combinación de cualidades resultaría más prioritaria?", options: { a: "Facilidad de uso y portabilidad", b: "Confiabilidad y seguridad (protección de datos del paciente)", c: "Reusabilidad y generalidad", d: "Rendimiento gráfico y estética visual" }, answer: "b" },
        { type: "mc", text: "La especificación de cualidad “El sistema debe responder rápido” se considera mal redactada porque:", options: { a: "Usa una notación formal innecesaria para el caso", b: "No es medible ni verificable en términos concretos", c: "Está escrita en notación UML", d: "Contradice las etapas del ciclo de vida del software" }, answer: "b" },
        { type: "vf", text: "La incrementalidad, como principio de la Unidad 3, es exactamente equivalente a seguir la metodología Scrum: todo sistema incremental necesariamente sigue Scrum.", answer: "F" },
        { type: "mc", text: "Para especificar el ciclo de vida de un Préstamo con los estados “Activo”, “Atrasado” y “Devuelto”, la técnica operacional más adecuada, entre las vistas en la Unidad 5, es:", options: { a: "Diagrama de Flujo de Datos (DFD)", b: "Máquina de estados finitos (FSM)", c: "Especificación algebraica", d: "Diagrama entidad-relación" }, answer: "b" },
        { type: "mc", text: "Un módulo llamado “Utilidades” contiene funciones para formatear fechas, calcular impuestos y enviar correos electrónicos, sin relación funcional clara entre ellas. Este módulo probablemente tiene:", options: { a: "Cohesión funcional (el nivel ideal)", b: "Cohesión coincidental o lógica (un nivel bajo)", c: "Acoplamiento de datos (el nivel ideal)", d: "Alta cohesión y bajo acoplamiento a la vez" }, answer: "b" },
        { type: "vf", text: "La especificación basada en modelos (como Z o VDM) se diferencia de la especificación algebraica en que la primera define explícitamente un modelo de estado abstracto del sistema.", answer: "V" },
        { type: "mc", text: "¿Cuál es la diferencia principal entre “verificar” y “validar” una especificación?", options: { a: "Verificar y validar son sinónimos exactos dentro de la especificación de software", b: "Verificar evalúa la calidad interna (consistencia, completitud); validar evalúa si la especificación refleja las necesidades reales del cliente", c: "Verificar se hace después de implementar el sistema; validar se hace antes de especificar", d: "Solo es posible validar una especificación formal, nunca una informal" }, answer: "b" },
        { type: "fill", text: "Si un Socio puede tener varios Préstamos, pero cada Préstamo pertenece a un único Socio, esa relación se describe con una cardinalidad/multiplicidad de tipo ______ a ______.", answer: "uno (1) a muchos (N) — 1:N", accept: ["uno a muchos", "1:n", "1 a n", "1 a muchos"] },
        { type: "mc", text: "El “Diseño por Contrato” (Design by Contract) aplica sistemáticamente, a nivel de todo un sistema orientado a objetos, la idea de:", options: { a: "Diagramas de flujo", b: "Precondiciones y postcondiciones", c: "Redes de Petri", d: "Descomposición funcional" }, answer: "b" },
        { type: "vf", text: "Según el modelo GQM, conviene elegir primero las métricas concretas a usar y, recién después, definir el objetivo de calidad que se persigue.", answer: "F" },
        { type: "mc", text: "BDD (Behavior-Driven Development) ocupa una posición intermedia entre los estilos de especificación porque:", options: { a: "Es completamente formal, igual que una especificación algebraica", b: "Usa una estructura fija y predecible (cercana a lo semi-formal), pero conserva vocabulario y redacción en lenguaje natural (cercana a lo informal)", c: "Solo puede aplicarse en sistemas de tiempo real", d: "Reemplaza por completo a las pruebas automatizadas del sistema" }, answer: "b" }
      ]
    }
  ]
};
