# Clawdbot Webchat UI

A beautiful, themeable webchat interface for [Clawdbot](https://github.com/clawdbot/clawdbot) — your AI assistant gateway.

![License](https://img.shields.io/badge/license-MIT-blue)
![Clawdbot](https://img.shields.io/badge/clawdbot-compatible-purple)

## ✨ Features

- **6 Stunning Themes** — Cyberpunk, Matrix, God Mode, Neon, ASCII, Ocean
- **Animated Avatar** — SVG faces with eye tracking, blinking, speaking animations
- **File Upload** — Images, videos, audio, documents with inline previews
- **Drag & Drop** — Drop files directly into the chat
- **Streaming Responses** — Real-time token streaming from your AI
- **Session History** — Persistent chat history across refreshes
- **Mobile Responsive** — Works on phones, tablets, desktops
- **Token Auth** — Secure gateway token authentication
- **Multi-language** — English and Turkish built-in, easily extensible
- **Zero Dependencies** — Single HTML file, no build step needed

## 📸 Screenshots

(placeholder for screenshots)

## 🚀 Quick Start

### Prerequisites
- A running [Clawdbot](https://github.com/clawdbot/clawdbot) instance
- Your gateway token

### Option 1: Direct Serve (Simplest)
```bash
# Clone the repo
git clone [https://github.com/flayzeraynx/buddyBot-OpenClawUI](https://github.com/flayzeraynx/buddyBot-OpenClawUI)
cd clawdbot-webchat

# Serve with any static file server
python3 -m http.server 3456

# Or with Node.js
npx serve -p 3456
```

Then set up a reverse proxy or Tailscale serve to route it alongside your gateway.

### Option 2: Alongside Clawdbot (Recommended)
```bash
# Copy into your Clawdbot workspace
cp index.html /path/to/clawdbot/workspace/webchat/index.html

# Serve it
cd /path/to/clawdbot/workspace/webchat
python3 -m http.server 3456 --bind 0.0.0.0

# Optional: Use Tailscale Serve
tailscale serve --bg /webchat http://localhost:3456
```

### Option 3: Docker
```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
```

```bash
docker build -t clawdbot-webchat .
docker run -p 3456:80 clawdbot-webchat
```

## ⚙️ Configuration

Edit the `CLAWDBOT_WEBCHAT_CONFIG` object at the top of `index.html`:

```javascript
window.CLAWDBOT_WEBCHAT_CONFIG = {
    // Bot identity
    name: 'My Assistant',       // Display name
    emoji: '🤖',                // Icon next to name
    
    // Session
    sessionKey: 'main',          // Gateway session key
    
    // File uploads  
    maxFileSize: 5 * 1024 * 1024, // 5MB (must match gateway maxBytes)
    allowedFileTypes: 'image/*,video/*,audio/*,.gif,.pdf,.doc,.docx,.txt',
    
    // Appearance
    defaultTheme: 'default',     // default|matrix|god|futuristic|ascii|ocean
    
    // Language
    locale: 'en',                // 'en' or 'tr'
    
    // Override any string
    strings: {
        welcomeMessage: 'Hey! I\'m ready to help 🚀'
    }
};
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | string | `'Clawdbot'` | Bot display name |
| `emoji` | string | `'🤖'` | Emoji/icon shown with name |
| `sessionKey` | string | `'main'` | Gateway session key |
| `maxFileSize` | number | `5242880` | Max upload size in bytes |
| `allowedFileTypes` | string | `'image/*,video/*,...'` | File input accept attribute |
| `defaultTheme` | string | `'default'` | Initial theme |
| `locale` | string | `'en'` | Language (`'en'` or `'tr'`) |
| `strings` | object | `{}` | Override individual UI strings |

## 🎨 Themes

| Theme | Description |
|-------|-------------|
| **Cyberpunk** (default) | Purple/cyan gradient, robot head with antenna |
| **Matrix** | Green-on-black, digital skull with binary streams |
| **God Mode** | Gold/amber, divine eye with sacred geometry |
| **Neon** | Pink/cyan, holographic visor helmet |
| **ASCII** | Retro terminal, text-art face |
| **Ocean** | Teal/blue, bioluminescent jellyfish |

## 📎 File Upload

### Supported Formats

| Type | Formats | Preview |
|------|---------|---------|
| Images | JPG, PNG, GIF, WebP | Thumbnail in chat bubble |
| Video | MP4, MOV, AVI, WebM | Video player in chat bubble |
| Audio | MP3, WAV, OGG, FLAC | Audio player in chat bubble |
| Documents | PDF, DOC, TXT, CSV, JSON, XML, ZIP | File icon + name |

### Upload Methods
- **📎 Button** — Click the paperclip icon
- **Drag & Drop** — Drop files onto the chat area
- **Preview** — See thumbnail/icon before sending

### Limits
- Default: **5MB** per file (configurable, must match your Clawdbot gateway `maxBytes` setting)
- Files are base64-encoded and sent over WebSocket
- Large files may take a moment to encode

## 🔌 How It Works

1. **Authentication** — Enter your Clawdbot gateway token (stored in localStorage)
2. **WebSocket** — Connects to the gateway on the same host via WS/WSS
3. **Session** — Uses a fixed session key (default: `main`) for persistent conversations
4. **Streaming** — Receives token-by-token responses and renders them in real-time
5. **History** — Loads previous messages on connect via `chat.history`

### Gateway Requirements

Your Clawdbot gateway needs to be accessible on the same host/port as this UI. The recommended setup:

```
[Your Domain / Tailscale URL]
├── /           → Clawdbot Gateway (WebSocket)
└── /webchat    → This UI (static files)
```

Using Tailscale Serve:
```bash
# Gateway is already on the default path
tailscale serve --bg /webchat http://localhost:3456
```

Using Nginx:
```nginx
server {
    listen 443 ssl;
    
    # WebSocket proxy to Clawdbot
    location / {
        proxy_pass http://localhost:18789;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
    
    # Static webchat UI
    location /webchat {
        alias /path/to/clawdbot-webchat;
        index index.html;
    }
}
```

## 🌐 Deployment Examples

### AWS EC2 / Any VPS
```bash
git clone [https://github.com/flayzeraynx/buddyBot-OpenClawUI](https://github.com/flayzeraynx/buddyBot-OpenClawUI) /opt/webchat
cd /opt/webchat
python3 -m http.server 3456 --bind 0.0.0.0 &
```

### macOS (Local)
```bash
git clone [https://github.com/flayzeraynx/buddyBot-OpenClawUI](https://github.com/flayzeraynx/buddyBot-OpenClawUI) ~/webchat
cd ~/webchat
python3 -m http.server 3456
# Open http://localhost:3456?token=YOUR_TOKEN
```

### Vercel / Netlify / GitHub Pages
Since it's a single HTML file, just deploy it as a static site. However, note that the WebSocket connection needs to reach your gateway — this works best when the UI is served from the same domain as your gateway.

## 🛡️ Security

- **Token Auth** — Gateway token is required to connect
- **LocalStorage** — Token is saved locally for convenience (clear with browser tools)
- **URL Token** — Pass token via URL: `?token=YOUR_TOKEN` (auto-saves)
- **No Server-Side Code** — Pure client-side, no backend to compromise
- **Base64 Uploads** — Files are encoded client-side, never touch a third-party server

## 🤝 Contributing

Contributions welcome! This is a single-file project — just edit `index.html`.

1. Fork the repo
2. Make your changes
3. Test locally with `python3 -m http.server 3456`
4. Submit a PR

### Adding a New Theme
1. Add CSS variables in a `[data-theme="yourtheme"]` block
2. Create an SVG face in the `FACES` object
3. Add eye config in `EYE_CONFIG`
4. Add a theme button in the HTML
5. (Optional) Add ASCII face variant

## 📄 License

MIT License — use it however you want.

## 🙏 Credits

Built for the [Clawdbot](https://github.com/clawdbot/clawdbot) ecosystem.
