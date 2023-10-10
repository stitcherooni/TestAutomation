export function generateRandomUrl(minLength:number=4, maxLength:number=8 ): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
