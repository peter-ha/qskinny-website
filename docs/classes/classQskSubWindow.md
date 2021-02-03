---
title: QskSubWindow
layout: docs

---


**Module:** **[Container](/docs/modules/group__container/)**



Inherits from QskPopup

Inherited by [QskDialogSubWindow](/docs/classes/classQskDialogSubWindow/)

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskSubWindow/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[TitleBar](/docs/classes/classQskSubWindow/#subcontrol-titlebar)**  |
| const QskAspect::Subcontrol | **[TitleBarSymbol](/docs/classes/classQskSubWindow/#subcontrol-titlebarsymbol)**  |
| const QskAspect::Subcontrol | **[TitleBarText](/docs/classes/classQskSubWindow/#subcontrol-titlebartext)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[WindowButton](/docs/classes/classQskSubWindow/#enum-windowbutton)** { MinimizeButton = 0x1, MaximizeButton = 0x2, CloseButton = 0x4} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSubWindow](/docs/classes/classQskSubWindow/#function-qsksubwindow)**(QQuickItem * parent =nullptr) |
| | **[~QskSubWindow](/docs/classes/classQskSubWindow/#function-~qsksubwindow)**() override |
| void | **[setDecorated](/docs/classes/classQskSubWindow/#function-setdecorated)**(bool on) |
| bool | **[isDecorated](/docs/classes/classQskSubWindow/#function-isdecorated)**() const |
| void | **[setWindowTitleTextOptions](/docs/classes/classQskSubWindow/#function-setwindowtitletextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[windowTitleTextOptions](/docs/classes/classQskSubWindow/#function-windowtitletextoptions)**() const |
| void | **[setWindowTitle](/docs/classes/classQskSubWindow/#function-setwindowtitle)**(const QString & title) |
| QString | **[windowTitle](/docs/classes/classQskSubWindow/#function-windowtitle)**() const |
| void | **[setWindowIconSource](/docs/classes/classQskSubWindow/#function-setwindowiconsource)**(const QString & url) |
| void | **[setWindowIconSource](/docs/classes/classQskSubWindow/#function-setwindowiconsource)**(const QUrl & url) |
| QUrl | **[windowIconSource](/docs/classes/classQskSubWindow/#function-windowiconsource)**() const |
| void | **[setWindowIcon](/docs/classes/classQskSubWindow/#function-setwindowicon)**(const [QskGraphic](/docs/classes/classQskGraphic/) & graphic) |
| [QskGraphic](/docs/classes/classQskGraphic/) | **[windowIcon](/docs/classes/classQskSubWindow/#function-windowicon)**() const |
| bool | **[hasWindowIcon](/docs/classes/classQskSubWindow/#function-haswindowicon)**() const |
| void | **[setWindowButtons](/docs/classes/classQskSubWindow/#function-setwindowbuttons)**(WindowButtons buttons) |
| WindowButtons | **[windowButtons](/docs/classes/classQskSubWindow/#function-windowbuttons)**() const |
| void | **[setWindowButton](/docs/classes/classQskSubWindow/#function-setwindowbutton)**(WindowButton button, bool on =true) |
| bool | **[testWindowButton](/docs/classes/classQskSubWindow/#function-testwindowbutton)**(WindowButton button) const |
| QRectF | **[titleBarRect](/docs/classes/classQskSubWindow/#function-titlebarrect)**() const |
| QRectF | **[layoutRectForSize](/docs/classes/classQskSubWindow/#function-layoutrectforsize)**(const QSizeF & size) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/classQskSubWindow/#function-event)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/classQskSubWindow/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/classQskSubWindow/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |
| void | **[itemChange](/docs/classes/classQskSubWindow/#function-itemchange)**(QQuickItem::ItemChange change, const QQuickItem::ItemChangeData & value) override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[decoratedChanged](/docs/classes/classQskSubWindow/#signal-decoratedchanged)**() |
| void | **[windowTitleChanged](/docs/classes/classQskSubWindow/#signal-windowtitlechanged)**() |
| void | **[windowTitleTextOptionsChanged](/docs/classes/classQskSubWindow/#signal-windowtitletextoptionschanged)**() |
| void | **[windowIconChanged](/docs/classes/classQskSubWindow/#signal-windowiconchanged)**() |
| void | **[windowIconSourceChanged](/docs/classes/classQskSubWindow/#signal-windowiconsourcechanged)**() |
| void | **[windowButtonsChanged](/docs/classes/classQskSubWindow/#signal-windowbuttonschanged)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[decorated](/docs/classes/classQskSubWindow/#property-decorated)**  |
| QString | **[windowTitle](/docs/classes/classQskSubWindow/#property-windowtitle)**  |
| QskTextOptions | **[windowTitleTextOptions](/docs/classes/classQskSubWindow/#property-windowtitletextoptions)**  |
| QUrl | **[windowIconSource](/docs/classes/classQskSubWindow/#property-windowiconsource)**  |
| [QskGraphic](/docs/classes/classQskGraphic/) | **[windowIcon](/docs/classes/classQskSubWindow/#property-windowicon)**  |
| WindowButtons | **[windowButtons](/docs/classes/classQskSubWindow/#property-windowbuttons)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol TitleBar




### subcontrol TitleBarSymbol




### subcontrol TitleBarText




## Public Types Documentation

### enum WindowButton

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MinimizeButton | 0x1|   |
| MaximizeButton | 0x2|   |
| CloseButton | 0x4|   |




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

Updated on  3 February 2021 at 15:05:43 CET