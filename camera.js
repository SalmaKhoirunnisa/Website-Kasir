// Fungsi untuk mengambil gambar dari kamera
function captureSelfie() {
    // Mendapatkan elemen video
    var video = document.createElement('video');
    video.setAttribute('id', 'videoElement');
    document.body.appendChild(video);
  
    // Mengakses kamera
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        // Menyetel aliran video ke elemen video
        video.srcObject = stream;
        video.play();
  
        // Menambahkan tombol pengambilan gambar
        var captureButton = document.createElement('button');
        captureButton.innerHTML = 'Ambil Gambar';
        captureButton.addEventListener('click', function () {
          // Membuat elemen canvas untuk menangkap gambar
          var canvas = document.createElement('canvas');
          canvas.setAttribute('id', 'canvasElement');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          var context = canvas.getContext('2d');
  
          // Menggambar gambar dari elemen video ke elemen canvas
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
          // Mendapatkan data gambar sebagai URL base64
          var imageDataURL = canvas.toDataURL('image/png');
  
          // Menampilkan gambar hasil tangkapan
          var capturedImage = document.createElement('img');
          capturedImage.src = imageDataURL;
          document.body.appendChild(capturedImage);
  
          // Memberhentikan aliran video
          stream.getTracks().forEach(track => track.stop());
  
          // Menghapus elemen video dan canvas
          document.body.removeChild(video);
          document.body.removeChild(canvas);
        });
  
        document.body.appendChild(captureButton);
      })
      .catch(function (error) {
        console.error('Error accessing camera:', error);
      });
  }
  
  // Panggil fungsi captureSelfie saat tombol ditekan atau acara lainnya
  document.getElementById('captureSelfie').addEventListener('click', captureSelfie);
  