# Start Op-Besu
A fork of [Besu](https://github.com/hyperledger/besu) that supports the [execution engine](https://github.com/ethereum-optimism/specs/blob/main/specs/fjord/exec-engine.md) of [OP stack](https://stack.optimism.io/).
The document will introduce how to start a Op-Besu node using packaged binaries and Docker.

## Run on Optimism Sepolia

### Prerequisites

[Java JDK 21+](https://www.oracle.com/java/technologies/downloads/)

### Install from packaged binaries

Download the Op Besu [packaged binaires](https://github.com/optimism-java/op-besu/releases).

Unpack the downloaded files and change into the `besu-<release>` directory.

### Run a node
```shell
cd besu-<release> && \
./bin/besu \
--network=OP_SEPOLIA \
--p2p-enabled=false \
--discovery-enabled=false \
--data-path=<your data dir> \
--engine-rpc-enabled \
--engine-jwt-secret=<jwt secret file> \
--rpc-http-enabled \
--host-allowlist=* \
--engine-host-allowlist=* \
--logging=INFO \
--version-compatibility-protection=false
```

## Run with docker on Optimism Sepolia

### Pull docker image

```shell
docker pull docker pull ghcr.io/optimism-java/op-besu:latest
```
### Run a node with docker

```shell
docker run -it -p 8545:8545 -p 8551:8551 -v <you jwt secret>:/jwt/jwtsecret \
ghcr.io/optimism-java/op-besu:latest -- \
--network=OP_SEPOLIA \
--p2p-enabled=false \
--discovery-enabled=false \
--data-path="/data/" \
--engine-rpc-enabled \
--engine-jwt-secret="/jwt/jwtsecret" \
--rpc-http-enabled \
--host-allowlist="*" \
--engine-host-allowlist="*" \
--logging=INFO \
--version-compatibility-protection=false
```
docker run -it -p 8545:8545 -p 8551:8551 -v <you jwt secret>:/jwt/jwtsecret \
4b7ab2b50a39 \
--network=OP_SEPOLIA \
--p2p-enabled=false \
--discovery-enabled=false \
--engine-rpc-enabled \
--engine-jwt-secret="/jwt/jwtsecret" \
--rpc-http-enabled \
--host-allowlist="*" \
--engine-host-allowlist="*" \
--logging=INFO \
--version-compatibility-protection=false

## Run on other network

If you want to run on the anyother network, you first need to prepare the genesis.json file, then remove the `network` parameter from the command line and add it as the `genesis-file` parameter:

```shell
--genesis-file=<devnet genesis file>
```