import PropTypes from "prop-types";

const ArchivedNotes = ({
  archivedDatas,
  handleMoveArchivedData,
  handleDeleteArchivedData,
}) => {
  ArchivedNotes.propTypes = {
    archivedDatas: PropTypes.array,
    handleMoveArchivedData: PropTypes.func,
    handleDeleteArchivedData: PropTypes.func,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 py-3 px-5">
      {archivedDatas.length > 0 ? (
        archivedDatas.map((data) => {
          const { id, title, body, createdAt } = data;

          return (
            <div
              key={id}
              className="bg-gray-100 p-5 rounded-lg shadow-xl mb-10">
              <h4 className="mb-1 text-lg font-bold tracking-wider">{title}</h4>
              <p className="mb-3 text-sm text-justify tracking-wider">{body}</p>
              <p className="text-sm text-gray-500">Created At: </p>
              <p className="text-sm font-medium tracking-wider">{createdAt}</p>
              <div className="mt-5 grid grid-cols-5 gap-5">
                <div className="col-span-3">
                  <button
                    onClick={() => handleMoveArchivedData(id)}
                    className="py-[0.3rem] px-5 w-full text-slate-100 rounded-md bg-green-800 hover:bg-green-900">
                    Unarchive
                  </button>
                </div>
                <div className="col-span-2">
                  <button
                    onClick={() => handleDeleteArchivedData(id)}
                    className="py-[0.3rem] px-5 text-slate-100 rounded-md bg-red-800 hover:bg-red-900">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 w-[90%] bg-slate-300 rounded-lg shadow-xl">
          <h1 className="text-xl font-bold tracking-wider mb-3">
            Belum ada catatan!
          </h1>
          <p className="text-sm">
            Untuk menambahkan Archived Notes, anda harus menambahkan notes
            terlebih dahulu di create notes atau anda juga bisa memindahkan dari
            Unarchived Notes.
          </p>
        </div>
      )}
    </div>
  );
};

export default ArchivedNotes;
