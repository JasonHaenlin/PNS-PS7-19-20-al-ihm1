import 'package:flutter/material.dart';
import 'package:polympic/screens/app-page/agenda-page.dart/agenda-page.dart';
import 'package:polympic/screens/app-page/itinerary-page.dart/itinerary-page.dart';
import 'package:polympic/screens/preference-view/preference-view.dart';

class AppPage extends StatefulWidget {
  @override
  _AppPage createState() => _AppPage();
}

class _AppPage extends State<AppPage> {
  int _currentIndex = 0;
  final List<Widget> _children = [
    AgendaPage(),
    ItinerariesPage(),
  ];

  @override
  Widget build(BuildContext context) {
    var scaffold = Scaffold(
      body: _children[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabTapped,
        currentIndex: _currentIndex,
        items: [
          BottomNavigationBarItem(
            icon: new Icon(Icons.calendar_today),
            title: new Text('Agenda'),
          ),
          BottomNavigationBarItem(
            icon: new Icon(Icons.format_list_numbered),
            title: new Text('Itinéraires'),
          ),
        ],
      ),
    );
    return scaffold;
  }

  void onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }
}
