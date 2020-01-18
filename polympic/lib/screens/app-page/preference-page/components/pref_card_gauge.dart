import 'package:flutter/material.dart';

class PrefCardGauge extends StatelessWidget {
  const PrefCardGauge({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      clipBehavior: Clip.antiAliasWithSaveLayer,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(45.0),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Image.network(
            "https://otakedev.com/share/preferences/recreations/lunchbreak.jpg",
            fit: BoxFit.cover,
            width: 130,
            height: 80,
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 8, 0, 0),
            child: Wrap(
              direction: Axis.vertical,
              spacing: 5.0,
              runSpacing: 4.0,
              children: <Widget>[
                Text(
                  "my name",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ),
                ),
                PrefSlider(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class PrefSlider extends StatefulWidget {
  const PrefSlider({
    Key key,
  }) : super(key: key);

  @override
  _PrefSliderState createState() => _PrefSliderState();
}

class _PrefSliderState extends State<PrefSlider> {
  double _sliderValue = 1.0;

  static dynamic colors = <double, Color>{
    1.0: Colors.green,
    2.0: Colors.orange,
    3.0: Colors.red,
  };

  static dynamic indications = <double, String>{
    1.0: "Aucune difficulté",
    2.0: "difficile",
    3.0: "Très difficile",
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Stack(
        alignment: Alignment.topRight,
        children: <Widget>[
          Text(
            indications[_sliderValue],
            style: TextStyle(color: colors[_sliderValue]),
          ),
          Slider(
            activeColor: colors[_sliderValue],
            min: 1.0,
            max: 3.0,
            divisions: 2,
            value: _sliderValue,
            onChanged: (newValue) {
              setState(() => _sliderValue = newValue);
            },
          ),
        ],
      ),
    );
  }
}
