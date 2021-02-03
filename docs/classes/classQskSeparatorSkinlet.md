---
title: QskSeparatorSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskSeparatorSkinlet/#enum-noderole)** { PanelRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskSeparatorSkinlet](/docs/classes/classQskSeparatorSkinlet/#function-qskseparatorskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskSeparatorSkinlet](/docs/classes/classQskSeparatorSkinlet/#function-~qskseparatorskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskSeparatorSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & rect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskSeparatorSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & ) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskSeparatorSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

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

Updated on  3 February 2021 at 15:05:42 CET