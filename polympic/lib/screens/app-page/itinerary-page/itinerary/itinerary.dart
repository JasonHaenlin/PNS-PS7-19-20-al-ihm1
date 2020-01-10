import 'package:flutter/material.dart';
import 'package:polympic/components/timeline.dart';

class Itinerary extends StatelessWidget {
  const Itinerary({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: Colors.orange),
      body: Timeline(
        childrens: <Widget>[
          ExpansionTile(
            title: Tile(
              childrens: <Widget>[
                Text("Match de Football"),
                Text("8h00 - 9h00"),
              ],
            ),
            children: <Widget>[
              Text("data"),
              Text("data"),
              Text("data"),
            ],
          ),
          ExpansionTile(
            title: Tile(
              childrens: <Widget>[
                Text("Match de Football"),
                Text("8h00 - 9h00"),
              ],
            ),
            children: <Widget>[
              Text("data"),
              Text("data"),
              Text("data"),
            ],
          ),
          ExpansionTile(
            title: Tile(
              childrens: <Widget>[
                Text("Match de Football"),
                Text("8h00 - 9h00"),
              ],
            ),
            children: <Widget>[
              Text("data"),
              Text("data"),
              Text("data"),
            ],
          ),
        ],
      ),
    );
  }
}
