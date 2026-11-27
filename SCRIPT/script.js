/* Website behaviour. Edit CONFIG/config.js for all portfolio content. */
const cfg = SITE_CONFIG;
const artist = cfg.artist || {};
const setText = (id, value) => { const el = document.getElementById(id); if (el && value !== undefined && value !== null) el.textContent = value; };

// Brand details
setText('brandLogo', cfg.logoText || 'SR');
setText('footerBrandLogo', cfg.logoText || 'SR');
setText('bookArtistName', cfg.name || 'SHIVA');
setText('footerArtistName', cfg.name || 'SHIVA RRAO');
if (cfg.footer && cfg.footer.line) setText('footerLine', cfg.footer.line);
document.querySelectorAll('[data-config="name"]').forEach(el => el.textContent = cfg.name || 'SHIVA RRAO');
document.querySelectorAll('[data-config="role"]').forEach(el => el.textContent = cfg.role || 'LIVE SINGER');
document.querySelectorAll('[data-config="tagline"]').forEach(el => el.textContent = cfg.tagline || 'MY VOICE MY IDENTITY');

// Artist profile
setText('artistAvailability', artist.availability);
setText('heroTitle', artist.heroTitle);
setText('heroTitleAccent', artist.heroTitleAccent);
setText('heroLead', artist.heroLead);
setText('heroDescription', artist.heroDescription);
setText('artistShowCount', artist.showCount);
setText('artistShowCountLabel', artist.showCountLabel);
setText('artistReach', artist.reach);
setText('artistReachLabel', artist.reachLabel);
setText('artistFormats', artist.showFormats);
setText('artistFormatsLabel', artist.showFormatsLabel);
setText('photoCaption', artist.photoCaption);
setText('artistVerticalText', artist.verticalText);
setText('heroCardBelowText', artist.verticalText || 'SINGER · PERFORMER · EVENT MANAGER');
setText('aboutHeading', artist.aboutHeading);
setText('aboutHeadingAccent', artist.aboutHeadingAccent);
setText('artistBiography', artist.biography);
const specialtyBox = document.getElementById('artistSpecialties');
if (specialtyBox && Array.isArray(artist.specialties)) specialtyBox.innerHTML = artist.specialties.map(item => `<span>${escapeHtml(item)}</span>`).join('');

// Artist photo
if (artist.photo) {
  const photoArea = document.querySelector('.photo-placeholder');
  if (photoArea) {
    const img = document.createElement('img');
    img.src = artist.photo;
    img.alt = `${cfg.name || 'Artist'} portrait`;
    img.className = 'artist-photo';
    img.onload = () => photoArea.classList.add('has-photo');
    img.onerror = () => img.remove();
    photoArea.prepend(img);
  }
}

// Separate Category-Wise Sections (each category has its own title & its own videos directly on the page)
const categorySections = document.getElementById('categorySections');
if (categorySections && Array.isArray(cfg.categories)) {
  const navBarHtml = `
    <div class="cat-jump-bar">
      ${cfg.categories.map(c => `<a class="cat-jump-pill" href="#cat-${escapeAttr(c.id)}">${escapeHtml(c.title)}</a>`).join('')}
    </div>
  `;
  categorySections.innerHTML = navBarHtml + cfg.categories.map((cat, i) => {
    const num = String(i + 1).padStart(2, '0');
    const catVideos = Array.isArray(cat.videos) ? cat.videos : [];
    const videosHtml = catVideos.length
      ? catVideos.map((v, vIdx) => {
          const derivedName = formatVideoTitle(v.title, v.url, cat.title);
          return `
          <article class="cat-pure-video-card" onclick="openCategoryCardModal(this)" data-vid-url="${escapeAttr(v.url)}" data-vid-poster="${escapeAttr(v.poster || cat.cover || '')}" data-vid-title="${escapeAttr(derivedName)}" data-vid-tag="${escapeAttr(cat.title)}">
            <video muted playsinline preload="auto" poster="${escapeAttr(v.poster || cat.cover || '')}">
              <source src="${escapeAttr(v.url)}#t=0.5" type="video/mp4" onerror="this.closest('.cat-pure-video-card').classList.add('video-not-uploaded')">
            </video>
            <button type="button" class="center-play-btn" aria-label="Play ${escapeAttr(derivedName)}"><svg class="play-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.8v12.4c0 .6.65.98 1.18.67l10.2-6.2a.78.78 0 0 0 0-1.34l-10.2-6.2A.78.78 0 0 0 8 5.8Z" fill="currentColor"/></svg></button>
            <div class="video-upload-placeholder">
              <span class="preview-note">♫</span>
              <small>Upload MP4: ${escapeHtml(v.url)}</small>
            </div>
            <div class="cat-visible-label">
              <span>${escapeHtml(cat.title)}</span>
              <h3>${escapeHtml(derivedName)}</h3>
            </div>
          </article>
        `;
        }).join('')
      : `<p class="cat-no-videos">No videos added in CONFIG/config.js for ${escapeHtml(cat.title)} yet.</p>`;

    return `
      <section class="section cat-standalone-section" id="cat-${escapeAttr(cat.id)}">
        <div class="section-head">
          <div>
            <div class="section-tag">02.${num} / ${escapeHtml(cat.subtitle || 'PERFORMANCE CATEGORY')}</div>
            <h2>${escapeHtml(cat.title)}</h2>
          </div>
          <p>${escapeHtml(cat.description || '')}</p>
        </div>
        <div class="cat-standalone-grid">
          ${videosHtml}
        </div>
      </section>
    `;
  }).join('');
}


// Video Preview Lightbox Modal
const vidModal = document.createElement('div');
vidModal.id = 'videoPreviewModal';
vidModal.className = 'vid-preview-modal';
vidModal.setAttribute('aria-hidden', 'true');
vidModal.innerHTML = `
  <div class="vid-preview-backdrop" data-close-vid-modal></div>
  <div class="vid-preview-box" role="dialog" aria-modal="true">
    <div class="vid-preview-top">
      <div>
        <span class="video-tag" id="vidModalTag">LIVE VIDEO</span>
        <h3 id="vidModalTitle">Video Title</h3>
      </div>
      <button class="vid-preview-close" type="button" data-close-vid-modal aria-label="Close preview">✕</button>
    </div>
    <div class="vid-preview-stage" id="vidModalStage"></div>
  </div>
`;
document.body.appendChild(vidModal);

function openVideoPreview(title, tag, mp4Url, posterUrl, externalUrl) {
  setText('vidModalTag', tag || 'PERFORMANCE PREVIEW');
  setText('vidModalTitle', title || 'Live Performance');
  const stage = document.getElementById('vidModalStage');
  if (mp4Url) {
    stage.innerHTML = `<video controls autoplay preload="metadata" poster="${escapeAttr(posterUrl || '')}"><source src="${escapeAttr(mp4Url)}" type="video/mp4"></video>`;
  } else if (externalUrl) {
    stage.innerHTML = `<div class="vid-ext-preview"><p>Open this performance directly on Instagram:</p><a class="button button-primary" href="${escapeAttr(externalUrl)}" target="_blank" rel="noopener">WATCH ON INSTAGRAM ↗</a></div>`;
  }
  vidModal.classList.add('open');
  vidModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeVideoPreview() {
  vidModal.classList.remove('open');
  vidModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  const stage = document.getElementById('vidModalStage');
  if (stage) stage.innerHTML = '';
}

vidModal.addEventListener('click', e => {
  if (e.target.hasAttribute('data-close-vid-modal')) closeVideoPreview();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && vidModal.classList.contains('open')) closeVideoPreview();
});

// Bind expand preview buttons on category videos
document.addEventListener('click', e => {
  const btn = e.target.closest('.vid-expand-btn');
  if (!btn) return;
  const card = btn.closest('.cat-standalone-video-card');
  if (!card) return;
  openVideoPreview(card.dataset.vidTitle, card.dataset.vidTag, card.dataset.vidUrl, card.dataset.vidPoster, '');
});


function openCategoryCardModal(card) {
  if (!card || card.classList.contains('video-not-uploaded')) return;
  openVideoPreview(
    card.dataset.vidTitle || 'Live Performance',
    card.dataset.vidTag || 'PERFORMANCE PREVIEW',
    card.dataset.vidUrl || '',
    card.dataset.vidPoster || '',
    ''
  );
}

// Services
const services = document.getElementById('services');
if (services) services.innerHTML = (cfg.services || []).map(([icon, title, desc]) =>
  `<article class="service-card"><div class="service-icon">${escapeHtml(icon)}</div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(desc)}</p></article>`
).join('');

// Moments in Music / Photo-Only Gallery — supports UNLIMITED photos!
const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid && cfg.gallery) {
  if (cfg.gallery.heading) setText('galleryHeading', cfg.gallery.heading);
  if (cfg.gallery.description) setText('galleryDescription', cfg.gallery.description);
  const photoItems = (cfg.gallery.items || []).filter(x => !x.type || x.type === 'image');
  galleryGrid.innerHTML = photoItems.map((x, gIdx) => {
    const photoName = formatPhotoTitle(x.title, x.url);
    return `<article class="gallery-pure-photo-card" onclick="openGalleryPhotoPreview('${escapeAttr(photoName)}', '${escapeAttr(x.url)}')" data-photo-url="${escapeAttr(x.url)}" data-photo-title="${escapeAttr(photoName)}"><img src="${escapeAttr(x.url)}" alt="${escapeAttr(photoName)}" loading="eager" onerror="this.closest('.gallery-pure-photo-card').classList.add('missing-photo')"><div class="cat-visible-label"><span>MOMENTS IN MUSIC</span><h3>${escapeHtml(photoName)}</h3></div></article>`;
  }).join('');
}

// Instagram Reels — supports UNLIMITED reels with visible cover page / thumbnail (never blank!)
const videoGrid = document.getElementById('videoGrid');
if (videoGrid) videoGrid.innerHTML = (cfg.videos || []).map((v, idx) => {
  const explicitCover = v.cover || v.thumbnail || v.poster || '';
  const reelVideo = v.video || v.mp4 || '';
  const reelTitle = v.title || 'Live Performance';
  const reelCat = v.category || 'INSTAGRAM REEL';
  const reelNo = String(idx + 1).padStart(2, '0');

  const mediaHtml = reelVideo
    ? `<video class="reel-pure-video" muted playsinline preload="auto" ${explicitCover ? `poster="${escapeAttr(explicitCover)}"` : ''} onloadeddata="this.classList.add('loaded');this.closest('.reel-pure-card').classList.add('has-reel-img')" onerror="this.style.display='none'"><source src="${escapeAttr(reelVideo)}#t=0.5" type="video/mp4"></video>`
    : (explicitCover
        ? `<img class="reel-pure-img" src="${escapeAttr(explicitCover)}" alt="${escapeAttr(reelTitle)}" loading="eager" onload="this.classList.add('loaded');this.closest('.reel-pure-card').classList.add('has-reel-img')" onerror="this.classList.remove('loaded');this.style.display='none'">`
        : '');

  return `
    <article class="reel-pure-card" onclick="window.open('${escapeAttr(v.url)}', '_blank', 'noopener')">
      ${mediaHtml}
      <div class="reel-pure-placeholder">
        <span class="reel-num-pill">REEL #${reelNo}</span>
        <span class="preview-note">♫</span>
        <small>${escapeHtml(reelCat)}</small>
        ${explicitCover ? `<span class="reel-upload-hint">Cover: ${escapeHtml(explicitCover)}</span>` : ''}
      </div>
      <a class="reel-topright-play" href="${escapeAttr(v.url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" aria-label="Watch ${escapeAttr(reelTitle)}"><svg class="play-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.8v12.4c0 .6.65.98 1.18.67l10.2-6.2a.78.78 0 0 0 0-1.34l-10.2-6.2A.78.78 0 0 0 8 5.8Z" fill="currentColor"/></svg></a>
      <div class="cat-visible-label">
        <span>${escapeHtml(reelCat)}</span>
        <h3>${escapeHtml(reelTitle)}</h3>
      </div>
    </article>
  `;
}).join('');

// Worldwide country cards
const worldGrid = document.getElementById('worldGrid');
if (worldGrid) {
  const places = (cfg.worldwide && cfg.worldwide.locations) || [];
  const cards = places.map(place => `<article class="world-card"><span class="world-flag">${escapeHtml(place.flag || '🌍')}</span><div><small>${escapeHtml(place.country || '')}</small><h3>${escapeHtml(place.name || '')}</h3></div><span class="world-arrow">↗</span></article>`);
  cards.push(`<article class="world-card"><span class="world-flag">♫</span><div><small>${escapeHtml(cfg.worldwide?.performanceLabel || 'PERFORMANCES')}</small><h3>${escapeHtml(cfg.worldwide?.performanceCount || artist.showCount || '500+')} ${escapeHtml(cfg.worldwide?.performanceLabel || 'LIVE SHOWS')}</h3></div><span class="world-arrow">✦</span></article>`);
  worldGrid.innerHTML = cards.join('');
}
setText('worldwideHeading', cfg.worldwide?.heading || 'WORLDWIDE LIVE SHOWS');
setText('worldwideSummary', `${(cfg.worldwide?.locations || []).map(p => p.name).join(' · ')} · ${cfg.worldwide?.performanceCount || '500+'} ${cfg.worldwide?.performanceLabel || 'LIVE SHOWS'}`);

// Booking event type list
const eventSelect = document.querySelector('#bookingForm select[name="type"]');
if (eventSelect) {
  (cfg.eventTypes || []).forEach(type => {
    const option = document.createElement('option'); option.value = type; option.textContent = type; eventSelect.appendChild(option);
  });
}

// WhatsApp + social links
const wa = `https://wa.me/${cfg.whatsapp}`;
const directWhatsApp = document.getElementById('directWhatsApp');
if (directWhatsApp) directWhatsApp.href = wa + '?text=' + encodeURIComponent(`Hello ${cfg.name || 'Shiva'}, I would like to enquire about booking a live singing show.`);
const socials = document.getElementById('socials');
if (socials) socials.innerHTML = `<a class="social-icon instagram" aria-label="Instagram" href="${escapeAttr(cfg.instagram)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.7" cy="6.5" r="1.15" fill="currentColor"/></svg><span>Instagram</span><b>↗</b></a><a class="social-icon facebook" aria-label="Facebook" href="${escapeAttr(cfg.facebook)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.6 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5v1.8H7.3V13H10v8h3.6Z"/></svg><span>Facebook</span><b>↗</b></a>`;

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) bookingForm.addEventListener('submit', e => {
  e.preventDefault(); const f = new FormData(e.currentTarget);
  const msg = `Hello ${cfg.name || 'Shiva'}, booking enquiry:\nName: ${f.get('name')}\nEvent date: ${f.get('date') || 'Not specified'}\nLocation: ${f.get('location') || 'Not specified'}\nEvent type: ${f.get('type') || 'Not specified'}\nGuests / Budget: ${f.get('details') || 'Not specified'}\nContact: ${f.get('phone')}`;
  window.open(wa + '?text=' + encodeURIComponent(msg), '_blank');
});

setText('year', new Date().getFullYear());
const menu = document.getElementById('menu');
if (menu) menu.addEventListener('click', () => document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => document.getElementById('nav').classList.remove('open')));


function extractReelShortcode(url) {
  const m = String(url || '').match(/instagram\.com\/(?:reel|reels|p)\/([A-Za-z0-9_-]+)/i);
  return m ? m[1] : '';
}

function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function escapeAttr(value) { return escapeHtml(value); }


function formatVideoTitle(customTitle, url, fallbackCat) {
  const cleanCustom = String(customTitle || '').trim();
  const isGenericPlaceholder = /^(private event video|cafe crowd video|bhajan video|college event video|guitar unplugged video|live stage video)\s*\d*$/i.test(cleanCustom);
  if (cleanCustom && !isGenericPlaceholder) return cleanCustom;
  const rawFile = String(url || '').split('/').pop().split('?')[0].replace(/\.[^.]+$/, '');
  const isGenericFile = /^(video|vid|clip|reel)[-_ ]?\d+$/i.test(rawFile);
  if (rawFile && !isGenericFile) {
    return rawFile.replace(/[-_]+/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());
  }
  return cleanCustom || fallbackCat || 'Performance Video';
}


function formatPhotoTitle(customTitle, url) {
  const cleanCustom = String(customTitle || '').trim();
  const isGenericPlaceholder = /^gallery photo\s*\d*$/i.test(cleanCustom);
  if (cleanCustom && !isGenericPlaceholder) return cleanCustom;
  const rawFile = String(url || '').split('/').pop().split('?')[0].replace(/\.[^.]+$/, '');
  const isGenericFile = /^(photo|img|image|pic)[-_ ]?\d+$/i.test(rawFile);
  if (rawFile && !isGenericFile) {
    return rawFile.replace(/[-_]+/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());
  }
  return cleanCustom || 'Live Moment';
}


function openGalleryPhotoPreview(title, imgUrl) {
  if (!imgUrl) return;
  setText('vidModalTag', 'MOMENTS IN MUSIC');
  setText('vidModalTitle', title || 'Performance Photo');
  const stage = document.getElementById('vidModalStage');
  if (stage) {
    stage.innerHTML = `<div class="gallery-lightbox-wrap"><img src="${escapeAttr(imgUrl)}" alt="${escapeAttr(title || 'Performance photo')}"><div class="gallery-lightbox-bar"><a class="button button-primary" href="${escapeAttr(imgUrl)}" target="_blank" rel="noopener">OPEN FULL IMAGE ↗</a></div></div>`;
  }
  vidModal.classList.add('open');
  vidModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
