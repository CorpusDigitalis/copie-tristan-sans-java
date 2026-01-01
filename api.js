const SUPABASE_URL = 'https://recgvfcuxsonkhlyctrw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_MS-dVMY2bgi4ljM4tDTIdg_t4YKb80o';

/**
 * Récupère les données complètes du profil et des tables liées.
 * Gère la détection automatique du "slug" (le nom du prof) selon l'URL.
 */
export async function getSiteData() {
    const hostname = window.location.hostname;
    
    // 1. Détection du Slug
    // Par défaut, on prend le premier mot de l'URL (ex: 'tristan' dans tristan.site.com)
    let slug = hostname.split('.')[0];

    // 2. Logique de Test (GitHub / Cloudflare / Localhost)
    // Si on est sur les domaines de test ou en local, on force 'tristan' 
    // pour éviter d'avoir un site vide pendant le développement.
    if (
        slug.includes('github') || 
        hostname.includes('pages.dev') || 
        hostname === 'localhost' || 
        hostname === '127.0.0.1'
    ) {
        slug = 'tristan'; 
    }

    console.log("🔍 Recherche des données pour le slug :", slug);

    try {
        // 3. Requête Supabase avec jointures (select=*,publications(*), etc.)
        const url = `${SUPABASE_URL}/rest/v1/profiles?slug=eq.${slug}&select=*,publications(*),interventions(*),courses(*)`;
        
        const response = await fetch(url, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`Erreur réseau : ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // 4. Retourne le premier profil trouvé (ou null)
        if (data && data.length > 0) {
            console.log("✅ Données chargées avec succès.");
            return data[0];
        } else {
            console.warn("⚠️ Aucun profil trouvé dans Supabase pour le slug :", slug);
            return null;
        }

    } catch (error) {
        console.error("❌ Erreur critique lors de l'accès à Supabase :", error);
        return null;
    }
}
