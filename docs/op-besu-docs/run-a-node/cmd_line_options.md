import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Command line options

This reference describes the syntax of the Hyperledger Besu command line interface (CLI) options.

You can specify Besu options:

- On the command line.

```shell
besu [OPTIONS] [SUBCOMMAND]
```

- As an environment variable. For each command line option, the equivalent environment variable is:

  - Uppercase.
  - _ replaces -.
  - Has a BESU_ prefix.

  For example, set --miner-coinbase using the BESU_MINER_COINBASE environment variable.

## Required Options

### `network`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --network=<NETWORK>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --network=OP_SEPOLIA
    ```

</TabItem>
</Tabs>

The predefined network configuration. The default is `mainnet`.

> Only supported Optimism Sepolia Testnet for Optimism Stack.

### `data-path`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --data-path=<PATH>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --data-path=/home/me/me_node
    ```

</TabItem>
</Tabs>

The path to the Besu data directory. The default is the directory you installed Besu in, or `/opt/besu/database` if using the Op Besu Docker image.

### `engine-rpc-enabled`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --engine-rpc-enabled[=<true|false>]
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell

    ```

</TabItem>
</Tabs>

Enables or disables the Engine API. The default is `false`.

### `engine-jwt-secret`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --engine-jwt-secret
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --engine-jwt-secret
    ```

</TabItem>
</Tabs>

Shared secret used to authenticate consensus clients when using the Engine JSON-RPC API (both HTTP and WebSocket). Contents of file must be at least 32 hex-encoded bytes and not begin with `0x`. May be a relative or absolute path. See an example of how to generate this.

### `engine-rpc-port`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --engine-rpc-port=<PORT>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --engine-rpc-port=8551
    ```

</TabItem>
</Tabs>

The listening port for the Engine API calls (ENGINE, ETH) for JSON-RPC over HTTP and WebSocket. The default is `8551`.

### `engine-host-allowlist`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --engine-host-allowlist=<hostname>[,<hostname>...]... or "*"
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --engine-host-allowlist=*
    ```

</TabItem>
</Tabs>

A comma-separated list of hostnames to allow for Engine API access (applies to both HTTP and WebSocket).

### `rpc-http-enabled`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --rpc-http-enabled[=<true|false>]
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --rpc-http-enabled
    ```

</TabItem>
</Tabs>

Enables or disables the HTTP JSON-RPC service. The default is `false`.

### `rpc-http-port`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --rpc-http-port=<PORT>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --rpc-http-port=8545
    ```

</TabItem>
</Tabs>

The port (TCP) on which HTTP JSON-RPC listens. The default is `8545. You must expose ports appropriately.

### `host-allowlist`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --host-allowlist=<hostname>[,<hostname>...]... or "*"
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --host-allowlist="*"
    ```

</TabItem>
</Tabs>

A comma-separated list of hostnames to access the JSON-RPC API and pull Besu metrics. By default, Besu accepts requests from `localhost` and `127.0.0.1`.

### `p2p-enabled`

<Tabs>
<TabItem value="Syntax" label="Syntax" default>

    ```shell
    --p2p-enabled[=<true|false>]
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --p2p-enabled
    ```

</TabItem>
</Tabs>

Enables or disables all P2P communication. The default is `true`.

### `p2p-port`

<Tabs>
<TabItem value="Syntax" label="Syntax">

    ```shell
    --p2p-port=<PORT>
    ```

</TabItem>

<TabItem value="Example" label="Example">

    ```shell
    --p2p-port=30303
    ```

</TabItem>
</Tabs>

The P2P listening ports (UDP and TCP). The default is `30303`. You must expose ports appropriately.

## Other Options

The other options in op-besu have the same meaning as in Hyperledger Besu. You can refer to the official [Besu documentation](https://besu.hyperledger.org/public-networks/reference/cli/options) for more details.
