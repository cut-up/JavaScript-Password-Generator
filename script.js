function getRandomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
}

function getRandomCharacter(c1, c2, c3, c4, b3) {
    var c5 = "0123456789";
    var c6 = "abcdefghijklmnopqrstuvwxyz";
    var c7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var c8 = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    window.characterSet = b3;
    if (c1 == true) {
        characterSet += c5;
    }
    if (c2 == true) {
        characterSet += c6;
    }
    if (c3 == true) {
        characterSet += c7;
    }
    if (c4 == true) {
        characterSet += c8;
    }
    return characterSet.charAt(getRandomNumber(0, characterSet.length));
}

function getPushCast(c15, c26, c37, c48, b1, b2, b3, b4, cast) {
    var replaceCharacterSet, pushCast = cast;
    while (pushCast.length < b2) {
        pushCast += getRandomCharacter(c15, c26, c37, c48, b3);
        if (b4 != "") {
            replaceCharacterSet = characterSet.replace(new RegExp("[" + b4 + "]", "g"), "");
            if (replaceCharacterSet != "") {
                pushCast = pushCast.replace(new RegExp("[" + b4 + "]", "g"), "");
            } else {
                return replaceCharacterSet;
            }
        }
    }
    return pushCast;
}

function getPassword(b1, b2, b3, b4, c1, c2, c3, c4, c5, c6, c7, c8) {
    var cast = "",
        count = "";
    if (b2 > 0) {
        if ((c5 == true) || (c6 == true) || (c7 == true) || (c8 == true) || (b3 != "")) {
            cast = getPushCast(c5, c6, c7, c8, b1, b2, b3, b4, cast);
        }
        if ((c1 == true) || (c2 == true) || (c3 == true) || (c4 == true)) {
            if (cast.length > b1) {
                cast = cast.slice(0, b1);
            }
            cast = getPushCast(c1, c2, c3, c4, b1, b2, b3, b4, cast);
        }
        for (p in cast) {
            if (cast[p].search(new RegExp("[0-9]")) != -1) {
                count += "<span class=d1>" + cast[p] + "</span>";
            } else if (cast[p].search(new RegExp("[a-z]")) != -1) {
                count += "<span class=d2>" + cast[p] + "</span>";
            } else if (cast[p].search(new RegExp("[A-Z]")) != -1) {
                count += "<span class=d3>" + cast[p] + "</span>";
            } else {
                count += "<span class=d4>" + cast[p] + "</span>";
            }
        }
    }
    return count;
}