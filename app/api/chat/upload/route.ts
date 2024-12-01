import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { attachments } from '@/lib/db/schema';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const messageId = formData.get('messageId') as string;

    if (!file || !messageId) {
      return NextResponse.json(
        { error: 'File and message ID are required' },
        { status: 400 }
      );
    }

    // In a real application, you would upload the file to a storage service
    // For this example, we'll simulate file storage
    const fileUrl = `/uploads/${file.name}`;

    const [attachment] = await db.insert(attachments).values({
      id: crypto.randomUUID(),
      messageId,
      fileName: file.name,
      fileType: file.type,
      fileUrl,
    }).returning();

    return NextResponse.json(attachment);
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}