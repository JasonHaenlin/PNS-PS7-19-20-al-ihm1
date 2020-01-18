import 'package:flutter/material.dart';
import 'package:polympic/blocs/bloc_provider.dart';
import 'package:polympic/blocs/timeline/timeline_bloc.dart';
import 'package:polympic/blocs/timeline/timeline_state.dart';
import 'package:polympic/components/timeline/timeline_tab.dart';
import 'package:polympic/theme/colors.dart';

class Carousel extends StatelessWidget {
  const Carousel({
    Key key,
    @required this.childrens,
  }) : super(key: key);

  final List<TimelineTab> childrens;

  @override
  Widget build(BuildContext context) {
    final _timelineBloc = BlocProvider.of<TimelineBloc>(context).timelineBloc;

    _timelineBloc.dispatch(TimelineEvent.start, {
      'beginDate': childrens[0].beginDate,
      'endDate': childrens[0].endDate,
    });

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        SizedBox(
          height: 150,
          child: PageView.builder(
            onPageChanged: (a) => _timelineBloc.dispatch(TimelineEvent.update, {
              'beginDate': childrens[a].beginDate,
              'endDate': childrens[a].endDate,
            }),
            controller: PageController(viewportFraction: 0.8),
            itemCount: childrens.length,
            itemBuilder: (BuildContext context, int itemIndex) {
              return Padding(
                padding: const EdgeInsets.fromLTRB(10, 10, 15, 5),
                child: Card(
                  child: Container(
                    child: ClipPath(
                      clipper: ShapeBorderClipper(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(3),
                        ),
                      ),
                      child: Container(
                        decoration: BoxDecoration(
                          border: Border(
                            top: BorderSide(color: kColorSecondary, width: 5),
                          ),
                        ),
                        child: childrens[itemIndex],
                      ),
                    ),
                  ),
                  margin: EdgeInsets.all(10.0),
                ),
              );
            },
          ),
        )
      ],
    );
  }
}
