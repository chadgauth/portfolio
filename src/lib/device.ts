/**
 * Device detection utilities
 */

/**
 * Detects if the user is on a mobile device
 * @returns true if the user is on a mobile device, false otherwise
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  
  // Check for mobile user agent
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // Regex patterns for mobile devices
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  
  return mobileRegex.test(userAgent);
}

/**
 * Detects if the user is on an iOS device
 * @returns true if the user is on an iOS device, false otherwise
 */
export function isIOS(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /iPad|iPhone|iPod/.test(userAgent);
}

/**
 * Detects if the user is on an Android device
 * @returns true if the user is on an Android device, false otherwise
 */
export function isAndroid(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  return /Android/.test(userAgent);
}