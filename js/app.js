var app = angular.module("travelApp", []);

app.controller("travelController", function ($scope) {

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
            name: "Anagha",
            destination: "Kerala",
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

    $scope.packages = [
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
    
});