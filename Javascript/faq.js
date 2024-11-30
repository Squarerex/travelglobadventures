const ans = document.querySelector('.ans');
        const plus = document.querySelector('.plus');
        const minus = document.querySelector('.minus');
        const ans1 = document.querySelector('.ans1');
        const plus1 = document.querySelector('.plus1');
        const minus1 = document.querySelector('.minus1');
        const ans2 = document.querySelector('.ans2');
        const plus2 = document.querySelector('.plus2');
        const minus2 = document.querySelector('.minus2');

        
        plus.addEventListener("click", () => {
            
                plus.classList.add("hide");
            plus.classList.remove("show");
            minus.classList.remove("hide");
            minus.classList.add("show");
                ans.classList.remove("hide");
            ans.classList.add("show");
        });

        minus.addEventListener("click", () => {
            ans.classList.remove("show");
                ans.classList.add("hide");
                plus.classList.add("show");
                plus.classList.remove("hide");
                minus.classList.remove("show");
                minus.classList.add("hide");
        });

        plus1.addEventListener("click", () => {
            ans1.classList.remove("hide");
            ans1.classList.add("show");
            plus1.classList.add("hide");
            plus1.classList.remove("show");
            minus1.classList.remove("hide");
            minus1.classList.add("show");
        });

        minus1.addEventListener("click", () => {
            ans1.classList.remove("show");
            ans1.classList.add("hide");
            plus1.classList.add("show");
            plus1.classList.remove("hide");
            minus1.classList.remove("show");
            minus1.classList.add("hide");
        });

        plus2.addEventListener("click", () => {
            ans2.classList.remove("hide");
            ans2.classList.add("show");
            plus2.classList.add("hide");
            plus2.classList.remove("show");
            minus2.classList.remove("hide");
            minus2.classList.add("show");
        });

        minus2.addEventListener("click", () => {
            ans2.classList.remove("show");
            ans2.classList.add("hide");
            plus2.classList.add("show");
            plus2.classList.remove("hide");
            minus2.classList.remove("show");
            minus2.classList.add("hide");
        });