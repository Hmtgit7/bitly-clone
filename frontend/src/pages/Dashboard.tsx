import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Link, 
  BarChart3, 
  Eye, 
  MousePointer, 
  Calendar,
  Copy,
  ExternalLink,
  TrendingUp,
  Globe,
  Users,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const [urlInput, setUrlInput] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([
    {
      id: 1,
      originalUrl: 'https://www.example.com/very-long-url-that-needs-shortening',
      shortUrl: 'linkly.co/abc123',
      clicks: 1247,
      created: '2025-01-15',
      status: 'active'
    },
    {
      id: 2,
      originalUrl: 'https://github.com/user/repository',
      shortUrl: 'linkly.co/git456',
      clicks: 892,
      created: '2025-01-14',
      status: 'active'
    },
    {
      id: 3,
      originalUrl: 'https://docs.example.com/documentation',
      shortUrl: 'linkly.co/docs789',
      clicks: 543,
      created: '2025-01-13',
      status: 'active'
    }
  ]);

  const totalStats = {
    totalLinks: shortenedUrls.length,
    totalClicks: shortenedUrls.reduce((sum, url) => sum + url.clicks, 0),
    clicksThisMonth: 2156,
    avgClickRate: 94.2
  };

  const handleCreateShortUrl = () => {
    if (!urlInput.trim()) return;
    
    const newUrl = {
      id: Date.now(),
      originalUrl: urlInput,
      shortUrl: `linkly.co/${Math.random().toString(36).substr(2, 6)}`,
      clicks: 0,
      created: new Date().toISOString().split('T')[0],
      status: 'active'
    };
    
    setShortenedUrls([newUrl, ...shortenedUrls]);
    setUrlInput('');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Dashboard Content */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Manage your links and view analytics</p>
          </motion.div>

          {/* Quick URL Shortener */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link className="h-5 w-5" />
                  Create Short Link
                </CardTitle>
                <CardDescription>
                  Enter a long URL to create a shortened version
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter your long URL here..."
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && handleCreateShortUrl()}
                  />
                  <Button 
                    onClick={handleCreateShortUrl}
                    variant="gradient"
                    className="px-8"
                  >
                    Shorten URL
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Links</CardTitle>
                <Link className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalStats.totalLinks}</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
                <MousePointer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalStats.totalClicks.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalStats.clicksThisMonth.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +8% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Click Rate</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalStats.avgClickRate}%</div>
                <p className="text-xs text-muted-foreground">
                  +2.1% from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* URL Management Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Your Shortened URLs
                </CardTitle>
                <CardDescription>
                  Manage and track the performance of your links
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {shortenedUrls.map((url) => (
                    <motion.div
                      key={url.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {url.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              Created {url.created}
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-primary">
                                {url.shortUrl}
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => copyToClipboard(`https://${url.shortUrl}`)}
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => window.open(`https://${url.shortUrl}`, '_blank')}
                              >
                                <ExternalLink className="h-3 w-3" />
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">
                              {url.originalUrl}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {url.clicks.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground">clicks</div>
                          </div>
                          <Button variant="outline" size="sm">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Analytics
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;