---
title: QskGestureRecognizer
layout: docs

---


**Module:** **[Framework](/docs/modules/group__Framework/)**



Inherited by [QskPanGestureRecognizer](/docs/classes/classQskPanGestureRecognizer/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[State](/docs/classes/classQskGestureRecognizer/#enum-state)** { Idle, Pending, Accepted} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGestureRecognizer](/docs/classes/classQskGestureRecognizer/#function-qskgesturerecognizer)**() |
| virtual | **[~QskGestureRecognizer](/docs/classes/classQskGestureRecognizer/#function-~qskgesturerecognizer)**() |
| void | **[setWatchedItem](/docs/classes/classQskGestureRecognizer/#function-setwatcheditem)**(QQuickItem * item) |
| QQuickItem * | **[watchedItem](/docs/classes/classQskGestureRecognizer/#function-watcheditem)**() const |
| void | **[setAcceptedMouseButtons](/docs/classes/classQskGestureRecognizer/#function-setacceptedmousebuttons)**(Qt::MouseButtons buttons) |
| Qt::MouseButtons | **[acceptedMouseButtons](/docs/classes/classQskGestureRecognizer/#function-acceptedmousebuttons)**() const |
| void | **[setTimeout](/docs/classes/classQskGestureRecognizer/#function-settimeout)**(int ms) |
| int | **[timeout](/docs/classes/classQskGestureRecognizer/#function-timeout)**() const |
| ulong | **[timestamp](/docs/classes/classQskGestureRecognizer/#function-timestamp)**() const |
| bool | **[processEvent](/docs/classes/classQskGestureRecognizer/#function-processevent)**(QQuickItem * item, QEvent * event, bool blockReplayedEvents =true) |
| void | **[reject](/docs/classes/classQskGestureRecognizer/#function-reject)**() |
| void | **[accept](/docs/classes/classQskGestureRecognizer/#function-accept)**() |
| void | **[abort](/docs/classes/classQskGestureRecognizer/#function-abort)**() |
| State | **[state](/docs/classes/classQskGestureRecognizer/#function-state)**() const |
| bool | **[isReplaying](/docs/classes/classQskGestureRecognizer/#function-isreplaying)**() const |
| bool | **[hasProcessedBefore](/docs/classes/classQskGestureRecognizer/#function-hasprocessedbefore)**(const QMouseEvent * event) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[pressEvent](/docs/classes/classQskGestureRecognizer/#function-pressevent)**(const QMouseEvent * ) |
| virtual void | **[moveEvent](/docs/classes/classQskGestureRecognizer/#function-moveevent)**(const QMouseEvent * ) |
| virtual void | **[releaseEvent](/docs/classes/classQskGestureRecognizer/#function-releaseevent)**(const QMouseEvent * ) |
| virtual void | **[stateChanged](/docs/classes/classQskGestureRecognizer/#function-statechanged)**(State from, State to) |

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

Updated on  3 February 2021 at 15:05:45 CET