// const faq_obj = {
//     1: "My name is John Doe",
//     2: "I'm 27 years old."
// }

// function read_more(id){
//     rotate_btn(id)
//     let number = 1;
//     while (true){
//         let field = document.getElementById('answer_id_' + String(number));
//         if (field !== null) {
//             if (String(number) !== id){
//                 field.innerText = '';
//             }
//             number += 1;
//         }   else{
//                 break;
//             }
//     }
//     let p_id = 'answer_id_' + id;
//     if (document.getElementById(p_id).innerText == ''){
//         let answer = document.getElementById(p_id);
//         answer.innerText = faq_obj[id];
//     }else{
//         document.getElementById(p_id).innerText = '';
//     }

// }

// function rotate_btn(id){
//     var styles = ".answer{transition-property: rotate(90deg)}";
//     var styleSheet = document.createElement("link");

//     styleSheet.innerText = styles;
//     document.head.appendChild(styleSheet);
//     }

    const faq_obj = {
        1: "My name is John Doe",
        2: "I'm 27 years old."
    }
    function read_more(id){
        rotate_btn(id)
        let number = 1;
        while (true){
            let field = document.getElementById('answer_id_' + String(number));
            if (field !== null){
                if (String(number) !== id){
                    field.innerText = '';
                }
                number += 1;
            }else{
                break;
            }
        }
        let p_id = 'answer_id_' + id;
        if (document.getElementById(p_id).innerText == ''){
            let answer = document.getElementById(p_id);
            answer.innerText = faq_obj[id];
        }else{
            document.getElementById(p_id).innerText = '';
        }
    
    }
    
    // function rotate_btn(id){
    //     btn = document.getElementById(String(id));
    //     btn.innerHTML = "<style>.answer{transition-property:rotate('90deg');}</style>"
    //     // let style1 = document.createElement('style');
    //     // style1.innerHTML = `
    //     // .answer {
    //     //     transition-property:rotate('90deg');;
    //     // }`;
    //     // btn.style = style1;    
    // }
    
    function rotate_btn(id){
        var styles = ".answer{transition-property: rotate(90deg)}"
    
        var styleSheet = document.createElement("link")
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
        }