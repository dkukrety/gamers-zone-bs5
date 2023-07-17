class Menu{
    constructor(name)
    {
        this.name = name;
        this.menuItem = []
    }
    addMenuItem(item)
    {
        this.menuItem.push(item);
    }
    display(){
        console.log(`this is a ${this.name}`);
        this.menuItem.forEach(function (item){
            console.log(`menu item name ${item.name}`);
            item.display();
        });
    }
}

class MenuItem{
    constructor(itemName)
    {
        this.menuItem = [];
        this.leafItem = [];
        this.name = itemName;
    }

    addMenuItem(item){
        this.menuItem.push(item);
    }

    addLeafItem(leaf)
    {
        this.leafItem.push(leaf);
    }
    display()
    {
        this.menuItem.forEach(function (item){
            console.log(`menu item name ${item.name}`);
            item.display();
        });
        this.leafItem.forEach((leaf)=>leaf.display())

    }
}

class leaf
{
    constructor(name)
    {
        this.name = name;
    }
    display()
    {
        console.log(`-----leaf name is ${this.name}`);
    }
}

const menu = new Menu("Navigation Menu");
menu.addMenuItem(new MenuItem("Home"));

let product = new MenuItem("Products");
product.addMenuItem(new MenuItem("Enterprise Products"));
product.addLeafItem(new leaf("Dell EMC Netwoker"));
product.addLeafItem(new leaf("Avamar"));
menu.addMenuItem(product);

let services = new MenuItem("Services");
services.addLeafItem(new leaf("24x7 Support Call"));
services.addLeafItem(new leaf("Raise Ticket"));
services.addLeafItem(new leaf("Escalate"));

menu.addMenuItem(services);
menu.addMenuItem(new MenuItem("Contacts"));

menu.display();
