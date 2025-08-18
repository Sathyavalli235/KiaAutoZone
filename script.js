      function openForm(service) {
          document.getElementById("serviceForm").style.display = "block";
          document.getElementById("formTitle").innerText = service + " Booking Form";
      }
  
      function closeForm() {
          document.getElementById("serviceForm").style.display = "none";
      }


      //booking
    function confirmBooking(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let car = document.getElementById("car").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let payment = document.getElementById("payment").value;

        Swal.fire({
            title: "Booking Confirmed!",
            text: `${name}, Your Test Drive for ${car} on ${date} at ${time} is Confirmed.\nPayment Mode: ${payment}`,
            icon: "success",
            timer: 4000
        });
    }

//contact
      function sendMessage(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let message = document.getElementById("message").value;
    
        Swal.fire({
            title: "Message Sent Successfully ",
            text: `${name}, Thank You for Contacting Kia Showroom!`,
            icon: "success",
            timer: 4000
        });
    
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
    


    //testdrive
    function openModal() {
    document.getElementById("testDriveModal").style.display = "block";
}

function closeModal() {
    document.getElementById("testDriveModal").style.display = "none";
}

function bookTestDrive(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let car = document.getElementById("carModel").value;

    Swal.fire({
        title: "Success 🎯!",
        text: `Test Drive for ${car} is Booked Successfully, ${name} 🚗🔥`,
        icon: "success",
        timer: 3000
    });

    closeModal();
}
