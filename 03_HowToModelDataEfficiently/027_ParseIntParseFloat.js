// 2'44

// parseInt  parseFloat za izvlacene broja iz stringa (ala metode int ili float kod Py-a). Da bi uspjeli broj mora biti sam ili na pocetku

parseInt('24')      // 24
parseInt('24.984')  // 24
parseInt('24dana kasnije')  // 24

parseFloat('24.875')    // 24.875
parseFloat('7')    // 7.0
parseFloat('  7')    // 7.0     prazna mjesta ne smetaju
parseFloat('I ate 2 apple')    // NaN
