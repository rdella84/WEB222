/*********************************************************************************
* WEB222 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Regio Della Student ID: 109324160 Date: February 18, 2017
*
********************************************************************************/ 





/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];


 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

var CustomerDB = {
  customers: [],
  addresses: [],
  stores: [],
  
  insertData: function(allData){
    for(var i = 0; i < allData.length; i++){
      if(allData[i].type == "store"){
        this.addStore(allData[i].data);
      }
      else if(allData[i].type == "customer"){
        this.addCustomer(allData[i].data);  
      }
      else if(allData[i].type == "address"){
        this.addAddress(allData[i].data);
      }
    }    
  },
  
  
  
  /***ALL CUSTOMERS METHODS***/
  
  addCustomer: function(customerObj){
    customerObj.add_date = new Date();
    this.customers.push(customerObj);
  },
  
  outputCustomerById: function(customer_id){
      var c_array = this.customers;
      for(var i = 0; i < c_array.length; i++){ 
         if(c_array[i].customer_id === customer_id){
            var address = this.getAddressById(c_array[i].address_id);
           
            console.log("Customer " + c_array[i].customer_id + ": " + c_array[i].first_name + " " +
                        c_array[i].last_name + " " +"(" + c_array[i].email + ")");
            console.log("Home Address: " + address.address + " " + address.city + ", " +
                       address.province + ". " + address.postal_code); // getAddressById();
            console.log("Joined: " + c_array[i].add_date);  // CHECK DATE FUNCTION
         }
      }
  },
    
  outputAllCustomers: function(){
    var c_array = this.customers; 
    console.log("All Customers");
    console.log("\n");
    for(var i = 0; i < c_array.length; i++){
       var address = this.getAddressById(c_array[i].address_id);
      
       console.log("Customer " + c_array[i].customer_id + ": " + c_array[i].first_name + " " +
                    c_array[i].last_name + " " +"(" + c_array[i].email + ")");
       console.log("Home Address: " + address.address + " " + address.city + ", " +
                       address.province + ". " + address.postal_code); // getAddressById();
       console.log("Joined: " + c_array[i].add_date);  // CHECK DATE FUNCTION
       console.log("\n");
     }
  },
  
  outputCustomersByStore: function(store_id){
     var c_array = this.customers;
     console.log("Customers in Store: " + this.getStoreById(store_id).name + "\n\n");
    
     for(var i = 0; i < c_array.length; i++){          
        if(c_array[i].store_id === store_id){
          var address = this.getAddressById(c_array[i].address_id);
         
          console.log("Customer " + c_array[i].customer_id + ": " + c_array[i].first_name + " " +
                       c_array[i].last_name + " " +"(" + c_array[i].email + ")");
          console.log("Home Address: " + address.address + " " + address.city + ", " +
                       address.province + ". " + address.postal_code); // getAddressById();
          console.log("Joined: " + c_array[i].add_date);
          console.log("\n");    
         }
     } 
  },
  
  removeCustomerById: function(customer_id){
    var c_array = this.customers;
    for(var i = 0; i < c_array.length; i++){
       if(c_array[i].customer_id === customer_id){
         var del_add = c_array[i].address_id;
         c_array.splice(i, 1);
         this.removeAddressById(del_add);
       }
    }
  },
  
  
  
  /***ALL ADDRESSES METHODS***/
  
  addAddress: function(addressObj){
    this.addresses.push(addressObj);
  },
  
  getAddressById: function(address_id){
    var a_array = this.addresses;
    for(var i = 0; i < a_array.length; i++){
      if(a_array[i].address_id === address_id){
         return a_array[i];
      }
    }
  },
  
  outputAllAddresses: function(){
    var a_array = this.addresses; 
    console.log("All Addresses"); 
    console.log("\n");
    for(var i = 0; i < a_array.length; i++){   
      console.log("Address " + a_array[i].address_id + ": " + a_array[i].address + " " +
                   a_array[i].city + ", " + a_array[i].province + ". " + a_array[i].postal_code);
    }
    console.log("\n");
  },
  
 
  // removeAddressById( address_id );
  removeAddressById: function(address_id){
    var a_array = this.addresses;
    var counter = 0;
    var index = 0;
    for(var i = 0; i < a_array.length; i++){
      if(a_array[i].address_id === address_id){
        index = i;
        for(var i = 0; i < this.customers.length; i++){
          if(this.customers[i].address_id === address_id){
            counter =+ 1;
          }
        }
        if(counter === 0){
          a_array.splice(index, 1);
        }
      }
    }
  },

  
  
  /***ALL STORES METHODS***/
  
  addStore: function(storeObj){
    this.stores.push(storeObj);
  }, 
  
  getStoreById: function(store_id){
    var s_array = this.stores;
    for(var i = 0; i < s_array.length; i++){
      if(s_array[i].store_id === store_id){
         return s_array[i];
      }
    }
  },
  
  outputAllStores: function(){
    var s_array = this.stores; 
    console.log("All Stores"); 
    console.log("\n");
    for(var i = 0; i < s_array.length; i++){ 
      var address = this.getAddressById(s_array[i].address_id);
      
      console.log("Store " + s_array[i].store_id + ": " + s_array[i].name)
      
      console.log("Location: " + address.address + " " + address.city + ", " +
                   address.province + ". " + address.postal_code); // getAddressById();
      console.log("\n");   
    }
  } 
};

/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/


// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

