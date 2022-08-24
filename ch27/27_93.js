const points = [40,100,1,5,2,25,10];

points.sort((a,b) => a-b);

console.log(points); //[1, 2, 5, 10, 25, 40, 100]

console.log(points[0], points[points.length-1]); // 1 100

points.sort((a,b) => b-a);
console.log(points); //[100, 40, 25, 10, 5,  2,  1]

