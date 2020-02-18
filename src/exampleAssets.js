export const ironclad = {
    fontSize_details: "0.97em",
    fontSize_assetName: "1.26em",
    fontSize_assetType: "1.03em",
    fontSize_trackValue: "1.42em",
    type: "combat talent",
    name: "Ironclad",
    writeIn: "",
    track: ["LIGHTLY ARMORED", "GEARED FOR WAR"],
    description: "If you wear armor...",
    abilities: [
        {
            filled: true,
            text: "When you equip or adjust your armor, choose one. <li>Lightly armored: When you <em>Endure Harm</em> in a fight, add +1 and take +1 momentum on a hit.</li> <li>Geared for war: Mark encumbered. When you <em>Endure Harm</em> in a fight, add +2 and take +1 momentum on a hit.</li>"
        },
        {
            filled: false,
            text: "When you <em>Clash</em> while you are geared for war, add +1."
        },
        {
            filled: false,
            text: "When you <em>Compel</em> in a situation where strength of arms is a factor, add +2."
        }
    ],
    icon: {
        type: "svg",
        author: "Delapouite",
        name: "Light Helm icon",
        svg: '<svg class="Icon" style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" style="touch-action: none;" transform="translate(0,0)"><path d="M233 25v158h46V25h-46zm-18 21.74c-25.1 7.53-44.9 22.05-60 40.88-20.7 25.88-32 60.28-33.7 95.38H215V46.74zm82 0V183h93.7c-1.7-35.1-13-69.5-33.7-95.38-15.1-18.83-34.9-33.35-60-40.88zM105 201v30h302v-30H105zm16.8 48c4 23.2 23.2 41.6 48.4 55.1 18.6 9.8 40 16.6 58.8 20.1v-15.3c-13.7-3.7-28.4-9.7-42.2-17-11.8-6.3-22.8-13.6-31.1-22.1-6.1-6.1-11-13.1-13.3-20.8h-20.6zm125.2 0v78h18v-78h-18zm122.6 0c-2.3 7.7-7.2 14.7-13.3 20.8-8.3 8.5-19.3 15.8-31.1 22.1-13.8 7.3-28.5 13.3-42.2 17v15.3c18.8-3.5 40.2-10.3 58.8-20.1 25.2-13.5 44.4-31.9 48.4-55.1h-20.6zm-252.8 33.3c-5.7 54.2-16.7 105.9-27.63 150.1.19.2 1.82 5.3 6.06 11 4.51 6.1 11.17 13.2 18.67 19.8 11.7 10.2 25.9 18.8 37.1 22.2V313.6c-13.5-8.5-25.6-18.9-34.2-31.3zm278.4 0c-8.6 12.4-20.7 22.8-34.2 31.3v171.8c11.2-3.4 25.4-12 37.1-22.2 7.5-6.6 14.2-13.7 18.7-19.8 4.2-5.7 5.8-10.8 6-11-11-44.2-21.9-95.9-27.6-150.1zM256 379c-20.3 0-40.6 1-58.1 3.1-10.9 1.3-20.7 2.8-28.9 5.1v18.9c7.1-2.4 18.2-4.6 31.1-6.2 16.5-1.9 36.2-2.9 55.9-2.9 19.7 0 39.4 1 55.9 2.9 12.9 1.6 24 3.8 31.1 6.2v-18.9c-8.2-2.3-18-3.8-28.9-5.1-17.5-2.1-37.8-3.1-58.1-3.1z" fill="#fff" fill-opacity="1"></path></g></svg>'
    }
}

export const lightbearer = {
    type: "ritual",
    name: "Lightbearer",
    track: 6,
    abilities: [
        {
            filled: true,
            text: "When you focus on a source of light and capture its essence, roll +wits. On a strong hit, set your light track to +6. On a weak hit, make it +3. Then, when you make a move to overcome or navigate darkness, you may add +2 and suffer -1 light."
        },
        {
            text: "You may use your light to <em>Strike</em> or <em>Clash</em> against a dark-dwelling foe. Choose the amount of light to unleash, and roll +light (instead of +iron or +edge). Suffer -light equal to that amount. On a hit, your harm is 1+your unleashed light."
        },
        {
            text: "When you perform this ritual, add +1 and take +1 momentum on a hit."
        }
    ],
    icon: {
        type: "svg",
        author: "Lorc",
        name: "Explosion Rays icon",
        svg: '<svg class="Icon" style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" style="touch-action: none;" transform="translate(0,0)"><path d="M54.184 19.512l116.02 144.838c-11.806 9.74-21.4 22.066-27.923 36.095L20.493 142.73v62.993l113.983 19.172c-1.12 6.056-1.707 12.295-1.707 18.67 0 3.502.177 6.965.52 10.378l-72.376 27.7 79.467.687c4.165 10.173 9.917 19.534 16.948 27.775L20.492 441.7v52.484h47.336l105.87-168.65c11.644 8.795 25.212 15.165 39.945 18.366l-23.7 150.284H294.22L253.25 344.69c8.668-1.524 16.964-4.14 24.744-7.7l37.262 42.268-21.326-51.365c6.885-4.792 13.16-10.402 18.68-16.692l182.533 146.61V348.556L329.43 284.865c4.29-9.722 7.118-20.227 8.195-31.238l84.7-25.93-86.78-7.008c-2.26-9.89-5.955-19.242-10.852-27.825l170.452-87.398V23.924L311.918 175.15c-5.33-5.95-11.342-11.28-17.912-15.86l15.533-38.382-29.968 29.967c-9.608-4.595-20.034-7.74-30.996-9.148L269.89 19.512h-40.12l1.27 121.478c-19.017.808-36.716 6.816-51.706 16.64L94.102 19.51H54.184z" fill="#fff" fill-opacity="1"></path></g></svg>'
    }
}

export const berserker = {
    type: "combat talent",
    name: "Berserker",
    writeIn: "",
    track: 0,
    description: "If you are clad only in animal pelts...",
    abilities: [
        {
            filled: true,
            name: "",
            text: "When you <em>Secure an Advantage</em> or <em>Compel</em> by embodying your wild nature, add +1 and take +1 momentum on a hit."
        },
        {
            filled: false,
            name: "",
            text: "When you <em>Strike</em> and score a hit, you may inflict +1 harm. If you do, choose one. <li>Push yourself: <em>Endure Harm</em> (1 harm).</li> <li>Lose yourself: <em>Endure Stress</em> (1 stress).</li>"
        },
        {
            filled: false,
            name: "",
            text: "When you <em>Endure Harm</em> in a fight, and your health is above 0, you may let the pain inflame your wildness (decide before rolling). If you then score a strong hit and choose to embrace the pain, take +momentum equal to your remaining health. A weak hit counts as a miss."
        }
    ],
    icon: "▿"
}

export const caveLion = {
    type: "companion",
    name: "Cave Lion",
    writeIn: "Name",
    track: 4,
    description: "Your cat takes down its prey.",
    abilities: [
        {
            filled: false,
            name: "Eager",
            text: "When your cat chases down big game, you may <em>Resupply</em> with +edge (instead of +wits). If you do, take +1 supply or +1 momentum on a strong hit."
        },
        {
            filled: false,
            name: "Inescapable",
            text: "When you <em>Enter the Fray</em> or <em>Strike</em> by sending your cat to attack, roll +edge. On a hit, take +2 momentum."
        },
        {
            filled: false,
            name: "Protective",
            text: "When you <em>Make Camp</em>, your cat is alert to trouble. If you or an ally choose to relax, take +1 spirit. If you focus, take +1 momentum."
        }
    ],
    icon: {
        "type": "svg",
        "author": "Delapouite",
        "name": "Feline icon",
        "svg": '<svg class="Icon" style="height: 512px; width: 512px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="" style="touch-action: none;" transform="translate(0,0)"><path d="M110.056 64.815c-4.234.027-8.355.587-12.337 1.799C83.13 71.054 72.93 77.03 65.24 87.333c-7.691 10.303-13.122 25.717-15.516 49.713-.669 6.708 2.012 18.384 7.75 30.986 5.738 12.602 14.248 26.276 23.829 38.387l2.49 3.146-.678 3.955c-3.097 18.091-3.644 50.706-.252 68.778.836 4.454 5.766 14.497 13.611 26.296 7.846 11.8 18.412 25.829 30.032 40.944 23.239 30.23 50.678 64.773 69.81 96.547.024.038.347.525 2.139.886 1.791.362 4.605.28 7.127-.35 2.441-.609 4.524-1.766 5.338-2.458-9.946-42.286-16.14-84.185-37.51-125.14l-10.102-19.358 20.809 6.617c21.64 6.882 48.718 8.897 73.396 7.719 24.679-1.179 47.26-5.681 58.868-10.362l5.648-2.277 4.215 4.397c43.225 45.089 73.427 98.048 112.644 140.935.12.132-.139.16.91.088 1.05-.072 3-.714 4.706-1.914 1.705-1.2 3.106-2.882 3.722-4.234.617-1.353.659-2.086.268-3.149-20.396-55.487-30.565-109.894-61.84-162.258l-2.103-3.521 1.279-3.9c6.869-20.923 17.852-42.768 42.902-60.303l4.535-3.176 4.881 2.617c11.454 6.145 19.123 5.873 25.69 1.936 13.132-7.875 24.15-23.88 28.625-37.784l-14.768-8.31-.943-3.746c-4.025-15.96-8.255-25.48-14.625-32.719-6.37-7.24-15.576-12.896-30.977-19.543l-6.426-2.773 1.104-6.91c.89-5.57.052-11.481-1.184-17.768-36.228 29.915-52.892 64.4-86.533 100.086l-3.197 3.39-4.613-.652c-57.84-8.187-142.926-5.257-198.455 1.436-6.045.728-11.262-1.14-16.34-3.733-5.078-2.593-9.996-6.2-14.475-10.492-8.957-8.584-16.938-19.87-16.01-33.258.654-9.426 2.683-17.048 7.006-23.01 4.323-5.961 11.13-9.434 17.815-10.27 13.368-1.669 26.916 3.833 42.058 10.04 30.285 12.415 65.987 29.01 93.022 21.717 10.554-2.848 30.674-20.089 44.4-37.834 6.863-8.873 12.442-17.861 15.377-24.528 1.339-3.041 2.013-5.487 2.24-6.923-.507-.106-1.153-.163-2.355-.08-2.665.182-7.069 1.375-12.56 3.814-10.985 4.877-26.237 14.423-44.675 26.896-11.984 8.108-26.017 8.386-38.992 5.153-12.975-3.233-25.743-9.626-38.58-16.04-19.255-9.619-38.213-18.81-55.45-20.077a53.657 53.657 0 0 0-4.27-.147zm343.096 73.006l9.832 22.123-22.474-3.512 12.642-18.611zM75.28 308.858c-14.235 49.028-35.548 97.072-55.633 132.947-.014.026-.02.015-.03.028a.651.651 0 0 1 .122.207c.258.592 1.295 1.961 2.856 3.035 1.56 1.074 3.553 1.828 4.945 2.008 1.391.18 1.836-.11 1.84-.114 33.669-24.914 58.717-55.4 83.47-85.668l-.613-.794c-11.682-15.197-22.427-29.428-30.75-41.946-2.25-3.384-4.321-6.6-6.207-9.703zM19.615 441.833c-.108-.114-.099.11 0 0zm297.377-119.485c-7.129 2.366-15.533 4.408-24.863 6.022-12.418 40.091-33.327 77.867-52.203 112.605l-.141.26-.158.25c-.31.491-.252.186-.049.783s1.012 1.81 2.27 2.707c2.514 1.796 4.82 2.374 7.208.23l.047-.04.047-.041c32.285-28.17 59.254-61.458 85.242-102.867-5.621-6.799-11.396-13.455-17.4-19.909z" fill="#fff" fill-opacity="1"></path></g></svg>'
    }
}