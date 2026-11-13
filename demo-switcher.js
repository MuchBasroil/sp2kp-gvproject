(() => {
  if (window.__sp2kpSwitcher) return; window.__sp2kpSwitcher = 1;
  const HOME = '0 Pilih Role.dc.html';
  const ROLES = [
    ['Admin Provinsi', '1-00 Login Admin Provinsi.dc.html', '1-'],
    ['Admin Kantong Pangan', '2-00 Login Admin KP.dc.html', '2-'],
    ['Kurir KP', '3-00 Kurir KP - Login.dc.html', '3-'],
    ['Warung Point', '4-00 Login Warung Point.dc.html', '4-'],
    ['Distributor', '5-00 Login Distributor.dc.html', '5-']
  ];
  const file = decodeURIComponent(location.pathname.split('/').pop() || '');
  if (!/^[1-5]-\d\d /.test(file)) return;
  const cur = ROLES.find(r => file.startsWith(r[2]));
  const F = "'Plus Jakarta Sans',system-ui,sans-serif";
  const mount = () => {
    const root = document.createElement('div');
    root.setAttribute('data-demo-switcher', '');
    const bottom = () => (window.innerWidth < 700 ? 96 : 20) + 'px';
    root.style.cssText = `position:fixed;right:16px;bottom:${bottom()};z-index:2147483000;font-family:${F};display:flex;flex-direction:column;align-items:flex-end;gap:8px`;
    const menu = document.createElement('div');
    menu.style.cssText = 'display:none;flex-direction:column;gap:2px;width:256px;padding:8px;border-radius:20px;background:#FFFFFF;border:1px solid #E3E6E1;box-shadow:0 16px 40px rgba(22,27,23,0.18)';
    const home = document.createElement('a');
    home.href = encodeURI(HOME);
    home.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"></path></svg>Kembali ke pilih role';
    home.style.cssText = 'display:flex;align-items:center;gap:8px;height:42px;padding:0 12px;border-radius:12px;font-size:13px;font-weight:800;color:#FFFFFF;background:#1E4E9C;text-decoration:none;margin-bottom:6px';
    menu.appendChild(home);
    const lbl = document.createElement('span');
    lbl.textContent = 'Atau langsung ke login';
    lbl.style.cssText = 'font-size:11px;font-weight:700;color:#5E645F;padding:4px 12px';
    menu.appendChild(lbl);
    ROLES.forEach(([name, href]) => {
      const a = document.createElement('a');
      a.href = encodeURI(href);
      const on = cur && cur[0] === name;
      a.innerHTML = `<span style="width:7px;height:7px;border-radius:50%;background:${on ? '#1E4E9C' : '#D3D7D2'};flex:none"></span><span style="flex:1">${name}</span>${on ? '<span style="font-size:11px;font-weight:700;color:#1E4E9C">Sekarang</span>' : ''}`;
      a.style.cssText = `display:flex;align-items:center;gap:10px;height:38px;padding:0 12px;border-radius:12px;font-size:13px;font-weight:${on ? 800 : 600};color:#161B17;text-decoration:none;background:${on ? 'rgba(30,78,156,0.08)' : 'transparent'}`;
      a.onmouseenter = () => { if (!on) a.style.background = '#F3F4F2'; };
      a.onmouseleave = () => { if (!on) a.style.background = 'transparent'; };
      menu.appendChild(a);
    });
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"></circle><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"></path><path d="M16 4.5a3 3 0 0 1 0 6M21 20c0-2.6-1.6-4.6-4-5.3"></path></svg><span style="display:flex;flex-direction:column;align-items:flex-start;line-height:1.15"><span style="font-size:10px;font-weight:700;opacity:.75">${cur ? cur[0] : 'Demo'}</span><span style="font-size:13px;font-weight:800">Pilih role</span></span>`;
    btn.style.cssText = `display:flex;align-items:center;gap:10px;height:48px;padding:0 18px 0 14px;border-radius:999px;border:none;background:#161B17;color:#FFFFFF;font-family:${F};cursor:pointer;box-shadow:0 8px 24px rgba(22,27,23,0.25)`;
    let open = false;
    btn.onclick = e => { e.stopPropagation(); open = !open; menu.style.display = open ? 'flex' : 'none'; };
    document.addEventListener('click', e => { if (open && !root.contains(e.target)) { open = false; menu.style.display = 'none'; } });
    window.addEventListener('resize', () => { root.style.bottom = bottom(); });
    root.appendChild(menu); root.appendChild(btn);
    document.body.appendChild(root);
  };
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
