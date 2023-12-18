import companies from "../data/companies.json";
import Card from "./Card";
import { useState } from "react";

// console.log("companies", companies);
const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typedTerm, setTypedTerm] = useState("");

  const searchedCompanies = companies.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.company_name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });

  const handleClick = (event) => {
    event.preventDefault();

    setSearchTerm(typedTerm);
  };

  return (
    <div className="content-container">
      <form
        className="d-flex"
        role="search"
        style={{ maxWidth: "500px", margin: "auto", marginTop: "20px" }}
        onSubmit={handleClick}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search company name"
          aria-label="Search"
          value={typedTerm}
          onChange={(event) => {
            setTypedTerm(event.target.value);
          }}
        ></input>
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      <div className="companies-container">
        {searchedCompanies.map((company) => (
          <Card key={company.id} {...company} />
        ))}
      </div>
    </div>
  );
};

export default Content;
