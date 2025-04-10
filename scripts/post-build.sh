#!/bin/bash

echo Running post_build commands 
echo Pushing the contents into $BUCKET  ${BUCKET}
# aws s3 cp out s3://${BUCKET} --recursive
# aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION} --paths '/*'