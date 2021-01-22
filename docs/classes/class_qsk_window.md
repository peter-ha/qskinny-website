---
title: QskWindow
layout: docs

---


**Module:** **[Framework](/docs/modules/group___framework/)**



Inherits from QQuickWindow

Inherited by [QskDialogWindow](/docs/classes/class_qsk_dialog_window/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[EventAcceptance](/docs/classes/class_qsk_window/#enum-eventacceptance)** { EventProcessed = 0, EventPropagationStopped = 1} |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setLocale](/docs/classes/class_qsk_window/#slot-setlocale)**(const QLocale & locale) |
| void | **[resizeF](/docs/classes/class_qsk_window/#slot-resizef)**(const QSizeF & size) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[localeChanged](/docs/classes/class_qsk_window/#signal-localechanged)**(const QLocale & ) |
| void | **[autoLayoutChildrenChanged](/docs/classes/class_qsk_window/#signal-autolayoutchildrenchanged)**() |
| void | **[deleteOnCloseChanged](/docs/classes/class_qsk_window/#signal-deleteonclosechanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskWindow](/docs/classes/class_qsk_window/#function-qskwindow)**(QWindow * parent =nullptr) |
| | **[QskWindow](/docs/classes/class_qsk_window/#function-qskwindow)**(QQuickRenderControl * renderControl, QWindow * parent =nullptr) |
| | **[~QskWindow](/docs/classes/class_qsk_window/#function-~qskwindow)**() override |
| void | **[setScreen](/docs/classes/class_qsk_window/#function-setscreen)**(const QString & name) |
| bool | **[deleteOnClose](/docs/classes/class_qsk_window/#function-deleteonclose)**() const |
| void | **[setDeleteOnClose](/docs/classes/class_qsk_window/#function-setdeleteonclose)**(bool on) |
| void | **[setAutoLayoutChildren](/docs/classes/class_qsk_window/#function-setautolayoutchildren)**(bool on) |
| bool | **[autoLayoutChildren](/docs/classes/class_qsk_window/#function-autolayoutchildren)**() const |
| Q_INVOKABLE void | **[addItem](/docs/classes/class_qsk_window/#function-additem)**(QQuickItem * item) |
| QLocale | **[locale](/docs/classes/class_qsk_window/#function-locale)**() const |
| void | **[resetLocale](/docs/classes/class_qsk_window/#function-resetlocale)**() |
| Q_INVOKABLE void | **[setPreferredSize](/docs/classes/class_qsk_window/#function-setpreferredsize)**(const QSize & size) |
| Q_INVOKABLE QSize | **[preferredSize](/docs/classes/class_qsk_window/#function-preferredsize)**() const |
| Q_INVOKABLE QSize | **[sizeConstraint](/docs/classes/class_qsk_window/#function-sizeconstraint)**() const |
| Q_INVOKABLE void | **[setFixedSize](/docs/classes/class_qsk_window/#function-setfixedsize)**(const QSize & size) |
| void | **[polishItems](/docs/classes/class_qsk_window/#function-polishitems)**() |
| void | **[setCustomRenderMode](/docs/classes/class_qsk_window/#function-setcustomrendermode)**(const char * mode) |
| const char * | **[customRenderMode](/docs/classes/class_qsk_window/#function-customrendermode)**() const |
| void | **[setEventAcceptance](/docs/classes/class_qsk_window/#function-seteventacceptance)**(EventAcceptance acceptance) |
| EventAcceptance | **[eventAcceptance](/docs/classes/class_qsk_window/#function-eventacceptance)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_window/#function-event)**(QEvent * event) override |
| void | **[resizeEvent](/docs/classes/class_qsk_window/#function-resizeevent)**(QResizeEvent * event) override |
| void | **[exposeEvent](/docs/classes/class_qsk_window/#function-exposeevent)**(QExposeEvent * event) override |
| void | **[keyPressEvent](/docs/classes/class_qsk_window/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[keyReleaseEvent](/docs/classes/class_qsk_window/#function-keyreleaseevent)**(QKeyEvent * event) override |
| virtual void | **[layoutItems](/docs/classes/class_qsk_window/#function-layoutitems)**() |
| virtual void | **[ensureFocus](/docs/classes/class_qsk_window/#function-ensurefocus)**(Qt::FocusReason reason) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[deleteOnClose](/docs/classes/class_qsk_window/#property-deleteonclose)**  |
| bool | **[autoLayoutChildren](/docs/classes/class_qsk_window/#property-autolayoutchildren)**  |
| QLocale | **[locale](/docs/classes/class_qsk_window/#property-locale)**  |

## Public Types Documentation

### enum EventAcceptance

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| EventProcessed | 0|   |
| EventPropagationStopped | 1|   |




## Public Slots Documentation

### slot setLocale

```cpp
void setLocale(
    const QLocale & locale
)
```


### slot resizeF

```cpp
void resizeF(
    const QSizeF & size
)
```


## Public Signals Documentation

### signal localeChanged

```cpp
void localeChanged(
    const QLocale & 
)
```


### signal autoLayoutChildrenChanged

```cpp
void autoLayoutChildrenChanged()
```


### signal deleteOnCloseChanged

```cpp
void deleteOnCloseChanged()
```


## Public Functions Documentation

### function QskWindow

```cpp
QskWindow(
    QWindow * parent =nullptr
)
```


### function QskWindow

```cpp
QskWindow(
    QQuickRenderControl * renderControl,
    QWindow * parent =nullptr
)
```


### function ~QskWindow

```cpp
~QskWindow() override
```


### function setScreen

```cpp
void setScreen(
    const QString & name
)
```


### function deleteOnClose

```cpp
bool deleteOnClose() const
```


### function setDeleteOnClose

```cpp
void setDeleteOnClose(
    bool on
)
```


### function setAutoLayoutChildren

```cpp
void setAutoLayoutChildren(
    bool on
)
```


### function autoLayoutChildren

```cpp
bool autoLayoutChildren() const
```


### function addItem

```cpp
Q_INVOKABLE void addItem(
    QQuickItem * item
)
```


### function locale

```cpp
QLocale locale() const
```


### function resetLocale

```cpp
void resetLocale()
```


### function setPreferredSize

```cpp
Q_INVOKABLE void setPreferredSize(
    const QSize & size
)
```


### function preferredSize

```cpp
Q_INVOKABLE QSize preferredSize() const
```


### function sizeConstraint

```cpp
Q_INVOKABLE QSize sizeConstraint() const
```


### function setFixedSize

```cpp
Q_INVOKABLE void setFixedSize(
    const QSize & size
)
```


### function polishItems

```cpp
void polishItems()
```


### function setCustomRenderMode

```cpp
void setCustomRenderMode(
    const char * mode
)
```


### function customRenderMode

```cpp
const char * customRenderMode() const
```


### function setEventAcceptance

```cpp
void setEventAcceptance(
    EventAcceptance acceptance
)
```


### function eventAcceptance

```cpp
EventAcceptance eventAcceptance() const
```


## Protected Functions Documentation

### function event

```cpp
bool event(
    QEvent * event
) override
```


### function resizeEvent

```cpp
void resizeEvent(
    QResizeEvent * event
) override
```


### function exposeEvent

```cpp
void exposeEvent(
    QExposeEvent * event
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


### function layoutItems

```cpp
virtual void layoutItems()
```


### function ensureFocus

```cpp
virtual void ensureFocus(
    Qt::FocusReason reason
)
```


## Public Property Documentation

### property deleteOnClose

```cpp
bool deleteOnClose;
```


### property autoLayoutChildren

```cpp
bool autoLayoutChildren;
```


### property locale

```cpp
QLocale locale;
```


-------------------------------

Updated on 22 January 2021 at 17:05:50 CET