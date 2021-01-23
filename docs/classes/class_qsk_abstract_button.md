---
title: QskAbstractButton
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

Inherited by [QskPushButton](/docs/classes/class_qsk_push_button/), [QskTabButton](/docs/classes/class_qsk_tab_button/)

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[toggle](/docs/classes/class_qsk_abstract_button/#slot-toggle)**() |
| void | **[click](/docs/classes/class_qsk_abstract_button/#slot-click)**() |
| void | **[setChecked](/docs/classes/class_qsk_abstract_button/#slot-setchecked)**(bool on) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[pressed](/docs/classes/class_qsk_abstract_button/#signal-pressed)**() |
| void | **[released](/docs/classes/class_qsk_abstract_button/#signal-released)**() |
| void | **[canceled](/docs/classes/class_qsk_abstract_button/#signal-canceled)**() |
| void | **[clicked](/docs/classes/class_qsk_abstract_button/#signal-clicked)**() |
| void | **[toggled](/docs/classes/class_qsk_abstract_button/#signal-toggled)**(bool ) |
| void | **[pressedChanged](/docs/classes/class_qsk_abstract_button/#signal-pressedchanged)**(bool ) |
| void | **[checkedChanged](/docs/classes/class_qsk_abstract_button/#signal-checkedchanged)**(bool ) |
| void | **[checkableChanged](/docs/classes/class_qsk_abstract_button/#signal-checkablechanged)**(bool ) |
| void | **[autoRepeatChanged](/docs/classes/class_qsk_abstract_button/#signal-autorepeatchanged)**(bool ) |
| void | **[autoRepeatDelayChanged](/docs/classes/class_qsk_abstract_button/#signal-autorepeatdelaychanged)**() |
| void | **[autoRepeatIntervalChanged](/docs/classes/class_qsk_abstract_button/#signal-autorepeatintervalchanged)**() |
| void | **[exclusiveChanged](/docs/classes/class_qsk_abstract_button/#signal-exclusivechanged)**(bool ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskAbstractButton](/docs/classes/class_qsk_abstract_button/#function-qskabstractbutton)**(QQuickItem * parent =nullptr) |
| | **[~QskAbstractButton](/docs/classes/class_qsk_abstract_button/#function-~qskabstractbutton)**() override |
| void | **[setCheckable](/docs/classes/class_qsk_abstract_button/#function-setcheckable)**(bool on) |
| bool | **[isCheckable](/docs/classes/class_qsk_abstract_button/#function-ischeckable)**() const |
| bool | **[isChecked](/docs/classes/class_qsk_abstract_button/#function-ischecked)**() const |
| void | **[setPressed](/docs/classes/class_qsk_abstract_button/#function-setpressed)**(bool on) |
| bool | **[isPressed](/docs/classes/class_qsk_abstract_button/#function-ispressed)**() const |
| void | **[setAutoRepeat](/docs/classes/class_qsk_abstract_button/#function-setautorepeat)**(bool on) |
| bool | **[autoRepeat](/docs/classes/class_qsk_abstract_button/#function-autorepeat)**() const |
| void | **[setAutoRepeatDelay](/docs/classes/class_qsk_abstract_button/#function-setautorepeatdelay)**(int ms) |
| int | **[autoRepeatDelay](/docs/classes/class_qsk_abstract_button/#function-autorepeatdelay)**() const |
| void | **[setAutoRepeatInterval](/docs/classes/class_qsk_abstract_button/#function-setautorepeatinterval)**(int ms) |
| int | **[autoRepeatInterval](/docs/classes/class_qsk_abstract_button/#function-autorepeatinterval)**() const |
| void | **[setExclusive](/docs/classes/class_qsk_abstract_button/#function-setexclusive)**(bool on) |
| bool | **[exclusive](/docs/classes/class_qsk_abstract_button/#function-exclusive)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_abstract_button/#function-event)**(QEvent * event) override |
| void | **[keyPressEvent](/docs/classes/class_qsk_abstract_button/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[keyReleaseEvent](/docs/classes/class_qsk_abstract_button/#function-keyreleaseevent)**(QKeyEvent * event) override |
| void | **[mouseMoveEvent](/docs/classes/class_qsk_abstract_button/#function-mousemoveevent)**(QMouseEvent * event) override |
| void | **[mousePressEvent](/docs/classes/class_qsk_abstract_button/#function-mousepressevent)**(QMouseEvent * ) override |
| void | **[mouseReleaseEvent](/docs/classes/class_qsk_abstract_button/#function-mousereleaseevent)**(QMouseEvent * ) override |
| void | **[mouseUngrabEvent](/docs/classes/class_qsk_abstract_button/#function-mouseungrabevent)**() override |
| void | **[focusInEvent](/docs/classes/class_qsk_abstract_button/#function-focusinevent)**(QFocusEvent * event) override |
| void | **[focusOutEvent](/docs/classes/class_qsk_abstract_button/#function-focusoutevent)**(QFocusEvent * event) override |
| void | **[timerEvent](/docs/classes/class_qsk_abstract_button/#function-timerevent)**(QTimerEvent * event) override |
| virtual void | **[setCheckedState](/docs/classes/class_qsk_abstract_button/#function-setcheckedstate)**(bool on) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[checkable](/docs/classes/class_qsk_abstract_button/#property-checkable)**  |
| bool | **[autoRepeat](/docs/classes/class_qsk_abstract_button/#property-autorepeat)**  |
| int | **[autoRepeatDelay](/docs/classes/class_qsk_abstract_button/#property-autorepeatdelay)**  |
| int | **[autoRepeatInterval](/docs/classes/class_qsk_abstract_button/#property-autorepeatinterval)**  |
| bool | **[exclusive](/docs/classes/class_qsk_abstract_button/#property-exclusive)**  |
| bool | **[pressed](/docs/classes/class_qsk_abstract_button/#property-pressed)**  |
| bool | **[checked](/docs/classes/class_qsk_abstract_button/#property-checked)**  |

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

Updated on 23 January 2021 at 09:50:34 CET