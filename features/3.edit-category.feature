Feature: Linnworks Adminimiser - EDIT Category

  Scenario: Edit - category
    When I Go To "http://localhost:59509/"
    When I Go To Login Page
    When I Login With "bccf905c-6592-40f2-8db1-c976791fa40a"
    Then I Expect "Automated Category" In Category List
    When I Edit Category "Automated Category" to "Automated Category Reprised"
    Then I Expect "Automated Category Reprised" In Category List

