---
title: QskTabButton
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskAbstractButton

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[textChanged](/docs/classes/class_qsk_tab_button/#signal-textchanged)**(const QString & text) |
| void | **[textOptionsChanged](/docs/classes/class_qsk_tab_button/#signal-textoptionschanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskTabButton](/docs/classes/class_qsk_tab_button/#function-qsktabbutton)**(QQuickItem * parent =nullptr) |
| | **[QskTabButton](/docs/classes/class_qsk_tab_button/#function-qsktabbutton)**(const QString & text, QQuickItem * parent =nullptr) |
| | **[~QskTabButton](/docs/classes/class_qsk_tab_button/#function-~qsktabbutton)**() override |
| void | **[setText](/docs/classes/class_qsk_tab_button/#function-settext)**(const QString & text) |
| QString | **[text](/docs/classes/class_qsk_tab_button/#function-text)**() const |
| void | **[setTextOptions](/docs/classes/class_qsk_tab_button/#function-settextoptions)**(const QskTextOptions & options) |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_tab_button/#function-textoptions)**() const |
| QRectF | **[layoutRectForSize](/docs/classes/class_qsk_tab_button/#function-layoutrectforsize)**(const QSizeF & size) const override |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/class_qsk_tab_button/#function-effectiveplacement)**() const override |
| const QskTabBar * | **[tabBar](/docs/classes/class_qsk_tab_button/#function-tabbar)**() const |
| QskTabBar * | **[tabBar](/docs/classes/class_qsk_tab_button/#function-tabbar)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[changeEvent](/docs/classes/class_qsk_tab_button/#function-changeevent)**(QEvent * event) override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| QString | **[text](/docs/classes/class_qsk_tab_button/#property-text)**  |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_tab_button/#property-textoptions)**  |

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

Updated on 26 January 2021 at 09:44:54 CET