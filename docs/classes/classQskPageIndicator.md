---
title: QskPageIndicator
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from [QskControl](/docs/classes/classQskControl/), [QskQuickItem](/docs/classes/classQskQuickItem/), QskSkinnable

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Panel](/docs/classes/classQskPageIndicator/#subcontrol-panel)**  |
| const QskAspect::Subcontrol | **[Bullet](/docs/classes/classQskPageIndicator/#subcontrol-bullet)**  |
| const QskAspect::Subcontrol | **[Highlighted](/docs/classes/classQskPageIndicator/#subcontrol-highlighted)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskPageIndicator](/docs/classes/classQskPageIndicator/#function-qskpageindicator)**(QQuickItem * parent =nullptr) |
| | **[QskPageIndicator](/docs/classes/classQskPageIndicator/#function-qskpageindicator)**(int count, QQuickItem * parent =nullptr) |
| | **[~QskPageIndicator](/docs/classes/classQskPageIndicator/#function-~qskpageindicator)**() override |
| int | **[count](/docs/classes/classQskPageIndicator/#function-count)**() const |
| qreal | **[currentIndex](/docs/classes/classQskPageIndicator/#function-currentindex)**() const |
| Qt::Orientation | **[orientation](/docs/classes/classQskPageIndicator/#function-orientation)**() const |
| void | **[setOrientation](/docs/classes/classQskPageIndicator/#function-setorientation)**(Qt::Orientation orientation) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[countChanged](/docs/classes/classQskPageIndicator/#signal-countchanged)**(int ) |
| void | **[currentIndexChanged](/docs/classes/classQskPageIndicator/#signal-currentindexchanged)**(qreal ) |
| void | **[orientationChanged](/docs/classes/classQskPageIndicator/#signal-orientationchanged)**(Qt::Orientation ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setCount](/docs/classes/classQskPageIndicator/#slot-setcount)**(int count) |
| void | **[setCurrentIndex](/docs/classes/classQskPageIndicator/#slot-setcurrentindex)**(qreal index) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| int | **[count](/docs/classes/classQskPageIndicator/#property-count)**  |
| qreal | **[currentIndex](/docs/classes/classQskPageIndicator/#property-currentindex)**  |
| Qt::Orientation | **[orientation](/docs/classes/classQskPageIndicator/#property-orientation)**  |

## Public Subcontrols Documentation

### subcontrol Panel




### subcontrol Bullet




### subcontrol Highlighted




## Public Functions Documentation

### function QskPageIndicator

```cpp
QskPageIndicator(
    QQuickItem * parent =nullptr
)
```


### function QskPageIndicator

```cpp
QskPageIndicator(
    int count,
    QQuickItem * parent =nullptr
)
```


### function ~QskPageIndicator

```cpp
~QskPageIndicator() override
```


### function count

```cpp
int count() const
```


### function currentIndex

```cpp
qreal currentIndex() const
```


### function orientation

```cpp
Qt::Orientation orientation() const
```


### function setOrientation

```cpp
void setOrientation(
    Qt::Orientation orientation
)
```


## Public Signals Documentation

### signal countChanged

```cpp
void countChanged(
    int 
)
```


### signal currentIndexChanged

```cpp
void currentIndexChanged(
    qreal 
)
```


### signal orientationChanged

```cpp
void orientationChanged(
    Qt::Orientation 
)
```


## Public Slots Documentation

### slot setCount

```cpp
void setCount(
    int count
)
```


### slot setCurrentIndex

```cpp
void setCurrentIndex(
    qreal index
)
```


## Public Property Documentation

### property count

```cpp
int count;
```


### property currentIndex

```cpp
qreal currentIndex;
```


### property orientation

```cpp
Qt::Orientation orientation;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET