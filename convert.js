function oklchToHex(l, c, h) {
  // oklch to oklab
  const a = c * Math.cos(h * Math.PI / 180);
  const oklab_b = c * Math.sin(h * Math.PI / 180);
  // oklab to lms'
  const L_ = 0.2104542553 * l + 1.9779984951 * a + 0.0259040371 * oklab_b;
  const M_ = 0.7936177850 * l - 2.4285922050 * a + 0.7827717662 * oklab_b;
  const S_ = -0.0040720468 * l + 0.4505937099 * a - 0.8086757660 * oklab_b;
  // inverse non-linearity
  const threshold = 0.20689655172413793;
  const L = L_ > threshold ? L_ ** 3 : (L_ - 4/29) * 3 * (0.008856 ** 2);
  const M = M_ > threshold ? M_ ** 3 : (M_ - 4/29) * 3 * (0.008856 ** 2);
  const S = S_ > threshold ? S_ ** 3 : (S_ - 4/29) * 3 * (0.008856 ** 2);
  // lms to xyz
  const X = 1.2270138511 * L - 0.5577999807 * M + 0.2812561489 * S;
  const Y = -0.0405801784 * L + 1.1122568696 * M - 0.0716766787 * S;
  const Z = -0.0763812845 * L - 0.4214819784 * M + 1.5861632204 * S;
  // xyz to linear rgb
  const r = 3.240969941904521 * X - 1.537383177570093 * Y - 0.498610760293 * Z;
  const g = -0.96924363628087 * X + 1.87596750150772 * Y + 0.041555057407175 * Z;
  const blue = 0.055630079696993 * X - 0.20397695888897 * Y + 1.056971514242878 * Z;
  // linear to srgb
  function linearToSrgb(x) {
    return x > 0.0031308 ? 1.055 * (x ** (1/2.4)) - 0.055 : 12.92 * x;
  }
  const r_s = Math.max(0, Math.min(1, linearToSrgb(r)));
  const g_s = Math.max(0, Math.min(1, linearToSrgb(g)));
  const b_s = Math.max(0, Math.min(1, linearToSrgb(blue)));
  // rgb to hex
  const r_hex = Math.round(r_s * 255).toString(16).padStart(2, '0');
  const g_hex = Math.round(g_s * 255).toString(16).padStart(2, '0');
  const b_hex = Math.round(b_s * 255).toString(16).padStart(2, '0');
  return '#' + r_hex + g_hex + b_hex;
}

console.log('bg-dark:', oklchToHex(0.1, 0.025, 264));
console.log('bg:', oklchToHex(0.15, 0.025, 264));
console.log('bg-light:', oklchToHex(0.2, 0.025, 264));
console.log('text:', oklchToHex(0.96, 0.05, 264));
console.log('text-muted:', oklchToHex(0.76, 0.05, 264));
console.log('highlight:', oklchToHex(0.5, 0.05, 264));
console.log('border:', oklchToHex(0.4, 0.05, 264));
console.log('border-muted:', oklchToHex(0.3, 0.05, 264));
console.log('primary:', oklchToHex(0.76, 0.1, 264));
console.log('secondary:', oklchToHex(0.76, 0.1, 84));
console.log('danger:', oklchToHex(0.7, 0.05, 30));
console.log('warning:', oklchToHex(0.7, 0.05, 100));
console.log('success:', oklchToHex(0.7, 0.05, 160));
console.log('info:', oklchToHex(0.7, 0.05, 260));