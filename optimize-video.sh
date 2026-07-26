#!/bin/bash
echo "🎬 Optimizing videos..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "⚠️ ffmpeg not found. Please install: brew install ffmpeg (macOS) or apt-get install ffmpeg (Linux)"
    exit 1
fi

# Optimize hero video
if [ -f "public/hero/spa-hero.mp4" ]; then
    ffmpeg -i public/hero/spa-hero.mp4 -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k public/hero/spa-hero-optimized.mp4
    echo "✅ Hero video optimized"
fi

# Create WebM version
if [ -f "public/hero/spa-hero.mp4" ]; then
    ffmpeg -i public/hero/spa-hero.mp4 -c:v libvpx -crf 30 -b:v 1M -c:a libopus public/hero/spa-hero.webm
    echo "✅ WebM version created"
fi

echo "✅ Video optimization complete!"
