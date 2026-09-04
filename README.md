# Wedding App 🎊

A beautiful, interactive wedding invitation web application built with Vue.js. This app allows couples to create elegant digital wedding invitations with RSVP management, gift registries, and more.

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-green?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-7.x-purple?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

## Features

- 📱 **Responsive Design** - Looks great on mobile, tablet, and desktop devices
- 💌 **Digital Invitations** - Beautiful, animated wedding invitation cards
- 📝 **RSVP Management** - Guest response collection and management
- 🎁 **Gift Registry** - Integrated gift wishlist
- 📅 **Save the Date** - Calendar integration with .ics file download
- 🎵 **Music Playlist** - Curated wedding playlist with audio player
- 📍 **Venue Information** - Location details with ceremony and reception info
- 🎨 **Elegant Animations** - Smooth transitions and visual effects
- ♿ **Accessibility** - Built with accessibility in mind
- 🔍 **SEO Optimized** - Meta tags and PWA support

## Tech Stack

- **Framework**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: CSS Variables, Sass
- **State Management**: Vue Reactivity (ref, reactive, computed)
- **Utilities**: @vueuse/core
- **Deployment**: GitHub Pages

## Environment Variables

This project uses environment variables for configuration. Copy the example file and fill in your values:

```bash
cp .env.example .env
```

### Available Variables

| Variable | Description |
|----------|-------------|
| `VITE_WHATSAPP_PHONE` | WhatsApp phone number for RSVP responses (e.g. 5216623616028) |
| `VITE_WEDDING_URL` | Your wedding website URL (for OG tags) |

> **Note**: Variables prefixed with `VITE_` are exposed to the client-side code.

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn (recommended) or npm

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Project Structure

```
wedding-app/
├── public/
│   ├── assets/           # Static assets (images, favicons)
│   └── manifest.json      # PWA manifest
├── src/
│   ├── assets/
│   │   ├── audio/        # Wedding playlist audio files
│   │   ├── flowers/      # Decorative flower images
│   │   ├── fonts/        # Custom fonts (EB Garamond, Herr Von, Quicksand)
│   │   ├── img/         # Main images
│   │   ├── preboda/     # Pre-wedding photos
│   │   └── svg/         # SVG icons and illustrations
│   ├── components/
│   │   ├── invitation/   # Main invitation components
│   │   │   ├── weddingHeader.vue
│   │   │   ├── weddingInfo.vue
│   │   │   ├── weddingPlace.vue
│   │   │   ├── weddingSchedule.vue
│   │   │   ├── weddingForm.vue
│   │   │   ├── weddingGift.vue
│   │   │   ├── weddingPlaylist.vue
│   │   │   ├── weddingSongPlayer.vue
│   │   │   └── weddingLastMessage.vue
│   │   └── ui/           # Reusable UI components
│   │       ├── weddingButton.vue
│   │       ├── weddingInput.vue
│   │       ├── weddingSelect.vue
│   │       └── weddingTextarea.vue
│   ├── styles/
│   │   ├── fonts.css     # Font definitions
│   │   ├── global.css    # Global styles
│   │   └── main.css      # Main styles
│   ├── utils/
│   │   ├── helper.js     # Utility functions
│   │   └── calendar.js   # Calendar utilities
│   ├── App.vue           # Root component
│   └── main.js           # Entry point
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies
```

## Customization

### Changing the Wedding Date

Edit the `WEDDING_DATE` constant in:
- `src/components/invitation/weddingLastMessage.vue`

### Adding Songs to the Playlist

Add audio files to `src/assets/audio/` and update the playlist configuration in the relevant components.

### Modifying Images

Replace images in the respective folders under `src/assets/`:
- `img/` - Main wedding images
- `flowers/` - Decorative elements
- `preboda/` - Pre-wedding photos

## Deployment

### GitHub Pages

The project includes a deployment script for GitHub Pages:

```bash
yarn deploy
```

This will build the project and deploy it to the `gh-pages` branch. Configure your custom domain in the `CNAME` file.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## License

This project is for personal use. Images and content are property of the couple.

## Credits

Built with ❤️ for wedding celebrations
