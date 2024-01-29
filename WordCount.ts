import chalk from "chalk";
import inquirer from "inquirer";

let str : string = "Yes";

while (str == "Yes") {
    let para = await inquirer.prompt(
        {
            type: "input",
            name: "abc",
            message: "please enter your paragraph:"
        }
    )

let wordCnt:number = 0;
let alphaCnt:number = 0;
        for (let i = 0; i < para.abc.length; i++) {
            const element = para.abc[i];
            if (para.abc[i] === " " && para.abc[i-1] != " " && i > 1) {
                wordCnt = wordCnt + 1;
            }else if (para.abc[i] != " " && para.abc[i] != "." && para.abc[i] != "," && para.abc[i] != "'") {
                alphaCnt = alphaCnt + 1;
            }
        }
        wordCnt = wordCnt + 1;
        console.log(`There are total of ${wordCnt} words and ${alphaCnt} letters in the paragraph`);
        let user = await inquirer.prompt(
        {
            type: "list",
            name: "ask",
            message: "Would you like to write another paragraph? ",
            choices:['Yes','No']
        }
    )
    str = user.ask;
}
