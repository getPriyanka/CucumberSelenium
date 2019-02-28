$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:skeleton/login.feature");
formatter.feature({
  "name": "login into demowebshop application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "scenario description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@priyanka"
    }
  ]
});
formatter.step({
  "name": "the url of the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "admin user enters \u003cUsernmae\u003e as username",
  "keyword": "When "
});
formatter.step({
  "name": "admin user enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "name": "\u003cresults\u003e user",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Usernmae",
        "password",
        "results"
      ]
    },
    {
      "cells": [
        "ask@gmailcom",
        "askme",
        "valid"
      ]
    },
    {
      "cells": [
        "piyali@dis.com",
        "askpiyali",
        "valid"
      ]
    }
  ]
});
formatter.scenario({
  "name": "scenario description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@priyanka"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the url of the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinationsLogin.the_url_of_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters ask@gmailcom as username",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinationsLogin.admin_user_enters_ask_gmailcom_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters askme as password",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinationsLogin.admin_user_enters_askme_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valid user",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinationsLogin.valid_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "scenario description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@priyanka"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the url of the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinationsLogin.the_url_of_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters piyali@dis.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinationsLogin.admin_user_enters_ask_gmailcom_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters askpiyali as password",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinationsLogin.admin_user_enters_askme_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valid user",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinationsLogin.valid_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});