import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:polympic/models/category_model.dart';
import 'package:polympic/theme/colors.dart';

class PrefCardButton extends StatefulWidget {
  const PrefCardButton({
    Key key,
    @required this.data,
  }) : super(key: key);

  final CategoryModel data;

  @override
  _PrefCardButtonState createState() => _PrefCardButtonState();
}

class _PrefCardButtonState extends State<PrefCardButton> {
  static dynamic states = <int, IconData>{
    0: Icons.check_circle,
    1: FontAwesomeIcons.circle,
  };

  static dynamic colors = <int, Color>{
    0: kColorAccent,
    1: kColorTextIcon,
  };

  int incr = 1;

  @override
  Widget build(BuildContext context) {
    return Card(
      clipBehavior: Clip.antiAliasWithSaveLayer,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(45.0),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Image.network(
                this.widget.data.img,
                fit: BoxFit.cover,
                width: 100,
                height: 80,
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(
                  this.widget.data.name,
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ),
                ),
              ),
              SizedBox(width: 20),
            ],
          ),
          Row(
            children: <Widget>[
              IconButton(
                color: colors[incr % 2],
                icon: Icon(states[incr % 2]),
                iconSize: 40.0,
                onPressed: () => setState(() => incr++),
              ),
              SizedBox(width: 20),
            ],
          ),
        ],
      ),
    );
  }
}
