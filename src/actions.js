export const inc = () => ({type: 'INC'});
export const rnd = () => ({type: 'RND', payload: Math.floor(Math.random() * 100)});
export const dec = () => ({type: 'DEC'});