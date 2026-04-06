# Tricentis Demo Web Shop Test Suite

Comprehensive Playwright test suite for the Tricentis Demo Web Shop e-commerce platform.

## Test Plan

See [specs/demowebshop-test.plan.md](../../specs/demowebshop-test.plan.md) for the complete test plan with all test scenarios and steps.

## Test Structure

All tests are organized in the `tests/demowebshop/` directory with the following categories:

### 1. User Authentication
- `user-registration-valid.spec.js` - Register new user with valid data
- `user-login-valid.spec.js` - Login with valid credentials
- `user-login-invalid.spec.js` - Login with invalid credentials
- `user-logout.spec.js` - Logout from account

### 2. Product Browsing
- `browse-books-category.spec.js` - Browse Books, Computers, and Electronics categories
- `view-product-details.spec.js` - View product detail page

### 3. Shopping Cart
- `add-product-to-cart.spec.js` - Tests for adding, viewing, updating, and removing products from cart

### 4. Product Search
- `search-product.spec.js` - Search functionality including no results scenarios

### 5. Wishlist Management
- `add-to-wishlist.spec.js` - Add products, view wishlist, and move to cart

### 6. Category Navigation
- `navigate-categories.spec.js` - Category navigation and price filtering

### 7. Test Helpers
- `test-helpers.js` - Reusable functions for common operations (loginUser, addProductToCart, etc.)

## Running Tests

### Run all tests
```bash
npx playwright test tests/demowebshop/
```

### Run specific test file
```bash
npx playwright test tests/demowebshop/user-login-valid.spec.js
```

### Run tests with specific tag
```bash
npx playwright test --grep "Login"
```

### Run tests in headed mode (see browser)
```bash
npx playwright test tests/demowebshop/ --headed
```

### Run tests with specific browser
```bash
npx playwright test tests/demowebshop/ --project=chromium
```

### Debug tests
```bash
npx playwright test tests/demowebshop/ --debug
```

### Generate test report
```bash
npx playwright test tests/demowebshop/
npx playwright show-report
```

## Test Data

- **Default Test User**: admin@example.com / password: 123456
- **Registration**: Tests use timestamp-based email to ensure unique registrations
- **Products**: Use publicly available products in the demo shop

## Key Features

- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Responsive design testing
- ✅ Network idle waits for stability
- ✅ Flexible locators for dynamic content
- ✅ Reusable test helpers
- ✅ Error handling with fallbacks
- ✅ Comprehensive assertions

## Test Coverage

- User authentication (registration, login, logout)
- Product browsing and search
- Shopping cart operations (add, view, update, remove)
- Wishlist management
- Category navigation
- Product filtering

## Notes

- Tests use Playwright's built-in waiting mechanisms for reliability
- Locators are flexible to handle dynamic content
- Tests are independent and can run in any order
- Some tests have fallback assertions for different page layouts
