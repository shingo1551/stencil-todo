import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'check-todo',
  styleUrl: 'check-todo.css',
  shadow: true,
})
export class CheckToDo {
  @Prop() done!: boolean;
  @Prop() text!: string;
  @Prop() n!: number;

  @Event() todo: EventEmitter<number>;

  render() {
    return (
      <li>
        <label class='checkbox'>
          <input
            type='checkbox'
            checked={this.done}
            onClick={() => this.todo.emit(this.n)}
          />
          <span class={{ done: this.done }}>{this.text}</span>
        </label>
      </li>
    );
  }
}
