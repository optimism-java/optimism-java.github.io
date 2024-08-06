# Use the packaged binaries

You can install the Op-besu or Op-geth client to run a Optimism EL node from a binary distribution.

## Prerequisites

[Java JDK 21+](https://www.oracle.com/java/technologies/downloads/)

## Install from packaged binaries

Download the Op Besu [packaged binaires](https://github.com/optimism-java/op-besu/releases).

Unpack the downloaded files and change into the `op-besu-<release>` directory.

## Run a Op-Besu node

=== "op sepolia"

    ```shell
    cd op-besu-<release> && \
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

=== "devnet or other"

    ```shell
    cd op-besu-<release> && \
    ./bin/besu \
    --genesis-file=<devnet genesis file> \
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