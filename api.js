const SUPABASE_URL = 'https://recgvfcuxsonkhlyctrw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_MS-dVMY2bgi4ljM4tDTIdg_t4YKb80o';

export async function getSiteData() {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    let slug = hostname.split('.')[0];

    // Forçage du profil "tristan" pour tes environnements de test
    if (
        hostname.includes('github.io') || 
        hostname.includes('pages.dev') || 
        pathname.includes('copie-tristan-sans-java') ||
        hostname === 'localhost'
    ) {
        slug = 'tristan'; 
    }

    try {
        const url = `${SUPABASE_URL}/rest/v1/profiles?slug=eq.${slug}&select=*,publications(*),interventions(*),courses(*)`;
        const response = await fetch(url, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });
        const data = await response.json();
        return data[0] || null;
    } catch (error) {
        console.error("Erreur base de données:", error);
        return null;
    }
}
