Feature: Inventory page
Scenario: Verify inventory iteams count for different users
Given user is on application login page
When user logs in the username "<username>" and password "<password>"
Then user should see "<result>"
And inventory item count should be "<count>"

Examples:
    | username       | password     | result         | count |
    | standard_user  | secret_sauce | inventory page | 6     |
    | locked_out_user| secret_sauce | failure        | 0     |
    | problem_user   | secret_sauce | inventory page | 6     |
    