$(document).ready(() => {
    $("#save").bind("click", onSaveClick);
    
    function onSaveClick(event) {
        const $button = $(event.target);
        $button.attr("disabled", true);
        
        const $firstNameInput = $("#first-name");
        const $lastNameInput = $("#last-name");
        const $tableBody = $("#table tbody");
        
        const firstName = $firstNameInput.val();
        const lastName = $lastNameInput.val();
        const rowNumber = $tableBody.find("tr").length + 1;
        
        const content = `<tr>
                            <td>${rowNumber}</td>
                            <td>${firstName}</td>
                            <td>${lastName}</td>
                        </tr>`;
        $tableBody.append(content);
        
        $firstNameInput.val(null);
        $lastNameInput.val(null);
        
        $button.attr("disabled", false);
    }
});