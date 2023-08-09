class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:

        minWord = 0
        minWordLength = 0

        if len(word1) <= len(word2):
            minWordLength = len(word1)
            minWord = 1
        else:
            minWordLength = len(word2)
            minWord = 2

        word3 = ""

        for i in range(minWordLength):
            word3 += word1[i]
            word3 += word2[i]

        if minWord == 1:
            word3 += word2[minWordLength:]

    
        if minWord == 2:
            word3 += word1[minWordLength:]

        return word3
