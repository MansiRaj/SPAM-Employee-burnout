package burnout;

import java.util.ArrayList;

public class main {
	
	public static void main(String[] args)
	{
		//Calling Csv_Reader class's object to read from CSV file
		entrydata cob= new entrydata();
     	ArrayList<burnpojo> burnData = new ArrayList<>();
     	burnData=cob.csv_reader();
     	System.out.println(burnData);
     	
     	//Calling DatabaseHandler class's object to establish connection and execute batch
     	handledata dh= new handledata();
     	dh.database_mange(burnData);
     	
     	//printing a statement after inserting the data in the table
     	System.out.println("FINISHED");
	}

}