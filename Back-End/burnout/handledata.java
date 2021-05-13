package burnout;

import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.text.ParseException;
 
public class handledata {
 
    public void database_mange(ArrayList<burnpojo> burnData) {
    	//Starting Connection 
         Connection connection = null; 
         System.out.println("hi");
 
        try {
        	System.out.println("hi2");
        	// Connection started
            connection = DriverManager.getConnection(JDBCconn.DB_URL, JDBCconn.USER, JDBCconn.PASS);
            connection.setAutoCommit(false);
            
            // SQL query for initiating the insertion of data
            String sql = "INSERT INTO burnout (Employee_ID,  Date_of_Joining,  Gender,  Company_Type,  WFH_Setup_Available,"
            		+ "Designation,  RESOURCE_Allocation, Mental_Fatigue_Score, Burn_Rate) "
            		+ "VALUES (?, ?, ?, ?, ?,?, ?, ?, ?)";
            
            System.out.println("hi3");
            
            // Prepare statement is used to execute SQL queries or updates
            PreparedStatement statement = connection.prepareStatement(sql);
            
            // checking if the data has unique values for the primary key
            PreparedStatement check_primary = connection.prepareStatement("SELECT Employee_ID FROM burnout where Employee_ID = ?");
           
            System.out.println(burnData);
            // We will iterate our POJO object 
            for (burnpojo obj : burnData)
    		{
            	// Date Formatter
            	//setting different format for our date time data as per convenient and feasible
            	//according to out csv file
            	System.out.println("hi5");
                SimpleDateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd");
                Date date;
                long lo;

                //Checking primary key constraint
                String eid=obj.getEmployee_ID();
                check_primary.setString(1, eid);
                ResultSet rs = check_primary.executeQuery();
                
               
                if (rs.next()) 
                {
                	// Move to next iteration if primary key is duplicated
                	continue; 
                   
                } 
                //System.out.println(obj.getRESOURCE_Allocation());
                //Further all statement we will simply execute and storing them as string type
                // SQL statement for all the POJO storage we have created
                //along the way converting data types to match SQL table type
                statement.setString(1, obj.getEmployee_ID());
                
                if(obj.getGender().equalsIgnoreCase("")) {
                	// checking for Null constraint
                	statement.setString(3, null);
                }
                else {
                	statement.setString(3, obj.getGender());
                }
                
                if(obj.getCompany_Type().equalsIgnoreCase("")) {
                	// checking for Null constraint
                	statement.setString(4, null);
                }
                else {
                	statement.setString(4, obj.getCompany_Type());
                }
                
                if(obj.getWFH_Setup_Available().equalsIgnoreCase("")) {
                	// checking for Null constraint
                	statement.setString(5, null);
                }
                else {
                	statement.setString(5, obj.getWFH_Setup_Available());
                }
                
                if(obj.getDesignation().equalsIgnoreCase("")) {
                	// checking for Null constraint
                	statement.setString(6, null);
                }
                else {
                	statement.setString(6, obj.getDesignation());
                }
      
                //formatting posting date
                date = formatter2.parse(obj.getDate_of_Joining());
                formatter2.format(date);
                lo=date.getTime();
                statement.setDate(2, new java.sql.Date(lo));

                if(obj.getRESOURCE_Allocation().equalsIgnoreCase("")) {
                	// checking for Null constraint
                	statement.setString(7, null);
                }
                else {
                	statement.setString(7, obj.getRESOURCE_Allocation());
                }
                
                if(obj.getMental_Fatigue_Score().equalsIgnoreCase("")) {
                	// checking for Null constraint
                	statement.setString(8, null);
                }
                else {
                	statement.setString(8, obj.getMental_Fatigue_Score());
                }
                
                if(obj.getBurn_Rate().equalsIgnoreCase("")) {
                	// checking for Null constraint
                	statement.setString(9, null);
                }
                else {
                	statement.setString(9, obj.getBurn_Rate());
                }
         
                statement.addBatch();  		// adding batch
                statement.executeBatch();   // executing batch
                
                System.out.println("hi6");
      
            }
            System.out.println("hi7");
            statement.executeBatch();
            connection.commit();
            connection.close();
 
        	} catch (SQLException ex) {     // Trying SQL exceptions
        		ex.printStackTrace();
        	}catch (ParseException ex) {    //  Trying SQL exceptions
        		ex.printStackTrace();}
        	catch (NumberFormatException ex) {
        		ex.printStackTrace();}
       
    }
 
    }
