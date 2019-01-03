console.log('Welcome to typeScript-core');

class TsApp {
  name: string;
  constructor() {
    this.name = 'Ranjit';
    this.greet(this.name);
  }

  greet(name: string) {
    console.log(`Welcome ${name}`);
  }

}
