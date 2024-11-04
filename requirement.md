Here's a bullet list summarizing the requirements for the GadgetHeaven e-commerce project:

### Overall Requirements

- **Responsive Design**: Develop a responsive e-commerce platform for buying gadgets based on a detailed Figma design.
- **Global Components**: Navbar and footer should be displayed consistently on all pages.
- **Data Handling**: Use Context API (and optionally LocalStorage) to manage the cart and wishlist.

### Navigation & Structure

- **Navbar**:
  - Contains: Logo, Brand Name, Dashboard, Stats.✅
  - Should indicate the active route.✅
- **Categories Sidebar**:
  - Sidebar with gadget categories: computers, phones, smart watches, chargers, power banks.✅
  - Clicking a category should show gadgets of that category using a nested layout.
- **Footer**: Add a meaningful footer with information matching the Figma design.✅

### Home Page

- **Banner Section**:
  - Attractive banner with a button linking to the Dashboard page.✅
- **Gadgets Cards**:
  - Display 6-9 gadget cards in a grid format.✅
  - Each card includes: product image, name, price, 'Details' button.✅
  - Clicking 'Details' navigates to the product details page.✅
- **Categories & Data**:
  - At least 3 categories, with the first category showing 6 data items. Other categories should have at least 2 items each.✅
  - Unique prices (minimum $50 per item).✅

### Product Details Page

- **Product Information**: Show all properties of a single item: image, name, price, description, specifications, etc.✅
- **Buttons & Icons**:
  - **Add to Cart** (🛒) button: Adds item to the cart and shows a badge in the navbar.
  - **Wishlist** (♥) icon: Adds item to the wishlist. Disable the icon after adding once.
  - Prevent adding the same item to the wishlist more than once.

### Dashboard Page

- **Tabs**:
  - **Cart Tab**: Displays items added to the cart and shows the total price. Includes a "Sort by Price" button to sort items in descending order.
  - **Wish List Tab**: Displays items added to the wishlist.
- **Item Cards**: Show gadget name, image, price, and other relevant info.
- **Total Price**: Display total price in the Cart tab.

### Functionalities

- **Cart & Wishlist**:
  - Show a toast notification when adding items to the cart or wishlist.
  - Display different messages for each action.
- **Edge Cases**:
  - Handle reloads without showing errors or a 404 page.
  - Disable the cart if the total price is 0.
  - Prevent adding more items if the cart total reaches $1000.

### Modal for Purchase

- **Purchase Button**:
  - Shows a congratulatory modal.
  - Clears the cart and resets the total price without reloading the page.
  - Redirect to the home page using `useNavigate()` after closing the modal.
  - Button should be disabled if the cart is empty.

### Miscellaneous

- **404 Page**: Create a 404 error page for unmatched routes.
- **Favicon & Dynamic Title**: Add a favicon and use a dynamic title for each page.
- **Statistics Page**:
  - Display a Composed Chart with Price vs. Product Name.
  - Use area, bar, and scatter data to show price and rating.

### Challenge Tasks

- **Background Color**: Change the home page background color differently from the navbar on other pages using the `useLocation()` hook.
- **Cart Price Limit**: Prevent adding items if the total cart value exceeds $1000. Allow item removal to decrease the total.
- **Wishlist to Cart**:
  - Allow adding items from the wishlist to the cart.
  - If adding exceeds the $1000 limit, show an error toast and prevent the action.
- **Removing Items**: Implement item removal from both the cart and wishlist.

### Documentation

- **README.md**:
  - Attach the live website link and requirement document link.
  - List React fundamental concepts used.
  - Explain data handling and management approach.
  - Highlight 5 key features of the project.
