// District status variables
var cayoIsOn = false;
var orangeWalkIsOn = false;
var toledoIsOn = false;
var corozalIsOn = false;
var stannCreekIsOn = false;
var belizeIsOn = false;

// Toggle function for districts
function toggleDistrict(districtName) {
    // Update the status variable and toggle image
    switch(districtName) {
        case 'Cayo':
            cayoIsOn = !cayoIsOn;
            toggleImage('toggleCayo');
            toggleOverlay('overlayCayo', cayoIsOn);
            updateToggleUI('Cayo', cayoIsOn);
            break;
        case 'OrangeWalk':
            orangeWalkIsOn = !orangeWalkIsOn;
            toggleImage('toggleOrangeWalk');
            toggleOverlay('overlayOrangeWalk', orangeWalkIsOn);
            updateToggleUI('OrangeWalk', orangeWalkIsOn);
            break;
        case 'Toledo':
            toledoIsOn = !toledoIsOn;
            toggleImage('toggleToledo');
            toggleOverlay('overlayToledo', toledoIsOn);
            updateToggleUI('Toledo', toledoIsOn);
            break;
        case 'Corozal':
            corozalIsOn = !corozalIsOn;
            toggleImage('toggleCorozal');
            toggleOverlay('overlayCorozal', corozalIsOn);
            updateToggleUI('Corozal', corozalIsOn);
            break;
        case 'StannCreek':
            stannCreekIsOn = !stannCreekIsOn;
            toggleImage('toggleStannCreek');
            toggleOverlay('overlayStannCreek', stannCreekIsOn);
            updateToggleUI('StannCreek', stannCreekIsOn);
            break;
        case 'Belize':
            belizeIsOn = !belizeIsOn;
            toggleImage('toggleBelize');
            toggleOverlay('overlayBelize', belizeIsOn);
            updateToggleUI('Belize', belizeIsOn);
            break;
    }
    
    // Log current status
    console.log('Cayo:', cayoIsOn);
    console.log('Orange Walk:', orangeWalkIsOn);
    console.log('Toledo:', toledoIsOn);
    console.log('Corozal:', corozalIsOn);
    console.log('Stann Creek:', stannCreekIsOn);
    console.log('Belize:', belizeIsOn);
}

// Toggle image function (same as your example)
function toggleImage(imageId) {
    var imgOff = "https://www.iconsdb.com/icons/preview/red/button-off-xxl.png";
    var imgOn = "https://www.iconsdb.com/icons/preview/green/button-on-xxl.png";
    
    var imgElement = document.getElementById(imageId);
    imgElement.src = (imgElement.src === imgOff) ? imgOn : imgOff;
}

// Toggle overlay visibility
function toggleOverlay(overlayId, isVisible) {
    var overlay = document.getElementById(overlayId);
    if (isVisible) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

// Update toggle UI (add/remove active class)
function updateToggleUI(districtName, isActive) {
    const toggleElement = document.querySelector(`[onclick="toggleDistrict('${districtName}')"]`);
    
    if (isActive) {
        toggleElement.classList.add('active');
    } else {
        toggleElement.classList.remove('active');
    }
}

// Reset all districts to off state
function resetAllDistricts() {
    // Reset all status variables
    cayoIsOn = false;
    orangeWalkIsOn = false;
    toledoIsOn = false;
    corozalIsOn = false;
    stannCreekIsOn = false;
    belizeIsOn = false;
    
    // Reset all toggle buttons to red
    var toggleButtons = [
        'toggleCayo', 'toggleOrangeWalk', 'toggleToledo', 
        'toggleCorozal', 'toggleStannCreek', 'toggleBelize'
    ];
    
    var redButton = "https://www.iconsdb.com/icons/preview/red/button-off-xxl.png";
    
    toggleButtons.forEach(buttonId => {
        document.getElementById(buttonId).src = redButton;
    });
    
    // Hide all overlays
    var overlays = [
        'overlayCayo', 'overlayOrangeWalk', 'overlayToledo',
        'overlayCorozal', 'overlayStannCreek', 'overlayBelize'
    ];
    
    overlays.forEach(overlayId => {
        document.getElementById(overlayId).classList.remove('active');
    });
    
    // Remove active class from all toggle elements
    var toggleElements = document.querySelectorAll('.district-toggle');
    toggleElements.forEach(element => {
        element.classList.remove('active');
    });
    
    console.log('All districts reset');
}

// Initialize - hide all overlays on load
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all overlays are hidden on page load
    resetAllDistricts();
    console.log('Belize Districts Interactive Map Loaded');
});