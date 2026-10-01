import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const projects = [
  {
    slug: 'modern-standee-design',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/c3fb1e252435787.Y3JvcCwxNDE3LDExMDksMCww.jpeg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/ff6c8c252435787.6a4f65c822667.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e67b65252435787.6a4f65c89ebe6.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/64f4b3252435787.6a4f65c93b4fa.jpeg',
    ],
  },
  {
    slug: 'modern-receipt-design',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/bd63e7252435221.Y3JvcCwxNDE3LDExMDgsMCww.jpeg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/884cb6252435221.6a4f62f32bb1f.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/40f2fe252435221.6a4f62f37d468.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/f11f13252435221.6a4f62f3c8769.jpeg',
    ],
  },
  {
    slug: 'modern-panaflex-design',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/280a32252434561.Y3JvcCwxNDE2LDExMDgsMCww.jpeg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/744dea252434561.6a4f5fa511267.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6fa205252434561.6a4f5fa569a6e.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a54113252434561.6a4f5fa5ccd97.jpeg',
    ],
  },
  {
    slug: 'professional-business-stamp-design',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/2e9402252433711.Y3JvcCwxNDE3LDExMDksMCww.jpeg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cb26c4252433711.6a4f5bd3acd0d.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/175295252433711.6a4f5bd40099a.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/06c151252433711.6a4f5bd44e7dc.jpeg',
    ],
  },
  {
    slug: 'golden-bite-chocolate-packaging',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/f41be6252012845.Y3JvcCwxMDIyLDgwMCwwLDA.jpeg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/95bbb9252012845.6a44d43d485eb.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2d7400252012845.6a44d43d9cbdc.jpeg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/694351252012845.6a44d43ded081.jpeg',
    ],
  },
  {
    slug: 'brand-divider-design',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/710a02251950717.Y3JvcCwxMzg4LDEwODYsMzAsMA.png',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/90a480251950717.6a43839bc34d5.png',
    ],
  },
  {
    slug: 'creative-marketing-flyer-design',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/643dcc252142517.Y3JvcCwxNDE3LDExMDksMCww.jpg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9fd1e8252142517.6a47b8ac73ef7.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/160963252142517.6a47b8acbdd29.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/01d415252142517.6a47b8ad0ca33.jpg',
    ],
  },
  {
    slug: 'minimal-flyer-design-concept-one',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/f85ac2252141187.Y3JvcCwxNDE3LDExMDksMCww.jpg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/716594252141187.6a47b26d29606.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/ad7645252141187.6a47b26d84b8d.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/f1efa5252141187.6a47b26dd3ff5.png',
    ],
  },
  {
    slug: 'minimal-flyer-design-concept-two',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/1b5b96252141623.Y3JvcCwxNDE3LDExMDgsMCww.jpg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e0cdd7252141623.6a47b4a302a9b.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cc7163252141623.6a47b4a3580e3.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/ebaad5252141623.6a47b4a3a5255.jpg',
    ],
  },
  {
    slug: 'creative-corporate-flyer-design',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/134878252142147.Y3JvcCwxNDE3LDExMDksMCww.jpg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/53abc0252142147.6a47b6e6f3f54.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5360e4252142147.6a47b6e74df10.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/71ea17252142147.6a47b6e79f0d3.jpg',
    ],
  },
  {
    slug: 'shahnoor-arcade-flyer-design',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/d0b0c8252142767.Y3JvcCwxNDE3LDExMDksMCww.jpg',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/18fec4252142767.6a47b9eb75390.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4d0669252142767.6a47b9ebb2053.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c0970d252142767.6a47b9ec127d8.jpg',
    ],
  },
  {
    slug: 'usa-design-agency-case-studies',
    cover: 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/6a60ed251896895.Y3JvcCwxNDE3LDExMDgsMCww.png',
    gallery: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/68ac75251896895.6a42463becfc5.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6b67f2251896895.6a42463c7b809.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a989bc251896895.6a42463ce8699.png',
    ],
  },
];

const outputDir = join(process.cwd(), 'public', 'portfolio', 'behance');
mkdirSync(outputDir, { recursive: true });

const downloadAndConvert = (url, output, width) => {
  const temp = `${output}.download`;
  execFileSync('curl', ['-L', '--fail', '--silent', '--show-error', '--retry', '2', '-o', temp, url], {
    stdio: 'inherit',
  });
  execFileSync('convert', [temp, '-auto-orient', '-strip', '-resize', `${width}x${width}>`, '-quality', '78', output], {
    stdio: 'inherit',
  });
  rmSync(temp, { force: true });
};

for (const project of projects) {
  const coverOutput = join(outputDir, `${project.slug}-cover.webp`);
  console.log(`Downloading ${project.slug} cover`);
  downloadAndConvert(project.cover, coverOutput, 960);

  project.gallery.forEach((url, index) => {
    const galleryOutput = join(outputDir, `${project.slug}-${String(index + 1).padStart(2, '0')}.webp`);
    console.log(`Downloading ${project.slug} gallery ${index + 1}`);
    downloadAndConvert(url, galleryOutput, 1280);
  });
}

console.log(`Saved ${projects.length} Behance projects to ${outputDir}`);
