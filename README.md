# To Test the Api's
POST:
  - Signup: https://auth-backend-beyw.onrender.com/api/v1/auth/signup
        input field : { username, email, password }
 - SignIn : https://auth-backend-beyw.onrender.com/api/v1/auth/signin
   input field : { email, password }

 GET:
 - validate-auth : https://auth-backend-beyw.onrender.com/api/v1/auth/validate
      - input field : { email, password }

## Steps of follow to test the api for signin and signup:

### POST Request
  1. Open the postman
     ![Postman](https://github.com/user-attachments/assets/51d1c4e5-8f46-4741-8e16-32d66d8989fb)
  2. Choose the HTTP request:
     ![HTTP Request](https://github.com/user-attachments/assets/238e9a18-bd32-4a67-95f0-894296c1cc13)
  3. Go to Body -> x-www-from-urlencoded
     ![ Body -> x-www-from-urlencoded](https://github.com/user-attachments/assets/de7e7626-c310-48f1-97c1-9ed315bac7bb)
  4. Select the POST Request, add the url and add the details  as mentioned below:
    ![POST Request and add the url](https://github.com/user-attachments/assets/fddc8624-b25f-4ac3-9e9e-3bfb7384f259)
  5. Click on send button you will get the data as shown:
     ![JSON data](https://github.com/user-attachments/assets/316be64a-442e-4423-a671-e0fc9301ff5f)
    
## Steps of follow to test the api for get api

### GET Request
1. Once you hit the signin url you will get a data in json format as shown:
   ![JSON](https://github.com/user-attachments/assets/98ca557b-5cae-41fe-97ac-5a66c95e5089)
2. Add the data in the Header and put the value like
      x-access-token: data
   ![access-token](https://github.com/user-attachments/assets/19259f5f-73bb-4b72-b972-93dbd2ccf2f5)
3. Once you add the data or access-token in the header, then choose the GET request and enter the email and password and hit Send:
 ![User-auth](https://github.com/user-attachments/assets/d392f4d3-0f53-4392-9e0e-46bc5c0c156d)



