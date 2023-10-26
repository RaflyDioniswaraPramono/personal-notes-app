import PropTypes from "prop-types";
import { CloseIcon } from "../assets";
import Label from "./Label";
import { useEffect, useState } from "react";

const Form = ({ openForm, showModalForm, handleSubmit }) => {
  Form.propTypes = {
    openForm: PropTypes.bool,
    showModalForm: PropTypes.func,    
    handleSubmit: PropTypes.func
  };

  const [id, setId] = useState(new Date().getMilliseconds());
  const [title, setTitle] = useState("");
  const [countTitle, setCountTitle] = useState(0);
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false);    

  const handleTitleOnChange = (event) => {
    const limit = 49;
    setTitle(event.target.value.slice(0, limit));
    setCountTitle(event.target.value.length);
  };

  const fullDate = (date) => {
    setId(new Date().getMilliseconds());

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    
    return new Date(date).toLocaleDateString("id-ID", options)
  }  

  return (
    <div
      className={
        openForm
          ? "custom-animation z-[2] bg-white p-5 rounded-2xl block " +
            "absolute w-[90%] lg:w-[30%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : "hidden"
      }>
      <div className="flex justify-between items-center mb-5">
        <h5 className="text-lg font-medium">Create Notes</h5>
        <button onClick={() => showModalForm(false)}>
          <CloseIcon />
        </button>
      </div>
      <div className="mt-10">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newData = {
              id: id,
              title: title,
              body: body,
              archived: archived,
              createdAt: fullDate(new Date()),
            };
            
            handleSubmit(newData);
          }}>
          <div className="mb-5">
            <Label htmlFor="title" labelText="Title" />
            <input
              id="title"
              type="text"
              autoComplete="off"
              value={title}
              required
              onChange={handleTitleOnChange}
              className="mt-3 mb-1 p-2 w-full rounded-md bg-zinc-200"
            />
            <p className="font-medium">{`Maximum title characters: ${countTitle} / 50`}</p>
          </div>
          <div className="mb-5">
            <Label htmlFor="body" labelText="Body" />
            <textarea
              id="body"
              cols="30"
              rows="10"
              required
              value={body}
              onChange={(event) => {
                setBody(event.target.value);
              }}
              className="resize-none mt-3 p-2 w-full rounded-md bg-zinc-200"></textarea>
          </div>
          <div className="mb-10 flex items-center">
            <Label htmlFor="archived" labelText="Archived" />
            <input
              id="archived"
              type="checkbox"
              value={archived}
              onChange={() => setArchived(!archived)}
              className="ml-3 w-6 h-7 cursor-pointer"
            />
          </div>
          <div>
            <button className="w-full py-3 px-5 bg-indigo-900 hover:bg-indigo-950 text-slate-100 rounded-md">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
