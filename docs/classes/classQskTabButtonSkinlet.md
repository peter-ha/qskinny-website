---
title: QskTabButtonSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskTabButtonSkinlet/#enum-noderole)** { PanelRole, TextRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskTabButtonSkinlet](/docs/classes/classQskTabButtonSkinlet/#function-qsktabbuttonskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskTabButtonSkinlet](/docs/classes/classQskTabButtonSkinlet/#function-~qsktabbuttonskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskTabButtonSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & rect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskTabButtonSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & ) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskTabButtonSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |
| TextRole | |   |




## Public Functions Documentation

### function QskTabButtonSkinlet

```cpp
Q_INVOKABLE QskTabButtonSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskTabButtonSkinlet

```cpp
~QskTabButtonSkinlet() override
```


### function subControlRect

```cpp
QRectF subControlRect(
    const QskSkinnable * skinnable,
    const QRectF & rect,
    QskAspect::Subcontrol subControl
) const override
```


### function sizeHint

```cpp
QSizeF sizeHint(
    const QskSkinnable * skinnable,
    Qt::SizeHint which,
    const QSizeF & 
) const override
```


## Protected Functions Documentation

### function updateSubNode

```cpp
QSGNode * updateSubNode(
    const QskSkinnable * skinnable,
    quint8 nodeRole,
    QSGNode * node
) const override
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET