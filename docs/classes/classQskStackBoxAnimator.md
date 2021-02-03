---
title: QskStackBoxAnimator
layout: docs

---




Inherits from QObject, QskAnimator

Inherited by [QskStackBoxAnimator1](/docs/classes/classQskStackBoxAnimator1/), [QskStackBoxAnimator3](/docs/classes/classQskStackBoxAnimator3/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskStackBoxAnimator](/docs/classes/classQskStackBoxAnimator/#function-qskstackboxanimator)**(QskStackBox * parent) |
| | **[~QskStackBoxAnimator](/docs/classes/classQskStackBoxAnimator/#function-~qskstackboxanimator)**() override |
| void | **[setStartIndex](/docs/classes/classQskStackBoxAnimator/#function-setstartindex)**(int index) |
| void | **[setEndIndex](/docs/classes/classQskStackBoxAnimator/#function-setendindex)**(int index) |
| int | **[startIndex](/docs/classes/classQskStackBoxAnimator/#function-startindex)**() const |
| int | **[endIndex](/docs/classes/classQskStackBoxAnimator/#function-endindex)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| QskStackBox * | **[stackBox](/docs/classes/classQskStackBoxAnimator/#function-stackbox)**() const |
| QQuickItem * | **[itemAt](/docs/classes/classQskStackBoxAnimator/#function-itemat)**(int index) const |

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

Updated on  3 February 2021 at 15:05:39 CET