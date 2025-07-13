            <script>
                document.addEventListener("DOMContentLoaded", () => {
                    const detailsElements =
                        document.querySelectorAll(".category details");

                    detailsElements.forEach((details) => {
                        details.addEventListener("toggle", () => {
                            if (details.open) {
                                detailsElements.forEach((other) => {
                                    if (other !== details) {
                                        other.removeAttribute("open");
                                    }
                                });
                            }
                        });
                    });
                });
            </script>
