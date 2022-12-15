//Задача 1
    let namefun=prompt ('Введите ваше имя',"Имя")
    function showMessage()
    {
        let message = 'Привет, ' + namefun;
        alert(message); 
    }
    switch  (namefun)
    {
      case null:
        {
          alert('Очень жаль');
            break
        }     
        case "Имя":
        {
          alert('Имя не ввели');
            break
        }     
      default : 
        { 
         showMessage();
        }
    }

 
