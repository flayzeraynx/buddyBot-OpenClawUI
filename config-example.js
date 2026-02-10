// ═══════════════════════════════════════════════════════════
// CONFIGURATION EXAMPLES
// Copy and paste these into the <script> block at the top of index.html
// ═══════════════════════════════════════════════════════════

// ── Example 1: Basic Customization ──
window.CLAWDBOT_WEBCHAT_CONFIG = {
    name: 'My Assistant',
    emoji: '🤖',
    sessionKey: 'main',
    locale: 'en'
};

// ── Example 2: Turkish Language ──
window.CLAWDBOT_WEBCHAT_CONFIG = {
    name: 'Asistan',
    emoji: '🤖',
    sessionKey: 'main',
    locale: 'tr'
};

// ── Example 3: Custom Welcome Message ──
window.CLAWDBOT_WEBCHAT_CONFIG = {
    name: 'Buddy',
    emoji: '🐕',
    sessionKey: 'main',
    locale: 'en',
    strings: {
        welcomeMessage: 'Woof! 🐕 Ready to help!',
        newSessionStarted: 'New session! What can I do for you?'
    }
};

// ── Example 4: Matrix Theme Default ──
window.CLAWDBOT_WEBCHAT_CONFIG = {
    name: 'Neo',
    emoji: '💚',
    sessionKey: 'main',
    defaultTheme: 'matrix',
    locale: 'en'
};

// ── Example 5: Larger File Uploads (10MB) ──
window.CLAWDBOT_WEBCHAT_CONFIG = {
    name: 'Clawdbot',
    emoji: '🤖',
    sessionKey: 'main',
    maxFileSize: 10 * 1024 * 1024, // 10MB (make sure gateway supports this!)
    allowedFileTypes: 'image/*,video/*,audio/*,.gif,.pdf,.doc,.docx,.txt,.csv,.json,.xml,.zip,.psd,.ai',
    locale: 'en'
};

// ── Example 6: Multiple Custom Strings ──
window.CLAWDBOT_WEBCHAT_CONFIG = {
    name: 'Helper Bot',
    emoji: '🤝',
    sessionKey: 'main',
    locale: 'en',
    strings: {
        welcomeMessage: 'Hello! I\'m here to assist you 24/7 🚀',
        thinking: 'Processing...',
        working: 'Running tasks...',
        speaking: 'Responding...',
        messagePlaceholder: 'Ask me anything...',
        newSessionConfirm: 'Start a fresh conversation?',
        fileTooLarge: 'File is too large ({size}). Max size is {max}.',
        tokenPrompt: 'Please enter your access token',
        tokenInvalid: 'Invalid token. Please try again.'
    }
};

// ── Example 7: God Mode Theme with Custom Session ──
window.CLAWDBOT_WEBCHAT_CONFIG = {
    name: 'Oracle',
    emoji: '👁️',
    sessionKey: 'oracle-session',
    defaultTheme: 'god',
    locale: 'en',
    strings: {
        welcomeMessage: 'The Oracle is ready. What wisdom do you seek?',
        thinking: 'Consulting the cosmos...',
        speaking: 'The answer reveals itself...'
    }
};

// ── Example 8: Ocean Theme Personal Assistant ──
window.CLAWDBOT_WEBCHAT_CONFIG = {
    name: 'Wave',
    emoji: '🌊',
    sessionKey: 'personal',
    defaultTheme: 'ocean',
    locale: 'en',
    maxFileSize: 8 * 1024 * 1024,
    strings: {
        welcomeMessage: 'Riding the wave of productivity! 🌊 What\'s up?',
        thinking: 'Diving deep...',
        working: 'Swimming through tasks...'
    }
};
