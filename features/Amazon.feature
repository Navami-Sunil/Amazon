Feature: The Amazon website

Scenario Outline: As a user, I can sign in and purchase in Amazon

Given I am on the home page
When I sign in using <email>,<password>
And I click on mobiles 
And select a mobile,change colour,add to cart
And select another product,add to cart
Then I should see my cart with selected items

Examples:
      | email | password |
      |dfg |hgfd  |












  # Scenario Outline: As a user, I can log into the secure area

  #   Given I am on the login page
  #   When I login with <username> and <password>
  #   Then I should see a flash message saying <message>

  #   Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |

