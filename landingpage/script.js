function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var start = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        var end = section.offsetTop;
        var distance = end - start;
        var duration = 1000; 
        var startTime;
        function scrollAnimation(currentTime) {
            if (!startTime) startTime = currentTime;
            var elapsed = currentTime - startTime;
            var easing = easeInOutQuad(elapsed, start, distance, duration);
            window.scrollTo(0, easing);
            if (elapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(scrollAnimation);
    }
}
function openSearchDialog() {
    var searchDialog = document.getElementById('search-dialog');
    searchDialog.style.display = 'block';
}
function closeSearchDialog() {
    var searchDialog = document.getElementById('search-dialog');
    searchDialog.style.display = 'none';
}
var modal = document.getElementById('login-form');
        window.onclick = function(event) 
        {
            if (event.target == modal) 
            {
                modal.style.display = "none";
            }
        }
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
	x.style.left='-400px';
	y.style.left='50px';
	z.style.left='110px';
}
function login()
{
    x.style.left='50px';
	y.style.left='450px';
	z.style.left='0px';
}
