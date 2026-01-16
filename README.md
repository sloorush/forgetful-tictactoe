# Disappearing Tic-Tac-Toe

A twist on the classic game where your oldest move disappears on your 4th turn. Play online with friends - no server required!

**Play now:** [https://sloorush.github.io/forgetful-tictactoe/](https://sloorush.github.io/forgetful-tictactoe/)

## How to Play

1. Take turns placing X's and O's on the board
2. Each player can have a maximum of **3 pieces** on the board
3. On your 4th turn, your first move disappears automatically
4. First player to get 3 in a row wins!

## Multiplayer

### Create a Game
1. Click **"Create Room"**
2. Share the generated link with your friend
3. Wait for them to join

### Join a Game
- Click the shared link to auto-join, OR
- Click **"Join Room"** and enter the room code

### Watch a Game
- Click **"Spectate"** and enter a room code, OR
- Use the spectate URL: `?spectate=CODE`

### Features
- Real-time P2P gameplay (no lag from servers)
- Connection status indicator
- Rematch button after game ends
- Spectator mode for watching games
- Reconnection support if you refresh
- Works on any modern browser

## Customization

### Themes
Choose from 4 visual themes:
- **Classic** - Blue X, Red O, light background
- **Dark Mode** - Easy on the eyes
- **Neon** - Glowing cyberpunk style
- **Retro** - Game Boy inspired

### Sound Effects
Toggle sound on/off with the speaker button. Includes sounds for:
- Placing pieces
- Pieces disappearing
- Winning/losing
- Player connect/disconnect

## Technical Details

Built with vanilla HTML, CSS, and JavaScript. Multiplayer uses [PeerJS](https://peerjs.com/) for WebRTC peer-to-peer connections.

- **No backend server required** - runs entirely on static hosting
- **P2P architecture** - game data flows directly between players
- **Reliable connections** - retry logic, heartbeat monitoring, STUN + TURN servers
- **Reconnection support** - game state saved to sessionStorage
- **Mobile optimized** - responsive design with touch-friendly controls

See [FINDINGS.md](./FINDINGS.md) for technical implementation details.

## Local Development

Just open `index.html` in a browser. No build step required.

```bash
# Or use a simple server
python -m http.server 8000
# Then open http://localhost:8000
```

## Deploy

Works on any static hosting:
- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

Simply deploy the `index.html` file.

## Credits

- **Ideated by:** prx
- **Made by:** rush & claude

## License

MIT
