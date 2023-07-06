let levels = [
    {level:0, name:"noob"},
    {level:1, name:"beginner"},
    {level:2, name:"amature"},
    {level:3, name:"intermediate"},
    {level:4, name:"expert"}
];

for(let level of levels)
{
    console.log(level.name);
}

for(let level in levels)
{
    console.log(levels[level].name);
}

for(let i=0;i<levels.length;i++)
{
    console.log(levels[i].name);
}

var i = 0
while(i<levels.length)
{
    console.log(levels[i].name);
    i++;
}

var temp = 0
do{
    console.log(levels[temp].name);
    temp++;
}while(temp<levels.length);