import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

const ModelML = () => {
  const [file, setFile] = useState();
  const [model, setModel] = useState(null);
  const [predictedLabel, setPredictedLabel] = useState("");
  const loadModel = async () => {
    try {
      const loadedModel = await tf.loadGraphModel("/model/model.json");
      setModel(loadedModel);
      console.log("Model berhasil dimuat!");
    } catch (error) {
      console.error("Gagal memuat model:", error);
    }
  };

  // Gunakan efek untuk memuat model saat komponen dirender
  useEffect(() => {
    loadModel();
  }, []);

  // Fungsi untuk memuat gambar dari folder public
  const loadImage = async (imagePath) => {
    try {
      const img = new Image();
      img.src = imagePath;
      await new Promise((resolve, reject) => {
        img.onload = resolve; // Tunggu gambar dimuat
        img.onerror = reject; // Tangani kesalahan saat memuat gambar
      });
      const tensor = tf.browser.fromPixels(img); // Konversi gambar ke tensor
      return tensor;
    } catch (error) {
      console.error("Gagal memuat gambar:", error);
      throw new Error("Gambar tidak dapat dimuat.");
    }
  };

  // Daftar label manual
  const classLabels = ["Cat", "Dog"]; // Label manual, urutan sesuai kelas model

  const predict = async (imagePath) => {
    if (!model) {
      alert("Model belum dimuat!");
      return;
    }

    try {
      // Muat gambar
      const tensor = await loadImage(imagePath);
      console.log(tensor);

      // Ubah ukuran gambar agar sesuai dengan input model
      const resizedTensor = tf.image.resizeBilinear(tensor, [224, 224]);
      const grayscaleTensor = tf.image.rgbToGrayscale(resizedTensor); // Model input grayscale
      const normalizedTensor = grayscaleTensor.div(255).expandDims(0); // Normalisasi dan tambahkan batch dimension

      // Lakukan prediksi
      const prediction = model.predict(normalizedTensor);
      console.log(prediction);

      // Ambil nilai mentah prediksi sebagai array
      const values = await prediction.array();

      // Dapatkan indeks kelas dengan probabilitas tertinggi
      const predictionIndex = prediction.argMax(1).dataSync()[0];

      // Ambil label berdasarkan indeks
      const predictedLabel = classLabels[predictionIndex];

      // Set hasil prediksi ke state (jika menggunakan React)
      setPredictedLabel(predictedLabel);

      // Bersihkan memori TensorFlow
      tf.dispose([
        tensor,
        resizedTensor,
        grayscaleTensor,
        normalizedTensor,
        prediction,
      ]);
    } catch (error) {
      console.error("Error saat melakukan prediksi:", error);
    }
  };

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-[650px] mx-auto">
        {/* right */}
        <div className="flex flex-col justify-center items-center gap-5 border border-r-4 border-b-4 border-black rounded-lg p-10">
          {/* text */}
          <h4 className="font-semibold text-xl">Click image to upload</h4>
          {/* end-text */}
          {/* image-preview */}
          <div className="relative">
            {/* placeholder */}
            <div className="w-52 h-52 rounded-full overflow-hidden">
              <img src={file} className="w-full h-full object-cover" alt="" />
            </div>
            {/* end-placeholder */}
            {/* upload-btn */}
            <div className="absolute top-0 w-52 h-52 rounded-full overflow-hidden opacity-0 hover:opacity-75 duration-200">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-200"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-12 h-12 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </div>
            {/* end-upload-btn */}
          </div>
          {/* end-image-preview */}
          {/* text */}
          <h4 className="font-semibold text-xl">Result</h4>
          {/* end-text */}
          {/* button */}
          <div className="flex flex-col gap-3">
            <button
              className="bg-gray-300 p-2 px-10 rounded-lg border border-black border-r-4 border-b-4"
              onClick={() => predict("dog1.jpg")}
            >
              Check emotion
            </button>
          </div>
          {/* end-button */}
        </div>
        {/* end-right */}
      </div>
    </div>
  );
};

export default ModelML;
