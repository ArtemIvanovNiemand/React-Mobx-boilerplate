import React, { Component } from "react";
import { observer } from "mobx-react";

import styles from './styles.css';

const Todo = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}

      onClick={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
    <div className={styles.test}>
        TEst color
    </div>
  </li>
));

export default Todo;
