---
title: QskBox
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

Inherited by [QskDialogButtonBox](/docs/classes/classQskDialogButtonBox/), [QskGridBox](/docs/classes/classQskGridBox/), [QskIndexedLayoutBox](/docs/classes/classQskIndexedLayoutBox/), [QskInputPanelBox](/docs/classes/classQskInputPanelBox/), [QskInputPredictionBar](/docs/classes/classQskInputPredictionBar/), [QskTabBar](/docs/classes/classQskTabBar/), [QskVirtualKeyboard](/docs/classes/classQskVirtualKeyboard/)

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskBox/#subcontrol-panel)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskBox](/docs/classes/classQskBox/#function-qskbox)**(QQuickItem * parent =nullptr) |
| | **[QskBox](/docs/classes/classQskBox/#function-qskbox)**(bool hasPanel, QQuickItem * parent =nullptr) |
| | **[~QskBox](/docs/classes/classQskBox/#function-~qskbox)**() override |
| void | **[setPanel](/docs/classes/classQskBox/#function-setpanel)**(bool on) |
| bool | **[hasPanel](/docs/classes/classQskBox/#function-haspanel)**() const |
| void | **[setPadding](/docs/classes/classQskBox/#function-setpadding)**(qreal padding) |
| void | **[setPadding](/docs/classes/classQskBox/#function-setpadding)**(const QMarginsF & padding) |
| void | **[resetPadding](/docs/classes/classQskBox/#function-resetpadding)**() |
| QMarginsF | **[padding](/docs/classes/classQskBox/#function-padding)**() const |
| QRectF | **[layoutRectForSize](/docs/classes/classQskBox/#function-layoutrectforsize)**(const QSizeF & size) const override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[panelChanged](/docs/classes/classQskBox/#signal-panelchanged)**(bool ) |
| void | **[paddingChanged](/docs/classes/classQskBox/#signal-paddingchanged)**(const QMarginsF & ) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[panel](/docs/classes/classQskBox/#property-panel)**  |
| QskMargins | **[padding](/docs/classes/classQskBox/#property-padding)**  |

## Public Subcontrols Documentation

### subcontrol Panel




## Public Functions Documentation

### function QskBox

```cpp
QskBox(
    QQuickItem * parent =nullptr
)
```


### function QskBox

```cpp
QskBox(
    bool hasPanel,
    QQuickItem * parent =nullptr
)
```


### function ~QskBox

```cpp
~QskBox() override
```


### function setPanel

```cpp
void setPanel(
    bool on
)
```


### function hasPanel

```cpp
bool hasPanel() const
```


### function setPadding

```cpp
void setPadding(
    qreal padding
)
```


### function setPadding

```cpp
void setPadding(
    const QMarginsF & padding
)
```


### function resetPadding

```cpp
void resetPadding()
```


### function padding

```cpp
QMarginsF padding() const
```


### function layoutRectForSize

```cpp
QRectF layoutRectForSize(
    const QSizeF & size
) const override
```


## Public Signals Documentation

### signal panelChanged

```cpp
void panelChanged(
    bool 
)
```


### signal paddingChanged

```cpp
void paddingChanged(
    const QMarginsF & 
)
```


## Public Property Documentation

### property panel

```cpp
bool panel;
```


### property padding

```cpp
QskMargins padding;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET