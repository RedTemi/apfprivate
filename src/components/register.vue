<template>
  <section class="w-full bg-white">
    <a id="register_"></a>
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col lg:flex-row">
        <div
          class="
            relative
            w-full
            bg-cover
            lg:w-6/12
            xl:w-7/12
            bg-gradient-to-r
            from-white
            via-white
            to-gray-100
          "
        >
          <div
            class="
              relative
              flex flex-col
              items-center
              justify-center
              w-full
              h-full
              px-10
              my-20
              lg:px-16
              lg:my-0
            "
          >
            <div
              class="
                flex flex-col
                items-start
                space-y-8
                tracking-tight
                lg:max-w-3xl
              "
            >
              <div class="relative">
                <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl">
                  {{ $t("form.action") }}
                </h2>
              </div>
              <!-- <p class="text-2xl text-gray-700">We've created a simple formula to follow in order to gain more out of your business and your application.</p> -->
              <!-- <a href="#_" class="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Get Started Today</a> -->
            </div>
          </div>
        </div>

        <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
          <div
            class="
              flex flex-col
              items-start
              justify-start
              w-full
              h-full
              p-10
              lg:p-16
              xl:p-24
            "
          >
            <h4 class="w-full text-3xl font-bold">{{ $t("form.register") }}</h4>
            <form id="form1" @submit.prevent="register">
                            <div class="relative w-full mt-10 space-y-8">
                          <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.salutation")
                }}</label>
                <select
                  v-model="user.salute"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                >
                  <option value="" disabled selected>--Select One--</option>
                  <option value="mr">Mr
                  </option>
                  <option value="mrs">
                    Mrs
                  </option>
                  <option value="proffessor">Prof</option>
                  <option value="pharmacist">Pharm</option>
                  <option value="dr">Dr</option>
                </select>
              </div>
              <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.fname")
                }}</label>
                <input
                  v-model="user.fname"
                  required
                  type="text"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                  placeholder="Alexander"
                />
              </div>
              <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.lname")
                }}</label>
                <input
                  v-model="user.lname"
                  required
                  type="text"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                  placeholder="Alesso"
                />
              </div>
              <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.other")
                }}</label>
                <input
                  v-model="user.other"
                  type="text"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                  placeholder="Bam"
                />
              </div>
              <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.mobile")
                }}</label>
                <input
                  v-model="user.phone"
                  required
                  type="tel"
                  autocomplete="tel"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                  placeholder="+12394993939"
                />
              </div>
              <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.whatsapp")
                }}</label>
                <input
                  v-model="user.whatsapp"
                  type="tel"
                  autocomplete="tel"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                  placeholder="+12394993939"
                />
              </div>
              <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.email")
                }}</label>
                <input
                  v-model="user.email"
                  type="email"
                  autocomplete="email"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                  placeholder="mail@mail.br"
                />
              </div>
              <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.country")
                }}</label>
                <select
                  v-model="user.country"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                >
                  <option value="" disabled selected>--Select One--</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">
                    Congo, Democratic Republic of the Congo
                  </option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Cote D'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and Mcdonald Islands</option>
                  <option value="VA">Holy See (Vatican City State)</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran, Islamic Republic of</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="KR">Korea, Republic of</option>
                  <option value="XK">Kosovo</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Lao People's Democratic Republic</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libyan Arab Jamahiriya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MK">
                    Macedonia, the Former Yugoslav Republic of
                  </option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia, Federated States of</option>
                  <option value="MD">Moldova, Republic of</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="AN">Netherlands Antilles</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestinian Territory, Occupied</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Reunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Federation</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthelemy</option>
                  <option value="SH">Saint Helena</option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="CS">Serbia and Montenegro</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syrian Arab Republic</option>
                  <option value="TW">Taiwan, Province of China</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania, United Republic of</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">
                    United States Minor Outlying Islands
                  </option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela</option>
                  <option value="VN">Viet Nam</option>
                  <option value="VG">Virgin Islands, British</option>
                  <option value="VI">Virgin Islands, U.s.</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </div>
              
              <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.practice")
                }}</label>
                <select
                  v-model="user.desi"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                >
                  <option value="" disabled selected>--Select One--</option>
                  <option value="community">
                    {{ $t("form.areas.community") }}
                  </option>
                  <option value="hospital">
                    {{ $t("form.areas.hospital") }}
                  </option>
                  <option value="admin">{{ $t("form.areas.admin") }}</option>
                  <option value="industry">
                    {{ $t("form.areas.industry") }}
                  </option>
                  <option value="academia">{{ $t("form.areas.acada") }}</option>
                  <option value="public">{{ $t("form.areas.public") }}</option>
                  <option value="others">{{ $t("form.areas.others") }}</option>
                </select>
              </div>
              <div class="relative">
                <label class="font-medium text-gray-900">{{
                  $t("form.password")
                }}</label>
                <input
                  v-model="user.password"
                  autocomplete="new-password"
                  pattern=".{8,}" :title="$t('form.passwordTitle')"
                  type="password"
                  class="
                    block
                    w-full
                    px-4
                    py-4
                    mt-2
                    text-xl
                    placeholder-gray-400
                    bg-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50
                  "
                  placeholder="*********"
                />
              </div>
              <div class="relative">
                <button
                  type="submit"
                  class="
                    inline-block
                    w-full
                    px-5
                    py-4
                    text-lg
                    font-medium
                    text-center text-white
                    transition
                    duration-200
                    bg-blue-600
                    rounded-lg
                    hover:bg-blue-700
                    ease
                  "
                >
                  {{ $t("form.register") }}
                </button>
              </div>
            </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const mail = `<!DOCTYPE html>
<html style="
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    font-size: 14px;
    margin: 0;
  ">

<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>APF 2021 confirmation</title>

    <style type="text/css">
        img {
            max-width: 100%;
        }

        body {
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: none;
            width: 100% !important;
            height: 100%;
            line-height: 1.6em;
        }

        body {
            background-color: #f6f6f6;
        }

        @media only screen and (max-width: 640px) {
            body {
                padding: 0 !important;
            }

            h1 {
                font-weight: 800 !important;
                margin: 20px 0 5px !important;
            }

            h2 {
                font-weight: 800 !important;
                margin: 20px 0 5px !important;
            }

            h3 {
                font-weight: 800 !important;
                margin: 20px 0 5px !important;
            }

            h4 {
                font-weight: 800 !important;
                margin: 20px 0 5px !important;
            }

            h1 {
                font-size: 22px !important;
            }

            h2 {
                font-size: 18px !important;
            }

            h3 {
                font-size: 16px !important;
            }

            .container {
                padding: 0 !important;
                width: 100% !important;
            }

            .content {
                padding: 0 !important;
            }

            .content-wrap {
                padding: 10px !important;
            }

            .invoice {
                width: 100% !important;
            }
        }
    </style>
</head>

<body itemscope itemtype="http://schema.org/EmailMessage" style="
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
      width: 100% !important;
      height: 100%;
      line-height: 1.6em;
      background-color: #f6f6f6;
      margin: 0;
    " bgcolor="#f6f6f6">
    <table class="body-wrap" style="
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        font-size: 14px;
        width: 100%;
        background-color: #f6f6f6;
        margin: 0;
      " bgcolor="#f6f6f6">
        <tr style="
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          box-sizing: border-box;
          font-size: 14px;
          margin: 0;
        ">
            <td style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            vertical-align: top;
            margin: 0;
          " valign="top"></td>
            <td class="container" width="600" style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            vertical-align: top;
            display: block !important;
            max-width: 600px !important;
            clear: both !important;
            margin: 0 auto;
          " valign="top">
                <div class="content" style="
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              box-sizing: border-box;
              font-size: 14px;
              max-width: 600px;
              display: block;
              margin: 0 auto;
              padding: 20px;
            ">
                    <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope
                        itemtype="http://schema.org/ConfirmAction" style="
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 14px;
                border-radius: 3px;
                background-color: #fff;
                margin: 0;
                border: 1px solid #e9e9e9;
              " bgcolor="#fff">
                        <tr style="
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                  box-sizing: border-box;
                  font-size: 14px;
                  margin: 0;
                ">
                            <td class="content-wrap" style="
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    box-sizing: border-box;
                    font-size: 14px;
                    vertical-align: top;
                    margin: 0;
                    padding: 20px;
                  " valign="top">
                                <meta itemprop="name" content="Confirm Email" style="
                      font-family: 'Helvetica Neue', Helvetica, Arial,
                        sans-serif;
                      box-sizing: border-box;
                      font-size: 14px;
                      margin: 0;
                    " />
                                                    <table width="100%" cellpadding="0" cellspacing="0" style="
                                                    font-family: 'Helvetica Neue', Helvetica, Arial,
                                                      sans-serif;
                                                    box-sizing: border-box;
                                                    font-size: 14px;
                                                    margin: 0;
                                                  ">
                                                                  <tr style="
                                                      font-family: 'Helvetica Neue', Helvetica, Arial,
                                                        sans-serif;
                                                      box-sizing: border-box;
                                                      font-size: 14px;
                                                      margin: 0;
                                                    ">
                                                                      <td class="content-block" style="
                                                        font-family: 'Helvetica Neue', Helvetica, Arial,
                                                          sans-serif;
                                                        box-sizing: border-box;
                                                        font-size: 14px;
                                                        vertical-align: top;
                                                        margin: 0;
                                                        padding: 0 0 20px;
                                                      " valign="top">
                                                                     Congratulations on signing up for the APF Workshop being held on the 31st of July 2021 at 11am West African Time./
                                                                     Parabéns por se inscrever no Workshop APF que será realizado no dia 31 de julho de 2021 às 11h, horário da África Ocidental./Félicitations pour votre inscription à l'atelier APF qui se tiendra le 31 juillet 2021 à 11h, heure de l'Afrique de l'Ouest.
                                                                      </td>
                                                                  </tr>
                                                            
                                                                  <tr style="
                                                      font-family: 'Helvetica Neue', Helvetica, Arial,
                                                        sans-serif;
                                                      box-sizing: border-box;
                                                      font-size: 14px;
                                                      margin: 0;
                                                    ">
                                                                      <td class="content-block" style="
                                                        font-family: 'Helvetica Neue', Helvetica, Arial,
                                                          sans-serif;
                                                        box-sizing: border-box;
                                                        font-size: 14px;
                                                        vertical-align: top;
                                                        margin: 0;
                                                        padding: 0 0 20px;
                                                      " valign="top">
                              
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                <table width="100%" cellpadding="0" cellspacing="0" style="
                      font-family: 'Helvetica Neue', Helvetica, Arial,
                        sans-serif;
                      box-sizing: border-box;
                      font-size: 14px;
                      margin: 0;
                    ">
                                    <tr style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      ">
                                        <td class="content-block" style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        " valign="top">
                                            You may join the workshop by clicking on the hyperlink below. /Vous pouvez rejoindre l'atelier en cliquant sur l'hyperlien ci-dessous. /
                                            Você pode participar do workshop clicando no link abaixo.
                                        </td>
                                    </tr>
                                    <tr style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      ">
                                        <td class="content-block" itemprop="handler" itemscope
                                            itemtype="http://schema.org/HttpActionHandler" style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        " valign="top">
                                            <a href="apf2021.online" class="btn-primary" itemprop="url" style="
                            font-family: 'Helvetica Neue', Helvetica, Arial,
                              sans-serif;
                            box-sizing: border-box;
                            font-size: 14px;
                            color: #fff;
                            text-decoration: none;
                            line-height: 2em;
                            font-weight: bold;
                            text-align: center;
                            cursor: pointer;
                            display: inline-block;
                            border-radius: 5px;
                            text-transform: capitalize;
                            background-color: #348eda;
                            margin: 0;
                            border-color: #348eda;
                            border-style: solid;
                            border-width: 10px 20px;
                          ">Proceed/Continuar/Procéder</a>
                                        </td>
                                    </tr>
                                    <tr style="
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        box-sizing: border-box;
                        font-size: 14px;
                        margin: 0;
                      ">
                                        <td class="content-block" style="
                          font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif;
                          box-sizing: border-box;
                          font-size: 14px;
                          vertical-align: top;
                          margin: 0;
                          padding: 0 0 20px;
                        " valign="top">

                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <div class="footer" style="
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                box-sizing: border-box;
                font-size: 14px;
                width: 100%;
                clear: both;
                color: #999;
                margin: 0;
                padding: 20px;
              ">
                        <table width="100%" style="
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                  box-sizing: border-box;
                  font-size: 14px;
                  margin: 0;
                ">
                          
                        </table>
                    </div>
                </div>
            </td>
            <td style="
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            box-sizing: border-box;
            font-size: 14px;
            vertical-align: top;
            margin: 0;
          " valign="top"></td>
        </tr>
    </table>
</body>

</html>`;
import app from "../assets/firebaseconf";
import firebase from "firebase";
import Mailgun from "mailgun.js";
let mailgun = new Mailgun(FormData);
let mg = mailgun.client({username:'api',key:'5a900268685508cd7d62f396a173fbd5-a0cfb957-3ca2290b', url: 'https://api.eu.mailgun.net'});
export default {
  name: "register",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    sendmail(){
      mg.messages.create('apf2021.online', {
    from: "noreply <noreply@apf2021.online>",
    to: this.user.email,
    subject: "Registration Sucess",
    html: mail
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error
    },
    register() {
      if (document.querySelector("#form1").reportValidity()) {
        app
          .auth()
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((user) => {
            this.user.time =  firebase.firestore.FieldValue.serverTimestamp();
            app
              .firestore()
              .collection("users")
              .doc(user.user.uid)
              .set(this.user)
              .then(() => {
                alert(this.$t("form.areas.success"));
                this.sendmail();
                this.$emit('done');
              });
          })
          .catch((error) => {
            //  var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            alert(errorMessage);
          });
      }
    },
  },
};
</script>

<style>
</style>