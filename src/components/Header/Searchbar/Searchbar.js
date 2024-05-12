function Searchbar() {
  return (
    <div className="row">
      <div className="form-group col">
        <input
          type="text"
          placeholder="Gdzie się powspinamy?"
          className="form-control w-auto"
        />
      </div>
      <div className="col">
        <button className="btn btn-primary">Szukaj</button>
      </div>
    </div>
  );
}

export default Searchbar;
