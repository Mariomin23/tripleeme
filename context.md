## 1. Vista de Escritorio (Desktop UI/UX)

La versión de escritorio debe garantizar un impacto inmediato y guiar al usuario de forma intuitiva a través de una jerarquía visual clara.

### 📋 Checklist de Evaluación
- **Propuesta de Valor (Above the Fold):** Evaluar si en los primeros 3 segundos queda claro el propósito de la empresa (qué hace, para quién y qué beneficio aporta) sin necesidad de hacer *scroll*.
- **Llamadas a la Acción (CTAs):** El botón de acción principal debe tener un color de alto contraste con respecto al fondo, situarse en la zona superior derecha del menú y de forma prominente en el banner principal. Evitar copys vagos como *"Saber más"* o *"Info"*; priorizar verbos de acción (*"Agendar Consultoría"*, *"Ver Servicios"*).
- **Regla de los 3 Clics:** Verificar que cualquier servicio, caso de éxito o página de contacto sea accesible en un máximo de 3 clics desde la Home.
- **Prueba Social (Social Proof):** Garantizar la inclusión de logotipos de clientes, testimonios reales (con nombre, cargo y fotografía) o datos métricos de éxito en la página principal para mitigar la fricción de desconfianza.
- **Espaciado y Aire Visual:** Controlar que la densidad de texto no sature al usuario. Uso riguroso de espacios en blanco (*white space*) para separar bloques temáticos.

---

## 2. Vista Responsive (Mobile UX)

El tráfico móvil suele representar la mayoría de las sesiones. La experiencia táctil y las limitaciones de pantalla exigen una disposición radicalmente más limpia.

### 📋 Checklist de Evaluación
- **Menú Hamburguesa:** - Al desplegarse, los enlaces deben tener un tamaño de fuente legible (mínimo 18px).
  - El botón de cierre (`X`) debe ser fácilmente accionable.
- **Zonas de Interacción Táctil (Tap Targets):** Todos los botones, enlaces y campos de formulario deben contar con un área activa mínima de **48x48 píxeles** y una separación de al menos 8px entre ellos para evitar clics accidentales.
- **Escala Tipográfica Adaptativa:** Los títulos principales (`H1`, `H2`) que en desktop usan tamaños grandes deben escalar proporcionalmente en móvil para evitar saltos de línea huérfanos o desbordamientos laterales (*overflow*). La tipografía base para párrafos nunca debe ser inferior a **16px**.
- **Gestión de Tablas y Elementos Anchos:** Si existen tablas comparativas o de precios, estas deben transformarse en un formato de tarjetas verticales (*cards*) o implementar un contenedor con `overflow-x: auto` junto a un indicador visual de que se puede hacer *scroll* horizontal.
- **Fijación de Elementos (Sticky CTAs):** Se recomienda evaluar la implementación de un botón de acción flotante o fijado en la parte inferior de la pantalla móvil (ej. *"Contactar"* o *"Llamar"*) visible durante el scroll.

---

## 3. Rendimiento Técnico y WPO (Web Performance Optimization)

La velocidad afecta directamente a la tasa de rebote y al posicionamiento orgánico en motores de búsqueda.

### 📊 Métricas Críticas a Auditar (Core Web Vitals)
- **LCP (Largest Contentful Paint):** El elemento principal de la web (usualmente la imagen de cabecera o el H1) debe renderizarse en **menos de 2.5 segundos**.
- **INP (Interaction to Next Paint):** El tiempo de respuesta de la web ante un clic del usuario debe ser inferior a **200 milisegundos**.
- **CLS (Cumulative Layout Shift):** Movimientos inesperados del diseño durante la carga (puntuación ideal **inferior a 0.1**). Evitar insertar imágenes o scripts sin dimensiones explícitas asignadas en el CSS/HTML.
- **Optimización de Imágenes:** Inspeccionar que los recursos visuales se entreguen en formatos de nueva generación (**WebP** o **AVIF**). Las imágenes deben estar comprimidas y dimensionadas al tamaño máximo real en el que se van a mostrar.
- **Minificación de Recursos:** Verificar la correcta minificación y combinación de archivos CSS y JavaScript, así como la eliminación del código que no se use en la carga inicial (*Deffered/Async*).

---

## 4. Campos de Formulario y Captación de Leads

El formulario es el cuello de botella de la conversión. Optimizar su usabilidad es clave para aumentar los contactos recibidos.

### ✍️ Criterios de Optimización
- **Reducción de Campos:** Mantener únicamente los campos estrictamente necesarios (ej. Nombre, Email y Mensaje). Solicitar el teléfono o la facturación de la empresa solo si es un filtro indispensable.
- **Etiquetas Claras (Labels vs Placeholders):** No sustituir las etiquetas externas del campo por texto de sugerencia (*placeholder*) difuminado. Al escribir, el usuario pierde el contexto de qué campo está rellenando si no hay una etiqueta visible externa.
- **Inputs Adaptativos en Móvil:** Configurar correctamente los atributos HTML para invocar el teclado nativo adecuado:
  - `type="email"` para habilitar el carácter `@`.
  - `type="tel"` para forzar el teclado numérico en teléfonos móviles.
- **Mensajes de Error en Tiempo Real:** Validación inmediata. Si el usuario introduce mal un correo, el error debe aparecer al cambiar de campo, no después de presionar el botón de enviar y recargar la página.

---

## 5. SEO Técnico y Arquitectura de Contenidos

Garantizar que los rastreadores de los motores de búsqueda entiendan la estructura del sitio perfectamente.

### 🔍 Puntos de Control
- **Estructura de Encabezados (Heading Tags):** Comprobar que existe **un solo H1 por página**, el cual incluya la palabra clave principal. Los H2, H3 y sucesivos deben seguir un orden estrictamente jerárquico y no utilizarse para dar formato estético a textos genéricos.
- **Atributos Alt en Imágenes:** Cada imagen con valor informativo debe poseer una etiqueta descriptiva `alt` optimizada para accesibilidad web y SEO de imágenes.
- **Estructura de URLs:** Deben ser limpias, semánticas y amigables (ej. `tripleeme.es/servicios/nombre-servicio` en lugar de identificadores con números o parámetros extraños).

---

## 6. Enfoque Estratégico y Copywriting

El tono y la forma en que se comunica el valor diferencian a un sitio corporativo promedio de uno de alto rendimiento.

### 💡 Inputs Estratégicos
- **Giro Centrado en el Cliente:** Auditar los textos bajo la regla de comunicación efectiva. Cambiar el enfoque egocéntrico (*"Somos especialistas en..."*, *"Llevamos 10 años..."*) por un enfoque de beneficio para el usuario (*"Consigue escalar tu negocio a través de..."*, *"Solucionamos tu problema de X mediante..."*).
- **Consistencia de Marca:** Verificar la armonía cromática y el uso de un máximo de dos familias tipográficas en todo el sitio para dar una imagen sólida y profesional.2