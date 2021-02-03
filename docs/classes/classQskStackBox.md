---
title: QskStackBox
layout: docs

---


**Module:** **[Container](/docs/modules/group__container/)**



Inherits from [QskIndexedLayoutBox](/docs/classes/classQskIndexedLayoutBox/), QskBox

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskStackBox](/docs/classes/classQskStackBox/#function-qskstackbox)**(QQuickItem * parent =nullptr) |
| | **[QskStackBox](/docs/classes/classQskStackBox/#function-qskstackbox)**(bool autoAddChildren, QQuickItem * parent =nullptr) |
| | **[~QskStackBox](/docs/classes/classQskStackBox/#function-~qskstackbox)**() override |
| bool | **[isEmpty](/docs/classes/classQskStackBox/#function-isempty)**() const |
| int | **[itemCount](/docs/classes/classQskStackBox/#function-itemcount)**() const |
| QQuickItem * | **[itemAtIndex](/docs/classes/classQskStackBox/#function-itematindex)**(int index) const |
| int | **[indexOf](/docs/classes/classQskStackBox/#function-indexof)**(const QQuickItem * item) const |
| void | **[addItem](/docs/classes/classQskStackBox/#function-additem)**(QQuickItem * item) |
| void | **[addItem](/docs/classes/classQskStackBox/#function-additem)**(QQuickItem * item, Qt::Alignment alignment) |
| void | **[insertItem](/docs/classes/classQskStackBox/#function-insertitem)**(int index, QQuickItem * item) |
| void | **[insertItem](/docs/classes/classQskStackBox/#function-insertitem)**(int index, QQuickItem * item, Qt::Alignment alignment) |
| void | **[removeItem](/docs/classes/classQskStackBox/#function-removeitem)**(const QQuickItem * item) |
| void | **[removeAt](/docs/classes/classQskStackBox/#function-removeat)**(int index) |
| QQuickItem * | **[currentItem](/docs/classes/classQskStackBox/#function-currentitem)**() const |
| int | **[currentIndex](/docs/classes/classQskStackBox/#function-currentindex)**() const |
| void | **[setDefaultAlignment](/docs/classes/classQskStackBox/#function-setdefaultalignment)**(Qt::Alignment alignment) |
| Qt::Alignment | **[defaultAlignment](/docs/classes/classQskStackBox/#function-defaultalignment)**() const |
| void | **[setAnimator](/docs/classes/classQskStackBox/#function-setanimator)**(QskStackBoxAnimator * animator) |
| const QskStackBoxAnimator * | **[animator](/docs/classes/classQskStackBox/#function-animator)**() const |
| QskStackBoxAnimator * | **[animator](/docs/classes/classQskStackBox/#function-animator)**() |
| QRectF | **[geometryForItemAt](/docs/classes/classQskStackBox/#function-geometryforitemat)**(int index) const |
| void | **[dump](/docs/classes/classQskStackBox/#function-dump)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/classQskStackBox/#function-event)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/classQskStackBox/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/classQskStackBox/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |
| QskStackBoxAnimator * | **[effectiveAnimator](/docs/classes/classQskStackBox/#function-effectiveanimator)**() |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[defaultAlignmentChanged](/docs/classes/classQskStackBox/#signal-defaultalignmentchanged)**(Qt::Alignment ) |
| void | **[currentIndexChanged](/docs/classes/classQskStackBox/#signal-currentindexchanged)**(int index) |
| void | **[currentItemChanged](/docs/classes/classQskStackBox/#signal-currentitemchanged)**(QQuickItem * ) |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setCurrentIndex](/docs/classes/classQskStackBox/#slot-setcurrentindex)**(int index) |
| void | **[setCurrentItem](/docs/classes/classQskStackBox/#slot-setcurrentitem)**(const QQuickItem * item) |
| void | **[clear](/docs/classes/classQskStackBox/#slot-clear)**(bool autoDelete =false) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| int | **[currentIndex](/docs/classes/classQskStackBox/#property-currentindex)**  |
| QQuickItem * | **[currentItem](/docs/classes/classQskStackBox/#property-currentitem)**  |

## Public Functions Documentation

### function QskStackBox

```cpp
explicit QskStackBox(
    QQuickItem * parent =nullptr
)
```


### function QskStackBox

```cpp
QskStackBox(
    bool autoAddChildren,
    QQuickItem * parent =nullptr
)
```


### function ~QskStackBox

```cpp
~QskStackBox() override
```


### function isEmpty

```cpp
inline bool isEmpty() const
```


### function itemCount

```cpp
int itemCount() const
```


### function itemAtIndex

```cpp
QQuickItem * itemAtIndex(
    int index
) const
```


### function indexOf

```cpp
int indexOf(
    const QQuickItem * item
) const
```


### function addItem

```cpp
void addItem(
    QQuickItem * item
)
```


### function addItem

```cpp
void addItem(
    QQuickItem * item,
    Qt::Alignment alignment
)
```


### function insertItem

```cpp
void insertItem(
    int index,
    QQuickItem * item
)
```


### function insertItem

```cpp
void insertItem(
    int index,
    QQuickItem * item,
    Qt::Alignment alignment
)
```


### function removeItem

```cpp
void removeItem(
    const QQuickItem * item
)
```


### function removeAt

```cpp
void removeAt(
    int index
)
```


### function currentItem

```cpp
QQuickItem * currentItem() const
```


### function currentIndex

```cpp
int currentIndex() const
```


### function setDefaultAlignment

```cpp
void setDefaultAlignment(
    Qt::Alignment alignment
)
```


### function defaultAlignment

```cpp
Qt::Alignment defaultAlignment() const
```


### function setAnimator

```cpp
void setAnimator(
    QskStackBoxAnimator * animator
)
```


### function animator

```cpp
const QskStackBoxAnimator * animator() const
```


### function animator

```cpp
QskStackBoxAnimator * animator()
```


### function geometryForItemAt

```cpp
QRectF geometryForItemAt(
    int index
) const
```


### function dump

```cpp
void dump() const
```


## Protected Functions Documentation

### function event

```cpp
bool event(
    QEvent * event
) override
```


### function updateLayout

```cpp
void updateLayout() override
```


### function layoutSizeHint

```cpp
QSizeF layoutSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const override
```


### function effectiveAnimator

```cpp
QskStackBoxAnimator * effectiveAnimator()
```


## Public Signals Documentation

### signal defaultAlignmentChanged

```cpp
void defaultAlignmentChanged(
    Qt::Alignment 
)
```


### signal currentIndexChanged

```cpp
void currentIndexChanged(
    int index
)
```


### signal currentItemChanged

```cpp
void currentItemChanged(
    QQuickItem * 
)
```


## Public Slots Documentation

### slot setCurrentIndex

```cpp
void setCurrentIndex(
    int index
)
```


### slot setCurrentItem

```cpp
void setCurrentItem(
    const QQuickItem * item
)
```


### slot clear

```cpp
void clear(
    bool autoDelete =false
)
```


## Public Property Documentation

### property currentIndex

```cpp
int currentIndex;
```


### property currentItem

```cpp
QQuickItem * currentItem;
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET