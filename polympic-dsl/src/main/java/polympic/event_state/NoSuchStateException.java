package polympic.event_state;

import java.util.NoSuchElementException;

public class NoSuchStateException extends NoSuchElementException {

    /**
     * Constructs a {@code NoSuchElementException}, saving a reference
     * to the error message string {@code s} for later retrieval by the
     * {@code getMessage} method.
     *
     * @param s the detail message.
     */
    public NoSuchStateException(String s) {
        super(s);
    }
}
