export default function decoder(input : string) {
    return input.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, "'");
  }
