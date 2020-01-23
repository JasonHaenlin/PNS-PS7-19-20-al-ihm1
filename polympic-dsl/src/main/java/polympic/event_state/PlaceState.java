package polympic.event_state;

public enum PlaceState {

    RECOMMENDED("recommended"),
    IMPORTANT("important")
    ;

    private String state;

    PlaceState(String state) {
        this.state = state;
    }

    public String getState(){
        return this.state;
    }

}
