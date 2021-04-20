setInterval(function() {
    dt = new Date();
    hTime = dt.getHours();
    mTime = dt.getMinutes();
    sTime = dt.getSeconds();

    hRotation = 30 * hTime;
    mRotation = 6 * mTime;
    sRotation = 6 * sTime;

    hRotationAdd = mRotation / 12;
    mRotationAdd = sRotation / 12 / 5;

    hour.style.transform = `rotate(${hRotation + hRotationAdd}deg)`;
    minute.style.transform = `rotate(${mRotation + mRotationAdd}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);