import { Greetings } from '@ehtisham&#x2F;my-greeting-plugin';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Greetings.echo({ value: inputValue })
}
