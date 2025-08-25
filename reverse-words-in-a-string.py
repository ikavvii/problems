def reverseWords(s: str) -> str:
  return ' '.join(filter(lambda c: c!='', reversed(s.split(' '))))