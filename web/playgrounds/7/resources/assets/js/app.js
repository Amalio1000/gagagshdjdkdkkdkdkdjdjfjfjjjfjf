class Game {

    constructor() {
        this.score = 0;
        this.isRunning = 0; // game is not running

        this.calculateScale();

        this.timeline = new TimelineMax({smoothChildTiming: true});
        this.time = 1.6; // initial speed
        this.colors = ["#FF4571", "#FFD145", "#8260F6"]; // the 3 colors used in the game
        this.colorsRGBA = ["rgba(255, 69, 113, 1)", "rgba(255, 69, 113, 1)", "rgba(255, 69, 113, 1)"];
        this.color = this.colors[0]; // the intial color of the ball
        this.prevColor = null; // used as a holder to prevent ball colors from repeating
    }

    /**
     * The game screen is scalable. I took 1200x800px as the initial scale.
     * In order to display the game an many screen sizes properly
     * I have to compare the player's sreen size to the initial scale,
     * then scale the game using CSS Transform to fit the screen properly
     * The function is called in the controller and anywhere where I need
     * to recalculate the scale on screen resize or device rotation
     */
    calculateScale() {
        this.screen = $(window).width(); // screen width
        this.screenHeight = $(window).height();
        this.scale = (this.screen > this.screenHeight) ? this.screenHeight/800 : this.screen/1200;
        this.stickWidth = 180*this.scale;
        this.steps = this.screen/this.stickWidth; // how many steps (stick width + margin) it takes from one end to another
    }

    /**
     * Creating as many sticks we need to fill the screen
     * from start to end of the screen. The steps property is used for that
     */
    generateSticks() {
        let numberOfSticks = Math.ceil(this.steps);
        for(let i = 0; i <= numberOfSticks; i++)
            new Stick();
    }

    generateBall() {
        this.balltween = new TimelineMax({repeat: -1, paused: 1});
        $('.scene .ball-holder').append('<div class="ball red" id="ball"></div>');
        this.bounce();
    }

    generateTweet() {
        let top = $(window).height() / 2 - 150;
        let left = $(window).width() / 2 - 300;
        window.open("https://twitter.com/intent/tweet?url=https://greghub.github.io/coloron/&amp;text=I scored "+ this.score +" points on Coloron! Can you beat my score? @friends_names&amp;via=greghvns&amp;hashtags=coloron", "TweetWindow", "width=600px,height=300px,top=" + top + ",left=" + left);
    }

    /**
     * The greeting when the game begins
     */
    intro() {

        TweenMax.killAll();

        $('.stop-game').css('display', 'none');
        $('.start-game').css('display', 'flex');

        let introTl = new TimelineMax();
        let ball = new TimelineMax({repeat: -1, delay: 3});

        introTl
            .fromTo('.start-game .logo-holder', 0.9, { opacity: 0 }, { opacity: 1 })
            .staggerFromTo('.start-game .logo span', 0.5, { opacity: 0 }, { opacity: 1 }, 0.08)
            .staggerFromTo('.start-game .stick', 1.6, { y: '+100%' }, { y: '0%', ease: Elastic.easeOut.config(1, 0.3) }, 0.08)
            .staggerFromTo('.start-game .ball-demo', 1, { scale: 0 }, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) }, 0.8, 2)


        ball.fromTo('.start-game .section-1 .ball-demo', 0.5, { y: "0px" }, { y: "100px", scaleY: 1.1, transformOrigin: "bottom", ease: Power2.easeIn})
            .to('.start-game .section-1 .ball-demo', 0.5, { y: "0px", scaleY: 1, transformOrigin: "bottom", ease: Power2.easeOut,  
                    onStart: () => {
                        while(this.prevColor==this.color) {
                            this.color = (new Color).getRandomColor();
                        }
                        this.prevColor = this.color;
                        //TweenMax.css('.start-game .section-1 .ball-demo', 0.5, {backgroundColor: this.color});
                        $('.start-game .section-1 .ball-demo')
                                .removeClass('red')
                                .removeClass('yellow')
                                .removeClass('purple')
                                .addClass((new Color).colorcodeToName(this.color));
                    } 
                });

        let animation = new Animation();
        let one = $('.how-to-play .section-2 .content .stick.inactive:nth-child(1)');
        let two = $('.how-to-play .section-2 .content .stick.inactive:nth-child(2)');
        let three = $('.how-to-play .section-2 .content .stick.inactive:nth-child(3)');
        let four = $('.how-to-play .section-3 .content .stick.inactive');

        (new Color).setColorAndEffect(one, 0, 'bubble');
        (new Color).setColorAndEffect(two, 1, 'triangle');
        (new Color).setColorAndEffect(three, 2, 'block');
        (new Color).setColorAndEffect(four, 2, 'block');
        // animation.playBubble(one);
        // animation.playTriangle(two);
        // animation.playBlock(three);
    }

    /**
    * Display score
     */
    showResult() {
        let score = this.score;
        $('.stop-game').css('display', 'flex');
        $('.stop-game .final-score').text(score + '!');
        $('.stop-game .result').text(this.showGrade(score));

        let resultTimeline = new TimelineMax();
        resultTimeline
            .fromTo('.stop-game .score-container', 0.7, { opacity: 0, scale: 0.3 }, { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1.25, 0.5)})
            .fromTo('.stop-game .final-score', 2, { scale: 0.5 }, { scale: 1, ease: Elastic.easeOut.config(2, 0.5)}, 0)
            .fromTo('.stop-game .result', 1, { scale: 0.5 }, { scale: 1, ease: Elastic.easeOut.config(1.5, 0.5)}, 0.3)
            ;

    }

    /**
     * Takes players score and generates the cheering copy
     * @param  {int} score
     * @return {string} grade
     */
    showGrade(score) {
        if(score > 30) return "Chuck Norris?";
        else if(score > 25) return "You're da man";
        else if(score > 20) return "Awesome";
        else if(score > 15) return "Great!";
        else if(score > 13) return "Nice!";
        else if(score > 10) return "Good Job!";
        else if(score > 5) return "Really?";
        else return "Poor...";
    }

    start() {

        this.stop(); // stop the game

        $('.start-game, .stop-game').css('display', 'none'); // hide all the popups

        new Game();
        this.score = 0; // reset

        this.isRunning = 1;

        // Clean up the stick and ball holders
        // and generate new ones
        $('#sticks, .scene .ball-holder').html('');
        $('#score').text(this.score);
        this.generateSticks();
        this.generateBall();

        // disables scene animations for Phones
        if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent) ) {
            Animation.sceneAnimation();
        }
        this.moveToStart();
        this.moveScene();

        // reset timescale to normal as the game speeds up
        this.timeline.timeScale(1);
        this.balltween.timeScale(1);
    }

    stop() {

        this.isRunning = 0;

        $('.start-game, .stop-game').css('display', 'none');
        $('#sticks, .scene .ball-holder, #score').html('');
        TweenMax.killAll();
        
        this.showResult();
    }

    scaleScreen() {

        TweenMax.killAll(); // prevent multiple calls on resize

        let height = $(window).height();
        let width = $(window).width();

        this.calculateScale();

        $('.container')
                .css('transform', 'scale(' + this.scale + ')')
                .css('height', height/this.scale)
                .css('width', width/this.scale)
                .css('transformOrigin', 'left top');

        $('#sticks').width(this.screen/this.scale + 3 * this.stickWidth/this.scale);

    }

    /**
     * Calls the above function
     * If the game is running it stops and shows the score
     * If the game has stops it takes player to the main menu
     */
    scaleScreenAndRun() {

        this.scaleScreen();

        if(this.isRunning) {
            this.stop();
        } else {
            this.intro();
        }

    }

    /**
     * This is the initial animation
     * where the sticks come to the starting position
     * and the ball appears and falls down
     */
    moveToStart() {        

        TweenMax.fromTo('#ball', this.time,
                        { 
                            scale: 0 
                        },
                        { 
                            scale: 1,
                            delay: this.time * ((this.steps - 3) - 1.5), 
                            onComplete: () => {
                                this.balltween.play();
                            }
                        });

        this.timeline.add(
            TweenMax.fromTo('#sticks', this.time * this.steps, { x: this.screen / this.scale }, { x: 0, ease: Power0.easeNone})
        );
    }

    /**
     * The animation that moves sticks
     */
    moveScene() {

        this.timeline.add(
            TweenMax.to('#sticks', this.time, { x: '-=180px', ease: Power0.easeNone, repeat: -1, onRepeat: () => { this.rearrange() } })
        );

    }  

    /**
     * removes the first stick and adds one the the end
     * this gives the sticks an infinite movement
     */
    rearrange() {

        let scale = this.speedUp();

        this.timeline.timeScale(scale);
        this.balltween.timeScale(scale);

        $('#sticks .stick').first().remove();
        new Stick();

    }

    /**
     * The game speeds up based on score
     * The GSAP timeScale() function is called on the timeline to speed up the game
     * This calculates how much shall the game speed up
     */
    speedUp() {
        if(this.score > 30) {
            return 1.8;
        }
        if(this.score > 20) {
            return 1.7;
        }
        if(this.score > 15) {
            return 1.5;
        }
        else if(this.score > 12) {
            return 1.4;
        }
        else if(this.score > 10) {
            return 1.3;
        }
        else if(this.score > 8) {
            return 1.2;
        }
        else if(this.score > 5) {
            return 1.1;
        }
        return 1;
    }

    /**
     * Ball bouncing animation
     * It checks if the ball and stick colors match
     * And changes the ball color
     */
    bounce() {

        this.balltween
                .to('#ball', this.time/2, {y: '+=250px', scaleY: 0.7, transformOrigin: "bottom", ease: Power2.easeIn,
                    onComplete: () => {
                        this.checkColor();
                    }
                }).to('#ball', this.time/2, {y: '-=250px', scaleY: 1.1, transformOrigin: "bottom", ease: Power2.easeOut, 
                    onStart: () => {
                        while(this.prevColor==this.color) {
                            this.color = (new Color).getRandomColor();
                        }
                        this.prevColor = this.color;
                        //TweenMax.to('#ball', 0.5, {backgroundColor: this.color});
                        $('#ball').removeClass('red')
                                  .removeClass('yellow')
                                  .removeClass('purple')
                                  .addClass((new Color).colorcodeToName(this.color));
                    }
                })    
    }    

    checkColor() {

        let ballPos = $('#ball').offset().left + $('#ball').width()/2;
        let stickWidth = $('.stick').width();
        let score = this.score;

        $('#sticks .stick').each(function(){
            if($(this).offset().left < ballPos && $(this).offset().left > (ballPos - stickWidth)) {
                
                if( Color.getColorFromClass($(this)) == Color.getColorFromClass('#ball') ) {
                    // if matches increase the score
                    score++;
                    $('#score').text(score);
                    $(this).addClass('touched');
                    TweenMax.fromTo('#score', 0.5, { scale: 1.5 }, { scale: 1, ease: Elastic.easeOut.config(1.5, 0.5) });
                } else {

                    // you loose
                    game.stop();

                }

            }
        })

        this.score = score;
    }

}

class Stick {

    constructor() {
        this.stick
