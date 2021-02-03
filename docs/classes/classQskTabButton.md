---
title: QskTabButton
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskAbstractButton

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskTabButton/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[Text](/docs/classes/classQskTabButton/#subcontrol-text)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTabButton](/docs/classes/classQskTabButton/#function-qsktabbutton)**(QQuickItem * parent =nullptr) |
| | **[QskTabButton](/docs/classes/classQskTabButton/#function-qsktabbutton)**(const QString & text, QQuickItem * parent =nullptr) |
| | **[~QskTabButton](/docs/classes/classQskTabButton/#function-~qsktabbutton)**() override |
| void | **[setText](/docs/classes/classQskTabButton/#function-settext)**(const QString & text) |
| QString | **[text](/docs/classes/classQskTabButton/#function-text)**() const |
| void | **[setTextOptions](/docs/classes/classQskTabButton/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/classQskTabButton/#function-textoptions)**() const |
| QRectF | **[layoutRectForSize](/docs/classes/classQskTabButton/#function-layoutrectforsize)**(const QSizeF & size) const override |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/classQskTabButton/#function-effectiveplacement)**() const override |
| const QskTabBar * | **[tabBar](/docs/classes/classQskTabButton/#function-tabbar)**() const |
| QskTabBar * | **[tabBar](/docs/classes/classQskTabButton/#function-tabbar)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/classQskTabButton/#function-changeevent)**(QEvent * event) override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[textChanged](/docs/classes/classQskTabButton/#signal-textchanged)**(const QString & text) |
| void | **[textOptionsChanged](/docs/classes/classQskTabButton/#signal-textoptionschanged)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/classQskTabButton/#property-text)**  |
| QskTextOptions | **[textOptions](/docs/classes/classQskTabButton/#property-textoptions)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol Text




## Public Functions Documentation

### function QskTabButton

```cpp
QskTabButton(
    QQuickItem * parent =nullptr
)
```


### function QskTabButton

```cpp
QskTabButton(
    const QString & text,
    QQuickItem * parent =nullptr
)
```


### function ~QskTabButton

```cpp
~QskTabButton() override
```


### function setText

```cpp
void setText(
    const QString & text
)
```


### function text

```cpp
QString text() const
```


### function setTextOptions

```cpp
void setTextOptions(
    const QskTextOptions & options
)
```


### function textOptions

```cpp
QskTextOptions textOptions() const
```


### function layoutRectForSize

```cpp
QRectF layoutRectForSize(
    const QSizeF & size
) const override
```


### function effectivePlacement

```cpp
QskAspect::Placement effectivePlacement() const override
```


### function tabBar

```cpp
const QskTabBar * tabBar() const
```


### function tabBar

```cpp
QskTabBar * tabBar()
```


## Protected Functions Documentation

### function changeEvent

```cpp
void changeEvent(
    QEvent * event
) override
```


## Public Signals Documentation

### signal textChanged

```cpp
void textChanged(
    const QString & text
)
```


### signal textOptionsChanged

```cpp
void textOptionsChanged()
```


## Public Property Documentation

### property text

```cpp
QString text;
```


### property textOptions

```cpp
QskTextOptions textOptions;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET