import 'package:flutter/material.dart';

class AgendaPage extends StatelessWidget {
  const AgendaPage({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Agenda'),
      ),
    );
  }
}
