---
title: QskStackBoxAnimator
layout: docs

---




Inherits from QObject, QskAnimator

Inherited by [QskStackBoxAnimator1](/docs/classes/class_qsk_stack_box_animator1/), [QskStackBoxAnimator3](/docs/classes/class_qsk_stack_box_animator3/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskStackBoxAnimator](/docs/classes/class_qsk_stack_box_animator/#function-qskstackboxanimator)**(QskStackBox * parent) |
| | **[~QskStackBoxAnimator](/docs/classes/class_qsk_stack_box_animator/#function-~qskstackboxanimator)**() override |
| void | **[setStartIndex](/docs/classes/class_qsk_stack_box_animator/#function-setstartindex)**(int index) |
| void | **[setEndIndex](/docs/classes/class_qsk_stack_box_animator/#function-setendindex)**(int index) |
| int | **[startIndex](/docs/classes/class_qsk_stack_box_animator/#function-startindex)**() const |
| int | **[endIndex](/docs/classes/class_qsk_stack_box_animator/#function-endindex)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QskStackBox * | **[stackBox](/docs/classes/class_qsk_stack_box_animator/#function-stackbox)**() const |
| QQuickItem * | **[itemAt](/docs/classes/class_qsk_stack_box_animator/#function-itemat)**(int index) const |

## Public Functions Documentation

### function QskStackBoxAnimator

```cpp
QskStackBoxAnimator(
    QskStackBox * parent
)
```


### function ~QskStackBoxAnimator

```cpp
~QskStackBoxAnimator() override
```


### function setStartIndex

```cpp
void setStartIndex(
    int index
)
```


### function setEndIndex

```cpp
void setEndIndex(
    int index
)
```


### function startIndex

```cpp
int startIndex() const
```


### function endIndex

```cpp
int endIndex() const
```


## Protected Functions Documentation

### function stackBox

```cpp
QskStackBox * stackBox() const
```


### function itemAt

```cpp
QQuickItem * itemAt(
    int index
) const
```


-------------------------------

Updated on 23 January 2021 at 09:50:33 CET