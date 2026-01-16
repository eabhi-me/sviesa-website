import React, { useEffect, useMemo, useState } from 'react';
import { FiInstagram, FiExternalLink, FiImage, FiFilm } from 'react-icons/fi';

// Helper to format dates nicely
const formatDate = (iso) => {
  try {
    return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(iso));
  } catch (_) {
    return '';
  }
};

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const token = import.meta.env.VITE_IG_TOKEN;
  const userId = import.meta.env.VITE_IG_USER_ID;

  const placeholders = useMemo(
    () => [
      {
        id: 'featured-post',
        caption: '✨ Featured Post - Check out our latest work!',
        media_url: '/images/IMG (9).jpeg',
        permalink: 'https://www.instagram.com/p/DPfiYYVkz_9/',
        media_type: 'IMAGE',
        timestamp: new Date().toISOString(),
        featured: true
      },
      {
        id: 'placeholder-1',
        caption: 'Your latest highlight goes here.',
        media_url: '/images/IMG (10).jpeg',
        permalink: 'https://www.instagram.com/sviesa.sliet/',
        media_type: 'IMAGE',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'placeholder-2',
        caption: 'Add an action shot or behind-the-scenes frame.',
        media_url: '/images/IMG (11).jpeg',
        permalink: 'https://www.instagram.com/sviesa.sliet/',
        media_type: 'IMAGE',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'placeholder-3',
        caption: 'Showcase a signature portrait or team moment.',
        media_url: '/images/IMG (12).jpeg',
        permalink: 'https://www.instagram.com/sviesa.sliet/',
        media_type: 'IMAGE',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'placeholder-4',
        caption: 'Behind the scenes of our latest photoshoot.',
        media_url: '/images/IMG (13).jpeg',
        permalink: 'https://www.instagram.com/sviesa.sliet/',
        media_type: 'IMAGE',
        timestamp: new Date().toISOString(),
      },
      {
        id: 'placeholder-5',
        caption: 'Capturing moments that matter.',
        media_url: '/images/IMG (1).jpeg',
        permalink: 'https://www.instagram.com/sviesa.sliet/',
        media_type: 'IMAGE',
        timestamp: new Date().toISOString(),
      },
    ],
    []
  );

  useEffect(() => {
    const fetchPosts = async () => {
      if (!token || !userId) {
        setPosts(placeholders);
        return;
      }

      setLoading(true);
      setError('');
      try {
        const fields = 'id,caption,media_url,permalink,media_type,thumbnail_url,timestamp';
        const limit = 6;
        const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&limit=${limit}&access_token=${token}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Unable to fetch Instagram posts.');
        }
        const data = await res.json();
        if (!data?.data) throw new Error('Invalid Instagram response.');
        setPosts(data.data);
      } catch (err) {
        setError(err.message || 'Failed to load Instagram feed.');
        setPosts(placeholders);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [token, userId, placeholders]);

  return (
    <section id="instagram" className="py-20 bg-gradient-to-b from-pure-black via-deep-crimson/5 to-pure-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-soft-white mb-4">
            Instagram <span className="text-brand-red">Highlights</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
            <p className="text-brand-red uppercase tracking-widest text-xs sm:text-sm font-semibold flex items-center gap-2">
              <FiInstagram /> Live from our feed
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-deep-crimson to-transparent"></div>
          </div>
          {(!token || !userId) && (
            <p className="mt-3 text-soft-white/60 text-sm">
              Connect Instagram by setting VITE_IG_TOKEN and VITE_IG_USER_ID to show live posts.
            </p>
          )}
          {error && (
            <p className="mt-2 text-brand-red text-sm">{error}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post, idx) => {
            const isVideo = post.media_type === 'VIDEO' || post.media_type === 'REEL';
            const isFeatured = post.featured;
            return (
              <div
                key={post.id || idx}
                className={`group relative overflow-hidden rounded-lg border ${
                  isFeatured ? 'border-brand-red/50 ring-2 ring-brand-red/30' : 'border-deep-crimson/20'
                } bg-pure-black hover:border-brand-red/50 transition-all duration-300`}
              >
                <div className="aspect-square bg-gradient-to-br from-deep-crimson/10 to-brand-red/10 relative overflow-hidden">
                  {post.media_url ? (
                    <img
                      src={post.media_url}
                      alt={post.caption || 'Instagram post'}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-soft-white/20">
                      <FiImage size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-pure-black/20 group-hover:bg-pure-black/10 transition-colors duration-300"></div>
                  {isFeatured && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-red text-soft-white text-xs uppercase tracking-wide font-semibold">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-pure-black/70 text-soft-white text-xs uppercase tracking-wide flex items-center gap-2">
                    {isVideo ? <FiFilm /> : <FiImage />} {formatDate(post.timestamp)}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-soft-white/80 text-sm line-clamp-3 min-h-[54px]">
                    {post.caption || 'No caption provided.'}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-soft-white/50">{isFeatured ? 'Latest post' : 'Top post'}</span>
                    {post.permalink ? (
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-brand-red hover:text-soft-white transition-colors duration-300"
                      >
                        View <FiExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-soft-white/40">Link unavailable</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
