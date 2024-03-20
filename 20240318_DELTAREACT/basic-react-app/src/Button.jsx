function printHello(event) {
    console.log("Hello!");
    console.log(event);
}

function printBye() {
    console.log("Bye!");
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printBye}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae perspiciatis quo tenetur excepturi in molestiae
                ducimus autem voluptates dignissimos repellendus impedit sunt
                odio, modi nam veritatis assumenda! Accusamus, obcaecati maxime!
            </p>
        </div>
    );
}
