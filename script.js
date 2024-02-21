function getFormvalue() {
    let inps = document.querySelectorAll("input")
	let first_name = inps[0].value
	let last_name = inps[1].value
     let full_name = first_name + " " + last_name
	alert(full_name)
}
