---
title: QskProgressBarSkinlet
layout: docs

---




Inherits from [QskSkinlet](/docs/classes/classQskSkinlet/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[NodeRole](/docs/classes/classQskProgressBarSkinlet/#enum-noderole)** { GrooveRole, BarRole, RoleCount} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| Q_INVOKABLE | **[QskProgressBarSkinlet](/docs/classes/classQskProgressBarSkinlet/#function-qskprogressbarskinlet)**(QskSkin * skin =nullptr) |
| | **[~QskProgressBarSkinlet](/docs/classes/classQskProgressBarSkinlet/#function-~qskprogressbarskinlet)**() override |
| QRectF | **[subControlRect](/docs/classes/classQskProgressBarSkinlet/#function-subcontrolrect)**(const QskSkinnable * skinnable, const QRectF & contentsRect, QskAspect::Subcontrol subControl) const override |
| QSizeF | **[sizeHint](/docs/classes/classQskProgressBarSkinlet/#function-sizehint)**(const QskSkinnable * skinnable, Qt::SizeHint which, const QSizeF & ) const override |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QSGNode * | **[updateSubNode](/docs/classes/classQskProgressBarSkinlet/#function-updatesubnode)**(const QskSkinnable * skinnable, quint8 nodeRole, QSGNode * node) const override |

## Public Types Documentation

### enum NodeRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| GrooveRole | |   |
| BarRole | |   |
| RoleCount | |   |




## Public Functions Documentation

### function QskProgressBarSkinlet

```cpp
Q_INVOKABLE QskProgressBarSkinlet(
    QskSkin * skin =nullptr
)
```


### function ~QskProgressBarSkinlet

```cpp
~QskProgressBarSkinlet() override
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

Updated on  3 February 2021 at 15:05:40 CET