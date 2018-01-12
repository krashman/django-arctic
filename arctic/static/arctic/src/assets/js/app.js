!(function(w, $) {
    //Mobile menu controls
    $('#menu-button').click(function(e) {
        $(this).toggleClass('is-active');
        $('.row-offcanvas').toggleClass('active');
        e.preventDefault();
    });

    let collapseButton = document.querySelectorAll('[js--collapse-menu]');

    for (var i = 0; i < collapseButton.length; i++) {
        collapseButton[i].addEventListener('click', function(event) {
            event.preventDefault();
            let el = this.querySelector('[js--collapse-menu-arrow]');

            this.classList.toggle('active');
            if (el.classList.contains('fa-angle-down')) {
                el.classList.remove('fa-angle-down');
                el.classList.add('fa-angle-left');
            } else {
                el.classList.add('fa-angle-down');
                el.classList.remove('fa-angle-left');
            }
            this.nextSibling.nextSibling.classList.toggle('active');
        });
    }
})(window, $);
//Turn on Tooltips
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$('.float-label input').keyup(function() {
    // Check if float label input is not empty, if so then add some CSS
    if ($(this).val().length > 0) {
        $(this).css({
            paddingTop: '1.2rem',
            paddingBottom: '.4rem'
        });

        $(this).next('label').css({
            top: '.3rem',
            fontSize: '75%'
        });
    }
});

// jquery stuff goes here
$(document).ready(function() {
    // Stepper input
    var $stepperInput = $('.stepper-input input');

    // Check if float label input has items, if so then add some CSS
    if ($('.float-label .selectize-input').find('.item').length > 0) {
        $('.selectize-input').parent().next('label').css({
            top: '.3rem',
            fontSize: '75%'
        });
    }

    function incrementStepperInput(amount) {
        $stepperInput.val((parseInt($stepperInput.val()) || 0) + amount);
    }

    var stepperInputDecrement = $('.stepper-input button')[0];
    $(stepperInputDecrement).click(function() {
        incrementStepperInput(-1);
    });

    var stepperInputIncrement = $('.stepper-input button')[1];
    $(stepperInputIncrement).click(function() {
        incrementStepperInput(1);
    });

    var dirty_check = $('form.dirty-check');
    if (dirty_check.length && !window.parent != window) {
        dirty_check.areYouSure();

        $('form').on('dirty.areYouSure', function() {
            var tab = $('.tabs-title.is-active a')[0];
            if (tab && tab.text[0] != '●') {
                tab.text = '● ' + tab.text;
            }
            document.title = '● ' + document.title;
        });

        $('form').on('clean.areYouSure', function() {
            var tab = $('.tabs-title.is-active a')[0];
            if (tab) {
                tab.text = tab.text.slice(2);
            }
            document.title = document.title.slice(2);
        });
    }


    // Search input by clicking on Icon
    var $searchIcon = $('[js-search-submit]');
    $searchIcon.on('click',  function (){
        $('form').submit();
    })

    confirmDialog();
});


//make it prototype
var confirmDialog = function() {
    var $dialog = '';
    var $dialogOpen = $('[data-confirm-dialog]');
    var $dialogClose ='';

    $dialogOpen.on('click', function() {
        var content = this.getAttribute('data-confirm-dialog');
        var dialogTemplate = `<div class="dialog__overlay" data-dialog-close>
            <div class="dialog__window">
                <div class="dialog__close" data-dialog-close><span class="icon"></span></div>
                <div class="dialog__content js--modal-content">
                ${content}
            </div></div></div>`
        if ($dialog.length) {
            $dialog.remove();
        }
        $("body").append(dialogTemplate);
        $dialog = $('.dialog__overlay');
        $dialogClose = $('[data-dialog-close]');
        bindClose($dialogClose, $dialog);
    });

}

var bindClose = function(close, dialog) {
    close.on('click', function() {
        dialog.remove();
        close.off();
    });
}
