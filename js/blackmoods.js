//let newvar=document.getElementById("toggle-theme-btn")
//newvar.addEventListener('click',function(){
//    document.body.classList.toggle('dark')
//})
//Задача 2
 

//function checkAge(film, namelovefilm)
 //{
   //if (film = namelovefilm) 
  // {
  //   return true;
   //} else {
   //  return confirm('Попробуйте еще раз');
  // }
// }
function checkFilm(film1, lovefilm)
{switch  (film1)
    {
    case lovefilm: {
       alert('Верно, вы угадали! Мой любимый фильм:'+lovefilm);
         break;
    } 
   default :
    {
     alert('Попробуйте еще раз');
    break;
    } 
    }
}
 namelovefilm="Пятый элемент"
 let film = prompt('Угадайте мой любимый фильм', 'фильм');
 checkFilm(film,namelovefilm);
 //let age=parseInt(prompt ('Введите ваш возраст',"Возраст"))
 