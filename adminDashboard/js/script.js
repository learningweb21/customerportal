/*
==================================================
        FUNCTIONS JS
==================================================
*/
/* Function to generate random number for the id but not working properly */
    function getRandomNumber() {
      var randomNumber = Math.floor(Math.random() * 200) + 100;
      return randomNumber;
    }

// Reloading page function
    function reloadPage() {
      location.reload();
    }

// Printing page function
    function printMail(printMail) {
      var printContents = document.getElementById("printMail").innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
    }




$(function(){
      // Loader
        var overlay = $('.overlay');
        window.addEventListener("load", function() {
          $(overlay).css({"display" : "none"});
        });

        var tooltip = $(".tooltip");
        var sup = $("sup");

        sup.hover(function() {
          tooltip.toggleClass("show");
        });


/*  ==================================================
            LOGIN PAGE JS
================================================== */


        var rows = $(".contain-profile .rows");

        $(".contain-profile .rows:last").addClass("only-this");
  /*
  ==================================================
                  DASHBOARD PAGE JS
  ==================================================
  */
      // Toggling Notification bar the header

          $(".notice").click(function(){
            $("ul.notify").toggleClass("opened");
            $("i.ion-arrow-up-b").toggleClass("opened");
          });

          $(".container, nav").click(function(){
            $("ul.notify").removeClass("opened");
            $("i.ion-arrow-up-b").removeClass("opened");
          });

          // Toggling Mobile Navigation for the header

          $(".mobile").click(function(){
            $("nav.side-nav").toggleClass("open")
          });

          $("nav, .container, footer").click(function(){
            $("nav.side-nav").removeClass("open");
          });

          // Closing Mobile Notification for the header

            $(".close").click(function(){
              $(".fixed-position").addClass("hideOff");
            });

            //==JS for header ends here============================

            // Mini sidebar for viewing online status

            var toggleOnline = $(".toggle-online");
            var switchTo = $(".switch-to");
            var adminStatus = $(".online-or-offline");

                // Profile picture icon for online
            var profileOnline = $(".profile-online");

            adminStatus.addClass("offline-now").text("Offline");

            toggleOnline.click(function(){

              $(this).toggleClass("switch-on");

              switchTo.toggleClass("switch-on");

              if(toggleOnline.hasClass("switch-on")) {

                adminStatus.addClass("online-now").html("Online").css({"color" : "#1abc9c"});

                // Switching the profile picture to online

                profileOnline.css({"color" : "#16a085"});


              }else {

                adminStatus.removeClass("online-now").addClass("offline-now").html("Offline").css({"color" : "#bdc3c7"});

                // Switching the profile picture to offline
                profileOnline.css({"color" : "#95a5a6"});

              }

            });

            // Will automatically switch to online on mobile
            var theWidth = $(window).width();
            if(theWidth<=880) {
              profileOnline.css({"color" : "#16a085"});
            } else {
              profileOnline.css({"color" : "#95a5a6"});
            }

            // Toggling the sidebar menu for online
            var sidebarMenu = $(".sidebar-menu");
            var sidebarOnline = $(".sidebar-online");
            var pageContainer = $(".container");
            var footer = $("footer");

            sidebarMenu.click(function() {
              sidebarOnline.toggleClass("slideOut");

              pageContainer.toggleClass("pushOver");
              footer.toggleClass("pushOver");

            });

          // Displaying Dates for the entertainment section

              var clearAll = $(".clear-all");
              var tasks = $("form.all-tasks");

              clearAll.click(function(e){
                e.preventDefault();
                tasks.empty();
                tasks.html("<div class='no-tasks'>You have 0 task</div>");
              });



          // Displaying Dates for the entertainment section
              var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth()+1; //January is 0!
              var yyyy = today.getFullYear();

              if(dd<10) {
                dd='0'+dd;
              } if(mm<10) {
                mm='0'+mm;
              }

              var weekday = new Array(7);
              weekday[0] =  "Sunday";
              weekday[1] = "Monday";
              weekday[2] = "Tuesday";
              weekday[3] = "Wednesday";
              weekday[4] = "Thursday";
              weekday[5] = "Friday";
              weekday[6] = "Saturday";

              var day = weekday[today.getDay()];

              var month = new Array();
              month[0] = "January";
              month[1] = "February";
              month[2] = "March";
              month[3] = "April";
              month[4] = "May";
              month[5] = "June";
              month[6] = "July";
              month[7] = "August";
              month[8] = "September";
              month[9] = "October";
              month[10] = "November";
              month[11] = "December";
              var theMonth = month[today.getMonth()];

                  // Calendar
              $(".day").html(day);
              $(".day-number").html(dd);
              $(".month-year").html(theMonth+ " " +yyyy);

                  // Weather
              $(".date").html(day+ " " +mm+"/" +dd+ "/" +yyyy);

              $(".mail-date").html(mm+ "/" +dd+ "/" +yyyy);

              // Getting the current time
              today.getHours();
              today.getMinutes();
              today.getSeconds();

              var currentTime = today.getHours()+ " : " +today.getMinutes();




      //==JS for entertainment secion ends here====================

       // Toggling the icons for the smiley faces for the chat box

              $(".smileyFace").click(function(){
                $(".smileIcons").toggleClass("opened");
                $(".chat-arrow").toggleClass("opened");
              });

          //==JS for chat box ends here=========================

    /*  ==================================================
                    PROJECTS PAGE JS
      ==============================================*/





    /*  ==================================================
                MAILS PAGE JS
      ==============================================*/
      // Get the time for the inbox
        $(".time").html(currentTime);

      // Print the email
        var printIcon = $("span.print");
          $(printIcon).click(function() {
            printMail("printMail");
          });

      // Sliding up the full mail section
        var inboxMail = $(".mail-received li");
        var fullMailBox = $(".box.mail-read");
        var backToInbox = $(".mail-display .back-to-inbox");

        $(fullMailBox).hide();

        $(inboxMail).click(function() {
          $(fullMailBox).slideDown(300);
        });

        $(backToInbox).click(function() {
          $(fullMailBox).slideUp(300);
        });


    /*  ==================================================
              CLIENT PROFILE PAGE JS
      ==============================================*/
        // Adding margin-bottom to the last rows
          $(".contain-profile .rows:last").addClass("only-this");




  /* =================================================
            EMPLOYEE PROFILE PAGE JS
   ==============================================*/

  //  Toggling the options menu
  var optionMenu = $(".bar span");
  var actualMenu = $(".actual-options");
  var justIcon = $(".just-icon");

  optionMenu.click(function() {
    $(actualMenu).toggleClass("showOptions");
    $(justIcon).toggleClass("showOptions");
  });


  /* =================================================
            LOGIN PAGE JS
   ==============================================*/




  /*  ==================================================
          FOOTER JS
  ==============================================*/
          // Footer

              var mobileWidth = $(window).width();

              if( mobileWidth > 880 ) {
                 $("footer").addClass("desktop-fixed");
              } else {
                $("footer").removeClass("desktop-fixed");
              }

        //==JS for footer ends here=========================








});
