package burnout;

import java.io.*;
import java.sql.Timestamp;
import java.util.ArrayList;
 
public class entrydata {	  
	 public ArrayList<burnpojo> csv_reader()
	 {
	           // Defining path of file below
	 		    String csvFilePath = "C:\\Users\\KIIT\\Desktop\\STUDIES\\T&T lab\\train1.csv";
	             String lineText = null;
	             
	             try {		
	            	 
	            	 //BufferReader to read each line in the csv file
	             BufferedReader lineReader = new BufferedReader(new FileReader(csvFilePath));
	             
	             //creating array list for our pojo class
	         	ArrayList<burnpojo> burnData = new ArrayList<>();
	         	
	             lineReader.readLine(); // skip header line
	             
	             while ((lineText = lineReader.readLine()) != null) { //iterate till EOF
	            	 
	            	//Using comma to split because each data is separated with a comma
	            	 lineText=lineText+", , ";
	               String[] data = lineText.split(","); 
	               //System.out.println(data[0]);
	               if(data.length!=11) {
	            	   continue;
	               }
              //System.out.println(data.length);
	               
	            // Creating new Pojo object to store data in each line
	             	burnpojo pojoObj= new burnpojo();      
	             	
	             	//setting the values of each data attribute
	             	pojoObj.setEmployee_ID(data[0]);   
	             	pojoObj.setDate_of_Joining(data[1]);
	             	pojoObj.setGender(data[2]);
	             	pojoObj.setCompany_Type(data[3]);
	             	pojoObj.setWFH_Setup_Available(data[4]);
	             	pojoObj.setDesignation(data[5]);
	             	pojoObj.setRESOURCE_Allocation(data[6]);
	             	pojoObj.setMental_Fatigue_Score(data[7]);
	             	pojoObj.setBurn_Rate(data[8]);
	             	
	             	//Adding pojo data in a list of pojo_object
	             	burnData.add(pojoObj);             
	             }		
	             
	             //closing the linereader
	             lineReader.close();
	             System.out.println(burnData);
	 			return burnData;
	 	}
	          // catch exception if file is not present
	     catch (IOException ex) {     
	 		System.err.println(ex);
	 		return null; 
	 	}
	 			
	     }

	 }

