char* reverseVowels(char* s) {
    char vowels[] = "aeiou";
    int length;
    for (length = 0; s[length]; length++);

    int i = 0, j = length - 1;
    while (i<j) {
        char *left = strchr(vowels, tolower(s[i]));
        char *right = strchr(vowels, tolower(s[j]));

        if (left!=NULL && right!=NULL) {
            char temp = s[i];
            s[i]=s[j];
            s[j] = temp;
        i++; j--;
        } else if (left!=NULL) {
            j--;
        } else if (right != NULL) {
            i++;
        } else {
            i++; j--;
        }

    }

    return s;
}