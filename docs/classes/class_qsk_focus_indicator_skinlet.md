---
title: QskFocusIndicatorSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_focus_indicator_skinlet/#enum-noderole)** { FrameRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskFocusIndicatorSkinlet](/docs/classes/class_qsk_focus_indicator_skinlet/#function-qskfocusindicatorskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskFocusIndicatorSkinlet](/docs/classes/class_qsk_focus_indicator_skinlet/#function-~qskfocusindicatorskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_focus_indicator_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_focus_indicator_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

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

Updated on 26 January 2021 at 09:44:54 CET