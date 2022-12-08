function DayOfWeekByNumber(num) {
    const arrayOfWeeksDays = [
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресенье' 
    ];
    return arrayOfWeeksDays[num-1];
}

export default DayOfWeekByNumber;