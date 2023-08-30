

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});







// let vehicleSubMenu = document.getElementsByClassName("vehicle-sub-menu")
// vehicleSubMenu.style.display = 


let mobileNavView = document.querySelector("#mobile-nav-navigation")

let mobileVehicle = document.querySelector("#mobile-vehicle")
let mobileenergy = document.querySelector("#mobile-energy")
let mobileCharging = document.querySelector("#mobile-charging")
let mobileDiscover = document.querySelector("#mobile-discover")


let vehicleMobileViewLink = document.querySelector("#vehicle-mobile-view-link")


let energyMobileViewLink = document.querySelector("#energy-mobile-view-link")
let chargingMobileViewLink = document.querySelector("#charging-mobile-view-link")
let discoverMobileViewLink = document.querySelector("#discover-mobile-view-link")
let shopMobileViewLink = document.querySelector("#shop-mobile-view-link")
let supportMobileViewLink = document.querySelector("#support-mobile-view-link")
let accountMobileViewLink = document.querySelector("#account-mobile-view-link")



let vehicleBackIcon = document.querySelector("#mobile-vehicleBack-icon")
let energyBackIcon = document.querySelector("#mobile-energyBack-icon")
let chargingBackIcon = document.querySelector("#mobile-chargingBack-icon")
let discoverBackIcon = document.querySelector("#mobile-discoverBack-icon")


vehicleMobileViewLink.addEventListener('click', () => {
    // console.log(test2);
    // test2.style.display = "none!important";
    // test2.classList.remove("open")
    // test2.style.border = "3px solid red"

    // test2.classList.remove("nav-links open");
    // test2.classList.add("mobile-nav-links oepn");

    mobileNavView.style.paddingTop = "15px";
    mobileNavView.style.paddingLeft = "20px";
    mobileNavView.style.overflow = "scroll";

    vehicleMobileViewLink.style.display = "none"

    energyMobileViewLink.style.display = "none"
    chargingMobileViewLink.style.display = "none"
    discoverMobileViewLink.style.display = "none"
    shopMobileViewLink.style.display = "none"
    supportMobileViewLink.style.display = "none"
    accountMobileViewLink.style.display = "none"

    mobileVehicle.style.display = "block"
})



energyMobileViewLink.addEventListener('click', () => {

    mobileNavView.style.paddingTop = "15px";
    mobileNavView.style.paddingLeft = "20px";
    mobileNavView.style.overflow = "scroll";

    vehicleMobileViewLink.style.display = "none"
    energyMobileViewLink.style.display = "none"
    chargingMobileViewLink.style.display = "none"
    discoverMobileViewLink.style.display = "none"
    shopMobileViewLink.style.display = "none"
    supportMobileViewLink.style.display = "none"
    accountMobileViewLink.style.display = "none"

    mobileVehicle.style.display = "none"
    mobileCharging.style.display = "none"
    mobileenergy.style.display = "block"
})


chargingMobileViewLink.addEventListener('click', () => {

    mobileNavView.style.paddingTop = "15px";
    mobileNavView.style.paddingLeft = "20px";
    mobileNavView.style.overflow = "scroll";

    vehicleMobileViewLink.style.display = "none"
    energyMobileViewLink.style.display = "none"
    chargingMobileViewLink.style.display = "none"
    discoverMobileViewLink.style.display = "none"
    shopMobileViewLink.style.display = "none"
    supportMobileViewLink.style.display = "none"
    accountMobileViewLink.style.display = "none"

    mobileVehicle.style.display = "none"
    mobileenergy.style.display = "none"
    mobileCharging.style.display = "block"
})


discoverMobileViewLink.addEventListener('click', () => {

    mobileNavView.style.paddingTop = "15px";
    mobileNavView.style.paddingLeft = "20px";
    mobileNavView.style.overflow = "scroll";

    vehicleMobileViewLink.style.display = "none"
    energyMobileViewLink.style.display = "none"
    chargingMobileViewLink.style.display = "none"
    discoverMobileViewLink.style.display = "none"
    shopMobileViewLink.style.display = "none"
    supportMobileViewLink.style.display = "none"
    accountMobileViewLink.style.display = "none"

    mobileVehicle.style.display = "none"
    mobileenergy.style.display = "none"
    mobileCharging.style.display = "none"
    mobileDiscover.style.display = "block"
})




vehicleBackIcon.addEventListener("click", () => {

    mobileVehicle.style.display = "none"

    mobileNavView.style.paddingTop = "55px";
    mobileNavView.style.paddingLeft = "25px";
    mobileNavView.style.overflow = "hidden";

    vehicleMobileViewLink.style.display = "block"

    energyMobileViewLink.style.display = "block"
    chargingMobileViewLink.style.display = "block"
    discoverMobileViewLink.style.display = "block"
    shopMobileViewLink.style.display = "block"
    supportMobileViewLink.style.display = "block"
    accountMobileViewLink.style.display = "block"
})

energyBackIcon.addEventListener("click", () => {

    mobileVehicle.style.display = "none"
    mobileenergy.style.display = "none"

    mobileNavView.style.paddingTop = "55px";
    mobileNavView.style.paddingLeft = "25px";
    mobileNavView.style.overflow = "hidden";

    vehicleMobileViewLink.style.display = "block"

    energyMobileViewLink.style.display = "block"
    chargingMobileViewLink.style.display = "block"
    discoverMobileViewLink.style.display = "block"
    shopMobileViewLink.style.display = "block"
    supportMobileViewLink.style.display = "block"
    accountMobileViewLink.style.display = "block"

    console.log("test");
})


chargingBackIcon.addEventListener("click", () => {

    mobileVehicle.style.display = "none"
    mobileenergy.style.display = "none"
    mobileCharging.style.display = "none"

    mobileNavView.style.paddingTop = "55px";
    mobileNavView.style.paddingLeft = "25px";
    mobileNavView.style.overflow = "hidden";

    vehicleMobileViewLink.style.display = "block"

    energyMobileViewLink.style.display = "block"
    chargingMobileViewLink.style.display = "block"
    discoverMobileViewLink.style.display = "block"
    shopMobileViewLink.style.display = "block"
    supportMobileViewLink.style.display = "block"
    accountMobileViewLink.style.display = "block"

    console.log("test");
})

discoverBackIcon.addEventListener("click", () => {

    mobileVehicle.style.display = "none"
    mobileenergy.style.display = "none"
    mobileCharging.style.display = "none"
    mobileDiscover.style.display = "none"

    mobileNavView.style.paddingTop = "55px";
    mobileNavView.style.paddingLeft = "25px";
    mobileNavView.style.overflow = "hidden";

    vehicleMobileViewLink.style.display = "block"

    energyMobileViewLink.style.display = "block"
    chargingMobileViewLink.style.display = "block"
    discoverMobileViewLink.style.display = "block"
    shopMobileViewLink.style.display = "block"
    supportMobileViewLink.style.display = "block"
    accountMobileViewLink.style.display = "block"

    console.log("test");
})

