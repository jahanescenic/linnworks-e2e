Feature: Linnworks Adminimiser - CREATE Category

  Scenario: Create - category
    When I Go To "http://localhost:59509/"
    When I Go To Login Page
    When I Login With "bccf905c-6592-40f2-8db1-c976791fa40a"
    Then Go to Create New
    When I Enter Category Name "Automated Category"
    Then I Expect "Automated Category" In Category List
