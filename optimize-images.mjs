import sharp from 'sharp'
import { glob } from 'glob'
import fs from 'fs'
import path from 'path'

const images = glob.sync('public/images/**/*.{jpg,jpeg,png}')
const webpDir = 'public/images/webp'

if (!fs.existsSync(webpDir)) {
  fs.mkdirSync(webpDir, { recursive: true })
}

images.forEach(async (file) => {
  const relativePath = path.relative('public/images', file)
  const webpPath = path.join(webpDir, relativePath.replace(/\.(jpg|jpeg|png)$/, '.webp'))
  
  // Ensure directory exists
  const dir = path.dirname(webpPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  
  await sharp(file)
    .webp({ quality: 80 })
    .toFile(webpPath)
  
  console.log(`✅ Converted: ${file} -> ${webpPath}`)
})
