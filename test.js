#!/usr/bin/env node
/**
 * Automated tests for Disappearing Tic-Tac-Toe
 * Run with: node test.js
 */

const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

let passed = 0;
let failed = 0;

function test(name, condition) {
    if (condition) {
        console.log(`  ✓ ${name}`);
        passed++;
    } else {
        console.log(`  ✗ ${name}`);
        failed++;
    }
}

function section(name) {
    console.log(`\n${name}`);
}

// ==================== HTML Structure ====================
section('HTML Structure');
test('Theme selector exists', html.includes('id="theme-select"'));
test('Theme option: Classic', html.includes('>Classic</option>'));
test('Theme option: Dark Mode', html.includes('>Dark Mode</option>'));
test('Theme option: Neon', html.includes('>Neon</option>'));
test('Theme option: Retro', html.includes('>Retro</option>'));
test('Mute button exists', html.includes('id="mute-button"'));
test('Sound icon element', html.includes('id="sound-icon"'));
test('Spectator banner', html.includes('id="spectator-banner"'));
test('Spectate button', html.includes('showSpectateRoom()'));
test('Reconnect overlay', html.includes('id="reconnect-overlay"'));
test('Reconnect message', html.includes('id="reconnect-message"'));

// ==================== CSS Themes ====================
section('CSS Themes');
test('CSS variables in :root', html.includes(':root {'));
test('--x-color variable', html.includes('--x-color:'));
test('--o-color variable', html.includes('--o-color:'));
test('Dark theme class', html.includes('body.theme-dark {'));
test('Neon theme class', html.includes('body.theme-neon {'));
test('Retro theme class', html.includes('body.theme-retro {'));
test('Neon glow effect', html.includes('text-shadow: 0 0 10px var(--x-color)'));

// ==================== CSS Animations ====================
section('CSS Animations');
test('@keyframes placeIn', html.includes('@keyframes placeIn'));
test('@keyframes disappearOut', html.includes('@keyframes disappearOut'));
test('@keyframes winPulse', html.includes('@keyframes winPulse'));
test('@keyframes turnPulse', html.includes('@keyframes turnPulse'));
test('place-animation class', html.includes('.cell.place-animation'));
test('disappear-animation class', html.includes('.cell.disappear-animation'));
test('winning-cell class', html.includes('.cell.winning-cell'));

// ==================== Mobile Responsiveness ====================
section('Mobile Responsiveness');
test('Media query 480px', html.includes('@media (max-width: 480px)'));
test('Media query 360px', html.includes('@media (max-width: 360px)'));
test('Touch action manipulation', html.includes('touch-action: manipulation'));
test('Stamp hidden on mobile', html.includes('.stamp { display: none; }') || html.includes('.stamp {\n                display: none;'));
test('-webkit-tap-highlight-color', html.includes('-webkit-tap-highlight-color'));

// ==================== TURN Servers ====================
section('TURN Server Configuration');
test('TURN server URL', html.includes('turn:openrelay.metered.ca'));
test('TURN port 80', html.includes("urls: 'turn:openrelay.metered.ca:80'"));
test('TURN port 443', html.includes("urls: 'turn:openrelay.metered.ca:443'"));
test('TURN TCP transport', html.includes('transport=tcp'));
test('TURN username', html.includes("username: 'openrelayproject'"));
test('TURN credential', html.includes("credential: 'openrelayproject'"));

// ==================== Sound Effects ====================
section('Sound Effects (Web Audio API)');
test('AudioContext initialization', html.includes('new (window.AudioContext || window.webkitAudioContext)'));
test('playTone function', html.includes('function playTone('));
test('playPlaceSound function', html.includes('function playPlaceSound()'));
test('playDisappearSound function', html.includes('function playDisappearSound()'));
test('playWinSound function', html.includes('function playWinSound()'));
test('playLoseSound function', html.includes('function playLoseSound()'));
test('playConnectSound function', html.includes('function playConnectSound()'));
test('playDisconnectSound function', html.includes('function playDisconnectSound()'));
test('toggleMute function', html.includes('function toggleMute()'));
test('Mute state in localStorage', html.includes("localStorage.getItem('ttt-muted')"));

// ==================== Theme System ====================
section('Theme System');
test('setTheme function', html.includes('function setTheme('));
test('loadTheme function', html.includes('function loadTheme()'));
test('Theme saved to localStorage', html.includes("localStorage.setItem('ttt-theme'"));
test('Theme loaded on init', html.includes('loadTheme()'));

// ==================== Reconnection ====================
section('Reconnection System');
test('saveGameState function', html.includes('function saveGameState()'));
test('loadGameState function', html.includes('function loadGameState()'));
test('clearGameState function', html.includes('function clearGameState()'));
test('checkForReconnection function', html.includes('function checkForReconnection()'));
test('showReconnectDialog function', html.includes('function showReconnectDialog('));
test('attemptReconnection function', html.includes('function attemptReconnection()'));
test('abandonReconnection function', html.includes('function abandonReconnection()'));
test('sessionStorage for game state', html.includes("sessionStorage.setItem('ttt-game-state'"));
test('beforeunload event listener', html.includes("window.addEventListener('beforeunload'"));
test('RECONNECT_TIMEOUT constant', html.includes('RECONNECT_TIMEOUT'));

// ==================== Spectator Mode ====================
section('Spectator Mode');
test('isSpectator state variable', html.includes('let isSpectator = false'));
test('spectatorConnections array', html.includes('let spectatorConnections = []'));
test('showSpectateRoom function', html.includes('function showSpectateRoom()'));
test('spectateRoom function', html.includes('function spectateRoom()'));
test('handleSpectatorData function', html.includes('function handleSpectatorData('));
test('startSpectatorMode function', html.includes('function startSpectatorMode()'));
test('broadcastToSpectators function', html.includes('function broadcastToSpectators('));
test('updateSpectatorCount function', html.includes('function updateSpectatorCount()'));
test('Spectator URL parameter check', html.includes("params.get('spectate')"));
test('Spectator identify message', html.includes("role: 'spectator'"));
test('Spectator blocks moves', html.includes('if (isSpectator) return'));

// ==================== Game Logic ====================
section('Game Logic');
test('winningCombo tracking', html.includes('let winningCombo = null'));
test('lastPlacedIndex tracking', html.includes('let lastPlacedIndex = null'));
test('lastDisappearedIndex tracking', html.includes('let lastDisappearedIndex = null'));
test('checkWinner sets winningCombo', html.includes('winningCombo = combo'));
test('Winning cells highlighted', html.includes("cell.classList.add('winning-cell')"));
test('Turn pulse animation', html.includes("currentPlayerEl.classList.add('pulse')"));
test('Sound on piece place', /makeMove[\s\S]*?playPlaceSound\(\)/.test(html));
test('Sound on piece disappear', /makeMove[\s\S]*?playDisappearSound/.test(html));
test('State saved after move', /makeMove[\s\S]*?saveGameState\(\)/.test(html));
test('Broadcast to spectators after move', /makeMove[\s\S]*?broadcastToSpectators/.test(html));

// ==================== Connection Handling ====================
section('Connection Handling');
test('handleIncomingConnection function', html.includes('function handleIncomingConnection('));
test('identify-request message type', html.includes("type: 'identify-request'"));
test('identify message type', html.includes("type: 'identify'"));
test('room-full message type', html.includes("type: 'room-full'"));
test('game-state message type', html.includes("type: 'game-state'"));
test('Sound on connect', html.includes('playConnectSound()'));
test('Sound on disconnect', html.includes('playDisconnectSound()'));

// ==================== Results ====================
console.log('\n' + '='.repeat(50));
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log('='.repeat(50));

process.exit(failed > 0 ? 1 : 0);
