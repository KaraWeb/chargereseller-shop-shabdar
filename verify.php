<?php include('config.php'); ?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $config['title']; ?></title>
		<meta name="description" content="<?php echo $config['description']; ?>" />
		<meta name="keywords" content="<?php echo $config['keywords']; ?>" />
		<link type="image/x-icon" rel="icon" href="css/favicon.ico"/>
		<link type="text/css" rel="stylesheet" href="css/verify.css">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<link type="text/css" rel="stylesheet" href="css/jquery.qtip.css" />
		<link type="text/css" rel="stylesheet" href="css/font-awesome.min.css" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		<div class="whole">
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
			</div>
			<div class="buy-container">
				<div class="container verify" style="display:block!important;">
					<?php
						$result = base64_decode(urldecode(htmlspecialchars($_GET['data'])));
						$result = json_decode($result, true);
						
						if ($result['status'] == 'Success') {
							$transactionType = explode('-', $result['products']['type']);
							$transactionType = $transactionType[0];
							if ($transactionType == 'Bill') {
                                $billTypesPersian = array("آب", "بــرق", "گـــاز", "تلفن ثابت", "تلفن همراه", "عوارض شهرداری","","", "جریمه راهنمایی و رانندگی","بیمه پاسارگاد","سایر");
                                $billTypesEnglish = array("water", "electricity", "gas", "telephone", "cellphone", "mayoralty","","", "police","pasargad","others");
                                $billType = $result['products']['details']['billType'] - 1;
                                if($billType == -1){
                                    $billCoNum = substr($result['products']['details']['billId'],strlen($result['products']['details']['billId'])-5,3);
                                    if($billCoNum == 102){
                                        $billType = 9;
                                    }else{
                                        $billType = 10;
                                    }
                                }

                                ?>
                                <div id="left">
									<img src="img/clover-success.png" class="success">
									<div id="description"><p>عملیات پرداخت قبض با موفقیت انجام شد.</p></div>
								</div>
								<div id="content" class="Bill">
									<table id="bill-info">
										<tbody>
											<tr>
												<td>نوع قبض</td>
												<td>
                                                    <span id="type" class="bill <?php echo $billTypesEnglish[$billType]; ?>"></span>
                                                    <span id="type-title"><?php echo $billTypesPersian[$billType]; ?></span>												</td>
											</tr>
											<tr>
												<td>تاریخ</td>
												<td><?php echo $result['date']; ?></td>
											</tr>
											<tr>
												<td>مبلغ قبض</td>
												<td><?php echo $result['products']['price'] . ' تومان'; ?></td>
											</tr>
											<tr>
												<td>شناسه قبض</td>
												<td><?php echo $result['products']['details']['billId']; ?></td>
											</tr>
											<tr>
												<td>شناسه پرداخت</td>
												<td><?php echo $result['products']['details']['paymentId']; ?></td>
											</tr>
											<tr>
												<td>کد پیگیری</td>
												<td><?php echo $result['refId']; ?></td>
											</tr>
										</tbody>
									</table>
									<a href="<?php echo $root; ?>">
										<div class="back">
											<input class="button" type="button" value="بازگشت به صفحه ی اصلی"></input>
										</div>
									</a>
								</div>
					<?php
							} elseif ($transactionType == 'TopUp') {
								$operators = array('MCI' => 'همراه اول', 'MTN' => 'ایرانسل', 'RTL' => 'رایتل', 'TAL' => 'تالیا');
								$operator = explode('-', $result['products']['type']);
					?>
								<div id="left">
									<img src="img/clover-success.png" class="success">
									<div id="description"><p>به زودی خط شما به صورت اتوماتیک شارژ می شود.</p></div>
								</div>
								<div id="content">
									<table>
										<tbody>
											<tr>
												<td>تاریخ</td>
												<td><?php echo $result['date']; ?></td>
											</tr>
											<tr>
												<td>مبلغ شارژ</td>
												<td><?php echo $result['products']['price'] . ' تومان'; ?></td>
											</tr>
											<tr>
												<td>اپراتور شارژ</td>
												<td><?php echo $operators[$operator[1]]; ?></td>
											</tr>
											<tr>
												<td>شماره تلفن همراه</td>
												<td><?php echo $result['products']['details']['cellphone']; ?></td>
											</tr>
											<tr>
												<td>کد پیگیری</td>
												<td><?php echo $result['refId']; ?></td>
											</tr>
										</tbody>
									</table>
									<a href="<?php echo $root; ?>">
										<div class="back">
											<input class="button" type="button" value="بازگشت به صفحه ی اصلی"></input>
										</div>
									</a>
								</div>
						<?php
							} elseif ($transactionType == 'IN') {
					?>
								<div id="left">
									<img src="img/clover-success.png" class="success">
									<div id="description"><p>به زودی بسته اینترنت خریداری شده فعال خواهد شد.</p></div>
								</div>
								<div id="content">
									<table>
										<tbody>
											<tr>
												<td>تاریخ</td>
												<td><?php echo $result['date']; ?></td>
											</tr>
											<tr>
												<td>نام بسته</td>
												<td class="mw-200"><?php echo $result['products']['name']; ?></td>
											</tr>
											<tr>
												<td>مبلغ بسته</td>
												<td><?php echo $result['products']['price'] . ' تومان'; ?></td>
											</tr>
											<tr>
												<td>شماره تلفن همراه</td>
												<td><?php echo $result['products']['details']['cellphone']; ?></td>
											</tr>
											<tr>
												<td>کد پیگیری</td>
												<td><?php echo $result['refId']; ?></td>
											</tr>
										</tbody>
									</table> 
									<a href="<?php echo $root; ?>">
										<div class="back">
											<input class="button" type="button" value="بازگشت به صفحه ی اصلی"></input>
										</div>
									</a>
								</div>
						<?php
							} elseif (in_array($transactionType, array('CC', 'GC', 'AN', 'TC'))) {
								$pinProductDescription = array(
									'CC' => 'اکنون با وارد کردن کد شارژ از طریق صفحه کلید گوشی، تلفن همراه خود را شارژ نمایید.',
									'GC' => 'با استفاده گیفت کارت خریداری شده می توانید از سرویس هایی همچون خرید نرم افزار، بازی، موسیقی، فیلم، کتاب و ... استفاده نمایید.',
									'TC' => 'رمز مجوز را با اعداد انگلیسی به شماره 20001888 پیامک نمایید. پس از دریافت پیامک اعلام اعتبار می توانید پلاک خودرو خود را مطابق روال پیامک کنید.<br>در صورتی که برای نخستین بار از مجوز روزانه استفاده می کنید با شماره ندای ترافیک 87500-021 تماس بگیرید.',
									'AN' => 'با وارد کردن رمز آنتی ویروس خود را فعال کنید.<br>جهت راهنمایی بیشتر به منوی «راهنما» مراجعه نمایید.'
								);
								$dataKeys = array('Serial' => 'سریال', 'Username' => 'نام کاربری', 'ExpireDate' => 'تاریخ انقضاء');
								$productCount = count($result['products']['details']);
						?>
								<div id="left">
									<img src="img/clover-success.png" class="success">
									<div id="description"><p><?php echo $pinProductDescription[$transactionType]; ?></p></div>
								</div>
						<?php
								if ($productCount > 1) {
						?>
								<div id="content">
									<div class="buy-details">
										<h1><?php echo $result['products']['name']; ?></h1>
										<span>تاریخ:</span>
										<span><?php echo $result['date']; ?></span>
										<span style="padding-right: 15px;">کد پیگیری:</span>
										<span><?php echo $result['refId']; ?></span>
										<br>
										<span>قیمت واحد:</span>
										<span><?php echo $result['products']['price']; ?> تومان</span>
										<span style="padding-right: 15px;">تعداد:</span>
										<span style="text-align:right;"><?php echo $result['products']['count']; ?> عدد</span>
										<span style="padding-right: 15px;">قیمت کل:</span>
										<span><?php echo $result['products']['price'] * $result['products']['count']; ?> تومان</span>
									</div>
									<div class="products-info">
										<table>
											<thead>
												<th><?php if ($transactionType != 'AN') { echo 'رمز (پین)'; } else { echo 'پسورد'; }?></th>
											<?php
												foreach ($result['products']['details'][0] as $key => $value) {
													if ($key != 'pin') {
														if (array_key_exists(ucfirst($key), $dataKeys)) {
															echo '<th>' . $dataKeys[ucfirst($key)] . '</th>';
														} else {
															echo '<th>' . $key . '</th>';
														}
													}
												}
											?>
											</thead>
											<tbody>
											<?php 
												for ($i = 0; $i < $productCount; $i++) {
													echo '<tr>';
														foreach ($result['products']['details'][$i] as $key => $value) {
															echo '<td class="ltr">' . $value .'</td>';
														}
													echo '</tr>';
												}
											?>
											</tbody>
										</table>
										<a href="<?php echo $root; ?>">
											<div class="back">
												<input class="button" type="button" value="بازگشت به صفحه ی اصلی"></input>
											</div>
										</a>
									</div>
									
								</div>
						<?php
								} else {
									$operator = explode('-', $result['products']['type']);
									$registerPinCode = '';
									if (in_array($operator[1], array('MCI', 'TAL'))) {
										$registerPinCode = '#رمزشارژ#*140*';
									} elseif (in_array($operator[1], array('MTN', 'RTL'))) {
										$registerPinCode = '#رمزشارژ*141*';
									}
						?>
								<div id="content">
									<h1><?php echo $result['products']['name']; ?></h1>
									<table>
										<tbody>
											<tr>
												<td>تاریخ</td>
												<td><?php echo $result['date']; ?></td>
											</tr>
											<tr>
												<td>مبلغ</td>
												<td><?php echo $result['products']['price'] . ' تومان'; ?></td>
											</tr>
											<tr>
												<td><?php if ($transactionType != 'AN') { echo 'رمز (پین)'; } else { echo 'پسورد'; }?></td>
												<td class="ltr"><?php echo $result['products']['details'][0]['pin']; ?></td>
											</tr>
									<?php
										if (!empty($registerPinCode)) {
									?>
											<tr>
												<td>کد ورود شارژ</td>
												<td><?php echo $registerPinCode; ?></td>
											</tr>
									<?php
										}
											foreach ($result['products']['details'][0] as $key => $value) {
												if ($key != 'pin') {
													echo '<tr>';
													if (array_key_exists(ucfirst($key), $dataKeys)) {
														echo '<td>' . $dataKeys[ucfirst($key)] . '</td>';
													} else {
														echo '<td>' . $key . '</td>';
													}
													echo '<td class="ltr">' . $value . '</td>'
														.'</tr>';
												}
											}
									?>
											<tr>
												<td>کد پیگیری</td>
												<td><?php echo $result['refId']; ?></td>
											</tr>
										</tbody>
									</table>
									<a href="<?php echo $root; ?>">
										<div class="back">
											<input class="button" type="button" value="بازگشت به صفحه ی اصلی"></input>
										</div>
									</a>
								</div>
						<?php
								}
							}
						} else {
					?>
							<div class="failed">
								<img class="logo" src="img/clover-failed.png">
								<div class="explanation">
									<h1>تراکنش ناموفق بود.</h1>
									<h2><?php echo $result['errorMessage']; ?></h2>
									<p>چنانچه مبلغی از حساب شما کسر شده است، طی 72 ساعت کاری مبلغ کسر شده از سوی بانک به حساب شما باز می گردد.</p>
								</div>
								
								<div class="clear"></div>
							</div>	
							<a 	href="<?php echo $root; ?>">
								<div class="back">
									<input class="button" type="button" value="بازگشت به صفحه ی اصلی"></input>
								</div>
							</a>
					<?php
						}
					?>
					<div class="clear"></div>
				</div>
			</div>
			<div class="clear"></div>
			<script type='text/javascript' src='js/jquery-3.2.1.min.js'></script>
			<script type='text/javascript' src='js/charge.js'></script>
			<script type='text/javascript' src='js/jquery.cookie.js'></script>
			<script type='text/javascript' src='js/jquery.qtip.min.js'></script>
		</div>
	</body>
</html>