class Driver {
    constructor(name, car) {
        this.name = name;
        this.car = car;
    }

    describe() {
        return `${this.name} drives ${this.car}`;
    }
}

class Nascar {
    constructor(name) {
        this.name = name;
        this.drivers = [];
    }

   addDriver(driver) {
    if (driver instanceof driver) {
        this.drivers.push(driver);
    } else {
        throw new Error(`you can only add an instance of driver. Argument is not a driver: ${driver}`);
    }
   } 

   describe(){
    return `${this.name} has ${this.drivers.length} drivers.`;
   } 
}

class Menu {
    constructor() {
        this.nascar = [];
        this.selectedNascar = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createNascar();
                    break;
                case '2':
                    this.viewNascar();
                    break;
                case '3':
                    this.deleteNascar();
                    break;
                case '4':
                    this.displayNascar();
                    break;
                default:
                    selection = 0;
            } 
            selection = this.showMainMenuOptions();  
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(` 
        0) exit
        1) create new nascar
        2) view nascar
        3) delete nascar
        4) display all nascar
        `);
    }

    showNascarMenuOptions(nascarInfo) {
        return prompt(`
        0) back
        1) create driver
        2) delete driver
        ---------------------
        ${nascarInfo}
        `)
    }

    displayNascar() {
        let nascarString = '';
        for (let i = 0; i < this.nascar.length; i++) {
            nascarString += i + ') ' + this.nascar[i].name + '\n';
        }
        alert(nascarString);
    }

    createNascar() {
        let name = prompt('Enter name for new nascar:');
        this.nascar.push( new Nascar(name));
     }

    viewNascar() {
        let index = prompt('Enter the index of the nascar you wish to view');
        if (index > -1 && index < this.nascar.length) {
            this.selectedNascar = this.nascar[index];
            let description = 'Nascar Name: ' + this.selectedNascar.name + '\n';

            for (let i = 0; i < this.selectedNascar.drivers.length; i++) {
                description += i + ')' + this.selectedTeam.drivers[i].name
                + ' - ' + this.selectedNascar.drivers[i].car + '\n';
            }

            let selection = this.showNascarMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createDriver();
                    break;
                case '2':
                    this.deleteDriver();
            }
        }
    }

deleteNascar() {
    let index = prompt('Enter the index of the nascar you wish to delete:');
    if (index > -1 && index < this.nascar.length) {
        this.nascar.splice(index, 1);
    }

    }
createDriver() {
    let name = prompt('Enter name for new Driver:');
    let car = prompt('Enter car for new driver:');
    this.selectedNascar.drivers.push(new Driver(name, car));
}

deleteDriver() {
    let index = prompt('Enter the index of the driver you wish to delete:');
    if (index > -1 && index < this.selectedNascar.drivers.length) {
        this.selectedNascar.drivers.splice(index, 1);
    }
}
}

let menu = new Menu();
menu.start();