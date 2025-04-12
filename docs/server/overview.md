---
sidebar_position: 1
---

# Server Overview

The 2004Scape server is a TypeScript implementation of a RuneScape 2 emulation server as it was in May 2004. This document provides an overview of the server architecture, its components, and how they work together.

## Purpose

The Lost City Server aims to:
1. Provide an accurate emulation of RuneScape 2 as it existed in May 2004
2. Create a modular, extensible codebase that can be easily maintained and enhanced
3. Support both original and custom game content through the RuneScript language
4. Offer a platform for preserving and studying the historical significance of early RuneScape 2

## Key Systems

The server is built around several core systems:

### Game Engine
The central component that manages the game world state, entity lifecycle, and coordinates all game systems. The engine implements a tick-based system where the game state is updated at regular intervals.

### RuneScript Interpreter
A custom interpreter for the RuneScript language, which is used to define game content, quests, interactions, and game logic. This interpreter allows for dynamic content creation and modification without changing the core engine code.

### Network Layer
Handles client-server communication, implementing the RuneScape protocol for both TCP and WebSocket connections. This layer manages packet encoding/decoding, session management, and connection handling.

### World System
Manages the game world state, including maps, objects, items, and NPCs. It handles player movement, interactions, and manages the overall world simulation.

### Cache System
Responsible for loading, managing, and providing access to game assets such as models, maps, sprites, and animations. The cache system optimizes memory usage and improves performance by efficiently managing asset data.

### Content System
Compiles and manages game content defined through RuneScript files, including quests, dialogues, and interactions. This system bridges the gap between the content definitions and the game engine.

### Database System
Handles persistence of player data, world state, and other information that needs to be saved between server restarts. This ensures player progress and important game state is preserved.

## Code Organization

The server codebase is organized into logical modules:

| Directory | Purpose |
|-----------|---------|
| `src/engine` | Core game engine and simulation logic |
| `src/server` | Server implementation and lifecycle management |
| `src/network` | Network protocol and communication handlers |
| `src/cache` | Asset management and caching systems |
| `src/db` | Database models and persistence layer |
| `src/io` | File system and resource access abstractions |
| `src/util` | Utility functions and shared helpers |
| `src/wordenc` | Text processing and word encoding utilities |

## Getting Started

For a deeper understanding of the server architecture, we recommend exploring:

- [Architecture Overview](./architecture/overview.md) - High-level system design and interactions
- [Core Concepts](./core-concepts/runescript.md) - Fundamental concepts like RuneScript and the game engine
- [Component Documentation](./components/world-system.md) - Details on specific components and systems

## Additional Resources

- [GitHub Repository](https://github.com/2004Scape/Server) - Browse the source code directly
- [Contributing Guide](../contributing.md) - Learn how to contribute to the project
- [RuneScript Documentation](./runescript/introduction.md) - Learn about the RuneScript language 