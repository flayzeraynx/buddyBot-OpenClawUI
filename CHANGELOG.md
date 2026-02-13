# Changelog

All notable changes to BuddyBot / OpenClaw UI.

## [2.0.0] - 2025-02-13

### Added
- **Voice Recording** — Mic button with waveform visualization
  - MediaRecorder + SpeechRecognition dual mode
  - Live waveform animation while recording
  - Recording timer display
  - Cancel recording option
  - Auto-sends voice as WebM audio with transcript
  
- **Multi-Session Support** — Full session management
  - Session list sidebar with history
  - Create new sessions
  - Switch between sessions
  - Session persistence in localStorage
  
- **Redesigned Robot SVG Faces** — Fully redrawn from scratch
  - Default: 3D metallic gradient robot with chest highlights
  - Matrix: Digital skull with binary streams
  - God Mode: All-seeing eye with divine geometry and halo
  - Futuristic/Neon: Hologram visor with scan lines
  - Ocean: Deep sea bioluminescent creature
  - ASCII: Retro terminal text face
  
- **Enhanced Avatar Animations**
  - Eye tracking follows mouse cursor
  - Configurable eye movement per theme
  - Blink animations
  - Speaking/thinking state transitions
  - Smooth crossfade between theme changes
  
- **Background Particle Effects** — Animated particles per theme
  
- **History Sidebar** — Browse and load past conversations

- **Improved Message Rendering**
  - Better markdown parsing
  - Code block support
  - Inline image/audio/video previews
  - Date separators (Today, Yesterday, formatted dates)

### Changed
- Completely rewritten SVG faces (detailed 3D renders)
- Theme switching now uses crossfade animation
- Improved mobile responsiveness
- Better WebSocket reconnection logic
- Single file grew from ~91KB to ~130KB (richer SVG faces + voice recording)

### Technical Details
- Single self-contained HTML file (~130KB)
- Zero dependencies
- Pure vanilla JavaScript
- No build step required
- Works on all modern browsers
- Mobile-first responsive design

---

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
  
- **6 Stunning Themes**
  - Cyberpunk (default) — Purple/cyan robot
  - Matrix — Green digital skull
  - God Mode — Gold divine eye
  - Neon — Pink/cyan visor
  - ASCII — Retro terminal face
  - Ocean — Teal bioluminescent jellyfish
  
- **Advanced Features**
  - SVG animated faces with eye tracking
  - File upload with preview (images, video, audio, documents)
  - Drag & drop support
  - Streaming token responses
  - Session history loading
  - Typing indicators
  - New session dialog
  - Mobile responsive design
  - WebSocket auto-reconnect
  - Token authentication
