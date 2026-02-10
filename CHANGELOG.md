# Changelog

All notable changes to Clawdbot Webchat UI.

## [1.0.0] - 2025-02-10

### Added
- **Full Configurability** — All settings via `CLAWDBOT_WEBCHAT_CONFIG` object
  - Bot name and emoji customization
  - Session key configuration
  - File upload limits (maxFileSize, allowedFileTypes)
  - Default theme selection
  - Locale selection (en/tr)
  - String overrides for any UI text
  
- **Multi-language Support** — Built-in English and Turkish
  - Complete STRINGS object with all UI text
  - Locale-aware date formatting
  - Easy to extend with more languages
  
- **Dynamic UI Initialization** — All text set via config at runtime
  - No hardcoded strings in HTML
  - Theme persists across sessions
  - Token storage with configurable key prefix
  
- **6 Stunning Themes**
  - Cyberpunk (default) — Purple/cyan robot
  - Matrix — Green digital skull
  - God Mode — Gold divine eye
  - Neon — Pink/cyan visor
  - ASCII — Retro terminal face
  - Ocean — Teal bioluminescent jellyfish
  
- **Advanced Features**
  - SVG animated faces with eye tracking
  - Blinking and expression animations
  - File upload with preview (images, video, audio, documents)
  - Drag & drop support
  - Streaming token responses
  - Session history loading
  - Date separators (Today, Yesterday, dates)
  - Typing indicators
  - New session dialog
  - Mobile responsive design
  - WebSocket auto-reconnect
  - Token authentication
  
- **Documentation**
  - Comprehensive README.md
  - Configuration examples file
  - Deployment instructions
  - Docker support
  - MIT License
  
### Changed
- Converted from hardcoded "Buddy" to configurable bot name
- Replaced dog emoji (🐕) with configurable emoji
- Changed from Turkish-only to multi-language with English default
- Updated all localStorage keys to use `clawdbot-webchat-` prefix
- Made MAX_FILE_SIZE configurable via config
- Made file input accept attribute configurable
- Switched to dynamic `<html lang>` attribute based on locale
- Updated document title to use config name
- Made session key configurable (default: "main")

### Technical Details
- Single self-contained HTML file (91KB)
- Zero dependencies
- Pure vanilla JavaScript
- No build step required
- Works on all modern browsers
- Mobile-first responsive design

## Original Source
Based on the Buddy chat interface (canvas/buddy-face/index.html)
