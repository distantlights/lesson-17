// for ციკლი რომელიც ბეჭდაცს 10-დან 25 მდე 

for (let i=10; i <= 25; i++) {
  console.log(i);
}

// while ციკლი 

let k = 0;

while (k <= 10) {
  console.log(k);
  k++;
}

//do-while ციკლი 

let j = 0;

do {
  console.log(j);
  j++;
} while (j <= 15);

//მასივიდან კენტი რიცხვები 

const numbers = [23, 44, 123, 234, 765, 1023, 2368];

for (let n = 0; n < numbers.length; n++) {
  if (numbers[n] % 2 !== 0) {
    console.log(numbers[n]);
  }
}

// switch კვირის დღეები 

const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  default:
    console.log("უცნობი დღე");
}

// js ფაილიდან წამოღებული items 


const data = {
  items: [
    {
      productName: "Samsung S931B/DS Galaxy S25 12/128GB Silver Shadow",
      storageQuantity: 38,
    },

    {
      productName: "Xiaomi Poco X7 Pro 5G 8/256GB Yellow",
      storageQuantity: 21,
    },
    
    {
      productName: "Canon EOS R100 RFS18-45 S SEE 6052C034AA",
      storageQuantity: 12,
    },
    
  ]
};

const items = data.items;

for (let x = 0; x < items.length; x++) {
  if (items[x].storageQuantity > 10) {
    console.log("დარჩენილია მარაგში:", items[x].productName);
  }
}