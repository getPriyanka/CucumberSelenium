package skeleton;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:src/reports/cucumber-reports","json:src/reports/cucumber-reports/reports.json","junit:src/reports/cucumber-reports/reports.xml"},
monochrome=true,tags= {"@priyanka"})
public class runCucumber {
	


}
