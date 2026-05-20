import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Endpoint placeholder para "Pregunta al libro".
 *
 * Devuelve 501 (Not Implemented) por defecto — el cliente cae en las
 * respuestas pre-escritas locales.
 *
 * Para activar la IA real:
 * 1. Añade ANTHROPIC_API_KEY (o OPENAI_API_KEY) en Netlify
 * 2. Descomenta el bloque de Claude/OpenAI más abajo
 * 3. Provee el contexto del libro (extracto de chapters como BOOK_CONTEXT)
 */

const BOOK_CONTEXT = `
Eres una IA literaria que representa el libro «29 de Mayo» de Elías Alcedo Espinosa.

DATOS DEL LIBRO:
- Autor: Elías Alcedo Espinosa (18 años, Cádiz, España)
- Tema: Memoria autobiográfica del año 2023, mes a mes
- Eje central: el 29 de mayo de 2023 muere su tío Enrique "Kike" en un accidente de moto cuando una vaca se cruzó en una curva
- Tono: íntimo, honesto, sin sentimentalismos, con momentos de luz y sombra
- Estructura: 12 capítulos, uno por mes del año 2023
- Estilo: prosa literaria con momentos de diario, diálogos, citas

PERSONAJES CLAVE:
- Elías: narrador, joven gaditano de 16-17 años en 2023
- Kike (Enrique): tío del autor, figura mentora, muere en mayo
- Silvia: madre del autor
- Paco: padre del autor
- Antonia: abuela
- Migue y Cristian: amigos del autor

TEMAS:
- Duelo no lineal
- La escritura como refugio (la "libreta verde")
- Familia
- Motos como símbolo de conexión
- Resiliencia adolescente
- Memoria y olvido

INSTRUCCIONES:
- Responde en español, en tono cálido y literario
- NO destripes los detalles concretos del libro
- Habla del libro como si fueras su voz/esencia, no como una IA impersonal
- Máx 80 palabras por respuesta
- Si la pregunta no es sobre el libro, redirige amablemente
- Cierra invitando a leer el libro o la demo gratuita
`;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const question: string | undefined = body?.question?.trim();

  if (!question || question.length > 500) {
    return new Response(JSON.stringify({ error: 'Pregunta inválida.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = import.meta.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    // No API key configured — devuelve 501 para que el cliente use fallbacks
    return new Response(JSON.stringify({
      error: 'IA no configurada en este entorno.',
      hint:  'Configura ANTHROPIC_API_KEY en variables de entorno.',
    }), {
      status: 501,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Llamada a Claude API
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':       'application/json',
        'x-api-key':          apiKey,
        'anthropic-version':  '2023-06-01',
      },
      body: JSON.stringify({
        model:       'claude-haiku-4-5',
        max_tokens:  300,
        system:      BOOK_CONTEXT,
        messages: [
          { role: 'user', content: question },
        ],
      }),
    });

    if (!claudeRes.ok) {
      const errText = await claudeRes.text();
      console.error('Claude API error:', errText);
      return new Response(JSON.stringify({ error: 'Error al consultar IA.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data  = await claudeRes.json();
    const reply = data?.content?.[0]?.text ?? '';

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Ask-book error:', err);
    return new Response(JSON.stringify({ error: 'Error al procesar.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
