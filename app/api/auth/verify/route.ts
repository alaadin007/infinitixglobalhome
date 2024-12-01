import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    const user = await db.query.users.findFirst({
      where: eq(users.verificationToken, token),
    });

    if (!user || !user.verificationExpires || new Date(user.verificationExpires) < new Date()) {
      return NextResponse.json(
        { error: 'Invalid or expired verification token' },
        { status: 400 }
      );
    }

    await db.update(users)
      .set({
        emailVerified: true,
        verificationToken: null,
        verificationExpires: null,
      })
      .where(eq(users.id, user.id));

    return NextResponse.json({
      message: 'Email verified successfully',
    });
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    );
  }
}