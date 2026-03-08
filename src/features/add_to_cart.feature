Feature: Add products to cart

  Scenario: User adds one product to cart
    Given I navigate to home page
    When I add a product to cart
    Then I view cart
