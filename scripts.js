let slider = document.querySelector('#slider')
let price = document.querySelector('#price')
let pageviews = document.querySelector('#pageViews')
let monthToYear = document.querySelector('#monthToYear')
let yearly = false

const displayValues = (value, yearly) => {
    if (value <= 20) {
        price.textContent = (yearly ? '£6' : '£8')
        pageviews.textContent = '10k'
    } else if ((value > 20) && (value <=40)) {
        price.textContent = (yearly ? '£9' : '£12')
        pageviews.textContent = '50k'
    } else if ((value > 40) && (value <=60)) {
        price.textContent = (yearly ? '£12' : '£16')
        pageviews.textContent = '100k'
    } else if ((value > 60) && (value <=80)) {
        price.textContent = (yearly ? '£18' : '£24')
        pageviews.textContent = '500k'
    } else if ((value > 80) && (value <=100)) {
        price.textContent = (yearly ? '£27' : '£36')
        pageviews.textContent = '1M'
    }
}

monthToYear.addEventListener('change', (e) => {
    yearly = !yearly
    displayValues(slider.value, yearly)
})

slider.addEventListener('input', (e) => {
    displayValues(e.target.value, yearly)
    var value = (slider.value-slider.min)/(slider.max-slider.min)*100
    slider.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #d8dee7 ' + value + '%, #d8dee7 100%)'
})