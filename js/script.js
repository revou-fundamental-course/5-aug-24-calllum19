// Javascript File for BMI Website
// Main Function for calculating BMI
const calculateBMI = function(height,weight){
    let bmi = weight / ((height / 100) ** 2);

  return bmi.toFixed(1); 
}

//Bmi categories
const bmiCategory = {
    underweight: 'Kekurangan berat badan',
    normal: 'Berat Badan Normal',
    overweight: 'Kelebihan berat badan',
    obese: 'Obesitas',
  };
// Validate the form
function validateForm() {
    // set constant variables to be used
    const gender = document.querySelector('input[name="jenis-kelamin"]:checked');
    const height = parseFloat(document.getElementById("tinggi-badan").value);
    const weight = parseFloat(document.getElementById("berat-badan").value);
    const age = parseFloat(document.getElementById("usia").value);

    // HTML variables
    const preBMI = document.getElementById("text-pre-bmi");
    const bmiResult = document.getElementById("result-bmi");
    if(!gender || isNaN(height) || isNaN(weight) || isNaN(age)){
        alert("Tolong melengkapi seluruh formnya");
    } else {    
        // Run the BMI calculation after validation
        const bmi = calculateBMI(height,weight);
        // Appropriate category alongside BMI result
        let category;
        let genderValue = gender.value;
        // BMI Categorization for both genders
        switch (genderValue) {
            case 'laki-laki':
              if (bmi < 18.5) {
                category = bmiCategory.underweight;
              } else if (bmi >= 18.5 && bmi <= 24.9) {
                category = bmiCategory.normal;
              } else if (bmi >= 25.0 && bmi <= 29.9) {
                category = bmiCategory.overweight;
              } else if (bmi >= 30.0) {
                category = bmiCategory.obese;
              }
              break;
            case 'perempuan':
              if (bmi < 17) {
                category = bmiCategory.underweight;
              } else if (bmi >= 17 && bmi <= 23.9) {
                category = bmiCategory.normal;
              } else if (bmi >= 23.0 && bmi <= 27.0) {
                category = bmiCategory.overweight;
              } else if (bmi > 27.0) {
                category = bmiCategory.obese;
              }
              break;
          }
            // Picking a suggestion for each BMI category
            const BMIsugs = function(category){
            if (category === bmiCategory.underweight) {
              return 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas normal.';
            } else if (category === bmiCategory.normal) {
              return 'Jika BMI Anda berada dalam kategori ini maka Anda memiliki berat badan yang sehat.';
            } else if (category === bmiCategory.overweight) {
              return 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
            } else if (category === bmiCategory.obese) {
              return 'Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal.';
            }
          };
            // Advice text for each BMI category
            const BMIadvice = function(category){
            if (category === bmiCategory.underweight) {
              return 'Perbanyak asupan makanan bergizi dan konsultasikan dengan ahli gizi untuk peningkatan berat badan.';
            } else if (category === bmiCategory.normal) {
              return 'Lanjutkan gaya hidup sehat dengan pola makan seimbang dan olahraga teratur.';
            } else if (category === bmiCategory.overweight) {
              return 'Lakukan penyesuaian pola makan dan rutin berolahraga untuk menurunkan berat badan.';
            } else if (category === bmiCategory.obese) {
              return 'Segera konsultasikan dengan ahli gizi untuk penurunan berat badan yang sehat.';
            }
          };
        preBMI.innerText = 'BMI anda adalah:'
        bmiResult.innerText = bmi + " (" + category + ")";
        bmiResult.style.visibility = "visible";
        const sugsForBMI = document.getElementById('sugs-for-bmi');
        const adviceForBMI = document.getElementById('advice-for-bmi');
        sugsForBMI.innerText = BMIsugs(category);
        adviceForBMI.innerText = BMIadvice(category);
        document.getElementById('text-pre-bmi').scrollIntoView({ behavior: 'smooth' });
    }
}

function resetForm(){
    // Reset everything affected.
    document.getElementById("bmi-form").reset();
    document.getElementById("result-bmi").style.visibility = "hidden";
    document.getElementById('sugs-for-bmi').innerText = '';
    document.getElementById('advice-for-bmi').innerText = '';
    document.getElementById("text-pre-bmi").innerText = "Hasil akan ditunjukkan pada bagian ini.";
}