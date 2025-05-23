import React, { useRef, useEffect } from 'react';
import { usePermissions } from '../../hooks/usePermissions';

interface CameraViewProps {
  isActive: boolean;
  onClose: () => void;
}

const CameraView: React.FC<CameraViewProps> = ({ isActive, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const {
    requestCameraPermission,
    cameraStream,
    camera,
    error,
    requesting
  } = usePermissions();

  useEffect(() => {
    if (isActive && !camera && !requesting && !cameraStream) {
      const initCamera = async () => {
        const stream = await requestCameraPermission();
        if (stream && videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      };
      
      initCamera();
    }
    
    return () => {
      // The cleanup happens in the usePermissions hook
    };
  }, [isActive, camera, requesting, cameraStream, requestCameraPermission]);

  // Effect for demo AI simulation
  useEffect(() => {
    if (!isActive || !canvasRef.current || !videoRef.current || !cameraStream) return;
    
    let animationFrame: number;
    const ctx = canvasRef.current.getContext('2d');
    
    if (!ctx) return;
    
    const drawDetections = () => {
      if (!canvasRef.current || !videoRef.current) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      
      // Draw video frame
      ctx.drawImage(
        videoRef.current,
        0, 0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      
      // Simulate AI detection boxes (for demo purposes)
      // This would be replaced by actual AI model outputs
      const randomDetections = Math.random() > 0.7;
      
      if (randomDetections) {
        // Draw a detection box
        const x = Math.random() * (canvasRef.current.width - 100);
        const y = Math.random() * (canvasRef.current.height - 100);
        const width = 100 + Math.random() * 150;
        const height = 100 + Math.random() * 100;
        
        ctx.strokeStyle = '#F5DF4D';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        
        // Add label
        ctx.fillStyle = '#F5DF4D';
        ctx.font = '14px sans-serif';
        ctx.fillText('Potential Hazard', x, y - 5);
      }
      
      // Continue animation loop
      animationFrame = requestAnimationFrame(drawDetections);
    };
    
    drawDetections();
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isActive, cameraStream]);

  if (!isActive) return null;

  return (
    <div className="camera-view fixed inset-0 z-50 bg-black">
      <div className="relative w-full h-full">
        {/* Camera feed */}
        <video 
          ref={videoRef}
          autoPlay 
          playsInline 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* AI detection overlay */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          width={window.innerWidth}
          height={window.innerHeight}
        />
        
        {/* UI Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {/* HUD Elements */}
          <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              AI Helmet • Active
            </div>
            <div className="bg-[#F5DF4D]/90 text-black px-3 py-1 rounded-full text-sm animate-pulse">
              Scanning
            </div>
          </div>
          
          <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
            <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              Location active
            </div>
            <div className="text-[#F5DF4D] text-sm">
              AI Model v1.0
            </div>
          </div>
        </div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        
        {/* Error message */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80">
            <div className="bg-white p-5 rounded-lg max-w-md text-center">
              <svg className="mx-auto mb-4 text-red-500" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12" y2="16"/>
              </svg>
              <h3 className="text-xl font-bold mb-2">Permission Error</h3>
              <p className="text-gray-700 mb-4">{error}</p>
              <button 
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
        
        {/* Loading state */}
        {requesting && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80">
            <div className="text-center">
              <div className="inline-block w-12 h-12 border-4 border-t-[#F5DF4D] border-white/30 rounded-full animate-spin mb-4"></div>
              <p className="text-white">Requesting camera access...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraView;