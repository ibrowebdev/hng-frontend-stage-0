# 🧙 Frontend Wizards - Stage 0: Testable Profile Card

This project is the submission for the Frontend Wizards Stage 0 task, focusing on building an accessible, responsive, and fully **testable Profile Card** component using plain HTML, CSS, and vanilla JavaScript.

---

## ✨ Features

* **Testable:** Every visible element includes the required `data-testid` attribute for automated testing.
* **Accessible:** Uses semantic HTML5 elements (`<article>`, `<figure>`, `<nav>`, `<section>`, `<time>`, etc.), includes proper `alt` text, and provides clear `:focus-visible` styles for keyboard navigation.
* **Responsive:** Implements a mobile-first design that stacks content vertically on small screens and uses a flexible side-by-side layout (avatar left, content right) on wider screens using **Flexbox**.
* **Dynamic Time:** Uses vanilla JavaScript to display the **current time in milliseconds** (`Date.now()`) and updates it every second.
* **Safe Links:** Social links use `target="_blank" rel="noopener noreferrer"`.

---

## 🚀 How to Run Locally

Follow these simple steps to get the Profile Card running on your machine:

### 1. Project Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/frontend-wizards-profile-card.git](https://github.com/YOUR_USERNAME/frontend-wizards-profile-card.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd frontend-wizards-profile-card
    ```

### 2. View the Page

This project requires **no build tools or local server**.

1.  Locate the `index.html` file in the project folder.
2.  **Double-click** on the file, or right-click and choose **"Open with..."** your preferred web browser (Chrome, Firefox, Edge, etc.).

The profile card will load immediately, and the time in milliseconds will start updating.

---
