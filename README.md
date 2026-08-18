# Life Plan Coaching Website

A simple static website for the Life Plan life coaching business. No build step, no framework — just plain HTML/CSS/JS, so it deploys as-is.

```
life-plan-website/
├── index.html        # the page itself
├── css/style.css      # all styling
├── js/script.js       # contact form interaction
└── README.md
```

## Before you deploy

- Search `index.html` for "Your photo here" and replace the placeholder box with a real `<img>` tag once you have a photo (an `images/` folder is a good place to put it).
- Update the email, phone number, and testimonials in `index.html` with your real details.
- The contact form (`#contact-form`) only shows an on-page confirmation right now — it doesn't send anywhere. To actually receive messages, either:
  - Use a free form backend like [Formspree](https://formspree.io) or [Getform](https://getform.io) — sign up, get a form endpoint URL, and set it as the form's `action` attribute, or
  - Add a [Vercel Serverless Function](https://vercel.com/docs/functions) under an `api/` folder that emails you on submit (ask me if you'd like this built out).

## Deploy: GitHub + Vercel

**1. Push this folder to a new GitHub repository**

```bash
cd life-plan-website
git init
git add .
git commit -m "Initial commit: Life Plan coaching site"
```

Then create a new, empty repository on [github.com/new](https://github.com/new) (don't initialize it with a README), and push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/life-plan-website.git
git branch -M main
git push -u origin main
```

(If you'd rather skip the command line, you can also drag-and-drop this folder into a new repo using GitHub's "uploading an existing file" web UI.)

**2. Import the repo into Vercel**

1. Go to [vercel.com](https://vercel.com) and sign up/log in — choosing "Continue with GitHub" is the easiest option, since it connects your account automatically.
2. From your Vercel dashboard, click **Add New... → Project**.
3. Select **Import** next to your `life-plan-website` GitHub repository (authorize Vercel to access your repos if prompted).
4. Vercel will auto-detect this as a static site — you shouldn't need to change the Framework Preset, Build Command, or Output Directory. Just click **Deploy**.
5. After a few seconds, Vercel gives you a live URL (something like `life-plan-website.vercel.app`). 

**3. Future updates**

Any time you push a change to the `main` branch on GitHub, Vercel automatically redeploys your site with the update — no extra steps needed.

**4. Custom domain (optional)**

In your Vercel project, go to **Settings → Domains** to connect a domain you own (e.g. `lifeplancoaching.com`) instead of the default `vercel.app` address.
