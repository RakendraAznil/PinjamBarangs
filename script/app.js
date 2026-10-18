const dummyData = [
  {
    id: 1,
    name: "Proyektor Epson EB-X400",
    kategori: "Elektronik",
    kategoriLabel: "Elektronik",
    pemilik: "Rakendra Aznil",
    deskripsi:
      "Proyektor Epson EB-X400 adalah proyektor berkualitas tinggi yang cocok untuk presentasi bisnis dan pendidikan.",
    gambar:
      "https://static.wixstatic.com/media/2ed629_8c7450a8b942422083c01ad045fb868e~mv2.jpg/v1/fill/w_744,h_744,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ed629_8c7450a8b942422083c01ad045fb868e~mv2.jpg",
    status: true,
  },
  {
    id: 2,
    name: "Tripod Kamera Takara",
    kategori: "Elektronik",
    kategoriLabel: "Elektronik",
    pemilik: "Rakendra Aznil",
    deskripsi:
      "Tripod Kamera Takara adalah tripod yang stabil dan ringan, cocok untuk fotografi dan videografi.",
    gambar:
      "https://static.wixstatic.com/media/2ed629_8c7450a8b942422083c01ad045fb868e~mv2.jpg/v1/fill/w_744,h_744,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ed629_8c7450a8b942422083c01ad045fb868e~mv2.jpg",
    status: false,
  },
  {
    id: 3,
    name: "Wireless Microphone",
    kategori: "Elektronik",
    kategoriLabel: "Elektronik",
    pemilik: "Rakendra Aznil",
    deskripsi:
      "Wireless Microphone adalah mikrofon yang dapat digunakan tanpa kabel, cocok untuk keperluan seminar dan presentasi.",
    gambar:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=500&q=80",
    status: true,
  },
];

function renderItems(items) {
  const $container = $("#katalog-container");
  if ($container.length === 0) return;

  $container.empty();

  $("#total-barang-count").text(items.length);

  if (items.length === 0) {
    $container.html(
      `<div class="col-12 text-center py-5">
                <p class="text-muted fs-5">Barang yang Anda cari tidak ditemukan.</p>
            </div>`,
    );
    return;
  }

  items.forEach((item) => {
    const statusBadge = item.tersedia
      ? '<span class="badge bg-success position-absolute top-0 end-0 m-2">Tersedia</span>'
      : '<span class="badge bg-secondary position-absolute top-0 end-0 m-2">Dipinjam</span>';

    const cardHtml = `
            <div class="col item-card" data-kategori="${item.kategori}">
                <div class="card h-100 shadow-sm position-relative">
                    ${statusBadge}
                    <img src="${item.gambar}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${item.nama}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${item.nama}</h5>
                        <p class="text-muted small mb-1"><strong>Pemilik:</strong> ${item.pemilik}</p>
                        <p class="card-text text-muted small">${item.deskripsi}</p>
                        <a href="detail-barang.html" class="btn btn-outline-primary btn-sm mt-auto">Lihat Detail</a>
                    </div>
                </div>
            </div>
        `;
    $container.append(cardHtml);
  });
}

function filterBarang(keyword, kategori) {
  return dummyData.filter((item) => {
    const matchesKeyword = item.nama.toLowerCase().includes(keyword.toLowerCase());
    const matchesKategori = kategori === '' || item.kategori === kategori;
    return matchesKeyword && matchesKategori;
  });
}
