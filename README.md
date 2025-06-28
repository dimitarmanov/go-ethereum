# Structure

- ./docker-compose.yaml - builds Geth and Blockscout exporter
- ./Dockerfile.contracts - builds docker image with contracts
- ./.github/workflows:
  - ``ci-build.yaml - CI:Build tag trigger``
  - ``ci-deploy.yaml - CI:Deploy tag trigger``
- Docker Hub repo - https://hub.docker.com/repository/docker/dmanov/go-ethereum
- ./hardhat - hardhat application
- ./infra - GCP K8s cluster and manifests
- ./blockscout - resources for blocksout stack deployment

# Send a transaction
```
docker exec -it geth geth attach http://localhost:8545

eth.accounts

eth.blockNumber

eth.sendTransaction({
  from: eth.accounts[0],
  to: eth.accounts[0],
  value: web3.toWei(1, "ether")
})
```
# Check connectivity from backend to Geth
```
docker compose exec backend curl -s -X POST http://geth:8545 \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```