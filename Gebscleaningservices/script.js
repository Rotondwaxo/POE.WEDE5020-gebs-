/**
 * ================================================
 * GEBS CLEANING SERVICES - MAIN JAVASCRIPT
 * ================================================
 */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    /* ============================================================
       1. MOBILE MENU TOGGLE
       ============================================================ */
    var menuToggle = document.querySelector('.menu-toggle');
    var navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            var isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isExpanded));
            navMenu.classList.toggle('active', !isExpanded);
        });
    }

    /* ============================================================
       2. SMART SERVICE SEARCH (services.html)
       ============================================================ */
    var searchInput  = document.getElementById('serviceSearch');
    var clearBtn     = document.getElementById('clearSearch');
    var searchInfo   = document.getElementById('searchInfo');
    var serviceCards = document.querySelectorAll('.service-detail');
    var noResults    = document.getElementById('noResults');
    var suggestionsBox = document.getElementById('searchSuggestions');
    
    var searchData = [
        { name: 'Residential Cleaning', keywords: 'home, house, apartment, domestic, weekly', id: 'residential' },
        { name: 'Commercial Cleaning', keywords: 'office, business, shop, retail, workspace', id: 'commercial' },
        { name: 'End-of-Lease Cleaning', keywords: 'bond, moving, rental, deposit', id: 'end-of-lease' },
        { name: 'Carpet & Upholstery', keywords: 'carpet, rug, sofa, couch, stains', id: 'carpet' }
    ];

    if (searchInput && serviceCards.length > 0) {
        var filterServices = function (term) {
            var visibleCount = 0;
            serviceCards.forEach(function (card) {
                var keywords = (card.getAttribute('data-keywords') || '') + ' ' +
                               (card.getAttribute('data-service') || '') + ' ' +
                               card.textContent.toLowerCase();

                if (term === '' || keywords.indexOf(term) !== -1) {
                    card.classList.remove('is-hidden');
                    visibleCount++;
                } else {
                    card.classList.add('is-hidden');
                }
            });

            if (noResults) noResults.hidden = visibleCount !== 0;
            if (searchInfo) {
                if (term === '') {
                    searchInfo.innerHTML = 'Showing all services';
                } else {
                    searchInfo.innerHTML = 'Found <strong>' + visibleCount + '</strong> service(s) matching "' + term + '"';
                }
            }
        };

        var showSuggestions = function (term) {
            suggestionsBox.innerHTML = ''; 
            if (term.length < 2) {
                suggestionsBox.classList.remove('active');
                return;
            }
            var matches = searchData.filter(function(item) {
                return item.name.toLowerCase().includes(term) || item.keywords.includes(term);
            });
            if (matches.length === 0) {
                suggestionsBox.classList.remove('active');
                return;
            }
            matches.forEach(function(match) {
                var li = document.createElement('li');
                li.setAttribute('role', 'option');
                li.innerHTML = '<i class="fas fa-search"></i> ' + 
                               match.name.replace(new RegExp(term, 'gi'), function(matched) {
                                   return '<strong>' + matched + '</strong>'; 
                               });
                
                li.addEventListener('click', function() {
                    searchInput.value = match.name;
                    suggestionsBox.classList.remove('active');
                    filterServices(match.name.toLowerCase());
                    var firstResult = document.querySelector('.service-detail:not(.is-hidden)');
                    if (firstResult) {
                        window.scrollTo({
                            top: firstResult.getBoundingClientRect().top + window.pageYOffset - 120,
                            behavior: 'smooth'
                        });
                    }
                });
                suggestionsBox.appendChild(li);
            });
            suggestionsBox.classList.add('active');
        };

        searchInput.addEventListener('input', function () {
            var term = this.value.trim().toLowerCase();
            if (clearBtn) clearBtn.hidden = (term === '');
            showSuggestions(term);
            filterServices(term);
        });

        if (clearBtn) {
            clearBtn.addEventListener('click', function () {
                searchInput.value = '';
                this.hidden = true;
                suggestionsBox.classList.remove('active');
                filterServices('');
                searchInput.focus();
            });
        }

        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
                suggestionsBox.classList.remove('active');
            }
        });
    }

    /* ============================================================
       3. FAQ ACCORDION (services.html)
       ============================================================ */
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            var isOpen = header.getAttribute('aria-expanded') === 'true';
            var content = header.nextElementSibling;

            document.querySelectorAll('.accordion-header').forEach(function (other) {
                if (other !== header) {
                    other.setAttribute('aria-expanded', 'false');
                    var otherContent = other.nextElementSibling;
                    if (otherContent) otherContent.style.maxHeight = null;
                }
            });

            if (isOpen) {
                header.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
            } else {
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    /* ============================================================
       4. GALLERY LIGHTBOX (index.html)
       ============================================================ */
    var galleryItems   = document.querySelectorAll('.gallery-item');
    var lightbox       = document.getElementById('lightbox');
    var lightboxImage  = document.getElementById('lightboxImage');
    var lightboxCaption= document.getElementById('lightboxCaption');
    var closeBtn       = document.getElementById('lightboxClose');
    var prevBtn        = document.getElementById('lightboxPrev');
    var nextBtn        = document.getElementById('lightboxNext');
    var currentIndex   = 0;

    if (galleryItems.length > 0 && lightbox) {
        var openLightbox = function (index) {
            currentIndex = index;
            var item = galleryItems[index];
            var img = item.querySelector('img');
            var imageSrc = item.getAttribute('data-image') || img.src;

            lightboxImage.src = imageSrc;
            lightboxImage.alt = img.alt;
            lightboxCaption.textContent = img.alt;

            lightbox.hidden = false;
            document.body.style.overflow = 'hidden';
            closeBtn.focus();
        };

        var closeLightbox = function () {
            lightbox.hidden = true;
            document.body.style.overflow = '';
        };

        var showNext = function () {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            openLightbox(currentIndex);
        };

        var showPrev = function () {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            openLightbox(currentIndex);
        };

        galleryItems.forEach(function (item, index) {
            item.addEventListener('click', function () { openLightbox(index); });
        });

        closeBtn.addEventListener('click', closeLightbox);
        nextBtn.addEventListener('click', showNext);
        prevBtn.addEventListener('click', showPrev);

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', function (e) {
            if (lightbox.hidden) return;
            if (e.key === 'Escape')     closeLightbox();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft')  showPrev();
        });
    }

    /* ============================================================
       5. FORM VALIDATION & FORMSPREE SUBMISSION (enquiry.html)
       ============================================================ */
    var enquiryForm = document.getElementById('enquiryForm');

    if (enquiryForm) {
        var successBox = document.getElementById('successMessage');
        var submitBtn = document.getElementById('submitBtn');

        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Stop page reload
            
            var isValid = true;
            var requiredFields = enquiryForm.querySelectorAll('[required]');

            // 1. Check all required fields for errors
            requiredFields.forEach(function (field) {
                var formGroup = field.closest('.form-group');
                
                if (!field.value.trim()) {
                    isValid = false;
                    if(formGroup) formGroup.classList.add('has-error');
                } else {
                    if(formGroup) formGroup.classList.remove('has-error');
                }

                // Special check for email format
                if (field.type === 'email' && field.value.trim()) {
                    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(field.value.trim())) {
                        isValid = false;
                        if(formGroup) formGroup.classList.add('has-error');
                    }
                }
            });

            // 2. If there are errors, stop submission
            if (!isValid) {
                var firstError = enquiryForm.querySelector('.has-error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }

            // 3. If valid, send data to Formspree
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;

            var formData = new FormData(enquiryForm);

            fetch(enquiryForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(function (response) {
                if (response.ok) {
                    // Success! Calculate estimate and show message
                    var name = document.getElementById('fullName').value;
                    var service = document.getElementById('serviceType').value;
                    var size = document.getElementById('propertySize').value;
                    
                    var baseRanges = {
                        'residential': [250, 850], 'commercial': [450, 2500],
                        'end-of-lease': [550, 1200], 'carpet': [200, 800]
                    };
                    var sizeMulti = { small: 1, medium: 1.5, large: 2.2 };
                    
                    var range = baseRanges[service] || [250, 850];
                    var sm = sizeMulti[size] || 1;
                    var estimateLow = Math.round(range[0] * sm);
                    var estimateHigh = Math.round(range[1] * sm);

                    // Hide form
                    enquiryForm.querySelectorAll('.form-group, .form-row, #submitBtn').forEach(function(el) {
                        el.style.display = 'none';
                    });

                    // Show success box
                    document.getElementById('successName').textContent = name;
                    document.getElementById('successEstimate').textContent = 'Estimated Cost: R' + estimateLow + ' - R' + estimateHigh;
                    
                    if (successBox) {
                        successBox.hidden = false;
                        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                } else {
                    // Formspree Error
                    alert('Oops! There was a problem submitting your form. Please try again.');
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Quote Request';
                    submitBtn.disabled = false;
                }
            })
            .catch(function (error) {
                // Network Error
                alert('Oops! There was a network error. Please check your connection and try again.');
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Quote Request';
                submitBtn.disabled = false;
            });
        });

        // Remove red error borders when the user starts typing
        enquiryForm.querySelectorAll('input, select, textarea').forEach(function (field) {
            field.addEventListener('input', function () {
                var formGroup = this.closest('.form-group');
                if (formGroup) formGroup.classList.remove('has-error');
            });
        });
    }

    /* ============================================================
       6. CONTACT FORM (contact.html) - Basic Validation
       ============================================================ */
    var contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 
            
            var isValid = true;
            var requiredFields = contactForm.querySelectorAll('[required]');

            requiredFields.forEach(function (field) {
                var formGroup = field.closest('.form-group');
                
                if (!field.value.trim()) {
                    isValid = false;
                    if(formGroup) formGroup.classList.add('has-error');
                } else {
                    if(formGroup) formGroup.classList.remove('has-error');
                }
            });

            if (!isValid) {
                var firstError = contactForm.querySelector('.has-error');
                if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }

            alert('Thank you! Your message has been submitted.');
            contactForm.reset();
        });

        contactForm.querySelectorAll('input, select, textarea').forEach(function (field) {
            field.addEventListener('input', function () {
                var formGroup = this.closest('.form-group');
                if (formGroup) formGroup.classList.remove('has-error');
            });
        });
    }

});
