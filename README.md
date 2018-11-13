# knative_sample_function

## 手順

```
brew install watch
watch -n 1 kubectl get pod --all-namespaces
```

```
riff system install --node-port
export DOCKER_ID=ozaki25
riff namespace init default --dockerhub $DOCKER_ID
riff function create node fighters \
  --git-repo https://github.com/ozaki25/knative_sample_function  \
  --artifact package.json \
  --image $DOCKER_ID/fighters \
  --wait
riff service invoke fighters --text -- -w '\n' -d 9
```

```
riff service delete square
```

https://projectriff.io/docs/getting-started/docker-for-mac/