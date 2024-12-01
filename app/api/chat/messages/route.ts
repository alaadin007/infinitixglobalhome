import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { messages } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const userMessages = await db.query.messages.findMany({
      where: eq(messages.userId, userId),
      orderBy: (messages, { asc }) => [asc(messages.createdAt)],
    });

    return NextResponse.json(userMessages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { content, userId, isAdmin } = await req.json();

    const [message] = await db.insert(messages).values({
      id: crypto.randomUUID(),
      content,
      userId,
      isAdmin: isAdmin || false,
    }).returning();

    return NextResponse.json(message);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}