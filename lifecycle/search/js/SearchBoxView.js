const SearchBoxView = ({ fixed }) => (
  <section className="container">
    <div className="row">
      <div className="col-sm-12">
        <input
          className={`search-box ${fixed ? 'search-box_fixed' : null}`}
          placeholder="Поиск"
          ref={node => searchField = node}
        >
        </input>
      </div>
    </div>
  </section>
);
