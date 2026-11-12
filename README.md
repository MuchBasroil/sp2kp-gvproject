# SP2KP Kantong Pangan Sumut, demo

Situs statis, tidak perlu build.

## Deploy ke Vercel
1. Buka https://vercel.com/new, pilih upload/deploy folder ini (atau hubungkan repo GitHub yang berisi folder ini).
2. Framework preset: Other. Build command dan output directory dikosongkan.
3. Halaman depan (index.html) berisi pilihan role.

Lewat CLI: `npm i -g vercel`, lalu jalankan `vercel --prod` di dalam folder ini.

## Isi
- index.html: pilihan role
- 1-xx Admin Provinsi, 2-xx Admin KP, 3-xx Kurir KP, 4-xx Warung Point, 5-xx Distributor, 6-xx Kurir Distributor, 7-xx Pembeli (GV App)
- demo-switcher.js: tombol "Ganti role" di pojok kanan bawah setiap halaman
