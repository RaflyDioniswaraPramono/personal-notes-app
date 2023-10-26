import PropTypes from "prop-types";

const Header = ({ title, otherMenus, showModalForm, handleSearch }) => {
  Header.propTypes = {
    title: PropTypes.string,
    otherMenus: PropTypes.bool,
    showModalForm: PropTypes.func,
    handleSearch: PropTypes.func,
  };

  return (
    <div className="py-3 px-5">
      <div className="grid grid-cols-10 items-center gap-3">
        <div className="col-span-10 lg:col-span-4">
          <h1 className="text-2xl font-bold tracking-wider uppercase lg:mb0">
            {title}
          </h1>
        </div>
        <div className="col-span-6 lg:col-span-4">
          <input
            type="text"
            placeholder="search unarchived notes title ..."
            className={
              otherMenus ? "text-xs p-2 mb-5 lg:mb-0 w-full rounded-md" : "hidden"
            }
            onChange={handleSearch}
          />
        </div>
        <div className="col-span-4 lg:col-span-2">
          <button
            onClick={() => showModalForm(true)}
            className={
              otherMenus
                ? "block bg-indigo-900 hover:bg-indigo-950 text-slate-100 py-2 px-3 rounded-lg mb-5 lg:mb-0"
                : "hidden"
            }>
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
