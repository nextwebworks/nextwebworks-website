import { NextResponse } from 'next/server';
import { revalidateTag, revalidatePath } from 'next/cache';

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret') || request.headers.get('x-revalidate-secret');
    const expectedSecret = process.env.REVALIDATE_SECRET;

    if (!expectedSecret || secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid or missing revalidation secret.' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const tag = body.tag || searchParams.get('tag') || 'cms:blog';
    const path = body.path || searchParams.get('path');

    if (tag) {
      revalidateTag(tag);
    }
    if (path) {
      revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      tag: tag || null,
      path: path || null,
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json({ message: 'Error executing revalidation.', error: err.message }, { status: 500 });
  }
}
