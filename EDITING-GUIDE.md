# Editing this website yourself

Everything you see on the site lives in a handful of files. You do not need to touch
the gallery component to change a project, a picture or a video link.

## 1. Run it on your computer

You need Node.js 18 or newer (https://nodejs.org).

```
npm install
npm run dev
```

Then open the web address it prints (usually http://localhost:5173). The page updates
by itself every time you save a file.

To make a finished version for the internet:

```
npm run build
```

The finished site is in the `dist` folder. Upload that folder to any web host
(Netlify, Vercel, Hostinger, GoDaddy, your own server) and it works as-is.

## 2. Change a project name, picture or video link

Open **`src/data/projects.ts`**. This is the only file you need for the video gallery.

Each project is one line:

```ts
{ name: 'Concert',
  category: 'Live / Concert',
  videoUrl: 'https://www.youtube.com/watch?v=dYD1_Y6YKo0',
  thumbnail: concert,
  tone: 'red' },
```

- `name` — the title shown on the slide and in the list below it
- `category` — the small label under the title
- `videoUrl` — the link opened when someone clicks "Watch" (YouTube, Vimeo or any page)
- `thumbnail` — the picture on the slide
- `tone` — the accent colour behind the slide: `red`, `yellow`, `blue`, `cream` or `dark`

The counter ("01 / 13"), the row of project names and the numbered list are all built
from this list automatically. Add a line, and they all update.

## 3. Replace or add a thumbnail

1. Put the new picture in `src/assets/` (`.png`, `.jpg` or `.webp` all work).
2. Add an import at the top of `src/data/projects.ts`, next to the others:
   ```ts
   import myPicture from '@/assets/my-picture.jpg';
   ```
3. Set `thumbnail: myPicture` on the project you want to change.

To take a picture off a slide, set `thumbnail: null` — the slide then shows the name
on a plain colour block.

## 4. Add or remove a project

- **Add:** copy an existing line, change the name, category, link, picture and colour.
- **Remove:** delete the line. Nothing else needs editing.

## 5. Change the words on the page

All visible text (hero headline, section headings, "About" paragraphs, the numbers
"900+ million" and "1700+", contact details, footer) is in **`src/routes/index.tsx`**.
It is plain text in the middle of the file — edit the words, save, done.

## 6. Change colours, fonts and spacing

Open **`src/styles.css`**. The palette and fonts are defined at the top as variables:

- `--bg`, `--ink` — page background and text
- `--tile-red`, `--tile-yellow`, `--tile-blue`, `--tile-cream`, `--tile-dark` — the accent tiles
- the heading font (Archivo) and body font (Inter) are loaded in `src/routes/__root.tsx`

## 7. Change your photo

Replace `src/assets/aniket-cutout.png` with a new file of the same name and it is used
everywhere automatically. Keep it a transparent-background PNG.

## 8. Change the page title and search-engine description

Both are in the `head()` section of **`src/routes/index.tsx`** (title, description,
`og:` and `twitter:` lines).

## 9. Gallery timing

The slides change every 4.5 seconds and pause when you hover or touch them.
That number is at the top of **`src/components/video-gallery.tsx`**.

## Files you can safely ignore

- `src/lib/portfolio.ts` and `src/components/portfolio-gallery.tsx` — the old version of
  the gallery, kept for reference. The live site does not use them.
- `src/components/ui/` — small reusable interface pieces (buttons etc.).
- `src/test/` — checks that run with `npm run test`.
