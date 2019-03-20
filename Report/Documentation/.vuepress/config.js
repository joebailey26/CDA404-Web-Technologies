module.exports = {
    base: "/Documentation/.vuepress/dist/",
    themeConfig: {

        displayAllHeaders: true,
        sidebar: [
            {
                title: 'Overview',
                collapsable: true,
                children: [
                    '/'
                ]
            },

            {
                title: 'Background',
                collapsable: true,
                children: [
                    '/Background/Background.md'
                ]
            },


            {
                title: 'Wire Frames',
                children: [
                    '/Wire_Frames/Wire_Frames.md'
                ]
            },

            {
                title: 'Colour Choices',
                children: [
                    '/Colour_Choices/Colour_Choices.md'
                ]
            },

            {
                title: 'Accessibility',
                children:  [
                    '/Accessibility/Accessibility.md'
                ]
            },


            {
                title: 'GDPR',
                children:  [
                    '/GDPR/GDPR.md'
                ]
            },

            {
                title: 'Distance Selling',
                children:  [
                    '/Distance_Selling/Distance_Selling.md'
                ]
            },

            {
                title: 'Evaluation',
                children: [
                    '/Evaluation/Evaluation.md'
                ]
            }
        ]
    }
};