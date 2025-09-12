export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Halaman Tidak Ditemukan</h1>
      <p className="text-gray-600 mb-6">Route yang kamu akses tidak ada. Jika ini seharusnya ada, pastikan kamu sudah deploy versi terbaru.</p>
      <a href="/" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Kembali ke Beranda</a>
    </div>
  );
}
