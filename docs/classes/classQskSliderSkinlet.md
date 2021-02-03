---
title: QskSliderSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskSliderSkinlet/#enum-noderole)** { PanelRole, GrooveRole, FillRole, HandleRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSliderSkinlet](/docs/classes/classQskSliderSkinlet/#function-qsksliderskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskSliderSkinlet](/docs/classes/classQskSliderSkinlet/#function-~qsksliderskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskSliderSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & rect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskSliderSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & ) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskSliderSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |
| GrooveRole | |   |
| FillRole | |   |
| HandleRole | |   |




## Public Functions Documentation

### function QskSliderSkinlet

```cpp
Q_INVOKABLE QskSliderSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskSliderSkinlet

```cpp
~QskSliderSkinlet() override
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