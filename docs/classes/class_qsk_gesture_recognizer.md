---
title: QskGestureRecognizer
layout: docs

---


**Module:** **[Framework](/docs/modules/group___framework/)**



Inherited by [QskPanGestureRecognizer](/docs/classes/class_qsk_pan_gesture_recognizer/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[State](/docs/classes/class_qsk_gesture_recognizer/#enum-state)** { Idle, Pending, Accepted} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGestureRecognizer](/docs/classes/class_qsk_gesture_recognizer/#function-qskgesturerecognizer)**() |
| virtual | **[~QskGestureRecognizer](/docs/classes/class_qsk_gesture_recognizer/#function-~qskgesturerecognizer)**() |
| void | **[setWatchedItem](/docs/classes/class_qsk_gesture_recognizer/#function-setwatcheditem)**(QQuickItem * item) |
| QQuickItem * | **[watchedItem](/docs/classes/class_qsk_gesture_recognizer/#function-watcheditem)**() const |
| void | **[setAcceptedMouseButtons](/docs/classes/class_qsk_gesture_recognizer/#function-setacceptedmousebuttons)**(Qt::MouseButtons buttons) |
| Qt::MouseButtons | **[acceptedMouseButtons](/docs/classes/class_qsk_gesture_recognizer/#function-acceptedmousebuttons)**() const |
| void | **[setTimeout](/docs/classes/class_qsk_gesture_recognizer/#function-settimeout)**(int ms) |
| int | **[timeout](/docs/classes/class_qsk_gesture_recognizer/#function-timeout)**() const |
| ulong | **[timestamp](/docs/classes/class_qsk_gesture_recognizer/#function-timestamp)**() const |
| bool | **[processEvent](/docs/classes/class_qsk_gesture_recognizer/#function-processevent)**(QQuickItem * item, QEvent * event, bool blockReplayedEvents =true) |
| void | **[reject](/docs/classes/class_qsk_gesture_recognizer/#function-reject)**() |
| void | **[accept](/docs/classes/class_qsk_gesture_recognizer/#function-accept)**() |
| void | **[abort](/docs/classes/class_qsk_gesture_recognizer/#function-abort)**() |
| State | **[state](/docs/classes/class_qsk_gesture_recognizer/#function-state)**() const |
| bool | **[isReplaying](/docs/classes/class_qsk_gesture_recognizer/#function-isreplaying)**() const |
| bool | **[hasProcessedBefore](/docs/classes/class_qsk_gesture_recognizer/#function-hasprocessedbefore)**(const QMouseEvent * event) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[pressEvent](/docs/classes/class_qsk_gesture_recognizer/#function-pressevent)**(const QMouseEvent * ) |
| virtual void | **[moveEvent](/docs/classes/class_qsk_gesture_recognizer/#function-moveevent)**(const QMouseEvent * ) |
| virtual void | **[releaseEvent](/docs/classes/class_qsk_gesture_recognizer/#function-releaseevent)**(const QMouseEvent * ) |
| virtual void | **[stateChanged](/docs/classes/class_qsk_gesture_recognizer/#function-statechanged)**(State from, State to) |

## Public Types Documentation

### enum State

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Idle | |   |
| Pending | |   |
| Accepted | |   |




## Public Functions Documentation

### function QskGestureRecognizer

```cpp
QskGestureRecognizer()
```


### function ~QskGestureRecognizer

```cpp
virtual ~QskGestureRecognizer()
```


### function setWatchedItem

```cpp
void setWatchedItem(
    QQuickItem * item
)
```


### function watchedItem

```cpp
QQuickItem * watchedItem() const
```


### function setAcceptedMouseButtons

```cpp
void setAcceptedMouseButtons(
    Qt::MouseButtons buttons
)
```


### function acceptedMouseButtons

```cpp
Qt::MouseButtons acceptedMouseButtons() const
```


### function setTimeout

```cpp
void setTimeout(
    int ms
)
```


### function timeout

```cpp
int timeout() const
```


### function timestamp

```cpp
ulong timestamp() const
```


### function processEvent

```cpp
bool processEvent(
    QQuickItem * item,
    QEvent * event,
    bool blockReplayedEvents =true
)
```


### function reject

```cpp
void reject()
```


### function accept

```cpp
void accept()
```


### function abort

```cpp
void abort()
```


### function state

```cpp
State state() const
```


### function isReplaying

```cpp
bool isReplaying() const
```


### function hasProcessedBefore

```cpp
bool hasProcessedBefore(
    const QMouseEvent * event
) const
```


## Protected Functions Documentation

### function pressEvent

```cpp
virtual void pressEvent(
    const QMouseEvent * 
)
```


### function moveEvent

```cpp
virtual void moveEvent(
    const QMouseEvent * 
)
```


### function releaseEvent

```cpp
virtual void releaseEvent(
    const QMouseEvent * 
)
```


### function stateChanged

```cpp
virtual void stateChanged(
    State from,
    State to
)
```


-------------------------------

Updated on 22 January 2021 at 17:05:50 CET