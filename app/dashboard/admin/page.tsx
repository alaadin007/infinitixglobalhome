"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, Upload, Globe, Tags, LogOut, Users } from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string | null;
  emailVerified: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [seoData, setSeoData] = useState({
    title: '',
    description: '',
    keywords: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch users',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out.',
      });
      router.push('/');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to logout. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleSEOUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'SEO Updated',
      description: 'Website metadata has been successfully updated.',
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => router.push('/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>
          <Button 
            variant="destructive" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Database Entries */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Registered Users</h2>
              <Button onClick={fetchUsers} size="sm">
                <Users className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Verified</th>
                    <th className="text-left p-2">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="p-2">{user.name || 'N/A'}</td>
                      <td className="p-2">{user.email}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          user.emailVerified 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.emailVerified ? 'Verified' : 'Pending'}
                        </span>
                      </td>
                      <td className="p-2">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {users.length === 0 && (
                <p className="text-center text-muted-foreground py-4">
                  No users registered yet
                </p>
              )}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Portfolio Management</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Upload Portfolio Images</h3>
                  <Button className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Images
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Current Portfolio Items</h3>
                  <ul className="space-y-2">
                    <li>Cosmedocs</li>
                    <li>Harley Street Institute</li>
                    <li>PrivaDr</li>
                    <li>Online Learning Platform</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">SEO Management</h2>
              <form onSubmit={handleSEOUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Meta Title</label>
                  <Input
                    value={seoData.title}
                    onChange={(e) => setSeoData({ ...seoData, title: e.target.value })}
                    placeholder="Enter meta title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Meta Description</label>
                  <Textarea
                    value={seoData.description}
                    onChange={(e) => setSeoData({ ...seoData, description: e.target.value })}
                    placeholder="Enter meta description"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Keywords</label>
                  <Input
                    value={seoData.keywords}
                    onChange={(e) => setSeoData({ ...seoData, keywords: e.target.value })}
                    placeholder="Enter keywords, separated by commas"
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Globe className="h-4 w-4 mr-2" />
                  Update SEO Settings
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}