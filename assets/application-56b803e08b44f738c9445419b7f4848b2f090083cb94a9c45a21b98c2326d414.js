// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"

import Rails from "@rails/ujs"
Rails.start()
window.Rails = Rails

import ActiveStorage from "@rails/activestorage"
ActiveStorage.start()

import Bridge from "ios/turbo_bridge"
window.TurboNativeBridge = Bridge

import "controllers"

import "src/jquery"
import "jquery-ui"
import "slick-carousel"
import "bootstrap"
import "bootstrap4-toggle"
import "bootstrap-select"
import "awesomplete"
import "cropper"
import "popover"
import "@fortawesome/fontawesome"
import "src/bootstrap_helpers/form_dropdown"

import "trix"
import "@rails/actiontext"

import "src/hotjar_tracking"

import "hotkeys-js"
import "stimulus-use"

import slider from "bootstrap-slider"
window.slider = slider

import Cookies from "js-cookie"
window.Cookies = Cookies

import toastr from "toastr"
window.toastr = toastr

import lazyload from "jquery-lazyload"
window.lazyload = lazyload

import daterangepicker from "daterangepicker"
window.daterangepicker = daterangepicker

import moment from "moment"
window.moment = moment

window.dataLayer = window.dataLayer || [];

document.addEventListener("turbo:load", function() {
  // Set Lazyload image
  window.$("img").lazyload({event: "lazyload", effect: "fadeIn", effectspeed: "500", threshold: "500"}).trigger("lazyload")
  // Set Tooltip
  $("body").tooltip({ selector: "[data-toggle=tooltip]" })
  // Set Popoover
  $("*[data-toggle='popover']").popover()
});

document.addEventListener("turbo:load", function() { // for iOS native tabs
  window.iOSNativeTab = function(url) {
    if (document.getElementById("signin-modal")) {
      $("#signin-modal").modal("show");
    } else {
      turbo.visit(url, { action: "replace" });
    }
  };
});

document.addEventListener("turbo:load", function() {
  window.$("#influencer_referral_signup_modal").modal("show")
    window.$("#influencer_referral_signup_modal").on("shown.bs.modal", function() {
      setTimeout(function() {
        toastr.success("<span>Please fill up this form.</span>")
        window.history.pushState({}, null, window.location.pathname)
      }, 500)
    });
});


document.addEventListener("turbo:before-cache", function() {
  window.$(".modal").modal("hide");

  if(document.querySelector("body").classList.contains("modal-open"))
    document.querySelector("body").classList.remove("modal-open")

  if (document.getElementById("toast-container"))
    document.getElementById("toast-container").remove();
})

document.addEventListener("turbo:load", function() { // for dashboard loyout
  window.$(".dashboard-accordion").on("show.bs.collapse", function (event) {
    event.currentTarget.querySelector(".card-header label").classList.add("show");
    event.currentTarget.querySelector(".card-header a").innerHTML = "hide";
  });

  window.$(".dashboard-accordion").on("hide.bs.collapse", function (event) {
    event.currentTarget.querySelector(".card-header label").classList.remove("show");
    event.currentTarget.querySelector(".card-header a").innerHTML = "show";
  });

  if (document.getElementsByClassName("dashboard-mobile-nav")[0] !== undefined && document.getElementsByClassName("dashboard-mobile-nav")[0].offsetParent !== null)
    document.getElementsByClassName("main-container")[0].classList.add("pt-0");
});

document.addEventListener("turbo:load", function() { // reCAPTCHA refresh tokens
  let executeRecaptchaForSignupInterval,
      executeRecaptchaForSigninInterval,
      executeRecaptchaForReferralSignupInterval,
      executeRecaptchaForInfluencerReferralSignupInterval,
      executeRecaptchaForConversionSignup,
      executeRecaptchaForConversionSignupInterval,
      signupModalID = document.querySelector("body").dataset.hurrIos === "false" ? "#registration_modal" : "#signup-modal";

  window.$(signupModalID).on("show.bs.modal", function (event) {
    event.stopImmediatePropagation();
    if (typeof executeRecaptchaForSignup == "function") {
      executeRecaptchaForSignup();
      executeRecaptchaForSignupInterval = setInterval(() => {
        executeRecaptchaForSignup();
      }, 60000);
    }
  });

  window.$(signupModalID).on("hide.bs.modal", function (event) {
    if (typeof executeRecaptchaForSignup == "function")
      clearInterval(executeRecaptchaForSignupInterval);
  });

  window.$("#signin-modal").on("show.bs.modal", function (event) {
    event.stopImmediatePropagation();
    if (typeof executeRecaptchaForSignin == "function") {
      executeRecaptchaForSignin();
      executeRecaptchaForSigninInterval = setInterval(() => {
        executeRecaptchaForSignin();
      }, 60000);
    }
  });

  window.$("#signin-modal").on("hide.bs.modal", function (event) {
    if (typeof executeRecaptchaForSignin == "function")
      clearInterval(executeRecaptchaForSigninInterval);
  });

  window.$("#referral_sign_up_modal").on("show.bs.modal", function (event) {
    event.stopImmediatePropagation();
    if (typeof executeRecaptchaForReferralSignup == "function") {
      executeRecaptchaForReferralSignup();
      executeRecaptchaForReferralSignupInterval = setInterval(() => {
        executeRecaptchaForReferralSignup();
      }, 60000);
    }
  });

  window.$("#referral_sign_up_modal").on("hide.bs.modal", function (event) {
    if (typeof executeRecaptchaForReferralSignup == "function")
      clearInterval(executeRecaptchaForReferralSignupInterval);
  });

  window.$("#brands_sign_in_modal").on("show.bs.modal", function (event) {
    event.stopImmediatePropagation();
    if (typeof executeRecaptchaForSignin == "function") {
      executeRecaptchaForSignin();
      executeRecaptchaForSigninInterval = setInterval(() => {
        executeRecaptchaForSignin();
      }, 60000);
    }
  });

  window.$("#brands_sign_in_modal").on("hide.bs.modal", function (event) {
    if (typeof executeRecaptchaForSignin == "function")
      clearInterval(executeRecaptchaForSigninInterval);
  });

  window.$("#influencer_referral_signup_modal").on("show.bs.modal", function(event) {
    event.stopImmediatePropagation();
    if(typeof executeRecaptchaForInfluencerReferralSignup == "function") {
      executeRecaptchaForInfluencerReferralSignup();
      executeRecaptchaForInfluencerReferralSignupInterval = setInterval(() => {
        executeRecaptchaForInfluencerReferralSignup();
      }, 60000)
    }
  })

  window.$("#influencer_referral_signup_modal").on("hide.bs.modal", function() {
    if(typeof executeRecaptchaForInfluencerReferralSignup == "function") {
      clearInterval(executeRecaptchaForInfluencerReferralSignupInterval);
    }
  })

  window.$("#conversion_modal").on("show.bs.modal", function(event) {
    event.stopImmediatePropagation();
    if (typeof executeRecaptchaForConversionSignup == "function") {
      executeRecaptchaForConversionSignup();
      executeRecaptchaForConversionSignupInterval = setInterval(() => {
        executeRecaptchaForConversionSignup();
      }, 60000);
    }
  })

  window.$("#conversion_modal").on("hide.bs.modal", function() {
    if (typeof executeRecaptchaForConversionSignup == "function")
      clearInterval(executeRecaptchaForConversionSignupInterval);
  })
});
