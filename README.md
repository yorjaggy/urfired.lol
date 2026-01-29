# urfired.lol - Why are you fired?

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-3.0-7F5AF0?logo=astro)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/yourusername/urfired.lol/graphs/commit-activity)

![urfired.lol preview](/public/urfired.lol.png)

A fun web application that generates random, humorous reasons why you might be fired. Built with Astro for a fast, modern web experience.

## 🎯 Features

- Random firing reason generator
- Interactive UI with space/click events
- Personalized messages with URL parameters
- Smooth animations and transitions
- Responsive design
- Modern typography with Inter and IBM Plex Mono fonts

## 🔗 URL Parameters

You can personalize the experience using URL parameters:

- `n`: Name parameter (max 10 characters)
  - Example: `?n=John`
- `c`: Company parameter (max 10 characters)
  - Example: `?c=Google`
- Combined: `?n=John&c=Google`

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.lol.png
│   ├── interactivity.js    # Client-side interactivity
│   └── messages.js         # Firing reasons collection
├── src/
│   ├── components/
│   │   └── FiredMessage.astro  # Main component
│   ├── layouts/
│   │   └── Layout.astro        # Base layout
│   ├── pages/
│   │   └── index.astro         # Main page
│   └── scripts/
│       ├── interactivity.js    # Server-side interactivity
│       └── messages.js         # Server-side messages
└── package.json
```

## 🛠️ Development

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🎨 Design

- **Colors**: Burnt orange (#FF5722) background with black and white text
- **Fonts**:
  - Inter for main text
  - IBM Plex Mono for UI elements
- **Animations**: Smooth fade transitions for message updates

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a new branch
3. Making your changes
4. Submitting a pull request

## 📝 License

This project is open source and available under the MIT License.