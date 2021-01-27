---
title: QskSeparatorSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group___skinlets/)**



Inherits from [QskSkinlet](/docs/classes/class_qsk_skinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/class_qsk_separator_skinlet/#enum-noderole)** { PanelRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSeparatorSkinlet](/docs/classes/class_qsk_separator_skinlet/#function-qskseparatorskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskSeparatorSkinlet](/docs/classes/class_qsk_separator_skinlet/#function-~qskseparatorskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/class_qsk_separator_skinlet/#function-subcontrolrect)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, const QRectF & rect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/class_qsk_separator_skinlet/#function-sizehint)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, Qt::SizeHint which, const QSizeF & ) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/class_qsk_separator_skinlet/#function-updatesubnode)**(const [QskSkinnable](/docs/classes/class_qsk_skinnable/) * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PanelRole | |   |




## Public Functions Documentation

### function QskSeparatorSkinlet

```cpp
Q_INVOKABLE QskSeparatorSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskSeparatorSkinlet

```cpp
~QskSeparatorSkinlet() override
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

Updated on 26 January 2021 at 09:44:54 CET