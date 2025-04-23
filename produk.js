// **Data Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Kamera", harga: 7500000 },
  { id: 4, nama: "Headphone", harga: 1500000 },
  { id: 5, nama: "Smartwatch", harga: 3000000 }
];

// Event Handler
const eventHandler = {
  tambahProduk: function(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk '${nama}' berhasil ditambahkan.`);
  },

  hapusProduk: function(...idProduk) {
    produkList = produkList.filter(produk => !idProduk.includes(produk.id));
    console.log(`Produk dengan ID ${idProduk.join(", ")} telah dihapus.`);
  },

  tampilkanProduk: function() {
    console.log("=== Daftar Produk ===");
    produkList.forEach(({ id, nama, harga }) => {
      console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
  }
};

// Simulasi Event Listener (manual untuk keperluan demonstrasi)
eventHandler.tampilkanProduk(); // tampilkan produk awal
eventHandler.tambahProduk(6, "Tablet", 7000000); // tambah produk baru
eventHandler.tampilkanProduk(); // tampilkan lagi
eventHandler.hapusProduk(2, 4); // hapus produk dengan ID 2 dan 4
eventHandler.tampilkanProduk(); // tampilkan lagi
