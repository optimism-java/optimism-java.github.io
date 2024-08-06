# Use docker

You can use Docker to run [Hildr](https://github.com/optimism-java/hildr) as an Optimism CL node.

## Pull docker image

```shell
docker pull ghcr.io/optimism-java/hildr:latest
```

## Start a Hildr node

=== "op sepolia"
    ```shell
    docker run -it -p 11545:11545 \
    -v <you jwt secret>:/jwt/jwt.hex \
    ghcr.io/optimism-java/op-besu:latest -- \
    --network optimism-sepolia \ # can be either: "optimism","base","base-sepolia"
    --jwt-file /jwt/jwt.hex \
    --l1-rpc-url http://localhost:9545 \
    --l1-ws-rpc-url ws://localhost:9546 \
    --l1-beacon-url http://localhost:4000 \
    --l2-rpc-url http://localhost:8545 \
    --l2-engine-url http://localhost:8551 \
    --rpc-port 11545 \
    --log-level INFO \ # can be either: "DEBUG","TRACE","WARN","ERROR"
    --sync-mode full
    ```

=== "devnet or other"
    ```shell
    docker run -it -p 11545:11545 \
    -v <your jwt secret>:/jwt/jwt.hex \
    -v <your rollup.json file>:/network-configs/rollup.json
    ghcr.io/optimism-java/op-besu:latest -- \
    --devnet \
    --network=/network-configs/rollup.json \
    --jwt-file /jwt/jwt.hex \
    --l1-rpc-url http://localhost:9545 \
    --l1-ws-rpc-url ws://localhost:9546 \
    --l1-beacon-url http://localhost:4000 \
    --l2-rpc-url http://localhost:8545 \
    --l2-engine-url http://localhost:8551 \
    --rpc-port 11545 \
    --log-level INFO \ # can be either: "DEBUG","TRACE","WARN","ERROR"
    --sync-mode full
    ```
