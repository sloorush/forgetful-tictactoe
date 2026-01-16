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

### Features
- Real-time P2P gameplay (no lag from servers)
- Connection status indicator
- Rematch button after game ends
- Works on any modern browser

## Technical Details

Built with vanilla HTML, CSS, and JavaScript. Multiplayer uses [PeerJS](https://peerjs.com/) for WebRTC peer-to-peer connections.

- **No backend server required** - runs entirely on static hosting
- **P2P architecture** - game data flows directly between players
- **Reliable connections** - retry logic, heartbeat monitoring, multiple STUN servers

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
