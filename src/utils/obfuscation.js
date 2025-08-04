// 🔐 Sistema de ofuscación de strings
const _0x1a2b = ['albums', 'music', 'umamusume', 'react', 'component'];
const _0x3c4d = (index) => _0x1a2b[index];

// Función para codificar strings importantes
export const encodeString = (str) => {
  return btoa(str); // Base64 encoding
};

// Función para decodificar strings
export const decodeString = (encodedStr) => {
  return atob(encodedStr);
};

// Función para ofuscar URLs
export const obfuscateUrl = (url) => {
  const encoded = btoa(url);
  return encoded.split('').reverse().join('');
};

// Función para des-ofuscar URLs
export const deobfuscateUrl = (obfuscatedUrl) => {
  const reversed = obfuscatedUrl.split('').reverse().join('');
  return atob(reversed);
};

// Array ofuscado de strings comunes
export const _strings = {
  a: 'YWxidW1z', // 'albums'
  b: 'bXVzaWM=', // 'music'  
  c: 'dW1hbXVzdW1l', // 'umamusume'
  d: 'cmVhY3Q=', // 'react'
  e: 'Y29tcG9uZW50', // 'component'
};

// Función para obtener strings ofuscados
export const getString = (key) => decodeString(_strings[key]);
