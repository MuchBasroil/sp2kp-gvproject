(function () {
  const R = window.React;
  function SlideConfirm(p) {
    const h = R.createElement, track = R.useRef(null), [x, setX] = R.useState(0), [drag, setDrag] = R.useState(false), [done, setDone] = R.useState(false);
    const K = 46, PAD = 5;
    const max = () => (track.current ? track.current.clientWidth - K - PAD * 2 : 200);
    const start = e => { if (done || p.disabled) return; e.preventDefault(); const sx = (e.touches ? e.touches[0] : e).clientX - x; setDrag(true);
      const mv = ev => { const cx = (ev.touches ? ev.touches[0] : ev).clientX; setX(Math.max(0, Math.min(max(), cx - sx))); };
      const up = ev => { window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); setDrag(false);
        setX(cur => { if (cur >= max() * 0.88) { setDone(true); setTimeout(() => { p.onConfirm && p.onConfirm(); setDone(false); setX(0); }, 380); return max(); } return 0; }); };
      window.addEventListener('pointermove', mv); window.addEventListener('pointerup', up); };
    const pct = max() ? x / max() : 0, bg = p.color || '#161B17', off = !!p.disabled;
    return h('div', { ref: track, role: 'slider', 'aria-label': p.label, 'aria-valuenow': Math.round(pct * 100), tabIndex: 0,
      onKeyDown: e => { if (!off && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); p.onConfirm && p.onConfirm(); } },
      style: { position: 'relative', height: K + PAD * 2, borderRadius: 999, background: off ? 'var(--s2,#EEF0EC)' : bg, overflow: 'hidden', userSelect: 'none', touchAction: 'none', cursor: off ? 'not-allowed' : 'default', width: '100%' } },
      h('div', { style: { position: 'absolute', left: 0, top: 0, bottom: 0, width: x + K + PAD * 2, background: done ? '#1D9E75' : 'rgba(255,255,255,0.12)', transition: drag ? 'none' : 'width .25s, background .2s' } }),
      h('span', { style: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: K, fontSize: 15, fontWeight: 700, color: off ? 'var(--ink2,#5E645F)' : 'var(--on-ink,#FFFFFF)', opacity: done ? 0 : 1 - pct * 0.9, pointerEvents: 'none', whiteSpace: 'nowrap' } }, off ? (p.disabledLabel || p.label) : p.label),
      h('span', { style: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800, color: '#FFFFFF', opacity: done ? 1 : 0, transition: 'opacity .2s', pointerEvents: 'none' } }, p.doneLabel || 'Terkonfirmasi'),
      h('span', { onPointerDown: start, style: { position: 'absolute', top: PAD, left: PAD + x, width: K, height: K, borderRadius: '50%', background: off ? 'var(--line,#E3E6E1)' : '#FFFFFF', color: off ? 'var(--ink2,#5E645F)' : (done ? '#1D9E75' : '#161B17'), display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.18)', cursor: off ? 'not-allowed' : (drag ? 'grabbing' : 'grab'), transition: drag ? 'none' : 'left .25s' } },
        h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' }, h('path', { d: done ? 'M5 12l5 5 9-10' : 'M5 12h14M13 6l6 6-6 6' }))));
  }
  window.SlideConfirm = SlideConfirm;
})();
