---
title: QskBoxSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_box_skinlet/#enum-noderole)** { PanelRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskBoxSkinlet](/docs/classes/class_qsk_box_skinlet/#function-qskboxskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskBoxSkinlet](/docs/classes/class_qsk_box_skinlet/#function-~qskboxskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_box_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/class_qsk_box_skinlet/#function-sizehint)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, Qt::SizeHint which, const QSizeF & constraint) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_box_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |




## Public Functions Documentation

### function QskBoxSkinlet

```cpp
Q_INVOKABLE QskBoxSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskBoxSkinlet

```cpp
~QskBoxSkinlet() override
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

Updated on 26 January 2021 at 09:44:54 CET