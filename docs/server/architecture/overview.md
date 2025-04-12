---
sidebar_position: 1
---

# Architecture Overview

This document provides a high-level overview of the Lost City Server architecture, illustrating how different components interact to create a complete RuneScape 2 emulation system.

## System Architecture

The Lost City Server is built using a modular architecture that separates concerns and allows different components to evolve independently. The diagram below shows the main systems and their relationships:

```mermaid
flowchart TD
    Client[Client] <--> Network[Network Layer]
    Network <--> ServerComponents[Server Components]
    ServerComponents <--> Engine[Game Engine]
    Engine <--> WorldSystem[World System]
    Engine <--> RuneScript[RuneScript Interpreter]
    WorldSystem <--> Database[Database]
    RuneScript <--> ContentSystem[Content System]
    Cache[Cache System] --> Engine
    Cache --> NetworkProtocol[Network Protocol]
    
    subgraph Core Systems
        Engine
        WorldSystem
        RuneScript
    end
    
    subgraph Infrastructure
        Network
        Cache
        Database
    end
    
    subgraph Game Content
        ContentSystem
        ServerComponents
    end

    class Client external
    classDef external fill:#f9f,stroke:#333,stroke-width:2px
```

## Component Relationships

The server consists of several key components that work together:

```mermaid
flowchart TB
    subgraph Engine["Game Engine"]
        Tick[Tick System] --> EntityMgmt[Entity Management]
        EntityMgmt --> WorldState[World State]
    end
    
    subgraph Network["Network Layer"]
        TCP[TCP Server] --> Protocol[Protocol Handlers]
        WS[WebSocket Server] --> Protocol
        Protocol --> PacketHandlers[Packet Handlers]
    end
    
    subgraph Components["Server Components"]
        Login[Login System] --> Friend[Friend System]
        Login --> Chat[Chat System]
        World[World System] --> Player[Player Management]
        World --> NPC[NPC Management]
    end
    
    subgraph Content["Content System"]
        Scripts[RuneScript Files] --> CommandProcs[Commands & Procedures]
        Maps[Map Data] --> WorldBuilder[World Builder]
        Items[Item Definitions] --> ItemSystem[Item System]
    end
    
    subgraph Cache["Cache System"]
        AssetLoader[Asset Loader] --> ModelCache[Model Cache]
        AssetLoader --> MapCache[Map Cache]
        AssetLoader --> SpriteCache[Sprite Cache]
    end
    
    subgraph Database["Database"]
        PlayerData[Player Data] --> Inventory[Inventory]
        PlayerData --> Stats[Stats]
        PlayerData --> Quests[Quest Progress]
    end
    
    Network <--> Components
    Components <--> Engine
    Engine <--> Content
    Engine <--> Cache
    Components <--> Database
    Content <--> Cache
```

## Data Flow

This diagram shows how data flows through the system when a player performs an action:

```mermaid
sequenceDiagram
    participant Client
    participant Network as Network Layer
    participant GameServer as Game Server
    participant Engine as Game Engine
    participant RuneScript as RuneScript
    participant World as World System
    participant DB as Database
    
    Client->>Network: Send Action Packet
    Network->>GameServer: Decode Packet
    GameServer->>Engine: Process Player Action
    Engine->>RuneScript: Execute Script Command
    RuneScript->>World: Update World State
    World->>DB: Persist Changes
    World->>Engine: Notify of State Change
    Engine->>GameServer: Prepare Update Packets
    GameServer->>Network: Encode Update Packets
    Network->>Client: Send Updates
```

## Deployment Architecture

The server can be deployed in different configurations depending on requirements:

```mermaid
flowchart TD
    subgraph ClientSide[Client Side]
        WebClient[Web Client]
        StandaloneClient[Standalone Client]
    end
    
    subgraph ServerSide[Server Side]
        subgraph WebServer[Web Server]
            Static[Static Assets]
            APIEndpoints[API Endpoints]
        end
        
        subgraph GameServer[Game Server]
            LoginServer[Login Server]
            WorldServer[World Server]
        end
        
        subgraph Database[Database]
            PlayerDB[Player Database]
            ContentDB[Content Database]
        end
        
        subgraph CacheServer[Cache Server]
            ModelCache[Model Cache]
            MapCache[Map Cache]
            SpriteCache[Sprite Cache]
        end
    end
    
    WebClient --> WebServer
    WebClient --> GameServer
    StandaloneClient --> GameServer
    WebServer --> GameServer
    GameServer --> Database
    GameServer --> CacheServer
    
    classDef client fill:#f9f,stroke:#333,stroke-width:1px
    classDef server fill:#bbf,stroke:#333,stroke-width:1px
    classDef database fill:#bfb,stroke:#333,stroke-width:1px
    
    class WebClient,StandaloneClient client
    class WebServer,GameServer,CacheServer server
    class Database database
```

## Technical Stack

The Lost City Server is built using the following technologies:

| Component | Technology |
|-----------|------------|
| Server Runtime | Node.js |
| Language | TypeScript |
| Database | Prisma ORM with PostgreSQL |
| Network | WebSockets and TCP sockets |
| HTTP Server | Express.js |
| Testing | Vitest |
| Build System | npm/pnpm |
| Content Parsing | Custom RuneScript interpreter |
| Caching | In-memory caching with file system persistence |

## Next Steps

Detailed documentation for each component will be provided in the following sections:
- [Component Details](./components.md)
- [Data Flow](./data-flow.md)
- [Deployment Architecture](./deployment.md) 