import 'package:flutter/material.dart';

class Carousel extends StatelessWidget {
  const Carousel({
    Key key,
    @required this.childrens,
  }) : super(key: key);

  final List<Widget> childrens;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        SizedBox(
          height: 150,
          child: PageView.builder(
            onPageChanged: (a) => print('change to ' + a.toString()),
            controller: PageController(viewportFraction: 1),
            itemCount: childrens.length,
            itemBuilder: (BuildContext context, int itemIndex) {
              return Padding(
                padding: const EdgeInsets.fromLTRB(60, 10, 10, 5),
                child: Card(child: childrens[itemIndex]),
              );
            },
          ),
        )
      ],
    );
  }
}
