---
title: QskSeparator
summary: Separates a group of items from adjacent items. 
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Separates a group of items from adjacent items.  [More...](#detailed-description)


`#include [/home/peter/dev/qskinny/src/controls/QskSeparator.h](<QskSeparator.h>)`

Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[orientationChanged](/docs/classes/class_qsk_separator/#signal-orientationchanged)**(Qt::Orientation ) |
| void | **[extentChanged](/docs/classes/class_qsk_separator/#signal-extentchanged)**(qreal ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSeparator](/docs/classes/class_qsk_separator/#function-qskseparator)**(QQuickItem * parent =nullptr) |
| | **[QskSeparator](/docs/classes/class_qsk_separator/#function-qskseparator)**(Qt::Orientation orientation, QQuickItem * parent =nullptr) |
| | **[~QskSeparator](/docs/classes/class_qsk_separator/#function-~qskseparator)**() override |
| void | **[setOrientation](/docs/classes/class_qsk_separator/#function-setorientation)**(Qt::Orientation orientation) |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_separator/#function-orientation)**() const |
| void | **[setExtent](/docs/classes/class_qsk_separator/#function-setextent)**(qreal extent) |
| void | **[resetExtent](/docs/classes/class_qsk_separator/#function-resetextent)**() |
| qreal | **[extent](/docs/classes/class_qsk_separator/#function-extent)**() const |
| virtual QskAspect::Placement | **[effectivePlacement](/docs/classes/class_qsk_separator/#function-effectiveplacement)**() const override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_separator/#property-orientation)** <br>Orientation of the separator - Qt::Horizontal (the default) or Qt::Vertical.  |
| qreal | **[extent](/docs/classes/class_qsk_separator/#property-extent)**  |

## Detailed Description

```cpp
class QskSeparator;
```

Separates a group of items from adjacent items. 

**Par**: 

  * Subcontrols:

QskSeparator::Panel 
  * Default Skinlet:

QskSeparatorSkinlet 


[QskSeparator](/docs/classes/class_qsk_separator/) is used to visually distinguish between groups of items. It can be used in horizontal or vertical direction by setting the orientation property to Qt::Vertical or Qt::Horizontal, respectively.

## Public Signals Documentation

### signal orientationChanged

```cpp
void orientationChanged(
    Qt::Orientation 
)
```


**See**: [orientation](/docs/classes/class_qsk_separator/#property-orientation)

The orientation of the layout has changed 


### signal extentChanged

```cpp
void extentChanged(
    qreal 
)
```


## Public Functions Documentation

### function QskSeparator

```cpp
QskSeparator(
    QQuickItem * parent =nullptr
)
```


Constructs a horizontal separator with the given parent. 


### function QskSeparator

```cpp
QskSeparator(
    Qt::Orientation orientation,
    QQuickItem * parent =nullptr
)
```


**See**: [orientation](/docs/classes/class_qsk_separator/#property-orientation)

Constructs a separator with the given parent. The orientation parameter determines whether the separator is horizontal or vertical.


### function ~QskSeparator

```cpp
~QskSeparator() override
```


Destroys this separator. 


### function setOrientation

```cpp
void setOrientation(
    Qt::Orientation orientation
)
```


**Parameters**: 

  * **orientation** Qt::Vertical or Qt::Horizontal 


**See**: [orientation](/docs/classes/class_qsk_separator/#property-orientation)

Set the orientation of the separator 


### function orientation

```cpp
Qt::Orientation orientation() const
```


### function setExtent

```cpp
void setExtent(
    qreal extent
)
```


### function resetExtent

```cpp
void resetExtent()
```


### function extent

```cpp
qreal extent() const
```


### function effectivePlacement

```cpp
virtual QskAspect::Placement effectivePlacement() const override
```


**Reimplements**: [QskSkinnable::effectivePlacement](/docs/classes/class_qsk_skinnable/#function-effectiveplacement)


## Public Property Documentation

### property orientation

```cpp
Qt::Orientation orientation;
```

Orientation of the separator - Qt::Horizontal (the default) or Qt::Vertical. 

**Return**: Value of the [orientation](/docs/classes/class_qsk_separator/#property-orientation) property 

**Par**: Access functions:

[orientation()](/docs/classes/class_qsk_separator/#property-orientation), [setOrientation()](/docs/classes/class_qsk_separator/#function-setorientation), [orientationChanged()](/docs/classes/class_qsk_separator/#signal-orientationchanged)

A separator is often represented by some line - for a orientation of Qt::Horizontal it might be a vertical line.


### property extent

```cpp
qreal extent;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET