export interface Weather {
  name: string;
  main: {
    temp: number;
    weather: [{
      main: string;
      icon: string;
    }];
  };
}
