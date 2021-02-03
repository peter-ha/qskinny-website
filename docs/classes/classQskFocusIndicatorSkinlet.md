---
title: QskFocusIndicatorSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskFocusIndicatorSkinlet/#enum-noderole)** { FrameRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskFocusIndicatorSkinlet](/docs/classes/classQskFocusIndicatorSkinlet/#function-qskfocusindicatorskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskFocusIndicatorSkinlet](/docs/classes/classQskFocusIndicatorSkinlet/#function-~qskfocusindicatorskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskFocusIndicatorSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskFocusIndicatorSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FrameRole | |   |




## Public Functions Documentation

### function QskFocusIndicatorSkinlet

```cpp
Q_INVOKABLE QskFocusIndicatorSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskFocusIndicatorSkinlet

```cpp
~QskFocusIndicatorSkinlet() override
```


### function subControlRect

```cpp
QRectF subControlRect(
    const QskSkinnable * skinnable,
    const QRectF & contentsRect,
    QskAspect::Subcontrol subControl
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