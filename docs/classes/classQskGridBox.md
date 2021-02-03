---
title: QskGridBox
layout: docs

---


**Module:** **[Container](/docs/modules/group__container/)**



Inherits from QskBox

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskGridBox](/docs/classes/classQskGridBox/#function-qskgridbox)**(QQuickItem * parent =nullptr) |
| | **[~QskGridBox](/docs/classes/classQskGridBox/#function-~qskgridbox)**() override |
| Q_INVOKABLE int | **[addItem](/docs/classes/classQskGridBox/#function-additem)**(QQuickItem * item, int row, int column, int rowSpan, int columnSpan) |
| Q_INVOKABLE int | **[addItem](/docs/classes/classQskGridBox/#function-additem)**(QQuickItem * item, int row, int column) |
| int | **[addItem](/docs/classes/classQskGridBox/#function-additem)**(QQuickItem * item, int row, int column, Qt::Alignment alignment) |
| int | **[addItem](/docs/classes/classQskGridBox/#function-additem)**(QQuickItem * item, int row, int column, int rowSpan, int columnSpan, Qt::Alignment alignment) |
| Q_INVOKABLE int | **[addSpacer](/docs/classes/classQskGridBox/#function-addspacer)**(const QSizeF & spacing, int row, int column, int rowSpan =1, int columnSpan =1) |
| int | **[addColumnSpacer](/docs/classes/classQskGridBox/#function-addcolumnspacer)**(qreal spacing, int column) |
| int | **[addRowSpacer](/docs/classes/classQskGridBox/#function-addrowspacer)**(qreal spacing, int row) |
| void | **[removeItem](/docs/classes/classQskGridBox/#function-removeitem)**(const QQuickItem * item) |
| void | **[removeAt](/docs/classes/classQskGridBox/#function-removeat)**(int index) |
| Q_INVOKABLE int | **[rowCount](/docs/classes/classQskGridBox/#function-rowcount)**() const |
| Q_INVOKABLE int | **[columnCount](/docs/classes/classQskGridBox/#function-columncount)**() const |
| int | **[elementCount](/docs/classes/classQskGridBox/#function-elementcount)**() const |
| QQuickItem * | **[itemAtIndex](/docs/classes/classQskGridBox/#function-itematindex)**(int index) const |
| int | **[indexOf](/docs/classes/classQskGridBox/#function-indexof)**(const QQuickItem * item) const |
| bool | **[isEmpty](/docs/classes/classQskGridBox/#function-isempty)**() const |
| Q_INVOKABLE QQuickItem * | **[itemAt](/docs/classes/classQskGridBox/#function-itemat)**(int row, int column) const |
| Q_INVOKABLE int | **[indexAt](/docs/classes/classQskGridBox/#function-indexat)**(int row, int column) const |
| Q_INVOKABLE QRect | **[gridOfIndex](/docs/classes/classQskGridBox/#function-gridofindex)**(int index) const |
| Q_INVOKABLE QRect | **[effectiveGridOfIndex](/docs/classes/classQskGridBox/#function-effectivegridofindex)**(int index) const |
| void | **[setDefaultAlignment](/docs/classes/classQskGridBox/#function-setdefaultalignment)**(Qt::Alignment alignment) |
| Qt::Alignment | **[defaultAlignment](/docs/classes/classQskGridBox/#function-defaultalignment)**() const |
| void | **[setSpacing](/docs/classes/classQskGridBox/#function-setspacing)**(Qt::Orientations orientations, qreal spacing) |
| void | **[resetSpacing](/docs/classes/classQskGridBox/#function-resetspacing)**(Qt::Orientations orientations) |
| qreal | **[spacing](/docs/classes/classQskGridBox/#function-spacing)**(Qt::Orientation orientation) const |
| void | **[setSpacing](/docs/classes/classQskGridBox/#function-setspacing)**(qreal spacing) |
| Q_INVOKABLE void | **[setRowStretchFactor](/docs/classes/classQskGridBox/#function-setrowstretchfactor)**(int row, int stretch) |
| Q_INVOKABLE int | **[rowStretchFactor](/docs/classes/classQskGridBox/#function-rowstretchfactor)**(int row) const |
| Q_INVOKABLE void | **[setColumnStretchFactor](/docs/classes/classQskGridBox/#function-setcolumnstretchfactor)**(int column, int stretch) |
| Q_INVOKABLE int | **[columnStretchFactor](/docs/classes/classQskGridBox/#function-columnstretchfactor)**(int column) const |
| Q_INVOKABLE void | **[setColumnWidthHint](/docs/classes/classQskGridBox/#function-setcolumnwidthhint)**(int column, Qt::SizeHint which, qreal width) |
| Q_INVOKABLE qreal | **[columnWidthHint](/docs/classes/classQskGridBox/#function-columnwidthhint)**(int column, Qt::SizeHint which) const |
| Q_INVOKABLE void | **[setRowHeightHint](/docs/classes/classQskGridBox/#function-setrowheighthint)**(int row, Qt::SizeHint which, qreal height) |
| Q_INVOKABLE qreal | **[rowHeightHint](/docs/classes/classQskGridBox/#function-rowheighthint)**(int row, Qt::SizeHint which) const |
| Q_INVOKABLE void | **[setRowFixedHeight](/docs/classes/classQskGridBox/#function-setrowfixedheight)**(int row, qreal height) |
| Q_INVOKABLE void | **[setColumnFixedWidth](/docs/classes/classQskGridBox/#function-setcolumnfixedwidth)**(int column, qreal width) |
| void | **[dump](/docs/classes/classQskGridBox/#function-dump)**() const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[event](/docs/classes/classQskGridBox/#function-event)**(QEvent * event) override |
| void | **[geometryChangeEvent](/docs/classes/classQskGridBox/#function-geometrychangeevent)**(QskGeometryChangeEvent * event) override |
| void | **[itemChange](/docs/classes/classQskGridBox/#function-itemchange)**(ItemChange change, const ItemChangeData & value) override |
| void | **[updateLayout](/docs/classes/classQskGridBox/#function-updatelayout)**() override |
| QSizeF | **[layoutSizeHint](/docs/classes/classQskGridBox/#function-layoutsizehint)**(Qt::SizeHint which, const QSizeF & constraint) const override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[defaultAlignmentChanged](/docs/classes/classQskGridBox/#signal-defaultalignmentchanged)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[invalidate](/docs/classes/classQskGridBox/#slot-invalidate)**() |
| void | **[clear](/docs/classes/classQskGridBox/#slot-clear)**(bool autoDelete =false) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| Qt::Alignment | **[defaultAlignment](/docs/classes/classQskGridBox/#property-defaultalignment)**  |
| bool | **[empty](/docs/classes/classQskGridBox/#property-empty)**  |
| int | **[elementCount](/docs/classes/classQskGridBox/#property-elementcount)**  |

## Public Functions Documentation

### function QskGridBox

```cpp
explicit QskGridBox(
    QQuickItem * parent =nullptr
)
```


### function ~QskGridBox

```cpp
~QskGridBox() override
```


### function addItem

```cpp
Q_INVOKABLE int addItem(
    QQuickItem * item,
    int row,
    int column,
    int rowSpan,
    int columnSpan
)
```


### function addItem

```cpp
inline Q_INVOKABLE int addItem(
    QQuickItem * item,
    int row,
    int column
)
```


### function addItem

```cpp
int addItem(
    QQuickItem * item,
    int row,
    int column,
    Qt::Alignment alignment
)
```


### function addItem

```cpp
int addItem(
    QQuickItem * item,
    int row,
    int column,
    int rowSpan,
    int columnSpan,
    Qt::Alignment alignment
)
```


### function addSpacer

```cpp
Q_INVOKABLE int addSpacer(
    const QSizeF & spacing,
    int row,
    int column,
    int rowSpan =1,
    int columnSpan =1
)
```


### function addColumnSpacer

```cpp
int addColumnSpacer(
    qreal spacing,
    int column
)
```


### function addRowSpacer

```cpp
int addRowSpacer(
    qreal spacing,
    int row
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


### function rowCount

```cpp
Q_INVOKABLE int rowCount() const
```


### function columnCount

```cpp
Q_INVOKABLE int columnCount() const
```


### function elementCount

```cpp
int elementCount() const
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


### function isEmpty

```cpp
inline bool isEmpty() const
```


### function itemAt

```cpp
Q_INVOKABLE QQuickItem * itemAt(
    int row,
    int column
) const
```


### function indexAt

```cpp
Q_INVOKABLE int indexAt(
    int row,
    int column
) const
```


### function gridOfIndex

```cpp
Q_INVOKABLE QRect gridOfIndex(
    int index
) const
```


### function effectiveGridOfIndex

```cpp
Q_INVOKABLE QRect effectiveGridOfIndex(
    int index
) const
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
    Qt::Orientations orientations,
    qreal spacing
)
```


### function resetSpacing

```cpp
void resetSpacing(
    Qt::Orientations orientations
)
```


### function spacing

```cpp
qreal spacing(
    Qt::Orientation orientation
) const
```


### function setSpacing

```cpp
inline void setSpacing(
    qreal spacing
)
```


### function setRowStretchFactor

```cpp
Q_INVOKABLE void setRowStretchFactor(
    int row,
    int stretch
)
```


### function rowStretchFactor

```cpp
Q_INVOKABLE int rowStretchFactor(
    int row
) const
```


### function setColumnStretchFactor

```cpp
Q_INVOKABLE void setColumnStretchFactor(
    int column,
    int stretch
)
```


### function columnStretchFactor

```cpp
Q_INVOKABLE int columnStretchFactor(
    int column
) const
```


### function setColumnWidthHint

```cpp
Q_INVOKABLE void setColumnWidthHint(
    int column,
    Qt::SizeHint which,
    qreal width
)
```


### function columnWidthHint

```cpp
Q_INVOKABLE qreal columnWidthHint(
    int column,
    Qt::SizeHint which
) const
```


### function setRowHeightHint

```cpp
Q_INVOKABLE void setRowHeightHint(
    int row,
    Qt::SizeHint which,
    qreal height
)
```


### function rowHeightHint

```cpp
Q_INVOKABLE qreal rowHeightHint(
    int row,
    Qt::SizeHint which
) const
```


### function setRowFixedHeight

```cpp
Q_INVOKABLE void setRowFixedHeight(
    int row,
    qreal height
)
```


### function setColumnFixedWidth

```cpp
Q_INVOKABLE void setColumnFixedWidth(
    int column,
    qreal width
)
```


### function dump

```cpp
void dump() const
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
void geometryChangeEvent(
    QskGeometryChangeEvent * event
) override
```


### function itemChange

```cpp
void itemChange(
    ItemChange change,
    const ItemChangeData & value
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


## Public Signals Documentation

### signal defaultAlignmentChanged

```cpp
void defaultAlignmentChanged()
```


## Public Slots Documentation

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


## Public Property Documentation

### property defaultAlignment

```cpp
Qt::Alignment defaultAlignment;
```


### property empty

```cpp
bool empty;
```


### property elementCount

```cpp
int elementCount;
```


-------------------------------

Updated on  3 February 2021 at 15:05:43 CET