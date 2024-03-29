var antivirusCount = 0;
var giftcardCount = 0;

function getViewportOffset($e) {
    var $window = $(window),
        scrollLeft = $window.scrollLeft(),
        offset = $e.offset();
    return {
        left: offset.left - scrollLeft
    };
}

$(window).on("load scroll resize", function () {
    var viewportOffset = getViewportOffset($(".support .menu-leaf"));
    if ((viewportOffset.left) >= 250) {
        $('.support-content').removeClass('support-content-right');
        $('.help-arrow').removeClass('help-arrow-right');
        $('.support-content').addClass('support-content-left');
        $('.help-arrow').addClass('help-arrow-left');
    } else if (viewportOffset.left <= 250) {
        $('.support-content').removeClass('support-content-left');
        $('.help-arrow').removeClass('help-arrow-left');
        $('.support-content').addClass('support-content-right');
        $('.help-arrow').addClass('help-arrow-right');
    }
});

$(document).ready(function () {
    var countBoxValue = parseInt($(".count .count-value").val());
    var selectedMenu = "topup";
    var selectedOperator = "MTN";
    var selectedValue = "1000";
    var selectedCount = "1";
    var isTarabord = false;
    var operatorsName = {"MTN": "ایرانسل", "MCI": "همراه اول", "RTL": "رایتل"};
    var products;
    var data;

    $('#magicCharge').prop('checked', false);
    $('#nonCreditMTN').prop('checked', false);
    $('#wimax').prop('checked', false);
    $(".count .count-value").val("1");
    $(".price-value-container .price-value").html(selectedValue);
    $(".price-value-container .price-unit").html("تومان");

    function startup() {
        if (selectedOperator == 'MTN') {
            $('label[for=magicCharge]').text('شارژ شگفت انگیز');
            $('#magicCharge').prop('disabled', false);
            $('#magicCharge').attr('checked', false);
            $('#nonCreditMTN').prop('disabled', false);
            $('#nonCreditMTN').attr('checked', false);
            $('#wimax').prop('disabled', false);
            $('#wimax').attr('checked', false);
            $('.magic-charge').show();
            $('.non-credit-mtn').show();
            $('.wimax').show();
            if ($('#magicCharge').is(':checked')) {
                selectedOperator = 'MTN!';
            }
            if ($('#nonCreditMTN').is(':checked')) {
                selectedOperator = 'MTN#';
            }
        } else if (selectedOperator == 'RTL') {
            $('label[for=magicCharge]').text('شارژ شورانگیز');
            $('#magicCharge').prop('disabled', false);
            $('#magicCharge').attr('checked', false);
            $('#nonCreditMTN').prop('disabled', true);
            $('#nonCreditMTN').attr('checked', false);
            $('.non-credit-mtn').hide();
            $('.magic-charge').show();
            $('.wimax').hide();
            if ($('#magicCharge').is(':checked')) {
                selectedOperator = 'RTL!';
            }
        } else if (selectedOperator == 'MCI') {
            $('.magic-charge').hide();
            $('.non-credit-mtn').hide();
            $('.wimax').hide();
            $('#magicCharge').prop('disabled', true);
            $('#magicCharge').attr('checked', false);
            $('#nonCreditMTN').prop('disabled', true);
            $('#nonCreditMTN').attr('checked', false);
        }

        $('#dataChargeKind').val(selectedMenu);
        $('#dataType').val(selectedOperator);
    }

    startup();

    if (selectedOperator == 'MCI' || selectedOperator == 'RTL') {
        selectedOperator == $("input[name='data[type]']").val();
        $('#magicCharge').prop('disabled', true);
        $('#magicCharge').attr('checked', false);
        $('#nonCreditMTN').prop('disabled', true);
        $('#nonCreditMTN').attr('checked', false);
        $('#wimax').prop('disabled', true);
        $('#wimax').attr('checked', false);
    }

    $('input#magicCharge').change(function () {
        if (selectedOperator == 'MTN' || selectedOperator == 'MTN!' || selectedOperator == 'MTN#') {
            if ($(this).is(':checked')) {
                selectedOperator = 'MTN!';
                $('#nonCreditMTN').prop('disabled', true);
                $('#nonCreditMTN').attr('checked', false);
                $('#wimax').prop('disabled', true);
                $('#wimax').attr('checked', false);
            } else {
                $('#nonCreditMTN').prop('disabled', false);
                $('#wimax').prop('disabled', false);
                selectedOperator = 'MTN';
            }
            $("input[name='data[type]']").val(selectedOperator);
        }

        if (selectedOperator == 'RTL' || selectedOperator == 'RTL!') {
            if ($(this).is(':checked')) {
                selectedOperator = 'RTL!';
            } else {
                selectedOperator = 'RTL';
            }
            $("input[name='data[type]']").val(selectedOperator);
        }
    });
    $('input#nonCreditMTN').change(function () {
        if (selectedOperator == 'MTN' || selectedOperator == 'MTN!' || selectedOperator == 'MTN#') {
            if ($(this).is(':checked')) {
                selectedOperator = 'MTN#';
                $('#magicCharge').prop('disabled', true);
                $('#magicCharge').attr('checked', false);
                $('#wimax').prop('disabled', true);
                $('#wimax').attr('checked', false);
            } else {
                $('#magicCharge').prop('disabled', false);
                $('#wimax').prop('disabled', false);
                selectedOperator = 'MTN';
            }
            $("input[name='data[type]']").val(selectedOperator);
        }
    });
    $('input#wimax').change(function () {
        if (selectedOperator == 'WiMax' || selectedOperator == 'MTN') {
            if ($(this).is(':checked')) {
                selectedOperator = 'WiMax';
                $('#magicCharge').prop('disabled', true);
                $('#magicCharge').attr('checked', false);
                $('#nonCreditMTN').prop('disabled', true);
                $('#nonCreditMTN').attr('checked', false);
            } else {
                $('#magicCharge').prop('disabled', false);
                $('#nonCreditMTN').prop('disabled', false);
                selectedOperator = 'MTN';
            }
            $("input[name='data[type]']").val(selectedOperator);
        }
    });

    $(".services-menu .service-container").click(function () {
        if (selectedMenu != $(this).data('type')) {
            $(".count-value").val(1);
            $("input[name='data[type]']").val("MTN");
            $('.information-container').show();
            $('.leaf.informations p').show();
            $('.leaf.payment-gateway > div').show();
            $('.gateway-title').show();
            selectedMenu = $(this).data('type');
            $("input[name='data[ChargeKind]']").val(selectedMenu);
            if (jQuery.inArray(selectedMenu, ['bill', 'gift-card', 'anti-virus', 'internet-package']) == -1) {
                selectedOperator = 'MTN';
                $('input#magicCharge').prop('checked', false);
                $('input#magicCharge').prop('disabled', false);
                $('input#nonCreditMTN').prop('checked', false);
                $('input#nonCreditMTN').prop('disabled', false);
                $('input#wimax').prop('checked', false);
                $('input#wimax').prop('disabled', false);
            }
            $('.buy').removeClass().addClass("buy" + " " + $(this).data('type'));
            $('.buy.' + selectedMenu + ' .types-container').hide();
            if (selectedMenu == "topup" || selectedMenu == "pin" || selectedMenu != "internet-package") {
                $('.buy.topup .types, .buy.pin .types').css("background-color", "#469541");
                $('.buy.' + selectedMenu + ' .types-container.' + selectedMenu).show();
                $('.buy.' + selectedMenu + ' .types .types-cover').hide();
            } else {
                $('.buy.' + selectedMenu + ' .types').css("background-color", "#ff5a5a");
                $('.buy.' + selectedMenu + ' .types .types-cover').show();
                $('.buy.' + selectedMenu + ' .types .types-cover p:first-child').show();
                $('.buy.' + selectedMenu + ' .types .types-cover p:nth-child(2)').hide();
            }
            $("." + selectedMenu + " " + ".price-value-container .price-value").html($('input[name=radio-' + selectedMenu + ']:checked').val());
            $("#dataAmount").val($("." + selectedMenu + " .price-value-container .price-value").html());

            $('.service-container.active').removeClass('active');
            $(this).addClass('active');

            setAmounts();

            if (selectedMenu == "bill") {
                $("#dataAmount").val("");
                $("#dataCount").val("");
                $("input[name='data[type]']").val("");
                $('.buy.' + selectedMenu + ' .types .types-cover p:first-child').hide();
                $('.buy.' + selectedMenu + ' .types .types-cover p:nth-child(2)').show();
            }
            if (selectedMenu == "anti-virus" || selectedMenu == "internet-package" || selectedMenu == "gift-card" || selectedMenu == "bill") {
                $('.payment-cover').show();
                if(selectedMenu == "gift-card" && giftcardCount === 0){
                    $('.types-container.gift-card').hide();
                    $('.information-container').hide();
                    $('.leaf.informations p').hide();
                    $('.gateway-title').hide();
                    $('.leaf.payment-gateway > div').hide();
                }
                if(selectedMenu == "anti-virus" && antivirusCount === 0){
                    $('.types-container.anti-virus').hide();
                    $('.information-container').hide();
                    $('.leaf.informations p').hide();
                    $('.gateway-title').hide();
                    $('.leaf.payment-gateway > div').hide();
                }
                $("input[name='data[type]']").val("");
            } else {
                $('.payment-cover').hide();
            }

            if (selectedMenu == "topup" || selectedMenu == "pin") {
                $(".service-container.active").removeClass('active');
                $(".operators-container .operator:first-child").addClass('active');
                $("input[name='data[productId]']").val("");
                $("input[name='data[packageId]']").val("");
            } else {
                $(".service-container.active").removeClass('active');
            }

            startup();
        }
    });
    $(".operators-container .operator").click(function () {
        selectedOperator = $(this).data('charge-type');
        $("input[name='data[type]']").val(selectedOperator);
        $('.price-value').removeClass().addClass("price-value" + " " + $(this).data('charge-type'));
        $('.price-unit').removeClass().addClass("price-unit" + " " + $(this).data('charge-type'));
        $("input[name='data[type]']").val($(this).data("charge-type"));
        $('.operator.active').removeClass('active');
        $(this).addClass('active');

        if (selectedMenu != 'internet-package') {
            $('#magicCharge').prop('checked', false);
            $('#nonCreditMTN').prop('checked', false);
            $('#wimax').prop('checked', false);
        } else {
            $(".buy.internet-package .types").css({"background-color": "#469541"});
            $('.internet-package').find('.types-cover').hide();
            $('.internet-package').find('.payment-cover').hide();
            $('.internet-package .types .internet-package.types-container').show();
            setInternetPackage(selectedOperator.toLowerCase());
        }
        startup();
    });
    $(".gift-card-container .gift").click(function () {
        $('.buy.' + selectedMenu + ' .types-container').hide();
        $('.buy.' + selectedMenu + ' .types-container.' + selectedMenu).show();
        $('.buy.' + selectedMenu + ' .types .types-cover').hide();
        var options = "";
        $.each(products.giftCard[$(this).data("gift-type")], function (key, value) {
            options += "<option value=" + value.id + " data-price=" + value.price + ">" + value.name + "</option>";
            $(".gift-card .gift-card-types select").html(options);
            setText();
        });
        $('.gift-card .gift-card-types').removeClass().addClass("gift-card-types" + " " + $(this).data('gift-type'));
        $('.gift-card .types .types-container.gift-card .gift-card-types > select').attr('class', 'giftCard' + $(this).data('gift-type') + 'Types');
        $(".buy.gift-card .types").css({"background-color": "#469541"});
        $('.gift.active').removeClass('active');
        $(this).addClass('active');
        $('.gift-card .gift-card-types .price-value-container .price-value').html($('.gift-card .gift-card-types select').find('option:selected').data("price"));
        $("#dataAmount").val($(".gift-card .gift-card-types .price-value-container .price-value").html());
        $("input[name='data[productId]']").val($('.gift-card .gift-card-types select').find('option:selected').attr("value"));
        setAmounts();
        $('.types-container.' + $(this).data('type')).show();
        $('.payment-cover').hide();
        $("input[name='data[packageId]']").val("");
    });

    $(".anti-virus-container .antivirus").click(function () {
        $('.buy.' + selectedMenu + ' .types-container').hide();
        $('.buy.' + selectedMenu + ' .types-container.' + selectedMenu).show();
        $('.buy.' + selectedMenu + ' .types .types-cover').hide();
        var options = "";
        $.each(products.antivirus[$(this).data("antivirus-type")], function (key, value) {
            options += "<option value=" + value.id + " data-price=" + value.price + ">" + value.name + "</option>";
            $(".anti-virus .anti-virus-types select").html(options);
        });
        $('.anti-virus .anti-virus-types').removeClass().addClass("anti-virus-types" + " " + $(this).data('antivirus-type'));
        $('.anti-virus .types .types-container.anti-virus .anti-virus-types > select').attr('class', 'antiVirus' + $(this).data('antivirus-type') + 'Types');
        $(".buy.anti-virus .types").css({"background-color": "#469541"});
        $('.antivirus.active').removeClass('active');
        $(this).addClass('active');
        $('.anti-virus .anti-virus-types .price-value-container .price-value').html($('.anti-virus .anti-virus-types select').find('option:selected').data("price"));
        $("#dataAmount").val($(".anti-virus .anti-virus-types .price-value-container .price-value").html());
        $("input[name='data[productId]']").val($('.anti-virus .anti-virus-types select').find('option:selected').attr("value"));
        setAmounts();
        $('.types-container.' + $(this).data('type')).show();
        $('.payment-cover').hide();
        $("input[name='data[packageId]']").val("");
    });
    $('.gift-card .gift-card-types select').change(function () {
        $('.gift-card .gift-card-types .price-value-container .price-value').html($(this).find('option:selected').data('price'));
        $("input[name='data[productId]']").val($(this).find('option:selected').attr("value"));
        $("input[name='data[packageId]']").val("");
        setAmounts();
    });
    $('.anti-virus .anti-virus-types select').change(function () {
        $('.anti-virus .anti-virus-types .price-value-container .price-value').html($(this).find('option:selected').data('price'));
        $("input[name='data[productId]']").val($(this).find('option:selected').attr("value"));
        $("input[name='data[packageId]']").val("");
        setAmounts();
    });
    $(".charge-type-container").on('change', '.charge-type', function () {
        if (selectedMenu == "topup") {
            $(".topup .price-value-container .price-value").html($(this).attr("value"));
            $(".topup .price-value-container .price-unit").html("تومان");
            $("#dataAmount").val($(this).attr("value"));
            setAmounts();
        }
        else if (selectedMenu == "pin") {
            $(".pin .price-value-container .price-value").html($(this).attr("value"));
            $(".pin .price-value-container .price-unit").html("تومان");
            $("#dataAmount").val($(this).attr("value"));
            setAmounts();
        }
        else if (selectedMenu == "internet-package") {
            $(this).parent().children().removeClass('active');
            $(this).addClass('active');
            setInternetPackage(selectedOperator.toLowerCase(), $(this).data('type'));
        }
    });

    function setAmounts() {
        var count = parseInt($("." + selectedMenu + " .count .count-value").val());
        if (selectedMenu == "topup") {
            count = 1;
        } else {
            count = $(".count .count-value").val();
        }

        if (jQuery.inArray(selectedMenu, ['pin', 'topup', 'wimax']) > -1) {
            var price = $('input[name=radio-' + selectedMenu + ']:checked').val() * count;
        } else if (selectedMenu == 'internet-package') {
            var price = $('#InternetPackageTypes').find('option:selected').data('price');
        } else {
            var price = $('.buy.' + selectedMenu + ' .types-container.' + selectedMenu + ' select').find('option:selected').data("price") * count;
        }
        $("." + selectedMenu + " " + ".price-value-container .price-value").html((price));
        $("#dataCount").val(count);
    }

    $(".arrow .arrow-up").click(function () {
        countBoxValue = parseInt($(".count .count-value").val());
        if (countBoxValue < 5) {
            $(".count .count-value").val(countBoxValue + 1);
            setAmounts();
        }
    });

    $(".arrow .arrow-down").click(function () {
        countBoxValue = parseInt($(".count .count-value").val());
        if (countBoxValue > 1) {
            $(".count .count-value").val(countBoxValue - 1);
            setAmounts();
        }
    });

    $(".gateways-container div").click(function () {
        $("input[name='data[issuer]']").val($(this).data("gateway-type"));
        $('.gateway.active').removeClass('active');
        $(this).addClass('active');
    });

    $(".service-container").click(function () {
        $('.support.active').removeClass('active');
        $(this).addClass('active');
    });
    $('#InternetPackageCategories').on('change', function () {
        setInternetPackage(selectedOperator.toLowerCase(), $('.internet-package.types-container').find('label.active').data('type'), $(this).find('option:selected').data('package-type'));
    });
    $('#InternetPackageTypes').on('change', function () {
        $('.internet-package.types-container').find('.price-value').html($(this).find('option:first-child').data('price'));
        $("#dataAmount").val($(".internet-package .internet-package-types .price-value-container .price-value").html());
        $("input[name='data[packageId]']").val($(this).find('option:selected').attr("value"));

    });

    function setInternetPackage(operator, simType, category, packageId) {
        var packages = products.internetPackage[operator];
        if (simType == null) {
            //clear divs
            $('.internet-package.types-container').find('.charge-type-container').html('');
            $.each(packages, function (key, value) {
                $('.internet-package.types-container').find('.charge-type-container').append("<label class='charge-type' data-type='" + key + "'><input type='radio' name='radio-sim-type'/><p>" + key + "</p></label>");
            });
            $('.internet-package.types-container').find('.charge-type-container label').first().click();
        } else {
            if (category == null) {
                var internetTypes = packages[simType];

                //clear select
                $('#InternetPackageCategories').html('');
                $.each(internetTypes, function (key, value) {
                    $('#InternetPackageCategories').append("<option data-package-type='" + key + "'>" + key + "</option>");
                });
                $('#InternetPackageCategories').first().trigger('change');
            } else {
                var packagesByCategory = packages[simType][category];
                //clear package
                $('#InternetPackageTypes').html('');
                if (packagesByCategory == null) {
                    $('.package').html("بسته ای در این دسته وجود ندارد.");
                } else {
                    $.each(packagesByCategory, function (key, value) {
                        var option = $('<option data-price="' + value.price + '"></option>').val(value.id).html(value["name"]);
                        $('#InternetPackageTypes').append(option);
                    });
                    $('#InternetPackageTypes').find('option:first-child').trigger('change');
                    if (packageId == null) {
                        $('#InternetPackageTypes').first().trigger('click');
                    } else {
                        $('#InternetPackageTypes').find('option[value="' + packageId + '"]').trigger('click');
                    }
                }
            }
        }
    }

    $(".bill-id-input").keyup(function () {
        if ($(this).val().length == $(this).attr('maxLength')) {
            $(".payment-id-input").focus();
        }
    });

    $(".support").click(function () {
        if ($('.support').hasClass('active')) {
            $('.support.active').removeClass('active');
        } else {
            $(this).addClass('active');
        }
        $(".support-content").show();
        $(".help-arrow").show();
    });

    $(".support").mouseover(function () {
        $(".support-content").show();
        $(".help-arrow").show();
    });

    $(".support").mouseout(function () {
        if ($('.support').hasClass('active')) {
            $(".support-content").show();
            $(".help-arrow").show();
        } else if (!$('.support').hasClass('active')) {
            $(".support-content").hide();
            $(".help-arrow").hide();
        }
    });

    function setText() {
        $('option:contains("گیفت کارت")').each(function () {
            $(this).html($(this).html().split("گیفت کارت").join(""));
        });
        $('option:contains("XBox")').each(function () {
            $(this).html($(this).html().split("XBox").join("ایکس باکس "));
        });
        $('option:contains("PlayStationNetwork")').each(function () {
            $(this).html($(this).html().split("PlayStationNetwork").join(""));
            $(this).prepend("پلی استیشن ");

        });
    }

    $(".check").click(function () {
        var billIdCheck = true;
        var paymentIdCheck = true;
        var billCheck = true;
        var emptyCheck = true;
        var emailCheck = true;
        var cellphoneCheck = true;
        var cellphone = $('#dataCellphone').val();
        var email = $('#dataEmail').val();
        var billId = $(".bill-id-input").val();
        var paymentId = $(".payment-id-input").val();

        if (billId == '' || paymentId == '') {
            emptyCheck = true;
            dialogue('شناسه قبض و شناسه پرداخت را وارد نمایید', 'تذکر');
            $('.types-container.bill').hide();
            $(".buy.bill .types").css({"background-color": "#ff5a5a"});
            $('.buy.' + selectedMenu + ' .types .types-cover').show();
            return;
        }
        if (isNaN(billId) || isNaN(paymentId)) {
            emptyCheck = false;
            dialogue('شناسه قبض و شناسه پرداخت فقط باید عدد باشند.', 'تذکر');
        } else {
            if (!checkBillElement(billId.replace(/^[0]+/g, ""))) {
                billIdCheck = false;
            }
            if (!checkBillElement(paymentId.substr(0, paymentId.length - 1).replace(/^[0]+/g, ""))) {
                paymentIdCheck = false;
            }
            if (!checkBillElement(billId.replace(/^[0]+/g, "") + paymentId.replace(/^[0]+/g, ""))) {
                billCheck = false;
            }
        }

        if (emptyCheck && billIdCheck && paymentIdCheck) {
            if (!billCheck) {
                dialogue('شناسه قبض با شناسه پرداخت همخوانی ندارد.', 'تذکر');
                return;
            }
            var billTypesPersian = ["آب", "بــرق", "گـــاز", "تلفن ثابت", "تلفن همراه", "عوارض شهرداری", "", "", "جریمه راهنمایی و رانندگی", "بیمه پاسارگاد", "سایر"];
            var billTypesEnglish = ["water", "electricity", "gas", "telephone", "cellphone", "mayoralty", "", "", "police", "pasargad", "others"];
            var billLength = billId.length;
            var paymentLength = paymentId.length;
            var billType = billId.substr((billLength - 2), 1) - 1;
            if (billType === -1) {
                billCoNumber = billId.substr((billLength - 5), 3);
                if(billCoNumber  == 102){
                    billType = 9;
                }else{
                    billType = 10;
                }
            }
            var billAmount = paymentId.substr(0, (paymentLength - 5)) * 100; // Tomans
            $('table#bill-info span#bill-type').removeClass().addClass('bill').addClass(billTypesEnglish[billType]);
            $('table#bill-info span#bill-type-title').text(billTypesPersian[billType]);
            $('table#bill-info span#bill-amount').text(billAmount);
            $('table#bill-info span#bill-id').text(billId);
            $('table#bill-info span#payment-id').text(paymentId);


            $('.types-container.bill').show();
            $(".buy.bill .types").css({"background-color": "#469541"});
            $('.buy.' + selectedMenu + ' .types .types-cover').hide();
        }

        if (billIdCheck == false) {
            if ($('.buy.bill .bill-id div.message').length <= 0) {
                $('.buy.bill .bill-id').prepend('<div class="message error-message">شناسه قبض معتبر نیست.</div>');
            }
        } else {
            $('.buy.bill .bill-id div.message').remove();
        }

        if (paymentIdCheck == false) {
            if ($('.buy.bill .payment-id div.message').length <= 0) {
                $('.buy.bill .payment-id').prepend('<div class="message error-message">شناسه پرداخت معتبر نیست.</div>');
            }
        } else {
            $('.buy.bill .payment-id div.message').remove();
        }

        if (paymentIdCheck == false && billIdCheck == false) {
            $(".buy.bill .bill-container").css("margin", "0px auto");
            $(".buy.bill .bill-id").css("margin-top", "0px");
            $(".buy.bill .payment-id").css("margin-top", "0px");
            $(".buy.bill .bill-check").css("margin", "2px auto 0px");
            $('.types-container.bill').hide();
            $(".buy.bill .types").css({"background-color": "#ff5a5a"});
            $('.buy.' + selectedMenu + ' .types .types-cover').show();
            $('.payment-cover').show();
        }
        if ((billIdCheck == true && paymentIdCheck == false) || (billIdCheck == false && paymentIdCheck == true)) {
            $(".buy.bill .bill-container").css("margin", "20px auto 0px");
            $(".buy.bill .bill-id").css("margin-top", "20px");
            $(".buy.bill .payment-id").css("margin-top", "20px");
            $(".buy.bill .bill-check").css("margin", "20px auto 0px");
            $('.types-container.bill').hide();
            $(".buy.bill .types").css({"background-color": "#ff5a5a"});
            $('.buy.' + selectedMenu + ' .types .types-cover').show();
            $('.payment-cover').show();
        }
        if (paymentIdCheck == true && billIdCheck == true) {
            $(".buy.bill .bill-container").css("margin", "40px auto 0px");
            $(".buy.bill .bill-id").css("margin-top", "20px");
            $(".buy.bill .payment-id").css("margin-top", "20px");
            $(".buy.bill .bill-check").css("margin", "35px auto 0px");
            $("#dataPaymentId").val($("#payment-id").html());
            $("#dataBillId").val($("#bill-id").html());
            $('.payment-cover').hide();
        }
    });

    function checkBillElement(element) {
        var checkSum = element.substr(element.length - 1, 1);
        element = element.substr(0, element.length - 1);
        element = element.split("");
        coefficient = 2;
        billLength = element.length;
        sum = 0;
        for (i = (billLength - 1); i >= 0; i--) {
            sum += coefficient * element[i];
            coefficient++;
            if (coefficient == 8) {
                coefficient = 2;
            }
        }

        calculatedCheckSum = sum % 11;
        if (calculatedCheckSum == 1 || calculatedCheckSum == 0) {
            calculatedCheckSum = 0;
        } else {
            calculatedCheckSum = 11 - calculatedCheckSum;
        }

        if (calculatedCheckSum == checkSum) {
            return true;
        }
        return false;
    }

    $(".count .count-value").keydown(function () {
        return false;
    });

    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        } else {
            return false;
        }
    }

    setInterval((function () {
        if (selectedMenu == 'gift-card' || selectedMenu == 'anti-virus') {
            $('input#dataCount').val($('.buy.' + selectedMenu + ' .types-container.' + selectedMenu + ' .count-value').val());
        }
        if (selectedMenu == 'pin') {
            $('input#dataCount').val($('.buy.pin .types-container.pin .count-value').val());
            $('input#dataCount').val($('.buy.pin .types-container.pin .count-value').val());
        }
        setAmounts();

        $('#dataEmail').val($('.buy.' + selectedMenu + ' .informations .email').val());
        $('#dataCellphone').val($('.buy.' + selectedMenu + ' .informations .phone-number').val());
    }), 200);

    var sendForm;

    function checkForm() {
        sendForm = false;
        var emptyCheck = true;
        var cellphoneCheck = true;
        var cellphoneFormatCheck = true;
        var emailCheck = true;
        var billCheck = true;
        var amountCheck = true;
        var cellphone = $('#dataCellphone').val();
        var email = $('#dataEmail').val();
        var divType = selectedMenu;
        if (jQuery.inArray(selectedMenu, ['pin', 'topup']) > -1) {
            divType = 'charge';
        }
        if (selectedMenu == 'topup') {
            if (!isTarabord) {
                if (cellphone.length == 11 && !isNaN(cellphone) && jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099']) !== -1) {
                    if (selectedOperator == 'MTN' || selectedOperator == 'MTN!') {
                        if (jQuery.inArray(cellphone.substring(0, 3), ['093', '090']) == -1) {
                            cellphoneFormatCheck = false;
                        }
                    } else if (selectedOperator == 'MCI') {
                        if (jQuery.inArray(cellphone.substring(0, 3), ['091', '099']) == -1) {
                            cellphoneFormatCheck = false;
                        }
                    } else if (selectedOperator == 'RTL') {
                        if (jQuery.inArray(cellphone.substring(0, 4), ['0921', '0922']) == -1) {
                            cellphoneFormatCheck = false;
                        }
                    }
                } else {
                    cellphoneCheck = false;
                }
            }
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (email.length > 0 && !filter.test(email)) {
                emailCheck = false;
            }
        } else if (selectedMenu == 'pin') {
            if ((cellphone.length == 0 || jQuery.inArray(cellphone, ['093', '090', '091', '092']) != -1) && email.length == 0) {
                emptyCheck = false;
                dialogue('جهت استفاده از خدمات پشتیبانی، ایمیل یا شماره موبایل خود را وارد نمایید.', 'تذکر');
            } else {
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (email.length > 0 && !filter.test(email)) {
                    emailCheck = false;
                }

                if (emailCheck && jQuery.inArray(cellphone, ['093', '090', '091', '092']) == -1) {
                    if (cellphone.length == 11 && !isNaN(cellphone)) {
                        if (jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099']) == -1) {
                            cellphoneCheck = false;
                        } else {
                            cellphoneCheck = true;
                        }
                    } else {
                        cellphoneCheck = false;
                    }
                }
            }
        } else if (selectedMenu == 'internet-package') {
            var cellphoneFormats = {
                "mtn": /(0)?9([0,3]{1})\d{8}/,
                "mci": /(0)?9([1,9]{1})\d{8}/,
                "tdlte": /(0)?94\d{8}/,
                "rtl": /^([0]{1})([9]{1})([2]{1})([1,2]{1})([0-9]{7})$/
            };
            var regex = cellphoneFormats[selectedOperator.toLowerCase()];
            var selectedType = $('.internet-package.types-container').find('.charge-type-container label.active').data('type');
            if (selectedType.includes('ثابت')) {
                regex = cellphoneFormats['tdlte'];
            }
            if (!isTarabord) {
                if (cellphone.length == 11 && !isNaN(cellphone) && jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099','094']) !== -1) {
                    if (!regex.test(cellphone)) {
                        cellphoneFormatCheck = false;
                    }
                } else {
                    cellphoneCheck = false;
                }
            }
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (email.length > 0 && !filter.test(email)) {
                emailCheck = false;
            }
        } else if (selectedMenu == 'bill') {
            var billId = $('.bill-id-input').val();
            var paymentId = $('.payment-id-input').val();

            if (billId == '' || paymentId == '') {
                emptyCheck = true;
                dialogue('شناسه قبض و شناسه پرداخت را وارد نمایید', 'تذکر');
                return;
            }
            if (isNaN(billId) || isNaN(paymentId)) {
                emptyCheck = false;
                dialogue('شناسه قبض و شناسه پرداخت فقط باید عدد باشند.', 'تذکر');
            } else {
                if (!checkBillElement(billId)) {
                    billCheck = false;
                } else {
                    if (!checkBillElement(paymentId.substr(0, paymentId.length - 1))) {
                        billCheck = false;
                    } else {
                        billCheck = true;
                    }
                }

                if (cellphone.length == 0 && email.length == 0) {
                    emptyCheck = false;
                    dialogue('جهت استفاده از خدمات پشتیبانی، ایمیل یا شماره موبایل خود را وارد نمایید.', 'تذکر');
                } else {
                    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if (email.length > 0 && !filter.test(email)) {
                        emailCheck = false;
                    }

                    if (cellphone.length > 0) {
                        if (cellphone.length == 11 && !isNaN(cellphone)) {
                            if (jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099']) == -1) {
                                cellphoneCheck = false;
                            } else {
                                cellphoneCheck = true;
                            }
                        } else {
                            cellphoneCheck = false;
                        }
                    }
                }
            }
        } else if (selectedMenu == 'gift-card') {
            if (cellphone.length == 0 && email.length == 0) {
                emptyCheck = false;
                dialogue('جهت استفاده از خدمات پشتیبانی، ایمیل یا شماره موبایل خود را وارد نمایید.', 'تذکر');
            } else {
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (email.length > 0 && !filter.test(email)) {
                    emailCheck = false;
                }

                if (cellphone.length > 0) {
                    if (cellphone.length == 11 && !isNaN(cellphone)) {
                        if (jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099']) == -1) {
                            cellphoneCheck = false;
                        } else {
                            cellphoneCheck = true;
                        }
                    } else {
                        cellphoneCheck = false;
                    }
                } else {
                    dialogue('لطفاً شماره موبایل خودتان را وارد نمایید، اطلاعات گیفت کارت فقط به موبایل شما پیامک می شود.', 'تذکر');
                    emptyCheck = false;
                }
            }
        } else {
            if (cellphone.length == 0 && email.length == 0) {
                emptyCheck = false;
                dialogue('جهت استفاده از خدمات پشتیبانی، ایمیل یا شماره موبایل خود را وارد نمایید.', 'تذکر');
            } else {
                var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (email.length > 0 && !filter.test(email)) {
                    emailCheck = false;
                }

                if (cellphone.length > 0) {
                    if (cellphone.length == 11 && !isNaN(cellphone)) {
                        if (jQuery.inArray(cellphone.substr(0, 3), ['090', '091', '092', '093', '099']) == -1) {
                            cellphoneCheck = false;
                        } else {
                            cellphoneCheck = true;
                        }
                    } else {
                        cellphoneCheck = false;
                    }
                }
            }
        }
        if (cellphoneFormatCheck == false) {
            if (selectedMenu == 'topup' || selectedMenu == 'internet-package') {
                if (!isTarabord) {
                    Swal.fire({
                        title: '',
                        text: "شما " + (selectedMenu === "topup" ? "شارژ مستقیم" : "بسته اینترنت") + " " + operatorsName[selectedOperator] + " را انتخاب کردید اما شماره " + cellphone + " مربوط به اپراتور " + operatorsName[selectedOperator] + " نیست!" +
                        " آیا این شماره را به "+operatorsName[selectedOperator]+" ترابرد کردید؟\n",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'بله ترابرد کردم.',
                        cancelButtonText: 'خیر اشتباه شد.'
                    }).then((result) => {
                        if (result.value) {
                            cellphoneFormatCheck = true;
                            isTarabord = true;
                            $('#dataIsTarabord').val(true);
                            $(document).find('input[type="submit"]').trigger('click');
                        } else {
                            Swal.fire({
                                title: '',
                                text: 'شماره صحیح  اپراتور ' + operatorsName[selectedOperator] + " را وارد کنید.",
                                type: 'warning',
                                confirmButtonText: 'باشه.',
                            });
                        }
                    });
                    return;
                }
            }
        }
        if (cellphoneCheck == false) {
            if ($('.buy.' + selectedMenu + ' .informations .cellphone div.message').length <= 0) {
                $('.buy.' + selectedMenu + ' .informations .cellphone').prepend('<div class="message error-message">شماره وارد شده صحیح نمی باشد.</div>');
            }
        } else {
            $('.buy.' + selectedMenu + ' .informations .cellphone div.message').remove();
        }

        if (emailCheck == false) {

            if ($('.buy.' + selectedMenu + ' .informations .mail div.message').length <= 0) {
                $('.buy.' + selectedMenu + ' .informations .mail').prepend('<div class="message error-message">این ایمیل صحیح نمی باشد.</div>');
            }
        } else {
            $('.buy.' + selectedMenu + ' .informations .mail div.message').remove();
        }

        if (cellphoneCheck == false && emailCheck == false) {
            if (selectedMenu == "gift-card") {
                $(".informations .information-container").css("margin", "0px auto");
                $(".informations .cellphone").css("margin-top", "-15px");
                $(".informations .phone-number").css("margin-top", "0px");
                $(".informations .error-message").css("margin", "4px 8px");
                $(".informations .mail").css("margin-top", "5px");
                $(".informations .email").css("margin-top", "0px");
            } else {
                $(".informations .information-container").css("margin", "0px auto");
                $(".informations .phone-number").css("margin-top", "0px");
                $(".informations .email").css("margin-top", "0px");
            }
        }
        if ((cellphoneCheck == true && emailCheck == false) || (cellphoneCheck == false && emailCheck == true)) {
            if (selectedMenu == "gift-card") {
                $(".informations .information-container").css("margin", "20px auto 0px");
                $(".informations .cellphone").css("margin-top", "20px");
                $(".informations .error-message").css("margin", "10px 8px");
                $(".informations .mail").css("margin-top", "20px");
            } else {
                $(".informations .information-container").css("margin", "20px auto 0px");
                $(".informations .cellphone").css("margin-top", "20px");
                $(".informations .mail").css("margin-top", "20px");
            }
        }
        if (emailCheck == true && cellphoneCheck == true) {
            $(".informations .information-container").css("margin", "57px auto 0px");
            $(".informations .cellphone").css("margin-top", "20px");
            $(".informations .mail").css("margin-top", "20px");
        }

        if (emptyCheck && cellphoneCheck && emailCheck && amountCheck && cellphoneFormatCheck) {
            sendForm = true;
        } else {
            sendForm = false;
        }

    }

    $('#dataAccountTemp').val($.cookie('cellphone'));
    $('#EmailInput').val($.cookie('email'));

    $(".submit").click(function (e) {

        e.preventDefault();
        var action = '';
        if (selectedMenu == 'topup') {
            action = 'topup';
        } else if (selectedMenu == 'wimax') {
            action = 'topup';
        } else if (selectedMenu == 'internet-package') {
            action = 'internetRecharge';
        } else if (selectedMenu == 'bill') {
            action = 'bill';
        } else if (selectedMenu == 'pin') {
            action = 'buyProduct';
            $('#dataProductId').val('CC-' + $('#dataType').val() + '-' + $('#dataAmount').val());
        } else {
            action = 'buyProduct';
        }

        checkForm();
        if (sendForm) {
            if ($('.save-information').prop('checked')) {
                $.cookie('cellphone', $('#dataCellphone').val());
                $.cookie('email', $('#dataEmail').val());
            }

            $('.cover').fadeIn();
            $('.connecting p').text('دریافت اطلاعات ...');
            $('.connecting').attr('style', 'top:' + ($(window).height() - $('div.connecting').height()) / 2 + 'px; right:' + ($(window).width() - $('div.connecting').width()) / 2 + 'px; display:block!important;');
            $.ajax({
                type: 'POST',
                url: 'https://chr724.ir/services/v3/EasyCharge/' + action,
                data: $('form#myForm').serialize(),
                async: false,
                contentType: "application/json",
                dataType: 'jsonp',
                crossDomain: true,
                success: function (data) {
                    $('.connecting p').text('انتقال به بانک ...');
                    doProccess(data);
                },
                error: function (e) {
                    $('.cover').fadeOut();
                    $('.connecting').fadeOut();
                    isTarabord = false;
                    dialogue("در حال حاضر امکان برقرار ارتباط با سرور وجود ندارد. (خطا: " + e.status + ")<br>لطفاً بعداً مراجعه نمایید.", "خطا");
                }
            });
        }
        return false;
    });

    function doProccess(data) {
        if (data.status == 'Success') {
            console.log(data);
            if ($('#dataIssuer').val() == 'Zarinpal') {
                Zarinak.setAuthority(data.paymentInfo.paymentGateway.authority);
                Zarinak.open();
                $('.connecting p').text('لطفاً صبر کنید ...');
            } else {
                window.location.replace(data.paymentInfo.url);
            }
        } else {
            isTarabord = false;
            dialogue(data.errorMessage, "خطا");
            $('.cover').fadeOut();
            $('.connecting').fadeOut();
        }
    }

    $.ajax({
        type: 'POST',
        url: "https://chr724.ir/services/v3/EasyCharge/initializeDataCategorizedFormat",
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        crossDomain: true,
        success: function (data) {
            products = data.products
            $('.support-number').html(data.support.phone || '');
            $('.support-email').html(data.support.email || '');
            paymentGateways = data.paymentGateways;
            $(".load").fadeOut();
            initialize();
        },
        error: function (e) {
            $(".load div:first-child").hide();
            $(".load div:last-child").show();
            $(".load div:last-child p").html("در حال حاضر امکان برقراری ارتباط با سرور وجود ندارد. (خطا: " + e.status + ")<br>لطفاً بعداً مراجعه نمایید.", "خطا");
            $(".load").one("click", function () {
                $(this).fadeOut();
            });
        }
    });

    function initialize() {

        //Add payment gateways to form
        paymentGateways = paymentGateways.filter(gateway => gateway == 'Zarinpal' || gateway == 'Emtiyaz');
        paymentGateways.push('Default');
        paymentGateways.reverse();
        if (paymentGateways.length > 1) {
            $.each(paymentGateways, function (gatewayKey, gatewayValue) {
                $.each(paymentGateways, function (index, value) {
                    $(".gateway[data-gateway-type=" + value + "]").show();
                    $('.gateways-container').css("width", paymentGateways.length * 58 + 'px');
                });
            });
        }else{
            $('.gateways-container').remove();
            $('.gateway-title').remove();
        }

        $.each(products.giftCard, function (key, value) {
            if (value != "") {
                giftcardCount++;
                $(".gift[data-gift-type=" + key + "]").show();
            }
        });

        if (giftcardCount > 6) {
            $(".gift-card-container").css({"width": "317px", "overflow-y": "scroll"});
        }

        $.each(products.antivirus, function (key, value) {
            if (value != "") {
                antivirusCount++;
                $(".antivirus[data-antivirus-type=" + key + "]").show();
            }
            ;
        });

        if (antivirusCount > 6) {
            $(".gift-card-container").css({"width": "317px", "overflow-y": "scroll"});
        }

        if(giftcardCount === 0){
            $(".gift-card-container").html('<p>در حال حاضر این محصول موجود نمی باشد.</p>');
            $(".gift-card-container").css({"display": "flex","justify-content": "center", "align-items": "center"});
        }
        if(antivirusCount === 0){
            $(".anti-virus-container").html('<p>در حال حاضر این محصول موجود نمی باشد.</p>');
            $(".anti-virus-container").css({"display": "flex","justify-content": "center", "align-items": "center"});
        }

    }

    function dialogue(content, title) {
        $('<div />').qtip({
            content: {
                text: content,
                title: {
                    text: title,
                    button: true
                }
            },
            position: {
                my: 'center', at: 'center',
                target: $(window)
            },
            show: {
                ready: true,
                modal: {
                    on: true,
                    blur: true
                }
            },
            hide: true,
            style: 'qtip-bootstrap qtip-shadow ui-tooltip-rounded helpModalClass',
            events: {
                render: function (event, api) {
                    $('button', api.elements.content).click(function (e) {
                        api.hide(e);
                    });
                },
                hide: function (event, api) {
                    api.destroy();
                }
            }
        });
    }

    $('.help').qtip({
        content: {
            text: 'در حال بارگذاری ...',
            ajax: {
                url: "https://chr724.ir/pages/help",
                dataType: 'html'
            },
            title: {
                text: 'راهنما',
                button: true
            }
        },
        position: {
            my: 'center', // ...at the center of the viewport
            at: 'center',
            target: $(window)
        },
        show: {
            event: 'click', // Show it on click...
            solo: true, // ...and hide all other tooltips...
            modal: {
                effect: function (state) {
                    $(this).fadeTo(1000, state ? 0.6 : 0, function () {
                        if (!state) {
                            $(this).hide();
                        }
                    });
                }
            }
        },
        hide: false,
        style: 'qtip-bootstrap qtip-shadow ui-tooltip-rounded helpModalClass'
    });

    $('.gateway').qtip({
        content: {attr: 'data-tooltip'},
        style:
            {
                classes: 'qtip-dark qtip-rounded qtip-shadow bank-qtip',
            },
        position:
            {
                my: 'bottom center',  // Position my top left...
                at: 'top center', // at the bottom right of...
            }
    });

    $(".phone-number, .bill-id-input, .payment-id-input").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A,Ctrl+C,Ctrl+V,Ctrl+X,Ctrl+Z, Command+A
            ((e.keyCode == 65 || e.keyCode == 86 || e.keyCode == 67 || e.keyCode == 88 || e.keyCode == 90) && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    $(".phone-number").keyup(function (e) {
        // Convert persian digits to english digits
        $(this).val(persianDigitsToEnglish($(this).val()));
    });

    // $(".phone-number").bind("paste", function(e) {
    // Convert persian digits to english digits
    // $(this).val(persianDigitsToEnglish(e.originalEvent.clipboardData.getData('text')));
    // });


    String.prototype.replaceArray = function (find, replace) {
        var replaceString = this;
        var regex;
        for (var i = 0; i < find.length; i++) {
            regex = new RegExp(find[i], "g");
            replaceString = replaceString.replace(regex, replace[i]);
        }
        return replaceString;
    };

    function persianDigitsToEnglish(persianDigits) {
        var firstPersianArray = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        var secondPersianArray = ["۰", "۱", "۲", "٣", "٤", "٥", "٦", "٧", "۸", "۹"]; // just 3,4,5,6,7 is different
        var englishArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        return persianDigits.replaceArray(firstPersianArray, englishArray).replaceArray(secondPersianArray, englishArray);
    }
});