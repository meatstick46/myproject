'use strict';

const serviceButton = document.querySelector("[data-service-button]");
const contactButton = document.querySelector('[data-contact-button]');
const serviceSectionElement = document.querySelector('[data-service-section]')
const contactSectionElement = document.querySelector("[data-contact-section]")

serviceButton.addEventListener("click", function () {
    // const serviceCoords = serviceSectionElement.getBoundingClientRect();
    serviceSectionElement.scrollIntoView({ behavior: 'smooth' });
})

contactButton.addEventListener('click', function () {
    contactSectionElement.scrollIntoView({ behavior: 'smooth' });
})