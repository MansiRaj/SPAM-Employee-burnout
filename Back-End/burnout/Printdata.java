package burnout;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.*;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


public class Printdata extends HttpServlet {
    
   /**
    * @see HttpServlet#HttpServlet()
    */
   public Printdata(){
       super();
       // TODO Auto-generated constructor stub
   }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter out = response.getWriter();

        String url = "jdbc:mysql://localhost:3306/burnout";
        String username = "root";
        String password = "root";
        Connection conn=null;
        
     try{
    	 Class.forName(JDBCconn.JDBC_DRIVER);
		conn = DriverManager.getConnection(url,username,password);
		System.out.println("connection stabilish");	
		//Connecting to the mysql server using JDBC.
		
			  PreparedStatement	stmt=conn.prepareStatement("Select * from burnout order by Employee_ID  LIMIT 1000;");
		ResultSet e=stmt.executeQuery();
        ArrayList<String> A =new ArrayList<>(); 
          while (e.next()) {
        	  burnpojo obj = new burnpojo();
        	  obj.setEmployee_ID(e.getString(1));
			  obj.setDate_of_Joining(e.getString(2));
			  obj.setGender(e.getString(3));
			  obj.setCompany_Type(e.getString(4));
			  obj.setWFH_Setup_Available(e.getString(5));
			  obj.setDesignation(e.getString(6));
			  obj.setRESOURCE_Allocation(e.getString(7));
			  obj.setMental_Fatigue_Score(e.getString(8));
			  obj.setBurn_Rate(e.getString(9));			  
	          GsonBuilder builder = new GsonBuilder(); 
	          Gson gson = builder.create();
	          builder.serializeNulls();
	          builder.setPrettyPrinting();
	          String json = gson.toJson(obj); 
	          A.add(json);
        	   }
      

      
      //response.setContentType("application/json");
      //response.setCharacterEncoding("UTF-8");
      out.print(A);
      
      out.flush();
     } catch(Exception e){
       System.out.println(e);
       }
    }
	}