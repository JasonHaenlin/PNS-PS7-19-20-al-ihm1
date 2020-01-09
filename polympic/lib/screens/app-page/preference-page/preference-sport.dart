import 'package:flutter/material.dart';
import 'package:polympic/core/router.dart';

class PreferenceSport extends StatelessWidget {
  const PreferenceSport({Key key}) : super(key: key);

  static List<String> _sports = ["Football", "Tennis", "Rugby"];
  static List<String> _images = [
    "assets/images/football.jpg",
    "assets/images/tennis.jpg",
    "assets/images/rugby.png"
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_ios),
          tooltip: 'close',
          onPressed: () => {},
        ),
      ),
      body: ListView.builder(
        itemCount: _sports.length,
        itemBuilder: (BuildContext context, int index) {
          return SportCard(
            label: _sports[index],
            image: _images[index],
          );
        },
      ),
    );
  }
}

class SportCard extends StatelessWidget {
  const SportCard({
    Key key,
    @required this.label,
    @required this.image,
  }) : super(key: key);

  final String label;
  final String image;

  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
          border: Border(
            bottom: BorderSide(
              width: 0.3,
              color: Colors.grey,
            ),
          ),
        ),
        height: 80,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Material(
                    borderRadius: BorderRadius.all(Radius.circular(8.0)),
                    clipBehavior: Clip.antiAlias,
                    elevation: 2.0,
                    child: Image.asset(
                      this.image,
                      fit: BoxFit.cover,
                      width: 50,
                      height: 50,
                    ),
                  ),
                ),
                SizedBox(width: 15),
                Text(label),
              ],
            ),
            Padding(
              padding: const EdgeInsets.only(right: 25),
              child: Container(
                child: RaisedButton(
                  onPressed: () => print('RELAOD'),
                  child: Text('Ajouter'),
                ),
              ),
            ),
          ],
        ));
  }
}
