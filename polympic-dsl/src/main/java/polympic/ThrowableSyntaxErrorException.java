package polympic;

public class ThrowableSyntaxErrorException extends RuntimeException {

    private int line;
    private int column;

    /**
     * Constructs a new runtime exception with {@code null} as its
     * detail message.  The cause is not initialized, and may subsequently be
     * initialized by a call to {@link #initCause}.
     */
    public ThrowableSyntaxErrorException(int line, int column, String message) {
        super(message);
        this.line = line;
        this.column = column;
    }

    public int getLine() {
        return line;
    }

    public int getColumn() {
        return column;
    }
}
