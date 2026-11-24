import { useEffect, useState } from "react";

function BookForm({ bookToEdit, onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [publisher, setPublisher] = useState("");

  // Mengisi form ketika pengguna memilih tombol edit
  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title || "");
      setAuthor(bookToEdit.author || "");
      setPublishDate(
        bookToEdit.publish_date
          ? String(bookToEdit.publish_date).slice(0, 10)
          : ""
      );
      setPublisher(bookToEdit.publisher || "");
    } else {
      setTitle("");
      setAuthor("");
      setPublishDate("");
      setPublisher("");
    }
  }, [bookToEdit]);

  // Mengirim data form ke App.jsx
  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      title,
      author,
      publish_date: publishDate || null,
      publisher
    });
  }

  return (
    <section className="form-card">
      <h2>{bookToEdit ? "Edit Buku" : "Tambah Buku"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Judul Buku</label>
          <input
            type="text"
            placeholder="Masukkan judul buku"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Penulis</label>
          <input
            type="text"
            placeholder="Masukkan nama penulis"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Tanggal Terbit</label>
          <input
            type="date"
            value={publishDate}
            onChange={(event) => setPublishDate(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Penerbit</label>
          <input
            type="text"
            placeholder="Masukkan nama penerbit"
            value={publisher}
            onChange={(event) => setPublisher(event.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {bookToEdit ? "Simpan Perubahan" : "Tambah Buku"}
          </button>

          {bookToEdit && (
            <button
              type="button"
              className="btn-secondary"
              onClick={onCancel}
            >
              Batal
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default BookForm;