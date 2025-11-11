import { getJobById } from '@/api/jobsAPI';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Job } from '@/types';
import { Briefcase, Loader2, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      try {
        setLoading(true);
        const data = await getJobById(parseInt(id));
        setJob(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load job details.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-destructive">{error}</p>
        <Link to="/jobs">
          <Button className="mt-4">Back to jobs</Button>
        </Link>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>No job found</p>
        <Link to="/jobs">
          <Button className="mt-4">Back to jobs</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{job.title}</CardTitle>
          <CardDescription className="mt-2 flex items-center gap-3">
            <Briefcase className="w-4 h-4" /> {job.company}
            <span className="mx-2">•</span>
            <MapPin className="w-4 h-4" /> {job.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{job.description}</p>

          <div className="mt-6 flex gap-2">
            <Link to="/jobs">
              <Button variant="outline">Back</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetail;
