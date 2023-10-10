export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      URL: String;
      EMAIL: String;
    
    }
  }
}