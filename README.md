# Bibek Jha, Chartered Accountant: website guide

Everything you need to put the site online, receive consultation requests by email, appear on Google, and add learning content yourself.

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | Home page |
| `virtual-cfo-nepal.html` and the other `*-nepal.html` files | One page per service, each written to rank for its own searches |
| `styles.css`, `site.js` | Shared design and menu code for every page |
| `content.js` | Your Learning hub list (the admin panel updates it for you) |
| `admin.html` | Your private admin panel for uploading PDFs and articles |
| `article-template.html`, `document-template.html` | The designs the admin panel uses for new article and document pages. Don't delete them |
| `pdfs/`, `docs/`, `articles/` | Your uploaded PDFs, their viewer pages, and your article pages |
| `photo.jpg` | Your photo |
| `og-image.jpg` | The preview image shown when your link is shared on LinkedIn, WhatsApp or Facebook |
| `favicon.svg`, `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png`, `icon-*.png`, `site.webmanifest` | Your CA icon for browser tabs, Google results and phone home screens |
| `sitemap.xml`, `robots.txt`, `CNAME` | Help Google find every page, and connect bibekjha.com.np |

---|---|
| `index.html` | The website itself |
| `content.js` | Your Learning hub items. The only file you edit for new content |
| `admin.html` | Your private admin panel for uploading PDFs and articles |
| `pdfs/` | Upload your PDFs here |
| `photo.jpg`, `favicon.svg` | Your photo and the tab icon |
| `sitemap.xml`, `robots.txt`, `CNAME` | Help Google find the site, and connect bibekjha.com.np |

---

## 1. Put the site online at bibekjha.com.np (free)

The site is already set up for **https://bibekjha.com.np**: the `CNAME` file, sitemap, robots file and Google tags all use that address.

**A. Prepare free DNS before you apply for the domain**

The .com.np application asks for two **nameservers**. Cloudflare provides them for free:

1. Create a free account at **cloudflare.com** → **Add a domain** → type `bibekjha.com.np` → choose the **Free** plan.
2. Cloudflare shows two nameservers (like `xxx.ns.cloudflare.com`). Enter these two in your .com.np application. If you've already applied, you can change the nameservers later from your domain account.

**B. Upload the site to GitHub**

1. Create a free account at **github.com**.
2. Click **New repository**, name it `website`, choose **Public**, and click **Create repository**.
3. Click **uploading an existing file**, drag in everything from this folder (including `pdfs` and `CNAME`), and click **Commit changes**.
4. Open **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/(root)**, and click **Save**. The *Custom domain* box should show `bibekjha.com.np`.

**C. Connect the domain (after it's approved)**

In Cloudflare, open your domain → **DNS → Records** and add these, each with **Proxy status: DNS only** (grey cloud):

| Type | Name | Content |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Then in GitHub **Settings → Pages**, wait until the domain check turns green (minutes to a few hours) and tick **Enforce HTTPS**.

## 2. Turn on the booking form (one time)

The form sends requests to **bibekjha.np@gmail.com** through FormSubmit, a free form-to-email service.

1. Open your live site and send yourself a test request through the form.
2. You'll get an email from FormSubmit asking you to **activate** the form. Click the activation link. Check Spam if you don't see it.
3. From then on, every request arrives in your inbox with the client's name, contact number, email and query. Reply to the email to answer the client directly.

Tip: after activation, FormSubmit shows you a random alias for your email. To keep your address out of the page code, open `index.html`, search for `formsubmit.co/ajax/bibekjha.np@gmail.com` and replace the email part with that alias.

## 3. Get found on Google

No one can guarantee a top position for "CA in Nepal". It's a competitive search, and ranking builds over weeks and months. These steps give you the best chance:

1. **Google Search Console** (search.google.com/search-console): add your website address, verify it (the *HTML file* method works well: download Google's file and upload it to your repository), then submit `sitemap.xml` under **Sitemaps**.
2. **Google Business Profile** (business.google.com): create a profile as *Bibek Jha, Chartered Accountant*, category *Chartered accountant*, location Kathmandu, with your phone and website. This is what puts you on Google Maps and in "CA near me" results. Ask happy clients to leave reviews.
3. **Link to your site everywhere**: LinkedIn (profile and posts), email signature, WhatsApp Business profile, and any directories you're listed in.
4. **Publish regularly** in the Learning hub. Fresh, useful articles on Nepali tax and accounting are what keep people, and Google, coming back.

The site already has the technical basics built in: a clear title and description, structured business data for Google, a sitemap, and a fast, mobile-friendly layout.

## 4. Add PDFs, notices and articles yourself (admin panel)

Your site includes a private admin panel at `https://bibekjha.com.np/admin.html`. It uploads PDFs and articles straight into your GitHub repository, and the site updates itself about a minute later. No code editing needed.

**One-time setup: create an access key**

1. On github.com, click your profile picture → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
2. Name it "Website admin" and pick an expiry (for example 1 year).
3. Under **Repository access**, choose **Only select repositories** and select your website repository.
4. Under **Permissions → Repository permissions**, set **Contents** to **Read and write**.
5. Click **Generate token** and copy it. Keep it private, like a password.

**Each time you add something**

1. Open `https://bibekjha.com.np/admin.html`. Enter your GitHub username, the repository name (`website`) and the access key, then click **Connect**. (Tick *Remember on this device* on your own computer or phone so you only do this once.)
2. Choose the section and folder, add a title, date and one-line summary.
3. Pick **PDF file** and choose the PDF, or **Article text** and type or paste the article, or **Link** for a web page.
4. Click **Publish to website**. Refresh your site after about a minute; the new item appears first under **Latest**, marked **New**.

When you publish a **PDF**, the panel also creates a viewer page for it (for example `bibekjha.com.np/docs/income-tax-act-2058.html`). Visitors read the document on your website and can download it from there, like on the IRD website. When you publish **article text**, the panel also creates a separate page for it (for example `bibekjha.com.np/articles/vat-on-digital-services.html`) and adds it to the sitemap, so Google can list each article on its own. PDFs are added to the sitemap too.

To remove something, find it under **On your website now** and click **Remove** twice. Its PDF or article page is deleted too, and the sitemap is updated.

**Article formatting:** leave an empty line between paragraphs, start a line with `## ` for a sub-heading, `- ` for a bullet, and wrap words in `**double stars**` for bold.

**Hosting somewhere other than GitHub Pages?** The panel still works if your host (such as Netlify, Vercel or Cloudflare Pages) builds the site from your GitHub repository. If you host files without GitHub, use the *Copy the entry instead* option at the bottom of the form: upload the PDF to the `pdfs` folder yourself and paste the copied entry into `content.js` below the `PASTE NEW ENTRIES BELOW THIS LINE` line.

**Keep PDFs under 25 MB.** Compress larger files first.

## 5. Other small changes

- **LinkedIn link**: in `content.js`, paste your profile URL between the quotes after `"linkedin":` near the top. It then appears in the contact section.
- **Any text on the page**: open `index.html`, click the pencil icon, use Ctrl+F to find the words, change them, and commit.
- **Photo**: upload a new `photo.jpg` (square works best) to replace the current one.

## 6. Time-limited content

The OCR fine waiver notice (top bar, company registration page, tax page and one FAQ answer) hides itself automatically from 15 January 2027. After the deadline, ask me to remove the waiver text from the pages entirely, or delete it yourself in GitHub.
