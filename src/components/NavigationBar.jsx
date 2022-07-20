import './NavigationBar.css'

window.onscroll = function() {scrollFunction()};

const NavigationBar = () => {
    return(
        <div id="navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
    )
};

function scrollFunction() {
  if (document.body.scrollTop > 790 || document.documentElement.scrollTop > 790) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

export default NavigationBar