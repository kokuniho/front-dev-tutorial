document.addEventListener('DOMContentLoaded', function () {
    
    const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const ta = new TextAnimation(entry.target);
            ta.animate();
            entry.target.classList.add('inview');
            observer.unobserve(entry.target);
        }else{
        }
    });

    // alert('intersecting');
    }
    const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
    
    // io.observe(child1);
    // io.observe(child2);
    });

// text-animation.jsに以下のコードをカット＆ペースト
// してファイル分割をしましょう。
