---
title: QskSeparator
summary: Separates a group of items from adjacent items. 
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Separates a group of items from adjacent items.  [More...](#detailed-description)


`#include <QskSeparator.h>`

Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskSeparator/#subcontrol-panel)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskSeparator](/docs/classes/classQskSeparator/#function-qskseparator)**(QQuickItem * parent =nullptr) |
| | **[QskSeparator](/docs/classes/classQskSeparator/#function-qskseparator)**(Qt::Orientation orientation, QQuickItem * parent =nullptr) |
| | **[~QskSeparator](/docs/classes/classQskSeparator/#function-~qskseparator)**() override |
| void | **[setOrientation](/docs/classes/classQskSeparator/#function-setorientation)**(Qt::Orientation orientation) |
| Qt::Orientation | **[orientation](/docs/classes/classQskSeparator/#function-orientation)**() const |
| void | **[setExtent](/docs/classes/classQskSeparator/#function-setextent)**(qreal extent) |
| void | **[resetExtent](/docs/classes/classQskSeparator/#function-resetextent)**() |
| qreal | **[extent](/docs/classes/classQskSeparator/#function-extent)**() const |
| QskAspect::Placement | **[effectivePlacement](/docs/classes/classQskSeparator/#function-effectiveplacement)**() const override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[orientationChanged](/docs/classes/classQskSeparator/#signal-orientationchanged)**(Qt::Orientation ) |
| void | **[extentChanged](/docs/classes/classQskSeparator/#signal-extentchanged)**(qreal ) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::Orientation | **[orientation](/docs/classes/classQskSeparator/#property-orientation)** <br>Orientation of the separator - Qt::Horizontal (the default) or Qt::Vertical.  |
| qreal | **[extent](/docs/classes/classQskSeparator/#property-extent)**  |

## Detailed Description

```cpp
class QskSeparator;
```

Separates a group of items from adjacent items. 

**Par**: 

  * Subcontrols:

[QskSeparator::Panel](/docs/classes/classQskSeparator/#subcontrol-panel)
  * Default Skinlet:

QskSeparatorSkinlet 


[QskSeparator](/docs/classes/classQskSeparator/) is used to visually distinguish between groups of items. It can be used in horizontal or vertical direction by setting the orientation property to Qt::Vertical or Qt::Horizontal, respectively.

## Public Subcontrols Documentation

### subcontrol Panel




**See**: QskSeparatorSkinlet 

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


**See**: [orientation](/docs/classes/classQskSeparator/#property-orientation)

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


**See**: [orientation](/docs/classes/classQskSeparator/#property-orientation)

Set the orientation of the separator 


### function orientation

```cpp
Qt::Orientation orientation() const
```


**Return**: Value of the [orientation](/docs/classes/classQskSeparator/#property-orientation) property 

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
QskAspect::Placement effectivePlacement() const override
```


## Public Signals Documentation

### signal orientationChanged

```cpp
void orientationChanged(
    Qt::Orientation 
)
```


**See**: [orientation](/docs/classes/classQskSeparator/#property-orientation)

The orientation of the layout has changed 


### signal extentChanged

```cpp
void extentChanged(
    qreal 
)
```


## Public Property Documentation

### property orientation

```cpp
Qt::Orientation orientation;
```

Orientation of the separator - Qt::Horizontal (the default) or Qt::Vertical. 

**Par**: Access functions:

[orientation()](/docs/classes/classQskSeparator/#property-orientation), [setOrientation()](/docs/classes/classQskSeparator/#function-setorientation), [orientationChanged()](/docs/classes/classQskSeparator/#signal-orientationchanged)

A separator is often represented by some line - for a orientation of Qt::Horizontal it might be a vertical line.


### property extent

```cpp
qreal extent;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET