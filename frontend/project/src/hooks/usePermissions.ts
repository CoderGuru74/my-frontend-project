import { useState, useEffect, useCallback } from 'react';

interface PermissionState {
  camera: boolean;
  location: boolean;
  cameraStream: MediaStream | null;
  locationData: GeolocationPosition | null;
  requesting: boolean;
  error: string | null;
}

export const usePermissions = () => {
  const [permissions, setPermissions] = useState<PermissionState>({
    camera: false,
    location: false,
    cameraStream: null,
    locationData: null,
    requesting: false,
    error: null
  });

  const requestCameraPermission = useCallback(async () => {
    setPermissions(prev => ({ ...prev, requesting: true, error: null }));
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      setPermissions(prev => ({ 
        ...prev, 
        camera: true, 
        cameraStream: stream,
        requesting: false 
      }));
      
      return stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
      setPermissions(prev => ({ 
        ...prev, 
        camera: false, 
        requesting: false,
        error: 'Camera access denied. Please enable camera permissions.'
      }));
      return null;
    }
  }, []);

  const requestLocationPermission = useCallback(async () => {
    setPermissions(prev => ({ ...prev, requesting: true, error: null }));
    
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        });
      });
      
      setPermissions(prev => ({ 
        ...prev, 
        location: true, 
        locationData: position,
        requesting: false 
      }));
      
      return position;
    } catch (error) {
      console.error('Error accessing location:', error);
      setPermissions(prev => ({ 
        ...prev, 
        location: false, 
        requesting: false,
        error: 'Location access denied. Please enable location permissions.'
      }));
      return null;
    }
  }, []);

  const stopCameraStream = useCallback(() => {
    if (permissions.cameraStream) {
      permissions.cameraStream.getTracks().forEach(track => track.stop());
      setPermissions(prev => ({ ...prev, cameraStream: null }));
    }
  }, [permissions.cameraStream]);

  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, [stopCameraStream]);

  return {
    ...permissions,
    requestCameraPermission,
    requestLocationPermission,
    stopCameraStream
  };
};