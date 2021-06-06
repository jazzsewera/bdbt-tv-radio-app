package bdbt.backend;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AppTest {
    @Test
    void appHasAGreeting() {
        final App classUnderTest = new App();
        assertEquals("Hello World!", App.home());
    }
}
