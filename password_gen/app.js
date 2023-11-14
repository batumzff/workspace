document.querySelector('.custom-btn').addEventListener('click', () => {
    // password length must be equal to 10
  
    // there should be 3 numbers
  
    // and there should 2 symbols from below:
  
    const numbers = '123456789'
    const words = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ]
  
    const symbols = `!@#$%^&*()\\_+~|}{[]:;?><,./-=`
    let password
  
    let randomNumbers = []
  
    let randomChars = []
  
    let randomSymbols = []
  
    // numbers
    while (randomNumbers.length < 3) {
      // 0 - 10 arası sayı
      const randomNumberLength = Math.floor(Math.random() * numbers.length)
  
      randomNumbers.push(numbers[randomNumberLength])
    }
  
    // console.log(randomNumbers)
  
    // chars
    while (randomChars.length < 5) {
      // 0 - 24 arası sayı
      const randomCharsLength = Math.floor(Math.random() * words.length)
  
      randomChars.push(words[randomCharsLength])
    }
  
    // console.log(randomChars)
  
    for (let i = 0; i < 2; i++) {
      const rondomNumber = Math.floor(Math.random() * 5)
  
      const upperCaseWord = randomChars[rondomNumber]
  
      randomChars[rondomNumber] = upperCaseWord.toUpperCase()
    }
  
    // console.log(randomChars);
  
    // chars
    while (randomSymbols.length < 2) {
      const randomSymbolsLength = Math.floor(Math.random() * symbols.length)
  
      // console.log(symbols[randomSymbolsLength])
  
      randomSymbols.push(symbols[randomSymbolsLength])
    }
  
    // console.log(randomSymbols)
  
    password = [...randomChars, ...randomNumbers, ...randomSymbols]
  
    // console.log(password)
  
    let mixPassword = []
  
    //! --------- bug ---------------
    // sadece 1 er kez seçilmesi lazım
    password.forEach(item => {
      mixPassword.push(password[Math.floor(Math.random() * password.length)])
    })
    //! --------- bug ---------------
  
    // console.log(mixPassword)
  
    document.querySelector('.result').innerHTML = mixPassword.join('')
  })