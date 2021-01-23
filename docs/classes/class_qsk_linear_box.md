---
title: QskLinearBox
summary: Layout stringing items in rows and columns. 
layout: docs

---


**Module:** **[Container](/docs/modules/group___container/)**



Layout stringing items in rows and columns.  [More...](#detailed-description)


`#include <QskLinearBox.h>`

Inherits from [QskIndexedLayoutBox](/docs/classes/class_qsk_indexed_layout_box/), QskBox

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[transpose](/docs/classes/class_qsk_linear_box/#slot-transpose)**()<br>Invert the orientation of the layout.  |
| void | **[activate](/docs/classes/class_qsk_linear_box/#slot-activate)**() |
| void | **[invalidate](/docs/classes/class_qsk_linear_box/#slot-invalidate)**() |
| void | **[clear](/docs/classes/class_qsk_linear_box/#slot-clear)**(bool autoDelete =false) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[orientationChanged](/docs/classes/class_qsk_linear_box/#signal-orientationchanged)**() |
| void | **[dimensionChanged](/docs/classes/class_qsk_linear_box/#signal-dimensionchanged)**() |
| void | **[defaultAlignmentChanged](/docs/classes/class_qsk_linear_box/#signal-defaultalignmentchanged)**() |
| void | **[spacingChanged](/docs/classes/class_qsk_linear_box/#signal-spacingchanged)**() |
| void | **[extraSpacingAtChanged](/docs/classes/class_qsk_linear_box/#signal-extraspacingatchanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskLinearBox](/docs/classes/class_qsk_linear_box/#function-qsklinearbox)**(QQuickItem * parent =nullptr)<br>Create a row layout.  |
| | **[QskLinearBox](/docs/classes/class_qsk_linear_box/#function-qsklinearbox)**(Qt::Orientation orientation, QQuickItem * parent =nullptr)<br>Create a row or column layout.  |
| | **[QskLinearBox](/docs/classes/class_qsk_linear_box/#function-qsklinearbox)**(Qt::Orientation orientation, uint dimension, QQuickItem * parent =nullptr)<br>Constructor.  |
| | **[~QskLinearBox](/docs/classes/class_qsk_linear_box/#function-~qsklinearbox)**() override |
| bool | **[isEmpty](/docs/classes/class_qsk_linear_box/#function-isempty)**() const |
| int | **[elementCount](/docs/classes/class_qsk_linear_box/#function-elementcount)**() const |
| qreal | **[spacingAtIndex](/docs/classes/class_qsk_linear_box/#function-spacingatindex)**(int index) const |
| QQuickItem * | **[itemAtIndex](/docs/classes/class_qsk_linear_box/#function-itematindex)**(int index) const |
| int | **[indexOf](/docs/classes/class_qsk_linear_box/#function-indexof)**(const QQuickItem * item) const |
| void | **[removeItem](/docs/classes/class_qsk_linear_box/#function-removeitem)**(const QQuickItem * item) |
| void | **[removeAt](/docs/classes/class_qsk_linear_box/#function-removeat)**(int index) |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_linear_box/#function-orientation)**() const |
| void | **[setOrientation](/docs/classes/class_qsk_linear_box/#function-setorientation)**(Qt::Orientation orientation)<br>Set the orientation of the layout.  |
| void | **[setDimension](/docs/classes/class_qsk_linear_box/#function-setdimension)**(uint dimension)<br>Set the dimension of the layout.  |
| uint | **[dimension](/docs/classes/class_qsk_linear_box/#function-dimension)**() const |
| void | **[setExtraSpacingAt](/docs/classes/class_qsk_linear_box/#function-setextraspacingat)**(Qt::Edges edges) |
| Qt::Edges | **[extraSpacingAt](/docs/classes/class_qsk_linear_box/#function-extraspacingat)**() const |
| void | **[setDefaultAlignment](/docs/classes/class_qsk_linear_box/#function-setdefaultalignment)**(Qt::Alignment alignment) |
| Qt::Alignment | **[defaultAlignment](/docs/classes/class_qsk_linear_box/#function-defaultalignment)**() const |
| void | **[setSpacing](/docs/classes/class_qsk_linear_box/#function-setspacing)**(qreal spacing)<br>Set the global spacing of the layout.  |
| void | **[resetSpacing](/docs/classes/class_qsk_linear_box/#function-resetspacing)**()<br>Reset the global spacing to its initial value.  |
| qreal | **[spacing](/docs/classes/class_qsk_linear_box/#function-spacing)**() const |
| Q_INVOKABLE int | **[addItem](/docs/classes/class_qsk_linear_box/#function-additem)**(QQuickItem * item) |
| int | **[addItem](/docs/classes/class_qsk_linear_box/#function-additem)**(QQuickItem * item, Qt::Alignment alignment) |
| Q_INVOKABLE int | **[insertItem](/docs/classes/class_qsk_linear_box/#function-insertitem)**(int index, QQuickItem * item) |
| int | **[insertItem](/docs/classes/class_qsk_linear_box/#function-insertitem)**(int index, QQuickItem * item, Qt::Alignment alignment) |
| Q_INVOKABLE int | **[addSpacer](/docs/classes/class_qsk_linear_box/#function-addspacer)**(qreal spacing, int stretchFactor =0)<br>Append a spacer to the layout.  |
| Q_INVOKABLE int | **[insertSpacer](/docs/classes/class_qsk_linear_box/#function-insertspacer)**(int index, qreal spacing, int stretchFactor =0)<br>Insert a spacer at a specific position.  |
| Q_INVOKABLE int | **[addStretch](/docs/classes/class_qsk_linear_box/#function-addstretch)**(int stretchFactor =0)<br>Append a stretch to the layout.  |
| Q_INVOKABLE int | **[insertStretch](/docs/classes/class_qsk_linear_box/#function-insertstretch)**(int index, int stretchFactor =0)<br>Insert a stretch at a specific position.  |
| Q_INVOKABLE void | **[setStretchFactor](/docs/classes/class_qsk_linear_box/#function-setstretchfactor)**(int index, int stretchFactor)<br>Modify the stretch factor of a layout element.  |
| Q_INVOKABLE int | **[stretchFactor](/docs/classes/class_qsk_linear_box/#function-stretchfactor)**(int index) const |
| void | **[setStretchFactor](/docs/classes/class_qsk_linear_box/#function-setstretchfactor)**(const QQuickItem * item, int stretchFactor)<br>Modify the stretch factor of an inserted item.  |
| int | **[stretchFactor](/docs/classes/class_qsk_linear_box/#function-stretchfactor)**(const QQuickItem * item) const |
| void | **[dump](/docs/classes/class_qsk_linear_box/#function-dump)**() |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/class_qsk_linear_box/#function-event)**(QEvent * event) override |
| virtual void | **[geometryChangeEvent](/docs/classes/class_qsk_linear_box/#function-geometrychangeevent)**(QskGeometryChangeEvent * event) override |
| void | **[itemChange](/docs/classes/class_qsk_linear_box/#function-itemchange)**(ItemChange change, const ItemChangeData & value) override |
| virtual void | **[updateLayout](/docs/classes/class_qsk_linear_box/#function-updatelayout)**() override |
| virtual QSizeF | **[layoutSizeHint](/docs/classes/class_qsk_linear_box/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::Orientation | **[orientation](/docs/classes/class_qsk_linear_box/#property-orientation)** <br>Direction of flow for laying out the items.  |
| uint | **[dimension](/docs/classes/class_qsk_linear_box/#property-dimension)** <br>Upper limit for the number of elements in a row or column.  |
| qreal | **[spacing](/docs/classes/class_qsk_linear_box/#property-spacing)** <br>Global layout spacing.  |
| Qt::Alignment | **[defaultAlignment](/docs/classes/class_qsk_linear_box/#property-defaultalignment)**  |
| Qt::Edges | **[extraSpacingAt](/docs/classes/class_qsk_linear_box/#property-extraspacingat)**  |
| int | **[elementCount](/docs/classes/class_qsk_linear_box/#property-elementcount)**  |
| bool | **[empty](/docs/classes/class_qsk_linear_box/#property-empty)**  |

## Detailed Description

```cpp
class QskLinearBox;
```

Layout stringing items in rows and columns. 

**See**: QskGridBox, QskStackBox 

**Note**: All available Qsk layouts are thin layers on top of the same grid based workhorse ( = QGridLayoutEngine ). [QskLinearBox](/docs/classes/class_qsk_linear_box/) offers a reasonable subset of features, tailored for an index based point of view.

[QskLinearBox](/docs/classes/class_qsk_linear_box/) organizes layout items in vertical or horizontal order ( [orientation](/docs/classes/class_qsk_linear_box/#property-orientation) ). When the number of items for a row/column has reached an upper limit ( [dimension](/docs/classes/class_qsk_linear_box/#property-dimension) ) the following items will be added to a new row/column.

When having the [dimension](/docs/classes/class_qsk_linear_box/#property-dimension) being set to unlimited ( or 1 with the inverted [orientation](/docs/classes/class_qsk_linear_box/#property-orientation) ) the string layout behaves similar to QBoxLayout, RowLayout/ColumnLayout ( QML ) or what is sometimes called a linear layout.

When not restricting the layout to one row/column only the layout can be used to set up simple grid formations.

Layout items may be QQuickItem *s or spacers - both having a stretch factor in the range of [0..10];

## Public Slots Documentation

### slot transpose

```cpp
void transpose()
```

Invert the orientation of the layout. 

**See**: [setOrientation()](/docs/classes/class_qsk_linear_box/#function-setorientation), [orientation()](/docs/classes/class_qsk_linear_box/#property-orientation), [orientationChanged()](/docs/classes/class_qsk_linear_box/#signal-orientationchanged)

Qt::Horizontal becomes to Qt::Vertical and v.v. 


### slot activate

```cpp
void activate()
```


### slot invalidate

```cpp
void invalidate()
```


### slot clear

```cpp
void clear(
    bool autoDelete =false
)
```


## Public Signals Documentation

### signal orientationChanged

```cpp
void orientationChanged()
```


**See**: [orientation](/docs/classes/class_qsk_linear_box/#property-orientation)

The orientation of the layout has changed 


### signal dimensionChanged

```cpp
void dimensionChanged()
```


**See**: [setDimension()](/docs/classes/class_qsk_linear_box/#function-setdimension), [dimension()](/docs/classes/class_qsk_linear_box/#property-dimension)

The dimension of the layout has changed 


### signal defaultAlignmentChanged

```cpp
void defaultAlignmentChanged()
```


### signal spacingChanged

```cpp
void spacingChanged()
```


**See**: [setSpacing()](/docs/classes/class_qsk_linear_box/#function-setspacing), [spacing()](/docs/classes/class_qsk_linear_box/#property-spacing), setRowSpacing(), setColumnSpacing() 

The spacing of the layout has changed 


### signal extraSpacingAtChanged

```cpp
void extraSpacingAtChanged()
```


## Public Functions Documentation

### function QskLinearBox

```cpp
explicit QskLinearBox(
    QQuickItem * parent =nullptr
)
```

Create a row layout. 

**Parameters**: 

  * **parent** Parent item 


**See**: [orientation](/docs/classes/class_qsk_linear_box/#property-orientation), [dimension](/docs/classes/class_qsk_linear_box/#property-dimension)

The [orientation](/docs/classes/class_qsk_linear_box/#property-orientation) is set to Qt::Horizontal orientation having an unlimited [dimension](/docs/classes/class_qsk_linear_box/#property-dimension).


### function QskLinearBox

```cpp
explicit QskLinearBox(
    Qt::Orientation orientation,
    QQuickItem * parent =nullptr
)
```

Create a row or column layout. 

**Parameters**: 

  * **orientation** Qt::Horizontal or Qt::Vertical 
  * **parent** Parent item


**See**: [orientation](/docs/classes/class_qsk_linear_box/#property-orientation), [dimension](/docs/classes/class_qsk_linear_box/#property-dimension)

The [dimension](/docs/classes/class_qsk_linear_box/#property-dimension) is unlimited.


### function QskLinearBox

```cpp
QskLinearBox(
    Qt::Orientation orientation,
    uint dimension,
    QQuickItem * parent =nullptr
)
```

Constructor. 

**Parameters**: 

  * **orientation** Qt::Horizontal or Qt::Vertical 
  * **dimension** Upper limit for the number of elements in a row or column
  * **parent** Parent item


**See**: [orientation](/docs/classes/class_qsk_linear_box/#property-orientation), [dimension](/docs/classes/class_qsk_linear_box/#property-dimension)

### function ~QskLinearBox

```cpp
~QskLinearBox() override
```


Destructor 


### function isEmpty

```cpp
inline bool isEmpty() const
```


### function elementCount

```cpp
int elementCount() const
```


### function spacingAtIndex

```cpp
qreal spacingAtIndex(
    int index
) const
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


### function orientation

```cpp
Qt::Orientation orientation() const
```


### function setOrientation

```cpp
void setOrientation(
    Qt::Orientation orientation
)
```

Set the orientation of the layout. 

**Parameters**: 

  * **orientation** Qt::Vertical or Qt::Horizontal 


**See**: [orientation](/docs/classes/class_qsk_linear_box/#property-orientation)

### function setDimension

```cpp
void setDimension(
    uint dimension
)
```

Set the dimension of the layout. 

**Parameters**: 

  * **dimension** Upper limit for the number of elements in a row or column


**See**: [dimension](/docs/classes/class_qsk_linear_box/#property-dimension)

**Warning**: A value of 0 is invalid and will be set to 1 

### function dimension

```cpp
uint dimension() const
```


### function setExtraSpacingAt

```cpp
void setExtraSpacingAt(
    Qt::Edges edges
)
```


### function extraSpacingAt

```cpp
Qt::Edges extraSpacingAt() const
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


### function setSpacing

```cpp
void setSpacing(
    qreal spacing
)
```

Set the global spacing of the layout. 

**Parameters**: 

  * **spacing** Distance between each cell and row 


**See**: [spacing](/docs/classes/class_qsk_linear_box/#property-spacing)

### function resetSpacing

```cpp
void resetSpacing()
```

Reset the global spacing to its initial value. 

**See**: [spacing](/docs/classes/class_qsk_linear_box/#property-spacing)

### function spacing

```cpp
qreal spacing() const
```


### function addItem

```cpp
Q_INVOKABLE int addItem(
    QQuickItem * item
)
```


### function addItem

```cpp
int addItem(
    QQuickItem * item,
    Qt::Alignment alignment
)
```


### function insertItem

```cpp
Q_INVOKABLE int insertItem(
    int index,
    QQuickItem * item
)
```


### function insertItem

```cpp
int insertItem(
    int index,
    QQuickItem * item,
    Qt::Alignment alignment
)
```


### function addSpacer

```cpp
Q_INVOKABLE int addSpacer(
    qreal spacing,
    int stretchFactor =0
)
```

Append a spacer to the layout. 

**Parameters**: 

  * **spacing** Spacing 
  * **stretchFactor** A value between [0..10]. The ratio of the stretch factors of expandable candidates decides about how to distribute extra space. 


**See**: [insertSpacer()](/docs/classes/class_qsk_linear_box/#function-insertspacer)

The same as [insertSpacer](/docs/classes/class_qsk_linear_box/#function-insertspacer)( -1, spacing, stretchFactor );


### function insertSpacer

```cpp
Q_INVOKABLE int insertSpacer(
    int index,
    qreal spacing,
    int stretchFactor =0
)
```

Insert a spacer at a specific position. 

**Parameters**: 

  * **index** Position, where to insert the spacer. If index is < 0 or beyond QskLayout::itemCount() the spacer will be appended.
  * **spacing** Spacing Minimum for width/height 
  * **stretchFactor** A value between [0..10]. The ratio of the stretch factors of expandable candidates decides about how to distribute extra space.


**See**: insertItem(), QskLayout::itemAtIndex() 

**Note**: Calling QskLayout::itemAtIndex( index ) will return a nullptr. 

Spacers being inserted to the layout are elements having an index - like regular QQuickItem *s and participate in the calculation of the geometries.

A spacer is treated like being an item with a preferred width/height of spacing. In case of having a stretchFactor > 0 the width/height might exceed spacing.


### function addStretch

```cpp
Q_INVOKABLE int addStretch(
    int stretchFactor =0
)
```

Append a stretch to the layout. 

**Parameters**: 

  * **stretchFactor** A value between [0..10]. The ratio of the stretch factors of expandable candidates decides about how to distribute extra space.


**See**: [insertStretch()](/docs/classes/class_qsk_linear_box/#function-insertstretch), [addSpacer()](/docs/classes/class_qsk_linear_box/#function-addspacer)

The same as [insertStretch](/docs/classes/class_qsk_linear_box/#function-insertstretch)( -1, stretchFactor );


### function insertStretch

```cpp
Q_INVOKABLE int insertStretch(
    int index,
    int stretchFactor =0
)
```

Insert a stretch at a specific position. 

**Parameters**: 

  * **index** Position, where to insert the stretch. If index is < 0 or beyond QskLayout::itemCount() the stretch will be appended. 
  * **stretchFactor** A value between [0..10]. The ratio of the stretch factors of expandable candidates decides about how to distribute extra space.


**See**: [insertSpacer()](/docs/classes/class_qsk_linear_box/#function-insertspacer), QskLayout::itemAtIndex() 

**Note**: Calling QskLayout::itemAtIndex( index ) will return a nullptr. 

A stretch is simply a spacer with a spacing of 0


### function setStretchFactor

```cpp
Q_INVOKABLE void setStretchFactor(
    int index,
    int stretchFactor
)
```

Modify the stretch factor of a layout element. 

**Parameters**: 

  * **index** Position of the element 
  * **stretchFactor** A value between [0..10]. The ratio of the stretch factors of expandable candidates decides about how to distribute extra space.


**See**: [stretchFactor()](/docs/classes/class_qsk_linear_box/#function-stretchfactor)

### function stretchFactor

```cpp
Q_INVOKABLE int stretchFactor(
    int index
) const
```


**Parameters**: 

  * **index** Position of the inserted element 


**See**: [setStretchFactor()](/docs/classes/class_qsk_linear_box/#function-setstretchfactor)

**Return**: Stretch factor of a layout element

### function setStretchFactor

```cpp
void setStretchFactor(
    const QQuickItem * item,
    int stretchFactor
)
```

Modify the stretch factor of an inserted item. 

**Parameters**: 

  * **item** Inserted item 
  * **stretchFactor** A value between [0..10]. The ratio of the stretch factors of expandable candidates decides about how to distribute extra space.


**See**: [stretchFactor()](/docs/classes/class_qsk_linear_box/#function-stretchfactor)

### function stretchFactor

```cpp
int stretchFactor(
    const QQuickItem * item
) const
```


**Parameters**: 

  * **item** Inserted item 


**See**: [setStretchFactor()](/docs/classes/class_qsk_linear_box/#function-setstretchfactor)

**Return**: Stretch factor of a layout element

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


### function geometryChangeEvent

```cpp
virtual void geometryChangeEvent(
    QskGeometryChangeEvent * event
) override
```


**Reimplements**: [QskQuickItem::geometryChangeEvent](/docs/classes/class_qsk_quick_item/#function-geometrychangeevent)


### function itemChange

```cpp
void itemChange(
    ItemChange change,
    const ItemChangeData & value
) override
```


### function updateLayout

```cpp
virtual void updateLayout() override
```


**Reimplements**: [QskControl::updateLayout](/docs/classes/class_qsk_control/#function-updatelayout)


### function layoutSizeHint

```cpp
virtual QSizeF layoutSizeHint(
    Qt::SizeHint which,
    const QSizeF & constraint
) const override
```


**Reimplements**: [QskControl::layoutSizeHint](/docs/classes/class_qsk_control/#function-layoutsizehint)


## Public Property Documentation

### property orientation

```cpp
Qt::Orientation orientation;
```

Direction of flow for laying out the items. 

**See**: [transpose()](/docs/classes/class_qsk_linear_box/#slot-transpose), [dimension](/docs/classes/class_qsk_linear_box/#property-dimension)

**Return**: Value of the [orientation](/docs/classes/class_qsk_linear_box/#property-orientation) property 

**Par**: Access functions:

[orientation()](/docs/classes/class_qsk_linear_box/#property-orientation), [setOrientation()](/docs/classes/class_qsk_linear_box/#function-setorientation), [orientationChanged()](/docs/classes/class_qsk_linear_box/#signal-orientationchanged)

In case of Qt::Horizontal the elements are organized horizontally increasing the column index, when appending an item. When the number of columns exceeds the [dimension](/docs/classes/class_qsk_linear_box/#property-dimension) the next item will be in the first column of the next row ( v.v for Qt::Vertical ).

The horizontal layout direction is affected by its state of QskControl::layoutMirroring(), what might depend on the QskControl::locale().


### property dimension

```cpp
uint dimension;
```

Upper limit for the number of elements in a row or column. 

**See**: [orientation](/docs/classes/class_qsk_linear_box/#property-orientation)

**Return**: Value of the [dimension](/docs/classes/class_qsk_linear_box/#property-dimension) property const 

**Par**: Access functions:

[dimension()](/docs/classes/class_qsk_linear_box/#property-dimension), [setDimension()](/docs/classes/class_qsk_linear_box/#function-setdimension), [dimensionChanged()](/docs/classes/class_qsk_linear_box/#signal-dimensionchanged)

According to the orientation the layout is organized in rows or columns. The dimension is an upper limit for the number of elements in a row/column.

When the number of elements exceeds the dimension the following element will be inserted in the following row/column.


### property spacing

```cpp
qreal spacing;
```

Global layout spacing. 

**See**: setRowSpacing(), setColumnSpacing(), [insertSpacer()](/docs/classes/class_qsk_linear_box/#function-insertspacer), QskControl::setMargins() 

**Return**: Value of the [spacing](/docs/classes/class_qsk_linear_box/#property-spacing) property 

**Note**: In opposite to a spacer, the global spacing does not insert elements.

**Par**: Access functions:

[spacing()](/docs/classes/class_qsk_linear_box/#property-spacing), [setSpacing()](/docs/classes/class_qsk_linear_box/#function-setspacing), [spacingChanged()](/docs/classes/class_qsk_linear_box/#signal-spacingchanged)

The spacing is the distance between each cell and row of the layout. Its initial value depend on the current theme.

Beside setting the global spacing it is also possible to add individual spacings at the end of each row and column.


### property defaultAlignment

```cpp
Qt::Alignment defaultAlignment;
```


### property extraSpacingAt

```cpp
Qt::Edges extraSpacingAt;
```


### property elementCount

```cpp
int elementCount;
```


### property empty

```cpp
bool empty;
```


-------------------------------

Updated on 23 January 2021 at 09:50:34 CET