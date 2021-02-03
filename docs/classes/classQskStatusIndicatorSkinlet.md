---
title: QskStatusIndicatorSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskStatusIndicatorSkinlet/#enum-noderole)** { GraphicRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskStatusIndicatorSkinlet](/docs/classes/classQskStatusIndicatorSkinlet/#function-qskstatusindicatorskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskStatusIndicatorSkinlet](/docs/classes/classQskStatusIndicatorSkinlet/#function-~qskstatusindicatorskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskStatusIndicatorSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskStatusIndicatorSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & constraint) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskStatusIndicatorSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| GraphicRole | |   |




## Public Functions Documentation

### function QskStatusIndicatorSkinlet

```cpp
Q_INVOKABLE QskStatusIndicatorSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskStatusIndicatorSkinlet

```cpp
~QskStatusIndicatorSkinlet() override
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
    const QSizeF & constraint
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