package polympic;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import polympic.custom_visitor.ThrowableSyntaxErrorException;
import polympic.event_state.NoSuchStateException;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

class PolygramGenerationTest {

    String path;

    @BeforeEach
    void setUp() {
    }

    @Test
    void fail_codeMultipleConcerning() throws IOException {
        path = "src/main/resources/fail_codeMultipleConcerning.test";
        try {
            MainPolygram.runCompilation(path);
        } catch (ThrowableSyntaxErrorException e) {
            assertEquals(2, e.getLine());
            assertEquals(0, e.getColumn());
        }
    }

    @Test
    void fail_noStatement() throws IOException {
        path = "src/main/resources/fail_noStatement.test";
        try {
            MainPolygram.runCompilation(path);
        } catch (ThrowableSyntaxErrorException e) {
            assertEquals(1, e.getLine());
            assertEquals(21, e.getColumn());
        }
    }

    @Test
    void multipleItineraryLoops() throws IOException {
        path = "src/main/resources/multipleItineraryLoops.test";
        try {
            MainPolygram.runCompilation(path);
        } catch (ThrowableSyntaxErrorException e) {
            assertEquals(3, e.getLine());
            assertEquals(11, e.getColumn());
        }
    }

    @Test
    void fail_multipleEventLoopsWithItinerary() throws IOException {
        path = "src/main/resources/fail_multipleEventLoopsWithItinerary.test";
        try {
            MainPolygram.runCompilation(path);
        } catch (ThrowableSyntaxErrorException e) {
            assertEquals(7, e.getLine());
            assertEquals(11, e.getColumn());
        }
    }

    @Test
    void fail_when() throws IOException {
        path = "src/main/resources/fail_when1.test";
        try {
            MainPolygram.runCompilation(path);
        } catch (ThrowableSyntaxErrorException e) {
            assertEquals(2, e.getLine());
            assertEquals(5, e.getColumn());
        }

        path = "src/main/resources/fail_when2.test";
        try {
            MainPolygram.runCompilation(path);
        } catch (ThrowableSyntaxErrorException e) {
            assertEquals(2, e.getLine());
            assertEquals(11, e.getColumn());
        }

        path = "src/main/resources/fail_when3.test";
        try {
            MainPolygram.runCompilation(path);
        } catch (ThrowableSyntaxErrorException e) {
            assertEquals(2, e.getLine());
            assertEquals(7, e.getColumn());
        }

        path = "src/main/resources/fail_when4.test";
        try {
            MainPolygram.runCompilation(path);
        } catch (ThrowableSyntaxErrorException e) {
            assertEquals(2, e.getLine());
            assertEquals(12, e.getColumn());
        }

        path = "src/main/resources/fail_when5.test";
        try {
            MainPolygram.runCompilation(path);
        } catch (ThrowableSyntaxErrorException e) {
            assertEquals(2, e.getLine());
            assertEquals(18, e.getColumn());
        }
    }

    @Test
    void OK_when() throws IOException {
        path = "src/main/resources/OK_when.test";
        assertNotNull(MainPolygram.runCompilation(path));
    }

    @Test
    void fail_markAs() throws IOException {
        path = "src/main/resources/fail_markAs1.test";
        assertThrows(NoSuchStateException.class, () ->
                MainPolygram.runCompilation(path)
        );
    }
}