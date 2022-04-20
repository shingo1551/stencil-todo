/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CheckTodo {
        "done": boolean;
        "n": number;
        "text": string;
    }
    interface MyTodo {
    }
}
declare global {
    interface HTMLCheckTodoElement extends Components.CheckTodo, HTMLStencilElement {
    }
    var HTMLCheckTodoElement: {
        prototype: HTMLCheckTodoElement;
        new (): HTMLCheckTodoElement;
    };
    interface HTMLMyTodoElement extends Components.MyTodo, HTMLStencilElement {
    }
    var HTMLMyTodoElement: {
        prototype: HTMLMyTodoElement;
        new (): HTMLMyTodoElement;
    };
    interface HTMLElementTagNameMap {
        "check-todo": HTMLCheckTodoElement;
        "my-todo": HTMLMyTodoElement;
    }
}
declare namespace LocalJSX {
    interface CheckTodo {
        "done": boolean;
        "n": number;
        "onTodo"?: (event: CustomEvent<number>) => void;
        "text": string;
    }
    interface MyTodo {
    }
    interface IntrinsicElements {
        "check-todo": CheckTodo;
        "my-todo": MyTodo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "check-todo": LocalJSX.CheckTodo & JSXBase.HTMLAttributes<HTMLCheckTodoElement>;
            "my-todo": LocalJSX.MyTodo & JSXBase.HTMLAttributes<HTMLMyTodoElement>;
        }
    }
}
