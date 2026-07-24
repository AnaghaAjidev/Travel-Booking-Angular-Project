var app = angular.module("travelApp", []);

app.controller("travelController", function ($scope) {

    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    $scope.userEmail = sessionStorage.getItem("userEmail");

    $scope.statistics = [
        {
            title: "Available Packages",
            value: 25
        },
        {
            title: "Happy Travelers",
            value: 180
        },
        {
            title: "Destinations",
            value: 15
        },
        {
            title: "Customer Reviews",
            value: 320
        }
    ];

    $scope.destinations = [
        {
            id: 1,
            name: "Kerala",
            region: "India",
            description: "Enjoy the beauty of backwaters, beaches and hill stations.",
            price: 18000,
            duration: "5 Days",
            transport: "Bus",
            hotel: "3 Star Hotel",
            image: "images/kerala.jpg"
        },
        {
            id: 2,
            name: "Goa",
            region: "India",
            description: "Relax at beautiful beaches and enjoy exciting nightlife.",
            price: 15000,
            duration: "4 Days",
            transport: "Train",
            hotel: "Beach Resort",
            image: "images/goa.jpg"
        },
        {
            id: 3,
            name: "Manali",
            region: "India",
            description: "Snow-covered mountains and breathtaking valleys.",
            price: 22000,
            duration: "6 Days",
            transport: "Bus",
            hotel: "Mountain Resort",
            image: "images/manali.jpg"
        },
        {
            id: 4,
            name: "Dubai",
            region: "UAE",
            description: "Luxury shopping, skyscrapers and desert safari.",
            price: 65000,
            duration: "5 Days",
            transport: "Flight",
            hotel: "5 Star Hotel",
            image: "images/dubai.jpg"
        },
        {
            id: 5,
            name: "Maldives",
            region: "Indian Ocean",
            description: "Crystal clear water and luxury water villas.",
            price: 85000,
            duration: "6 Days",
            transport: "Flight",
            hotel: "Water Villa",
            image: "images/maldives.jpg"
        },
        {
            id: 6,
            name: "Switzerland",
            region: "Europe",
            description: "Snowy Alps, lakes and scenic train journeys.",
            price: 125000,
            duration: "7 Days",
            transport: "Flight",
            hotel: "Luxury Hotel",
            image: "images/switzerland.jpg"
        }
    ];

    $scope.locations = [
        "Munnar",
        "Goa",
        "Ooty",
        "Dubai",
        "Paris",
        "Bali",
        "Maldives",
        "Switzerland"
    ];

    $scope.offers = [
        {
            title: "Summer Sale",
            description: "Book any domestic trip this month.",
            discount: "20% OFF"
        },
        {
            title: "Family Package",
            description: "Book for 4 members and get one free child ticket.",
            discount: "15% OFF"
        },
        {
            title: "Honeymoon Special",
            description: "Luxury stay with complimentary candlelight dinner.",
            discount: "25% OFF"
        },
        {
            title: "Early Bird Offer",
            description: "Book 30 days before departure.",
            discount: "10% OFF"
        }
    ];

    $scope.reviews = [
        {
            name: "Gayu",
            destination: "Switzerland",
            rating: 5,
            text: "Amazing experience! Beautiful places and excellent service.",
            date: new Date()
        },
        {
            name: "Rahul",
            destination: "Goa",
            rating: 4,
            text: "Beach resort was fantastic. Worth every penny.",
            date: new Date()
        },
        {
            name: "Sneha",
            destination: "Dubai",
            rating: 5,
            text: "Luxury trip with perfect arrangements.",
            date: new Date()
        },
        {
            name: "Arun",
            destination: "Maldives",
            rating: 5,
            text: "One of the best vacations I have ever had.",
            date: new Date()
        }
    ];

    $scope.bannerTitle = "Explore The World";

    $scope.bannerSubtitle = "Discover amazing destinations with affordable travel packages.";

    $scope.bannerButton = "Explore Packages";

    $scope.menu = [
        "Dashboard",
        "Packages",
        "Booking",
        "Reviews",
        "Admin"
    ];

    $scope.showStatistics = true;
    $scope.showOffers = true;
    $scope.showReviews = true;

    $scope.stars = [1, 2, 3, 4, 5];

    $scope.newReview = {
        name: "",
        destination: "",
        rating: 0,
        text: ""
    };

    $scope.setRating = function (star) {
        $scope.newReview.rating = star;
    };

    $scope.submitReview = function () {

        if ($scope.newReview.rating === 0) {
            return;
        }

        $scope.reviews.push({
            name: $scope.newReview.name,
            destination: $scope.newReview.destination,
            rating: $scope.newReview.rating,
            text: $scope.newReview.text,
            date: new Date()
        });

        $scope.newReview = {
            name: "",
            destination: "",
            rating: 0,
            text: ""
        };

        if ($scope.reviewForm) {
            $scope.reviewForm.$setPristine();
            $scope.reviewForm.$setUntouched();
        }
    };

    $scope.averageRating = function () {

        if ($scope.reviews.length === 0) {
            return 0;
        }

        var total = 0;

        for (var i = 0; i < $scope.reviews.length; i++) {
            total += $scope.reviews[i].rating;
        }

        return total / $scope.reviews.length;
    };

        $scope.bookingDestinations = [
        "Kerala",
        "Goa",
        "Kashmir",
        "Manali",
        "Ooty",
        "Munnar",
        "Andaman",
        "Dubai",
        "Singapore"
    ];

    $scope.packageTypes = [
    "Standard",
    "Deluxe",
    "Premium"
];

    $scope.bookings = [];

    var bookingCounter = 1001;

    $scope.booking = {
        bookingId: "BK" + bookingCounter
    };

    $scope.bookTour = function () {

        if ($scope.bookingForm.$valid) {

            var packagePrice = 0;

            if ($scope.booking.package == "Standard") {
                packagePrice = 3000;
            }
            else if ($scope.booking.package == "Deluxe") {
                packagePrice = 5000;
            }
            else if ($scope.booking.package == "Premium") {
                packagePrice = 8000;
            }

            var totalCost = packagePrice * $scope.booking.travellers;

            $scope.bookings.push({
                bookingId: $scope.booking.bookingId,
                customerName: $scope.booking.customerName,
                email: $scope.booking.email,
                phone: $scope.booking.phone,
                destination: $scope.booking.destination,
                travelDate: $scope.booking.travelDate,
                travellers: $scope.booking.travellers,
                package: $scope.booking.package,
                totalCost: totalCost
            });

            alert("Booking Successful!");

            bookingCounter++;

            $scope.booking = {
                bookingId: "BK" + bookingCounter
            };

            $scope.bookingForm.$setPristine();
            $scope.bookingForm.$setUntouched();
        }
        else {
            alert("Please fill all required fields.");
        }
    };

   $scope.logout = function () {

    alert("Logout clicked");

    if (confirm("Are you sure you want to logout?")) {

        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userEmail");

        alert("Session removed");

        window.location.href = "index.html";
    }
};

$scope.packages = [

    // ✈ FLIGHT

    {
        destination: "Switzerland",
        packageName: "Alpine Adventure",
        duration: "7 Days / 6 Nights",
        price: 85000,
        transport: "Flight",
        hotel: "Swiss Alpine Resort",
        rating: 4.9,
        available: true,
        image: "assets/images/swiss1.jpg.jpeg"
    },

    {
        destination: "France",
        packageName: "Paris Explorer",
        duration: "6 Days / 5 Nights",
        price: 78000,
        transport: "Flight",
        hotel: "Eiffel View Hotel",
        rating: 4.8,
        available: true,
        image: "assets/images/france.jpg.jpeg"
    },

    {
        destination: "Thailand",
        packageName: "Bangkok & Phuket",
        duration: "5 Days / 4 Nights",
        price: 55000,
        transport: "Flight",
        hotel: "Phuket Beach Resort",
        rating: 4.7,
        available: true,
        image: "assets/images/thai1.jpg.jpeg"
    },

    // 🚆 TRAIN

    {
        destination: "Goa",
        packageName: "Beach Escape",
        duration: "4 Days / 3 Nights",
        price: 15000,
        transport: "Train",
        hotel: "Beachside Resort",
        rating: 4.8,
        available: true,
        image: "assets/images/Goa.jfif.jpeg"
    },


    {
        destination: "Darjeeling",
        packageName: "Toy Train Experience",
        duration: "4 Days / 3 Nights",
        price: 16000,
        transport: "Train",
        hotel: "Hill View Hotel",
        rating: 4.8,
        available: true,
        image: "assets/images/darj.jpg.jpeg"
    },

    // 🚌 BUS


    {
        destination: "Ooty",
        packageName: "Hill Station Holiday",
        duration: "3 Days / 2 Nights",
        price: 8500,
        transport: "Bus",
        hotel: "Luxury Cottage",
        rating: 4.6,
        available: true,
        image: "assets/images/ooty1.jfif.jpeg"
    },

    {
        destination: "Manali",
        packageName: "Snow Adventure",
        duration: "5 Days / 4 Nights",
        price: 18000,
        transport: "Bus",
        hotel: "Mountain View Resort",
        rating: 4.7,
        available: true,
        image: "assets/images/manali.jfif.jpeg"
    }

];

    
});