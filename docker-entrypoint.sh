#!/bin/sh

echo "Cleaning ISR cache in .next/server/pages..."
rm -rf .next/server/pages/*

echo "Starting Next.js server..."
exec node server.js
