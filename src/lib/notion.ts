// Cliente de Notion seguro (Safe Client)
// Si la API key no está definida, no rompe la web en desarrollo.

export const isNotionConfigured = () => {
  return !!import.meta.env.NOTION_API_KEY && !!import.meta.env.NOTION_DATABASE_ID;
};

export const getNotionPosts = async () => {
  if (!isNotionConfigured()) {
    console.warn("⚠️ NOTION_API_KEY o NOTION_DATABASE_ID no definidos. Retornando posts de prueba.");
    return [
      {
        id: "1",
        title: "El primer día",
        date: "2023-05-29",
        slug: "el-primer-dia",
        type: "Artículo"
      },
      {
        id: "2",
        title: "Escribir para sanar",
        date: "2023-09-14",
        slug: "escribir-para-sanar",
        type: "Vídeo"
      }
    ];
  }

  // Aquí irá la lógica real de @notionhq/client cuando conectemos la API
  return [];
};
