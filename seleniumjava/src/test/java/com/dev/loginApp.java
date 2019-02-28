package com.dev;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import junit.framework.Assert;

//import junit.framework.Assert;
//import net.bytebuddy.asm.Advice.This;

public class loginApp {
	
	public static WebDriver driver;
	
	@FindBy(id="Email")
	public static WebElement username;
	
	@FindBy(id="Password")
	public static WebElement password;
	
	@FindBy(xpath="//input[@value='Log in']")
	public static WebElement login;
	
	public void openBro()
	{
		
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\a07208trng_b4a.04.28\\Desktop\\chromedriver.exe");
//		driver = new ChromeDriver();
		//driver.manage().window().maximize();	
	}
	
	public void closeBro()
	{
		
		//driver.close();	
	}
	
	
	public void loginIntoApplication()
	{ 
	
	
	driver.get("http://demowebshop.tricentis.com/login");
	String actual = driver.getTitle();
	Assert.assertEquals("Demo Web Shop. Login", actual);
	
	
	}
	
	
	

}
