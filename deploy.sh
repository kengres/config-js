#!/usr/bin/bash
echo "$0: publish package @kengres/config";
echo "start publish..."
npm run patch
npm run publish
git push