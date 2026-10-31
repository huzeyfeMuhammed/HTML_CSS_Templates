# HTML & CSS Templates

Four web page templates built while learning front-end development. Templates 01–03 are landing pages, and Template 04 is an admin dashboard built with Node.js, Express and EJS.

All templates use HTML5, CSS3 (Flexbox/Grid and media queries for responsive layouts), Font Awesome icons and Normalize.css.

## Templates

### 01 – Leon (landing page)
A one-page agency landing page with a header, a hamburger menu for small screens, a features block, and services, portfolio and about sections.
Built with a custom stylesheet (`leon.css`) and Google Fonts (Work Sans).

![Template One](screenshots/template-one.png)

### 02 – Kasper (landing page)
A long marketing page with services, design showcase, portfolio, an embedded promo video, about, stats, skills bars, testimonials, pricing plans and a subscribe/contact section.
Responsive layout, with styles in `kasper.css`.

![Template Two](screenshots/template-two.png)

### 03 – Multi-section website
The largest static page: articles, gallery, features, testimonials, team members, services, skills, work steps, events, pricing plans, videos, stats and a discount call-to-action.
Responsive layout with media queries for different screen sizes.

![Template Three](screenshots/template-three.png)

### 04 – Dashboard (Node.js + EJS)
An admin dashboard with a sidebar and widgets: welcome card, quick draft, yearly targets, tickets, latest news and tasks, top searches, latest uploads, reminders, social media stats and a projects table.
Built with Express and EJS. The head, header and sidebar are shared partials, and the active menu item is set automatically for each page. Eight pages: Dashboard, Settings, Profile, Projects, Courses, Friends, Files and Plans.

![Template Four](screenshots/template-four.png)

## How to run

**Templates 01–03:** open the folder's `index.html` in any browser. No build step is needed.

**Template 04:** requires [Node.js](https://nodejs.org) 18 or later.

```bash
cd 04_Template_Four_EJS
npm install
npm start
```

Then open http://localhost:3000.

| Route | Page |
|-------|------|
| `/` | Dashboard |
| `/settings` | Settings |
| `/profile` | Profile |
| `/projects` | Projects |
| `/courses` | Courses |
| `/friends` | Friends |
| `/files` | Files |
| `/plans` | Plans |

## Technologies
HTML5, CSS3, EJS, Node.js, Express, Git, GitHub

## Author
Huzeyfe Muhammed – [GitHub](https://github.com/huzeyfeMuhammed)
