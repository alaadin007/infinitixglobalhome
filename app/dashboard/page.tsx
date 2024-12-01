"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Shield, User } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (!response.ok) {
          throw new Error('Not authenticated');
        }
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Button
              variant="outline"
              className="w-full h-32 flex flex-col items-center justify-center gap-4"
              onClick={() => router.push('/dashboard/user')}
            >
              <User className="h-8 w-8" />
              <span>User Dashboard</span>
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Button
              variant="outline"
              className="w-full h-32 flex flex-col items-center justify-center gap-4"
              onClick={() => router.push('/dashboard/admin')}
            >
              <Shield className="h-8 w-8" />
              <span>Admin Dashboard</span>
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <Button
            variant="destructive"
            onClick={async () => {
              await fetch('/api/auth/logout', { method: 'POST' });
              router.push('/login');
              toast({
                title: 'Logged out',
                description: 'You have been successfully logged out.',
              });
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}