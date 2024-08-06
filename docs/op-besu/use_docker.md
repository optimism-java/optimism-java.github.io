# Use docker

You can use Docker to run [Op-Besu](https://github.com/optimism-java/op-besu) or [Op-Geth](https://github.com/ethereum-optimism/op-geth) as a Optimism EL node on the testnets.

## Prerequisites

Download and install [Docker](https://www.docker.com/products/docker-desktop).

## Pull docker image

```shell
docker pull docker pull ghcr.io/optimism-java/op-besu:latest
```

## Start a Op-Besu node

=== "op sepolia"
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

=== "devnet or other"
    ```shell
    docker run -it -p 8545:8545 -p 8551:8551 -v <you jwt secret>:/jwt/jwtsecret \
    ghcr.io/optimism-java/op-besu:latest -- \
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

