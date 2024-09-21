export interface GreetingsPlugin { 
  echo(options: { value: string }): Promise<{ value: string }>;
}
