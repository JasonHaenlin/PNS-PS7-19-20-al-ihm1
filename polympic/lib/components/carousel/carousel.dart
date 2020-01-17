import 'package:flutter/material.dart';

class Carousel extends StatelessWidget {
  const Carousel({
    Key key,
    @required this.childrens,
  }) : super(key: key);

  final List<Widget> childrens;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          SizedBox(
            child: PageView.builder(
              controller: PageController(viewportFraction: 0.8),
              itemBuilder: (BuildContext context, int itemIndex) {
                return childrens[itemIndex];
              },
            ),
          )
        ],
      ),
    );
  }
}
