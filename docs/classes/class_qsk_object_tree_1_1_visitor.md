---
title: QskObjectTree::Visitor
layout: docs

---




Inherited by [QskObjectTree::ResolveVisitor< T >](/docs/classes/class_qsk_object_tree_1_1_resolve_visitor/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~Visitor](/docs/classes/class_qsk_object_tree_1_1_visitor/#function-~visitor)**() =default |
| virtual bool | **[visitDown](/docs/classes/class_qsk_object_tree_1_1_visitor/#function-visitdown)**(QObject * object) =0 |
| virtual bool | **[visitUp](/docs/classes/class_qsk_object_tree_1_1_visitor/#function-visitup)**(const QObject * object) =0 |

## Public Functions Documentation

### function ~Visitor

```cpp
virtual ~Visitor() =default
```


### function visitDown

```cpp
virtual bool visitDown(
    QObject * object
) =0
```


### function visitUp

```cpp
virtual bool visitUp(
    const QObject * object
) =0
```


-------------------------------

Updated on 23 January 2021 at 09:50:33 CET