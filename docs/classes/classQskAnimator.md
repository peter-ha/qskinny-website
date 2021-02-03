---
title: QskAnimator
layout: docs

---


**Module:** **[Animation](/docs/modules/group__Animation/)**



Inherited by [QskFlickAnimator](/docs/classes/classQskFlickAnimator/), [QskStackBoxAnimator](/docs/classes/classQskStackBoxAnimator/), [QskVariantAnimator](/docs/classes/classQskVariantAnimator/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskAnimator](/docs/classes/classQskAnimator/#function-qskanimator)**() |
| virtual | **[~QskAnimator](/docs/classes/classQskAnimator/#function-~qskanimator)**() |
| QQuickWindow * | **[window](/docs/classes/classQskAnimator/#function-window)**() const |
| void | **[setWindow](/docs/classes/classQskAnimator/#function-setwindow)**(QQuickWindow * window) |
| void | **[setEasingCurve](/docs/classes/classQskAnimator/#function-seteasingcurve)**(QEasingCurve::Type type) |
| void | **[setEasingCurve](/docs/classes/classQskAnimator/#function-seteasingcurve)**(const QEasingCurve & easingCurve) |
| const QEasingCurve & | **[easingCurve](/docs/classes/classQskAnimator/#function-easingcurve)**() const |
| void | **[setAutoRepeat](/docs/classes/classQskAnimator/#function-setautorepeat)**(bool on) |
| bool | **[autoRepeat](/docs/classes/classQskAnimator/#function-autorepeat)**() const |
| void | **[setDuration](/docs/classes/classQskAnimator/#function-setduration)**(int ms) |
| int | **[duration](/docs/classes/classQskAnimator/#function-duration)**() const |
| bool | **[isRunning](/docs/classes/classQskAnimator/#function-isrunning)**() const |
| qint64 | **[elapsed](/docs/classes/classQskAnimator/#function-elapsed)**() const |
| void | **[start](/docs/classes/classQskAnimator/#function-start)**() |
| void | **[stop](/docs/classes/classQskAnimator/#function-stop)**() |
| void | **[update](/docs/classes/classQskAnimator/#function-update)**() |
| QMetaObject::Connection | **[addCleanupHandler](/docs/classes/classQskAnimator/#function-addcleanuphandler)**(QObject * receiver, const char * method, Qt::ConnectionType type =Qt::AutoConnection) |
| QMetaObject::Connection | **[addAdvanceHandler](/docs/classes/classQskAnimator/#function-addadvancehandler)**(QObject * receiver, const char * method, Qt::ConnectionType type =Qt::AutoConnection) |
| void | **[debugStatistics](/docs/classes/classQskAnimator/#function-debugstatistics)**(QDebug debug) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[setup](/docs/classes/classQskAnimator/#function-setup)**() |
| virtual void | **[advance](/docs/classes/classQskAnimator/#function-advance)**(qreal value) =0 |
| virtual void | **[done](/docs/classes/classQskAnimator/#function-done)**() |

## Public Functions Documentation

### function QskAnimator

```cpp
QskAnimator()
```


### function ~QskAnimator

```cpp
virtual ~QskAnimator()
```


### function window

```cpp
QQuickWindow * window() const
```


### function setWindow

```cpp
void setWindow(
    QQuickWindow * window
)
```


### function setEasingCurve

```cpp
void setEasingCurve(
    QEasingCurve::Type type
)
```


### function setEasingCurve

```cpp
void setEasingCurve(
    const QEasingCurve & easingCurve
)
```


### function easingCurve

```cpp
const QEasingCurve & easingCurve() const
```


### function setAutoRepeat

```cpp
void setAutoRepeat(
    bool on
)
```


### function autoRepeat

```cpp
inline bool autoRepeat() const
```


### function setDuration

```cpp
void setDuration(
    int ms
)
```


### function duration

```cpp
inline int duration() const
```


### function isRunning

```cpp
inline bool isRunning() const
```


### function elapsed

```cpp
qint64 elapsed() const
```


### function start

```cpp
void start()
```


### function stop

```cpp
void stop()
```


### function update

```cpp
void update()
```


### function addCleanupHandler

```cpp
static QMetaObject::Connection addCleanupHandler(
    QObject * receiver,
    const char * method,
    Qt::ConnectionType type =Qt::AutoConnection
)
```


### function addAdvanceHandler

```cpp
static QMetaObject::Connection addAdvanceHandler(
    QObject * receiver,
    const char * method,
    Qt::ConnectionType type =Qt::AutoConnection
)
```


### function debugStatistics

```cpp
static void debugStatistics(
    QDebug debug
)
```


## Protected Functions Documentation

### function setup

```cpp
virtual void setup()
```


### function advance

```cpp
virtual void advance(
    qreal value
) =0
```


### function done

```cpp
virtual void done()
```


-------------------------------

Updated on  3 February 2021 at 15:05:45 CET