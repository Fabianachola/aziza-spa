import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import imageminAvif from 'imagemin-avif'
import { promises as fs } from 'fs'
import path from 'path'

async function optimizeImages() {
  console.log('🔄 Optimizing images...')
  
  // Optimize JPG and PNG to WebP
  await imagemin(['public/images/**/*.{jpg,jpeg,png}'], {
    destination: 'public/images/optimized',
    plugins: [
      imageminWebp({ quality: 80, method: 6 })
    ]
  })
  
  console.log('✅ Images optimized to WebP!')
  
  // Also create AVIF versions
  await imagemin(['public/images/**/*.{jpg,jpeg,png}'], {
    destination: 'public/images/optimized-avif',
    plugins: [
      imageminAvif({ quality: 70 })
    ]
  })
  
  console.log('✅ Images optimized to AVIF!')
}

optimizeImages().catch(console.error)
