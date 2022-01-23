window.addEventListener("load", function () {

    let allInputs = this.document.querySelectorAll("input");
    let vendor = this.document.getElementById("vendor");
    let media = this.document.getElementById("media");
    let corp = this.document.getElementById("corp");
    let team = this.document.getElementById("team");

    let unlimited_rewards = this.document.getElementsByClassName('unlimited-rewards')[0];
    let lifetime_rewards = this.document.getElementsByClassName('lifetime-rewards')[0];
    let business_card = this.document.getElementsByClassName('business-card')[0];
    let business_card_label = this.document.getElementsByClassName('result')[0].getElementsByTagName('span')[0];

    allButtons = this.document.querySelectorAll('button');
    let sum = 0;

    allInputs.forEach(Input => {
        Input.addEventListener("input", (event) => {
            sum = parseInt(vendor.value || 0) + parseInt(media.value || 0) + parseInt(corp.value || 0) + parseInt(team.value || 0);
            let unlimited_rewards_result = sum * 1.1;
            let lifetime_rewards_result = sum * 1.2;

            unlimited_rewards.getElementsByTagName('span')[0].innerHTML = '$' + unlimited_rewards_result;
            unlimited_rewards.setAttribute("style", `width:${unlimited_rewards_result}px`);

            lifetime_rewards.getElementsByTagName('span')[0].innerHTML = '$' + lifetime_rewards_result;
            lifetime_rewards.setAttribute("style",`width:${lifetime_rewards_result}px`);
        });
    });

    allButtons.forEach(Button => {
        Button.addEventListener("click", function(e){
            let business_card_result = 0;
            
            if(Button.value == "Brex"){

                business_card_result = sum * 0.3;
                business_card.getElementsByTagName('span')[0].innerHTML = '$' + business_card_result;
                business_card_label.innerHTML = "Brex Business Card";

            } else if(Button.value == "Stripe"){

                business_card_result = sum * 2.9;
                business_card.getElementsByTagName('span')[0].innerHTML = '$' + business_card_result;
                business_card_label.innerHTML = "Stripe Business Card";

            } else if(Button.value == "Amex"){

                business_card_result = sum * 1.3;
                business_card.getElementsByTagName('span')[0].innerHTML = '$' + business_card_result;
                business_card_label.innerHTML = "Amex Business Card";
                
            }
            
            business_card.setAttribute("style", `width:${business_card_result}px;display:block;`);
            business_card_label.style.display = "block";
        });
    });


  },false);
