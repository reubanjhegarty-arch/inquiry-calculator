/* Vizcom-style hero: depth parallax + sketch-to-render wipe that follows the mouse. */
(() => {
  const hero = document.getElementById('vzHero');
  if (!hero) return;

  const canvas = hero.querySelector('.vz-canvas');
  const layers = [...hero.querySelectorAll('[data-depth]')].map(el => ({ el, d: parseFloat(el.dataset.depth) }));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = matchMedia('(max-width: 820px)');

  let tx = 0, ty = 0, x = 0, y = 0;      // pointer target and eased value, -0.5 to 0.5
  let cut = 58, tcut = 58;               // where the render starts, in percent
  let touched = false, running = false;

  if (reduce) { canvas.style.setProperty('--cut', '58%'); }
  else {
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
      tcut = 50 + tx * 70;               // 15% to 85%
      touched = true;
    });
    hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
  }

  function tick(t) {
    if (!running) return;
    if (!touched) tcut = 58 + 22 * Math.sin(t / 1600);   // gentle idle sweep until someone moves
    x += (tx - x) * 0.08;
    y += (ty - y) * 0.08;
    cut += (tcut - cut) * 0.12;
    const k = small.matches ? 0 : 1;
    layers.forEach(({ el, d }) => { el.style.translate = `${-x * d * 90 * k}px ${-y * d * 60 * k}px`; });
    canvas.style.transform = `perspective(1100px) rotateY(${x * 10 * k}deg) rotateX(${-y * 8 * k}deg)`;
    canvas.style.setProperty('--cut', cut.toFixed(2) + '%');
    requestAnimationFrame(tick);
  }

  if (!reduce) {
    // only animate while the hero is on screen
    new IntersectionObserver(([en]) => {
      if (en.isIntersecting && !running) { running = true; requestAnimationFrame(tick); }
      else if (!en.isIntersecting) running = false;
    }).observe(hero);
  }

  // Rotating example questions in the prompt bar
  const input = document.getElementById('heroAiInput');
  if (input && !reduce) {
    const ideas = ['Solve this for me', 'What is 15% of 240?', 'Monthly payment on $400,000 at 6.2%', 'Solve 2x² − 5x + 3 = 0', 'Convert 72°F to Celsius'];
    let i = 0;
    setInterval(() => {
      if (document.activeElement === input || input.value) return;
      i = (i + 1) % ideas.length;
      input.placeholder = ideas[i];
    }, 3200);
  }
})();
