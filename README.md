# Weddings by Vivek — Portfolio Website

A responsive, dark-luxury photography and cinematic-film portfolio built with plain HTML, CSS and JavaScript. It is ready for GitHub Pages hosting.

## Included
- Responsive desktop and mobile layout
- Dark black / ivory / muted-gold visual theme
- About, portfolio, films and contact sections
- Portfolio category filters
- Click-to-open photo lightbox with previous / next controls
- Featured YouTube video modal
- Mobile navigation
- No build tools, frameworks, paid themes or backend required

## 1. Preview locally
1. Extract the ZIP.
2. Open the `weddings-by-vivek-portfolio` folder.
3. Double-click `index.html` to preview in a browser.
4. For the best local preview, use VS Code with the free "Live Server" extension.

## 2. Add your own photographs
The current images in `assets/images/` are elegant SVG placeholders, not real wedding photographs. Replace them with your own images:

| Current file | Used for |
|---|---|
| `hero.jpg` | Main homepage background |
| `gallery-01.jpg` to `gallery-06.jpg` | Portfolio grid |
| `film-poster.svg` | Featured cinematic film thumbnail |

### Easiest replacement method
1. Export your photographs from Lightroom as JPEG, sRGB, around 2000–2500 px on the long edge and quality 80–85.
2. Copy each photo into `assets/images/`.
3. Either keep the same filename and extension by exporting/renaming to SVG is NOT possible, or update the corresponding image path in `index.html` and the hero path in `style.css`.
4. For example, if you add `wedding-01.jpg`, change the matching gallery image `src` and its `data-image` value to `assets/images/wedding-01.jpg`. Also update `data-image` for the lightbox.
5. To change the hero image, update the `url("assets/images/hero.svg")` reference in `style.css` to your new JPG filename.

Recommended: use descriptive filenames such as `ankita-bridal-portrait.jpg`, `wedding-candid-01.jpg`.

### Add more gallery photos
Copy one complete `<button class="gallery-item"...>` block in `index.html`, change its `data-category`, `data-title`, `data-image`, image `src`, and alt text. Categories supported by the filter are `wedding`, `prewedding`, and `portraits`.

## 3. Add your contact details and video
Open `script.js` and edit the `SITE_CONFIG` object at the top:

```js
const SITE_CONFIG = {
  instagram: "https://www.instagram.com/weddingsbyvvk/",
  email: "yourname@gmail.com",
  whatsapp: "919876543210",
  featuredVideo: "https://www.youtube.com/embed/AbCdEf12345"
};
```

- Email: use your business email address.
- WhatsApp: country code + phone number, digits only. For India use `91` followed by your 10-digit number.
- YouTube: open your video, choose Share, copy the video ID from the URL, and use `https://www.youtube.com/embed/VIDEO_ID`.
- Instagram is already set to `@weddingsbyvvk`.

## 4. Publish free using GitHub Pages
1. Sign in or create a free account at https://github.com/.
2. Create a **Public** repository named exactly `YOUR-GITHUB-USERNAME.github.io`.
   - Example: if your GitHub username is `vivekphoto`, the repository must be `vivekphoto.github.io`.
3. Open the repository and choose **Add file → Upload files**.
4. Extract this ZIP on your computer or phone.
5. Upload the *contents* of the `weddings-by-vivek-portfolio` folder, not the outer folder itself. `index.html`, `style.css`, `script.js`, `README.md` and `assets/` must be visible at the repository root.
6. Add a commit message such as `Add photography portfolio website`, then click **Commit changes**.
7. In the repository, open **Settings → Pages**.
8. Under **Build and deployment**, choose **Deploy from a branch**.
9. Choose branch `main` and folder `/(root)`, then click **Save**.
10. Wait a few minutes. Your website will be available at:
    `https://YOUR-GITHUB-USERNAME.github.io`

Official guide: https://docs.github.com/en/pages/quickstart

## 5. Updating the website later
- Edit files directly on GitHub or upload replacements.
- Every commit to the selected branch triggers a new deployment.
- Keep `index.html` at the repository root.
- GitHub Pages is static hosting: it does not run PHP, databases or server-side code.

## Before you publish — checklist
- [ ] Replace the six gallery placeholders with your photographs.
- [ ] Replace the hero placeholder with your strongest image.
- [ ] Replace the film poster and add a YouTube embed URL.
- [ ] Add your real email and WhatsApp number in `script.js`.
- [ ] Check the website on a phone and desktop.
- [ ] Make sure you have permission to publish all client photographs and films.

## Notes
- The Google Fonts are loaded online. If a visitor is offline, system fallback fonts are used.
- The SVG placeholders are original simple graphics included only to make the layout previewable.
- Hosting is free on GitHub Pages for public repositories. A custom domain is optional and usually costs money.
