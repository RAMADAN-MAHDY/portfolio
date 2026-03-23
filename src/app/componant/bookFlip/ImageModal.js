"use client";
import Image from "next/image";
import { X, ZoomIn, Maximize2, Move } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function ImageModal({ isOpen, onClose, imageUrl }) {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, clientX: 0, clientY: 0 });
  const [showLens, setShowLens] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y, clientX: e.clientX, clientY: e.clientY });
  };

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
          onClick={onClose}
        >
          {/* Top Interface */}
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10"
          >
            <div className="flex items-center gap-4 text-white/90">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <Maximize2 size={20} className="text-blue-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight">Advanced Preview</h3>
                <p className="text-[10px] text-white/50 uppercase tracking-widest">Interactive Zoom Enabled</p>
              </div>
            </div>
            
            <button 
              className="pointer-events-auto group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-red-500/20 text-white border border-white/10 hover:border-red-500/30 transition-all duration-500"
              onClick={onClose}
            >
              <X size={28} className="group-hover:rotate-90 transition-transform duration-500" />
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-tighter text-red-400">Close</div>
            </button>
          </motion.div>
          
          {/* Main Image View */}
          <motion.div 
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative group cursor-none flex items-center justify-center w-full h-full max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowLens(true)}
            onMouseLeave={() => setShowLens(false)}
          >
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] rounded-full opacity-50"></div>
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5 w-full h-[80vh]">
              <Image 
                ref={imgRef}
                src={imageUrl} 
                alt="Detailed view" 
                fill
                className="object-contain select-none"
                onContextMenu={(e) => e.preventDefault()}
                priority
                unoptimized
              />
              
              {/* Magnifier Lens */}
              <AnimatePresence>
                {showLens && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="fixed pointer-events-none z-20 w-64 h-64 rounded-full border-4 border-white/40 shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden bg-black"
                    style={{
                      left: mousePos.clientX - 128,
                      top: mousePos.clientY - 128,
                    }}
                  >
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                        backgroundSize: '500%',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    <div className="absolute inset-0 border-inner border-white/20 rounded-full flex items-center justify-center">
                       <div className="w-2 h-2 bg-white/40 rounded-full shadow-[0_0_15px_white] border border-white/50"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Custom Cursor / Helper */}
            {!showLens && (
               <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-blue-500/20 backdrop-blur-md p-4 rounded-full border border-blue-400/30 text-blue-300 flex items-center gap-2 shadow-2xl"
               >
                 <Move size={20} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Hover to Zoom</span>
               </motion.div>
            )}

            {/* Bottom Instructions */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
               <div className="flex items-center gap-2 text-white/70 text-[10px] uppercase tracking-[0.3em]">
                 <ZoomIn size={14} className="text-blue-400" />
                 Magnifier Active
               </div>
               <div className="w-px h-3 bg-white/20"></div>
               <div className="text-white/70 text-[10px] uppercase tracking-[0.3em]">
                 Click Background to Close
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
