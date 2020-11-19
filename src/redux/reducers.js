let initialState = {
    questions: [
        {
            qId: 1,
            score: 500,
            qDescription: 'In the UK, the abbreviation NHS stands for National what Service?',
            answerOptions: [
                {answerText: 'Humanity', isCorrect: false},
                {answerText: 'Health', isCorrect: true},
                {answerText: 'Honour', isCorrect: false},
                {answerText: 'Household', isCorrect: false},
            ]
        },

        {
            qId: 2,
            score: 1000,
            qDescription: 'The hammer and sickle is one of the most recognisable symbols of which political ideology?',
            answerOptions: [
                {answerText: 'Republicanism', isCorrect: false},
                {answerText: 'Communism', isCorrect: true},
                {answerText: 'Conservatism', isCorrect: false},
                {answerText: 'Liberalism', isCorrect: false}
            ]
        },

        {
            qId: 3,
            score: 2000,
            qDescription: 'Which toys have been marketed with the phrase "Robots in Disguise"?',
            answerOptions: [
                {answerText: 'Bratz Dolls', isCorrect: false},
                {answerText: 'Sylvanian Families', isCorrect: false},
                {answerText: 'Hatchimals', isCorrect: false},
                {answerText: 'Transformers', isCorrect: true}
            ]
        },

        {
            qId: 4,
            score: 4000,
            qDescription: 'What does the word loquacious mean?',
            answerOptions: [
                {answerText: 'Angry', isCorrect: false},
                {answerText: 'Chatty', isCorrect: true},
                {answerText: 'Beautiful', isCorrect: false},
                {answerText: 'Shy', isCorrect: false}
            ]
        },

        {
            qId: 5,
            score: 8000,
            qDescription: 'Obstetrics is a branch of medicine particularly concerned with what?',
            answerOptions: [
                {answerText: 'Childbirth', isCorrect: true},
                {answerText: 'Broken bones', isCorrect: false},
                {answerText: 'Heart conditions', isCorrect: false},
                {answerText: 'Old age', isCorrect: false}
            ]
        },

        {
            qId: 6,
            score: 16000,
            qDescription: 'In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?',
            answerOptions: [
                {answerText: 'Bow-tie, braces & tweed jacket', isCorrect: false},
                {answerText: 'Wide-brimmed hat & extra long scarf', isCorrect: true},
                {answerText: 'Pinstripe suit & trainers', isCorrect: false},
                {answerText: 'Cape, velvet jacket & frilly shirt', isCorrect: false}
            ]
        },

        {
            qId: 7,
            score: 32000,
            qDescription: 'Which of these religious observances lasts for the shortest period of time during the calendar year?',
            answerOptions: [
                {answerText: 'Ramadan', isCorrect: false},
                {answerText: 'Diwali', isCorrect: true},
                {answerText: 'Lent', isCorrect: false},
                {answerText: 'Hanukkah', isCorrect: false}
            ]
        },

        {
            qId: 8,
            score: 64000,
            qDescription: 'At the closest point, which island group is only 50 miles south-east of the coast of Florida?',
            answerOptions: [
                {answerText: 'Bahamas', isCorrect: true},
                {answerText: 'US Virgin Islands', isCorrect: false},
                {answerText: 'Turks and Caicos Islands', isCorrect: false},
                {answerText: 'Bermuda', isCorrect: false}
            ]
        },

        {
            qId: 9,
            score: 125000,
            qDescription: 'Construction of which of these famous landmarks was completed first?',
            answerOptions: [
                {answerText: 'Empire State Building', isCorrect: false},
                {answerText: 'Royal Albert Hall', isCorrect: false},
                {answerText: 'Eiffel Tower', isCorrect: false},
                {answerText: 'Big Ben Clock Tower', isCorrect: true}
            ]
        },

        {
            qId: 10,
            score: 250000,
            qDescription: 'Which of these cetaceans is classified as a "toothed whale"?',
            answerOptions: [
                {answerText: 'Gray whale', isCorrect: false},
                {answerText: 'Minke whale', isCorrect: false},
                {answerText: 'Sperm whale', isCorrect: true},
                {answerText: 'Humpback whale', isCorrect: false}
            ]
        },

        {
            qId: 11,
            score: 500000,
            qDescription: 'Who is the only British politician to have held all four "Great Offices of State" at some point during their career?',
            answerOptions: [
                {answerText: 'David Lloyd George', isCorrect: false},
                {answerText: 'Harold Wilson', isCorrect: false},
                {answerText: 'James Callaghan', isCorrect: true},
                {answerText: 'John Major', isCorrect: false}
            ]
        },

        {
            qId: 12,
            score: 1000000,
            qDescription: 'In 1718, which pirate died in battle off the coast of what is now North Carolina?',
            answerOptions: [
                {answerText: 'Calico Jack', isCorrect: false},
                {answerText: 'Blackbeard', isCorrect: true},
                {answerText: 'Bartholomew Roberts', isCorrect: false},
                {answerText: 'Captain Kidd', isCorrect: false},
                {answerText: 'Joe Strawberry', isCorrect: false},
                {answerText: 'Harrison Rottenberg', isCorrect: false}
            ]
        },
    ]
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}