set -u
: "$CONTAINER_REGISTRY"
: "$VERSION"

envsubst < ./deploy.yaml | kubeclt apply -f -