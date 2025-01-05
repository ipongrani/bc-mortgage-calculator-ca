import formatLabel from "./formatLabel.js";

export default function resultsFormatter(jsonResponse) {
    const { cmhc, ...response } = jsonResponse;
    const responseKeys = Object.keys(response);

    const displayPanel = document.querySelector('#displayPanel');
    displayPanel.innerHTML = '';

    // First row for general properties
    const panelRow1 = document.createElement('div');
    panelRow1.classList.add('row');

    responseKeys.forEach((key) => {
        const value = response[key];
        const panelCol = document.createElement('div');
        panelCol.classList.add('col');

        const colLabel = document.createElement('label');
        colLabel.setAttribute('for', key);
        colLabel.textContent = formatLabel(key);
        panelCol.appendChild(colLabel);

        const colInput = document.createElement('input');
        colInput.setAttribute('id', key);
        colInput.setAttribute('type', 'text');
        colInput.value =  (value && typeof value === 'object' && 'error' in value) ? value.error : value;
        colInput.disabled = true;
        panelCol.appendChild(colInput);

        panelRow1.appendChild(panelCol);
    });

    displayPanel.appendChild(panelRow1);

    // Second row for cmhc properties
    const cmhcKeys = Object.keys(cmhc);
    const panelRow2 = document.createElement('div');
    panelRow2.classList.add('row');

    cmhcKeys.forEach((key) => {
        const value = cmhc[key];
        const panelCol = document.createElement('div');
        panelCol.classList.add('col');

        const colLabel = document.createElement('label');
        colLabel.setAttribute('for', key);
        colLabel.textContent = formatLabel(key, 'CMHC ');
        panelCol.appendChild(colLabel);

        const colInput = document.createElement('input');
        colInput.setAttribute('id', key);
        colInput.setAttribute('type', 'text');
        colInput.value = (value && typeof value === 'object' && 'error' in value) ? value.error : value;
        colInput.disabled = true;
        panelCol.appendChild(colInput);

        panelRow2.appendChild(panelCol);
    });

    displayPanel.appendChild(panelRow2);

    displayPanel.style.visibility = 'visible';
}