
function numberToPersianWords(number) {
    const yekan = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
    const dahgan = ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود','یازده','دوازده','سیزده','چهارده','پانزده','شانزده','هفده','هیجده','نوزده',];
    const sadgan = ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];
    const hezargan = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون'];
    
    if (number === 0){
      return 'صفر';
    }

    let words = '';
    
    for (let i = 0; number > 0; i++) {
      if (number % 1000 !== 0) {
        let word = '';
        
    
        let a=(Math.floor(number % 1000 / 100)!==0) ? ((number % 100 / 10)!==0 ?  sadgan[Math.floor(number % 1000 / 100)] +' و ' :
        sadgan[Math.floor(number % 1000 / 100)])
        : '';
        let b=(Math.floor(number % 100 / 10)!==0) ? (number % 100 < 20 &&number % 100 >10 ) ? dahgan[number % 100 -1] :
        ((yekan[number % 10]!=='') ? dahgan[Math.floor(number % 100 / 10)] + ' و '+ yekan[number % 10]:
        dahgan[Math.floor(number % 100 / 10)])
        : yekan[number % 10];
        
        word=a+b
       
        switch (i){
          case 0: words =word ;
            break;
          case 1 : switch(number/1000){
            case .001:
            (words==='')  ? words='هزار' :   words ='هزار' +' و ' + words ;
            break;
            default: (words==='')  ? words=word + ' ' + hezargan[i] :   words =word + ' ' + hezargan[i] + ' و ' + words
          }
            break;
            default:
              words =word + ' ' + hezargan[i] + ' و ' + words
        }
        
      
        }
      
      number = Math.floor(number / 1000);
    }
    
    return words;
  }
  

  let number = parseInt(prompt('لطفاً عدد را وارد کنید:'));
  let minus=''
number < 0 ?  minus='منفی' : minus
number<0 ? number=Math.abs(number) : number
  if (!isNaN(number))
    console.log(`${minus} ${numberToPersianWords(number)}`);
  else
    console.log('ورودی نامعتبر است!');
  