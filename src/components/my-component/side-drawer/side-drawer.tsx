import { Component } from "@stencil/core";
import { h } from "@stencil/core";

@Component({
    tag: 'my-side-drawer'
})
export class SideDrawer {
    render() {
        return (
            <div>
                <h1>hello from my side drawer</h1>
            </div>
        );
    }
}