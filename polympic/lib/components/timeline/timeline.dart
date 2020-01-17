import 'package:flutter/material.dart';
import 'package:polympic/components/timeline/indicator.dart';
import 'package:polympic/components/timeline/line.dart';

enum Status { done, inProgress, waiting }

class Timeline extends StatelessWidget {
  Timeline({
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
              //   Padding(
              //     padding: const EdgeInsets.only(left: 50.0),
              //     child: Card(
              //       margin: EdgeInsets.all(20.0),
              //       child: Container(
              //         width: double.infinity,
              //         child: childrens[index],
              //       ),
              //     ),
              //   ),
              childrens[index],
              Line(),
              Indicator(),
            ],
          );
        },
        itemCount: childrens.length,
      ),
    );
  }
}
