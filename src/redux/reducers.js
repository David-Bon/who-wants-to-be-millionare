
let initialState = {
    questions: [
        {
            qId: 1,
            score: 500,
            qDescription: 'In the UK, the abbreviation NHS stands for National what Service?',
            answerOptions: [
                {answerText: 'Humanity', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Health', isCorrect: true, isSelected: false, aId: 2},
                {answerText: 'Honour', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Household', isCorrect: false, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 2,
            score: 1000,
            qDescription: 'The hammer and sickle is one of the most recognisable symbols of which political ideology?',
            answerOptions: [
                {answerText: 'Republicanism', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Communism', isCorrect: true, isSelected: false, aId: 2},
                {answerText: 'Conservatism', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Liberalism', isCorrect: false, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 3,
            score: 2000,
            qDescription: 'Which toys have been marketed with the phrase "Robots in Disguise"?',
            answerOptions: [
                {answerText: 'Bratz Dolls', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Sylvanian Families', isCorrect: false, isSelected: false, aId: 2},
                {answerText: 'Hatchimals', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Transformers', isCorrect: true, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 4,
            score: 4000,
            qDescription: 'What does the word loquacious mean?',
            answerOptions: [
                {answerText: 'Angry', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Chatty', isCorrect: true, isSelected: false, aId: 2},
                {answerText: 'Beautiful', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Shy', isCorrect: false, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 5,
            score: 8000,
            qDescription: 'Obstetrics is a branch of medicine particularly concerned with what?',
            answerOptions: [
                {answerText: 'Childbirth', isCorrect: true, isSelected: false, aId: 1},
                {answerText: 'Broken bones', isCorrect: false, isSelected: false, aId: 2},
                {answerText: 'Heart conditions', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Old age', isCorrect: false, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 6,
            score: 16000,
            qDescription: 'In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?',
            answerOptions: [
                {answerText: 'Bow-tie, braces & tweed jacket', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Wide-brimmed hat & extra long scarf', isCorrect: true, isSelected: false, aId: 2},
                {answerText: 'Pinstripe suit & trainers', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Cape, velvet jacket & frilly shirt', isCorrect: false, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 7,
            score: 32000,
            qDescription: 'Which of these religious observances lasts for the shortest period of time during the calendar year?',
            answerOptions: [
                {answerText: 'Ramadan', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Diwali', isCorrect: true, isSelected: false, aId: 2},
                {answerText: 'Lent', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Hanukkah', isCorrect: false, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 8,
            score: 64000,
            qDescription: 'At the closest point, which island group is only 50 miles south-east of the coast of Florida?',
            answerOptions: [
                {answerText: 'Bahamas', isCorrect: true, isSelected: false, aId: 1},
                {answerText: 'US Virgin Islands', isCorrect: false, isSelected: false, aId: 2},
                {answerText: 'Turks and Caicos Islands', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Bermuda', isCorrect: false, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 9,
            score: 125000,
            qDescription: 'Construction of which of these famous landmarks was completed first?',
            answerOptions: [
                {answerText: 'Empire State Building', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Royal Albert Hall', isCorrect: false, isSelected: false, aId: 2},
                {answerText: 'Eiffel Tower', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Big Ben Clock Tower', isCorrect: true, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 10,
            score: 250000,
            qDescription: 'Which of these cetaceans is classified as a "toothed whale"?',
            answerOptions: [
                {answerText: 'Gray whale', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Minke whale', isCorrect: false, isSelected: false, aId: 2},
                {answerText: 'Sperm whale', isCorrect: true, isSelected: false, aId: 3},
                {answerText: 'Humpback whale', isCorrect: false, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 11,
            score: 500000,
            qDescription: 'Who is the only British politician to have held all four "Great Offices of State" at some point during their career?',
            answerOptions: [
                {answerText: 'David Lloyd George', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Harold Wilson', isCorrect: false, isSelected: false, aId: 2},
                {answerText: 'James Callaghan', isCorrect: true, isSelected: false, aId: 3},
                {answerText: 'John Major', isCorrect: false, isSelected: false, aId: 4}
            ]
        },

        {
            qId: 12,
            score: 1000000,
            qDescription: 'In 1718, which pirate died in battle off the coast of what is now North Carolina?',
            answerOptions: [
                {answerText: 'Calico Jack', isCorrect: false, isSelected: false, aId: 1},
                {answerText: 'Blackbeard', isCorrect: true, isSelected: false, aId: 2},
                {answerText: 'Bartholomew Roberts', isCorrect: false, isSelected: false, aId: 3},
                {answerText: 'Captain Kidd', isCorrect: false, isSelected: false, aId: 4}
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