---
title: QskPageIndicatorSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskPageIndicatorSkinlet/#enum-noderole)** { PanelRole, BulletsRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskPageIndicatorSkinlet](/docs/classes/classQskPageIndicatorSkinlet/#function-qskpageindicatorskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskPageIndicatorSkinlet](/docs/classes/classQskPageIndicatorSkinlet/#function-~qskpageindicatorskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskPageIndicatorSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskPageIndicatorSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & ) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskPageIndicatorSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |
| BulletsRole | |   |




## Public Functions Documentation

### function QskPageIndicatorSkinlet

```cpp
Q_INVOKABLE QskPageIndicatorSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskPageIndicatorSkinlet

```cpp
~QskPageIndicatorSkinlet() override
```


### function subControlRect

```cpp
QRectF subControlRect(
    const QskSkinnable * skinnable,
    const QRectF & contentsRect,
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

Updated on  3 February 2021 at 15:05:42 CET