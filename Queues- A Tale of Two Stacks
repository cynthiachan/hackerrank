function processData(input) {
    //Enter your code here
    var line = input.split("\n");
    var stack1 = []
    var stack2 = []

    for (var i = 1; i < line.length; i++) {
        if (line[i][0] == "1"){
            var val = line[i].slice(1).trim()
            stack1.push(val)
        }
        if (line[i][0] == "2") {
            if (stack2.length > 0) {
                stack2.pop()
            } else {
                while(stack1.length > 0) {
                    stack2.push(stack1.pop())
                }
                stack2.pop()
            }
        }
        if (line[i][0] == "3") {
            if (stack2.length > 0) {
                console.log(stack2[stack2.length - 1])
            } else {
                while (stack1.length !== 0) {
                    stack2.push(stack1.pop())
                }
                console.log(stack2[stack2.length - 1])
            }
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
