import React, { useRef, useEffect, useState } from 'react';
import { Gift, Sparkles } from 'lucide-react';
import Button from './Button';

interface ScratchCardProps {
  prize: string;
  onComplete: () => void;
  lang: string;
}

const ScratchCard: React.FC<ScratchCardProps> = ({ prize, onComplete, lang }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle High DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // Fill with overlay
    ctx.fillStyle = '#C0C0C0'; // Silver color
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Add pattern or text on top of scratch layer
    ctx.fillStyle = '#A0A0A0';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Draw simple pattern
    for(let i=0; i<rect.width; i+=40) {
        for(let j=0; j<rect.height; j+=40) {
            ctx.fillText('?', i, j);
        }
    }
    
    ctx.fillStyle = '#505050';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText(lang === 'es' ? 'Rasca Aquí' : 'Scratch Here', rect.width/2, rect.height/2);

  }, [lang]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scratchX = x - rect.left;
    const scratchY = y - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(scratchX, scratchY, 25, 0, Math.PI * 2);
    ctx.fill();

    checkProgress();
  };

  const checkProgress = () => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Sample pixels to see how much is transparent
    // Optimization: Don't check every pixel, check a grid
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;
    const total = pixels.length / 4;

    for (let i = 0; i < total; i += 100) { // Check every 100th pixel for perf
      if (pixels[i * 4 + 3] === 0) {
        transparent++;
      }
    }

    // If > 40% scratched, reveal all
    if (transparent > (total / 100) * 0.4) {
      setIsRevealed(true);
      onComplete();
      canvas.style.opacity = '0';
      canvas.style.pointerEvents = 'none';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isScratching) return;
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-video rounded-xl overflow-hidden shadow-xl ring-4 ring-white">
      {/* Background Prize Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-600 flex flex-col items-center justify-center text-white p-6 text-center">
        {isRevealed ? (
            <div className="animate-in fade-in zoom-in duration-500">
                <Gift className="w-12 h-12 mx-auto mb-2 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-1">{prize}</h3>
                <p className="text-brand-100 text-sm">{lang === 'es' ? 'Código guardado' : 'Code saved'}</p>
            </div>
        ) : (
            <div className="opacity-50">
                 <Sparkles className="w-12 h-12 mx-auto" />
            </div>
        )}
      </div>

      {/* Canvas Scratch Layer */}
      <div ref={containerRef} className="absolute inset-0 cursor-crosshair">
        <canvas
            ref={canvasRef}
            className="transition-opacity duration-700 touch-none"
            onMouseDown={() => setIsScratching(true)}
            onMouseUp={() => setIsScratching(false)}
            onMouseLeave={() => setIsScratching(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsScratching(true)}
            onTouchEnd={() => setIsScratching(false)}
            onTouchMove={handleTouchMove}
        />
      </div>
    </div>
  );
};

export default ScratchCard;