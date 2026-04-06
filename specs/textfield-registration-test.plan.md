# Text Field Registration Form Test Plan

## Application Overview

This test plan covers comprehensive testing of a Text Field Registration Form from the DemoApps QSpiders platform. The application is designed to test various text field scenarios including input validation, placeholder handling, password visibility toggling, form submission, and navigation. The form contains three text input fields (Name, Email, Password) with associated labels, placeholders, and a password visibility toggle. Additional test scenarios are provided for edge cases like disabled fields, multiline text areas, and tooltip text fields.

## Test Scenarios

### 1. Text Field Basic Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Enter text into Name field with valid input

**File:** `tests/textfield/name-field-valid-input.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
    - expect: Name field is visible with placeholder 'Enter your name'
  2. Click on the Name field
    - expect: The Name field is focused
    - expect: Cursor appears in the Name field
  3. Type 'John Doe' into the Name field
    - expect: Text 'John Doe' is entered into the Name field
    - expect: Text is visible in the field
  4. Verify the entered text
    - expect: The field contains exactly 'John Doe'

#### 1.2. Enter text into Email field with valid email

**File:** `tests/textfield/email-field-valid-input.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
    - expect: Email field is visible with placeholder 'Enter Your Email'
  2. Click on the Email field
    - expect: The Email field is focused
  3. Type 'user@example.com' into the Email field
    - expect: Text 'user@example.com' is entered into the Email field
  4. Verify the entered email
    - expect: The field contains 'user@example.com'

#### 1.3. Enter text into Password field

**File:** `tests/textfield/password-field-input.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
    - expect: Password field is visible with placeholder 'Enter your password'
  2. Click on the Password field
    - expect: The Password field is focused
  3. Type 'SecurePassword123!' into the Password field
    - expect: Characters are entered into the Password field
    - expect: Characters are masked/hidden (shown as dots or asterisks)

### 2. Password Visibility Toggle

**Seed:** `tests/seed.spec.ts`

#### 2.1. Show password when icon is clicked

**File:** `tests/textfield/show-password-toggle.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
    - expect: Show Password icon is visible next to the Password field
  2. Enter 'TestPass123' into the Password field
    - expect: Text is masked in the Password field
  3. Click on the Show Password icon
    - expect: Password visibility toggles to show
    - expect: The actual text 'TestPass123' becomes visible
    - expect: The icon may change appearance to indicate hidden state

#### 2.2. Hide password when icon is clicked again

**File:** `tests/textfield/hide-password-toggle.spec.ts`

**Steps:**
  1. Navigate to the registration page and enter 'MyPassword456' in the Password field
    - expect: Password field contains masked characters
  2. Click the Show Password icon to reveal the password
    - expect: Password is revealed as 'MyPassword456'
  3. Click the Show Password icon again
    - expect: Password is masked again
    - expect: Characters are hidden

### 3. Placeholder Validation

**Seed:** `tests/seed.spec.ts`

#### 3.1. Verify placeholder text in Name field

**File:** `tests/textfield/name-placeholder-validation.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Locate the Name field
    - expect: The Name field displays placeholder text 'Enter your name'
  3. Verify placeholder is visible before input
    - expect: Placeholder text 'Enter your name' is visible in the Name field
  4. Click on the Name field to focus it
    - expect: The field is focused
    - expect: Placeholder may dim or remain visible depending on implementation

#### 3.2. Verify placeholder text in Email field

**File:** `tests/textfield/email-placeholder-validation.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The Email field displays placeholder 'Enter Your Email'
  2. Verify placeholder text is correct
    - expect: Placeholder exactly reads 'Enter Your Email'

#### 3.3. Verify placeholder text in Password field

**File:** `tests/textfield/password-placeholder-validation.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The Password field displays placeholder 'Enter your password'
  2. Verify placeholder text is correct
    - expect: Placeholder exactly reads 'Enter your password'

### 4. Form Submission

**Seed:** `tests/seed.spec.ts`

#### 4.1. Submit form with all valid data

**File:** `tests/textfield/form-submit-valid-data.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Fill Name field with 'John Smith'
    - expect: Name field contains 'John Smith'
  3. Fill Email field with 'john.smith@email.com'
    - expect: Email field contains 'john.smith@email.com'
  4. Fill Password field with 'Password@123'
    - expect: Password field contains masked characters
  5. Click the Register button
    - expect: Form submission is triggered
    - expect: Page may redirect or show success message
    - expect: Form data is processed

#### 4.2. Submit form with empty Name field

**File:** `tests/textfield/form-submit-empty-name.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Leave Name field empty
    - expect: Name field is empty
  3. Fill Email field with 'test@email.com'
    - expect: Email field is filled
  4. Fill Password field with 'Test@123'
    - expect: Password field is filled
  5. Click the Register button
    - expect: Form validation error is displayed for Name field
    - expect: OR form submission is prevented
    - expect: OR error message indicates Name is required

#### 4.3. Submit form with empty Email field

**File:** `tests/textfield/form-submit-empty-email.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Fill Name field with 'Jane Doe'
    - expect: Name field is filled
  3. Leave Email field empty
    - expect: Email field is empty
  4. Fill Password field with 'SecurePass@456'
    - expect: Password field is filled
  5. Click the Register button
    - expect: Form validation error is displayed for Email field
    - expect: OR form submission is prevented

#### 4.4. Submit form with empty Password field

**File:** `tests/textfield/form-submit-empty-password.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Fill Name field with 'Test User'
    - expect: Name field is filled
  3. Fill Email field with 'user@test.com'
    - expect: Email field is filled
  4. Leave Password field empty
    - expect: Password field is empty
  5. Click the Register button
    - expect: Form validation error is displayed for Password field
    - expect: OR form submission is prevented

### 5. Navigation

**Seed:** `tests/seed.spec.ts`

#### 5.1. Click Login Now link to navigate to login page

**File:** `tests/textfield/navigate-to-login.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
    - expect: Login Now link is visible with text 'Already have an account ?'
  2. Click on the Login Now link
    - expect: Navigation occurs to the login page
    - expect: URL changes to path containing '/login'
    - expect: Login form is displayed instead of registration form

### 6. Text Field Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 6.1. Enter text with special characters in Name field

**File:** `tests/textfield/name-special-characters.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Click on the Name field
    - expect: Name field is focused
  3. Type 'John@#$%^&*()' with special characters
    - expect: Special characters are entered into the Name field
    - expect: Text is displayed as typed

#### 6.2. Enter very long text in Name field

**File:** `tests/textfield/name-long-text.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Enter a 100-character long string in the Name field
    - expect: The field accepts all characters
    - expect: Text is visible and can be entered

#### 6.3. Enter whitespace only in Name field

**File:** `tests/textfield/name-whitespace.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Click on Name field and enter multiple spaces
    - expect: Spaces are accepted into the Name field
  3. Attempt to submit the form with only whitespace in Name
    - expect: Form handles whitespace appropriately
    - expect: Either rejects it as invalid OR accepts it based on validation rules

#### 6.4. Clear text field after entering data

**File:** `tests/textfield/clear-field-data.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Enter text 'Sample Name' in the Name field
    - expect: Text is entered successfully
  3. Triple-click to select all text in the Name field
    - expect: All text in the field is selected/highlighted
  4. Press Delete or Backspace to clear the field
    - expect: All text is removed from the field
    - expect: Field appears empty
    - expect: Placeholder may reappear

#### 6.5. Copy and paste text into Name field

**File:** `tests/textfield/copy-paste-text.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Enter text 'ClipboardText' in a text editor and copy it
    - expect: Text is copied to clipboard
  3. Click on the Name field and paste the text
    - expect: The text 'ClipboardText' is pasted into the Name field
    - expect: Field displays the pasted text

### 7. Data Capture and Retrieval

**Seed:** `tests/seed.spec.ts`

#### 7.1. Capture entered data from Name field

**File:** `tests/textfield/capture-name-data.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Enter 'Alice Johnson' in the Name field
    - expect: Name field contains 'Alice Johnson'
  3. Retrieve the value from the Name field using browser developer tools or JavaScript
    - expect: Retrieved value is 'Alice Johnson'
    - expect: Data can be logged to console or captured programmatically

#### 7.2. Capture entered data from Email field

**File:** `tests/textfield/capture-email-data.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Enter 'alice@company.com' in the Email field
    - expect: Email field contains 'alice@company.com'
  3. Retrieve the value from the Email field
    - expect: Retrieved value is 'alice@company.com'

#### 7.3. Capture entered data from Password field

**File:** `tests/textfield/capture-password-data.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Enter 'SecretPass@2024' in the Password field
    - expect: Password field contains masked characters
  3. Retrieve the actual value from the Password field using JavaScript
    - expect: Retrieved value is 'SecretPass@2024'
    - expect: The actual password (not masked) can be captured programmatically

### 8. Input Type and Attributes

**Seed:** `tests/seed.spec.ts`

#### 8.1. Verify Name field input type

**File:** `tests/textfield/verify-name-type.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Inspect the Name field element
    - expect: The input type is 'text'
    - expect: OR the input type is another text-based type

#### 8.2. Verify Password field input type is password

**File:** `tests/textfield/verify-password-type.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Inspect the Password field element
    - expect: The input type attribute is 'password'
    - expect: This ensures password masking behavior

#### 8.3. Verify Email field input type

**File:** `tests/textfield/verify-email-type.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Inspect the Email field element
    - expect: The input type is 'email'
    - expect: OR the input type is 'text'
    - expect: Email field may have email validation

### 9. Form Field Labels and Structure

**Seed:** `tests/seed.spec.ts`

#### 9.1. Verify all form labels are present

**File:** `tests/textfield/verify-form-labels.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Check for presence of all labels
    - expect: Label 'Name' is visible
    - expect: Label 'Email Id' is visible
    - expect: Label 'Password' is visible

#### 9.2. Verify form has required indicator

**File:** `tests/textfield/verify-required-indicator.spec.ts`

**Steps:**
  1. Navigate to the registration page
    - expect: The registration form is displayed
  2. Check if fields have required indicators (asterisk or similar)
    - expect: Required fields are clearly marked
    - expect: OR all fields are implicitly required
