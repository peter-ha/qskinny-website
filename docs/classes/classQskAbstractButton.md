---
title: QskAbstractButton
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

Inherited by [QskPushButton](/docs/classes/classQskPushButton/), [QskTabButton](/docs/classes/classQskTabButton/)

## Public States

|                | Name           |
| -------------- | -------------- |
| const QskAspect::State | **[Flat](/docs/classes/classQskAbstractButton/#state-flat)**  |
| const QskAspect::State | **[Checked](/docs/classes/classQskAbstractButton/#state-checked)**  |
| const QskAspect::State | **[Pressed](/docs/classes/classQskAbstractButton/#state-pressed)**  |
| const QskAspect::State | **[Checkable](/docs/classes/classQskAbstractButton/#state-checkable)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskAbstractButton](/docs/classes/classQskAbstractButton/#function-qskabstractbutton)**(QQuickItem * parent =nullptr) |
| | **[~QskAbstractButton](/docs/classes/classQskAbstractButton/#function-~qskabstractbutton)**() override |
| void | **[setCheckable](/docs/classes/classQskAbstractButton/#function-setcheckable)**(bool on) |
| bool | **[isCheckable](/docs/classes/classQskAbstractButton/#function-ischeckable)**() const |
| bool | **[isChecked](/docs/classes/classQskAbstractButton/#function-ischecked)**() const |
| void | **[setPressed](/docs/classes/classQskAbstractButton/#function-setpressed)**(bool on) |
| bool | **[isPressed](/docs/classes/classQskAbstractButton/#function-ispressed)**() const |
| void | **[setAutoRepeat](/docs/classes/classQskAbstractButton/#function-setautorepeat)**(bool on) |
| bool | **[autoRepeat](/docs/classes/classQskAbstractButton/#function-autorepeat)**() const |
| void | **[setAutoRepeatDelay](/docs/classes/classQskAbstractButton/#function-setautorepeatdelay)**(int ms) |
| int | **[autoRepeatDelay](/docs/classes/classQskAbstractButton/#function-autorepeatdelay)**() const |
| void | **[setAutoRepeatInterval](/docs/classes/classQskAbstractButton/#function-setautorepeatinterval)**(int ms) |
| int | **[autoRepeatInterval](/docs/classes/classQskAbstractButton/#function-autorepeatinterval)**() const |
| void | **[setExclusive](/docs/classes/classQskAbstractButton/#function-setexclusive)**(bool on) |
| bool | **[exclusive](/docs/classes/classQskAbstractButton/#function-exclusive)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/classQskAbstractButton/#function-event)**(QEvent * event) override |
| void | **[keyPressEvent](/docs/classes/classQskAbstractButton/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[keyReleaseEvent](/docs/classes/classQskAbstractButton/#function-keyreleaseevent)**(QKeyEvent * event) override |
| void | **[mouseMoveEvent](/docs/classes/classQskAbstractButton/#function-mousemoveevent)**(QMouseEvent * event) override |
| void | **[mousePressEvent](/docs/classes/classQskAbstractButton/#function-mousepressevent)**(QMouseEvent * ) override |
| void | **[mouseReleaseEvent](/docs/classes/classQskAbstractButton/#function-mousereleaseevent)**(QMouseEvent * ) override |
| void | **[mouseUngrabEvent](/docs/classes/classQskAbstractButton/#function-mouseungrabevent)**() override |
| void | **[focusInEvent](/docs/classes/classQskAbstractButton/#function-focusinevent)**(QFocusEvent * event) override |
| void | **[focusOutEvent](/docs/classes/classQskAbstractButton/#function-focusoutevent)**(QFocusEvent * event) override |
| void | **[timerEvent](/docs/classes/classQskAbstractButton/#function-timerevent)**(QTimerEvent * event) override |
| virtual void | **[setCheckedState](/docs/classes/classQskAbstractButton/#function-setcheckedstate)**(bool on) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[pressed](/docs/classes/classQskAbstractButton/#signal-pressed)**() |
| void | **[released](/docs/classes/classQskAbstractButton/#signal-released)**() |
| void | **[canceled](/docs/classes/classQskAbstractButton/#signal-canceled)**() |
| void | **[clicked](/docs/classes/classQskAbstractButton/#signal-clicked)**() |
| void | **[toggled](/docs/classes/classQskAbstractButton/#signal-toggled)**(bool ) |
| void | **[pressedChanged](/docs/classes/classQskAbstractButton/#signal-pressedchanged)**(bool ) |
| void | **[checkedChanged](/docs/classes/classQskAbstractButton/#signal-checkedchanged)**(bool ) |
| void | **[checkableChanged](/docs/classes/classQskAbstractButton/#signal-checkablechanged)**(bool ) |
| void | **[autoRepeatChanged](/docs/classes/classQskAbstractButton/#signal-autorepeatchanged)**(bool ) |
| void | **[autoRepeatDelayChanged](/docs/classes/classQskAbstractButton/#signal-autorepeatdelaychanged)**() |
| void | **[autoRepeatIntervalChanged](/docs/classes/classQskAbstractButton/#signal-autorepeatintervalchanged)**() |
| void | **[exclusiveChanged](/docs/classes/classQskAbstractButton/#signal-exclusivechanged)**(bool ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[toggle](/docs/classes/classQskAbstractButton/#slot-toggle)**() |
| void | **[click](/docs/classes/classQskAbstractButton/#slot-click)**() |
| void | **[setChecked](/docs/classes/classQskAbstractButton/#slot-setchecked)**(bool on) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[checkable](/docs/classes/classQskAbstractButton/#property-checkable)**  |
| bool | **[autoRepeat](/docs/classes/classQskAbstractButton/#property-autorepeat)**  |
| int | **[autoRepeatDelay](/docs/classes/classQskAbstractButton/#property-autorepeatdelay)**  |
| int | **[autoRepeatInterval](/docs/classes/classQskAbstractButton/#property-autorepeatinterval)**  |
| bool | **[exclusive](/docs/classes/classQskAbstractButton/#property-exclusive)**  |
| bool | **[pressed](/docs/classes/classQskAbstractButton/#property-pressed)**  |
| bool | **[checked](/docs/classes/classQskAbstractButton/#property-checked)**  |

## Public States Documentation

### state Flat




### state Checked




### state Pressed




### state Checkable




## Public Functions Documentation

### function QskAbstractButton

```cpp
QskAbstractButton(
    QQuickItem * parent =nullptr
)
```


### function ~QskAbstractButton

```cpp
~QskAbstractButton() override
```


### function setCheckable

```cpp
void setCheckable(
    bool on
)
```


### function isCheckable

```cpp
bool isCheckable() const
```


### function isChecked

```cpp
bool isChecked() const
```


### function setPressed

```cpp
void setPressed(
    bool on
)
```


### function isPressed

```cpp
bool isPressed() const
```


### function setAutoRepeat

```cpp
void setAutoRepeat(
    bool on
)
```


### function autoRepeat

```cpp
bool autoRepeat() const
```


### function setAutoRepeatDelay

```cpp
void setAutoRepeatDelay(
    int ms
)
```


### function autoRepeatDelay

```cpp
int autoRepeatDelay() const
```


### function setAutoRepeatInterval

```cpp
void setAutoRepeatInterval(
    int ms
)
```


### function autoRepeatInterval

```cpp
int autoRepeatInterval() const
```


### function setExclusive

```cpp
void setExclusive(
    bool on
)
```


### function exclusive

```cpp
bool exclusive() const
```


## Protected Functions Documentation

### function event

```cpp
bool event(
    QEvent * event
) override
```


### function keyPressEvent

```cpp
void keyPressEvent(
    QKeyEvent * event
) override
```


### function keyReleaseEvent

```cpp
void keyReleaseEvent(
    QKeyEvent * event
) override
```


### function mouseMoveEvent

```cpp
void mouseMoveEvent(
    QMouseEvent * event
) override
```


### function mousePressEvent

```cpp
void mousePressEvent(
    QMouseEvent * 
) override
```


### function mouseReleaseEvent

```cpp
void mouseReleaseEvent(
    QMouseEvent * 
) override
```


### function mouseUngrabEvent

```cpp
void mouseUngrabEvent() override
```


### function focusInEvent

```cpp
void focusInEvent(
    QFocusEvent * event
) override
```


### function focusOutEvent

```cpp
void focusOutEvent(
    QFocusEvent * event
) override
```


### function timerEvent

```cpp
void timerEvent(
    QTimerEvent * event
) override
```


### function setCheckedState

```cpp
virtual void setCheckedState(
    bool on
)
```


## Public Signals Documentation

### signal pressed

```cpp
void pressed()
```


### signal released

```cpp
void released()
```


### signal canceled

```cpp
void canceled()
```


### signal clicked

```cpp
void clicked()
```


### signal toggled

```cpp
void toggled(
    bool 
)
```


### signal pressedChanged

```cpp
void pressedChanged(
    bool 
)
```


### signal checkedChanged

```cpp
void checkedChanged(
    bool 
)
```


### signal checkableChanged

```cpp
void checkableChanged(
    bool 
)
```


### signal autoRepeatChanged

```cpp
void autoRepeatChanged(
    bool 
)
```


### signal autoRepeatDelayChanged

```cpp
void autoRepeatDelayChanged()
```


### signal autoRepeatIntervalChanged

```cpp
void autoRepeatIntervalChanged()
```


### signal exclusiveChanged

```cpp
void exclusiveChanged(
    bool 
)
```


## Public Slots Documentation

### slot toggle

```cpp
void toggle()
```


### slot click

```cpp
void click()
```


### slot setChecked

```cpp
void setChecked(
    bool on
)
```


## Public Property Documentation

### property checkable

```cpp
bool checkable;
```


### property autoRepeat

```cpp
bool autoRepeat;
```


### property autoRepeatDelay

```cpp
int autoRepeatDelay;
```


### property autoRepeatInterval

```cpp
int autoRepeatInterval;
```


### property exclusive

```cpp
bool exclusive;
```


### property pressed

```cpp
bool pressed;
```


### property checked

```cpp
bool checked;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET