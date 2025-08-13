// // Custom JavaScript for Biosynthesis Website

// document.addEventListener("DOMContentLoaded", () => {
//   // Smooth scrolling for anchor links
//   const links = document.querySelectorAll('a[href^="#"]')

//   links.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault()

//       const targetId = this.getAttribute("href")
//       const targetSection = document.querySelector(targetId)

//       if (targetSection) {
//         targetSection.scrollIntoView({
//           behavior: "smooth",
//         })
//       }
//     })
//   })

//   // Navbar scroll effect (optional for future use)
//   window.addEventListener("scroll", () => {
//     const navbar = document.querySelector(".navbar")
//     if (window.scrollY > 50) {
//       navbar.classList.add("scrolled")
//     } else {
//       navbar.classList.remove("scrolled")
//     }
//   })

//   // Mobile menu close on link click
//   const navLinks = document.querySelectorAll(".navbar-nav .nav-link")
//   const navbarCollapse = document.querySelector(".navbar-collapse")
//   const bootstrap = window.bootstrap // Declare the bootstrap variable

//   navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       if (window.innerWidth < 992) {
//         const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
//           toggle: false,
//         })
//         bsCollapse.hide()
//       }
//     })
//   })

//   // Button hover effects
//   const ctaButtons = document.querySelectorAll(".btn-cta")

//   ctaButtons.forEach((button) => {
//     button.addEventListener("mouseenter", function () {
//       this.style.transform = "translateY(-2px)"
//     })

//     button.addEventListener("mouseleave", function () {
//       this.style.transform = "translateY(0)"
//     })
//   })
// })

