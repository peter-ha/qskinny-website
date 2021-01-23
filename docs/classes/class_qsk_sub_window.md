---
title: QskSubWindow
layout: docs

---


**Module:** **[Container](/docs/modules/group___container/)**



Inherits from QskPopup

Inherited by [QskDialogSubWindow](/docs/classes/class_qsk_dialog_sub_window/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[WindowButton](/docs/classes/class_qsk_sub_window/#enum-windowbutton)** { MinimizeButton = 0x1, MaximizeButton = 0x2, CloseButton = 0x4} |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[decoratedChanged](/docs/classes/class_qsk_sub_window/#signal-decoratedchanged)**() |
| void | **[windowTitleChanged](/docs/classes/class_qsk_sub_window/#signal-windowtitlechanged)**() |
| void | **[windowTitleTextOptionsChanged](/docs/classes/class_qsk_sub_window/#signal-windowtitletextoptionschanged)**() |
| void | **[windowIconChanged](/docs/classes/class_qsk_sub_window/#signal-windowiconchanged)**() |
| void | **[windowIconSourceChanged](/docs/classes/class_qsk_sub_window/#signal-windowiconsourcechanged)**() |
| void | **[windowButtonsChanged](/docs/classes/class_qsk_sub_window/#signal-windowbuttonschanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSubWindow](/docs/classes/class_qsk_sub_window/#function-qsksubwindow)**(QQuickItem * parent =nullptr) |
| | **[~QskSubWindow](/docs/classes/class_qsk_sub_window/#function-~qsksubwindow)**() override |
| void | **[setDecorated](/docs/classes/class_qsk_sub_window/#function-setdecorated)**(bool on) |
| bool | **[isDecorated](/docs/classes/class_qsk_sub_window/#function-isdecorated)**() const |
| void | **[setWindowTitleTextOptions](/docs/classes/class_qsk_sub_window/#function-setwindowtitletextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[windowTitleTextOptions](/docs/classes/class_qsk_sub_window/#function-windowtitletextoptions)**() const |
| void | **[setWindowTitle](/docs/classes/class_qsk_sub_window/#function-setwindowtitle)**(const QString & title) |
| QString | **[windowTitle](/docs/classes/class_qsk_sub_window/#function-windowtitle)**() const |
| void | **[setWindowIconSource](/docs/classes/class_qsk_sub_window/#function-setwindowiconsource)**(const QString & url) |
| void | **[setWindowIconSource](/docs/classes/class_qsk_sub_window/#function-setwindowiconsource)**(const QUrl & url) |
| QUrl | **[windowIconSource](/docs/classes/class_qsk_sub_window/#function-windowiconsource)**() const |
| void | **[setWindowIcon](/docs/classes/class_qsk_sub_window/#function-setwindowicon)**(const [QskGraphic](/docs/classes/class_qsk_graphic/) & graphic) |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[windowIcon](/docs/classes/class_qsk_sub_window/#function-windowicon)**() const |
| bool | **[hasWindowIcon](/docs/classes/class_qsk_sub_window/#function-haswindowicon)**() const |
| void | **[setWindowButtons](/docs/classes/class_qsk_sub_window/#function-setwindowbuttons)**(WindowButtons buttons) |
| WindowButtons | **[windowButtons](/docs/classes/class_qsk_sub_window/#function-windowbuttons)**() const |
| void | **[setWindowButton](/docs/classes/class_qsk_sub_window/#function-setwindowbutton)**(WindowButton button, bool on =true) |
| bool | **[testWindowButton](/docs/classes/class_qsk_sub_window/#function-testwindowbutton)**(WindowButton button) const |
| QRectF | **[titleBarRect](/docs/classes/class_qsk_sub_window/#function-titlebarrect)**() const |
| QRectF | **[layoutRectForSize](/docs/classes/class_qsk_sub_window/#function-layoutrectforsize)**(const QSizeF & size) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_sub_window/#function-event)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/class_qsk_sub_window/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_sub_window/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |
| void | **[itemChange](/docs/classes/class_qsk_sub_window/#function-itemchange)**(QQuickItem::ItemChange change, const QQuickItem::ItemChangeData & value) override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[decorated](/docs/classes/class_qsk_sub_window/#property-decorated)**  |
| QString | **[windowTitle](/docs/classes/class_qsk_sub_window/#property-windowtitle)**  |
| QskTextOptions | **[windowTitleTextOptions](/docs/classes/class_qsk_sub_window/#property-windowtitletextoptions)**  |
| QUrl | **[windowIconSource](/docs/classes/class_qsk_sub_window/#property-windowiconsource)**  |
| [QskGraphic](/docs/classes/class_qsk_graphic/) | **[windowIcon](/docs/classes/class_qsk_sub_window/#property-windowicon)**  |
| WindowButtons | **[windowButtons](/docs/classes/class_qsk_sub_window/#property-windowbuttons)**  |

## Public Types Documentation

### enum WindowButton

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MinimizeButton | 0x1|   |
| MaximizeButton | 0x2|   |
| CloseButton | 0x4|   |




## Public Signals Documentation

### signal decoratedChanged

```cpp
void decoratedChanged()
```


### signal windowTitleChanged

```cpp
void windowTitleChanged()
```


### signal windowTitleTextOptionsChanged

```cpp
void windowTitleTextOptionsChanged()
```


### signal windowIconChanged

```cpp
void windowIconChanged()
```


### signal windowIconSourceChanged

```cpp
void windowIconSourceChanged()
```


### signal windowButtonsChanged

```cpp
void windowButtonsChanged()
```


## Public Functions Documentation

### function QskSubWindow

```cpp
QskSubWindow(
    QQuickItem * parent =nullptr
)
```


### function ~QskSubWindow

```cpp
~QskSubWindow() override
```


### function setDecorated

```cpp
void setDecorated(
    bool on
)
```


### function isDecorated

```cpp
bool isDecorated() const
```


### function setWindowTitleTextOptions

```cpp
void setWindowTitleTextOptions(
    const QskTextOptions & options
)
```


### function windowTitleTextOptions

```cpp
QskTextOptions windowTitleTextOptions() const
```


### function setWindowTitle

```cpp
void setWindowTitle(
    const QString & title
)
```


### function windowTitle

```cpp
QString windowTitle() const
```


### function setWindowIconSource

```cpp
void setWindowIconSource(
    const QString & url
)
```


### function setWindowIconSource

```cpp
void setWindowIconSource(
    const QUrl & url
)
```


### function windowIconSource

```cpp
QUrl windowIconSource() const
```


### function setWindowIcon

```cpp
void setWindowIcon(
    const QskGraphic & graphic
)
```


### function windowIcon

```cpp
QskGraphic windowIcon() const
```


### function hasWindowIcon

```cpp
bool hasWindowIcon() const
```


### function setWindowButtons

```cpp
void setWindowButtons(
    WindowButtons buttons
)
```


### function windowButtons

```cpp
WindowButtons windowButtons() const
```


### function setWindowButton

```cpp
void setWindowButton(
    WindowButton button,
    bool on =true
)
```


### function testWindowButton

```cpp
bool testWindowButton(
    WindowButton button
) const
```


### function titleBarRect

```cpp
QRectF titleBarRect() const
```


### function layoutRectForSize

```cpp
QRectF layoutRectForSize(
    const QSizeF & size
) const override
```


## Protected Functions Documentation

### function event

```cpp
bool event(
    QEvent * event
) override
```


### function updateLayout

```cpp
void updateLayout() override
```


### function layoutSizeHint

```cpp
QSizeF layoutSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const override
```


### function itemChange

```cpp
void itemChange(
    QQuickItem::ItemChange change,
    const QQuickItem::ItemChangeData & value
) override
```


## Public Property Documentation

### property decorated

```cpp
bool decorated;
```


### property windowTitle

```cpp
QString windowTitle;
```


### property windowTitleTextOptions

```cpp
QskTextOptions windowTitleTextOptions;
```


### property windowIconSource

```cpp
QUrl windowIconSource;
```


### property windowIcon

```cpp
QskGraphic windowIcon;
```


### property windowButtons

```cpp
WindowButtons windowButtons;
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET