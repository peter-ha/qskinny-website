---
title: QskIndexedLayoutBox
summary: Base class of layouts with index ordered elements. 
layout: docs

---


**Module:** **[Container](/docs/modules/group__container/)**



Base class of layouts with index ordered elements. 
`#include <QskIndexedLayoutBox.h>`

Inherits from QskBox

Inherited by [QskLinearBox](/docs/classes/classQskLinearBox/), [QskStackBox](/docs/classes/classQskStackBox/)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskIndexedLayoutBox](/docs/classes/classQskIndexedLayoutBox/#function-qskindexedlayoutbox)**(QQuickItem * parent =nullptr)<br>Constructor.  |
| | **[~QskIndexedLayoutBox](/docs/classes/classQskIndexedLayoutBox/#function-~qskindexedlayoutbox)**() override<br>Destructor.  |
| void | **[setAutoAddChildren](/docs/classes/classQskIndexedLayoutBox/#function-setautoaddchildren)**(bool on =true)<br>En/Disable auto appending of children.  |
| bool | **[autoAddChildren](/docs/classes/classQskIndexedLayoutBox/#function-autoaddchildren)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[itemChange](/docs/classes/classQskIndexedLayoutBox/#function-itemchange)**(ItemChange , const ItemChangeData & ) override |
| void | **[reparentItem](/docs/classes/classQskIndexedLayoutBox/#function-reparentitem)**(QQuickItem * item) |
| void | **[unparentItem](/docs/classes/classQskIndexedLayoutBox/#function-unparentitem)**(QQuickItem * item) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[autoAddChildrenChanged](/docs/classes/classQskIndexedLayoutBox/#signal-autoaddchildrenchanged)**() |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[autoAddChildren](/docs/classes/classQskIndexedLayoutBox/#property-autoaddchildren)** <br>Flag controlling whether to automatically append children to the layout.  |

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

When [autoAddChildren()](/docs/classes/classQskIndexedLayoutBox/#property-autoaddchildren) is enabled new children are automatically appended to the layout. Otherwise items have to be inserted manually using addItem() or insertItem().


### function autoAddChildren

```cpp
bool autoAddChildren() const
```


**Return**: Value of the [autoAddChildren](/docs/classes/classQskIndexedLayoutBox/#property-autoaddchildren) property 

## Protected Functions Documentation

### function itemChange

```cpp
void itemChange(
    ItemChange ,
    const ItemChangeData & 
) override
```


**See**: [autoAddChildren](/docs/classes/classQskIndexedLayoutBox/#property-autoaddchildren)

Checking ItemChildAddedChange/ItemChildRemovedChange changes to implement the [autoAddChildren](/docs/classes/classQskIndexedLayoutBox/#property-autoaddchildren) mode


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


## Public Signals Documentation

### signal autoAddChildrenChanged

```cpp
void autoAddChildrenChanged()
```


**See**: [setAutoAddChildren()](/docs/classes/classQskIndexedLayoutBox/#function-setautoaddchildren), [autoAddChildren()](/docs/classes/classQskIndexedLayoutBox/#property-autoaddchildren)

The autoAddChildren property has changed 


## Public Property Documentation

### property autoAddChildren

```cpp
bool autoAddChildren;
```

Flag controlling whether to automatically append children to the layout. 

**Note**: Children being transparent for positioners are ignored

**Par**: Access functions:

[autoAddChildren()](/docs/classes/classQskIndexedLayoutBox/#property-autoaddchildren), [setAutoAddChildren()](/docs/classes/classQskIndexedLayoutBox/#function-setautoaddchildren), [autoAddChildrenChanged()](/docs/classes/classQskIndexedLayoutBox/#signal-autoaddchildrenchanged)

When autoAddChildren is enabled new children are automatically appended to the layout. Otherwise items have to be inserted manually using addItem() or insertItem().


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET