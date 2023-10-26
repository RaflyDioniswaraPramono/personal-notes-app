import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NotFoundIcon } from "../assets";

const UnarchivedNotes = ({ datas, handleDelete, handleMoveData, keywords }) => {
  UnarchivedNotes.propTypes = {
    findData: PropTypes.string,
    datas: PropTypes.array,
    handleDelete: PropTypes.func,
    handleMoveData: PropTypes.func,
    keywords: PropTypes.string,
  };

  const [findData, setFindData] = useState(null);

  useEffect(() => {
    const find = datas.filter((obj) => obj.title.includes(keywords));

    setFindData(find);
  }, [datas, keywords]);

  const fullDate = (date) => {  
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    
    return new Date(date).toLocaleDateString("id-ID", options)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-3 px-5">
      {keywords === "" ? (
        datas.length > 0 ? (
          datas.map((data) => {
            const { id, title, body, createdAt } = data;

            return (
              <div key={id} className="bg-gray-100 p-5 rounded-lg shadow-xl">
                <h4 className="mb-1 text-lg font-bold tracking-wider">
                  {title}
                </h4>
                <p className="mb-3 text-sm text-justify tracking-wider">
                  {body}
                </p>
                <p className="text-sm text-gray-500">Created At: </p>
                <p className="text-sm font-medium tracking-wider">
                  {fullDate(createdAt)}
                </p>
                <div className="mt-5 grid grid-cols-5 gap-5">
                  <div className="col-span-3">
                    <button
                      onClick={() => handleMoveData(id)}
                      className="py-[0.3rem] px-5 w-full text-slate-100 rounded-md bg-green-800 hover:bg-green-900">
                      Archive
                    </button>
                  </div>
                  <div className="col-span-2">
                    <button
                      onClick={() => handleDelete(id)}
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
              Untuk menambahkan Unarchived Notes, anda harus menambahkan notes
              terlebih dahulu di create notes atau anda juga bisa memindahkan dari
              Archived Notes.
            </p>
          </div>
        )
      ) : findData.length > 0 ? (
        findData.map((data) => {
          const { id, title, body, createdAt } = data;

          return (
            <div key={id} className="bg-gray-100 p-5 rounded-lg shadow-xl">
              <h4 className="mb-1 text-lg font-bold tracking-wider">{title}</h4>
              <p className="mb-3 text-sm text-justify tracking-wider">{body}</p>
              <p className="text-sm text-gray-500">Created At: </p>
              <p className="text-sm font-medium tracking-wider">{createdAt}</p>
              <div className="mt-5 grid grid-cols-5 gap-5">
                <div className="col-span-3">
                  <button
                    onClick={() => handleMoveData(id)}
                    className="py-[0.3rem] px-5 w-full text-slate-100 rounded-md bg-green-800 hover:bg-green-900">
                    Archive
                  </button>
                </div>
                <div className="col-span-2">
                  <button
                    onClick={() => handleDelete(id)}
                    className="py-[0.3rem] px-5 text-slate-100 rounded-md bg-red-800 hover:bg-red-900">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] bg-slate-300 shadow-xl rounded-lg p-5">
          <div className="flex justify-center items-center flex-col mb-3">
            <h1 className="text-lg font-bold tracking-wider">
              Tidak ditemukan!
            </h1>
            <NotFoundIcon />
          </div>
          <div className="h-[0.1rem] bg-black my-3"></div>
          <p className="text-sm text-center">
            Cari menggunakan huruf kapital yang sama, karena fitur pencarian ini
            sensitif terhadap huruf kapital!
          </p>
        </div>
      )}
    </div>
  );
};

export default UnarchivedNotes;
