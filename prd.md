# Countdown Timer PDR

## Product Requirements Document:

## Changelog

- 05/10/2022 - Initial version 

## Related Documents

<!-- Use this section to link to other relevant documents, such as other PRDs, market research etc. -->

<!-- - Link to Document 1  -->
<!-- - Link to Document 2 -->
- No linked documents at this time

## Introduction

<!-- General introduction to the particular product initiative. -->

This product is a customizable countdown timer, allowing users to easily share the url to a countdown without saving any of the user's infomration.

The product will also have color customization, and a social share link to get a wordle-style sharing option to be easily communicated over text.

## Customer needs, market and business model

This application isn't intended to go mainstream in any way, it's a pet project that is simply supposed to be functional, and show off some coding ability by the creator. If it ends up getting used and shared, more features can be added at that time.

### Known customers and customer requests

<!-- If you have customers who have asked for the functionality covered, list them here with details, e.g. links to customer call notes, or link to PRD. -->
 - Nothing presently to list in this section

### Quantitative customer data

<!-- If you have any numbers, for example how many customers have asked for feature x. -->
 - Nothing presently to list in this section

### Business model and pricing

<!-- How will this initiative be priced? Part of standard pricing plans? An extension, or add-on? A whole new business model? -->
 This tool will have a free version and a paid verion

- free version:
    - Information for site contained in the query string

      EG message parameter and timer parameter 

    - Share button for mobile devices that creates an emoji calendar with the message

- Paid version:
    - All features of free version plus
    - User can purchase a prefix eg katie.tminus.me

      User will have contained domains without query strings stored in a database and built into static pages.

      web url for these sites will look something like

          example.tminus.me/time-to-vacation

    - User can create sub folders eg

          example.tminus.me/vacations/time-to-vegas

       user will be able to move timers between folders
    
    - Paid version will have year subscription and month subscription
      - Year subscription price: $30
      - Month subscription price: $8/mo

### Expected results

<!-- Write town here in a few sentences and with a few numbers what you expect when launching the initiative. For example “We expect in the first 3 months after launch 25 customers will sign up for this feature” or “We expect revenue will increase by 2% in the first 6 months”. This is useful to check back later on initial assumptions. -->
We expect a soft launch amongst friends and family will create user feedback for an alpha stage. If the application gets traction, that feedback will be encorperated into new feautres. If the site gets more than 1000 unique views per month, we will begin considering an ad-supported model or a donation supported model if costs begin to accrue for this applcation.

## (Product) Marketing and Communication

### Key metrics
<!-- How do you measure success and adoption for the product initiative? List concrete metrics to track here. -->
 - 1000 unique viewers per month
 - Social sharing picking up on twitter to the tune of 100 shares per month

### Terms, wording, and copy 

<!-- The key words and terms to use in/for the product. Links to additional materials. -->

## Personas
<!-- Customer or user personas. -->

## Functional Requirements
<!-- Description of key functional aspects on a very high level, for example Epic level. Detailed user stories will go into your ticketing system (Such as Jira, Github, Trello etc.). You can also link (some of) them here. -->
Hosting: Initial product can be hosted on Netlify, as product gets into paid release, might need to move to Digital Ocean

Will need payment processor, Square preferred

Free verion requires no server based communication

Paid version requires user login, database

## Non-Functional Requirements
<!-- This is often forgotten: things such as: how many users are expected to be supported at peak? Any latency expectations (page load in x ms) etc.? -->

## Design
<!-- Any high level UX/UI considerations to mention, but primarily link to any UX research or any prototypes as things progress. -->


## Technical Specifications
<!-- Anything that’s relevant for/from engineering. Such as key technical challenges or risks. -->
Site will need a wildcare SSL certificate in order to function properly

