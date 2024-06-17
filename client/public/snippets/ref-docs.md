- By using a ref, you ensure that:
  1. You can store information between re-renders (unlike regular variables, which reset on every render).
  2. Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
  3. The information is local to each copy of your component (unlike the variables outside, which are shared).
