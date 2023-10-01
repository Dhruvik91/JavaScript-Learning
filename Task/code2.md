# hotel management system


## hotel 

hotelid (pk)
hotel name (string ) 
hotel location  (varchar2) 
hotel type => 2 ,3 ,5 7 stars (enum)
hotel ratings ( number)
hotel reviews (varchar2)



## user 

userid  (pk)
username (varchar2)
phone number  ( number)
address ( varchar2)
city   ( varchar)
adhar number ( number)


## room

userid  (Fk reference user table)
hotelid ( Fk ref. hotel)
room number ( pk)
room price   (number)
no of day or nights ( number )
types of room => two sharing, three sharing, couples ( varchar2)
total number of rooms ( number)



## payment

type of payment (enum)
userid (Fk from user table)
paymentid (pk)
transaction no. 


## booking

isBooked (boolean)
paymentid (Fk ref. payment)
userid (Fk fre. user)





