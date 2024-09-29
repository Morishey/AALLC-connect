document.addEventListener('DOMContentLoaded', function () {
   
    document.querySelector('.container').style.display = 'none';

    // Wait for 2 seconds before displaying the .container
    setTimeout(function () {
        document.querySelector('.container').style.display = 'block'; 

        // Now wait for 3 seconds before starting the zoom-out animation
        setTimeout(function () {
            document.querySelector('.container').classList.remove('zoom-in'); 
            document.querySelector('.container').classList.add('zoom-out'); 

            setTimeout(function () {
                window.location.href = './form.html'; 
            }, 2000); 
        }, 3000); 
    }, 2000); 
});


    document.addEventListener('DOMContentLoaded', function() {
        // Initially hide form2 and form3
        document.getElementById('form2').style.display = 'none';
        document.getElementById('form3').style.display = 'none';

        // Function to scroll to the top of the page
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Add click event listener to form1Next button to display form2
        document.getElementById('form1Next').addEventListener('click', function() {
            document.getElementById('form1').style.display = 'none';
            document.getElementById('form2').style.display = 'block';
            scrollToTop();  // Scroll to the top when displaying form2
        });

        // Add click event listener to form2Next button to display form3
        document.getElementById('form2Next').addEventListener('click', function() {
            document.getElementById('form2').style.display = 'none';
            document.getElementById('form3').style.display = 'block';
            scrollToTop();  // Scroll to the top when displaying form3
        });

        // Add click event listener to back arrow on form2 to go back to form1
        document.getElementById('back2form1').addEventListener('click', function() {
            document.getElementById('form2').style.display = 'none';
            document.getElementById('form1').style.display = 'block';
            scrollToTop();  // Scroll to the top when going back to form1
        });

        // Add click event listener to back arrow on form3 to go back to form2
        document.getElementById('back2form2').addEventListener('click', function() {
            document.getElementById('form3').style.display = 'none';
            document.getElementById('form2').style.display = 'block';
            scrollToTop();  // Scroll to the top when going back to form2
        });
    });


    window.onload = function () {
        // Display loading animation for 4 seconds
        setTimeout(function () {
            // Hide the loader
            document.querySelector('.loaderDiv').style.display = 'none';
            
            // Show the payment method section
            document.querySelector('.pay').style.display = 'block';
        }, 4000);  // 4 seconds delay
    };