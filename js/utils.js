export const parseURL = (url) => {
    if (url.startsWith("chrome://")) {
        return `chrome/${url.replace('chrome://', '')}/index.html`;
    } 
    else if (url.startsWith("https://") || url.startsWith("http://")) {
        return url;
    }else if (url.includes(".") && !url.includes(" ")) {
        return `https://${url}`;
    }
    else {
        return "https://google.com/search?q=" + encodeURIComponent(url);
    }
}