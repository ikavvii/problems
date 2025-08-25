void reverseString(char* s, int sSize) {
    int front = 0, rear = sSize - 1;
    while (front < rear) {
        char temp = s[front];
        s[front] = s[rear];
        s[rear] = temp;
        front++;
        rear--;
    }
}