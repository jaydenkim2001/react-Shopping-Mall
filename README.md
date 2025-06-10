# react-Shopping-Mall
## Functional Requirements:
1. Pages: Show all products page , Login page, Individual product detail page
    - Navigation bar needs to be created.
2. Show all products page displays all products.
    - Since there are no open source API to get products' data, we created a simple server with a database using json server.
    - Thus, in a separate terminal run: "npx json-server --watch db.json --port 5000"
3. Clicking Login button leads to Login page.
4. Individual product detail page can only be accessed after logging in (for the sake of practicing private routing).
5. Clicking Logout button logs the user out.
6. If logged out, the user is redirected to login page. 
7. Login/Logout button is shown accordingly based on the login status.
8. User can also search for products in the search bar.

## Added on Functional Requirements:
9. User can return back to home page (all products page) by clicking on the H&M logo. 