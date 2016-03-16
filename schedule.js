var teams = require('./teams');

var schedule = [
    [
        {
            home: teams.Aalesund,
            away: teams.Stabæk
        },
        {
            home: teams.Odd,
            away: teams.Rosenborg
        },
        {
            home: teams.Molde,
            away: teams.Tromsø
        },
        {
            home: teams.Bodø,
            away: teams.Sogndal
        },
        {
            home: teams.Sarpsborg,
            away: teams.Haugesund
        },
        {
            home: teams.Strømsgodset,
            away: teams.Brann
        },
        {
            home: teams.Start,
            away: teams.Lillestrøm
        },
        {
            home: teams.Vålerenga,
            away: teams.Viking
        }
    ],
    [
        {
            home: teams.Tromsø,
            away: teams.Start
        },
        {
            home: teams.Haugesund,
            away: teams.Aalesund
        },
        {
            home: teams.Rosenborg,
            away: teams.Strømsgodset
        },
        {
            home: teams.Sogndal,
            away: teams.Vålerenga
        },
        {
            home: teams.Lillestrøm,
            away: teams.Bodø
        },
        {
            home: teams.Brann,
            away: teams.Odd
        },
        {
            home: teams.Viking,
            away: teams.Sarpsborg
        },
        {
            home: teams.Stabæk,
            away: teams.Molde
        }
    ],
    [
        {
            home: teams.Molde,
            away: teams.Lillestrøm
        },
        {
            home: teams.Start,
            away: teams.Viking
        },
        {
            home: teams.Vålerenga,
            away: teams.Rosenborg
        },
        {
            home: teams.Odd,
            away: teams.Tromsø
        },
        {
            home: teams.Bodø,
            away: teams.Stabæk
        },
        {
            home: teams.Aalesund,
            away: teams.Brann
        },
        {
            home: teams.Sarpsborg,
            away: teams.Sogndal
        },
        {
            home: teams.Strømsgodset,
            away: teams.Haugesund
        }
    ],
    [
        {
            home: teams.Sogndal,
            away: teams.Haugesund
        },
        {
            home: teams.Lillestrøm,
            away: teams.Sarpsborg
        },
        {
            home: teams.Stabæk,
            away: teams.Vålerenga
        },
        {
            home: teams.Brann,
            away: teams.Bodø
        },
        {
            home: teams.Tromsø,
            away: teams.Strømsgodset
        },
        {
            home: teams.Rosenborg,
            away: teams.Aalesund
        },
        {
            home: teams.Start,
            away: teams.Molde
        },
        {
            home: teams.Viking,
            away: teams.Odd
        }
    ],
    [
        {
            home: teams.Haugesund,
            away: teams.Lillestrøm
        },
        {
            home: teams.Strømsgodset,
            away: teams.Sogndal
        },
        {
            home: teams.Rosenborg,
            away: teams.Brann
        },
        {
            home: teams.Bodø,
            away: teams.Molde
        },
        {
            home: teams.Aalesund,
            away: teams.Viking
        },
        {
            home: teams.Vålerenga,
            away: teams.Tromsø
        },
        {
            home: teams.Sarpsborg,
            away: teams.Stabæk
        },
        {
            home: teams.Odd,
            away: teams.Start
        }
    ],
    [
        {
            home: teams.Stabæk,
            away: teams.Strømsgodset
        },
        {
            home: teams.Bodø,
            away: teams.Haugesund
        },
        {
            home: teams.Viking,
            away: teams.Brann
        },
        {
            home: teams.Sogndal,
            away: teams.Odd
        },
        {
            home: teams.Molde,
            away: teams.Vålerenga
        },
        {
            home: teams.Tromsø,
            away: teams.Rosenborg
        },
        {
            home: teams.Start,
            away: teams.Sarpsborg
        },
        {
            home: teams.Lillestrøm,
            away: teams.Aalesund
        }
    ],
    [
        {
            home: teams.Strømsgodset,
            away: teams.Bodø
        },
        {
            home: teams.Brann,
            away: teams.Sogndal
        },
        {
            home: teams.Sarpsborg,
            away: teams.Molde
        },
        {
            home: teams.Odd,
            away: teams.Lillestrøm
        },
        {
            home: teams.Aalesund,
            away: teams.Tromsø
        },
        {
            home: teams.Rosenborg,
            away: teams.Viking
        },
        {
            home: teams.Vålerenga,
            away: teams.Start
        },
        {
            home: teams.Haugesund,
            away: teams.Stabæk
        }
    ],
    [
        {
            home: teams.Molde,
            away: teams.Aalesund
        },
        {
            home: teams.Lillestrøm,
            away: teams.Vålerenga
        },
        {
            home: teams.Viking,
            away: teams.Haugesund
        },
        {
            home: teams.Tromsø,
            away: teams.Brann
        },
        {
            home: teams.Start,
            away: teams.Strømsgodset
        },
        {
            home: teams.Sogndal,
            away: teams.Rosenborg
        },
        {
            home: teams.Stabæk,
            away: teams.Odd
        },
        {
            home: teams.Bodø,
            away: teams.Sarpsborg
        }
    ],
    [
        {
            home: teams.Viking,
            away: teams.Tromsø
        },
        {
            home: teams.Strømsgodset,
            away: teams.Lillestrøm
        },
        {
            home: teams.Brann,
            away: teams.Start
        },
        {
            home: teams.Odd,
            away: teams.Bodø
        },
        {
            home: teams.Vålerenga,
            away: teams.Sarpsborg
        },
        {
            home: teams.Aalesund,
            away: teams.Sogndal
        },
        {
            home: teams.Rosenborg,
            away: teams.Stabæk
        },
        {
            home: teams.Haugesund,
            away: teams.Molde
        }
    ],
    [
        {
            home: teams.Molde,
            away: teams.Strømsgodset
        },
        {
            home: teams.Haugesund,
            away: teams.Odd
        },
        {
            home: teams.Bodø,
            away: teams.Vålerenga
        },
        {
            home: teams.Lillestrøm,
            away: teams.Brann
        },
        {
            home: teams.Stabæk,
            away: teams.Viking
        },
        {
            home: teams.Sogndal,
            away: teams.Tromsø
        },
        {
            home: teams.Sarpsborg,
            away: teams.Aalesund
        },
        {
            home: teams.Start,
            away: teams.Rosenborg
        }
    ],
    [
        {
            home: teams.Aalesund,
            away: teams.Start
        },
        {
            home: teams.Tromsø,
            away: teams.Bodø
        },
        {
            home: teams.Odd,
            away: teams.Molde
        },
        {
            home: teams.Vålerenga,
            away: teams.Haugesund
        },
        {
            home: teams.Viking,
            away: teams.Sogndal
        },
        {
            home: teams.Rosenborg,
            away: teams.Lillestrøm
        },
        {
            home: teams.Brann,
            away: teams.Stabæk
        },
        {
            home: teams.Strømsgodset,
            away: teams.Sarpsborg
        }
    ],
    [
        {
            home: teams.Sarpsborg,
            away: teams.Odd
        },
        {
            home: teams.Stabæk,
            away: teams.Tromsø
        },
        {
            home: teams.Molde,
            away: teams.Brann
        },
        {
            home: teams.Bodø,
            away: teams.Aalesund
        },
        {
            home: teams.Strømsgodset,
            away: teams.Vålerenga
        },
        {
            home: teams.Haugesund,
            away: teams.Rosenborg
        },
        {
            home: teams.Sogndal,
            away: teams.Start
        },
        {
            home: teams.Lillestrøm,
            away: teams.Viking
        }
    ],
    [
        {
            home: teams.Tromsø,
            away: teams.Sarpsborg
        },
        {
            home: teams.Rosenborg,
            away: teams.Molde
        },
        {
            home: teams.Odd,
            away: teams.Strømsgodset
        },
        {
            home: teams.Sogndal,
            away: teams.Lillestrøm
        },
        {
            home: teams.Viking,
            away: teams.Bodø
        },
        {
            home: teams.Brann,
            away: teams.Haugesund
        },
        {
            home: teams.Start,
            away: teams.Stabæk
        },
        {
            home: teams.Aalesund,
            away: teams.Vålerenga
        }
    ],
    [
        {
            home: teams.Lillestrøm,
            away: teams.Tromsø
        },
        {
            home: teams.Haugesund,
            away: teams.Start
        },
        {
            home: teams.Bodø,
            away: teams.Rosenborg
        },
        {
            home: teams.Vålerenga,
            away: teams.Odd
        },
        {
            home: teams.Molde,
            away: teams.Viking
        },
        {
            home: teams.Stabæk,
            away: teams.Sogndal
        },
        {
            home: teams.Sarpsborg,
            away: teams.Brann
        },
        {
            home: teams.Strømsgodset,
            away: teams.Aalesund
        }
    ],
    [
        {
            home: teams.Start,
            away: teams.Bodø
        },
        {
            home: teams.Viking,
            away: teams.Strømsgodset
        },
        {
            home: teams.Rosenborg,
            away: teams.Sarpsborg
        },
        {
            home: teams.Tromsø,
            away: teams.Haugesund
        },
        {
            home: teams.Brann,
            away: teams.Vålerenga
        },
        {
            home: teams.Sogndal,
            away: teams.Molde
        },
        {
            home: teams.Lillestrøm,
            away: teams.Stabæk
        },
        {
            home: teams.Odd,
            away: teams.Aalesund
        }
    ],
    [
        {
            home: teams.Vålerenga,
            away: teams.Sogndal
        },
        {
            home: teams.Haugesund,
            away: teams.Viking
        },
        {
            home: teams.Aalesund,
            away: teams.Rosenborg
        },
        {
            home: teams.Strømsgodset,
            away: teams.Tromsø
        },
        {
            home: teams.Molde,
            away: teams.Start
        },
        {
            home: teams.Bodø,
            away: teams.Odd
        },
        {
            home: teams.Stabæk,
            away: teams.Brann
        },
        {
            home: teams.Sarpsborg,
            away: teams.Lillestrøm
        }
    ],
    [
        {
            home: teams.Brann,
            away: teams.Aalesund
        },
        {
            home: teams.Rosenborg,
            away: teams.Haugesund
        },
        {
            home: teams.Molde,
            away: teams.Sarpsborg
        },
        {
            home: teams.Start,
            away: teams.Vålerenga
        },
        {
            home: teams.Sogndal,
            away: teams.Bodø
        },
        {
            home: teams.Odd,
            away: teams.Viking
        },
        {
            home: teams.Tromsø,
            away: teams.Stabæk
        },
        {
            home: teams.Lillestrøm,
            away: teams.Strømsgodset
        }
    ],
    [
        {
            home: teams.Sarpsborg,
            away: teams.Start
        },
        {
            home: teams.Viking,
            away: teams.Rosenborg
        },
        {
            home: teams.Aalesund,
            away: teams.Lillestrøm
        },
        {
            home: teams.Bodø,
            away: teams.Tromsø
        },
        {
            home: teams.Odd,
            away: teams.Brann
        },
        {
            home: teams.Haugesund,
            away: teams.Sogndal
        },
        {
            home: teams.Strømsgodset,
            away: teams.Stabæk
        },
        {
            home: teams.Vålerenga,
            away: teams.Molde
        }
    ],
    [
        {
            home: teams.Tromsø,
            away: teams.Aalesund
        },
        {
            home: teams.Molde,
            away: teams.Bodø
        },
        {
            home: teams.Lillestrøm,
            away: teams.Rosenborg
        },
        {
            home: teams.Stabæk,
            away: teams.Haugesund
        },
        {
            home: teams.Start,
            away: teams.Odd
        },
        {
            home: teams.Brann,
            away: teams.Strømsgodset
        },
        {
            home: teams.Sarpsborg,
            away: teams.Vålerenga
        },
        {
            home: teams.Sogndal,
            away: teams.Viking
        }
    ],
    [
        {
            home: teams.Bodø,
            away: teams.Lillestrøm
        },
        {
            home: teams.Vålerenga,
            away: teams.Brann
        },
        {
            home: teams.Rosenborg,
            away: teams.Sogndal
        },
        {
            home: teams.Aalesund,
            away: teams.Molde
        },
        {
            home: teams.Haugesund,
            away: teams.Tromsø
        },
        {
            home: teams.Strømsgodset,
            away: teams.Start
        },
        {
            home: teams.Odd,
            away: teams.Sarpsborg
        },
        {
            home: teams.Viking,
            away: teams.Stabæk
        }
    ],
    [
        {
            home: teams.Vålerenga,
            away: teams.Bodø
        },
        {
            home: teams.Lillestrøm,
            away: teams.Haugesund
        },
        {
            home: teams.Brann,
            away: teams.Rosenborg
        },
        {
            home: teams.Sarpsborg,
            away: teams.Strømsgodset
        },
        {
            home: teams.Start,
            away: teams.Sogndal
        },
        {
            home: teams.Stabæk,
            away: teams.Aalesund
        },
        {
            home: teams.Molde,
            away: teams.Odd
        },
        {
            home: teams.Tromsø,
            away: teams.Viking
        }
    ],
    [
        {
            home: teams.Aalesund,
            away: teams.Sarpsborg
        },
        {
            home: teams.Strømsgodset,
            away: teams.Molde
        },
        {
            home: teams.Haugesund,
            away: teams.Brann
        },
        {
            home: teams.Sogndal,
            away: teams.Stabæk
        },
        {
            home: teams.Rosenborg,
            away: teams.Tromsø
        },
        {
            home: teams.Viking,
            away: teams.Lillestrøm
        },
        {
            home: teams.Bodø,
            away: teams.Start
        },
        {
            home: teams.Odd,
            away: teams.Vålerenga
        }
    ],
    [
        {
            home: teams.Start,
            away: teams.Aalesund
        },
        {
            home: teams.Vålerenga,
            away: teams.Strømsgodset
        },
        {
            home: teams.Brann,
            away: teams.Viking
        },
        {
            home: teams.Tromsø,
            away: teams.Sogndal
        },
        {
            home: teams.Sarpsborg,
            away: teams.Bodø
        },
        {
            home: teams.Lillestrøm,
            away: teams.Odd
        },
        {
            home: teams.Stabæk,
            away: teams.Rosenborg
        },
        {
            home: teams.Molde,
            away: teams.Haugesund
        }
    ],
    [
        {
            home: teams.Haugesund,
            away: teams.Vålerenga
        },
        {
            home: teams.Tromsø,
            away: teams.Lillestrøm
        },
        {
            home: teams.Viking,
            away: teams.Molde
        },
        {
            home: teams.Sogndal,
            away: teams.Sarpsborg
        },
        {
            home: teams.Bodø,
            away: teams.Brann
        },
        {
            home: teams.Aalesund,
            away: teams.Strømsgodset
        },
        {
            home: teams.Odd,
            away: teams.Stabæk
        },
        {
            home: teams.Rosenborg,
            away: teams.Start
        }
    ],
    [
        {
            home: teams.Stabæk,
            away: teams.Bodø
        },
        {
            home: teams.Sarpsborg,
            away: teams.Viking
        },
        {
            home: teams.Molde,
            away: teams.Rosenborg
        },
        {
            home: teams.Lillestrøm,
            away: teams.Sogndal
        },
        {
            home: teams.Vålerenga,
            away: teams.Aalesund
        },
        {
            home: teams.Start,
            away: teams.Haugesund
        },
        {
            home: teams.Strømsgodset,
            away: teams.Odd
        },
        {
            home: teams.Brann,
            away: teams.Tromsø
        }
    ],
    [
        {
            home: teams.Rosenborg,
            away: teams.Vålerenga
        },
        {
            home: teams.Bodø,
            away: teams.Strømsgodset
        },
        {
            home: teams.Stabæk,
            away: teams.Lillestrøm
        },
        {
            home: teams.Haugesund,
            away: teams.Sarpsborg
        },
        {
            home: teams.Tromsø,
            away: teams.Molde
        },
        {
            home: teams.Viking,
            away: teams.Start
        },
        {
            home: teams.Aalesund,
            away: teams.Odd
        },
        {
            home: teams.Sogndal,
            away: teams.Brann
        }
    ],
    [
        {
            home: teams.Aalesund,
            away: teams.Bodø
        },
        {
            home: teams.Sarpsborg,
            away: teams.Rosenborg
        },
        {
            home: teams.Strømsgodset,
            away: teams.Viking
        },
        {
            home: teams.Molde,
            away: teams.Sogndal
        },
        {
            home: teams.Start,
            away: teams.Tromsø
        },
        {
            home: teams.Brann,
            away: teams.Lillestrøm
        },
        {
            home: teams.Odd,
            away: teams.Haugesund
        },
        {
            home: teams.Vålerenga,
            away: teams.Stabæk
        },
        {
            home: teams.Stabæk,
            away: teams.Sarpsborg
        }
    ],
    [
        {
            home: teams.Haugesund,
            away: teams.Bodø
        },
        {
            home: teams.Brann,
            away: teams.Molde
        },
        {
            home: teams.Viking,
            away: teams.Aalesund
        },
        {
            home: teams.Rosenborg,
            away: teams.Odd
        },
        {
            home: teams.Tromsø,
            away: teams.Vålerenga
        },
        {
            home: teams.Sogndal,
            away: teams.Strømsgodset
        },
        {
            home: teams.Lillestrøm,
            away: teams.Start
        }
    ],
    [
        {
            home: teams.Sarpsborg,
            away: teams.Tromsø
        },
        {
            home: teams.Strømsgodset,
            away: teams.Rosenborg
        },
        {
            home: teams.Bodø,
            away: teams.Viking
        },
        {
            home: teams.Vålerenga,
            away: teams.Lillestrøm
        },
        {
            home: teams.Aalesund,
            away: teams.Haugesund
        },
        {
            home: teams.Molde,
            away: teams.Stabæk
        },
        {
            home: teams.Start,
            away: teams.Brann
        },
        {
            home: teams.Odd,
            away: teams.Sogndal
        }
    ],
    [
        {
            home: teams.Brann,
            away: teams.Sarpsborg
        },
        {
            home: teams.Lillestrøm,
            away: teams.Molde
        },
        {
            home: teams.Sogndal,
            away: teams.Aalesund
        },
        {
            home: teams.Tromsø,
            away: teams.Odd
        },
        {
            home: teams.Viking,
            away: teams.Vålerenga
        },
        {
            home: teams.Haugesund,
            away: teams.Strømsgodset
        },
        {
            home: teams.Rosenborg,
            away: teams.Bodø
        },
        {
            home: teams.Stabæk,
            away: teams.Start
        }
    ]
];

module.exports = schedule;