# Move Game Kit

Game kit for the move-based chains, such as Aptos.

**Buidl based on the key feature of Move: Composability.**

> Whitepaper👉: https://bodhi.wtf/space/5/15080

There are series of tools and game example now:

* [Movecraft](https://github.com/rootMUD/movecraft): a decentralized craft impl in move, all the elements are NFTs, it could be use in the diff games.

  > Online App(Testnet) 👉: https://test.craft.rootmud.xyz/
  > 
  > Online App(Mainnet) 👉: https://craft.rootmud.xyz/
  > 
  > Github Link: https://github.com/rootMUD/movecraft

* [Move-Map](https://github.com/NonceGeek/move-map): to make the game map as the NFT, it could be play in the roguelike game example.

  > Online App(Testnet) 👉: https://map-nft.rootmud.xyz/
  >
  > Github Link: https://github.com/NonceGeek/move-map

* [Move-Roguelike](https://github.com/NonceGeek/move-roguelike): a roguelike game shows how the Move-Map & Movecraft could be used!

  > Online App(Testnet) 👉: https://roguelike.rootmud.xyz/
  >
  > Github Link: https://github.com/NonceGeek/move-roguelike

* [Scaffold-Aptos](https://github.com/NonceGeek/scaffold-aptos): Scaffold & Scaffold Examples for dev to buidl Move Games.

  > Online App(Testnet) 👉: https://scaffold.rootmud.xyz
  >
  > Github Link: https://github.com/NonceGeek/scaffold-aptos
  
* [MoveDID](https://github.com/NonceGeek/MoveDID): on-chain profile for Users.

  > Online App(Mainnet) 👉: https://manager.movedid.build
  >
  > Github Link: https://github.com/NonceGeek/MoveDID

```
+-----------+                Generate by the Recipe
| Movecraft |---- Cells NFT ----> Objects -----------+
+-----------+                                        |
                                                     |
+-----------+                                        |
| Move-Map  |---- Map NFT ----> Game Map ------+     |
+-----------+                                  |     |
                                               ↓     ↓
+----------------+                        +-------------------------+                      
| Move-Roguelike | ---------------------> | Be a "Dungeon Master" ! |
+----------------+                        +-------------------------+
```
