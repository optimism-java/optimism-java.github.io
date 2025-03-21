import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Use docker

You can use Docker to run [Op-Besu](https://github.com/optimism-java/op-besu) as an Optimism EL node on the testnets.

## Prerequisites

Download and install [Docker](https://docs.docker.com/get-started/get-docker/).

## Pull docker image

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
chmod 777 datadir
```

## Start a Op-besu node

<Tabs>
  <TabItem value="op sepolia" label="op sepolia" default>

```shell 
docker run -it --name op-besu -p 8545:8545 -p 8551:8551 -v ./jwt.txt:/jwt/jwtsecret \
-v ./datadir:/data/ \
ghcr.io/optimism-java/op-besu:latest \
--network=OP_SEPOLIA \
--sync-mode=FULL \
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
docker run -it --name op-besu-devnet -p 8545:8545 -p 8551:8551 -v ./jwt.txt:/jwt/jwtsecret \
-v ./datadir:/data/ \
ghcr.io/optimism-java/op-besu:latest \
--genesis-file=<devnet genesis file> \
--network-id=<network id> \
--sync-mode=FULL \
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

## Start op-node to sync L2 state

After starting the Op-Besu node, you can start the op-node to sync state.

Pull docker image of hildr:

```shell
docker pull us-docker.pkg.dev/oplabs-tools-artifacts/images/op-node:v1.12.2
```

Get IP of the op-besu container, and op-node container will use it to connect to op-besu via the docker bridge:

```shell
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' op-besu
```

Start op-node node:

```shell
docker run -d -it --name op-node -p 11545:11545 \
-v ./jwt.txt:/jwt/jwt.txt \
--entrypoint op-node \
us-docker.pkg.dev/oplabs-tools-artifacts/images/op-node:v1.12.2 \
--network op-sepolia \
--l1.rpckind=basic \
--l1=<l1-rpc-url> \
--l2=<op-besu-engine-rpc-url> \
--rpc.addr=0.0.0.0 \
--rpc.port=11545 \
--l2.jwt-secret=/jwt/jwt.txt \
--l1.trustrpc \
--l1.beacon=<l1-beacon-sepolia-rpc-url> \
--syncmode=consensus-layer
```

The synchronization needs to handle empty messages at the beginning, and the actual block synchronization will take place about 15 minutes later.

For example, use curl get block data from op-besu:

```bash
curl --request POST 'https://localhost:8545' \
--header 'Content-Type: application/json' \
--data-raw '{"id":2, "jsonrpc":"2.0", "method": "eth_getBlockByNumber", "params":["0xe", true]}'
```

You can confirm whether the block and transaction information is correct through the [Sepolia network's blockchain explorer](https://sepolia-optimism.etherscan.io/).