# ACME

- client
    * requests profile -> /users/profile
- server
    * checks for cookie
    * sends 401
- client 
    * redirects to login page
    * sends credentials -> /authentication/validate-credentials
- server 
    * creates a session in the database
    * responds with a cookie
- client
    * redirects to home page
    * requests profile -> /users/profile
- server
    * checks for cookie
    * checks databse for session info
    * responds with profile info
