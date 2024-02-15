({
    doInit: function(component, event, helper) {
        helper.fetchProfilOptions(component);
    },

    handleProfilChange: function(component, event, helper) {
        var selectedProfil = component.get("v.caseRecord.Profil__c");
        helper.fetchObjetOptions(component, selectedProfil);
    },

    createCase: function(component, event, helper) {
        var caseRecord = component.get("v.caseRecord");
        helper.createCaseRecord(component, caseRecord, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log("Case created successfully.");
                // Optionally, handle success behavior here (e.g., show a success message)

                // Redirect to the desired URL
                var url = 'https://help.allaw.fr/pro/s/votre-requte-est-bien-prise-en-compte?language=fr'; // Replace 'https://example.com' with your actual URL
                window.location.href = url;
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error("Error creating case:", errors);
                // Optionally, handle error behavior here (e.g., show an error message)
            }
        });
    }
})