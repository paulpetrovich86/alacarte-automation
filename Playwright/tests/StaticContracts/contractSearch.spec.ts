import { ContractDetailsPage } from "../../pages/contractDetailsPage";
import { ContractSearchPage } from "../../pages/ContractSearchPage";
import { test, expect } from "../fixtures";

test("Search: compare search result price with total amount in details @smoke", async ({
  page,
}) => {
  const contractSearchPage = new ContractSearchPage(page);
  await contractSearchPage.selectHotel("ALINA TEST");
  await contractSearchPage.selectRoomCategory("Water Villa");

  await contractSearchPage.search();

  const contractPrice = await contractSearchPage.getContractPrice();
  console.log("Contract price:", contractPrice);

  const newPage = await contractSearchPage.openQuotationDetails();
  const detailsPage = new ContractDetailsPage(newPage);

  const totalAmount = await detailsPage.getTotalAmount();
  expect(contractPrice).toBe(totalAmount);
});
