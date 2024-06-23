let footerYear = () => {
    let dateToday = new Date();
    let currentYear = dateToday.getFullYear();
    return document.writeln(currentYear);
}

footerYear();