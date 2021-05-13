package burnout;


public class burnpojo {

	//Here we simply create a POJO for getting and setting all the data for entering them in the SQL table 
	//that we received from the CSV file
	//Defining the data variables
	private String Employee_ID ;
	private String Date_of_Joining ;
	private String Gender ;
	private String Company_Type ;
	private String WFH_Setup_Available ;
	private String Designation;
	private String RESOURCE_Allocation;
	private String Mental_Fatigue_Score;
	private String Burn_Rate;
	
	public String getDate_of_Joining() {
		return Date_of_Joining;
	}

	public void setDate_of_Joining(String date_of_Joining) {
		Date_of_Joining = date_of_Joining;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getCompany_Type() {
		return Company_Type;
	}

	public void setCompany_Type(String company_Type) {
		Company_Type = company_Type;
	}

	public String getWFH_Setup_Available() {
		return WFH_Setup_Available;
	}

	public void setWFH_Setup_Available(String wFH_Setup_Available) {
		WFH_Setup_Available = wFH_Setup_Available;
	}

	public String getDesignation() {
		return Designation;
	}

	public void setDesignation(String designation) {
		Designation = designation;
	}

	public String getRESOURCE_Allocation() {
		return RESOURCE_Allocation;
	}

	public void setRESOURCE_Allocation(String rESOURCE_Allocation) {
		RESOURCE_Allocation = rESOURCE_Allocation;
	}

	public String getMental_Fatigue_Score() {
		return Mental_Fatigue_Score;
	}

	public void setMental_Fatigue_Score(String mental_Fatigue_Score) {
		Mental_Fatigue_Score = mental_Fatigue_Score;
	}

	public String getBurn_Rate() {
		return Burn_Rate;
	}

	public void setBurn_Rate(String burn_Rate) {
		Burn_Rate = burn_Rate;
	}

	public String getEmployee_ID() {
		return Employee_ID;
	}

	public void setEmployee_ID(String employee_ID) {
		Employee_ID = employee_ID;
	}

	
}
