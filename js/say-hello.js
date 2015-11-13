//say-hello.js
var date = new Date().getDay();
var weekdays = [
{day:"Sunday", status: "closed"},
{day:"Monday", status: "open"},
{day:"Tuesday", status:"open"},
{day:"Wednesday", status: "open"},
{day:"Thursday", status: "open"},
{day:"Friday", status: "open"},
{day:"Saturday", status: "closed"},
];
var status = weekdays[date+0].status;
var day = weekdays[date+0].day;
document.getElementById("day").innerHTML = day;
document.getElementById("status").innerHTML = status;