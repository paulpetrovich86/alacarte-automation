import { Page, Locator } from "@playwright/test";

export class ContractSearchPage {
  readonly page: Page;
  readonly hotelSelect: Locator;
  readonly roomCategorySelect: Locator;
  readonly roomTypeSelect: Locator;
  readonly roomTypeSearchField: Locator;
  readonly searchButton: Locator;
  readonly tableResponsive: Locator;
  readonly contractPrice: Locator;
  readonly selectQuotationLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hotelSelect = page.locator('select[name="hotel"]');
    this.roomCategorySelect = page.locator('select[name="room_types[]"]');
    this.roomTypeSelect = page.locator(
      'label:has-text("Room category") + div .select2-selection--multiple'
    );
    this.roomTypeSearchField = page.locator(
      ".select2-container--open .select2-search__field"
    );
    this.searchButton = page.getByRole("button", { name: "Search" });
    this.tableResponsive = page.locator(".table-responsive");
    this.contractPrice = page.locator(".contract-price").first();
    this.selectQuotationLink = page
      .getByRole("link", { name: "Select Quotation" })
      .first();
  }

  async selectHotel(hotelName: string) {
    await this.hotelSelect.selectOption({ label: hotelName });
  }

  async selectRoomCategory(roomCategory: string) {
    await this.roomCategorySelect.selectOption({ label: roomCategory });
  }

  async search() {
    await this.searchButton.click();
    await this.tableResponsive.waitFor({ state: "visible" });
  }

  async getContractPrice(): Promise<string> {
    return await this.contractPrice.innerText();
  }

  async openQuotationDetails(): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.selectQuotationLink.click(),
    ]);
    return newPage;
  }
}
