$(document).ready(function () {
    $('#contactForm').bootstrapValidator({
        container: '#messages',
        excluded: ':disabled',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'Username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 5,
                        max: 12,
                        message: 'Username is only from 5~12 characters'
                    }
                }
            },
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'The full name can consist of alphabetical characters and spaces only'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Password is required and cannot be empty'
                    },
                    stringLength: {
                        min: 5,
                        message: 'Password has at least 5 characters'
                    },
                    regexp: {
                        regexp: /^([a-z]+[0-9]+|([0-9]+[a-z]+))$/i,
                        message: 'Password must contain both alphabet characters and numbers'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not valid'
                    }
                }
            },
            
        }
    });
});