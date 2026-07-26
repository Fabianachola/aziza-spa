#!/bin/bash
echo "🚀 Deploying optimized Aziza Spa..."

# Build optimized version
npm run build

# Optimize images
npm run optimize-images

# Purge CSS
npm run purge-css

# Deploy to Vercel
vercel --prod

echo "✅ Deployment complete!"
