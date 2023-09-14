export function drawLines(ctx, x, y, size, particles) {
  const colors = ["black", "#f0c6f2", "#6050dc", "#FACADE","red","#F8CD02","#74b04F","#FFF5EE","#D2B0A3"]
  const centerColor = colors[Math.floor(Math.random() * colors.length)];
  const red = f1(x); const green = f2(x); const blue = f3(x);
  const Blur = 2000; 
  ctx.shadowBlur = Blur; 
  ctx.lineWidth = size / 388;
  for (let j = 0; j < 2; j++) {
  ctx.strokeStyle = `rgb(${red},${green},${blue})`;
    for (let i = 0; i < 360; i += 1.2) {
      const angle = ((i + j/1.6)/180) * Math.PI;
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const L = 10 + 2 * $fx.randminter();
     // Draw lines
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + c * size * L, y + s * size * L);
      ctx.stroke();
    }
  }
  // Draw the center with the centerColor
  ctx.fillStyle = centerColor;
  ctx.beginPath();
  ctx.arc(x + size * 0.15, y, size / 2.49, 0, 2 * Math.PI);
  ctx.fill();

  // Draw circles on top of the eyes
  const alpha = Math.random() * 0.5 + 1.2; // Adjust the alpha range
  ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  ctx.beginPath();
  ctx.arc(x - size * 0.15, y, size / 7.1, 0, 2 * Math.PI);
  ctx.fill(); 

  ctx.beginPath();
  ctx.arc(x + size * 0.18, y, size / 7.09, 0, 2 * Math.PI);
  ctx.fill();

  function drawParticles1(centerX) {
    const numParticles = particles; // Number of particles
    const particleSize = 0.004; // Size of particles
    ctx.fillStyle = "lightyellow";
    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 2.9 * Math.random(); // Distance from the center
      const particleX = centerX + Math.cos(angle) * size * distance;
      const particleY = y + Math.sin(angle) * size * distance;
      const noiseX = (Math.random() - 0.1) * 0.01; // Add noise to X position
      const noiseY = (Math.random() - 0.5) * 0.05; // Add noise to Y position

      ctx.beginPath();
      ctx.arc(particleX + noiseX, particleY + noiseY, particleSize, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  function drawParticles2(centerX) {
    const numParticles = particles; // Number of particles
    const particleSize = 0.002; // Size of particles
    ctx.fillStyle = "yellow";
    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 2.7 * Math.random(); // distance from the center
      const particleX = centerX + Math.cos(angle) * size * distance;
      const particleY = y + Math.sin(angle) * size * distance;
      const noiseX = (Math.random() - 0.001) * 0.01; // add noise to X pos
      const noiseY = (Math.random() - 0.01) * 0.01; // add noise to Y pos

      ctx.beginPath();
      ctx.arc(particleX + noiseX, particleY + noiseY, particleSize, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  function drawParticles3(centerX, centerY) {
    const numParticles = particles; // Num of particles
    const particleLength = 0.051; // length of particles
    const lineWidth = 0.01; // width of particle lines
    ctx.strokeStyle = "white";
  
    for (let i = 0; i < numParticles; i++) {
      const angle = (3 / i * numParticles) + 2 * Math.PI * 2.51; // distribute particles along a semi-circle
      const distance = size * 2.2 - Math.random() * size * 0.25; // vary the distance
      const particleX = centerX - Math.cos(angle) * distance;
      const particleY = centerY + Math.sin(angle) * distance;
      const noiseX = (Math.random() - 0.5) * 0.005; // add noise to X position
      const noiseY = (Math.random() - 0.5) * 0.05; // add noise to Y position
      const dx = (Math.random() - 0.5) * particleLength; // X component of line direction
      const dy = (Math.random() - 0.5) * particleLength; // Y component of line direction
      
      ctx.beginPath();
      ctx.moveTo(particleX + noiseX, particleY + noiseY);
      ctx.lineTo(particleX + 20 * Math.sin(dx) + noiseX + dx, particleY + noiseY + dy);
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  }
  const centerX1 = x - size * 0.05;
  const centerX2 = x + size * 0.5;
  const centerY = y - size * 0.26;
  drawParticles1(centerX1);
  drawParticles2(centerX2);
  drawParticles3(centerX1, centerY);
  

  function f1(x) {
    const offset = Math.random() * Math.PI * 2;
    return Math.sin(x + offset) * 127 + 128;
  }
  function f2(x) {
    const offset = Math.random() * Math.PI * 2;
    return Math.sin(x + offset + 2) * 127 + 128;
  }
  function f3(x) {
    const offset = Math.random() * Math.PI * 2;
    return Math.sin(x + offset + 3) * 127 + 128;
  }
}
