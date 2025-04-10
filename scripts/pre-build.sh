#!/bin/bash

required_env_vars=("STAGE")
for var in "${required_env_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "Error: $var is not set. Exiting..."
        exit 1
    else
        echo "$var is set to ${!var}"
    fi
done

echo "All required environment variables are set."
echo "NODE_ENV is set to ${NODE_ENV}"
echo "STAGE is set to ${STAGE}"
echo Installing source NPM dependencies...
npm install