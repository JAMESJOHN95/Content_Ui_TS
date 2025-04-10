#!/bin/bash

echo "setting env variables "
echo "VITE_SERVER_URL=${VITE_SERVER_URL}" >> .env

echo "env variables list"
cat .env

echo building the app 
npm run build