// barang.js

document.addEventListener("DOMContentLoaded", function () {
    // Access the input barang masuk button and form
    const inputBarangMasukButton = document.getElementById("inputBarangMasuk");
    const inputBarangMasukForm = document.getElementById("barangMasuk");
  
    // Add click event listener to the input barang masuk button
    inputBarangMasukButton.addEventListener("click", function () {
      // Get the values from input fields
      const namaBarangMasuk = document.getElementById("namaBarangMasuk").value;
      const jumlahBarangMasuk = document.getElementById("jumlahBarangMasuk").value;
  
      // Validate input
      if (namaBarangMasuk && jumlahBarangMasuk) {
        // Add the data to the table (or perform any desired action)
        addToTable("tableBarangMasuk", namaBarangMasuk, jumlahBarangMasuk);
      } else {
        alert("Please fill in all the fields for barang masuk.");
      }
    });
  
    // Access the input barang keluar button and form
    const inputBarangKeluarButton = document.getElementById("inputBarangKeluar");
    const inputBarangKeluarForm = document.getElementById("barangKeluar");
  
    // Add click event listener to the input barang keluar button
    inputBarangKeluarButton.addEventListener("click", function () {
      // Get the values from input fields
      const namaBarangKeluar = document.getElementById("namaBarangKeluar").value;
      const jumlahBarangKeluar = document.getElementById("jumlahBarangKeluar").value;
  
      // Validate input
      if (namaBarangKeluar && jumlahBarangKeluar) {
        // Add the data to the table (or perform any desired action)
        addToTable("tableBarangKeluar", namaBarangKeluar, jumlahBarangKeluar);
      } else {
        alert("Please fill in all the fields for barang keluar.");
      }
    });
  
    // Function to add data to the table
    function addToTable(tableId, namaBarang, jumlah) {
      const table = document.getElementById(tableId);
  
      // Create a new row
      const newRow = table.insertRow(-1);
  
      // Insert cells for namaBarang and jumlah
      const cellNamaBarang = newRow.insertCell(0);
      const cellJumlah = newRow.insertCell(1);
  
      // Set the cell values
      cellNamaBarang.innerHTML = namaBarang;
      cellJumlah.innerHTML = jumlah;
  
      // Clear input fields after adding to the table
      document.getElementById("namaBarangMasuk").value = "";
      document.getElementById("jumlahBarangMasuk").value = "";
      document.getElementById("namaBarangKeluar").value = "";
      document.getElementById("jumlahBarangKeluar").value = "";
    }
  });
  