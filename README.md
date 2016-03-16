# Tippeligaen 2016

Some collegues at work are having a betting pool for the norwegian football series Tippeligaen. And as my interest for football doesn't go further than my own nose, I figured the only way I could participate is doing it my own way.

The results for Tippeligaen 2016 is based on setting two teams up against each other on Google Trends.

# How it works

First I download the data for each match. This is a dataset over time showing which team is the most searched one. By looping through each of the matches, one can then take the average popularity and see who's most popular.   
In the end this results in either a loss, tie or win result. This can then be added to the table representing the season results.

# Usage

`$ node main.js`

# Results

| #   | Team | Score |
| --- | ---- | ----- |
| 1   | Molde | 90 |
| 2   | Brann | 84 |
| 3   | Rosenborg | 78 |
| 4   | Lillestrøm | 72 |
| 5   | Vålerenga | 66 |
| 6   | Sogndal | 60 |
| 7   | Stabæk | 54 |
| 8   | Start | 48 |
| 9   | Aalesund | 38 |
| 10  | Odd | 34 |
| 11  | Strømsgodset | 32 |
| 12  | Viking | 24 |
| 13  | Bodø/Glimt | 18 |
| 14  | Tromsø | 12 |
| 15  | Haugesund | 6 |
| 16  | Sarpsborg 08 | 0 |
