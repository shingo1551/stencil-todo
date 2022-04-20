import { Component, Host, h, State } from '@stencil/core';
import state, { purge, done, push } from './todo';
import { loading } from '../../shared/utils';

@Component({
  tag: 'my-todo',
  styleUrl: 'my-todo.css',
  shadow: true,
})
export class AppToDo {
  @State() loading = true;
  @State() disabled = true;

  input: HTMLInputElement;

  onPurge = (ev: Event) => {
    ev.preventDefault();
    purge();
  };

  onAdd = (ev: MouseEvent) => {
    ev.preventDefault();
    push({ text: this.input.value, done: false });
    this.input.value = '';
    this.disabled = true;
  };

  onKeyUp = () => {
    this.disabled = !this.input.value;
  };

  render() {
    return loading(
      this,
      <Host>
        <h2>Todo</h2>
        <Purge purge={this.onPurge}></Purge>
        <List></List>
        <Form comp={this}></Form>
      </Host>
    );
  }
}

const Purge = ({ purge }) => (
  <span>
    {state.count} of {state.list.length} remaining [
    <a href='' onClick={purge}>
      purge
    </a>
    ]
  </span>
);

const List = () => (
  <ul>
    {state.list.map((todo, n) => (
      <check-todo
        done={todo.done}
        text={todo.text}
        n={n}
        onTodo={(e) => done(e.detail)}
      />
    ))}
  </ul>
);

const Form = ({ comp }: { comp: AppToDo }) => (
  <form>
    <input
      type='text'
      size={30}
      placeholder='add new todo here'
      ref={(el) => (comp.input = el)}
      onKeyUp={comp.onKeyUp}
    />
    <input
      type='submit'
      value='add'
      onClick={comp.onAdd}
      disabled={comp.disabled}
    />
  </form>
);
