import React, { useEffect, useRef, useState } from 'react';
import { PortfolioItem } from '../types';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, Film, Music, CheckCircle2 } from 'lucide-react';

interface TrailerModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ item, onClose, onRequestQuote }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setIsPlaying(false);
    setIsMuted(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  }, [item]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
  };

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#090E1A] border border-[#D4AF37]/30 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#060A13] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Storylight Cinematic Book Trailer Preview
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#94A3B8] hover:text-white rounded-full cursor-pointer"
            aria-label="Close trailer modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative bg-black w-full aspect-video flex items-center justify-center overflow-hidden group select-none">
          {item.videoUrl ? (
            <video
              ref={videoRef}
              src={item.videoUrl}
              poster={item.image}
              controls
              playsInline
              className="w-full h-full object-contain bg-black"
              aria-label={`${item.title} trailer preview`}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
              onTimeUpdate={(event) => {
                const video = event.currentTarget;
                setCurrentTime(video.currentTime);
                setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
              }}
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          )}

          {/* Cinematic Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

          {/* Center Play/Pause Overlay indicator */}
          <button
            onClick={togglePlayback}
            className="absolute z-10 w-16 h-16 rounded-full bg-[#080D1A]/80 border border-[#D4AF37] flex items-center justify-center text-white hover:scale-110 hover:bg-[#D4AF37] hover:text-[#080D1A] transition-all cursor-pointer shadow-xl backdrop-blur-sm"
            aria-label={isPlaying ? 'Pause preview' : 'Play preview'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>

          {/* Subtitle / Quote bar inside trailer */}
          <div className="absolute top-6 left-6 right-6 flex items-start justify-between pointer-events-none">
            <div className="bg-[#080D1A]/85 backdrop-blur-md px-3.5 py-1.5 rounded border border-[#D4AF37]/30">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                {item.genre}
              </span>
              <h4 className="text-sm font-editorial text-white">{item.title}</h4>
            </div>
            {item.duration && (
              <div className="bg-[#080D1A]/85 backdrop-blur-md px-2.5 py-1 rounded text-xs text-[#E2E8F0] font-mono border border-white/10">
                {item.duration}
              </div>
            )}
          </div>

          {/* Bottom Player Controls */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 to-transparent flex flex-col gap-2 z-10">
            {/* Timeline Bar */}
            <div
              className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const video = videoRef.current;
                if (video && Number.isFinite(video.duration)) {
                  video.currentTime = (clickX / rect.width) * video.duration;
                }
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlayback}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-[#CBD5E1]">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              <div className="text-[11px] text-[#D4AF37] flex items-center gap-1 font-medium">
                <Sparkles className="w-3 h-3" />
                <span>Storylight 4K Mastered Cut</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details & Production Credits Footer */}
        <div className="p-5 md:p-6 bg-[#0B1220] overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="text-xs text-[#D4AF37] uppercase tracking-wider font-semibold">
                By {item.author}
              </div>
              <h2 className="text-xl font-editorial font-bold text-white mt-0.5">{item.title}</h2>
              <p className="text-xs text-[#94A3B8] mt-1 italic">"{item.logline}"</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#080D1A] bg-gradient-to-r from-[#E6CA85] to-[#C5A059] hover:from-[#F4E0A6] hover:to-[#D4AF37] rounded-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
            >
              Commission Book Trailer
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {item.soundscape && (
              <div className="p-3 bg-[#080E1B] rounded border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                  <Music className="w-3.5 h-3.5" />
                  <span>Atmospheric Soundscape Direction</span>
                </div>
                <p className="text-[#94A3B8]">{item.soundscape}</p>
              </div>
            )}

            {item.synopsis && (
              <div className="p-3 bg-[#080E1B] rounded border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                  <Film className="w-3.5 h-3.5" />
                  <span>Cinematic Narrative Structure</span>
                </div>
                <p className="text-[#94A3B8] leading-relaxed">{item.synopsis}</p>
              </div>
            )}
          </div>

          {item.achievements && item.achievements.length > 0 && (
            <div className="pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#CBD5E1] block mb-2">
                Documented Campaign Results:
              </span>
              <div className="flex flex-wrap gap-2">
                {item.achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 text-xs text-[#E2E8F0] bg-[#0E172A] px-2.5 py-1 rounded border border-[#D4AF37]/20"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
