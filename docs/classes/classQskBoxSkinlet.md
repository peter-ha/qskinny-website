---
title: QskBoxSkinlet
layout: docs

---


**Module:** **[Skinlets](/docs/modules/group__Skinlets/)**



Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskBoxSkinlet/#enum-noderole)** { PanelRole} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskBoxSkinlet](/docs/classes/classQskBoxSkinlet/#function-qskboxskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskBoxSkinlet](/docs/classes/classQskBoxSkinlet/#function-~qskboxskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskBoxSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskBoxSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & constraint) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskBoxSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

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

Updated on  3 February 2021 at 15:05:42 CET