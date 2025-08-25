def isPalindrome(s: str) -> bool:
  s1 = ''.join(c for c in s.lower() if c.isalnum())
  return s1 == s1[::-1]