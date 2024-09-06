document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-wirevue]").forEach(function (element) {
        const componentId = element.getAttribute("data-wirevue-id");
        const component = element.getAttribute("data-wirevue-component");
        const props = JSON.parse(
            element.getAttribute("data-wirevue-props") as string
        );

        $inductor.loadVueComponent(component, props, "#wirevue-" + componentId);
    });
});
