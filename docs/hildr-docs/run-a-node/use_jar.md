import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Use the Hildr jar

## Prerequisites

[Java JDK 21+](https://www.oracle.com/java/technologies/downloads/)

## Download the Hildr jar

Download the [Hildr jar](https://github.com/optimism-java/hildr/releases).

## Start a Hildr node

<Tabs>
  <TabItem value="op sepolia" label="op sepolia" default>

    ```shell
    java --enable-preview \
    -cp <the Hildr jar file> io.optimism.Hildr \
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

</TabItem>

<TabItem value="devnet or other" label="devnet or other">

    ```shell
    java --enable-preview \
    -cp <the Hildr jar file> io.optimism.Hildr \
    --devnet \
    --network <rollup.json file> \
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

</TabItem>
</Tabs>
