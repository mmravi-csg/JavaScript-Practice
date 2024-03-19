//1.HCF OF TWO NUMBERS
function hcf(a,b)
{
var a=2;
var b=5;
if(a>b)
{
    var biggest=a;
}
else{

    biggest=b;
}
for(var i=0;i<biggest;i++)
		{
			if(a%b ==0 || b%a==0)
			{
				if(a<b)
				{
					console.log(a);
					break;
				}
				else
				{
					console.log(b);
					break;
				}
			}
			else
			{
				console.log(1);
				break;
			}
		}
	}
	let result=hcf(2,5);
	console.log(result)

	//2.MULTIPLES OF 2 & 5

	function multiplesof2and5(c,d)
	{

	var c=2;
	var d=5;
	for(var i=1;i<=100;i++)
	{
    	if(i%c==0 && i%d==0)
    	{
        	console.log(i);
    	}
	}
	}
	let multiples =multiplesof2and5(2,5);
	console.log(multiples);

	//3.MULTIPLICATION TABLE

	function multiplication()
	{
		for(var i=1;i<=10;i++)
		{
    	console.log(i*10);
    
		}
	}
	let res =multiplication();
	console.log(res);

	//4.COUNT NUMBERS USING WHILE LOOP.

	function count()
	{
		let count = 1; 
		while (count <= 5) { 
  		console.log(count); 
  		count++; 
		} 
	}
	let countres =count();
	console.log(countres);







	