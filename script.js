// ===== KNOWLEDGE BASE (15 Gejala & Solusi) =====
const gejalaData = [
    { id: 1, kode: 'G01', nama: 'Daun menguning dan rontok', bobot: 3 },
    { id: 2, kode: 'G02', nama: 'Bercak hitam pada buah', bobot: 4 },
    { id: 3, kode: 'G03', nama: 'Batang layu dan busuk', bobot: 5 },
    { id: 4, kode: 'G04', nama: 'Buah kecil dan keriting', bobot: 3 },
    { id: 5, kode: 'G05', nama: 'Ujung daun terbakar (seperti tersiram air panas)', bobot: 4 },
    { id: 6, kode: 'G06', nama: 'Bercak putih seperti tepung pada daun', bobot: 3 },
    { id: 7, kode: 'G07', nama: 'Tanaman tumbuh kerdil', bobot: 4 },
    { id: 8, kode: 'G08', nama: 'Buah berlubang-lubang', bobot: 5 },
    { id: 9, kode: 'G09', nama: 'Daun menggulung ke bawah', bobot: 3 },
    { id: 10, kode: 'G10', nama: 'Akar membusuk berwarna coklat', bobot: 5 },
    { id: 11, kode: 'G11', nama: 'Bintik kuning pada permukaan daun', bobot: 3 },
    { id: 12, kode: 'G12', nama: 'Buah layu dan mengerut', bobot: 4 },
    { id: 13, kode: 'G13', nama: 'Pertumbuhan tunas terhambat', bobot: 3 },
    { id: 14, kode: 'G14', nama: 'Noda coklat pada batang', bobot: 4 },
    { id: 15, kode: 'G15', nama: 'Daun berlubang dimakan ulat', bobot: 5 }
];

// ===== SOLUSI DENGAN BAHASA YANG LEBIH MANUSIAWI =====
const solusiData = {
    1: { kode: 'S01', desk: 'Semprotkan fungisida mankozeb 2 gram per liter air, lakukan 3 hari sekali. Jangan lupa perbaiki saluran drainase biar air nggak menggenang.', urg: 'Berat' },
    2: { kode: 'S02', desk: 'Potong dulu bagian tanaman yang kena, lalu semprot pakai bakterisida tembaga 1,5 gram per liter air seminggu sekali.', urg: 'Berat' },
    3: { kode: 'S03', desk: 'Bersihkan lahan total, berikan Trichoderma 10 gram per tanaman. Kurangi kelembaban dengan cara memperbaiki sirkulasi udara.', urg: 'Berat' },
    4: { kode: 'S04', desk: 'Semprot insektisida sistemik buat ngusir kutu. Tambahkan pupuk kalsium 5 gram per tanaman biar buahnya lebih kuat.', urg: 'Sedang' },
    5: { kode: 'S05', desk: 'Pasang mulsa plastik hitam-perak di bedengan. Siram tanaman cuma di pagi hari biar nggak terlalu lembab.', urg: 'Ringan' },
    6: { kode: 'S06', desk: 'Semprot belerang larut 3 gram per liter air tiap 4 hari. Jaga sirkulasi udara di sekitar tanaman.', urg: 'Sedang' },
    7: { kode: 'S07', desk: 'Kombinasikan pupuk hayati cair + NPK Mutiara 16-16-16 sebanyak 5 gram per tanaman. Siram secara rutin.', urg: 'Sedang' },
    8: { kode: 'S08', desk: 'Semprot abamektin 2 ml per liter air. Pasang perangkap kuning (Yellow Sticky Trap) buat jebak hama.', urg: 'Berat' },
    9: { kode: 'S09', desk: 'Semprot akarisida 1 ml per liter air. Segera pangkas daun yang parah lalu bakar biar nggak menular.', urg: 'Sedang' },
    10: { kode: 'S10', desk: 'Siram perakaran dengan fungisida metalaksil. Kalau pakai pot, ganti media tanah dengan yang steril.', urg: 'Berat' },
    11: { kode: 'S11', desk: 'Semprot ekstrak bawang putih 10% buat ngusir hama. Tambahkan pupuk mikro Zn 1 gram per liter air.', urg: 'Ringan' },
    12: { kode: 'S12', desk: 'Siram dengan larutan Pseudomonas fluorescens 5 ml per liter. Kurangi frekuensi penyiraman sampai 50%.', urg: 'Sedang' },
    13: { kode: 'S13', desk: 'Aplikasikan pupuk organik cair + hormon tumbuh 0,5 ml per liter air tiap 2 minggu.', urg: 'Ringan' },
    14: { kode: 'S14', desk: 'Atur pH tanah ke 6,0–6,5 pakai kapur dolomit. Semprot juga fungisida kontak buat pencegahan.', urg: 'Sedang' },
    15: { kode: 'S15', desk: 'Semprot Bacillus thuringiensis 2 ml per liter air buat basmi ulat. Pasang perangkap feromon juga.', urg: 'Berat' }
};

const deskripsiGejala = {
    1: 'Daun menguning merata dan rontok sebelum waktunya — biasanya karena jamur atau kekurangan nutrisi.',
    2: 'Muncul bercak hitam melingkar di buah cabai, bisa menyebabkan busuk kering (Antraknosa).',
    3: 'Batang jadi lemas, layu mendadak, berwarna coklat kehitaman dan busuk basah karena Phytophthora.',
    4: 'Buah tumbuh kecil dan keriting, bentuknya nggak normal — sering karena serangan virus atau hama.',
    5: 'Ujung daun hangus seperti terbakar — tanda kurangnya unsur Kalium (K) dalam tanah.',
    6: 'Ada lapisan putih seperti tepung di permukaan daun — itu jamur tepung yang mengganggu fotosintesis.',
    7: 'Tanaman tumbuh pendek dan kerdil, jauh dari ukuran normal — bisa karena nematoda di akar.',
    8: 'Buah bolong-bolong berlubang — biasanya ulat atau hama penggerek buah yang nakal.',
    9: 'Daun menggulung ke bawah — akibat kutu yang menghisap cairan tanaman.',
    10: 'Akar membusuk, warna coklat gelap, rapuh — tanaman bisa roboh karena akar rusak.',
    11: 'Bintik-bintik kuning di daun yang akhirnya mengering dan gugur.',
    12: 'Buah layu dan mengeriput — bisa karena kekurangan air atau serangan jamur.',
    13: 'Tunas baru tumbuh lambat banget, bahkan berhenti — ada gangguan fisiologis.',
    14: 'Batang ada noda coklat yang meluas — biasanya infeksi jamur atau luka mekanis.',
    15: 'Daun sobek dan berlubang — ulat atau serangga penggerek daun lagi makan-makan.'
};

// Aturan Forward Chaining (gejala → solusi)
const aturan = [
    { g: 1, s: 1 }, { g: 2, s: 2 }, { g: 3, s: 3 }, { g: 4, s: 4 }, { g: 5, s: 5 },
    { g: 6, s: 6 }, { g: 7, s: 7 }, { g: 8, s: 8 }, { g: 9, s: 9 }, { g: 10, s: 10 },
    { g: 11, s: 11 }, { g: 12, s: 12 }, { g: 13, s: 13 }, { g: 14, s: 14 }, { g: 15, s: 15 },
    // Cross rules (alternatif solusi)
    { g: 1, s: 3 }, { g: 2, s: 1 }, { g: 3, s: 10 }, { g: 5, s: 6 }, { g: 9, s: 4 },
    { g: 11, s: 5 }, { g: 12, s: 3 }, { g: 13, s: 7 }, { g: 14, s: 2 }, { g: 15, s: 8 }
];

// ===== STATE =====
let wizStep = -1;
let answers = {};
let factBase = new Set();
let riwayat = [];
try {
    const s = localStorage.getItem('riwayatCabai3');
    if (s) riwayat = JSON.parse(s);
} catch (e) {}

// ===== SPLASH =====
(function() {
    const bar = document.getElementById('splashBar');
    const btn = document.getElementById('btnSplash');
    let p = 0;
    const iv = setInterval(() => {
        p += Math.random() * 12 + 4;
        if (p >= 100) { p = 100;
            clearInterval(iv);
            btn.classList.add('show'); }
        bar.style.width = p + '%';
    }, 120);
    btn.addEventListener('click', () => {
        document.getElementById('splash').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash').style.display = 'none';
            document.getElementById('mainNav').style.display = 'block';
            document.getElementById('mainApp').style.display = 'block';
            document.getElementById('mainFooter').style.display = 'block';
        }, 500);
    });
})();

// ===== NAV =====
document.querySelectorAll('.nav-links a[data-sec]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const sec = document.getElementById(a.dataset.sec);
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.nav-links a').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
        document.getElementById('navLinks').classList.remove('open');
    });
});
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});
window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
});

// ===== TOAST =====
function toast(msg, type = 'info') {
    const wrap = document.getElementById('toastWrap');
    const t = document.createElement('div');
    t.className = 'toast ' + (type === 'success' ? 'success' : type === 'error' ? 'error' : '');
    t.textContent = msg;
    wrap.appendChild(t);
    setTimeout(() => {
        t.style.opacity = '0';
        t.style.transform = 'translateY(6px)';
        t.style.transition = 'all .3s';
        setTimeout(() => t.remove(), 300);
    }, 3000);
}

// ===== KATALOG GEJALA =====
function renderGejalaInfo() {
    const grid = document.getElementById('gejalaInfoGrid');
    grid.innerHTML = gejalaData.map(g => `
    <div class="gejala-card">
      <div class="gejala-num">${g.kode}</div>
      <div>
        <h4>${g.nama}</h4>
        <p>${deskripsiGejala[g.id]}</p>
      </div>
    </div>
  `).join('');
}
renderGejalaInfo();

// ===== WIZARD =====
function updateProgress() {
    const total = gejalaData.length;
    const done = wizStep < 0 ? 0 : Math.min(wizStep + 1, total);
    const pct = Math.round((done / total) * 100);
    document.getElementById('progFill').style.width = pct + '%';
    document.getElementById('progStep').textContent = done + ' / ' + total;
    if (wizStep < 0) document.getElementById('progLabel').textContent = '🌱 Siap Memulai';
    else if (wizStep < total) document.getElementById('progLabel').textContent = '🔍 Pertanyaan ' + (wizStep + 1);
    else document.getElementById('progLabel').textContent = '✅ Selesai!';
}

function showStart() {
    document.getElementById('screenStart').style.display = 'block';
    document.getElementById('screenQuestion').style.display = 'none';
    document.getElementById('screenResult').style.display = 'none';
    document.getElementById('btnStartWiz').style.display = '';
    document.getElementById('btnBack').style.display = 'none';
    document.getElementById('btnUlang').style.display = 'none';
    document.getElementById('btnPrint').style.display = 'none';
    updateProgress();
}

function renderAnswerTags() {
    const wrap = document.getElementById('answerTags');
    const keys = Object.keys(answers).map(Number).sort((a, b) => a - b);
    wrap.innerHTML = keys.map(id => {
        const g = gejalaData.find(x => x.id === id);
        const ans = answers[id];
        return `<span class="ans-tag ${ans?'ans-yes':'ans-no'}">
      <i class="fas fa-${ans?'check':'times'}"></i> ${g.kode}
    </span>`;
    }).join('');
}

function renderChainVis() {
    const firedIds = [...factBase];
    if (firedIds.length === 0) { document.getElementById('chainVis').style.display = 'none'; return; }

    const firedRules = [];
    firedIds.forEach(id => {
        aturan.filter(r => r.g === id).forEach(r => firedRules.push(r));
    });

    const steps = [];
    firedIds.forEach(id => {
        const g = gejalaData.find(x => x.id === id);
        steps.push(`<span class="chain-step fired">${g.kode}</span>`);
    });

    if (firedRules.length > 0) {
        steps.push(`<span class="chain-arrow">→ IF match THEN →</span>`);
        const solSet = new Set(firedRules.map(r => r.s));
        [...solSet].forEach(s => {
            steps.push(`<span class="chain-step result">${solusiData[s].kode}</span>`);
        });
    }

    document.getElementById('chainSteps').innerHTML = steps.join('');
    document.getElementById('chainVis').style.display = 'block';
}

function showQuestion(stepIdx) {
    const g = gejalaData[stepIdx];
    document.getElementById('screenStart').style.display = 'none';
    document.getElementById('screenQuestion').style.display = 'block';
    document.getElementById('screenResult').style.display = 'none';
    document.getElementById('qLabel').textContent = 'Pertanyaan ' + (stepIdx + 1) + ' dari ' + gejalaData.length;
    document.getElementById('qText').textContent = 'Apakah tanaman cabai Anda menunjukkan: ' + g.nama + '?';
    document.getElementById('qDesc').textContent = deskripsiGejala[g.id];
    renderAnswerTags();
    renderChainVis();
    document.getElementById('btnStartWiz').style.display = 'none';
    document.getElementById('btnBack').style.display = stepIdx > 0 ? '' : 'none';
    document.getElementById('btnUlang').style.display = '';
    document.getElementById('btnPrint').style.display = 'none';
    updateProgress();
}

// ===== PERHITUNGAN FORWARD CHAINING =====
function runForwardChaining() {
    const detectedIds = [...factBase];
    let totalBobotDetected = 0;
    detectedIds.forEach(id => {
        const g = gejalaData.find(x => x.id === id);
        if (g) totalBobotDetected += g.bobot;
    });

    let totalBobotSemua = 0;
    gejalaData.forEach(g => totalBobotSemua += g.bobot);

    const confidence = totalBobotSemua > 0 ? Math.round((totalBobotDetected / totalBobotSemua) * 100) : 0;

    const solusiMap = new Map();
    detectedIds.forEach(gid => {
        const g = gejalaData.find(x => x.id === gid);
        if (!g) return;
        const matched = aturan.filter(r => r.g === gid);
        matched.forEach(r => {
            const sol = solusiData[r.s];
            if (!sol) return;
            if (!solusiMap.has(r.s)) {
                solusiMap.set(r.s, { ...sol, bobot: 0, gejalaPemicu: [] });
            }
            solusiMap.get(r.s).bobot += g.bobot;
            if (!solusiMap.get(r.s).gejalaPemicu.includes(gid)) {
                solusiMap.get(r.s).gejalaPemicu.push(gid);
            }
        });
    });

    const rekomendasi = [...solusiMap.values()].sort((a, b) => b.bobot - a.bobot);

    rekomendasi.forEach(s => {
        s.matchPct = totalBobotDetected > 0 ? Math.round((s.bobot / totalBobotDetected) * 100) : 0;
    });

    return { rekomendasi, confidence, totalBobotDetected, totalBobotSemua };
}

// ===== KATEGORI =====
function getKategori(conf) {
    if (conf >= 70) return 'berat';
    if (conf >= 40) return 'sedang';
    return 'ringan';
}

function getLabelKategori(conf) {
    if (conf >= 70) return '⚠️ Darurat! (70–100%) – Segera bertindak!';
    if (conf >= 40) return '📋 Waspada (40–69%) – Perlu perhatian lebih';
    return '🌿 Aman (1–39%) – Pantau terus ya';
}

// ===== FUNGSI HUMANIZER UNTUK HASIL =====
function humanizeResult(confidence, kategori, rekomendasi, positifGejala) {
    let pesan = '';
    const namaGejala = positifGejala.map(g => g.nama.toLowerCase()).join(', ');

    if (kategori === 'berat') {
        pesan = `Waduh, dari gejala yang terlihat (${namaGejala}), kondisi tanaman cabai Anda cukup kritis nih. 
        Keyakinan sistem mencapai ${confidence}%. 
        Yuk segera lakukan tindakan berikut biar nggak makin parah.`;
    } else if (kategori === 'sedang') {
        pesan = `Hmm, dari gejala yang ada (${namaGejala}), tanaman cabai Anda mulai menunjukkan tanda-tanda gangguan. 
        Keyakinan sistem ${confidence}%. 
        Coba deh terapkan solusi di bawah ini, semoga cepat pulih ya!`;
    } else {
        pesan = `Tenang aja, dari gejala yang terlihat (${namaGejala || 'belum ada gejala serius'}), 
        tanaman cabai Anda masih tergolong aman. Keyakinan sistem ${confidence}%. 
        Tetap pantau dan lakukan perawatan rutin biar makin sehat!`;
    }
    return pesan;
}

function showResult() {
    document.getElementById('screenStart').style.display = 'none';
    document.getElementById('screenQuestion').style.display = 'none';
    document.getElementById('screenResult').style.display = 'block';
    document.getElementById('btnStartWiz').style.display = 'none';
    document.getElementById('btnBack').style.display = 'none';
    document.getElementById('btnUlang').style.display = '';
    document.getElementById('btnPrint').style.display = '';
    updateProgress();

    const { rekomendasi, confidence } = runForwardChaining();
    const kategori = getKategori(confidence);
    const confIcon = kategori === 'berat' ? 'fa-fire-alt' : kategori === 'sedang' ? 'fa-exclamation-triangle' : 'fa-check-circle';
    const confLabel = getLabelKategori(confidence);

    const positifGejala = [...factBase].map(id => gejalaData.find(g => g.id === id));

    // Ambil solusi terbaik (prioritas utama) = rekomendasi pertama
    const solusiUtama = rekomendasi.length > 0 ? rekomendasi[0] : null;
    const pesanHumanis = humanizeResult(confidence, kategori, rekomendasi, positifGejala);

    let html = `
    <div class="result-header">
      <div class="result-icon-wrap ${kategori}">
        <i class="fas ${confIcon}"></i>
      </div>
      <h2>🌶️ Hasil Diagnosa Cabai Anda</h2>
      <p>${positifGejala.length} gejala teridentifikasi dari ${gejalaData.length} pertanyaan</p>
    </div>

    <div class="conf-meter">
      <div class="conf-row">
        <span class="title"><i class="fas fa-chart-bar"></i> Tingkat Keyakinan Sistem</span>
        <span class="conf-pct" id="confPctDisplay">0%</span>
      </div>
      <div class="conf-track">
        <div class="conf-bar-inner ${kategori}" id="confBarEl" style="width:0%"></div>
      </div>
      <div style="margin-top:8px;font-size:.9rem;color:var(--ink-mid);font-weight:500">${confLabel}</div>
    </div>

    <div style="background:var(--cream);border-radius:var(--radius);padding:18px 20px;margin-bottom:20px;border-left:4px solid ${kategori==='berat'?'var(--red-warm)':kategori==='sedang'?'var(--amber)':'var(--green-soft)'}">
      <p style="font-size:.95rem;color:var(--ink-mid);line-height:1.7">${pesanHumanis}</p>
    </div>
  `;

    if (positifGejala.length > 0) {
        html += `
      <div class="gejala-summary">
        <h4><i class="fas fa-clipboard-list"></i> Gejala yang Terdeteksi:</h4>
        <div class="gejala-tags">
          ${positifGejala.map(g => `<span class="gejala-tag">${g.kode} – ${g.nama}</span>`).join('')}
        </div>
      </div>
    `;
    }

    // Tampilkan solusi utama dengan highlight
    if (solusiUtama) {
        const urgClass = solusiUtama.urg === 'Berat' ? 'berat' : solusiUtama.urg === 'Sedang' ? 'sedang' : 'ringan';
        const urgIcon = solusiUtama.urg === 'Berat' ? '⚠️' : solusiUtama.urg === 'Sedang' ? '📋' : '✅';
        html += `
      <div style="margin-bottom:16px;background:var(--green-pale);border-radius:var(--radius);padding:16px 20px;border:2px solid var(--green-mid)">
        <h4 style="font-size:.9rem;font-weight:700;color:var(--green-deep);margin-bottom:4px">⭐ Rekomendasi Utama</h4>
        <div class="solusi-card" style="border-color:var(--green-mid)">
          <div class="solusi-card-head" style="background:var(--green-pale)">
            <span class="solusi-kode">${solusiUtama.kode}</span>
            <span class="urg-badge ${urgClass}">${urgIcon} ${solusiUtama.urg}</span>
          </div>
          <div class="solusi-card-body">
            <p style="font-size:.95rem">${solusiUtama.desk}</p>
            <div class="match-bar">
              <span class="label">Kecocokan:</span>
              <div class="match-track"><div class="match-fill" style="width:${solusiUtama.matchPct}%"></div></div>
              <span class="match-pct">${solusiUtama.matchPct}%</span>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    // Tampilkan semua solusi alternatif
    if (rekomendasi.length > 1) {
        html += `<details style="margin-bottom:16px;cursor:pointer">
      <summary style="font-weight:600;color:var(--ink-mid);padding:8px 0"><i class="fas fa-chevron-down"></i> Lihat solusi alternatif lainnya (${rekomendasi.length-1})</summary>
      <div class="solusi-list" style="margin-top:12px">`;
        rekomendasi.slice(1).forEach(s => {
            const urgClass = s.urg === 'Berat' ? 'berat' : s.urg === 'Sedang' ? 'sedang' : 'ringan';
            const urgIcon = s.urg === 'Berat' ? '⚠️' : s.urg === 'Sedang' ? '📋' : '✅';
            html += `
        <div class="solusi-card">
          <div class="solusi-card-head">
            <span class="solusi-kode">${s.kode}</span>
            <span class="urg-badge ${urgClass}">${urgIcon} ${s.urg}</span>
          </div>
          <div class="solusi-card-body">
            <p>${s.desk}</p>
            <div class="match-bar">
              <span class="label">Kecocokan:</span>
              <div class="match-track"><div class="match-fill" style="width:${s.matchPct}%"></div></div>
              <span class="match-pct">${s.matchPct}%</span>
            </div>
          </div>
        </div>
      `;
        });
        html += `</div></details>`;
    } else if (rekomendasi.length === 0) {
        html += `
      <div class="no-result">
        <i class="fas fa-seedling"></i>
        <h3>✨ Tanaman Sehat!</h3>
        <p>Tanaman cabai Anda tampak sehat! Tetap rawat dengan baik ya, jangan lupa disiram dan dikasih pupuk rutin.</p>
      </div>
    `;
    }

    // chain vis final
    const firedRules = [];
    factBase.forEach(id => { aturan.filter(r => r.g === id).forEach(r => firedRules.push(r)); });
    if (factBase.size > 0) {
        const solSet = new Set(firedRules.map(r => r.s));
        const chainHTML = [
            ...[...factBase].map(id => { const g = gejalaData.find(x => x.id === id); return `<span class="chain-step fired">${g.kode}</span>`; }),
            `<span class="chain-arrow">→</span>`,
            ...[...solSet].map(s => `<span class="chain-step result">${solusiData[s].kode}</span>`)
        ].join('');
        html += `
      <div class="chain-vis">
        <h4><i class="fas fa-project-diagram"></i> Alur Inferensi Forward Chaining:</h4>
        <div class="chain-steps">${chainHTML}</div>
      </div>
    `;
    }

    document.getElementById('screenResult').innerHTML = html;

    // animasi confidence bar
    setTimeout(() => {
        const el = document.getElementById('confBarEl');
        const txt = document.getElementById('confPctDisplay');
        if (el) { el.style.width = confidence + '%'; }
        if (txt) { txt.textContent = confidence + '%'; }
    }, 100);

    // simpan riwayat
    try {
        riwayat.unshift({
            id: Date.now(),
            tanggal: new Date().toLocaleString('id-ID'),
            gejalaPositif: positifGejala.map(g => g.kode).join(', ') || 'Tidak ada',
            confidence,
            solusi: rekomendasi.map(s => s.kode + ' (' + s.urg + ')').join(', ') || 'Tanaman sehat'
        });
        if (riwayat.length > 20) riwayat.pop();
        localStorage.setItem('riwayatCabai3', JSON.stringify(riwayat));
    } catch (e) {}

    toast('✅ Diagnosa selesai! ' + confidence + '% keyakinan. Cek hasilnya di bawah ya!', 'success');
}

function answerQuestion(yes) {
    const g = gejalaData[wizStep];
    answers[g.id] = yes;
    if (yes) factBase.add(g.id);
    else factBase.delete(g.id);

    wizStep++;
    if (wizStep >= gejalaData.length) {
        showResult();
    } else {
        showQuestion(wizStep);
    }
}

function resetWizard() {
    wizStep = -1;
    answers = {};
    factBase.clear();
    showStart();
}

// ===== BUTTON HANDLERS =====
document.getElementById('btnStartWiz').addEventListener('click', () => {
    wizStep = 0;
    showQuestion(0);
});
document.getElementById('btnUlang').addEventListener('click', resetWizard);
document.getElementById('btnBack').addEventListener('click', () => {
    if (wizStep > 0) {
        const g = gejalaData[wizStep - 1];
        delete answers[g.id];
        factBase.delete(g.id);
        wizStep--;
        showQuestion(wizStep);
    }
});
document.getElementById('btnYa').addEventListener('click', () => answerQuestion(true));
document.getElementById('btnTidak').addEventListener('click', () => answerQuestion(false));
document.getElementById('heroStartBtn').addEventListener('click', () => {
    document.getElementById('diagnosaSection').scrollIntoView({ behavior: 'smooth' });
});

// ===== CETAK =====
document.getElementById('btnPrint').addEventListener('click', () => {
    const { rekomendasi, confidence } = runForwardChaining();
    const tanggal = new Date().toLocaleString('id-ID');
    const docId = 'CC-' + Date.now().toString().slice(-6);
    const positifGejala = [...factBase].map(id => gejalaData.find(g => g.id === id));
    const kategori = getKategori(confidence);

    const pw = window.open('', '_blank');
    pw.document.write(`<!DOCTYPE html><html><head><title>Laporan CabaiCare</title>
  <meta charset="UTF-8">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Arial,sans-serif;padding:40px;max-width:800px;margin:0 auto;color:#212529}
    .logo{font-size:26px;font-weight:800;color:#1B4332;margin-bottom:6px}
    .logo span{color:#E63946}
    .meta{background:#F8F9FA;padding:16px;border-radius:10px;margin:20px 0;font-size:14px}
    .meta p{margin:4px 0}
    .conf{background:#1B4332;color:white;padding:16px 20px;border-radius:10px;margin:16px 0;display:flex;justify-content:space-between;align-items:center}
    .conf h3{font-size:2rem}
    .gejala-list{margin:16px 0}
    .gejala-tag{display:inline-block;background:#D8F3DC;color:#1B4332;padding:3px 10px;border-radius:99px;font-size:12px;font-weight:600;margin:3px}
    .sol{border:1px solid #E9ECEF;border-left:4px solid #2D6A4F;margin:12px 0;padding:14px;border-radius:8px}
    .sol-head{display:flex;justify-content:space-between;margin-bottom:8px}
    .sol-kode{font-weight:700;font-size:13px;color:#1B4332}
    .urg{font-size:11px;font-weight:700;padding:2px 8px;border-radius:99px}
    .berat{background:#FEE2E2;color:#DC2626}
    .sedang{background:#FEF3C7;color:#92400E}
    .ringan{background:#D1FAE5;color:#059669}
    .foot{margin-top:40px;text-align:center;font-size:11px;color:#6C757D;border-top:1px solid #E9ECEF;padding-top:16px}
  </style></head><body>
  <div class="logo">Cabai<span>Care</span></div>
  <p style="color:#6B7280;font-size:14px">Sistem Pakar Forward Chaining – Mitigasi Gagal Panen Cabai</p>
  <div class="meta">
    <p><strong>ID Laporan:</strong> ${docId}</p>
    <p><strong>Tanggal:</strong> ${tanggal}</p>
    <p><strong>Gejala Terdeteksi:</strong> ${positifGejala.length} dari ${gejalaData.length}</p>
    <p><strong>Kategori:</strong> ${kategori.toUpperCase()} (${confidence}%)</p>
  </div>
  <div class="conf">
    <div><p style="opacity:.8;font-size:13px">Tingkat Keyakinan Sistem</p></div>
    <h3>${confidence}%</h3>
  </div>
  ${positifGejala.length>0?`<div class="gejala-list"><p style="font-weight:700;margin-bottom:8px">Gejala Positif:</p>${positifGejala.map(g => `<span class="gejala-tag">${g.kode} – ${g.nama}</span>`).join('')}</div>`:''}
  <p style="font-weight:700;margin:16px 0 8px">⭐ Rekomendasi Utama</p>
  ${rekomendasi.length>0 ? (() => {
    const s = rekomendasi[0];
    const uc = s.urg==='Berat'?'berat':s.urg==='Sedang'?'sedang':'ringan';
    return `<div class="sol"><div class="sol-head"><span class="sol-kode">${s.kode}</span><span class="urg ${uc}">${s.urg}</span></div><p style="font-size:13px;color:#374151">${s.desk}</p></div>`;
  })() : '<p style="color:#6B7280">Tidak ditemukan solusi. Tanaman tampak sehat.</p>'}
  <div class="foot"><p>Diterbitkan oleh CabaiCare Expert System – © 2026</p></div>
  </body></html>`);
    pw.document.close();
    setTimeout(() => pw.print(), 500);
});

// ===== RIWAYAT =====
// ===== RIWAYAT =====
document.getElementById('riwayatBtn').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('navLinks').classList.remove('open');

    // Baca ulang dari localStorage setiap kali dibuka
    let riwayatData = [];
    try {
        const s = localStorage.getItem('riwayatCabai3');
        if (s) riwayatData = JSON.parse(s);
    } catch (e) {
        console.warn('Gagal baca riwayat:', e);
    }

    const body = document.getElementById('modalBody');

    if (riwayatData.length === 0) {
        body.innerHTML = `
            <div class="riwayat-empty">
                <i class="fas fa-inbox" style="font-size:2rem;color:#D1D5DB;display:block;margin-bottom:12px"></i>
                Belum ada riwayat diagnosa
            </div>`;
    } else {
        // Tampilkan maksimal 3 data terbaru
        const tampil = riwayatData.slice(0, 3);
        let html = tampil.map(r => `
            <div class="riwayat-item">
                <div class="riwayat-top">
                    <span class="riwayat-tanggal"><i class="fas fa-clock"></i> ${r.tanggal}</span>
                    <span class="riwayat-conf">${r.confidence}%</span>
                </div>
                <div class="riwayat-sol"><strong>Gejala:</strong> ${r.gejalaPositif}</div>
                <div class="riwayat-sol" style="margin-top:4px"><strong>Solusi:</strong> ${r.solusi}</div>
            </div>
        `).join('');

        // Jika lebih dari 3, beri informasi
        if (riwayatData.length > 3) {
            html += `
                <p style="text-align:center;font-size:12px;color:#6B7280;margin-top:12px">
                    * Hanya menampilkan 3 riwayat terbaru
                </p>`;
        }

        // Tambahkan tombol Kembali
        html += `
            <div style="margin-top:20px;text-align:center">
                <button onclick="document.getElementById('riwayatModal').classList.remove('open')" 
                        class="btn-wiz btn-wiz-secondary" style="width:100%;justify-content:center">
                    <i class="fas fa-arrow-left"></i> Kembali ke Diagnosa
                </button>
            </div>
        `;

        body.innerHTML = html;
    }

    document.getElementById('riwayatModal').classList.add('open');
});

// ===== INIT =====
showStart();