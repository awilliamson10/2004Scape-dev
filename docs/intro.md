---
sidebar_position: 1
---

# 2004Scape Developer Documentation

**2004Scape Dev** is an attempt to create an unofficial developer documentation source for the LostCity RuneScape 2 emulation project. This documentation will help you get started with contributing to the project.

## Getting Started

To get started contributing to 2004Scape, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) version 20 or above
- [Java](https://adoptium.net/) version 17 LTS or later
- Git

### Setting Up the Development Environment

1. Clone the repository:

```bash
git clone https://github.com/2004Scape/Server.git
cd Server
```

2. Run the quickstart script:

```bash
# For Windows
quickstart.bat

# For Linux/macOS
./quickstart.sh
```

3. Follow the on-screen prompts to configure your environment.

4. Wait for the setup to complete and for the world to start before trying to play.

## Development Workflow

### For Content Developers

Run `npm start` to start the server. It will watch for changes to scripts and configs, then automatically repack everything.

### For Engine Developers

Run `npm run dev` for development. This does what `npm start` does, but also completely restarts the server when engine code has changed.

## Common Issues

If you encounter any of the following issues, here's how to resolve them:

- **`bad option: --import`**: You're using an older version of Node. Reinstall and re-run.
- **`'java' is not recognized as an internal or external command`**: You do not have Java installed.
- **Java version errors**: If you have multiple Java versions, set `JAVA_PATH=path-to-java.exe` in your .env file.

## Contribution Guidelines

We welcome contributions from everyone. Here's how you can contribute:

1. Fork the repository
2. Create a branch for your feature
3. Make your changes
4. Submit a pull request

Please read our detailed contribution guidelines in the [Contributing](./contributing) section.

## Need Help?

Join the [Discord community](https://discord.gg/UZXdsTmuEs) or visit the [Forum](https://lostcity.rs/) for assistance.
