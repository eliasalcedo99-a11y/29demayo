# Deployment — 29 de Mayo

Guía rápida para que el sitio funcione en producción con todas sus features.

## 🔑 Variables de entorno necesarias

El sitio funciona sin ellas, pero algunas features quedan en modo "demo":

| Variable | Para qué sirve | Sin ella |
|---|---|---|
| `RESEND_API_KEY` | Newsletter funcional | El formulario da error 500 |
| `RESEND_AUDIENCE_ID` | Añadir a lista de suscriptores | Solo envía welcome email |
| `ANTHROPIC_API_KEY` | Chat "Pregunta al libro" con IA real | Usa 8 respuestas pre-escritas |

## ⚙️ Cómo añadirlas en Netlify

### 1. Conseguir las claves

#### Anthropic (Claude)
1. Ve a [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
2. Inicia sesión (o crea cuenta gratis)
3. Click en **"Create Key"** → ponle nombre `29demayo-web-prod`
4. Copia la key (empieza con `sk-ant-...`) — **solo se muestra una vez**
5. Ten en cuenta: el modelo Haiku 4.5 cuesta ~$1 por cada 1.000 preguntas. Para empezar tienes $5 gratis al crear cuenta.

#### Resend
1. Ve a [resend.com/api-keys](https://resend.com/api-keys)
2. Click en **"Create API Key"** → ponle nombre `29demayo-prod`
3. Permission: **Full access** (o "Sending access" si quieres más restrictivo)
4. Copia la key (empieza con `re_...`)
5. Para el audience ID: ve a Audiences → crea uno → copia su ID (formato uuid)

### 2. Añadirlas en Netlify

1. Abre [app.netlify.com](https://app.netlify.com) y entra a tu sitio `29demayo`
2. Menú lateral: **Site configuration** → **Environment variables**
3. Click en **"Add a variable"** → **"Add a single variable"**
4. Repite para cada una:
   - Key: `ANTHROPIC_API_KEY` · Value: pega la key
   - Key: `RESEND_API_KEY` · Value: pega la key
   - Key: `RESEND_AUDIENCE_ID` · Value: pega el UUID
5. Scopes: déjalo en "All scopes" (default)
6. Click en **"Create variable"**

### 3. Forzar redeploy

Las variables solo se cargan en el siguiente despliegue:

1. Menú lateral: **Deploys**
2. Botón arriba derecha: **"Trigger deploy"** → **"Deploy site"**
3. Espera ~1 minuto

¡Listo! Las features ya funcionan con las claves reales.

## 🧪 Cómo verificar que funciona

### Ask the Book
1. Abre tu sitio en una pestaña
2. Scroll hasta pasar el hero
3. Click en el botón "Pregunta al libro" abajo-izquierda
4. Escribe una pregunta nueva (no las sugeridas) tipo: "¿Qué te inspiró a escribir este libro?"
5. Si responde con texto largo y específico → ✅ IA real
6. Si responde con una frase corta predefinida → ⚠️ está usando fallback (revisa la key)

### Newsletter
1. Scroll hasta la sección Newsletter
2. Introduce un email tuyo de prueba
3. Mira tu bandeja: debe llegar el welcome email
4. Mira en [resend.com/audiences](https://resend.com/audiences): debe aparecer el contacto

## 🔒 Seguridad

- ✅ Las claves están **solo en Netlify**, cifradas, accesibles solo desde funciones serverless
- ✅ `.env` está en `.gitignore` — nunca se sube al repo
- ✅ El cliente JavaScript **nunca ve las claves**: las llamadas pasan por `/api/*`
- ❌ Si por error commiteas una clave: revócala inmediatamente y crea una nueva

## 💰 Costes esperados (estimación)

| Servicio | Tier gratis | Coste si lo superas |
|---|---|---|
| **Anthropic Claude Haiku 4.5** | $5 al crear cuenta | ~$1 / 1000 preguntas |
| **Resend** | 100 emails/día, 3000/mes | $20/mes para 50k emails |
| **Netlify** | 100GB ancho/mes, 300 build min | $19/mes hosting Pro |

Para una landing de un libro recién lanzado, **todo gratis** durante meses.
