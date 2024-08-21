import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Use the packaged binaries

## Prerequisites

Download and install the [Java JDK 21+](https://www.oracle.com/java/technologies/downloads/)

## Install from packaged binaries

Download the Op Besu [packaged binaries](https://github.com/optimism-java/op-besu/releases).

```shell
wget https://github.com/optimism-java/op-besu/releases/download/v0.1.0/op-besu-v0.1.0.tar.gz
```
Unpack the downloaded file into the `op-besu-<release>` directory.

```shell
tar -xvf op-besu-v0.1.0.tar.gz
```

## Create a JWT Secret

You can check the [JWT secret creation tutorial](https://docs.optimism.io/builders/node-operators/tutorials/testnet#create-a-jwt-secret)
to learn how to create a JWT secret.

```shell
openssl rand -hex 32 > jwt.txt
```

## Navigate to your op-besu directory

Find the directory where you built the `op-besu` binary.

```shell
cd op-besu-v0.1.0
```

## Copy in the JWT secret

Copy the JWT secret you generated in a previous step into the `op-besu` directory.

```bash
cp /path/to/jwt.txt .
```

## Prepare the data directory

```bash
mkdir datadir 
```

## Run an op-besu node

<Tabs>
  <TabItem value="op sepolia" label="op sepolia" default>

    ```shell
    ./bin/besu \
    --network=OP_SEPOLIA \
    --p2p-enabled=false \
    --discovery-enabled=false \
    --data-path=datadir \
    --engine-rpc-enabled \
    --engine-jwt-secret=./jwt.txt \
    --rpc-http-enabled \
    --host-allowlist=* \
    --engine-host-allowlist=* \
    --logging=INFO \
    --version-compatibility-protection=false
    ```

</TabItem>

<TabItem value="devnet or other" label="devnet or other">
You can check how to generate a devnet genesis file [here](https://docs.optimism.io/builders/chain-operators/deploy/genesis).
Also you could use the [optimism devnet tool](https://github.com/ethpandaops/optimism-package).

    ```shell
    ./bin/besu \
    --genesis-file=<devnet genesis file> \
    --p2p-enabled=false \
    --discovery-enabled=false \
    --data-path=datadir \
    --engine-rpc-enabled \
    --engine-jwt-secret=./jwt.txt \
    --rpc-http-enabled \
    --host-allowlist=* \
    --engine-host-allowlist=* \
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