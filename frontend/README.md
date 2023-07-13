
# Welcome to UnStop Seat Reservation System! /  Ticket-Booking-System

This problem involves the reservation of seats in a train coach. The coach has a total of 80 seats, arranged in rows of 7 seats each, except for the last row which has only 3 seats. There is only one coach on this train. Each person is allowed to reserve up to 7 seats at a time. The priority for booking seats is to secure them in one row if available. If seats are not available in one row, the booking should be made in a way that reserves nearby seats. Users can book as many tickets as they want until the coach is full. There is no requirement for creating a login functionality in this application.

# TechStack: 
# 1. **Frontend**
 	a. React.js
   	b. Context Api
     	c. Chakra Ui (External CSS)
# 2.**Backend**
	a. Node.js
  	b. Express
    	c. Mongoose
      	d. redis
# 3. **DataBase** 
       	a. MongoDb

  
# **All Seats Available:**

![enter image description here](https://res.cloudinary.com/dc3akfh6t/image/upload/v1689250632/crhtmzdszmuddmp1grql.png)

# **Booking Seats At  the very Beginning According to Constraints :**

![enter image description here](https://res.cloudinary.com/dc3akfh6t/image/upload/v1689250822/pxyqpso2tqbiyg2uxa3n.png)


# **Showing Booked Seats [ 24, 25, 26 ] After Majority Seats have been booked:**

![enter image description here](http://res.cloudinary.com/dc3akfh6t/image/upload/v1689250600/n9wrjzmvg1oyy9kdnfx1.png)



# **Un-Booking The seats Clicking on the Boxes :**

![enter image description here](http://res.cloudinary.com/dc3akfh6t/image/upload/v1689250727/vufxkzqbb9iuue38jcck.png)
# [Website Link](https://frontend-bice-phi.vercel.app/)

1. [Backend Github  Link](https://github.com/NAYANKUMAR21/UnStop-Backend)
2. [Frontend Github  Link](https://github.com/NAYANKUMAR21/Ticket-Booking-System/tree/master/frontend)
3. [Frontend Deployed Link](https://frontend-bice-phi.vercel.app/)
4. [Backend Deployed Link (Cyclic)](https://amber-cheetah-hat.cyclic.app)


# **Features :**
	
 1. Seat Availability: The system should display the current availability of seats in the coach, taking into account the layout of rows and the number of seats in each row.
    
2. Seat Reservation: Users should be able to reserve seats, with a limit of up to 7 seats per person. The system should prioritize booking seats in one row if available.
    
3.  Seat Allocation: If seats are not available in one row, the system should allocate nearby seats to ensure the group or individual can sit together.
    
4.  Booking Limit: The system should allow users to book as many tickets as they want until the coach is full. It should display a notification when the coach is fully booked.
    
5.  Un-Booking Feature: The system should provide an option for users to cancel or un-book their reserved seats. This would free up the seats for other users.
    
6.  User Interface: A user-friendly interface should be implemented to make it easy for users to view seat availability, reserve seats, and un-book seats. The interface should also display relevant information, such as the coach layout and the number of seats remaining.
    
7.  Validation and Error Handling: The system should handle various scenarios, such as invalid seat selections, exceeding the booking limit, or attempting to un-book seats that have not been reserved.
    
8.  System Efficiency: To optimize the booking process, the system can implement algorithms to efficiently search for available seats, prioritize filling rows, and minimize the number of splits between groups.

Note: The system should have a database or storage mechanism to store and retrieve reservation data, ensuring the data remains intact even if the application restarts.

