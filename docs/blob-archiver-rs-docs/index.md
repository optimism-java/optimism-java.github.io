# blob-archiver-rs
This is a Rust implementation of
the [Beacon Chain blob archiver](https://github.com/base/blob-archiver)

The Blob Archiver is a service to archive and allow querying of all historical blobs from the beacon chain. It consists
of two components:

* **Archiver** - Tracks the beacon chain and writes blobs to a storage backend
* **API** - Implements the blob sidecars [API](https://ethereum.github.io/beacon-APIs/#/Beacon/getBlobSidecars), which
  allows clients to retrieve blobs from the storage backend

### Storage
There are currently two supported storage options:

* On-disk storage - Blobs are written to disk in a directory
* S3 storage - Blobs are written to an S3 bucket (or compatible service)

You can control which storage backend is used by setting the `STORAGE_TYPE` to
either `file` or `s3`.

The `s3` backend will also work with (for example) Google Cloud Storage buckets (instructions [here](https://medium.com/google-cloud/using-google-cloud-storage-with-minio-object-storage-c994fe4aab6b)).

### Development
```sh
# Run the tests
cargo test --workspace --all-features --all-targets --locked

# Lint the project
cargo clippy --workspace --all-targets --all-features -- -D warnings

# Build the project
cargo build --workspace --all-targets --all-features

```

#### Run Locally
To run the project locally, you should first copy `.env.template` to `.env` and then modify the environment variables
to your beacon client and storage backend of choice. Then you can run the project with:

```sh
docker compose up
```

#### Get blobs
After successfully starting the service, you can use the following command to obtain the blob:

- get blob by block id from api service:
```shell
# also there is support other type of block id, like: finalized,justified.
curl -X 'GET' 'http://localhost:8000/eth/v1/beacon/blob_sidecars/head' -H 'accept: application/json'
```

- get blob by slot number from api service:
```shell
curl -X 'GET' 'http://localhost:8000/eth/v1/beacon/blob_sidecars/7111008' -H 'accept: application/json'
```

#### Storage Dashboard
MinIO has started the dashboard, allowing you to view the status of blob storage.
By default, you can access it directly at:
```http
http://localhost:9999
```

##  Options

### `verbose`


```shell
--verbose=<VERBOSE>
```

```shell
--verbose=2
```

### `log_dir`

```shell
--log_dir=<LOG_DIR>
```
```shell
--log_dir=/var/log/blob-archiver
```

### `log_rotation`

```shell
--log_rotation=<LOG_ROTATION>
```
```shell
--log_rotation=DAILY
```
### `beacon_endpoint`

```shell
--beacon_endpoint=<BEACON_ENDPOINT>
```
```shell
--beacon_endpoint=http://localhost:5052
```

### `beacon_client_timeout`

```shell
--beacon_client_timeout=<BEACON_CLIENT_TIMEOUT>
```
```shell
--beacon_client_timeout=10
```

### `poll_interval`

```shell
--poll_interval=<POLL_INTERVAL>
```
```shell
--poll_interval=6
```

### `listen_addr`

```shell
--listen_addr=<LISTEN_ADDR>
```
```shell
--listen_addr=0.0.0.0:8000
```

### `origin_block`

```shell
--origin_block=<ORIGIN_BLOCK>
```
```shell
--origin_block="0x0"
```

### `storage_type`

```shell
--storage_type=<STORAGE_TYPE>
```
```shell
--storage_type="s3"
```

### `s3_endpoint`

```shell
--s3_endpoint=<S3_ENDPOINT>
```
```shell
--s3_endpoint="http://localhost:9000"
```

### `s3_bucket`
```shell
--s3_bucket=<S3_BUCKET>
```
```shell
--s3_bucket="blobs"
```

### `s3_path`

```shell
--s3_path=<S3_PATH>
```
```shell
--s3_path=/blobs
```

### `s3_compress`

```shell
--s3_compress=<S3_COMPRESS>
```
```shell
--s3_compress=false
```

### `fs_dir`

```shell
--fs_dir=<FS_DIR>
```
```shell
--fs_dir=/blobs
```

