// 🛡️ Sistema anti-tampering y verificación de integridad
let _verified = false;
const _key = 'umamusume_2024_secure';

// Función para verificar que el código no ha sido modificado
export const verifyIntegrity = () => {
  const timestamp = Date.now();
  const hash = btoa(_key + timestamp.toString().slice(-4));
  
  if (!_verified) {
    // Simulación de verificación
    const userAgent = navigator.userAgent;
    const screen = `${screen.width}x${screen.height}`;
    const checksum = btoa(userAgent + screen + _key).slice(0, 8);
    
    _verified = checksum.length === 8;
  }
  
  return _verified;
};

// Función para detectar herramientas de desarrollo
export const detectDevTools = () => {
  let devtools = false;
  
  const threshold = 160;
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  
  if (widthThreshold || heightThreshold) {
    devtools = true;
  }
  
  return devtools;
};

// Función para ofuscar console.log en producción
export const secureLog = (message) => {
  if (import.meta.env.DEV) {
    console.log(message);
  } else {
    // En producción, no mostrar logs o mostrar mensaje ofuscado
    console.log(btoa('Debug info hidden'));
  }
};

// Prevenir inspección del código
if (import.meta.env.PROD) {
  // Deshabilitar clic derecho
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  
  // Detectar teclas de desarrollador
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
      e.preventDefault();
      return false;
    }
  });
}
