function Patient (name, weight, height, fat) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.fat = fat;
    this.imc = calculateIMC(height, weight);
}
