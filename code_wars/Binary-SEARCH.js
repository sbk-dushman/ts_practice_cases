const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length-1;

    while (low<=high) {

        const mid = Math.floor( (low+high) / 2);
        const guess = list[mid];
       
        console.log('предположение '+ guess );
        
        if( guess === item ){
            return mid;
        } else if(guess > item ){
             high = mid- 1;
        } else{
            low = mid + 1;
        
        }
    }
      return false;
}



//Решите задачу: дан массив чисел, найдите все пары чисел, сумма которых равна заданному числу target. Оптимизируйте решение с O(n²) до O(n) по временной сложности.
// Пример:
const nums = [2, 7, 11, 15, 3, 6];
const target = 9;
const findTheTarget= (nums, target)=>{
const numbers= nums.filter((number)=> number< target);
console.log(numbers);
 
}
names = [
    //Русские имена
    "Александр", "Алексей", "Анастасия", "Андрей", "Анна", "Артём", "Артур", "Богдан",
    "Борис", "Вадим", "Валентина", "Валерий", "Василий", "Вера", "Виктор", "Виктория",
    "Виталий", "Владимир", "Владислав", "Галина", "Георгий", "Григорий", "Даниил", "Дарья",
    "Денис", "Дмитрий", "Евгений", "Евгения", "Егор", "Екатерина", "Елена", "Захар",
    "Иван", "Игорь", "Илья", "Инна", "Кирилл", "Константин", "Кристина", "Ксения",
    "Лев", "Леонид", "Лидия", "Любовь", "Людмила", "Максим", "Маргарита", "Марина",
    "Мария", "Матвей", "Михаил", "Надежда", "Наталья", "Никита", "Николай", "Олег",
    "Ольга", "Павел", "Пётр", "Полина", "Роман", "Руслан", "Светлана", "Семён",
    "Сергей", "София", "Станислав", "Таисия", "Татьяна", "Тимофей", "Тимур", "Ульяна",
    "Фёдор", "Юлия", "Юрий", "Яна", "Ярослав",
    // Международные/английские имена
    "Aaron", "Adam", "Adrian", "Alan", "Albert", "Alice", "Amanda", "Amber",
    "Amy", "Andrew", "Angel", "Angela", "Anna", "Anthony", "Arthur", "Austin",
    "Barbara", "Benjamin", "Betty", "Beverly", "Billy", "Bobby", "Brandon", "Brian",
    "Bruce", "Bryan", "Carl", "Carol", "Catherine", "Charles", "Charlotte", "Cheryl",
    "Christian", "Christina", "Christine", "Christopher", "Clarence", "Craig", "Cynthia", "Daniel",
    "David", "Deborah", "Debra", "Denise", "Dennis", "Diana", "Diane", "Donald",
    "Donna", "Doris", "Dorothy", "Douglas", "Edward", "Elizabeth", "Emily", "Emma",
    "Eric", "Ethan", "Eugene", "Evelyn", "Frances", "Frank", "Gabriel", "Gary",
    "George", "Gerald", "Gloria", "Grace", "Gregory", "Harold", "Harry", "Heather",
    "Helen", "Henry", "Isabella", "Jack", "Jacob", "James", "Jane", "Jason",
    "Jean", "Jeffrey", "Jennifer", "Jeremy", "Jerry", "Jessica", "Joan", "Joe",
    "John", "Johnny", "Jonathan", "Jordan", "Jose", "Joseph", "Joshua", "Joyce",
    "Juan", "Judith", "Judy", "Julia", "Julie", "Justin", "Karen", "Katherine",
    "Kathleen", "Kathryn", "Kathy", "Katie", "Kayla", "Keith", "Kelly", "Kenneth",
    "Kevin", "Kimberly", "Kyle", "Larry", "Laura", "Lauren", "Lawrence", "Linda",
    "Lisa", "Logan", "Louis", "Madison", "Margaret", "Maria", "Marie", "Marilyn",
    "Mark", "Martha", "Mary", "Matthew", "Megan", "Melissa", "Michael", "Michelle",
    "Mildred", "Nancy", "Natalie", "Nathan", "Nicholas", "Nicole", "Noah", "Olivia",
    "Pamela", "Patricia", "Patrick", "Paul", "Peter", "Philip", "Rachel", "Ralph",
    "Randy", "Raymond", "Rebecca", "Richard", "Robert", "Roger", "Ronald", "Rose",
    "Roy", "Russell", "Ruth", "Ryan", "Samantha", "Samuel", "Sandra", "Sara",
    "Sarah", "Scott", "Sean", "Sharon", "Shawn", "Sophia", "Stephanie", "Stephen",
    "Steve", "Steven", "Susan", "Teresa", "Terry", "Theresa", "Thomas", "Timothy",
    "Tina", "Tyler", "Victoria", "Vincent", "Virginia", "Walter", "Wayne", "William",
    "Willie", "Zachary"
]