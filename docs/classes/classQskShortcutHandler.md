---
title: QskShortcutHandler
layout: docs

---




Inherits from QObject

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskShortcutHandler](/docs/classes/classQskShortcutHandler/#function-qskshortcuthandler)**() |
| int | **[insert](/docs/classes/classQskShortcutHandler/#function-insert)**(QQuickItem * item, const QKeySequence & sequence, bool autoRepeat, const QObject * receiver, const QskMetaInvokable & invokable) |
| void | **[remove](/docs/classes/classQskShortcutHandler/#function-remove)**(int id) |
| void | **[setEnabled](/docs/classes/classQskShortcutHandler/#function-setenabled)**(int id, bool enabled) |
| void | **[setEnabled](/docs/classes/classQskShortcutHandler/#function-setenabled)**(const QKeySequence & sequence, bool on) |
| void | **[setAutoRepeat](/docs/classes/classQskShortcutHandler/#function-setautorepeat)**(int id, bool repeat) |
| bool | **[eventFilter](/docs/classes/classQskShortcutHandler/#function-eventfilter)**(QObject * object, QEvent * event) override |
| bool | **[invoke](/docs/classes/classQskShortcutHandler/#function-invoke)**(QQuickItem * item, const QKeySequence & sequence) |

## Public Functions Documentation

### function QskShortcutHandler

```cpp
QskShortcutHandler()
```


### function insert

```cpp
int insert(
    QQuickItem * item,
    const QKeySequence & sequence,
    bool autoRepeat,
    const QObject * receiver,
    const QskMetaInvokable & invokable
)
```


### function remove

```cpp
void remove(
    int id
)
```


### function setEnabled

```cpp
void setEnabled(
    int id,
    bool enabled
)
```


### function setEnabled

```cpp
void setEnabled(
    const QKeySequence & sequence,
    bool on
)
```


### function setAutoRepeat

```cpp
void setAutoRepeat(
    int id,
    bool repeat
)
```


### function eventFilter

```cpp
bool eventFilter(
    QObject * object,
    QEvent * event
) override
```


### function invoke

```cpp
bool invoke(
    QQuickItem * item,
    const QKeySequence & sequence
)
```


-------------------------------

Updated on  3 February 2021 at 15:05:40 CET