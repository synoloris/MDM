function getSentiment(event, text) {
    if (!text || event.key !== "Enter") {
        answer.innerHTML = '';
        return;
    }
    answerPart.style.visibility = "visible";
    // Get Sentiment
    fetch('/sentiment?' + new URLSearchParams({
        text: text,
    }), {
        method: 'GET',
        headers: {}
    }).then(
        response => {
            console.log(response)
            response.text().then(function (text) {
                answer.innerHTML = text;
            });
        }
    ).then(
        success => console.log(success)
    ).catch(
        error => console.log(error)
    );
}

function checkFiles(files) {
    // Preview
    if (file) {
        preview.src = URL.createObjectURL(files[0])
    }
    // Upload
    const formData = new FormData();
    for (const name in files) {
        formData.append(name, files[name]);
    }
    fetch('/analyze', {
        method: 'POST',
        headers: {
        },
        body: formData
    }).then(
        response => {
            console.log(response)
            response.text().then(function (text) {
                answer.innerHTML = text;
            });
        }
    ).then(
        success => console.log(success)
    ).catch(
        error => console.log(error)
    );

}