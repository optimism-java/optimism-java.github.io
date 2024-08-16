import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Command line options
The reference describes the syntax of Hildr command line interface(CLI) options.

The command-line help listing is reproduced below for your convenience. The same information can be obtained at any time from your Hildr instance by running:

```shell
java --enable-preview -cp hildr-node.jar io.optimism.Hildr --help
```

## Options

### `devnet`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --devnet
    ```

</TabItem>
</Tabs>

Specify whether to start up a Hildr devnet node.

### `network`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --network=<String|FILE>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --network=optimism-sepolia
    ```

</TabItem>
</Tabs>

When using the `--network` option, you can specify a network name or a path to a rollup configuration file.

### `l1-rpc-url`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --l1-rpc-url=<URL>
    ```

</TabItem>
<TabItem value="Example" label="Example">

    ```shell
    --l1-rpc-url=https://eth-sepolia.g.alchemy.com/v2/Qmy...
    ```

</TabItem>
</Tabs>

The URL of the L1 Ethereum node that your Hildr node will connect to.

### `l1-ws-rpc-url`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --l1-ws-rpc-url=<URL>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --l1-ws-rpc-url=wss://eth-sepolia.g.alchemy.com/v2/Qmy...
    ```

</TabItem>
</Tabs>

The URL of the L1 Ethereum node that your Hildr node will connect to via Websocket.

### `l1-beacon-url`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --l1-beacon-url=<URL>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --l1-beacon-url=https://few-sleek-sound.ethereum-sepolia.quiknode.pro/8e8...2e1
    ```

</TabItem>
</Tabs>

The URL of the L1 Ethereum beacon node that your Hildr node will request to.

### `--l1-beacon-archiver-url`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --l1-beacon-url=<URL>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --l1-beacon-url=https://few-sleek-sound.ethereum-sepolia.quiknode.pro/8e8...2e1
    ```

</TabItem>
</Tabs>

When the current blob data has been cleared by the beacon node and cannot be queried, the Hildr node will request this URL.

### `l2-rpc-url`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --l2-rpc-url=<URL>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --l2-rpc-url=http://localhost:8545
    ```

</TabItem>
</Tabs>

The URL of the L2 Optimism Execution Client node that your Hildr node will connect to.

### `jwt-secret`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --jwt-secret=<HEX>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --jwt-secret=2b3c0b6f...2a12ff2caaf90a
    ```

</TabItem>
</Tabs>

Engine API JWT Secret. This is used to authenticate with the Engine JSON-RPC API.Contents of file must be at least 32 hex-encoded bytes and not begin with 0x.

### `jwt-file`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --jwt-file=<FILE>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --jwt-file=./jwt-secret.txt
    ```

</TabItem>
</Tabs>

Engine API JWT Secret File used to Hildr node when using the Engine JSON-RPC API (both HTTP and WebSocket). Contents of file must be at least 32 hex-encoded bytes and not begin with 0x.

### `l2-engine-url`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --l2-engine-url=<URL>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --l2-engine-url=http://localhost:8551
    ```

</TabItem>
</Tabs>

### `sync-mode`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --sync-mode=<full|checkpoint|execution-layer>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --sync-mode=full
    ```

</TabItem>
</Tabs>

Specifies how hildr node should sync the L2 chain.

### `checkpoint-hash`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --checkpoint-hash=<BLOCK HASH>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --checkpoint-hash=0x102de6ffb001480cc...9393db90ea0409887d
    ```

</TabItem>
</Tabs>

A L2 checkpoint block hash to use for checkpoint syncing.

### `checkpoint-sync-url`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --checkpoint-sync-url=<URL>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --checkpoint-sync-url=https://opt-sepolia.g.alchemy.com/v2/Qmy...
    ```

</TabItem>
</Tabs>

A trusted L2 RPC URL to use for checkpoint syncing.

### `disc-boot-nodes`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --disc-boot-nodes=<enode://id@host:port>[,<enr://id@host:port>...]
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```
    --disc-boot-nodes=enode://node://c35c3...d615f@1.2.3.4:30303,enr:-J24Q...TNjgufplG4N0Y3CCJAaDdWRwgiQG
    ```

</TabItem>
</Tabs>

A list of comma-separated enode URLs for P2P discovery(v4/v5) bootstrap.

When connecting to Mainnet or public testnets, the default is a predefined list of enode URLs.

### `disc-port`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --disc-port=<PORT>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --disc-port=30303
    ```

</TabItem>
</Tabs>

The P2P listening ports (UDP and TCP). The default is `9876`.

### `rpc-addr`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --rpc-addr=<IP>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```
    --rpc-addr=0.0.0.0
    ```

</TabItem>
</Tabs>

The IP of RPC server listening. The default is `0.0.0.0`.

### `rpc-port`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --rpc-port=<PORT>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --rpc-port=9545
    ```

</TabItem>
</Tabs>

The port of RPC server listening. The default is `9545`.

### `log-level`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --log-level=<INFO|DEBUG|TRACE|WARN|ERROR>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --log-level=INFO
    ```

</TabItem>
</Tabs>

The log level of the Hildr node. The default is `INFO`.
