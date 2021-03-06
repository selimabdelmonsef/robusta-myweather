export default function hourlyTimeStamp(unixTime) {

    var timeStampDate = new Date(unixTime * 1000);
    var hours = timeStampDate.getHours();
    return hours;
}