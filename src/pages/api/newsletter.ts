import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const email: string | undefined = body?.email?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Email inválido.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const key = import.meta.env.RESEND_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: 'Servidor no configurado.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const resend = new Resend(key);

    // Add contact to Resend audience
    await resend.contacts.create({
      email,
      audienceId: import.meta.env.RESEND_AUDIENCE_ID ?? '',
      unsubscribed: false,
    });

    // Send welcome email
    await resend.emails.send({
      from:    'Elías Alcedo <eliasalcedoprof@gmail.com>',
      to:      email,
      subject: 'Bienvenido/a — 29 de Mayo',
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <style>
            body { background: #080608; color: #F2EAE0; font-family: Georgia, serif; margin: 0; padding: 40px 20px; }
            .container { max-width: 560px; margin: 0 auto; }
            h1 { font-size: 2rem; color: #F2EAE0; margin-bottom: 0.5rem; }
            p  { color: #8A7A74; line-height: 1.7; margin-bottom: 1.2rem; }
            .quote { text-align: center; font-style: italic; color: #F2EAE0; margin: 2.5rem 1rem; font-size: 1.1rem; line-height: 1.6; }
            .quote::before { content: ''; display: block; width: 2rem; height: 1px; background: #A31515; margin: 0 auto 1rem; }
            .quote::after { content: ''; display: block; width: 2rem; height: 1px; background: #A31515; margin: 1rem auto 0; }
            .btn { display: inline-block; padding: 0.8rem 2rem; background: #A31515; color: #F2EAE0; text-decoration: none; font-family: monospace; letter-spacing: 0.1em; font-size: 0.85rem; }
            .footer { margin-top: 3rem; font-size: 0.75rem; color: #8A7A74; }
          </style>
        </head>
        <body>
          <div class="container">
            <p style="color:#A31515; letter-spacing:0.3em; font-size:0.75rem; font-family:monospace;">ELÍAS ALCEDO ESPINOSA</p>
            <h1>29 de Mayo</h1>
            <p>Gracias por unirte. Recibirás mis artículos, reflexiones y novedades directamente aquí, sin algoritmos de por medio.</p>
            <div class="quote">
              "De la herida nació la palabra, y al nombrar el dolor, la soledad se volvió abrazo."
            </div>
            <p>Si aún no has leído el libro, puedes conseguirlo en Amazon:</p>
            <a class="btn" href="https://amzn.to/3RlmkaH">Leer en Amazon →</a>
            <div class="footer">
              <p>Puedes darte de baja en cualquier momento respondiendo a este correo.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Newsletter error:', err);
    return new Response(JSON.stringify({ error: 'Error al procesar. Inténtalo de nuevo.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
