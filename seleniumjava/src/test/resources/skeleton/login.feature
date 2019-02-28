Feature: login into demowebshop application

@priyanka
Scenario Outline: scenario description
	Given the url of the login page
    When admin user enters <Usernmae> as username
    And admin user enters <password> as password
	Then <results> user
		
		Examples:
		|Usernmae|password|results|
		|ask@gmailcom|askme|valid|
		|piyali@dis.com|askpiyali|valid|