import companies from "../data/companies.json";
import Card from "./Card";
console.log("companies", companies);
const Content = () => {
  return (
    <div className="content-container">
      <h1>Companies</h1>
      <div className="companies-container">
        {companies.map((company) => (
          <Card key={company.id} {...company} />
        ))}
      </div>
    </div>
  );
};

export default Content;
