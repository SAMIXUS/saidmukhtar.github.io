document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple modal logic for project previews
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');

    window.openProject = (projectName) => {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h2>${projectName}</h2>
            <div class="modal-img-placeholder"></div>
            <p>This is a detailed preview of <strong>${projectName}</strong>. In a full implementation, this section would contain project case studies, high-resolution images, and links to live demos or source code.</p>
            <div class="tech-stack-modal">
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JavaScript</span>
            </div>
        `;
        modal.classList.add('active');
    };

    closeBtn.onclick = () => {
        modal.classList.remove('active');
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    };

    // Archive category filter
    const categoryBtns = document.querySelectorAll('.category-btn');
    const archiveItems = document.querySelectorAll('.archive-item');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            archiveItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'flex';
                    item.style.animation = 'fadeIn 0.4s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Scroll Reveal Animation (Simulated with Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

});

