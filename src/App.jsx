import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { fetchImages } from "./services/unsplashApi";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetchImages(query, page)
      .then((data) => setImages((prev) => [...prev, ...data.results]))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={setQuery} />
      {error && <ErrorMessage />}
      {loading && images.length === 0 && <Loader center />}
      
      <ImageGallery images={images} onImageClick={setModalImage} />
      {loading && images.length > 0 && <Loader />}

      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage((p) => p + 1)} />
      )}

      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          image={modalImage}
          onClose={() => setModalImage(null)}
        />
      )}
      <Toaster />
    </>
  );
};

export default App;
