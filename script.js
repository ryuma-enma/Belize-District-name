// Current active district
var activeDistrict = null;

// Toggle function for districts - only one can be active at a time
function toggleDistrict(districtName) {
    // If clicking the same district that's already active, turn it off
    if (activeDistrict === districtName) {
        deactivateDistrict(districtName);
        activeDistrict = null;
    } else {
        // Deactivate the currently active district (if any)
        if (activeDistrict) {
            deactivateDistrict(activeDistrict);
        }
        
        // Activate the new district
        activateDistrict(districtName);
        activeDistrict = districtName;
    }
    
    // Log current status
    console.log('Active district:', activeDistrict);
}

// Activate a district
function activateDistrict(districtName) {
    switch(districtName) {
        case 'Cayo':
            toggleImage('toggleCayo', true);
            toggleOverlay('overlayCayo', true);
            updateToggleUI('Cayo', true);
            break;
        case 'OrangeWalk':
            toggleImage('toggleOrangeWalk', true);
            toggleOverlay('overlayOrangeWalk', true);
            updateToggleUI('OrangeWalk', true);
            break;
        case 'Toledo':
            toggleImage('toggleToledo', true);
            toggleOverlay('overlayToledo', true);
            updateToggleUI('Toledo', true);
            break;
        case 'Corozal':
            toggleImage('toggleCorozal', true);
            toggleOverlay('overlayCorozal', true);
            updateToggleUI('Corozal', true);
            break;
        case 'StannCreek':
            toggleImage('toggleStannCreek', true);
            toggleOverlay('overlayStannCreek', true);
            updateToggleUI('StannCreek', true);
            break;
        case 'Belize':
            toggleImage('toggleBelize', true);
            toggleOverlay('overlayBelize', true);
            updateToggleUI('Belize', true);
            break;
    }
}

// Deactivate a district
function deactivateDistrict(districtName) {
    switch(districtName) {
        case 'Cayo':
            toggleImage('toggleCayo', false);
            toggleOverlay('overlayCayo', false);
            updateToggleUI('Cayo', false);
            break;
        case 'OrangeWalk':
            toggleImage('toggleOrangeWalk', false);
            toggleOverlay('overlayOrangeWalk', false);
            updateToggleUI('OrangeWalk', false);
            break;
        case 'Toledo':
            toggleImage('toggleToledo', false);
            toggleOverlay('overlayToledo', false);
            updateToggleUI('Toledo', false);
            break;
        case 'Corozal':
            toggleImage('toggleCorozal', false);
            toggleOverlay('overlayCorozal', false);
            updateToggleUI('Corozal', false);
            break;
        case 'StannCreek':
            toggleImage('toggleStannCreek', false);
            toggleOverlay('overlayStannCreek', false);
            updateToggleUI('StannCreek', false);
            break;
        case 'Belize':
            toggleImage('toggleBelize', false);
            toggleOverlay('overlayBelize', false);
            updateToggleUI('Belize', false);
            break;
    }
}

// Toggle image function (modified to accept state)
function toggleImage(imageId, turnOn) {
    var imgOff = "off1.png";
    var imgOn = "on1.png";
    
    var imgElement = document.getElementById(imageId);
    imgElement.src = turnOn ? imgOn : imgOff;
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
    // Deactivate current district if any
    if (activeDistrict) {
        deactivateDistrict(activeDistrict);
        activeDistrict = null;
    }
    
    console.log('All districts reset');
}

// Initialize - hide all overlays on load
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all overlays are hidden on page load
    resetAllDistricts();
    console.log('Belize Districts Interactive Map Loaded - Switch Mode');
});
