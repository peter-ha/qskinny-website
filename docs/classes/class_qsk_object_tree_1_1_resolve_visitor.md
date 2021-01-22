---
title: QskObjectTree::ResolveVisitor
layout: docs

---




 [More...](#detailed-description)

Inherits from QskObjectTree::Visitor

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[ResolveVisitor](/docs/classes/class_qsk_object_tree_1_1_resolve_visitor/#function-resolvevisitor)**(const char * propertyName) |
| const T & | **[resolveValue](/docs/classes/class_qsk_object_tree_1_1_resolve_visitor/#function-resolvevalue)**() const |
| void | **[setResolveValue](/docs/classes/class_qsk_object_tree_1_1_resolve_visitor/#function-setresolvevalue)**(const T & value) |
| bool | **[visitDown](/docs/classes/class_qsk_object_tree_1_1_resolve_visitor/#function-visitdown)**(QObject * object) override |
| bool | **[visitUp](/docs/classes/class_qsk_object_tree_1_1_resolve_visitor/#function-visitup)**(const QObject * object) override |

## Detailed Description

```cpp
template <class T >
class QskObjectTree::ResolveVisitor;
```

## Public Functions Documentation

### function ResolveVisitor

```cpp
inline ResolveVisitor(
    const char * propertyName
)
```


### function resolveValue

```cpp
inline const T & resolveValue() const
```


### function setResolveValue

```cpp
inline void setResolveValue(
    const T & value
)
```


### function visitDown

```cpp
inline bool visitDown(
    QObject * object
) override
```


### function visitUp

```cpp
inline bool visitUp(
    const QObject * object
) override
```


-------------------------------

Updated on 22 January 2021 at 17:05:47 CET