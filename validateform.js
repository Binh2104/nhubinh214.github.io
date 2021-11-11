function checknull(txt) {
    if (txt == "" || txt == null)
        return true;
    else
        return false;
}
// kiểm tra tuoi co là so va so nguyen khong ?
function checksonguyen(txt) {
    if (!isNaN(txt.value) && (parseInt(txt.value === Number(txt.value))))
        return true;
    else
        return false;
}
//sosanh cai nhap voi bieu thuc chinh quy
function StringMatch(txt, reg) {
    return reg.test(txt.value);
}
//kiem tra gender da chon 1 trong 2 chưa
function notcheck(radio) {
    let rt = true;
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked)
            rt = false;
        return rt;
    }
}

function validateform() {
    let check_phone = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
    let checkphone = /^\(\d{2,4}\)[\s\.-]\d{3}[\s\.-]\d{3}$/;
    let check_fullname = /^[a-zA-Z]+$/;
    let check_mail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;


    let fullnamex = document.getElementById('fullname').value;
    let agex = document.getElementById('age').value;
    let emailx = document.getElementById('email').value;
    // let genderx1 = document.getElementById('gender1');
    // let genderx2 = document.getElementById('gender2');
    let phonex = document.getElementById('phone').value;
    var x = false;


    //full name---------------------------------------------
    if (checknull(fullnamex)) {
        document.getElementById('mes1').innerHTML = '*Không được bỏ trống mục này';
    } else if (!check_fullname.test(fullnamex)) {
        document.getElementById('mes1').innerHTML = 'Tên không hợp lệ !';
    } else {
        document.getElementById('mes1').innerHTML = '';
    }
    ///age--------------------------------------------------
    if (checknull(agex)) {
        document.getElementById('mes2').innerHTML = '*Không được bỏ trống mục này';
    } else if (isNaN(agex) == true) {
        document.getElementById('mes2').innerHTML = 'Dùng ký tự số';
    } else if (parseInt(agex == Number(agex))) {
        document.getElementById('mes2').innerHTML = 'Dùng ký tự số Nguyên';
    } else if (agex <= 0 || agex >= 200) {
        document.getElementById('mes2').innerHTML = 'Tuổi không hợp lệ!(1-199)';
    } else {
        document.getElementById('mes2').innerHTML = '';
    }
    //email------------------------------------
    if (checknull(emailx)) {
        document.getElementById('mes5').innerHTML = '*Không được bỏ trống mục này';
    } else if (!check_mail.test(emailx)) {
        document.getElementById('mes5').innerHTML = 'Email không hợp lệ !';
        emailx = ' ';
    } else {
        document.getElementById('mes5').innerHTML = '';
    }
    //phone--------------------------------------------------------
    if (checknull(phonex)) {
        document.getElementById('mes4').innerHTML = '*Không được bỏ trống mục này';
    } else if (!checkphone.test(phonex)) {
        document.getElementById('mes4').innerHTML = '*Phone không phù hợp';
    } else {
        document.getElementById('mes4').innerHTML = '';
    }
    //gender------------------------------------------------

    if (document.getElementById("gender1").checked || document.getElementById("gender2").checked) {
        x = true;
    }
    if (document.getElementById("gender1").checked && document.getElementById("gender2").checked) {
        return document.getElementById('mes3').innerHTML = '*Tham lam !!! Chọn 1 thôi!!';

    }
    if (x) {
        document.getElementById('mes3').innerHTML = '';
    } else {
        document.getElementById('mes3').innerHTML = '*Không được bỏ trống mục này';
        return false;
    }
}