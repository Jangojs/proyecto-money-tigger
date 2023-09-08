document.addEventListener('DOMContentLoaded', function () {
    // Función para mostrar la ventana emergente de ayuda
    function showHelpPopup(icon, popup) {
        icon.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    }

    // Función para ocultar la ventana emergente de ayuda al hacer clic fuera de ella
    function hideHelpPopup(icon, popup) {
        document.addEventListener('click', (e) => {
            if (e.target !== icon && e.target !== popup) {
                popup.style.display = 'none';
            }
        });
    }

    // Mostrar y ocultar la ventana emergente de ayuda para el tipo de piel
    const helpIconTipoPiel = document.getElementById('helpTipoPiel');
    const helpPopupTipoPiel = document.getElementById('helpPopupTipoPiel');

    showHelpPopup(helpIconTipoPiel, helpPopupTipoPiel);
    hideHelpPopup(helpIconTipoPiel, helpPopupTipoPiel);

    // Mostrar y ocultar la ventana emergente de ayuda para problemas dermatológicos
    const helpIconProblemasDermatologicos = document.getElementById('helpProblemasDermatologicos');
    const helpPopupProblemasDermatologicos = document.getElementById('helpPopupProblemasDermatologicos');

    showHelpPopup(helpIconProblemasDermatologicos, helpPopupProblemasDermatologicos);
    hideHelpPopup(helpIconProblemasDermatologicos, helpPopupProblemasDermatologicos);

    // Descripciones de tipos de piel
    const tipoPielDescriptions = {
        pielSeca: 'La piel seca se caracteriza por sentirse áspera y tirante. Puede requerir hidratación frecuente.',
        pielGrasa: 'La piel grasa produce más aceite de lo normal y puede tener poros dilatados y tendencia a imperfecciones.',
        pielMixta: 'La piel mixta es una combinación de piel seca y grasa, con áreas secas y áreas más oleosas.'
    };

    // Descripciones de problemas dermatológicos
    const problemDescriptions = {
        acne: 'El acné es una afección cutánea común que causa la formación de granos y espinillas en la piel.',
        quemaduras: 'Las quemaduras pueden ser causadas por el calor, el frío, productos químicos u otras sustancias. Pueden variar en gravedad.',
        eccema: 'El eccema, o dermatitis atópica, es una enfermedad inflamatoria de la piel que provoca picazón y enrojecimiento.',
        psoriasis: 'La psoriasis es una enfermedad autoinmune que causa la formación de parches rojos y escamosos en la piel.',
        urticaria: 'La urticaria es una reacción alérgica que provoca ronchas rojas y picazón en la piel.',
        dermatitisAtopica: 'La dermatitis atópica es una forma crónica de eccema que provoca picazón intensa y enrojecimiento de la piel.',
        vitiligo: 'El vitiligo es una enfermedad en la que la piel pierde pigmentación, lo que resulta en manchas blancas en la piel.',
        cancerPiel: 'El cáncer de piel es un crecimiento anormal de células cutáneas y puede ser causado por la exposición al sol o factores genéticos.',
        verrugas: 'Las verrugas son crecimientos cutáneos causados por el virus del papiloma humano (VPH). Pueden aparecer en cualquier parte del cuerpo.'
    };

    // Mostrar la descripción de los tipos de piel seleccionados al pasar el mouse sobre la opción
    const tipoPielSelect = document.getElementById('tipoPiel');
    tipoPielSelect.addEventListener('change', () => {
        const selectedOption = tipoPielSelect.options[tipoPielSelect.selectedIndex];
        const tipoPielKey = selectedOption.value;
        const tipoPielDescription = tipoPielDescriptions[tipoPielKey];
        const helpPopupTipoPiel = document.getElementById('helpPopupTipoPiel');

        if (tipoPielDescription) {
            helpPopupTipoPiel.innerHTML = tipoPielDescription;
        } else {
            helpPopupTipoPiel.innerHTML = 'Haga clic en el icono de ayuda (?) para obtener más información sobre el tipo de piel seleccionado.';
        }
    });

    // Mostrar la descripción de los problemas dermatológicos seleccionados al pasar el mouse sobre la opción
    const problemasDermatologicosSelect = document.getElementById('problemasDermatologicos');
    problemasDermatologicosSelect.addEventListener('change', () => {
        const selectedOptions = Array.from(problemasDermatologicosSelect.selectedOptions);
        let helpText = '';

        for (const option of selectedOptions) {
            const problemKey = option.value;
            const problemDescription = problemDescriptions[problemKey];
            if (problemDescription) {
                helpText += `<b>${option.text}:</b> ${problemDescription}<br>`;
            }
        }

        const helpPopupProblemasDermatologicos = document.getElementById('helpPopupProblemasDermatologicos');
        helpPopupProblemasDermatologicos.innerHTML = helpText || 'Haga clic en el icono de ayuda (?) para obtener más información sobre los problemas seleccionados.';
    });

    // Mostrar u ocultar el cuadro de dedicatoria e imagen al marcar o desmarcar "Es para Regalo"
    const esParaRegaloCheckbox = document.getElementById('esParaRegalo');
    const dedicatoriaContainer = document.querySelector('.dedicatoria-container');

    esParaRegaloCheckbox.addEventListener('change', () => {
        if (esParaRegaloCheckbox.checked) {
            dedicatoriaContainer.style.display = 'block';
        } else {
            dedicatoriaContainer.style.display = 'none';
        }
    });
});