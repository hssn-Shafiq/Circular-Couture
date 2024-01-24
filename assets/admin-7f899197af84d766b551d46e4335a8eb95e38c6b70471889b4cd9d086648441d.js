import "trix"
import "bootstrap4-toggle"
import "bootstrap-select"

import Cookies from "js-cookie"
window.Cookies = Cookies

import lazyload from "jquery-lazyload";
window.lazyload = lazyload;

import daterangepicker from "daterangepicker";
window.daterangepicker = daterangepicker

import moment from "moment"
window.moment = moment

toastr.options.timeOut = 5000;
toastr.options.extendedTimeOut = 6000;
toastr.options.preventDuplicates = true;

import "./controllers"

document.addEventListener("turbo:load", function() {
  $('[data-toggle="popover"]').popover()
  setFileInputTextWhenFileIsSelected();
})


$(document).ready(function() {
  $(".selectpicker").selectpicker("refresh");
});

document.addEventListener("turbo:load", function() {
	if ($('#generate_sigle_account_credit_form').length) {
		$('#generate_sigle_account_credit_form').submit(function () {
			$('.modal').modal('hide');
		});
  }

  if ($('select#code_type').length) {
    $(document).on('change', 'select#code_type', function () {
      $('#account_credits_filter_button').click();
    });
  }

  if ($('#account_credit_expired_at').length){
    $('#account_credit_expired_at').change(function (){
      $('#account_credit_availed_expired_at').attr('min', $(this).val());
    });
  }

  document.addEventListener("turbo:before-fetch-request", function(event) {
    if(event.target.querySelector('table'))
      event.target.classList.add("table", "loading")
  })

  document.addEventListener("turbo:before-fetch-response", function(event) {
    if(event.target.querySelector('table'))
      event.target.classList.remove("table", "loading")
  })
});



function setFileInputTextWhenFileIsSelected() {
  var fileInput = document.querySelector('.custom-file-input');
  var fileLabel = document.querySelector('.custom-file-label');
  if(fileInput && fileLabel) {
    fileInput.addEventListener("change", (e) => {
      fileLabel.textContent = e.target.value.replace(/^.*[\\\/]/, '');
    });
  }
};
