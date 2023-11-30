

const sections = document.querySelectorAll(".animateTarget");

const options = {
      root: null,
      threshold: 0,
      rootMargin: "-90px"
};

const observer = new IntersectionObserver(function(entries, observer){
      entries.forEach(entry => {
            if(!entry.isIntersecting){
                  return
            }
            entry.target.classList.add('showAnimation');
            observer.unobserve(entry.target);
      });
}, options);

sections.forEach(section => {
      observer.observe(section);
});

// ------------------------------------------------------------ //


const b2bImg = document.querySelectorAll(".b2bImage");

const b2bOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px"
};

const b2bObserver = new IntersectionObserver(function(entries, observer){
      entries.forEach(entry => {
            if(!entry.isIntersecting){
                  return
            }
            entry.target.classList.add('showAnimation');
            observer.unobserve(entry.target);
      });
}, b2bOptions);

b2bImg.forEach(section => {
      b2bObserver.observe(section);
});