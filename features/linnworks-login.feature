Feature: Linnworks Adminimiser - Log in

  Scenario: Log In - User
    When I Go To "http://localhost:59509/"
    When I Go To Login Page
    When I Login With "bccf905c-6592-40f2-8db1-c976791fa40a"
    Then I Expect To See "Categories" Heading