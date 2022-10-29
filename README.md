# Address book

## Steps to implement.

### 1. Clone the repository
### 2. use this command for packages installation (npm install).
### 3. npm init -y
### 4. Create .env file for the PORT and SERVER.(Can copy the .env.exmaple file)
### 4. npm start
### 5. open POSTMAN and test.

## POST MAN
### -> Open POSTMAN.
### -> Create new Collection of (AddressBook) .
### -> Create new folder(Contacts) inside the collection(AddressBook).

###  * JWT authentication to secure API.
##  ->  Create new folder(Auth) inside the collection(AddressBook).
##  ->  Add Make Requests inside the Auth folder as show below.
###   1) Login
###   2) Register

## 1) LOGIN     :- To Login give the login details in the Body section in POSTMAN.
## 2) REGISTER  :- To Register give the Details in the Body Section in POSTMAN.

### REGISTER DEATILS :
### 1. name(required)
### 2. email(required)
### 3. password(required)

### LOGIN DEATILS :
### 1. email
### 2. password

### => 1st Register and then Login
### => After Login Token can be find in the data
### => copy it and use it in the Contacts folder while making Requests 

##  CONTACT:
### -> Add Make Requests inside the Contacts folder as show below.
###     1) List
###     2) Details
###     3) Create
###     4) Update
###     5) Delete

### * While making Request In POSTMAN check (Authorization) select  Bearer Token and Paste the copied token here 

## 1) LIST    :- Displays All the contacts details.
## 2) DETAILS :- Displays Single contacts details based on the ID of particular Contact data.
## 3) CREATE  :- Creates New contact.(Pass the new data in the body)
## 4) UPDATE  :- Updates the contact details based on the ID of Particular Contact data & 
##               Pass the data which want to be updated in the Body.
## 5) DELETE  :- Deletes the contact details.



### NOTE : -> MongoDB Should be installed.
###        -> POSTMAN Should be installed.


### For any queries contact this email (nandukumar985@gmail.com)




