const moment = require("moment/moment");

class Dates {

    static getCurrentDate() {
        const now = moment();
        return now.format('D');
    }

    static getCurrentMonthNameInShort() {
        const now = moment();
        return now.format('MMM');
    }

    static getCurrentYearInYYYY() {
        const now = moment();
        return now.format('YYYY');
    }

    format_MM$DD$YY(time) {
        time = moment(time);
        return time.format('MM/DD/YY');
    }

    format_DD_MMMMc_YYYY(time) {
        time = moment(time);
        return time.format('DD MMMM, YYYY');
    }


}
module.exports = Dates;