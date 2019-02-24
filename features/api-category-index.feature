Feature: Linnworks Adminimiser - Check API call for Category List

  Scenario: API - category/Index
    When I Go To "http://localhost:59509/"
    When I Go To Login Page
    When I Login With "bccf905c-6592-40f2-8db1-c976791fa40a"
    When I Go To Api Page
    Then I Check Api Category Index Status
