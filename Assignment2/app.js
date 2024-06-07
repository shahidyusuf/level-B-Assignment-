// Q1: Solve the below code of expressions using short circuit?
// I.
// let exp = "faraz" || (true + false) + 5 && " " || "true"; 
// console.log(exp)//faraz

// II.
// let b = 3;
// let exp1 = (1 + 2) + ++b || 5 && 0 ;
// console.log(exp1);//7  

// III.
// let a = 5;
//  let exp2 = 32 && true - ++a && " " || "true";  
//  console.log(exp2);// not declair answer

// IV.
//  let exp3 = (true + 3) * 5 && undefined || "faraz" + 5; 
//  console.log(exp3);//faraz5

// V.
//  let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true"; 
//  console.log(exp4);//32abc

// VI.
//  let exp5 = false || (true + true) + 15 && "" || 50; 
// console.log(exp5)//50

// VII.
//  let exp6 = (true + false) + 5 || false + 8 + "abc" || "true"; 
// console.log(exp6)//6

// VIII.
//  let exp7 = "faraz" || false + 10 || "true"; 
//  console.log(exp7)//faraz

// IX.
//  let exp8 = 12 + (false + false) + true && null || "faraz"; 
// console.log(exp8)//faraz

// X.
//  let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10; 
// console.log(exp9)//3

// XI.
//  let exp10 = (true + false) + 5 || false + 8 + "abc" || "true"; 
// console.log(exp10)//6

// XII.
//  let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false); 
// console.log(exp11)//-13
// -------------------------------------------------------

// Q2: Create a mobile brand and model filtering app with filter mobile brand and then second  dropdown have same brand model in second dropdown and a single search button when click  the selected brand and model have shown in html body?

// const mobileModels = {
//     iPhone: ["iphone7", "iphone8", "iphone8plus", "iphoneX", "iphone11",],
//     xiaomi: ["redmiA2", "redmi10", "redmi11", "redmi12", "redmi13", "redmi13C"],
//     realme: ["Realme Note 50", "Realme C67", "Realme 9", "Realme 9i"],
//     Samsung: ["Galaxy S24", "Galaxy S51", "Galaxy S46", "Galaxy S77"],
// };

// const mobileSpecs = {
//     "iphone7": { memory: "32GB 2GB RAM, 128GB 2GB RAM, 256GB 2GB RAM", 
//         mainCamera: "12 MP, f/1.8, 28mm (wide), 1/3.0", 
//         selfieCamera:"7 MP, f/2.2, 32mm (standard)", 
//         battery: "Li-Ion 1960 mAh non-removable (7.45 Wh),Talk time	Up to 14 h (3G)", 
//         processor: "Snapdragon 8 Gen 2", storage: 512,},
//     "iphone8": { memory: "64GB 3GB RAM, 128GB 3GB RAM, 256GB 3GB RAM", 
//         mainCamera: "12 MP, f/1.8, 28mm (wide), PDAF, OIS 12 MP, f/2.8, 57mm (telephoto), PDAF, 2x optical zoom", 
//         selfieCamera:"7 MP, f/2.2, 32mm (standard)", 
//         battery: "Li-Ion 2691 mAh, non-removable (10.28 Wh)", 
//         processor: "Snapdragon 12 Gen 5", storage: 256,
//     },
//     "iphone8plus": { memory: "64GB 3GB RAM, 256GB 3GB RAM", 
//         mainCamera: "12 MP, f/1.8, 28mm (wide), 1/3.0", 
//         selfieCamera:"7 MP, f/2.2, 32mm (standard)",  
//         battery: "Li-Ion 2716 mAh, non-removable (10.35 Wh)", 
//         processor: "Snapdragon 7 Gen 9" , storage: 128,
//     },
//     "iphoneX": { memory: "64GB 3GB RAM, 256GB 3GB RAM",
//         selfieCamera:"7 MP, f/2.2, 32mm (standard)", 
//         mainCamera: "12 MP, f/1.8, 28mm (wide), 1/3.0",  
//         battery: "Li-Ion 2716 mAh, non-removable (10.35 Wh)", 
//         processor: "Snapdragon 7 Gen 9", storage: 256,

//     },
//     "iphone11": { memory: "64GB 3GB RAM, 256GB 3GB RAM", 
//         mainCamera: "12 MP, f/1.8, 28mm (wide), 1/3.0",
//         selfieCamera:"7 MP, f/2.2, 32mm (standard)",   
//         battery: "Li-Ion 2716 mAh, non-removable (10.35 Wh)", 
//         processor: "Snapdragon 7 Gen 9", storage: 512,

//     },    
//     "redmiA2": {memory: "2GB+32GB | 3GB+32GB", 
//         mainCamera: "8MP main camera",
//         selfieCamera:"5MPf/2.2Front video recording",   
//         battery: "5000mAh ", 
//         processor: "Snapdragon 8 Gen 1", storage: 256,
// }, 
//     "redmi10": {memory: "64GB 4GB RAM, 128GB 4GB RAM, 128GB 6GB RAM", 
//         mainCamera: "50 MP, f/1.8, (wide), PDAF 8 MP, f/2.2, 120˚ (ultrawide) 2 MP, f/2.4, (macro) 2 MP, f/2.4 (depth)",
//         selfieCamera:"8 MP, f/2.0, (wide), 1/4.0”, 1.12µm",   
//         battery: "Li-Po 5000 mAh, non-removable", 
//         processor: "Snapdragon 7 Gen 5", storage: 256,
// }, 
//     "redmi11": {memory: "64GB 4GB RAM, 64GB 6GB RAM, 128GB 4GB RAM, 128GB 6GB RAM", 
//         mainCamera: "50 MP, f/1.8, 26mm (wide), 1/2.76, 0.64µm, PDAF",
//         selfieCamera:"13 MP, f/2.4, (wide), 1/3.1",   
//         battery: "Li-Po 5000 mAh, non-removable", 
//         processor: "Snapdragon 8 Gen 4", storage: 512,
// }, 
//     "redmi12": {memory: "64GB 4GB RAM, 64GB 6GB RAM, 128GB 4GB RAM, 128GB 6GB RAM", 
//         mainCamera: "50 MP, f/1.8, 26mm (wide), 1/2.76, 0.64µm, PDAF",
//         selfieCamera:"13 MP, f/2.4, (wide), 1/3.1",   
//         battery: "Li-Po 5000 mAh, non-removable", 
//         processor: "Snapdragon 12 Gen 1", storage: 512,
// }, 
//     "redmi13": {memory: "64GB 4GB RAM, 64GB 6GB RAM, 128GB 4GB RAM, 128GB 6GB RAM", 
//         mainCamera: "50 MP, f/1.8, 26mm (wide), 1/2.76, 0.64µm, PDAF",
//         selfieCamera:"13 MP, f/2.4, (wide), 1/3.1",   
//         battery: "Li-Po 5000 mAh, non-removable", 
//         processor: "Snapdragon 8 Gen 6", storage: 256,
// }, 
//     "redmi13C": {memory: "64GB 4GB RAM, 64GB 6GB RAM, 128GB 4GB RAM, 128GB 6GB RAM", 
//         mainCamera: "50 MP, f/1.8, 26mm (wide), 1/2.76, 0.64µm, PDAF",
//         selfieCamera:"13 MP, f/2.4, (wide), 1/3.1",   
//         battery: "Li-Po 5000 mAh, non-removable", 
//         processor: "Snapdragon 9 Gen 5 ", storage: 512,
// }, 
//     "Realme Note 50": {memory: "4GB RAM", 
//         mainCamera: "Dual Camera: 13 MP, (wide), PDAF + 0.08 MP ,(auxiliary lens), LED Flash",
//         selfieCamera:"5 MP, f/2.2, 27mm (wide), HDR, Video (720p@30fps)",   
//         battery: "(Li-Po Non removable), 5000 mAh", 
//         processor: "Octa-core (2 x 1.8 GHz Cortex-A75 + 6 x 1.8 GHz Cortex-A55)",
//         storage: "128 GB",
// }, 
//     "Realme C67": {memory: "4GB RAM", 
//         mainCamera: "Dual Camera: 13 MP, (wide), PDAF + 0.08 MP ,(auxiliary lens), LED Flash",
//         selfieCamera:"5 MP, f/2.2, 27mm (wide), HDR, Video (720p@30fps)",   
//         battery: "(Li-Po Non removable), 5000 mAh", 
//         processor: "Octa-core (2 x 1.8 GHz Cortex-A75 + 6 x 1.8 GHz Cortex-A55)",
//         storage: "128 GB",
// }, 
//     "Realme 9": {memory: "4GB RAM", 
//         mainCamera: "Dual Camera: 13 MP, (wide), PDAF + 0.08 MP ,(auxiliary lens), LED Flash",
//         selfieCamera:"5 MP, f/2.2, 27mm (wide), HDR, Video (720p@30fps)",   
//         battery: "(Li-Po Non removable), 5000 mAh", 
//         processor: "Octa-core (2 x 1.8 GHz Cortex-A75 + 6 x 1.8 GHz Cortex-A55)",
//         storage: "128 GB",
// }, 
//     "Realme 9i": {memory: "4GB RAM", 
//         mainCamera: "Dual Camera: 13 MP, (wide), PDAF + 0.08 MP ,(auxiliary lens), LED Flash",
//         selfieCamera:"5 MP, f/2.2, 27mm (wide), HDR, Video (720p@30fps)",   
//         battery: "(Li-Po Non removable), 5000 mAh", 
//         processor: "Octa-core (2 x 1.8 GHz Cortex-A75 + 6 x 1.8 GHz Cortex-A55)",
//         storage: "128 GB",
// }, 
//     "Galaxy S24": {memory: "8GB RAM", 
//         mainCamera: "50.0 MP + 10.0 MP + 12.0 MP",
//         selfieCamera:"40 MegaPixels",   
//         battery: "4000 mAh", 
//         processor: "3.2GHz, 2.9GHz, 2.6GHz, 1.95GHz",
//         storage: "256 GB",
// }, 
//     "Galaxy S51": {memory: "8GB RAM", 
//         mainCamera: "48 MP + 10.0 MP + 12.0 MP",
//         selfieCamera:"32 MegaPixels",   
//         battery: "4000 mAh", 
//         processor: "Snapdragon 9 Gen 4",
//         storage: "256 GB",
// }, 
//     "Galaxy S46": {memory: "12GB RAM", 
//         mainCamera: "108 MP + 10.0 MP + 12.0 MP",
//         selfieCamera:"40 MegaPixels",   
//         battery: "4000 mAh", 
//         processor: "Snapdragon 8 Gen 2",
//         storage: "512 GB",
// }, 
//     "Galaxy S77": {memory: "12GB RAM", 
//         mainCamera: "108 MP + 10.0 MP + 12.0 MP",
//         selfieCamera:"40 MegaPixels",   
//         battery: "4000 mAh", 
//         processor: "Snapdragon 12 Gen 24",
//         storage: "512 GB",
// }, 
   
// };

// const mobileNameSelect = document.getElementById('mobileName');
// const mobileModelSelect = document.getElementById('mobileModel');
// const outputDiv = document.getElementById('output');

// mobileNameSelect.addEventListener('change', function () {
//     const selectedName = this.value;
//     if (selectedName) {
//         mobileModelSelect.innerHTML = '<option value="">Select Mobile Model</option>';
//         const models = mobileModels[selectedName];
//         models.forEach(model => {
//             const option = document.createElement('option');
//             option.value = model;
//             option.text = model;
//             mobileModelSelect.appendChild(option);
//         });
//         mobileModelSelect.disabled = false;
//     } else {
//         mobileModelSelect.innerHTML = '<option value="">Select Mobile Model</option>';
//         mobileModelSelect.disabled = true;
//     }
//     outputDiv.textContent = ''; // Clear output when changing mobile name
// });

// mobileModelSelect.addEventListener('change', function () {
//     const selectedModel = this.value;
//     if (selectedModel) {
//         const specs = mobileSpecs[selectedModel];
//         const {processor, memory, camera, battery, storage, ram, mainCamera, selfieCamera } = specs;
//         outputDiv.innerHTML = `
//             <h3>${selectedModel}</h3>
//             <p>Processor: ${processor}</p>
//             <p>Memory: ${memory}</p>
//             <p>Storage: ${storage}</p>
//             <p>Main Camera: ${mainCamera}</p>
//             <p>Selfie Camera: ${selfieCamera}</p>
//             <p>Battery: ${battery}</p>
//         `;
//     } else {
//         outputDiv.textContent = ''; // Clear output when changing mobile model
//     }
// });
