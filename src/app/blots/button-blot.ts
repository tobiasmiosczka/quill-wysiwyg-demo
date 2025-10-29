import Embed from "quill/blots/embed";

export class ButtonBlot extends Embed {
    static override blotName = 'button';
    static override tagName = 'button';

    // Der übergebene rawValue enthält den Inhalt des Buttons.
    // Wir speichern den Inhalt im `value` Attribut des Blots.
    static override value(domNode: Element): unknown {
        return domNode.innerHTML;
    }

    static override create(rawValue?: unknown): Node {
        const element = super.create() as Element;

        // Verwende rawValue als Inhalt, falls vorhanden, ansonsten einen Standardtext
        const content = typeof rawValue === 'string' && rawValue.length > 0 ? rawValue : 'Button';

        // Erstelle das tatsächliche Button-Element
        element.innerHTML = content;

        // Gib das Button-Element zurück (was bereits element ist, da super.create() es erstellt hat)
        // Wir müssen hier das Element selbst zurückgeben und nicht element.firstChild!,
        // da element *bereits* das <button>-Element ist.
        return element;
    }

    // Optional: Füge hier eine Methode hinzu, um den Inhalt (rawValue) aufzunehmen
    // falls dieser in den Delta-Operationen gespeichert werden soll.
    static override formats(domNode: Element): unknown {
        return domNode.innerHTML;
    }

    // Wenn Sie wollen, dass der Inhalt auch beim Aufruf von `blot.value()` korrekt zurückgegeben wird:
    override value(): unknown {
        return (this.domNode as Element).innerHTML;
    }
}