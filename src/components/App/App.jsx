import { Container, Header, SearchForm, Section, } from 'components';
import { ToDoList } from 'components/ToDoList/ToDoList';

export const App = () => {
  // state = {
  //   todos: [],
  // };

  // addTodo = text => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [...todos, todo],
  //   }));
  // };

  // handleSubmit = data => {
  //   this.addTodo(data);
  // };

  // deleteTodo = id => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== id),
  //   }));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <ToDoList />
        </Container>
      </Section>
    </>
  );
};
