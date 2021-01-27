---
title: QskStackBox
layout: docs

---


**Module:** **[Container](/docs/modules/group___container/)**



Inherits from [QskIndexedLayoutBox](/docs/classes/class_qsk_indexed_layout_box/), QskBox

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setCurrentIndex](/docs/classes/class_qsk_stack_box/#slot-setcurrentindex)**(int index) |
| void | **[setCurrentItem](/docs/classes/class_qsk_stack_box/#slot-setcurrentitem)**(const QQuickItem * item) |
| void | **[clear](/docs/classes/class_qsk_stack_box/#slot-clear)**(bool autoDelete =false) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[defaultAlignmentChanged](/docs/classes/class_qsk_stack_box/#signal-defaultalignmentchanged)**(Qt::Alignment ) |
| void | **[currentIndexChanged](/docs/classes/class_qsk_stack_box/#signal-currentindexchanged)**(int index) |
| void | **[currentItemChanged](/docs/classes/class_qsk_stack_box/#signal-currentitemchanged)**(QQuickItem * ) |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskStackBox](/docs/classes/class_qsk_stack_box/#function-qskstackbox)**(QQuickItem * parent =nullptr) |
| | **[QskStackBox](/docs/classes/class_qsk_stack_box/#function-qskstackbox)**(bool autoAddChildren, QQuickItem * parent =nullptr) |
| | **[~QskStackBox](/docs/classes/class_qsk_stack_box/#function-~qskstackbox)**() override |
| bool | **[isEmpty](/docs/classes/class_qsk_stack_box/#function-isempty)**() const |
| int | **[itemCount](/docs/classes/class_qsk_stack_box/#function-itemcount)**() const |
| QQuickItem * | **[itemAtIndex](/docs/classes/class_qsk_stack_box/#function-itematindex)**(int index) const |
| int | **[indexOf](/docs/classes/class_qsk_stack_box/#function-indexof)**(const QQuickItem * item) const |
| void | **[addItem](/docs/classes/class_qsk_stack_box/#function-additem)**(QQuickItem * item) |
| void | **[addItem](/docs/classes/class_qsk_stack_box/#function-additem)**(QQuickItem * item, Qt::Alignment alignment) |
| void | **[insertItem](/docs/classes/class_qsk_stack_box/#function-insertitem)**(int index, QQuickItem * item) |
| void | **[insertItem](/docs/classes/class_qsk_stack_box/#function-insertitem)**(int index, QQuickItem * item, Qt::Alignment alignment) |
| void | **[removeItem](/docs/classes/class_qsk_stack_box/#function-removeitem)**(const QQuickItem * item) |
| void | **[removeAt](/docs/classes/class_qsk_stack_box/#function-removeat)**(int index) |
| QQuickItem * | **[currentItem](/docs/classes/class_qsk_stack_box/#function-currentitem)**() const |
| int | **[currentIndex](/docs/classes/class_qsk_stack_box/#function-currentindex)**() const |
| void | **[setDefaultAlignment](/docs/classes/class_qsk_stack_box/#function-setdefaultalignment)**(Qt::Alignment alignment) |
| Qt::Alignment | **[defaultAlignment](/docs/classes/class_qsk_stack_box/#function-defaultalignment)**() const |
| void | **[setAnimator](/docs/classes/class_qsk_stack_box/#function-setanimator)**(QskStackBoxAnimator * animator) |
| const QskStackBoxAnimator * | **[animator](/docs/classes/class_qsk_stack_box/#function-animator)**() const |
| QskStackBoxAnimator * | **[animator](/docs/classes/class_qsk_stack_box/#function-animator)**() |
| QRectF | **[geometryForItemAt](/docs/classes/class_qsk_stack_box/#function-geometryforitemat)**(int index) const |
| void | **[dump](/docs/classes/class_qsk_stack_box/#function-dump)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_stack_box/#function-event)**(QEvent * event) override |
| void | **[updateLayout](/docs/classes/class_qsk_stack_box/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_stack_box/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |
| QskStackBoxAnimator * | **[effectiveAnimator](/docs/classes/class_qsk_stack_box/#function-effectiveanimator)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| int | **[currentIndex](/docs/classes/class_qsk_stack_box/#property-currentindex)**  |
| QQuickItem | **[currentItem](/docs/classes/class_qsk_stack_box/#property-currentitem)**  |

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
void dump()
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


## Public Property Documentation

### property currentIndex

```cpp
int currentIndex;
```


### property currentItem

```cpp
QQuickItem currentItem;
```


-------------------------------

Updated on 26 January 2021 at 09:44:54 CET