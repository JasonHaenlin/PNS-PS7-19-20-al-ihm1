import 'package:flutter/material.dart';
import 'package:polympic/blocs/basic/event_bloc/event_bloc.dart';
import 'package:polympic/blocs/basic/event_bloc/event_state.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/models/event_model.dart';
import 'package:polympic/theme/colors.dart';

class EventCard extends StatefulWidget {
  final EventModel event;
  const EventCard({Key key, @required this.event}) : super(key: key);

  @override
  _EventCardState createState() => _EventCardState();
}

class _EventCardState extends State<EventCard> {
  @override
  Widget build(BuildContext context) {
    final _eventBloc = BlocProvider.of<EventBloc>(context).eventBloc;
    _eventBloc.dispatch(EventEvent.fetch);

    bool _favorited = this.widget.event.favorite;

    void _toogleFavorited(){
      setState(() {
        _favorited = !_favorited;
        _eventBloc.dispatch(EventEvent.update, {
                        'event': this.widget.event,
                        'favorited': _favorited.toString(),
                      });
      });
    }

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Container(
              child: Text(
                "${widget.event.name}",
                style: TextStyle(
                    color: kColorPrimary,
                    fontWeight: FontWeight.bold,
                    fontSize: 24),
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Container(
                    child: Text(
                  "${widget.event.description}",
                  style: TextStyle(color: kColorAccent, fontSize: 20),
                )),
                Container(
                  padding: const EdgeInsets.fromLTRB(130, 0, 5, 0),
                  child: IconButton(
                    icon : (_favorited ? 
                    Icon(Icons.star):
                    Icon(Icons.star_border)),
                    color: kColorSecondary,
                    onPressed: _toogleFavorited,
                  ),
                )
              ],
            ),
            Row(
              children: <Widget>[
                Container(
                  child: Text(
                    "${widget.event.starthour} - ${widget.event.endhour}",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 0, 0, 0),
                  child: Text(
                    "${widget.event.place}",
                    style: TextStyle(fontSize: 16),
                  ),
                )
              ],
            ),
          ],
        ),
      ],
    );
  }
}
