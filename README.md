# Milestone Project 2 : Interactive FrontEnd

## Project : Google MAPS and Google Places API interface.
This project designs a weekend travel application for the UK domestic market that promotes travelling to London for Brexit protests.
The design is focussed on London City only but has the functionality to include other UK cities. The site obtains revenue from sponsors that
advertise various London travel packages and the users are encouraged to use these sponsors with offers of special deals on use of the site sponsor code.

## UX

### User Stories
The site is aimed at users that travel to London to join Brexit protests and therefore has to be easy to use and offer very few options to 
avoid confusion. The map is restricted to central london and the user can search for Hotels, pubs, food and entertainment by selecting options 
or dragging the map. Location information is easy to digest and avoid excessive typing and text explanation. The options offered should appeal mostly to
male users but options should consider married couples. As its a protest site the options should not cater for families.  

The site appeals to the users nationalistic sentiment by using Union Jack flag and associated colours throughout. The user options are written in 
upfront and direct style to appeal to the loud and aggressive nature of the protest.

The site aims to exploit patriotic fervour aroused by Brexit and substantial product discounts to emotionally connect to users and encourage them to buy
sponsored product.


## Strategy
Use nationisitc sentiment surrounding Brexit protests to promote a simple and easy to use London travel application and obtain revenue through 
users purchasing from discounted sponsored sites. The site uses overt UK nationalism in the design and sets itself apart from mainstream coporate
sites that wish to be neutral. Our site is focussed on London since its the centre of Brexit protests which is the site's foundation strategy.

## Scope
The map is restricted to central London and activity options offered are limited to Hotels, Bars, Restaurants and Museums (couples and sightseeing). 
Since the Brexit protests visits are only short stay there is no requirement for an extensive range of activities.

## Structure
To promote ease of use the site will consist of one page. The header banner will declare nationalistic affiliation and the sponsors will be displayed 
prominently to encourage use. The map is the centrepiece and will take up most of the page with specific location information displayed in the 
footer to avoid cluttering up the map.

## Skeleton
The user selects activities or drags the map to generate markers which avoids text entry. Location information is displayed in the footer on clicking 
the marker. The UK flag colours should feature in the site to be consistent with the patriotic theme. The site should be responsive to all devices.
Information display is minimised to avoid overloading the user.

WIREFRAMES

## Surface
UK flag and national colours used througout the site. Use colloquial language to engage the user and develop rapport. Sponsors displayed beside
the map to encourage selection. The site only displays chosen activites to avoid crowding up the map.


## Technologies
1. HTML
2. CSS.
3. Javascript and JQuery.
4. Google MAP, Geocoder and Places API.


## Testing

1. Javascript Google API
Javascript API code was mainly based on Google Javascript API sample code. These functions were tested by comparing the results to online Google maps. 
The main issue was differences in UK/US spelling and activity naming convention. The standard red marker ICONs were replaced by activity specific 
ICONS based on the location 'types' and these were tested by comparing the sites retrieved on the Javascript search to online Google maps.

1. Activities are revealed by selecting the radial buttons which activates the marker placement or dragging the map. These markers are cleared once 
another option is selected or the map is once again dragged. This process was tested and operates effectively. The map also successfully restricts 
selection to London city.

2. DOM Interaction
This was tested by clicking on multiple marker ICONs of various types to reveal place photo, address and rating in the footer. The existing DOM information
is deleted once another marker is selected. The photo is not displayed on mobile devices to conserve space.

3. The activity selector uses check boxes to ensure only one activity is selected and avoid crowding the map. This DOM input successfully feeds into 
the Google maps API and various activities were tested.

4. The screen design uses CSS grid functionality which is responsive to all devices. This enables the sponsor bar to be repositioned to a sidebar 
for large screens. This framework is compatible with Chrome, Safari, Firefox and Edge but not with IE 10 or less.


## Deployment


## Credits
All photo images were obtained from Google maps or Google images. Much of the Javascript code is based on the Google samples with site specific
amendments. Stackover flow content was used to resolve callback issues and to use JQuery to extract and to push data to the DOM.

























