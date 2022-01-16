import {Component, h, Host} from "@stencil/core";
import "app-external";

@Component({
    tag: "app-root"
})
export class Root {

    componentDidLoad() {
        console.log("app-root did load!");
    }

    render() {
        return <Host>
            <div>I'm app-root, a below ⬇️ should be app-external!</div>
            <br/>
            <br/>
            <app-external/>
        </Host>
    }
}
