export function formatVolume(volume) {
    const toFixedVolume = volume.toFixed(0);
    const formatted = String(toFixedVolume).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return `${formatted} kg`;
}