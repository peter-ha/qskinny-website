---
title: QskAnimator
layout: docs

---


**Module:** **[Animation](/docs/modules/group___animation/)**



Inherited by QSK_QT_PRIVATE_END::ScrollAnimator, [QskFlickAnimator](/docs/classes/class_qsk_flick_animator/), [QskStackBoxAnimator](/docs/classes/class_qsk_stack_box_animator/), [QskVariantAnimator](/docs/classes/class_qsk_variant_animator/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskAnimator](/docs/classes/class_qsk_animator/#function-qskanimator)**() |
| virtual | **[~QskAnimator](/docs/classes/class_qsk_animator/#function-~qskanimator)**() |
| QQuickWindow * | **[window](/docs/classes/class_qsk_animator/#function-window)**() const |
| void | **[setWindow](/docs/classes/class_qsk_animator/#function-setwindow)**(QQuickWindow * window) |
| void | **[setEasingCurve](/docs/classes/class_qsk_animator/#function-seteasingcurve)**(QEasingCurve::Type type) |
| void | **[setEasingCurve](/docs/classes/class_qsk_animator/#function-seteasingcurve)**(const QEasingCurve & easingCurve) |
| const QEasingCurve & | **[easingCurve](/docs/classes/class_qsk_animator/#function-easingcurve)**() const |
| void | **[setAutoRepeat](/docs/classes/class_qsk_animator/#function-setautorepeat)**(bool on) |
| bool | **[autoRepeat](/docs/classes/class_qsk_animator/#function-autorepeat)**() const |
| void | **[setDuration](/docs/classes/class_qsk_animator/#function-setduration)**(int ms) |
| int | **[duration](/docs/classes/class_qsk_animator/#function-duration)**() const |
| bool | **[isRunning](/docs/classes/class_qsk_animator/#function-isrunning)**() const |
| qint64 | **[elapsed](/docs/classes/class_qsk_animator/#function-elapsed)**() const |
| void | **[start](/docs/classes/class_qsk_animator/#function-start)**() |
| void | **[stop](/docs/classes/class_qsk_animator/#function-stop)**() |
| void | **[update](/docs/classes/class_qsk_animator/#function-update)**() |
| QMetaObject::Connection | **[addCleanupHandler](/docs/classes/class_qsk_animator/#function-addcleanuphandler)**(QObject * receiver, const char * method, Qt::ConnectionType type =Qt::AutoConnection) |
| QMetaObject::Connection | **[addAdvanceHandler](/docs/classes/class_qsk_animator/#function-addadvancehandler)**(QObject * receiver, const char * method, Qt::ConnectionType type =Qt::AutoConnection) |
| void | **[debugStatistics](/docs/classes/class_qsk_animator/#function-debugstatistics)**(QDebug debug) |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[setup](/docs/classes/class_qsk_animator/#function-setup)**() |
| virtual void | **[advance](/docs/classes/class_qsk_animator/#function-advance)**(qreal value) =0 |
| virtual void | **[done](/docs/classes/class_qsk_animator/#function-done)**() |

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

Updated on 22 January 2021 at 17:05:49 CET