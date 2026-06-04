import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create OG image with text
const width = 1200;
const height = 630;

// Create SVG with text
const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f8f9fa;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#e9ecef;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#grad1)"/>

    <!-- Japanese text -->
    <text
      x="${width / 2}"
      y="${height / 2 - 60}"
      font-family="'Arial', 'Hiragino Sans', 'Yu Gothic', sans-serif"
      font-size="72"
      font-weight="300"
      text-anchor="middle"
      fill="#2d3748"
      letter-spacing="4"
    >
      公開準備中
    </text>

    <!-- English text -->
    <text
      x="${width / 2}"
      y="${height / 2 + 80}"
      font-family="'Arial', sans-serif"
      font-size="48"
      font-weight="300"
      text-anchor="middle"
      fill="#4a5568"
      letter-spacing="2"
    >
      Coming Soon
    </text>

    <!-- Decorative line -->
    <line
      x1="${width / 2 - 120}"
      y1="${height / 2 + 20}"
      x2="${width / 2 + 120}"
      y2="${height / 2 + 20}"
      stroke="#cbd5e0"
      stroke-width="2"
    />
  </svg>
`;

async function generateOGImage() {
  try {
    const outputPath = path.join(__dirname, 'public', 'og-image.png');

    await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath);

    console.log(`OG image generated successfully: ${outputPath}`);
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();
