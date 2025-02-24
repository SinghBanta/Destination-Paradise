const phone = document.getElementById("phone");
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
  const phoneValid = phone.value.length === 10;
  if (!phoneValid) {
    event.preventDefault();
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  const birthdate = new Date(document.getElementById("birthday").value);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDifference = today.getMonth() - birthdate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  if (age < 18) {
    event.preventDefault();
    alert("You must be at least 18 years old");
  } else {
    alert(
      "Thanks for your interest, our tour experts will get back to you shorty!"
    );
  }
});

// const packages = [
//   {
//     name: "Beach Getaway",
//     photo:
//       "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_640.jpg",
//     description:
//       "Enjoy a relaxing time at the sunny beaches of Bali. Inclusive of hotel stay and guided tours.",
//   },
//   {
//     name: "Mountain Adventure",
//     photo:
//       "https://cdn.pixabay.com/photo/2016/11/14/03/26/cliff-1822484_640.jpg",
//     description:
//       "Explore the thrilling trails of the Himalayas. Package includes hiking, camping, and meals.",
//   },
//   {
//     name: "City Life Experience",
//     photo:
//       "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg",
//     description:
//       "Discover the vibrant life of New York City. Comes with city tours and museum passes.",
//   },
// ];


const search = () => {
    const searchbox = document.getElementById("search_input").value.toUpperCase();
    const storeitems = document.getElementsByClassName("products");
    const product = document.querySelectorAll(".card");
    const pname = document.getElementsByTagName("h5");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName("h5")[0];
        let description = product[i].getElementsByTagName("p")[0];
        let image = product[i].getElementsByTagName("img")[0];

        if (match || description || image) {
            let textvalue = match.textContent || match.innerText;
            let descvalue = description ? description.textContent || description.innerText : "";
            let imgAlt = image ? image.alt.toUpperCase() : "";

            if (
                textvalue.toUpperCase().indexOf(searchbox) > -1 ||
                descvalue.toUpperCase().indexOf(searchbox) > -1 ||
                imgAlt.indexOf(searchbox) > -1
            ) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
};
