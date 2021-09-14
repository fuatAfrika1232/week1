import numb as np

class MuscularGreenPenguin(QCAlgorithm):

    def Initialize(self):
     self.setcash(10000)

     Self.setstartDate(2021,9.1)
     Self.setEndDate(2022,9,1)

     Self.symbol = Self.AddEquity("spy,Resulution.daily").symbol
     
     Self.lookback = 20
     
     Self.ceiling, self.floor = 30,10
     
     Self.initialStopRisk = 0.98
     self.trailingStopRisk = 0.9
     
     
         

 def OnData(self, data):
     Self.Plot("data chart",Self.Symbol,Self.Securities[Self.Symbol].close)