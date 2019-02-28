package skeleton;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import com.dev.loginApp;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDefinationsLogin extends loginApp{
	
	
	static loginApp login = new loginApp();
	
	public stepDefinationsLogin(SharedDriver driver)
	{
		super();
		loginApp.driver=driver;
		driver.manage().window().maximize();
	}
	
	@Before
	public void open(Scenario scenario)
	{
		//login = new loginApp();
		//login.openBro();
		PageFactory.initElements(driver,loginApp.class);
	}
	
	@After
	
	public void close(Scenario scenario)
	{
		//login = new loginApp();
		login.closeBro();
	}
	
	@Given("the url of the login page")
	public void the_url_of_the_login_page() {
		//login = new loginApp();
		
		login.loginIntoApplication();
		
		
	   
	}

	@When("admin user enters {word} as username")
	public void admin_user_enters_ask_gmailcom_as_username(String username) {
		
		loginApp.username.sendKeys(username);
	   
	}

	@When("admin user enters {word} as password")
	public void admin_user_enters_askme_as_password(String password) {
		loginApp.password.sendKeys(password);
	   
	}
	
	@Then("{word} user")
	public void valid_user(String res) {
	   
		loginApp.login.click();
	}

	    


	
}
