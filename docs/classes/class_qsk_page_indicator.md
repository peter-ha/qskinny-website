---
title: QskPageIndicator
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from [QskControl](/docs/classes/class_qsk_control/), [QskQuickItem](/docs/classes/class_qsk_quick_item/), [QskSkinnable](/docs/classes/class_qsk_skinnable/), QQuickItem

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setCount](/docs/classes/class_qsk_page_indicator/#slot-setcount)**(int count) |
| void | **[setCurrentIndex](/docs/classes/class_qsk_page_indicator/#slot-setcurrentindex)**(qreal index) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[countChanged](/docs/classes/class_qsk_page_indicator/#signal-countchanged)**(int ) |
| void | **[currentIndexChanged](/docs/classes/class_qsk_page_indicator/#signal-currentindexchanged)**(qreal ) |
| void | **[orientationChanged](/docs/classes/class_qsk_page_indicator/#signal-orientationchanged)**(Qt::Orientation ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskPageIndicator](/docs/classes/class_qsk_page_indicator/#function-qskpageindicator)**(QQuickItem * parent =nullptr) |
| | **[QskPageIndicator](/docs/classes/class_qsk_page_indicator/#function-qskpageindicator)**(int count, QQuickItem * parent =nullptr) |
| | **[~QskPageIndicator](/docs/classes/class_qsk_page_indicator/#function-~qskpageindicator)**() override |
| int | **[count](/docs/classes/class_qsk_page_indicator/#function-count)**() const |
| qreal | **[currentIndex](/docs/classes/class_qsk_page_indicator/#function-currentindex)**() const |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_page_indicator/#function-orientation)**() const |
| void | **[setOrientation](/docs/classes/class_qsk_page_indicator/#function-setorientation)**(Qt::Orientation orientation) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| int | **[count](/docs/classes/class_qsk_page_indicator/#property-count)**  |
| qreal | **[currentIndex](/docs/classes/class_qsk_page_indicator/#property-currentindex)**  |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_page_indicator/#property-orientation)**  |

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

Updated on 26 January 2021 at 09:44:54 CET