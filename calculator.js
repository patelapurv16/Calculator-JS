// CALCULATOR.JS
//   Note: Look at 03_Sample program first
//
//

// 
class Calculator{

  constructor(elementId) {
    this.Model = {
      oldVal: "",
      newVal: "",
      resultNum: undefined,
      operator: undefined,

    };

    this.View2 = {
      textRow: {
        id: "textRow",
        type: "text",
        value: "",
        onclick: ""
      },
      button7: {
        id: "button7",
        type: "button",
        value: 7,
        onclick: ""
      },
      button8: {
        id: "button8",
        type: "button",
        value: 8,
        onclick: ""
      },
      button9: {
        id: "button9",
        type: "button",
        value: 9,
        onclick: ""
      },
      buttonplus: {
        id: "buttonplus",
        type: "button",
        value: '+',
        onclick: ""
      },
      button4: {
        id: "button4",
        type: "button",
        value: 4,
        onclick: ""
      },
      button5: {
        id: "button5",
        type: "button",
        value: 5,
        onclick: ""
      },
      button6: {
        id: "button6",
        type: "button",
        value: 6,
        onclick: ""
      },
      buttonminus: {
        id: "buttonminus",
        type: "button",
        value: '-',
        onclick: ""
      },
      button1: {
        id: "button1",
        type: "button",
        value: 1,
        onclick: ""
      },
      button2: {
        id: "button2",
        type: "button",
        value: 2,
        onclick: ""
      },
      button3: {
        id: "button3",
        type: "button",
        value: 3,
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
      buttondot: {
        id: "buttondot",
        type: "button",
        value: '.',
        onclick: ""
      },
      buttonequal: {
        id: "buttonequal",
        type: "button",
        value: '=',
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
      buttonMm: {
        id: "buttonMm",
        type: "button",
        value: 'M-',
        onclick: ""
      },
      buttonMp: {
        id: "buttonMp",
        type: "button",
        value: 'M+',
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

    this.Controller2 = {
      viewClickHandler: function (e) {
        let target = e.target;

        if ((!(isNaN(target.value))) && this.Model.operator == undefined) {

          this.Model.oldVal += target.value;

          document.getElementById("textRow").value = this.Model.oldVal;


        }

        if (isNaN(target.value) && this.Model.operator == undefined) {

          this.Model.operator = target.value;
          document.getElementById("textRow").value = this.Model.operator;

        }
        if ((!(isNaN(target.value))) && this.Model.operator != undefined && this.Model.oldVal != undefined) {

          this.Model.newVal += target.value;
          document.getElementById("textRow").value = this.Model.newVal;

        }

        if (target.id == "buttonequal") {
          if (this.Model.oldVal == "" && this.Model.resultNum != undefined) {
            this.optfunction2(this.Model.resultNum, this.Model.newVal);
            this.clear2();
          } else {
            this.optfunction2(this.Model.oldVal, this.Model.newVal);
            this.clear2();
          }




        }
        if (target.id == "buttonC") {
          this.clear2();
          this.Model.resultNum = undefined;
          document.getElementById("textRow").value = "";
        }

        if (target.id == "buttonMp" || target.id == "buttonMm") {
          this.functionMp(this.Model.resultNum, target.id);
          this.clear2();
        }

        if (target.id == "buttonMR") {
          if (this.Model.resultNum == undefined) {
            document.getElementById("textRow").value = "";
            this.clear2();
          } else {
            document.getElementById("textRow").value = this.Model.resultNum;
            this.clear2();
          }

        }
        if (target.id == "buttonMC") {
          this.Model.resultNum = undefined;
          document.getElementById("textRow").value = "";
          this.clear2();
        }

      }
    };

    this.attachButtonHandlers2();
    let htmlString = this.createHTMLforView2();
    console.log(htmlString);
    this.View2.container.innerHTML = htmlString;
    return this;

  } // end of constructor



  optfunction2(x, y) {
    if (this.Model.operator == "+") {
      this.Model.resultNum = parseInt(x) + parseInt(y);
      console.log("Value of resulNum: " + this.Model.resultNum);
      document.getElementById("textRow").value = (parseInt(x) + parseInt(y));
    }
    if (this.Model.operator == "-") {
      this.Model.resultNum = parseInt(x) - parseInt(y);
      console.log("Value of resulNum: " + this.Model.resultNum);
      document.getElementById("textRow").value = (parseInt(x) - parseInt(y));

    }
    if (this.Model.operator == "*") {
      this.Model.resultNum = parseInt(x) * parseInt(y);
      console.log("Value of resulNum: " + this.Model.resultNum);
      document.getElementById("textRow").value = (parseInt(x) * parseInt(y));
    }
    if (this.Model.operator == "/") {
      this.Model.resultNum = parseInt(x) / parseInt(y);
      console.log("Value of resulNum: " + this.Model.resultNum);
      document.getElementById("textRow").value = (parseInt(x) / (parseInt(y)));
    }
    if (this.Model.operator == "=") {
      if (this.Model.resultNum != undefined) {
        document.getElementById("textRow").value = this.Model.resultNum;
      } else {
        document.getElementById("textRow").value = "";
      }

    }


  }

  functionMp(x, y) {
    if (y == "M+") {
      if (this.Model.operator == "+") {
        this.Model.resultNum = this.Model.resultNum + parseInt(this.Model.oldVal) + parseInt(this.Model.newVal);
        console.log("Value of resulNum: " + this.Model.resultNum);
        document.getElementById("textRow").value = this.Model.resultNum;
      }
      if (this.Model.operator == "-") {
        this.Model.resultNum = this.Model.resultNum + (parseInt(this.Model.oldVal) - parseInt(this.Model.newVal));
        console.log("Value of resulNum: " + this.Model.resultNum);
        document.getElementById("textRow").value = this.Model.resultNum;

      }
      if (this.Model.operator == "*") {
        this.Model.resultNum = this.Model.resultNum + (parseInt(this.Model.oldVal) * parseInt(this.Model.newVal));
        console.log("Value of resulNum: " + this.Model.resultNum);
        document.getElementById("textRow").value = this.Model.resultNum;
      }
      if (this.Model.operator == "/") {
        this.Model.resultNum = this.Model.resultNum + (parseInt(this.Model.oldVal) / parseInt(this.Model.newVal));
        console.log("Value of resulNum: " + this.Model.resultNum);
        document.getElementById("textRow").value = this.Model.resultNum;
      }

    } else {
      if (this.Model.operator == "+") {
        this.Model.resultNum = this.Model.resultNum - parseInt(this.Model.oldVal) + parseInt(this.Model.newVal);
        console.log("Value of resulNum: " + this.Model.resultNum);
        document.getElementById("textRow").value = this.Model.resultNum;
      }
      if (this.Model.operator == "-") {
        this.Model.resultNum = this.Model.resultNum - (parseInt(this.Model.oldVal) - parseInt(this.Model.newVal));
        console.log("Value of resulNum: " + this.Model.resultNum);
        document.getElementById("textRow").value = this.Model.resultNum;

      }
      if (this.Model.operator == "*") {
        this.Model.resultNum = this.Model.resultNum - (parseInt(this.Model.oldVal) * parseInt(this.Model.newVal));
        console.log("Value of resulNum: " + this.Model.resultNum);
        document.getElementById("textRow").value = this.Model.resultNum;
      }
      if (this.Model.operator == "/") {
        this.Model.resultNum = this.Model.resultNum - (parseInt(this.Model.oldVal) / parseInt(this.Model.newVal));
        console.log("Value of resulNum: " + this.Model.resultNum);
        document.getElementById("textRow").value = this.Model.resultNum;
      }
    }
  }
  clear2() {
    this.Model.oldVal = "";
    this.Model.newVal = "";
    this.Model.operator = undefined;
  }


  //
  // attachButtonHandlers
  // determines what action is taken when a button is clicked
  // makes sure that when we click on a button or cell, the "this"
  // reference is fixed to that cell
  //
  attachButtonHandlers2() {
    this.View2.container.onclick = this.Controller2.viewClickHandler.bind(this);
  }





  //
  // createHTMLforView
  // Utility. creates HTML formatted text for the entire view
  //
  createHTMLforView2() {
    var s;
    s = "<table id=\"myTable\" border=2>"

    // row for results
    s += "<tr><td>" + this.createHTMLforElement2(this.View2.textRow) + "</td></tr>";
    s += "<tr><td>";

    // thisulator buttons

    s += this.createHTMLforElement2(this.View2.button7) + " ";
    s += this.createHTMLforElement2(this.View2.button8) + " ";
    s += this.createHTMLforElement2(this.View2.button9) + " ";
    s += this.createHTMLforElement2(this.View2.buttonplus) + " " + "<br>";
    s += this.createHTMLforElement2(this.View2.button4) + " ";
    s += this.createHTMLforElement2(this.View2.button5) + " ";
    s += this.createHTMLforElement2(this.View2.button6) + " ";
    s += this.createHTMLforElement2(this.View2.buttonminus) + " " + "<br>";
    s += this.createHTMLforElement2(this.View2.button1) + " ";
    s += this.createHTMLforElement2(this.View2.button2) + " ";
    s += this.createHTMLforElement2(this.View2.button3) + " ";
    s += this.createHTMLforElement2(this.View2.buttonmul) + " " + "<br>";
    s += this.createHTMLforElement2(this.View2.button0) + " ";
    s += this.createHTMLforElement2(this.View2.buttondot) + " ";
    s += this.createHTMLforElement2(this.View2.buttonequal) + " ";
    s += this.createHTMLforElement2(this.View2.buttondiv) + " " + "<br>";
    s += this.createHTMLforElement2(this.View2.buttonC) + " ";
    s += this.createHTMLforElement2(this.View2.buttonMR) + " ";
    s += this.createHTMLforElement2(this.View2.buttonMm) + " ";
    s += this.createHTMLforElement2(this.View2.buttonMp) + " " + "<br>";
    s += this.createHTMLforElement2(this.View2.buttonMC) + " ";


    s += "</tr></td></table>";
    return s;
  }


  //
  // createHTMLforElement2
  // utility. creates html formatted text for an element
  //
  createHTMLforElement2(element) {
    var s = "<input ";
    s += " id=\"" + element.id + "\"";
    s += " type=\"" + element.type + "\"";
    s += " value= \"" + element.value + "\"";
    s += " onclick= \"" + element.onclick + "\"";
    s += ">";
    return s;
  }

} // end of Calculator;