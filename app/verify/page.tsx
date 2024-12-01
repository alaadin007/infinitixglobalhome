"use client";

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function VerifyPage() {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      
      if (!token) {
        toast({
          title: 'Error',
          description: 'Invalid verification link',
          variant: 'destructive',
        });
        setIsVerifying(false);
        return;
      }

      try {
        const response = await fetch('/api/auth/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error);
        }

        setIsSuccess(true);
        toast({
          title: 'Success',
          description: 'Email verified successfully',
        });
      } catch (error) {
        toast({
          title: 'Error',
          description: error instanceof Error ? error.message : 'Verification failed',
          variant: 'destructive',
        });
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [searchParams, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
      <Card className="w-full max-w-md p-8 text-center">
        {isVerifying ? (
          <div className="space-y-4">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <h1 className="text-2xl font-bold">Verifying Email</h1>
            <p className="text-muted-foreground">Please wait while we verify your email address...</p>
          </div>
        ) : isSuccess ? (
          <div className="space-y-4">
            <CheckCircle2 className="h-12 w-12 mx-auto text-green-500" />
            <h1 className="text-2xl font-bold text-green-600">Email Verified!</h1>
            <p className="text-muted-foreground">Your email has been successfully verified.</p>
            <Button 
              className="w-full"
              onClick={() => router.push('/login')}
            >
              Continue to Login
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <XCircle className="h-12 w-12 mx-auto text-red-500" />
            <h1 className="text-2xl font-bold text-red-600">Verification Failed</h1>
            <p className="text-muted-foreground">The verification link is invalid or has expired.</p>
            <Button 
              className="w-full"
              onClick={() => router.push('/login')}
            >
              Return to Login
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}