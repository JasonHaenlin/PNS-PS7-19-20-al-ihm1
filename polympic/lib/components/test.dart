import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      child: new Scaffold(
        appBar: new AppBar(
          bottom: new TabBar(
            tabs: [
              new Tab(icon: new Icon(Icons.directions_car)),
              new Tab(icon: new Icon(Icons.directions_transit)),
              new Tab(icon: new Icon(Icons.directions_bike)),
              new Tab(
                icon: new Icon(Icons.airplanemode_active),
              )
            ],
          ),
        ),
        body: new TabBarView(children: [
          new OnePage(
            color: Colors.black,
          ),
          new OnePage(
            color: Colors.green,
          ),
          new OnePage(
            color: Colors.red,
          ),
          new OnePage(
            color: Colors.blue,
          ),
        ]),
      ),
    );
  }
}

class OnePage extends StatefulWidget {
  final Color color;

  const OnePage({Key key, this.color}) : super(key: key);

  @override
  _OnePageState createState() => new _OnePageState();
}

class _OnePageState extends State<OnePage>
    with AutomaticKeepAliveClientMixin<OnePage> {
  @override
  Widget build(BuildContext context) {
    super.build(context);
    return new SizedBox.expand(
      child: new ListView.builder(
        itemCount: 100,
        itemBuilder: (context, index) {
          return new Padding(
            padding: const EdgeInsets.all(10.0),
            child: new Text(
              '$index',
              style: new TextStyle(color: widget.color),
            ),
          );
        },
      ),
    );
  }

  @override
  bool get wantKeepAlive => true;
}
