package skeleton;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class driverUtilities {

	
	public static WebDriver getDriver(String browser)
	{
		
		if(browser.contentEquals("chrome"))
		{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\a07208trng_b4a.04.28\\Desktop\\chromedriver.exe");
		return new ChromeDriver();
	}
	else
	{
		return null;
	}
}
	
}
