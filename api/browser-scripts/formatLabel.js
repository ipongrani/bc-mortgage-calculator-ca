export default function formatLabel(key, prefix = '') {
    const words = key.replace(/([A-Z])/g, ' $1') 
                     .replace(/^./, (str) => str.toUpperCase());
    return prefix + words + ':';
}

