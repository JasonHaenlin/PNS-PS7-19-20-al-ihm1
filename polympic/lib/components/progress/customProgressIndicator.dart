import 'package:flutter/material.dart';

class CustomProgressIndicator extends StatelessWidget {
  const CustomProgressIndicator({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(30.0),
            child: Image.asset(
              'assets/images/jo.png',
              fit: BoxFit.cover,
              scale: 8,
            ),
          ),
          CircularProgressIndicator(),
        ],
      ),
    );
  }
}
