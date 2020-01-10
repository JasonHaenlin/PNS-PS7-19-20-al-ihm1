import 'package:flutter/material.dart';
import 'package:polympic/theme/colors.dart';

class Timeline extends StatelessWidget {
  const Timeline({
    Key key,
    @required this.childrens,
  }) : super(key: key);

  final List<Widget> childrens;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.builder(
        itemBuilder: (BuildContext context, int index) {
          return Stack(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.only(left: 50.0),
                child: Card(
                  margin: EdgeInsets.all(20.0),
                  child: Container(
                    width: double.infinity,
                    child: this.childrens[index],
                  ),
                ),
              ),
              Line(),
              Indicator()
            ],
          );
        },
        itemCount: this.childrens.length,
      ),
    );
  }
}

class Indicator extends StatelessWidget {
  const Indicator({
    Key key,
    this.achieved = false,
    this.color = kColorValidate,
  }) : super(key: key);

  final bool achieved;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 30,
      left: 15.0,
      child: Container(
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Colors.white,
        ),
        child: Container(
          margin: EdgeInsets.all(5.0),
          height: 30.0,
          width: 30.0,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: this.color,
          ),
        ),
      ),
    );
  }
}

class Line extends StatelessWidget {
  const Line({
    Key key,
    this.color = kColorSecondary,
    this.half = false,
  }) : super(key: key);

  final Color color;
  final bool half;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 0.0,
      bottom: 0.0,
      left: 35.0,
      child: Container(
        height: double.infinity,
        width: 1.0,
        color: this.color,
      ),
    );
  }
}

class Tile extends StatelessWidget {
  const Tile({
    Key key,
    @required this.childrens,
  }) : super(key: key);

  final List<Widget> childrens;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      direction: Axis.vertical,
      spacing: 8.0,
      runSpacing: 4.0,
      children: this.childrens,
    );
  }
}
