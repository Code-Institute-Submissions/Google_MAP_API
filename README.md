# Milestone Project 2 : Interactive FrontEnd

## Project : Google MAPS and Google Places API interface.
This project designs a weekend travel application that promotes travelling to London for Brexit protests targeted for the UK domestic market.
The design is focussed on London City only but contains functionality to include other UK cities. The site obtains revenue from sponsors that
advertise various London travel packages and the users are encouraged to use these sponsors with offers of special deals on using the site sponsor code.

## UX

### User Stories
The site is aimed at users that travel to London to join Brexit protests and therefore needs to be easy to use and offer a seamless user interface to 
avoid confusion. The map is restricted to central London and the user can search for Hotels, pubs, food and entertainment by selecting activity options 
or dragging the map. Location information is easy to digest and avoid user typing and text explanation. The activity options offered should appeal mostly to
male and married couple users within the protest. Because its a protest site the options should not cater for families.  

The site appeals to the users nationalistic sentiment by using Union Jack flag and associated colours throughout. The user options are written in 
upfront and direct style to appeal to the loud and aggressive nature of the protest.

The site aims to exploit patriotic fervour aroused by Brexit and substantial product discounts to emotionally connect with users and encourage 
them to buy sponsored product.


## Strategy
Use nationisitc sentiment surrounding Brexit protests to promote a simple and easy to use London travel application and obtain revenue through 
users purchasing from discounted sponsored sites. The site uses overt UK nationalism in the design and sets itself apart from mainstream coporate
sites that wish to be neutral. Our site is focussed on London since its the centre of Brexit protests which is the site's founding strategy.

## Scope
The map is restricted to central London and activity options offered are limited to Hotels, Bars, Restaurants and Museums (couples and sightseeing). 
Since the Brexit protests visits are only short stay there is no requirement for an extensive range of activities.

## Structure
To promote ease of use the site will consist of one page. The header banner will declare nationalistic affiliation and the sponsors will be displayed 
prominently to encourage use. The map is the centrepiece and will take up most of the page with specific location information displayed in the 
footer to avoid cluttering up the map.

## Skeleton
The user selects activities or drags the map to generate location markers which avoids text entry. Location information is displayed in the footer on clicking 
the marker. The UK flag colours should feature in the site to be consistent with the patriotic theme. The site should be responsive to all devices.
Information display is minimised to avoid overloading the user.

[WireFrame - Landing Page](wireframes/Loading_page.jpg)

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
Javascript API code was mainly based on Google Javascript API sample code. These functions were tested by comparing results to live Google maps. 
The main issues uncovered were differences in UK/US spelling and place type naming convention. The standard red marker ICONs were replaced by activity specific 
ICONS based on the location 'types' and these were tested by comparing the dervived markers to the underlying establishment type from Google Places results.

1. Activities are revealed by selecting the radial buttons which activates the marker placement or dragging the map. These markers are cleared once 
another option is selected or the map is once again dragged. If a map 'clear' option is selcted no searches are perfromed on the map. 
An absence Google Place API location photos will yield a null marker and is not loaded to the screen.This process was tested and operates effectively. 
The map also successfully restricts the user to London city.

2. DOM Interaction
This was tested by clicking on multiple marker ICONs of various types to reveal place photo, address and rating in the footer. The marker information
displayed in the DOM is deleted once another marker is selected. I tested that all markers were removed once another activity is selected or the map is dragged.
The photo is not displayed on mobile devices to conserve space and this has been tested successfully.

3. The user selects activity in the DOM check boxes. This ensures only one activity is selected and avoids crowding the map. This DOM interaction successfully 
feeds into Javascript program to produce relevant markers.

4. The screen design uses CSS grid functionality which is responsive to all devices. This enables the sponsor bar to be repositioned to a sidebar 
for large screens. This framework is compatible with Chrome, Safari, Firefox and Edge but not with IE 10 or less.


## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits 
to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.


## Credits
All photo images were obtained from Google Maps API or Google Images. The marker ICONs were obtained from www.ICONS8.com. Much of the Javascript code 
is based on the Google samples with site specific amendments. Stackoverflow was used to resolve Javascript, CSS grid and JQuery issues.

























