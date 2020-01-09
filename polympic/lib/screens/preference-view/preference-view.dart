import 'package:flutter/material.dart';

class PreferenceView extends StatelessWidget {
  const PreferenceView({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return OrientationBuilder(
      builder: (context, orientation) => GridView.count(
        padding: const EdgeInsets.all(40),
        crossAxisSpacing: 20,
        mainAxisSpacing: 20,
        crossAxisCount: orientation == Orientation.portrait ? 2 : 4,
        children: <Widget>[
          PreferenceCard(image: 'assets/images/football.jpg'),
          PreferenceCard(image: 'assets/images/natation.png'),
          PreferenceCard(image: 'assets/images/relais.jpg'),
          PreferenceCard(image: 'assets/images/rugby.png'),
          PreferenceCard(image: 'assets/images/tennis.jpg'),
          PreferenceCard(image: 'assets/images/tir-à-larc.jpg'),
        ],
      ),
    );
  }
}

class PreferenceCard extends StatelessWidget {
  const PreferenceCard({
    Key key,
    @required this.image,
  }) : super(key: key);

  final String image;

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.teal[100],
      child: InkWell(
        splashColor: Colors.blue.withAlpha(30),
        onTap: () {
          print('Card tapped.');
        },
        child: Container(
          padding: const EdgeInsets.all(8),
          child: Image.asset(
            image,
            fit: BoxFit.cover,
          ),
        ),
      ),
    );
  }
}
