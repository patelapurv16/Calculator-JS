// CALCULATOR.JS
//   Note: Look at 03_Sample program first
//
//

// 
class Binary{

    constructor(elementId) {
        this.Model = {
            oldVal: "",
            decOldVal: undefined,
            newVal: "",
            decNewVal: undefined,
            resultNum: undefined,
            operator: undefined,

        };

        this.View = {
            textRowB: {
                id: "textRowB",
                type: "text",
                value: "",
                onclick: ""
            },
            buttonplus: {
                id: "buttonplus",
                type: "button",
                value: '+',
                onclick: ""
            },
            button1: {
                id: "button1",
                type: "button",
                value: 1,
                onclick: ""
            },
            buttonmul: {
                id: "buttomnul",
                type: "button",
                value: '*',
                onclick: ""
            },
            button0: {
                id: "button0",
                type: "button",
                value: 0,
                onclick: ""
            },
            buttonmod: {
                id: "buttonmod",
                type: "button",
                value: '%',
                onclick: ""
            },
            buttonequal: {
                id: "buttonequal",
                type: "button",
                value: '=',
                onclick: ""
            },
            buttonleft: {
                id: "buttonleft",
                type: "button",
                value: '<<',
                onclick: ""
            },
            buttonright: {
                id: "buttonright",
                type: "button",
                value: '>>',
                onclick: ""
            },
            buttonand: {
                id: "buttonand",
                type: "button",
                value: "&",
                onclick: ""
            },
            buttonor: {
                id: "buttonor",
                type: "button",
                value: "|",
                onclick: ""
            },
            buttoninvert: {
                id: "buttoninvert",
                type: "button",
                value: "~",
                onclick: ""
            },
            buttondiv: {
                id: "buttondiv",
                type: "button",
                value: '/',
                onclick: ""
            },
            
            buttonC: {
                id: "buttonC",
                type: "button",
                value: 'C',
                onclick: ""
            },
            buttonMR: {
                id: "buttonMR",
                type: "button",
                value: 'MR',
                onclick: ""
            },
            buttonMC: {
                id: "buttonMC",
                type: "button",
                value: 'MC',
                onclick: ""
            },
            container: document.getElementById(elementId)
        };

        this.Controller = {
            viewClickHandler: function (e) {
                let target = e.target;
                if ((!(isNaN(target.value))) && this.Model.operator == undefined) {
                    this.Model.oldVal += target.value;
                    document.getElementById("textRowB").value = this.Model.oldVal;
                }
                if (isNaN(target.value) && this.Model.operator == undefined) {

                    this.Model.operator = target.value;
                    document.getElementById("textRowB").value = this.Model.operator;

                }
                if ((!(isNaN(target.value))) && this.Model.operator != undefined && this.Model.oldVal != undefined) {

                    this.Model.newVal += target.value;
                    document.getElementById("textRowB").value = this.Model.newVal;

                }

                if (target.id == "buttonC") {
                    this.clear();
                    this.Model.resultNum = undefined;
                    document.getElementById("textRowB").value = "";
                }

                if (target.id == "buttonMC") {
                    this.Model.resultNum = undefined;
                    document.getElementById("textRowB").value = "";
                    this.clear();
                }

                if (target.id == "buttonMR") {
                    if (this.Model.resultNum == undefined) {
                        document.getElementById("textRowB").value = "";
                        this.clear();
                    } else {
                        document.getElementById("textRowB").value = this.Model.resultNum;
                        this.clear();
                    }

                }

                if (target.id == "buttonequal") {
                    if (this.Model.oldVal == "" && this.Model.resultNum != undefined) {
                        this.optfunction(this.Model.resultNum, this.Model.newVal);
                        this.clear();
                    } else {
                        this.optfunction(this.Model.oldVal, this.Model.newVal);
                        this.clear();
                    }
                }


                if (target.id == "buttonright") {
                    if (this.Model.oldVal == "" && this.Model.resultNum != undefined) {
                        this.binaryShifter(this.Model.resultNum);
                        this.clear();
                    } else {
                        this.binaryShifter(this.Model.oldVal);
                        this.clear();
                    }

                }

                if (target.id == "buttonleft") {
                    if (this.Model.oldVal == "" && this.Model.resultNum != undefined) {
                        this.binaryShifter(this.Model.resultNum);
                        this.clear();
                    } else {
                        this.binaryShifter(this.Model.oldVal);
                        this.clear();
                    }
                }



                if (target.id == "buttoninvert") {
                    if (this.Model.oldVal == "" && this.Model.resultNum != undefined) {
                        this.binaryShifter(this.Model.resultNum);
                        this.clear();
                    } else {
                        this.binaryShifter(this.Model.oldVal);
                        this.clear();
                    }


                }

                if(target.id == "buttonMp" || target.id == "buttonMm"){ 
                    console.log("Hello"); 
                    console.log(this.Model.resultNum); 
                    console.log(typeof(this.Model.resultNum));
                    this.functionMp(this.Model.resultNum, target.id); 
                    this.clear(); 
                }


            }
        };

        this.attachButtonHandlers();
        let htmlString = this.createHTMLforView();
        console.log(htmlString);
        this.View.container.innerHTML = htmlString;
        return this;

    } // end of constructor


    binaryShifter(x) {
        this.Model.decOldVal = parseInt(this.bin2dec(x));
        if (this.Model.operator == "<<") {
            this.Model.resultNum = parseInt(this.dec2bin(this.Model.decOldVal * (Math.pow(2, 1))));
            document.getElementById("textRowB").value = this.Model.resultNum;
        }
        if (this.Model.operator == ">>") {
            this.Model.resultNum = parseInt(this.dec2bin(this.Model.decOldVal / (Math.pow(2, 1))));
            document.getElementById("textRowB").value = this.Model.resultNum;
        }
        if (this.Model.operator == "~") {
            var e = x.toString(2).split('');
            for (var i = 0, l = e.length; i < l; i++) {
                e[i] = e[i] === '0' ? '1' : (e[i] === '1' ? '0' : e[i]);
            }
            this.Model.resultNum = parseInt(e.join(''));
            document.getElementById("textRowB").value = this.Model.resultNum;
        }
    }
    



    optfunction(x, y) {
        this.Model.decOldVal = parseInt(this.bin2dec(x));
        this.Model.decNewVal = parseInt(this.bin2dec(y));
        if (this.Model.operator == "+") {
            this.Model.resultNum = parseInt(this.dec2bin(this.Model.decOldVal + this.Model.decNewVal));

            document.getElementById("textRowB").value = this.Model.resultNum;
        }
        if (this.Model.operator == "*") {
            this.Model.resultNum = parseInt(this.dec2bin(this.Model.decOldVal * this.Model.decNewVal));

            document.getElementById("textRowB").value = this.Model.resultNum;
        }
        if (this.Model.operator == "/") {
            this.Model.resultNum = parseInt(this.dec2bin(this.Model.decOldVal / this.Model.decNewVal));
            c
            document.getElementById("textRowB").value = this.Model.resultNum;
        }
        if (this.Model.operator == "%") {
            this.Model.resultNum = parseInt(this.dec2bin(this.Model.decOldVal % this.Model.decNewVal));

            document.getElementById("textRowB").value = this.Model.resultNum;

        }

        if (this.Model.operator == "&") {
            this.Model.resultNum = parseInt(this.dec2bin(this.Model.decOldVal & this.Model.decNewVal));

            document.getElementById("textRowB").value = this.Model.resultNum;
        }

        if (this.Model.operator == "|") {
            this.Model.resultNum = parseInt(this.dec2bin(this.Model.decOldVal | this.Model.decNewVal));

            document.getElementById("textRowB").value = this.Model.resultNum;
        }
        if (this.Model.operator == "=") {
            if (this.Model.resultNum != undefined) {
                document.getElementById("textRowB").value = this.Model.resultNum;
            } else {
                document.getElementById("textRowB").value = "";
            }

        }
    }



    bin2dec(bin) {
        return parseInt(bin, 2).toString(10);
    }

    dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }
    //
    // attachButtonHandlers
    // determines what action is taken when a button is clicked
    // makes sure that when we click on a button or cell, the "this"
    // reference is fixed to that cell
    //
    attachButtonHandlers() {
        this.View.container.onclick = this.Controller.viewClickHandler.bind(this);
    }

    clear() {
        this.Model.oldVal = "";
        this.Model.newVal = "";
        this.Model.operator = undefined;
    }




    //
    // createHTMLforView
    // Utility. creates HTML formatted text for the entire view
    //
    createHTMLforView() {
        var s;
        s = "<table id=\"myTable\" border=2>"

        // row for results
        s += "<tr><td>" + this.createHTMLforElement(this.View.textRowB) + "</td></tr>";
        s += "<tr><td>";

        // thisulator buttons

        s += this.createHTMLforElement(this.View.button0) + " ";
        s += this.createHTMLforElement(this.View.button1) + " ";
        s += this.createHTMLforElement(this.View.buttonplus) + " " + "<br>";
        s += this.createHTMLforElement(this.View.buttonmul) + " ";
        s += this.createHTMLforElement(this.View.buttondiv) + " ";
        s += this.createHTMLforElement(this.View.buttonmod) + " " + "<br>";
        s += this.createHTMLforElement(this.View.buttonleft) + " ";
        s += this.createHTMLforElement(this.View.buttonright) + " ";
        s += this.createHTMLforElement(this.View.buttonand) + " ";
        s += this.createHTMLforElement(this.View.buttonequal) + " " + "<br>";
        s += this.createHTMLforElement(this.View.buttonor) + " ";
        s += this.createHTMLforElement(this.View.buttoninvert) + " ";
        s += this.createHTMLforElement(this.View.buttonC) + " ";
        s += this.createHTMLforElement(this.View.buttonMR) + " ";
        s += this.createHTMLforElement(this.View.buttonMC) + " "  ;
     



        s += "</tr></td></table>";
        return s;
    }


    //
    // createHTMLforElement
    // utility. creates html formatted text for an element
    //
    createHTMLforElement(element) {
        var s = "<input ";
        s += " id=\"" + element.id + "\"";
        s += " type=\"" + element.type + "\"";
        s += " value= \"" + element.value + "\"";
        s += " onclick= \"" + element.onclick + "\"";
        s += ">";
        return s;
    }

} // end of Calculator;