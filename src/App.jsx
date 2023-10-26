import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import UnarchivedNotes from "./components/UnarchivedNotes";
import ArchivedNotes from "./components/ArchivedNotes";

const initialData = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
];

const App = () => {
  const [datas, setDatas] = useState(initialData);
  const [openForm, setOpenForm] = useState(false);
  const [archivedDatas, setArchivedDatas] = useState([]);
  const [keywords, setKeywords] = useState("");

  const showModalForm = (isOpen) => {
    setOpenForm(isOpen);
  };

  const handleDelete = (ids) => {
    setDatas(datas.filter((objects) => objects.id !== ids));
  };

  const handleDeleteArchivedData = (ids) => {
    setArchivedDatas(archivedDatas.filter((objects) => objects.id !== ids));
  };

  const handleSubmit = async (newDatas) => {
    if (newDatas.archived === true) {
      return setArchivedDatas((current) => [...current, newDatas]);
    } else {
      return setDatas((current) => [...current, newDatas]);
    }
  };

  const handleMoveData = (ids) => {
    let newObjects = {};

    datas
      .filter((objId) => objId.id === ids)
      .map((values) => {
        newObjects = values;
      });    
    setArchivedDatas([...archivedDatas, newObjects]);

    return handleDelete(ids);
  };

  const handleMoveArchivedData = (ids) => {
    let newObjects = {};

    archivedDatas
      .filter((objId) => objId.id === ids)
      .map((values) => {
        newObjects = values;
      });

    setDatas([...datas, newObjects]);

    return handleDeleteArchivedData(ids);
  };

  const handleSearch = (event) => {
    const keywords = event.target.value;    

    setKeywords(keywords);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen relative">
      <Form
        openForm={openForm}
        showModalForm={showModalForm}
        handleSubmit={handleSubmit}
      />
      <div
        className={
          openForm
            ? "z-[1] block absolute top-0 left-0 w-screen h-screen bg-slate-950/50 backdrop-blur-sm"
            : "hidden"
        }></div>
      <div className="col-span-2 bg-indigo-100 relative">
        <div>
          <Header
            title="Unarchived Notes"
            otherMenus={true}
            showModalForm={showModalForm}
            handleSearch={handleSearch}
          />
          <UnarchivedNotes
            datas={datas}
            handleDelete={handleDelete}
            handleMoveData={handleMoveData}
            keywords={keywords}
          />
        </div>
      </div>
      <div className="col-span-1 shadow-2xl relative">
        <Header
          title="Archived Notes"
          otherMenus={false}
          showModalForm={showModalForm}
        />
        <ArchivedNotes
          archivedDatas={archivedDatas}
          handleMoveArchivedData={handleMoveArchivedData}
          handleDeleteArchivedData={handleDeleteArchivedData}
        />
      </div>
    </div>
  );
};

export default App;
