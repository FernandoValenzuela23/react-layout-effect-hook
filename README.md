## useLayoutEffect

useLayoutEffect es practicamente lo mismo que useEffect, de hecho se recomienda mas usar useEffect, pero la diferencia radica en que useLayoutEffect se ejecuta de manera sincrona despues de hacer todas las mutaciones en el DOM.

UseEffect se ejecuta hna vez que el componente termina de renderizarse, al contrario que uselayoutEffect que se ejecuta antes y por lo tanto permite hacer cambios en el DOM antes de que el componente termine de renderizarse

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
