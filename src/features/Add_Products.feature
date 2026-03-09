Feature: Add products in cart

  Scenario: User adds one product to cart
    Given Verify that home page is visible successfully
    When Hover over first product and click 'Add to cart'
    And Click 'View Cart' button
    And Verify that product is displayed in cart page
    Then Verify their prices, quantity and total price
