
// REMPLACE PAR TES INFOS SUPABASE (Dashboard -> Settings -> API)
const SUPABASE_URL = 'https://recgvfcuxsonkhlyctrw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_MS-dVMY2bgi4ljM4tDTIdg_t4YKb80o';

/**
 * Fonction universelle pour récupérer les données du prof actuel
 */
export async function getSiteData() {
    // 1. Détection automatique du prof via le sous-domaine
    const hostname = window.location.hostname;
    let slug = hostname.split('.')[0];
    
    // Pour tes tests en local, on force le slug 'tristan'
    if (slug === 'localhost' || slug === '127' || slug === '127.0.0.1') {
        slug = 'tristan'; 
    }

    try {
        // 2. Requête groupée : on récupère TOUT (Profil, Publis, Interventions, Cours)
        const url = `${SUPABASE_URL}/rest/v1/profiles?slug=eq.${slug}&select=*,publications(*),interventions(*),courses(*)`;
        
        const response = await fetch(url, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });

        if (!response.ok) throw new Error("Erreur Supabase");

        const data = await response.json();
        return data[0] || null; // On renvoie le premier prof trouvé ou null
    } catch (error) {
        console.error("Erreur de connexion à la base de données:", error);
        return null;
    }
}
