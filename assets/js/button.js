const LINK_GITHUB = "https://github.com/blackbracken/";
const LINK_TWITTER = "https://twitter.com/black_bracken/";
const LINK_BLOG = "https://blackbracken.hatenablog.com/";

let mail_modal = new tingle.modal();
mail_modal.setContent('<h2>me(at_mark)bracken.black</h2>'.replace("(at_mark)", "@"));

document.getElementById("github-button").onclick = () => {
    location.href = LINK_GITHUB
};

document.getElementById("twitter-button").onclick = () => {
    location.href = LINK_TWITTER
};

document.getElementById("blog-button").onclick = () => {
    location.href = LINK_BLOG
}

document.getElementById("mail-button").onclick = () => {
    mail_modal.open()
};