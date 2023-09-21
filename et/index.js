const te = require("tradingeconomics");
te.login("2805f77d7a7c424:aktayykt341w3gs");

data = te.getDiscontinuedIndicators(country = "mexico").then(function(data){
  console.log(data)       
});



  const tableBody = document.querySelector("#myTable tbody");

  data.forEach((item) => {
  const row = document.createElement("tr");
  
  const CountryCell = document.createElement("td");
  CountryCell.textContent = item.Country;
  row.appendChild(CountryCell);
  
  const CategoryCell = document.createElement("td");
  CategoryCell.textContent = item.Category;
  row.appendChild(CategoryCell);
  
  const TitleCell = document.createElement("td");
  TitleCell.textContent = item.Title;
  row.appendChild(TitleCell);
     
const LatestValueDateCell = document.createElement("td");
LatestValueDateCell.textContent = item.LatestValueDate;
row.appendChild(LatestValueDateCell);
  
  const LatestValueCell = document.createElement("td");
  LatestValueCell.textContent = item.LatestValue;
  row.appendChild(LatestValueCell);
  
  const SourceCell = document.createElement("td");
  SourceCell.textContent = item.Source;
  row.appendChild(SourceCell);
  
  const SourceURLCell = document.createElement("td");
  SourceURLCell.textContent= item.SourceURL;
  row.appendChild(SourceURLCell);
  
  const UnitCell = document.createElement("td");
  UnitCell.textContent = item.Unit;
  row.appendChild(UnitCell);
  
  const URLCell = document.createElement("td");
  URLCell.textContent = item.URL;
  row.appendChild(URLCell);
  
  const CategoryGroupCell = document.createElement("td");
  CategoryGroupCell.textContent = item.CategoryGroup;
  row.appendChild(CategoryGroupCell);
  
  const AdjustmentCell = document.createElement("td");
  AdjustmentCell.textContent = item.Adjustment;
  row.appendChild(AdjustmentCell);
  
  const FrequencyCell = document.createElement("td");
  FrequencyCell.textContent = item.Frequency;
  row.appendChild(FrequencyCell);
  
  const HistoricalDataSymbolCell = document.createElement("td");
  HistoricalDataSymbolCell.textContent = item.HistoricalDataSymbol;
  row.appendChild(HistoricalDataSymbolCell);
  
  const CreateDateCell = document.createElement("td");
  CreateDateCell.textContent = item.CreateDate;
  row.appendChild(CreateDateCell);
  
  const FirstValueDateCell = document.createElement("td");
  FirstValueDateCell.textContent = item.FirstValueDate;
  row.appendChild(FirstValueDateCell);
  
  const PreviousValueCell = document.createElement("td");
  PreviousValueCell.textContent = item.PreviousValue;
  row.appendChild(PreviousValueCell);
  
  const PreviousValueDateCell = document.createElement("td");
  PreviousValueDateCell.textContent = item.PreviousValueDate;
  row.appendChild(PreviousValueDateCell);
  
  tableBody.appendChild(row);
  });
  
