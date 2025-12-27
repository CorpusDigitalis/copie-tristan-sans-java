
const SUPABASE_URL = 'https://recgvfcuxsonkhlyctrw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_MS-dVMY2bgi4ljM4tDTIdg_t4YKb80o';

export async function getSiteData() {
    const hostname = window.location.hostname;
    let slug = hostname.split('.')[0];
    
    // Si tu es sur github.io, on détecte le slug différemment ou on le force pour le test
    if (slug.includes('github') || slug === '127') {
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
Clique sur "Commit changes...".

3. Modifier header.html (sur GitHub)
Tu dois remplacer l'ancien script qui lisait data.json.

Édite header.html.

Remplace tout le bloc <script> par celui-ci :

JavaScript

<script type="module">
  import { getSiteData } from './api.js';

  getSiteData().then(prof => {
    if (!prof) return;

    // Titre dynamique
    const siteTitle = document.getElementById('header-site-title');
    if (prof.site_title) siteTitle.innerText = prof.site_title;

    // Menu dynamique
    const menuContainer = document.getElementById('dynamic-menu');
    if (prof.menu_config && prof.menu_config.length > 0) {
      menuContainer.innerHTML = prof.menu_config.map(item => 
        `<li><a href="${item.url || '#'}">${item.titre || 'Lien'}</a></li>`
      ).join('');
    }
  });
</script>
4. Modifier index.html (sur GitHub)
C'est ici qu'on gère l'affichage de ta biographie.

Édite index.html.

Modifie la fonction loadHTML pour qu'elle puisse charger des modules (indispensable pour que le header s'affiche) :

JavaScript

function loadHTML(id, url) {
  fetch(url)
    .then(r => r.text())
    .then(html => {
      const el = document.getElementById(id);
      el.innerHTML = html;
      // Ré-exécution des scripts pour le header/footer
      el.querySelectorAll('script').forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    });
}
