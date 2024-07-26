# Start Hildr
Hildr is an OP Stack rollup client written in Java 21. And follow the [spec](https://github.com/ethereum-optimism/optimism/blob/develop/specs/rollup-node.md):

[Magi](https://github.com/a16z/magi)

[Op-node](https://github.com/ethereum-optimism/optimism/tree/develop/op-node)

## Run on Optimism Sepolia

### Prerequisites

[Java JDK 21+](https://www.oracle.com/java/technologies/downloads/)

### Download jar

Download the [Hildr jar](https://github.com/optimism-java/hildr/releases).

### Run a node

```shell
java --enable-preview \
-cp hildr-node.jar io.optimism.Hildr \
--network optimism-sepolia \
--jwt-secret ./jwt.hex \
--l1-rpc-url http://localhost:9545 \
--l1-ws-rpc-url ws://localhost:9546 \
--l1-beacon-url http://localhost:4000 \
--l2-rpc-url http://localhost:8545 \
--l2-engine-url http://localhost:8551 \
--rpc-port 11545 \
--log-level INFO \ # can be either: "DEBUG","TRACE","WARN","ERROR"
--sync-mode full >l2-hildr-node.log 2>&1 &
```

## Run with docker on Optimism Sepolia

### Pull docker image

```shell
docker pull ghcr.io/optimism-java/hildr:latest
```
### Run a node with docker

```shell
docker run -it -p 11545:11545 \
-v <you jwt secret>:/jwt/jwtsecret \
ghcr.io/optimism-java/op-besu:latest -- \
--network optimism-sepolia \ # can be either: "optimism","base","base-sepolia"
--jwt-secret ./jwt.hex \
--l1-rpc-url http://localhost:9545 \
--l1-ws-rpc-url ws://localhost:9546 \
--l1-beacon-url http://localhost:4000 \
--l2-rpc-url http://localhost:8545 \
--l2-engine-url http://localhost:8551 \
--rpc-port 11545 \
--log-level INFO \ # can be either: "DEBUG","TRACE","WARN","ERROR"
--sync-mode full
```

### Run on other network

If you want to run on the anyother network, you need to prepare the configuration file rollup.json, then add a devnet option, and finally modify the network value to the path of the rollup.json file:
```shell
--devnet
--network=<rollup.json file>
```

