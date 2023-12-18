import companies from "../data/companies.json";
import Card from "./Card";
import { useState } from "react";

// console.log("companies", companies);
const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchedCompanies = companies.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.company_name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });
  return (
    <div className="content-container">
      <h1>Companies</h1>
      <input
        type="text"
        placeholder="Search First Name....."
        autoFocus
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="companies-container">
        {searchedCompanies.map((company) => (
          <Card key={company.id} {...company} />
        ))}
      </div>
    </div>
  );
};

export default Content;
