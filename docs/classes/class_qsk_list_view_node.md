---
title: QskListViewNode
layout: docs

---




Inherits from QSGTransformNode

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskListViewNode](/docs/classes/class_qsk_list_view_node/#function-qsklistviewnode)**(int columnCount) |
| QSGNode * | **[backgroundNode](/docs/classes/class_qsk_list_view_node/#function-backgroundnode)**() |
| QSGNode * | **[foregroundNode](/docs/classes/class_qsk_list_view_node/#function-foregroundnode)**() |
| void | **[resetRows](/docs/classes/class_qsk_list_view_node/#function-resetrows)**(int rowMin, int rowMax) |
| int | **[rowMin](/docs/classes/class_qsk_list_view_node/#function-rowmin)**() const |
| int | **[rowMax](/docs/classes/class_qsk_list_view_node/#function-rowmax)**() const |
| bool | **[intersects](/docs/classes/class_qsk_list_view_node/#function-intersects)**(int rowMin, int rowMax) const |
| int | **[nodeCount](/docs/classes/class_qsk_list_view_node/#function-nodecount)**() const |
| int | **[columnCount](/docs/classes/class_qsk_list_view_node/#function-columncount)**() const |
| void | **[invalidate](/docs/classes/class_qsk_list_view_node/#function-invalidate)**() |

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

Updated on 22 January 2021 at 17:05:48 CET