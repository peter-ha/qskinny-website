---
title: QskIndexedLayoutBox
summary: Base class of layouts with index ordered elements. 
layout: docs

---


**Module:** **[Container](/docs/modules/group___container/)**



Base class of layouts with index ordered elements. 
`#include <QskIndexedLayoutBox.h>`

Inherits from QskBox

Inherited by [QskLinearBox](/docs/classes/class_qsk_linear_box/), [QskStackBox](/docs/classes/class_qsk_stack_box/)

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[autoAddChildrenChanged](/docs/classes/class_qsk_indexed_layout_box/#signal-autoaddchildrenchanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskIndexedLayoutBox](/docs/classes/class_qsk_indexed_layout_box/#function-qskindexedlayoutbox)**(QQuickItem * parent =nullptr)<br>Constructor.  |
| | **[~QskIndexedLayoutBox](/docs/classes/class_qsk_indexed_layout_box/#function-~qskindexedlayoutbox)**() override<br>Destructor.  |
| void | **[setAutoAddChildren](/docs/classes/class_qsk_indexed_layout_box/#function-setautoaddchildren)**(bool on =true)<br>En/Disable auto appending of children.  |
| bool | **[autoAddChildren](/docs/classes/class_qsk_indexed_layout_box/#function-autoaddchildren)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[itemChange](/docs/classes/class_qsk_indexed_layout_box/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |
| void | **[reparentItem](/docs/classes/class_qsk_indexed_layout_box/#function-reparentitem)**(QQuickItem * item) |
| void | **[unparentItem](/docs/classes/class_qsk_indexed_layout_box/#function-unparentitem)**(QQuickItem * item) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[autoAddChildren](/docs/classes/class_qsk_indexed_layout_box/#property-autoaddchildren)** <br>Flag controlling whether to automatically append children to the layout.  |

## Public Signals Documentation

### signal autoAddChildrenChanged

```cpp
void autoAddChildrenChanged()
```


**See**: [setAutoAddChildren()](/docs/classes/class_qsk_indexed_layout_box/#function-setautoaddchildren), [autoAddChildren()](/docs/classes/class_qsk_indexed_layout_box/#property-autoaddchildren)

The autoAddChildren property has changed 


## Public Functions Documentation

### function QskIndexedLayoutBox

```cpp
explicit QskIndexedLayoutBox(
    QQuickItem * parent =nullptr
)
```

Constructor. 

**Parameters**: 

  * **parent** Parent item 


Create a layout having autoAddChildren set to false.


### function ~QskIndexedLayoutBox

```cpp
~QskIndexedLayoutBox() override
```

Destructor. 

### function setAutoAddChildren

```cpp
void setAutoAddChildren(
    bool on =true
)
```

En/Disable auto appending of children. 

**Parameters**: 

  * **on** When true autoAddChildren is enabled


**Note**: Existing children, that have not been inserted before remain being not seen by the layout. 

When [autoAddChildren()](/docs/classes/class_qsk_indexed_layout_box/#property-autoaddchildren) is enabled new children are automatically appended to the layout. Otherwise items have to be inserted manually using addItem() or insertItem().


### function autoAddChildren

```cpp
bool autoAddChildren() const
```


## Protected Functions Documentation

### function itemChange

```cpp
void itemChange(
    ItemChange ,
    const ItemChangeData & 
) override
```


**See**: [autoAddChildren](/docs/classes/class_qsk_indexed_layout_box/#property-autoaddchildren)

Checking ItemChildAddedChange/ItemChildRemovedChange changes to implement the [autoAddChildren](/docs/classes/class_qsk_indexed_layout_box/#property-autoaddchildren) mode


### function reparentItem

```cpp
void reparentItem(
    QQuickItem * item
)
```


### function unparentItem

```cpp
void unparentItem(
    QQuickItem * item
)
```


## Public Property Documentation

### property autoAddChildren

```cpp
bool autoAddChildren;
```

Flag controlling whether to automatically append children to the layout. 

**Return**: Value of the [autoAddChildren](/docs/classes/class_qsk_indexed_layout_box/#property-autoaddchildren) property 

**Note**: Children being transparent for positioners are ignored

**Par**: Access functions:

[autoAddChildren()](/docs/classes/class_qsk_indexed_layout_box/#property-autoaddchildren), [setAutoAddChildren()](/docs/classes/class_qsk_indexed_layout_box/#function-setautoaddchildren), [autoAddChildrenChanged()](/docs/classes/class_qsk_indexed_layout_box/#signal-autoaddchildrenchanged)

When autoAddChildren is enabled new children are automatically appended to the layout. Otherwise items have to be inserted manually using addItem() or insertItem().


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET