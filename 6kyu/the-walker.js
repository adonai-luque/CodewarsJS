// The Walker
function solve(a, b, c, alpha, beta, gamma) {
  let pi = 3.14159265358979323846
  let finalX = a * Math.cos(alpha/180*pi) - b * Math.sin(beta/180*pi) - c * Math.cos(gamma/180*pi)
  let finalY = a * Math.sin(alpha/180*pi) + b * Math.cos(beta/180*pi) - c * Math.sin(gamma/180*pi)
  console.log(finalX, finalY)
  let r = (finalX**2 + finalY**2)**0.5
  let angle = Math.atan2(finalY, finalX)*180/pi
  let degrees = Math.floor(angle)
  let minutes = Math.floor(angle%1*60)
  let seconds = Math.floor(angle%1*60%1*60)
  return [Math.round(r), degrees, minutes, seconds]
}