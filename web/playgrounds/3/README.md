# Spaceball Shooter Game

This is a fun game I made using [HTML canvas](https://en.wikipedia.org/wiki/Canvas_element) .

It has a simple design, much like [asteroids](https://en.wikipedia.org/wiki/Asteroids_(video_game)), where the player is in the center of the screen and the enemies attack from all sides.

It is designed to be responsive to different screen sizes, so any player can use it on any device.

---

## User Experience

---


* ### **User Stories**
     
     * **Site Owner Goals**
        
        *  To give players a fun game.
        *  To make it simple to understand and easy to use
        * the game should start and stop at the appropriate times
        * the enemies should explode
            
     * **Visitor Goals**

       *  visitors should be able to immediately begin playing
       *  They should be able to see their score
       *  They should be able to restart the game from scratch
---

 ## Design
---
   * **Colours**
       
       * I felt that the game should have a black background.
       
       * The player is white, so that it stands out on the screen

       * The enemies are random colors that are vibrant 



   * **Typography**

       *  I used the standard Sans serif font for my score and my modal.
       I did this as I felt it fit the style of the game.

   * **Imagery**

     *  The imagery used was a simple black background with colourful enemies to allow for good contrast.

* **Wireframes**

    * I made some simple wireframes in the design process to show how it will look on desktop and mobile.

    ![screenshot of the wireframe process](/assets/wireframes/wireframe-1.jpg)


    ![Screenshot of Wireframe for desktop](/assets/wireframes/wireframe-2.jpg)

    
# Features 
  ### Start Game
     
* At the beginning of the game, a modal is displayed, with a button that says "start game" 

### End Game

* When the player gets a game over, the modal is displayed once again, with the players score and the start game button. 

### Score

* In the top left corner of the screen, there will be a simple scoreboard, 
  displaying "Score:0".  This will increment when a player ditroys an enemy. 
  

### Enemy shrink score

* Players can score more points when destroying large enemies, as each time they are hit
  they reduce in size, giving the player points as they do so. 

### Random enemies

* The enemies will be randomised in respect to starting position off screen, 
  their size and their colour. 


### Static Player

* The player will be static in the center of the screen and enemies will approach from all angles. 

### Projectiles 

* The player will be able to shoot projectiles at the enemies. (THANK GOODNESS!!) 


### Enemies will explode

* When the enemies are hit, they will produce particles and when 
  they are destroyed, they will explode in a firework type way.  The 
  Particles from this will fade over time. 


# Technologies Used

## **Launguages**

    
 * [HTML5](https://en.wikipedia.org/wiki/HTML5)
 
 * [CSS3](https://en.wikipedia.org/wiki/CSS)

 * [JavaScript](https://en.m.wikipedia.org/wiki/JavaScript) 

 ## **Frameworks, Libraries and Programs Used**

 1. [Tailwind CSS](https://tailwindcss.com/)

   * I used Tailwind to create the modal that displays the final score and the button for starting the game.

 2. [jsdelivr:](https://getbootstrap.com/)   

   * jsdelivr was used to enable GitHub to serve my web files without any configuration.

 3. [Git:](https://github.com/)  

   * Git was used for version control of the game by using the git commit and git push functions in the terminal, to to ensure any changes I made were not lost and were also meaningful to the development process. It would also help any other developers to assess or make changes in a real world setting.

 4. [GitHub:](https://github.com/)

   *  GitHub was used to store the code from the project after being pushed from the terminal.

 5. [Figma:](https://www.figma.com/)  

  * I used Figma for the Wireframe, to full site visual design process.


# Testing

For my testing I used manual testing.

For testing the code, I used the following;

- [W3C CSS Validation](https://jigsaw.w3.org/css-validator/)

- [Beautify Tools JS validator](https://beautifytools.com/javascript-validator.php)

- [W3C Markup Validation](https://validator.w3.org/)

These were used in particular, to check for errors in the code to enable me
to rectify these and have a fully functioning website.

# Testing the game functionality

For the functionality tests, I ran through what I considered to be the core 
functions of the game and attempted to use them as a standard player would.
The results are as below.

| Test Label     | Test Action   | Expected Outcome  | Test Outcome | 
| -------------  |-------------- |----------------- | ------------ |
| Game Setup     | The modal is <br> displayed and the <br> button starts the <br>game. | The game starts. | PASS
| The player is <br> displayed      | Start the game<br> to check.      |  The player is <br> displayed  | PASS
| The score is<br>displayed.  | Check the top <br>corner.      | The score is<br>displayed.   | PASS |
| enemies<br>approach <br>player.  | Start the game  | The enemies<br>approach <br>player.   | PASS |

# Testing the game during the build

To test the game while I was coding, I used the console.log()
to show that certain functions acted the way they should.  I logged out the word 'go' to show that the action or event had taken place.

| Test Label     | Test Action   | Expected Outcome  | Test Outcome | 
| -------------  |-------------- |----------------- | ------------ |
| Draw Player     | log the word<br>'go' to the<br>console. | The word go will be <br>logged to<br>the console. | PASS
| Projectile<br>click event.| Set the event<br>to log 'go'<br>to the console.|   The word go will be <br>logged to<br>the console. | PASS
|The score<br>is displayed. | Check the top <br>left corner.      | The score is<br>displayed.   | PASS |
| enemies<br>approach <br>player.  | Start the game  | The enemies<br>approach <br>player.   | PASS |

## Site owner Goals testing

  * **To give information about their service.**
    
    * At the top of the home page, there is a description in the hero section explaining
      what Helen does.

    * There is an iframe on the home page that allows users to find the location of the business.
     This can be used without leaving the current page.  

    * There is a footer on each page containing, phone number, email and social media links.
    ( The social media links open on a new tab, so the user does not have to leave the current page).

    * There are testimonials on the home page, allowing users to understand more about how Helen works. 
---
* **To show work they have completed in the past.**

  * There is a carousel on the home page showing some recent projects.  
  There are controls, allowing some user interaction.

  * There is a portfolio page, detailing some recent projects.  The page displays
   the projects on cards with an image on top and a description underneath.
When the user hovers over the cards with the mouse, the card scales up to enable the user 
to better focus on that particular card.  
---
* **To gain more customers.**

  * All the previous information helps to gain more customers, by allowing the users 
    to make an informed descision on if they would like to hire Helen or not.

  * There is a contact page with a form, allowing users to give Helen their details
    and a description of the work they need doing.

  * There is a footer on each page providing contact details for Helen, enabling users 
    to hire her.
---
* **Allow customers to leave their contact details in regards to a quote.**

  * There is a contact page containing a form to allow users to leave their name,
    phone number and email address for Helen.  This not only allows the user to contact Helen, but it 
    enables Helen to contact the user, if they decide not to leave details about the 
    job.  The name and email address are both required fields.  This is to allows Helen
    enough information to be able to contact the user in case the user is unable to leave 
    a phone number or job description.

## Visitor Goals

* **Visitors should be able to quickly contact and hire the tradesperson, quickly and hassle free.**

  *  There is a footer on each page containing contact details.

  *  There is a contact page with a form allowing the customer to leave their contact
     information and details about the job.

  * There are buttons on the home page and portfolio page that direct the user to the contact#
    page.  There is also a link to the contact page in the navbar.
---

* **Visitors Should be able to come to the site and immediately understand the purpose of the site.**

  * On the home page, there is a logo in the navbar with the words "Painter" and "Decorator".

  * There is a description in the hero section, with a button underneath.  This shows
    the user what the site is about and it shows them that they can hire Helen.
---

* **They should be able to easily achieve what they came to do (i.e get a quote for a decorating service).**

  * Straight away on the home page, there is a contact link in the navbar and a button in the
    hero section saying "contact us".  

  * There is a footer on each page with contact details, allowing the user to contact and hire 
    Helen.

  * There are testimonials and recent project sections that allow the user to see more about
    Helen and make an informed descision on whether they would like to hire her.

  *  There is a contact page with a form, allowing the user to leave their details and contact
     Helen about a job they need doing.
---

* **They should be able to view past works on a portfolio page, which is set out clearly and easy to see.**

  * There is a portoflio page that shows recent projects.  They are set out on cards, which clearly 
    shows an image of the project and gives a detailed description below.
---

* **They will also be able to find their social media sites and other contact information.**

   * At the bottom of each page, there is a footer that contains Helen's social media links,
   phone number and email address.

   * On the home page, there is an iframe where the user can find the address and location
     of the business.
---
# Client based testing

  * For the client based tests, I sent the link to the website to various people and asked them, to 
  use it.  I asked the first person to test it on mobile devices such as , mobile phones and tablets.
  
    They were asked to check both orientations, to see if the responsiveness worked, and then to load the
    pages one by one to see if the animations worked.
    They were also asked to check the site accross Chrome, Firefox and Opera browsers to check compatability.

  * For the next test I asked three people to check the desktop version of the site.  Each of them had a
  different browser.  One had Chrome, one had Firefox and one had Opera.  

    I asked them to check the animations for the pages and to check for any gramatical errors.

  * After the tests were completed, they reported back that the animations worked fine accross all browsers
  and the responsiveness worked on all the mobile devices that were used.  However, there were some gramatical errors
  on the home page and portfolio page.  I had used first person speech rather than the third person.  I 
  then went through and rectified these errors.    

# Deployment

  * To deploy the game, I used [GitHub pages](https://pages.github.com/).
  
    The process for this was simple.  I used the terminal on the [Gitpod](https://www.gitpod.io/)
    IDE.  I used the git add . command to add all the files that had been worked on.  Next I used the git commit
    command, to commit my files ready for deployment, followed by the git push command, to push the code to 
    [GitHub](https://github.com/).

    I also did this during development, so as not to loose and changes or work that I had done.

  * To link Github pages to the correct files I went to settings and scrolled down to the 
  [GitHub pages](https://github.com/Hunnser86/Milestone-project-version-3/settings) section of the page.  
  Next, I clicked the drop down menu on the source section
  and chose the master branch and the root folder from my repository.  This is how GitHub pages
  built my game.

  * I then waited for the game to be built and followed the link at the top of the section.
---

# Running the game locally

  *  To run the game locally, you will need to clone the GitHub [repository](https://github.com/Hunnser86/Spaceball-shooter-game)

  *  To do this, simply go to the GitHub [repository](https://github.com/Hunnser86/Milestone-project-version-3)

     * Next, click the dropdown menu named "code".  This will bring up the clone menu.
     
     * Select HTTPS and copy the link.

     * Create a location on your local computer, where you would like to clone the repository.

     * Then on your local terminal use the "git clone" command and paste the link after it and hit return.

     * This will create a folder in the location you have created.  This will contain all the files from the
     repository, allowing you to run the site.

# Credits

  **Content**

  * All code was written by myself (Rob Hunns).

  **Tutorials**

  * [For ideas on creating enemy ships](http://blog.sklambert.com/html5-canvas-game-the-enemy-ships/)  

  * [For tips on canvas](https://www.w3schools.com/tags/ref_canvas.asp)

  * [For information on canvas arc to draw the characters](https://www.w3schools.com/tags/canvas_arc.asp)

  * [For information on collision detection](https://happycoding.io/tutorials/processing/collision-detection)

  * [For how to move objects](https://stackoverflow.com/questions/6199018/moving-objects-on-html5-canvas)



  


#  Acknowledgements
  
 

  * I would first like to acknowledge my mentor Brian, for the suppoprt he has
    given me during the project.  Particularly for giding me towards good documentation.
    for the parts of the project where I needed to do a bit more research.

  * Codeinstitute: For providing such good training and tutorials, giving me the confidence to 
    keep going and to hone my problenm solving skills.
    
      






