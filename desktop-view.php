<?php include 'config.php'; ?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $config['title']; ?></title>
		<meta name="description" content="<?php echo $config['description']; ?>" />
		<meta name="keywords" content="<?php echo $config['keywords']; ?>" />
		<link type="image/x-icon" rel="icon" href="css/favicon.ico"/>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link type="text/css" rel="stylesheet" href="css/style.css" />
		<link type="text/css" rel="stylesheet" href="css/jquery.qtip.css" />
		<link type="text/css" rel="stylesheet" href="css/font-awesome.min.css" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		<div class="whole">
			<div class="buy-container">
				<div class="buy topup">
					<div class="leaf operators">
						<div class="topup">
							<p>انتخاب اپراتور</p>
							<div class="operators-container">
								<div class="operator mtn active" data-charge-type="MTN"></div>
								<div class="operator mci" data-charge-type="MCI"></div>
								<div class="operator rtl" data-charge-type="RTL"></div>
								<div class="clear"></div>
							</div>
						</div>
						<div class="pin">
							<p>انتخاب اپراتور</p>
							<div class="operators-container">
								<div class="operator mtn active" data-charge-type="MTN"></div>
								<div class="operator mci" data-charge-type="MCI"></div>
								<div class="operator rtl" data-charge-type="RTL"></div>
								<div class="clear"></div>
							</div>
						</div>
						<div class="internet-package">
                            <p>انتخاب اپراتور</p>
                            <div class="operators-container">
                                <div class="operator mtn active" data-charge-type="MTN"></div>
                                <div class="operator mci" data-charge-type="MCI"></div>
                                <div class="operator rtl" data-charge-type="RTL"></div>
                                <div class="clear"></div>
                            </div>
						</div>
						<div class="bill">
							<p>اطلاعات قبض</p>
							<div class="bill-container">
								<div class="bill-id">
									<input class="bill-id-input" type="text" maxlength="13" placeholder="شناسه قبض"></input>
								</div>
								<div class="payment-id">
									<input class="payment-id-input" type="text" maxlength="13" placeholder="شناسه پرداخت"></input>
								</div>
							</div>
							<div class="bill-check">
								<input class="check" type="button" value="بررسی">
							</div>
						</div>
						<div class="gift-card">
							<p>انتخاب گیفت کارت</p>
							<div class="gift-card-container">
								<div class="gift itunes" data-gift-type="iTunes"></div>
								<div class="gift google-play" data-gift-type="GooglePlay"></div>
								<div class="gift playstation" data-gift-type="PlayStation"></div>
								<div class="gift xbox" data-gift-type="XBox"></div>
								<div class="gift microsoft" data-gift-type="Microsoft"></div>
								<div class="gift playstation-plus" data-gift-type="PlayStationPlus"></div>
								<div class="gift amazon" data-gift-type="Amazon"></div>
								<div class="gift steam" data-gift-type="Steam"></div>
								<div class="gift spotify" data-gift-type="Spotify"></div>
								<div class="gift skype" data-gift-type="Skype"></div>
								<div class="clear"></div>
							</div>
						</div>
						<div class="anti-virus">
							<p>انتخاب آنتی ویروس</p>
							<div class="anti-virus-container">
								<div class="antivirus eset" data-antivirus-type="Eset"></div>
								<div class="antivirus bitdefender" data-antivirus-type="BitDefender"></div>
								<div class="antivirus kaspersky" data-antivirus-type="Kaspersky"></div>
								<div class="antivirus norton" data-antivirus-type="Norton"></div>
								<div class="antivirus mcafee" data-antivirus-type="McAfee"></div>
								<div class="antivirus avira" data-antivirus-type="Avira"></div>
								<div class="antivirus avg" data-antivirus-type="AVG"></div>
								<div class="antivirus avast" data-antivirus-type="Avast"></div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
					<div class="leaf types">
						<div class="types-cover">
							<p>ابتدا از منوی سمت راست، گزینه ی مورد نظر خود را انتخاب کنید.</p>
							<p>ابتدا شناسه ی قبض و شناسه ی پرداخت خود را وارد کنید.</p>
							<div class="point-at"></div>
						</div>
						<div class="topup types-container">
							<p>انتخاب نوع شارژ</p>
							<div class="charge-type-container">
								<label class="charge-type" value="1000">
									<input type="radio" name="radio-topup" checked="checked" value="1000"></input>
									<p>1000 تومانی</p>
								</label>
								<label class="charge-type" value="2000">
									<input type="radio" name="radio-topup" value="2000"></input>
									<p>2000 تومانی</p>
								</label>
								<label class="charge-type" value="5000">
									<input type="radio" name="radio-topup" value="5000"></input>
									<p>5000 تومانی</p>
								</label>
								<label class="charge-type" value="10000">
									<input type="radio" name="radio-topup" value="10000"></input>
									<p>10000 تومانی</p>
								</label>
								<label class="charge-type" value="20000">
									<input type="radio" name="radio-topup" value="20000"></input>
									<p>20000 تومانی</p>
								</label>
								<div class="clear"></div>
							</div>
							<div class="price-container">
								<div class="price-title">
									<p>مبلغ</p>
								</div>
								<div class="price-value-container">
									<p class="price-value"></p>
									<p class="price-unit"></p>
								</div>
								<div class="clear"></div>
							</div>
							<div class="magic-charge">
								<input value="1" id="magicCharge" name="data[Magic]" type="checkbox">
								<label for="magicCharge">شارژ شگفت انگیز</label> 
							</div>
							<div class="non-credit-mtn">
								<input value="1" id="nonCreditMTN" name="data[NonCreditMTN]" type="checkbox">
								<label for="nonCreditMTN">قبض (شارژ) دائمی ایرانسل</label>
							</div>
							<div class="wimax">
								<input value="wimax" id="wimax" name="data[wimax]" type="checkbox">
								<label for="wimax">شارژ وایمکس</label>
							</div>
						</div>
						<div class="pin types-container">
							<p>انتخاب نوع و تعداد کارت شارژ</p>
							<div class="charge-type-container">
								<label class="charge-type" value="1000">
									<input type="radio" name="radio-pin" checked="checked" value="1000"></input>
									<p>1000 تومانی</p>
								</label>
								<label class="charge-type" value="2000">
									<input type="radio" name="radio-pin" value="2000"></input>
									<p>2000 تومانی</p>
								</label>
								<label class="charge-type" value="5000">
									<input type="radio" name="radio-pin" value="5000"></input>
									<p>5000 تومانی</p>
								</label>
								<label class="charge-type" value="10000">
									<input type="radio" name="radio-pin" value="10000"></input>
									<p>10000 تومانی</p>
								</label>
								<label class="charge-type" value="20000">
									<input type="radio" name="radio-pin" value="20000"></input>
									<p>20000 تومانی</p>
								</label>
								<div class="clear"></div>
							</div>
							<div class="count-container">
								<p class="count-title">تعداد</p>
								<div class="arrow">
									<div class="arrow-up"></div>
									<div class="arrow-down"></div>
								</div>
								<div class="count">
									<input class="count-value"></input>
								</div>
								<div class="clear"></div>
							</div>
							<div class="price-container">
								<div class="price-title">
									<p>مبلغ</p>
								</div>
								<div class="price-value-container">
									<p class="price-value"></p>
									<p class="price-unit"></p>
								</div>
								<div class="clear"></div>
							</div>
						</div>
						<div class="internet-package types-container">
							<p>انتخاب نوع سیم کارت و بسته</p>
							<div class="charge-type-container">
								<label class="charge-type">
									<input type="radio" name="radio-sim-type" value="Prepaid" class="charge-button"></input>
									<p>سیم کارت اعتباری</p>
								</label>
								<label class="charge-type">
									<input type="radio" name="radio-sim-type" value="Postpaid" class="charge-button"></input>
									<p class="charge-type">سیم کارت دائمی</p>
								</label>
								<div class="clear"></div>
							</div>
							<div class="internet-package-types">
								<select id="InternetPackageCategories">
								</select>
							</div>
                            <div class="internet-package-types">
								<select id="InternetPackageTypes">
								</select>
							</div>
							<div class="price-container">
								<div class="price-title">
									<p>مبلغ</p>
								</div>
								<div class="price-value-container">
									<p class="price-value"></p>
									<p class="price-unit"></p>
								</div>
								<div class="clear"></div>
							</div>
						</div>
						<div class="verify bill types-container">
							<p>مشخصات قبض</p>
							<table id="bill-info">
								<tbody>
									<tr>
										<td>نوع قبض</td>
										<td><span id="bill-type"></span><span id="bill-type-title"></span></td>
									</tr>
									<tr>
										<td>مبلغ قبض</td>
										<td><span id="bill-amount"></span> تومان</td>
									</tr>
									<tr>
										<td>شناسه قبض</td>
										<td><span id="bill-id"></span></td>
									</tr>
									<tr>
										<td>شناسه پرداخت</td>
										<td><span id="payment-id"></span></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="gift-card types-container">
							<p>انتخاب نوع و تعداد گیفت کارت</p>
							<div class="gift-card-types">
								<select>
								</select>
							</div>
							<div class="count-container">
								<p class="count-title">تعداد</p>
								<div class="arrow">
									<div class="arrow-up"></div>
									<div class="arrow-down"></div>
								</div>
								<div class="count">
									<input class="count-value"></input>
								</div>
								<div class="clear"></div>
							</div>
							<div class="price-container">
								<div class="price-title">
									<p>مبلغ</p>
								</div>
								<div class="price-value-container">
									<p class="price-value"></p>
									<p class="price-unit"></p>
								</div>
								<div class="clear"></div>
							</div>
						</div>
						<div class="anti-virus types-container">
							<p>انتخاب نوع و تعداد آنتی ویروس</p>
							<div class="anti-virus-types">
								<select>
								</select>
							</div>
							<div class="count-container">
								<p class="count-title">تعداد</p>
								<div class="arrow">
									<div class="arrow-up"></div>
									<div class="arrow-down"></div>
								</div>
								<div class="count">
									<input class="count-value"></input>
								</div>
								<div class="clear"></div>
							</div>
							<div class="price-container">
								<div class="price-title">
									<p>مبلغ</p>
								</div>
								<div class="price-value-container">
									<p class="price-value"></p>
									<p class="price-unit"></p>
								</div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
					<div class="leaf informations">
						<p>وارد کردن مشخصات</p>
						<div class="information-container">
							<div class="cellphone">
								<input id="dataAccountTemp" name="phoneNumber" class="phone-number" type="text" maxlength="11" placeholder=".شماره موبایل خود را وارد کنید"></input>
							</div>
							<div class="mail">
								<input id="EmailInput" name="email" class="email" type="email" placeholder="ایمیل خود را وارد کنید. (اختیاری)"></input>
							</div>
							<div class="save">
								<img src="img/attention.png" alt="Attention Sign">
								<p class="hint">لطفاً شماره موبایل صحیح را وارد نمایید. اطلاعات  گیفت کارت فقط به موبایل شما پیامک می شود.</p>
								<label>
									<input type="checkbox" name="checkbox" class="save-information"></input>
									<p class="save-info">ذخیره اطلاعات تماس</p>
									<div class="clear"></div>
								</label>
								<div class="clear"></div>
							</div>
						</div>
					</div>
					<div class="leaf payment-gateway">
						<p>درگاه پرداخت</p>
						<div class="gateways-container">
							<div class="gateway mellat" data-gateway-type="Mellat" data-tooltip="ملت"></div>
							<div class="gateway saman" data-gateway-type="Saman" data-tooltip="سامان"></div>
                            <div class="gateway emtiaz" data-gateway-type="Emtiyaz" data-tooltip="امتیاز"></div>
							<div class="gateway zarrinpal" data-gateway-type="Zarinpal" data-tooltip="زرین پال"></div>
							<div class="gateway parsian" data-gateway-type="Parsian" data-tooltip="پارسیان"></div>
							<div class="gateway melli" data-gateway-type="Melli" data-tooltip="ملی"></div>
							<div class="gateway fanava" data-gateway-type="Fanava" data-tooltip="فن آوا"></div>
							<div class="clear"></div>
						</div>
						<div class="attention">
							<img src="img/attention.png" alt="Attention Sign">
							<p>خرید با کلیه کارت های بانکی عضو شبکه شتاب امکان پذیر می باشد.</p>
							<div class="clear"></div>
						</div>
						<div class="payment">
							<input class="submit" type="submit" value="پرداخــت"></input>
						</div>
						<div class="payment-cover"></div>
					</div>
					<div class="clear"></div>
				</div>
				<div class="buy-footer"></div>
				<div class="clear"></div>
			</div>
			<div class="menus-container">
				<div class="top-menu">
					<a href="<?php echo $root; ?>">
						<div class="menu-leaf main-menu">
							<p>صفحه اصلی</p>
						</div>
					</a>
					<div class="support">
						<div class="menu-leaf">
							<p>پشتیبانی</p>
						</div>
						<div class="support-content support-content-left support-content-right">
							<div class="help-arrow help-arrow-left help-arrow-right"></div>
							<div class="content">
								<p>پشتیبانی تلفنی: 88019574-021</p>
								<p>پشتیبانی گوگل: chargereseller24@gmail.com</p>
							</div>
						</div>
					</div>
					<div class="menu-leaf help" data-hasqtip="0" aria-describedby="qtip-0">
						<p>راهنما</p>
					</div>
					<div class="clear"></div>
				</div>
				<div class="services-menu">
					<div class="service-container topup active" data-type="topup">
						<div class="bg-topup"></div>
						<p>شارژ مستقیم</p>
					</div>
					<div class="service-container pin" data-type="pin">
						<div class="bg-pin"></div>
						<p>کارت شارژ</p>
					</div>
					<div class="service-container internet-package" data-type="internet-package">
						<div class="bg-internet-package"></div>
						<p>بسته اینترنتی</p>
					</div>
					<div class="service-container bill" data-type="bill">
						<div class="bg-bill"></div>
						<p>پرداخت قبض</p>
					</div>
					<div class="service-container gift-card" data-type="gift-card">
						<div class="bg-gift-card"></div>
						<p>گیفت کارت</p>
					</div>
					<div class="service-container anti-virus" data-type="anti-virus">
						<div class="bg-anti-virus"></div>
						<p>آنتی ویروس</p>
					</div>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
			<form id="myForm" method="post">
				<input type="text" name="data[type]" id="dataType" value="MTN">
				<input type="text" name="data[ChargeKind]" id="dataChargeKind" value="topup"></input>
				<input type="text" name="data[amount]" id="dataAmount" value="1000">
				<input type="text" name="data[count]" id="dataCount" value="1">
				<input type="text" name="data[cellphone]" id="dataCellphone" value="">
				<input type="text" name="data[email]" id="dataEmail" value="">
				<input type="text" name="data[packageId]" id="dataPackageId" value="">
				<input type="text" name="data[billId]" id="dataBillId" value="">
				<input type="text" name="data[paymentId]" id="dataPaymentId" value="">
				<input type="text" name="data[productId]" id="dataProductId" value="">
				<input type="text" name="data[webserviceId]" id="dataWebserviceId" value="<?php echo $config['webserviceID']; ?>">
				<input type="text" name="data[redirectUrl]" id="dataRedirectUrl" value="<?php echo $root . '/verify.php'; ?>">
				<input type="text" name="data[issuer]" id="dataIssuer" value="">
				<input type="hidden" name="data[paymentDetails]" value="true">
				<input type="text" name="data[redirectToPage]"  value="true">
				<input type="text" name="data[scriptVersion]"  value="Script-Shabdar-1.3">
				<input type="text" name="data[firstOutputType]"  value="json">
				<input type="text" name="data[secondOutputType]"  value="get">
			</form>
			<div id="payment-process"></div>
			<div class="cover"></div>
			<div class="connecting">
				<p></p>
			</div>
			<div class="load">
				<div>
				  <img src="img/loading.gif">
				  <p>در حال بارگذاری</p>
				</div>
				<div class="hide">
					<p></p>
				</div>
			</div>
			<a href="<?php echo $root; ?>/application.php" class="application">
				<img src="img/download-android-application-left.gif" title="دانلود اپلیکیشن اندروید خرید شارژ و پرداخت قبوض" alt="اپلیکیشن اندروید خرید شارژ و پرداخت قبوض">
			</a>
			<script type='text/javascript' src='js/jquery-3.2.1.min.js'></script>
			<script type='text/javascript' src='js/charge.js'></script>
			<script type='text/javascript' src='js/jquery.cookie.js'></script>
			<script type='text/javascript' src='js/jquery.qtip.min.js'></script>
			<script type="text/javascript" src="https://cdn.zarinpal.com/zarinak/v1/checkout.js"></script>
		</div>
	</body>
</html>