# Alacarte Automation (Playwright)

This project provides end-to-end browser automation for the Alacarte web application using [Playwright](https://playwright.dev/).

---

## Project Structure

```
Playwright/
├── tests/
│   ├── fixtures.ts                      # Custom Playwright fixtures (login, etc.)
│   ├── StaticContracts/
│   │   └── contractSearch.spec.ts       # Example contract search test
├── pages/
│   ├── ContractSearchPage.ts            # Page object for contract search
│   └── contractDetailsPage.ts           # Page object for contract details
├── login.config.ts                      # Login credentials and base URL
├── playwright.config.ts                 # Playwright configuration (if present)
```

---

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure login credentials**

   Edit `Playwright/login.config.ts` to update the base URL, email, and password as needed.

---

## How to Run Playwright Tests

### Run All Tests (Headless)

```bash
npx playwright test
```

### Run All Tests With Browser UI (Headed Mode)

```bash
npx playwright test --headed
```

### Run a Specific Test File

```bash
npx playwright test Playwright/tests/StaticContracts/contractSearch.spec.ts
```

### Run a Specific Test File With UI

```bash
npx playwright test Playwright/tests/StaticContracts/contractSearch.spec.ts --headed
```

### Debug Tests Step-by-Step

```bash
npx playwright test --debug
```

---

## Using Page Objects

- **ContractSearchPage**: Encapsulates all actions and selectors for the contract search page.
- **ContractDetailsPage**: Encapsulates actions and selectors for the contract details page.

Use these page objects in your tests for maintainability and readability.

---

## Customization

- Update selectors and logic in `pages/` as the UI changes.
- Modify `fixtures.ts` for custom login or setup steps.
- Add new tests in the `tests/` directory.

---

## Additional Playwright Commands

- **Show HTML report after tests:**
  ```bash
  npx playwright show-report
  ```
- **Record and generate test code interactively:**
  ```bash
  npx playwright codegen https://pre.alacarte.ae/
  ```

---

## Resources

-
