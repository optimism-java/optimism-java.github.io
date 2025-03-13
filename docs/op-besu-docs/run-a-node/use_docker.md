import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Use Docker

You can use Docker to run [Op-Besu](https://github.com/optimism-java/op-besu) as an Optimism EL node on the testnets.

## Prerequisites

Download and install [Docker](https://docs.docker.com/get-started/get-docker/).

## Pull Docker image

```shell
docker pull ghcr.io/optimism-java/op-besu:latest
```

## Create a JWT Secret

You can check the [JWT secret creation tutorial](https://docs.optimism.io/builders/node-operators/tutorials/testnet#create-a-jwt-secret)
to learn how to create a JWT secret.

```shell
openssl rand -hex 32 > jwt.txt
```

## Prepare the data directory

```bash
mkdir datadir 
```

## Start a Op-besu node

<Tabs>
  <TabItem value="op sepolia" label="op sepolia" default>

```shell 
docker run -it -p 8545:8545 -p 8551:8551 -v ./jwt.txt:/jwt/jwtsecret \
-v ./datadir:/data/ \
ghcr.io/optimism-java/op-besu:latest \
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

</TabItem>

<TabItem value="devnet or other" label="devnet or other">

```shell 
docker run -it -p 8545:8545 -p 8551:8551 -v ./jwt.txt:/jwt/jwtsecret \
-v ./datadir:/data/ \
ghcr.io/optimism-java/op-besu:latest \
--genesis-file=<devnet genesis file> \
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

</TabItem>
</Tabs>

:::danger Warning

The following settings are a security risk in production environments:

- Enabling the HTTP JSON-RPC service (`--rpc-http-enabled`) and setting `--rpc-http-host` to 0.0.0.0 exposes the RPC connection on your node to any remote connection.
- Setting `--host-allowlist` to `"*"` allows JSON-RPC API access from any host.
- Setting `--rpc-http-cors-origins` to `"all"` or `"*"` allows cross-origin resource sharing (CORS) access from any domain.

:::
