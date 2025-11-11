import type { Job } from '@/types';
import { ArrowRight, BookmarkPlus, Briefcase, MapPin, Star } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-slate-300 overflow-hidden hover:scale-105 transform bg-white">
      <CardHeader className="bg-slate-50 border-b border-slate-200">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl group-hover:text-slate-900 transition-colors line-clamp-2 text-slate-900">
              {job.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2 text-base font-medium text-slate-600">
              <div className="p-1.5 bg-white rounded-lg">
                <Briefcase className="w-4 h-4 text-slate-700" />
              </div>
              {job.company}
            </CardDescription>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex-shrink-0 p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <BookmarkPlus
              className={`w-5 h-5 transition-all ${isSaved ? 'fill-slate-900 text-slate-900' : 'text-slate-400 hover:text-slate-600'
                }`}
            />
          </button>
        </div>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="space-y-4 pt-6">
        {/* Location */}
        <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-lg">
          <MapPin className="w-5 h-5 text-slate-700 flex-shrink-0" />
          <span className="text-slate-700 font-medium">{job.location}</span>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* Rating/Badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'fill-slate-400 text-slate-400' : 'text-slate-300'
                  }`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">(4.0 rating)</span>
        </div>

        {/* Action Button */}
        <Button
          asChild
          className="w-full gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 mt-4 group/btn rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <Link to={`/jobs/${job.id}`}>
            View Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
