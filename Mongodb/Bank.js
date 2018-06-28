Inserted entries


/* 1 */
{
    "_id" : ObjectId("5b2cdc29be20e2b21fdd71dc"),
    "Acc_Details" : {
        "acc_No" : 93011011.0,
        "balance" : 60.0
    },
    "Cust_Details" : {
        "custId" : "e101",
        "custName" : "Ram",
        "street" : "DanishHill",
        "city" : "Bhopal",
        "loanAmount" : 700.0,
        "depositAmount" : 21000.0
    },
    "Branch" : {
        "branchName" : "Mandakini",
        "branchCity" : "Bhopal",
        "assets" : 100.0
    }
}

/* 2 */
{
    "_id" : ObjectId("5b2cdccfbe20e2b21fdd71dd"),
    "Acc_Details" : {
        "acc_No" : 90312065.0,
        "balance" : 50000.0
    },
    "Cust_Details" : {
        "custId" : "p101",
        "custName" : "Mohan",
        "street" : "Shama Hill",
        "city" : "Chennai",
        "loanAmount" : 57000.0,
        "depositAmount" : 5000.0
    },
    "Branch" : {
        "branchName" : "Ramapuram",
        "branchCity" : "Chennai",
        "assets" : 10011.0
    }
}

/* 3 */
{
    "_id" : ObjectId("5b2cdd2bbe20e2b21fdd71de"),
    "Acc_Details" : {
        "acc_No" : 60005365.0,
        "balance" : 5000.0
    },
    "Cust_Details" : {
        "custId" : "y101",
        "custName" : "Shashank",
        "street" : "Mira Road",
        "city" : "Chennai",
        "loanAmount" : 100000.0,
        "depositAmount" : 5000.0
    },
    "Branch" : {
        "branchName" : "ORM",
        "branchCity" : "Chennai",
        "assets" : 10011.0
    }
}

/* 4 */
{
    "_id" : ObjectId("5b2cddf0be20e2b21fdd71df"),
    "Acc_Details" : {
        "acc_No" : 6000045.0,
        "balance" : 506540.0
    },
    "Cust_Details" : {
        "custId" : "56p1",
        "custName" : "sundaran",
        "street" : "Mongo Hill",
        "city" : "Pune",
        "loanAmount" : 50000001,
        "depositAmount" : 5000
    },
    "Branch" : {
        "branchName" : "Borivalli",
        "branchCity" : "Pune",
        "assets" : 10025.0
    }
}

/* 5 */
{
    "_id" : ObjectId("5b2cde50be20e2b21fdd71e0"),
    "Acc_Details" : {
        "acc_No" : 90312065.0,
        "balance" : 50000.0
    },
    "Cust_Details" : {
        "custId" : "x101",
        "custName" : "Pintu",
        "street" : "Long Road",
        "city" : "Pune",
        "loanAmount" : 0,
        "depositAmount" : 0
    },
    "Branch" : {
        "branchName" : "Chembur",
        "branchCity" : "Pune",
        "assets" : 10025.0
    }
}

/* 6 */
{
    "_id" : ObjectId("5b2cded9be20e2b21fdd71e1"),
    "Acc_Details" : {
        "acc_No" : 93011011.0,
        "balance" : 65000.0
    },
    "Cust_Details" : {
        "custId" : "poi101",
        "custName" : "Raghu",
        "street" : "Monto Hill",
        "city" : "Hydrabad",
        "loanAmount" : 450000.0,
        "depositAmount" : 600
    },
    "Branch" : {
        "branchName" : "Mandakini",
        "branchCity" : "Hydrabad",
        "assets" : 100.0
    }
}

/* 7 */
{
    "_id" : ObjectId("5b2cdf38be20e2b21fdd71e2"),
    "Acc_Details" : {
        "acc_No" : 90312065.0,
        "balance" : 50000.0
    },
    "Cust_Details" : {
        "custId" : "fr101",
        "custName" : "Shagun",
        "street" : "till Hill",
        "city" : "Hydrabad",
        "loanAmount" : 0.0,
        "depositAmount" : 500
    },
    "Branch" : {
        "branchName" : "sundarnager",
        "branchCity" : "Hydrabad",
        "assets" : 100.0
    }
}
-----------------------------------------------------------------------------------------------------
Questions and Answers

//Create index on primary key(s)

db.BankDetails.createIndex({"Acc_Details.acc_No":1},{unique:true})

//ques 3 The names and cities of all borrowers. 

db.BankDetails.find({"Cust_Details.loanAmount":{$gt:0}},{"Cust_Details.custName":1,"Cust_Details.city":1,"_id":0})

//ques4 The names of borrowers who live in Chennai. db.BankDetails.find({$and:[{"Cust_Details.city":"Chennai"},
{"Cust_Details.loanAmount":{$gt:0}}]},{"Cust_Details.custName":1,"_id":0})

//ques 5 Find the name, city, and assets of the branch with the largest assets. db.BankDetails.find({},
{"Branch.branchName":1,"Branch.branchCity":1,"Branch.assets":1}).sort({"Branch.assets":-1}).limit(1)

//ques6 The names and cities of customers who have a loan at Pune branch. db.BankDetails.find({$and:
[{"Cust_Details.city":"Pune"},{"Cust_Details.loanAmount":{$gt:0}}]},{"Cust_Details.custName":1,"Cust_Details.city":1,"_id":0})

//ques7 Find the number of accounts with balances between 5000 and 50000. 

db.BankDetails.find({$and:[{"Acc_Details.balance":{$gt:5000}},{"Acc_Details.balance":{$lt:500000}}]},
{"Acc_details.acc_No":1}).count()

//ques 8 The names of customers with both DEPOSITS and loans at Pune branch. 

db.BankDetails.find({$and:[{"Cust_Details.city":"Pune"},{"Cust_Details.loanAmount":{$gt:0}},{"Cust_Details.depositAmount":
{$gt:0}}]},{"Cust_Details.custName":1,"_id":0})

//ques9 The customers whose total loans are greater than the total amount in their bank accounts

db.BankDetails.find({$expr:{$gt:["Cust_Details.loanAmount","Acc_Details.balance"]}},
{"Cust_Details.custName":1,"_id":0})

//ques 10 The names of customers living on streets with names ending in "Hill". 

db.BankDetails.find({"Cust_Details.street":{$regex:"Hill"}})

//ques 11 The names of customers with an account but not a loan at 
Pune branch. 

db.BankDetails.find({$and:[{"Branch.branchCity":"Pune"},{    "Cust_Details.loanAmount":{$gt:0}}]},
{"Cust_Details.custName":1,"_id":0})

//ques 12 The names of branches whose assets are greater than the assets of all branches in    Hyderabad. 

db.BankDetails.aggregate([{$match:{"Branch.branchCity":"Hydrabad"}},{$group:{_id:"Branch.branchName",MaxOfHyd:
{$max:"$Branch.assets"}}},{$match:{$gt:["Branch.assets",MaxOfHyd]}}])

//ques13 The branch with the largest average balance. 

db.BankDetails.aggregate([{$group:{_id:"$Branch.branchCity",    Avg_Balance:{$avg:"$Acc_Details.balance"}}},{$sort:
{Avg_Balance:-1}},{$limit:1}])    

//ques 14 The branch name and number of customers for each branch 

db.BankDetails.aggregate([{$group:{_id:"$Branch.branchName",NumberOfCustomers:{$sum:1}}}])      

 //ques 15 Deposit an additional Rs. 20,000 to Ram’s bank account

db.BankDetails.update({"Cust_Details.custName":"Ram"},{$inc:{"Cust_Details.depositAmount":20000}}) 