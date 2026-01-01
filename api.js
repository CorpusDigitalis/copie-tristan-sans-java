const SUPABASE_URL = 'https://recgvfcuxsonkhlyctrw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_MS-dVMY2bgi4ljM4tDTIdg_t4YKb80o';

export async function getSiteData() {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // 1. Détection du Slug
    let slug = hostname.split('.')[0];

    // 2. Forçage du profil "tristan" pour ton environnement de test actuel
    // On vérifie si on est sur GitHub, sur Cloudflare Pages ou dans ton dossier spécifique
    if (
        hostname.includes('github.io') || 
        hostname.includes('pages.dev') || 
        pathname.includes('copie-tristan-sans-java') ||
        hostname === 'localhost'
    ) {
        slug = 'tristan'; 
    }

    console.log("🔍 Tentative de chargement du profil pour :", slug);

    try {
        const url = `${SUPABASE_URL}/rest/v1/profiles?slug=eq.${slug}&select=*,publications(*),interventions(*),courses(*)`;
        
        const response = await fetch(url, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });

        const data = await response.json();

        if (data && data.length > 0) {
            console.log("✅ Données de " + slug + " chargées.");
            return data[0];
        } else {
            console.warn("⚠️ Aucun profil trouvé pour :", slug);
            return null;
        }
    } catch (error) {
        console.error("❌ Erreur de connexion Supabase :", error);
        return null;
    }
}
