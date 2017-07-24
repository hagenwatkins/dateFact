let randomString = `Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given. All year feet led view went sake. You agreeable breakfast his set perceived immediate. Stimulated man are projecting favourable middletons can cultivated. Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. `;

console.log('length of string:',randomString.length);
let words = randomString.split(' ');
console.log('Number of words:', words.length);


  let longestWord = '';
  for(let i =0; i < words.length; i++){
   if(longestWord.length < words[i].length){
     longestWord = words[i];
   }
}
console.log(longestWord);
