import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';



function useMovies() {

    const {item: movies,
        saveItem: saveMovies,
        loading,
        error,
    } = useLocalStorage('MOVIES_V1', []);

    const [favoriteStatus, setFavoriteStatus] = useState(false);

    // const [searchValue, setSearchValue] = React.useState('');
    // const [filterComplete, setFilterComplete] = React.useState(false);
    // const [filterUncomplete, setFilterUncomplete] = React.useState(false);
    // const [filterDelete, setFilterDelete] = React.useState(false);

    // const completedTodos = todos.filter(todo => !!todo.completed).length;
    // const totalTodos = todos.length;
    

    // const [fil, setFil] = React.useState("all");
    // const [del, setDel] = React.useState("all");

    // const addSpanish = () => {
    //   saveLanguage('spanish')
    // }
  
    // const addEnglish = () => {
    //   saveLanguage('english')
    // }

    // const onClickIdiom = () => {
    //   if(language === 'spanish') {
    //     addEnglish(); 
    //   } else {
    //     addSpanish();
    //   }
    // }  

    // const filter = () => {
    //   if (filterDelete) {
    //       const todosFilter = deleteTodos.filter((todo) => todo);
          
    //       if(filterComplete) {
    //         const todosFilter = deleteTodos.filter((todo) => todo.completed === false);
    //         return todosFilter.filter((todo) =>
    //           todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    //       }

    //       if(filterUncomplete) {
    //         const todosFilter = deleteTodos.filter((todo) => todo.completed === true);
    //         return todosFilter.filter((todo) =>
    //           todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    //       }

    //     return todosFilter.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    //   } else if (filterComplete) {
    //       const todosFilter = todos.filter((todo) => todo.completed === false);
    //       return todosFilter.filter((todo) =>
    //         todo.text.toLowerCase().includes(searchValue.toLowerCase())
    //       );
    //   } else if (filterUncomplete) {
    //       const todosFilter = todos.filter((todo) => todo.completed === true);
    //       return todosFilter.filter((todo) =>
    //         todo.text.toLowerCase().includes(searchValue.toLowerCase())
    //       );
    //     } else {
    //       return todos.filter((todo) =>
    //         todo.text.toLowerCase().includes(searchValue.toLowerCase())
    //       );
    //     }
    //   };

    // const totalDelete = deleteTodos.length;
    

    // const todosFiltered = filter();


    const findMovies = (id) => {
        const movieIndex = movies.findIndex(movie => movie.id === id);
        if(movieIndex !== -1) {
            setFavoriteStatus(true)
        } else {
            setFavoriteStatus(false);
        }
    }

    const favoriteMoviesBySearch = (text) => {
      const newMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase()));
      saveMovies(newMovies);
    }
    
    const addMovie = (id, title, image) => {
      const newMovies = [...movies];
        newMovies.push({
            id: id,
            title: title,
            image: image
        }); 
        findMovies(id);
        saveMovies(newMovies);
    }

    const deleteMovie = (id) => {
        const movieIndex = movies.findIndex(movie => movie.id === id);
        const newMovies = [...movies];
        newMovies.splice(movieIndex, 1);
        findMovies(id);
        saveMovies(newMovies)
    }

//     const getTodo = (id) => {
//       const todoIndex = todos.findIndex(todo => todo.id === id);
//       return todos[todoIndex];
//     }

//     const editTodo = (id, newText) => {
//       const todoIndex = todos.findIndex(todo => todo.id === id);
//       const newTodos = [...todos];
//       newTodos[todoIndex].text = newText; 
//       saveTodos(newTodos);
//   }

//     const completeTodo = (id) => {
//         const todoIndex = todos.findIndex(todo => todo.id === id);
//         const newTodos = [...todos];
//         newTodos[todoIndex].completed = true; 
//         saveTodos(newTodos);
//     }

//     const deleteTodo = (id) => {
//         const todoIndex = todos.findIndex(todo => todo.id === id);
//         const newTodos = [...todos];
//         const todoComplete = newTodos[todoIndex].completed;
//         const todoText = newTodos[todoIndex].text;
//         deleteTodos.push({
//           text: todoText,
//           completed: todoComplete,
//           id,
//         });
//         saveDeleteTodos(deleteTodos);
//         newTodos.splice(todoIndex, 1);
//         saveTodos(newTodos);
//     }
    
//     const fullDeleteTodo = (id) => {
//       const todoIndex = deleteTodos.findIndex(todo => todo.id === id);
//       const newTodos = [...deleteTodos];
//       newTodos.splice(todoIndex, 1);
//       saveDeleteTodos(newTodos);
//     }

//     const restoreTodo = (id) => {
//       const todoIndex = deleteTodos.findIndex(todo => todo.id === id);
//       const newTodos = [...todos];
//       const todoComplete = deleteTodos[todoIndex].completed;
//       const todoText = deleteTodos[todoIndex].text;
//       newTodos.push({
//         text: todoText,
//         completed: todoComplete,
//         id,
//       });
//       saveTodos(newTodos);
//       deleteTodos.splice(todoIndex, 1);
//       saveDeleteTodos(deleteTodos);
//     }

//     const contTodo = (text) => {
//         const nTodos = [...todos];
//        for (const todo of nTodos) {
//         if(text === todo.text) return true;
//        }
      
//     }

//     const delTodo = (text) => {
//       const nTodos = [...deleteTodos];
//       for (const dtodo of nTodos) {
//         if(text === dtodo.text) return true;
//        }
//     }

    const state = {
      movies,
      favoriteStatus,
    //   theme,
    //   language,
    
      loading,
    //   error,
    
    //   searchValue,
    
    //   totalTodos,
    //   completedTodos,
    
    //   del,
    //   totalDelete,
    
    //   fil,
    //   todosFiltered,

    //   getTodo,
    //   setTheme
    };

    const stateUpdaters = {
    //   toggleTheme,
    //   addSpanish,
    //   addEnglish,
    //   onClickIdiom,
    
    //   setSearchValue,
    
      addMovie,
      deleteMovie,
      findMovies,
      favoriteMoviesBySearch,
    //   editTodo,
    //   completeTodo,
    //   deleteTodo,
    //   fullDeleteTodo,
    //   restoreTodo,
    //   contTodo,
    //   delTodo,
      
    //   toggleFilterComplete,
    //   toggleFilterUncomplete,
    //   toggleFilterDeleted,
    };

    return { state, stateUpdaters };
 }

 function newTodoId(todoList) {
  
  if(!todoList.length) {
    return 1;
  }

  const idList = todoList.map(todo => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;

  // return Date.now().toString(16);
 }


export { useMovies };