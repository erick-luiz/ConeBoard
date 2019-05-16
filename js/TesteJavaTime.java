import java.time.*;

class TesteJavaTime{
	
	public static void main(String[] args){

		LocalDateTime ldt = LocalDateTime.now();
		System.out.format("%-10s", ldt.withMonth(7));
	}

}