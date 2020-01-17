package polympic;

public enum PlaceState {

    RECOMMENDED("recommended"),
    IMPORTANT("important"),
    NEAR("near"),
    FAR("far"),
    URGENT("urgent");

    private String state;

    PlaceState(String state) {
        this.state = state;
    }

    String getState(){
        return this.state;
    }

}
