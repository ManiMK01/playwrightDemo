# Tricentis Demo Web Shop Test Plan

## Application Overview

This test plan covers comprehensive testing of the Tricentis Demo Web Shop e-commerce platform. The application provides complete e-commerce functionality including user registration and authentication, product browsing across multiple categories, shopping cart management, product search and filtering, wishlist management, and checkout processes.

## Test Scenarios

### 1. User Authentication

**Seed:** `tests/seed.spec.js`

#### 1.1. Register new user with valid data

**File:** `tests/demowebshop/user-registration-valid.spec.js`

**Steps:**
1. Navigate to register page
   - expect: Register page is displayed
   - expect: Registration form with email, password, and confirm password fields is visible
2. Click on email field
   - expect: Email field is focused and ready for input
3. Enter valid email 'testuser@example.com'
   - expect: Email is entered in the field
4. Click on password field
   - expect: Password field is focused
5. Enter password 'TestPassword@123'
   - expect: Password is entered and masked
6. Click on confirm password field
   - expect: Confirm password field is focused
7. Enter same password 'TestPassword@123'
   - expect: Confirm password value matches password
8. Click Register button
   - expect: Registration is successful
   - expect: User is logged in and redirected to home page or account page
   - expect: Success message is displayed

#### 1.2. Login with valid credentials

**File:** `tests/demowebshop/user-login-valid.spec.js`

**Steps:**
1. Navigate to login page
   - expect: Login page is displayed
   - expect: Email and password input fields are visible
2. Click on email field
   - expect: Email field is focused
3. Enter registered email
   - expect: Email is entered in the field
4. Click on password field
   - expect: Password field is focused
5. Enter correct password
   - expect: Password is entered and masked
6. Click Login button
   - expect: User is logged in successfully
   - expect: User is redirected to home page or account page
   - expect: User name or account information is displayed in header

#### 1.3. Login with invalid credentials

**File:** `tests/demowebshop/user-login-invalid.spec.js`

**Steps:**
1. Navigate to login page
   - expect: Login page is displayed
2. Enter non-existent email
   - expect: Email is entered
3. Enter incorrect password
   - expect: Password is entered
4. Click Login button
   - expect: Error message is displayed
   - expect: User remains on login page
   - expect: Error indicates login failure

#### 1.4. Logout from user account

**File:** `tests/demowebshop/user-logout.spec.js`

**Steps:**
1. Login with valid credentials
   - expect: User is logged in
   - expect: Account menu or logout option is visible
2. Click Logout button
   - expect: User is logged out
   - expect: User is redirected to home page
   - expect: Login link is visible in header again

### 2. Product Browsing

**Seed:** `tests/seed.spec.js`

#### 2.1. Browse products in Books category

**File:** `tests/demowebshop/browse-books-category.spec.js`

**Steps:**
1. Navigate to home page
   - expect: Home page is displayed
   - expect: Categories are visible in navigation
2. Click on Books category
   - expect: Books category page is loaded
   - expect: Product list is displayed
3. Verify products are loaded
   - expect: Product grid or list with items is visible
   - expect: Each product shows name, price, and image

#### 2.2. Browse products in Computers category

**File:** `tests/demowebshop/browse-computers-category.spec.js`

**Steps:**
1. Navigate to home page
   - expect: Home page is displayed
2. Click on Computers category
   - expect: Computers category page is loaded with products
3. Verify category and products load
   - expect: Computer products are displayed with specifications

#### 2.3. View product details

**File:** `tests/demowebshop/view-product-details.spec.js`

**Steps:**
1. Navigate to any product category
   - expect: Product list is displayed
2. Click on any product
   - expect: Product detail page is loaded
   - expect: Product name, price, description, and images are visible
   - expect: Add to cart button is visible

### 3. Shopping Cart

**Seed:** `tests/seed.spec.js`

#### 3.1. Add product to shopping cart

**File:** `tests/demowebshop/add-product-to-cart.spec.js`

**Steps:**
1. Navigate to any product detail page
   - expect: Product detail page is displayed
   - expect: Add to Cart button is visible
2. Click Add to Cart button
   - expect: Product is added to cart
   - expect: Cart count increases from 0 to 1
3. Verify addition confirmation
   - expect: Success message is shown
   - expect: User can continue shopping

#### 3.2. View items in shopping cart

**File:** `tests/demowebshop/view-shopping-cart.spec.js`

**Steps:**
1. Add at least one product to cart
   - expect: Product is added to cart
2. Click on Shopping cart link
   - expect: Shopping cart page is displayed
   - expect: Added product is listed with name, price, and quantity
3. Verify cart contents and total
   - expect: Cart total price is calculated and displayed

#### 3.3. Update product quantity in shopping cart

**File:** `tests/demowebshop/update-cart-quantity.spec.js`

**Steps:**
1. Navigate to shopping cart page
   - expect: Cart page is displayed with products
2. Locate quantity input for a product
   - expect: Product quantity field is editable
3. Change quantity and update cart
   - expect: Quantity is updated and total price is recalculated
4. Verify updated total price
   - expect: New total is displayed

#### 3.4. Remove product from shopping cart

**File:** `tests/demowebshop/remove-product-from-cart.spec.js`

**Steps:**
1. Navigate to shopping cart with items
   - expect: Cart contains products
2. Locate remove button or action
   - expect: Remove button is visible for each item
3. Click remove button
   - expect: Product is removed from cart
   - expect: Cart count decreases
   - expect: Total price is updated
4. Verify removal
   - expect: Product no longer appears in cart

### 4. Product Search

**Seed:** `tests/seed.spec.js`

#### 4.1. Search for product using search box

**File:** `tests/demowebshop/search-product.spec.js`

**Steps:**
1. Navigate to home page
   - expect: Home page is displayed
   - expect: Search box is visible in header
2. Click on search input
   - expect: Search box is focused
3. Type 'book' or product name
   - expect: Search term is entered
4. Click Search button or press Enter
   - expect: Search results page is displayed
   - expect: Products matching search term are listed
5. Verify search results
   - expect: Relevant products are displayed

#### 4.2. Search with no matching results

**File:** `tests/demowebshop/search-no-results.spec.js`

**Steps:**
1. Navigate to home page
   - expect: Search box is visible
2. Search for random non-existent product
   - expect: Non-existent product term is searched
3. Verify no results behavior
   - expect: No results message is displayed

### 5. Wishlist Management

**Seed:** `tests/seed.spec.js`

#### 5.1. Add product to wishlist

**File:** `tests/demowebshop/add-to-wishlist.spec.js`

**Steps:**
1. Navigate to product detail page
   - expect: Product detail page is displayed
   - expect: Add to Wishlist button is visible
2. Click Add to Wishlist
   - expect: Product is added to wishlist
   - expect: Wishlist count increases
3. Verify wishlist addition
   - expect: Confirmation message is shown

#### 5.2. View items in wishlist

**File:** `tests/demowebshop/view-wishlist.spec.js`

**Steps:**
1. Add at least one product to wishlist
   - expect: Products are added to wishlist
2. Click on Wishlist link
   - expect: Wishlist page is displayed
   - expect: Added products are listed
3. Verify wishlist contents
   - expect: All wishlist items are visible with names and prices
   - expect: Add to Cart button is available for each item

#### 5.3. Move product from wishlist to cart

**File:** `tests/demowebshop/move-wishlist-to-cart.spec.js`

**Steps:**
1. Navigate to wishlist page
   - expect: Wishlist page is displayed with items
2. Locate add to cart action
   - expect: Add to Cart button is visible for wishlist items
3. Click Add to Cart for wishlist item
   - expect: Product is added to cart from wishlist
4. Navigate to cart and verify
   - expect: Product appears in shopping cart
   - expect: Confirmation is shown

### 6. Category Navigation

**Seed:** `tests/seed.spec.js`

#### 6.1. Navigate through product categories

**File:** `tests/demowebshop/navigate-categories.spec.js`

**Steps:**
1. Navigate to home page
   - expect: Home page is displayed with all categories visible
2. Verify category menu
   - expect: Categories list is visible
3. Verify category links are functional
   - expect: Each category is clickable

#### 6.2. Filter products by price range

**File:** `tests/demowebshop/filter-by-price.spec.js`

**Steps:**
1. Navigate to any category page
   - expect: Product category page is displayed
   - expect: Filter options are visible
2. Locate price range filter
   - expect: Price filter is available
3. Select price range and apply filter
   - expect: Products are filtered by selected price range
