(() => {

    const ironclad = {
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
        ]
    }

    const lightbearer = {
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

    const berserker = {
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
                text: "When you <em>Endure Harm</em> in a fight, you may let the pain inflame your wildness (decide before rolling). The value of your action die is then halved, rounding up (1/2=1, 3/4=2, 5/6=3). If you score a strong hit, and choose to embrace the pain, take your modified action die value as +momentum."
            }
        ],
        icon: "▿"
    }

    const caveLion = {
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
            "name": "Burning forest icon",
            "svg": "<svg style=\"height: 512px; width: 512px;\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><g class=\"\" style=\"touch-action: none;\" transform=\"translate(0,0)\"><path d=\"M281.3 18.28c-39.1 33.39 21.8 67.98-4.6 77.4-27.1 9.72-48.6-22.86-62.7-55.79-26.6 23.91-38.4 76.01-36.1 116.71-21.7-8.7-25.3-18.3-23.3-48.8-71.2 40.5 11 124.2-39.3 133.3-17.77 3.2-52.61-17-56.65-48.5C29.39 235.2 44.37 294.8 81.64 344c-32.5 5.7-45.4-9.9-56.81-23.5-20.829 60.7 4.9 104.4 53.83 132.3 28.44-23 58.24-44 79.84-78.5-24.8 9.6-38 4.5-60.3 5.2 30-26.5 57.4-61 77.4-92-22.8 6.7-31 11.4-50.5 4.9 23.4-19.8 44.4-39.4 59.6-66.2-8 5.8-18.3 8.6-33.1 5 26.7-22 40.6-33.2 53.2-63.7 6 22.5 15 42.6 37.9 64-8.1 2.6-17.4-.1-31.4-4.9 13.8 22.3 41.7 47.9 69.1 64.5-15.6 5.7-35.1 4.1-52.9-2.5 12.6 33.4 52.3 59.9 78.9 88.1-20.5 6.6-43.2.6-62.6-1.4 13.7 27 40.2 45.8 66.4 64.9 11.2-8.2 21.3-17.1 27.5-28.3-13.2 1.2-28.7 4.9-42.7.8 18.1-17.6 46.4-31.6 55-52.4-12.1 4.1-26.6 4.3-37.3.8 18.7-10.4 35.9-28.8 45.3-42.7-9.5 3-15.2 3.9-23.2 3.1 12.8-10.7 27.3-25.9 31.3-40 10.6 13.2 16.2 26.4 34.4 40.2-10.1 2.3-16.6.2-22.6-1.5 10.4 16.7 35 32.6 50.9 45-15.9-.3-28.7.8-44.7-8.3 13.7 19.4 32.3 41 52.8 57.5-14.7 3.8-20.8 2-37.7-4 10.9 15.9 22.9 27.7 36.3 38.6 41.3-30.7 59.3-79.6 57.4-150.2-16 33.3-37.3 31.8-58.7 27.7 17.3-10.9 40.3-100.3 24.9-123.4-4.2 31.1-45.1 87.3-74.1 61.5 44.6-61.8 43-88.3 24.6-121.5-9.6 20-25.3 64.9-57.3 53.5 62.7-110.89-55.7-119.16-71-178.32zM80.12 453.6c28.88 16.2 65.68 26.9 105.68 32.5l2.1-16.7c-35.5-1.9-71.5-7.8-107.78-15.8zm209.58 7.2c-24 5.9-48.4 8.7-73.1 9.1l1.3 19.5c11.5.9 23.1 1.3 34.8 1.3 43.3.1 80.2-3.2 111.2-10.5l.3-9.2c-25.4.3-50.3-2.5-74.5-10.2zm110.2 8l-2.7.3.2.7c.8-.3 1.7-.7 2.5-1z\" fill=\"#fff\" fill-opacity=\"1\"></path></g></svg>"
        }
    }

    const calculateScale = () => {
        if (window.innerHeight > 1070) {
            return "full"
        } else if (window.innerHeight > 750) {
            return "two-thirds"
        } else {
            return "one-half"
        }
    }

    const createWriteIn = (writeIn) => {
        return writeIn ? `<div class="write-in">${writeIn}</div>` : ""
    }

    const createDescription = (description) => {
        return description ? `<div class="description">${description}</div>` : ""
    }

    const createAbilitiesHtml = (abilities = []) => {
        const createAbilityName = (name) => {
            return name ? `<span class="ability-name">${name}</span>` : ""
        }
        return abilities.map((ability) => {
            return `<div class="ability">
                        <i class="dot ${ability.filled ? "filled" : "unfilled"}"></i>
                        <div class="ability-description">
                            ${createAbilityName(ability.name)}
                            ${ability.text}
                        </div>
                    </div>`
        }).join("")
    }

    const createTrackValueHtml = (track, value) => {
        if (value > track) {
            return `<div class="value empty">
                        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'>
                            <line x1='0' y1='100' x2='100' y2='0' stroke='rgb(65,64,66)' style='stroke-width:3.5' />
                        </svg>
                    </div>`
        } else {
            return `<div class="value number">+${value}</div>`
        }
    }

    const createTrackHtml = (track) => {
        if (!track) {
            return ""
        } else if (Array.isArray(track)) {
            const innerEntries = track.map(entry => {
                return `<div class="value text">${entry}</div>`
            }).join("")
            return `<div class="track">
                        ${innerEntries}
                    </div>`
        } else {
            let trackLength = track > 5 ? track : 5
            let innerEntries = ""

            for (let i = 1; i <= trackLength; i++) {
                innerEntries += createTrackValueHtml(track, i)
            }
            return `<div class="track">
                        <div class="value">0</div>
                        ${innerEntries}
                    </div>`
        }
    }

    const createIcon = (icon) => {
        if (typeof icon === "string") {
            return `<i class="header-icon">${icon}</i>`
        } else if (typeof icon === "object") {
            return `${icon.svg}`
        } else {
            return ""
        }
    }
    const createAssetHtml = (asset = {}, scale = "full") => {
        return `<div class="asset ${scale}">
                <div class="main-matter">
                    <div class="top">
                        <div class="type">${asset.type}</div>
                        <div class="header-circle">
                            ${createIcon(asset.icon)}
                        </div>
                        <div class="asset-name">${asset.name}</div>
                    </div>
                    <div class="details">
                        ${createWriteIn(asset.writeIn)}
                        ${createDescription(asset.description)}
                        <div class="abilities">
                            ${createAbilitiesHtml(asset.abilities)}
                        </div>
                    </div>
                </div>
                ${createTrackHtml(asset.track)}
            </div>`
    }


    const assetInput = document.querySelector('.interface-input')
    const assetContainer = document.querySelector(".assets")
    const updateButton = document.querySelector(".update")
    const showLightbearerAssetButton = document.querySelector("#lightbearer-example")
    const showIroncladAssetButton = document.querySelector("#ironclad-example")
    const showCaveLionAssetButton = document.querySelector("#cave-lion-example")
    const downloadButton = document.querySelector("#download")
    const closeDownloadbutton = document.querySelector("#done-downloading")
    const downloadContainer = document.querySelector(".image-container")

    const showSingleAssetExample = (asset) => {
        assetInput.value = JSON.stringify(asset, null, 2)
        assetContainer.innerHTML = createAssetHtml(asset, window.IAW_scale)
        setSvgDimensions()
    }

    const showScreen = (screen) => {
        if (screen === "download") {
            document.body.className = "download-screen"
        } else if (screen === "main") {
            document.body.className = "main-screen"
        } else if (screen = "render") {
            document.body.className = "render"
        }
    }

    const saveImage = (uri, filename) => {
        const link = document.createElement('a')
        link.href = uri
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const setSvgDimensions = () => {
        const svgs = document.querySelectorAll('svg')
        svgs.forEach(svg => {
            svg.setAttribute('height', svg.parentNode.offsetHeight)
            svg.setAttribute('width', svg.parentNode.offsetWidth)
        })
    }

    const screenshot = () => {
        const render = document.querySelector('.render')
        const asset = document.querySelector('.asset')
        render.appendChild(asset)
        showScreen('render')
        window.scrollTo(0, 0)
        setSvgDimensions()
        html2canvas(asset,
            {
                allowTaint: true
                // width: "750",
                // height: "1050",
                // scale: 2
                // windowHeight: "1080px",
                // windowWidth: "1920px"
            }).then(canvas => {
                downloadContainer.appendChild(canvas)
                // saveImage(canvas.toDataURL(), 'asset.png') //TODO name after asset's name
                showScreen('download')
                document.querySelector('.assets').appendChild(asset)
            })
    }

    const closeDownload = () => {
        downloadContainer.innerHTML = ""
        showScreen('main')
    }

    updateButton.onclick = () => {
        let data = JSON.parse(assetInput.value)
        if (Array.isArray(data)) {
            assetContainer.innerHTML = data.map(createAssetHtml).join('')
        } else {
            assetContainer.innerHTML = createAssetHtml(data, window.IAW_scale)
        }
        setSvgDimensions()
    }


    showLightbearerAssetButton.onclick = () => showSingleAssetExample(lightbearer)
    showIroncladAssetButton.onclick = () => showSingleAssetExample(ironclad)
    showCaveLionAssetButton.onclick = () => showSingleAssetExample(caveLion)
    downloadButton.onclick = screenshot
    closeDownloadbutton.onclick = closeDownload



    const scaleOneThirdButton = document.querySelector("#scale-one-third")
    const scaleOneHalfButton = document.querySelector("#scale-one-half")
    const scaleTwoThirdsButton = document.querySelector("#scale-two-thirds")
    const scaleFullButton = document.querySelector("#scale-full")

    const selectScaleButton = (size) => {
        document.querySelector(`#scale-${size}`).classList = "scale-button selected"
    }

    const changeSize = (size) => {
        document.querySelector(".asset").classList = `asset ${size}`
        const buttons = document.querySelectorAll(".scale-button")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList = "scale-button"
        }
        selectScaleButton(size)
        window.IAW_scale = size
    }

    scaleOneThirdButton.onclick = () => changeSize("one-third")
    scaleOneHalfButton.onclick = () => changeSize("one-half")
    scaleTwoThirdsButton.onclick = () => changeSize("two-thirds")
    scaleFullButton.onclick = () => changeSize("full")

    // initialize
    window.IAW_scale = calculateScale()
    selectScaleButton(window.IAW_scale)
    showSingleAssetExample(ironclad)

})()