import type { APIRoute } from 'astro';
import { generateOGImage } from '../utils/og-image-generator.js';

export const GET: APIRoute = async ({ url }) => {
  // Extract page info from URL params if provided
  const searchParams = new URL(url).searchParams;
  const title = searchParams.get('title') || 'danny.is';
  const description = searchParams.get('description') || 'Personal website and blog';

  try {
    const ogImageBuffer = await generateOGImage(
      {
        title,
        description,
        site: 'danny.is',
        type: 'page',
      },
      {
        template: 'default',
        width: 1200,
        height: 630,
      }
    );

    return new Response(ogImageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Failed to generate default OG image:', error);

    // Return a 500 error if image generation fails
    return new Response('Failed to generate image', {
      status: 500,
    });
  }
};
