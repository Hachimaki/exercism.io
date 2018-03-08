class BowlingGame(object):

    def __init__(self):
        self.scores = []
        self.total_score = 0

# Rework to score at the end, use roll to do input validation and tracking
    def roll(self, pins):
        if pins > 10:
            raise ValueError("Cannot score more than 10 pins")
        elif pins < 0:
            raise ValueError("Cannot score negative pins")
        else:
            self.scores.append(pins)

    def score(self):
        result = 0

        for i in range(0, len(self.scores)):
            self.total_score += self.scores[i]

        result = self.total_score
        # Because (while testing) we're not initiating a new copy!!!
        self.total_score = 0
        self.scores = []
        return result
