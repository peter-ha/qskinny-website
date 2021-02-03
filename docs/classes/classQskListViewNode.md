---
title: QskListViewNode
layout: docs

---




Inherits from QSGTransformNode

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskListViewNode](/docs/classes/classQskListViewNode/#function-qsklistviewnode)**(int columnCount) |
| QSGNode * | **[backgroundNode](/docs/classes/classQskListViewNode/#function-backgroundnode)**() |
| QSGNode * | **[foregroundNode](/docs/classes/classQskListViewNode/#function-foregroundnode)**() |
| void | **[resetRows](/docs/classes/classQskListViewNode/#function-resetrows)**(int rowMin, int rowMax) |
| int | **[rowMin](/docs/classes/classQskListViewNode/#function-rowmin)**() const |
| int | **[rowMax](/docs/classes/classQskListViewNode/#function-rowmax)**() const |
| bool | **[intersects](/docs/classes/classQskListViewNode/#function-intersects)**(int rowMin, int rowMax) const |
| int | **[nodeCount](/docs/classes/classQskListViewNode/#function-nodecount)**() const |
| int | **[columnCount](/docs/classes/classQskListViewNode/#function-columncount)**() const |
| void | **[invalidate](/docs/classes/classQskListViewNode/#function-invalidate)**() |

## Public Functions Documentation

### function QskListViewNode

```cpp
inline QskListViewNode(
    int columnCount
)
```


### function backgroundNode

```cpp
inline QSGNode * backgroundNode()
```


### function foregroundNode

```cpp
inline QSGNode * foregroundNode()
```


### function resetRows

```cpp
inline void resetRows(
    int rowMin,
    int rowMax
)
```


### function rowMin

```cpp
inline int rowMin() const
```


### function rowMax

```cpp
inline int rowMax() const
```


### function intersects

```cpp
inline bool intersects(
    int rowMin,
    int rowMax
) const
```


### function nodeCount

```cpp
inline int nodeCount() const
```


### function columnCount

```cpp
inline int columnCount() const
```


### function invalidate

```cpp
inline void invalidate()
```


-------------------------------

Updated on  3 February 2021 at 15:05:41 CET