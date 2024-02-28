@user
Feature: User feature

    This feature tests user scenarios
    @user-01
    Scenario: Add new apps-user
        Given User is on "settings" Page
        When  User opens "users" tab
        And   User clicks on add user button
        And   User enters email in email field
        And   User clicks on next button
        And   User enters firstname in firstname field
        And   User enters lastname in lastname field
        And   User clicks on next button
        And   User selects "apps user" access
        And   User clicks on next button
        And   User selects the apps for access
             | appName      |
             | Proficiency  |
             | Knowledge    |   
             | Performance  |
             | Compensation |
        And   User clicks on next button
        And   User clicks on confirm button
        And   User is on "users" Page
        And   User search for full name in search field
        Then  Verify user full name on Users Page
        Then  Verify Set your Password email

    @user-02
    Scenario: Add existing user
        Given User is on "settings" Page
        When  User opens "users" tab
        And   User clicks on add user button
        And   User enters email in email field
        And   User clicks on next button
        And   User enters firstname in firstname field
        And   User enters lastname in lastname field
        And   User clicks on next button
        And   User selects "apps user" access
        And   User clicks on next button
        And   User selects the apps for access
             | appName      |
             | Proficiency  |
             | Knowledge    |   
             | Performance  |
             | Compensation |
        And   User clicks on next button
        And   User clicks on confirm button
        And   User is on "users" Page
        And   User search for full name in search field
        Then  Verify user full name on Users Page
        Then  Verify Set your Password email
        Given User is on "settings" Page
        When  User opens "users" tab
        And   User clicks on add user button
        And   User enters email in email field
        And   User clicks on next button