function BookList({ books, onEdit, onDelete }) {
  function formatDate(date) {
    if (!date) return "-";

    return new Date(`${String(date).slice(0, 10)}T00:00:00`)
      .toLocaleDateString("id-ID");
  }

  return (
    <section className="list-card">
      <div className="list-heading">
        <div>
          <h2>Daftar Buku</h2>
          <p>Total buku: {books.length}</p>
        </div>
      </div>

      {books.length === 0 ? (
        <div className="empty-state">
          Belum ada data buku.
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Judul Buku</th>
                <th>Penulis</th>
                <th>Tanggal Terbit</th>
                <th>Penerbit</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{formatDate(book.publish_date)}</td>
                  <td>{book.publisher}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn-edit"
                        onClick={() => onEdit(book)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => onDelete(book.id)}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default BookList;