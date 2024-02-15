({
    fetchProfilOptions: function(component) {
        var action = component.get("c.getProfilOptions");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var profilOptions = response.getReturnValue();
                component.set("v.profilOptions", profilOptions);
            } else {
                console.log("Failed to load Profil options.");
            }
        });
        $A.enqueueAction(action);
    },

    fetchObjetOptions: function(component, profil) {
        var action = component.get("c.getObjetOptions");
        action.setParams({ profil: profil });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var objetOptions = response.getReturnValue();
                component.set("v.objetOptions", objetOptions);
            } else {
                console.log("Failed to load Objet options for the selected Profil.");
            }
        });
        $A.enqueueAction(action);
    },

    createCaseRecord: function(component, caseRecord, callback) {
        var action = component.get("c.createCaseRecord");
        action.setParams({ caseObj: caseRecord });
        action.setCallback(this, function(response) {
            callback(response);
        });
        $A.enqueueAction(action);
    }
})