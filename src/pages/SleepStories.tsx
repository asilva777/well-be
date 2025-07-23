import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, ArrowLeft, Moon, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SleepStories = () => {
  const navigate = useNavigate();
  const [playingStory, setPlayingStory] = useState<number | null>(null);
  
  const stories = [
    {
      id: 1,
      title: 'Ocean Waves',
      narrator: 'Sarah Chen',
      duration: '45 min',
      category: 'Nature',
      description: 'Drift away to the gentle sounds of ocean waves on a peaceful beach.',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Forest Journey',
      narrator: 'Michael Rivers',
      duration: '38 min',
      category: 'Adventure',
      description: 'Walk through an enchanted forest as twilight settles.',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Mountain Cabin',
      narrator: 'Emma Stone',
      duration: '52 min',
      category: 'Cozy',
      description: 'Relax in a warm cabin with crackling fireplace sounds.',
      color: 'bg-orange-500'
    },
    {
      id: 4,
      title: 'Starry Night',
      narrator: 'David Luna',
      duration: '41 min',
      category: 'Space',
      description: 'Journey through the cosmos under a blanket of stars.',
      color: 'bg-purple-500'
    },
    {
      id: 5,
      title: 'Rain on Leaves',
      narrator: 'Lisa Park',
      duration: '35 min',
      category: 'Nature',
      description: 'Listen to gentle rain falling on forest leaves.',
      color: 'bg-teal-500'
    },
    {
      id: 6,
      title: 'Desert Oasis',
      narrator: 'Omar Hassan',
      duration: '47 min',
      category: 'Adventure',
      description: 'Find peace in a tranquil desert oasis under moonlight.',
      color: 'bg-yellow-500'
    }
  ];

  const togglePlay = (storyId: number) => {
    if (playingStory === storyId) {
      setPlayingStory(null);
    } else {
      setPlayingStory(storyId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="p-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Moon className="h-6 w-6" />
            Sleep Stories
          </h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sleep Flow Library</CardTitle>
            <p className="text-muted-foreground">
              Soothing stories designed to help you fall asleep naturally
            </p>
          </CardHeader>
        </Card>

        <div className="space-y-4">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex">
                  <div className={`w-20 h-20 ${story.color} flex items-center justify-center`}>
                    <Volume2 className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{story.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          by {story.narrator} • {story.duration}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {story.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {story.description}
                    </p>
                    <Button
                      size="sm"
                      onClick={() => togglePlay(story.id)}
                      className="w-full"
                      variant={playingStory === story.id ? "secondary" : "default"}
                    >
                      {playingStory === story.id ? (
                        <><Pause className="h-4 w-4 mr-2" />Playing</>
                      ) : (
                        <><Play className="h-4 w-4 mr-2" />Play Story</>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {playingStory && (
          <Card className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    {stories.find(s => s.id === playingStory)?.title}
                  </p>
                  <p className="text-sm text-muted-foreground">Now Playing</p>
                </div>
                <Button
                  size="sm"
                  onClick={() => setPlayingStory(null)}
                  variant="outline"
                >
                  <Pause className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SleepStories;
