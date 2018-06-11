#!/usr/bin/bash
echo "$0: publish package @kengres/config";
echo "start publish..."
echo "patch version..."
npm run patch
echo "push to git..."
git push
echo "publishing..."
npm run pub
echo "end..."