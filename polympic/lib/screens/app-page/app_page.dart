import 'package:flutter/material.dart';
import 'package:polympic/screens/app-page/agenda-page/agenda_page.dart';
import 'package:polympic/screens/app-page/itinerary-page/itinerary_page.dart';

class AppPage extends StatefulWidget {
  @override
  _AppPage createState() => _AppPage();
}

class _AppPage extends State<AppPage> {
  int _currentIndex = 0;
  final List<Widget> _children = [
    AgendaPage(),
    ItineraryPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: _children,
      ),
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabTapped,
        currentIndex: _currentIndex,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.calendar_today),
            title: Text('Agenda'),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.format_list_numbered),
            title: Text('Programme'),
          ),
        ],
      ),
    );
  }

  void onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }
}
