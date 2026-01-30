'use client'

import { useEffect, useState } from "react";

export default function Home(){
  const [provinces, setProvinces] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("/api/provinces")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then((json) => {
        setProvinces(json.data);
      })
  }, []);

  // Hitung total halaman
  const totalPages = Math.ceil(provinces.length / itemsPerPage);
  
  // Data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProvinces = provinces.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi navigasi
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return(
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl text-blue-900 font-bold mb-6 flex items-center gap-3">
            <span className="text-4xl">🗺️</span>
            Daftar Provinsi Indonesia
          </h1>

          {/* Tabel */}
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">No</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Kode Provinsi</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Nama Provinsi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentProvinces.map((prov, index) => (
                  <tr 
                    key={prov.code} 
                    className="hover:bg-blue-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-blue-600 font-semibold">
                      {prov.code}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                      {prov.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Menampilkan {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, provinces.length)} dari {provinces.length} provinsi
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                }`}
              >
                ← Previous
              </button>
              
              <span className="px-4 py-2 text-sm font-medium text-gray-700">
                Halaman {currentPage} dari {totalPages}
              </span>
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}