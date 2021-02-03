---
title: QskListView
layout: docs

---


**Module:** **[Controls](/docs/modules/group__Controls/)**



Inherits from QskScrollView

Inherited by [QskSimpleListBox](/docs/classes/classQskSimpleListBox/)

## Public Subcontrols

|                | Name           |
| -------------- | -------------- |
| const QskAspect::Subcontrol | **[Cell](/docs/classes/classQskListView/#subcontrol-cell)**  |
| const QskAspect::Subcontrol | **[Text](/docs/classes/classQskListView/#subcontrol-text)**  |
| const QskAspect::Subcontrol | **[CellSelected](/docs/classes/classQskListView/#subcontrol-cellselected)**  |
| const QskAspect::Subcontrol | **[TextSelected](/docs/classes/classQskListView/#subcontrol-textselected)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[SelectionMode](/docs/classes/classQskListView/#enum-selectionmode)** { NoSelection, SingleSelection, MultiSelection} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskListView](/docs/classes/classQskListView/#function-qsklistview)**(QQuickItem * parent =nullptr) |
| | **[~QskListView](/docs/classes/classQskListView/#function-~qsklistview)**() override |
| void | **[setPreferredWidthFromColumns](/docs/classes/classQskListView/#function-setpreferredwidthfromcolumns)**(bool on) |
| bool | **[preferredWidthFromColumns](/docs/classes/classQskListView/#function-preferredwidthfromcolumns)**() const |
| void | **[setAlternatingRowColors](/docs/classes/classQskListView/#function-setalternatingrowcolors)**(bool on) |
| bool | **[alternatingRowColors](/docs/classes/classQskListView/#function-alternatingrowcolors)**() const |
| void | **[setSelectionMode](/docs/classes/classQskListView/#function-setselectionmode)**(SelectionMode mode) |
| SelectionMode | **[selectionMode](/docs/classes/classQskListView/#function-selectionmode)**() const |
| void | **[setTextOptions](/docs/classes/classQskListView/#function-settextoptions)**(const QskTextOptions & textOptions) |
| QskTextOptions | **[textOptions](/docs/classes/classQskListView/#function-textoptions)**() const |
| Q_INVOKABLE int | **[selectedRow](/docs/classes/classQskListView/#function-selectedrow)**() const |
| virtual int | **[rowCount](/docs/classes/classQskListView/#function-rowcount)**() const =0 |
| virtual int | **[columnCount](/docs/classes/classQskListView/#function-columncount)**() const =0 |
| virtual qreal | **[columnWidth](/docs/classes/classQskListView/#function-columnwidth)**(int col) const =0 |
| virtual qreal | **[rowHeight](/docs/classes/classQskListView/#function-rowheight)**() const =0 |
| virtual Q_INVOKABLE QVariant | **[valueAt](/docs/classes/classQskListView/#function-valueat)**(int row, int col) const =0 |
| virtual QskColorFilter | **[graphicFilterAt](/docs/classes/classQskListView/#function-graphicfilterat)**(int row, int col) const |
| virtual QskAspect::Subcontrol | **[textSubControlAt](/docs/classes/classQskListView/#function-textsubcontrolat)**(int row, int col) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[keyPressEvent](/docs/classes/classQskListView/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[keyReleaseEvent](/docs/classes/classQskListView/#function-keyreleaseevent)**(QKeyEvent * event) override |
| void | **[mousePressEvent](/docs/classes/classQskListView/#function-mousepressevent)**(QMouseEvent * event) override |
| void | **[mouseReleaseEvent](/docs/classes/classQskListView/#function-mousereleaseevent)**(QMouseEvent * event) override |
| void | **[updateScrollableSize](/docs/classes/classQskListView/#function-updatescrollablesize)**() |
| void | **[componentComplete](/docs/classes/classQskListView/#function-componentcomplete)**() override |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[selectedRowChanged](/docs/classes/classQskListView/#signal-selectedrowchanged)**(int row) |
| void | **[selectionModeChanged](/docs/classes/classQskListView/#signal-selectionmodechanged)**() |
| void | **[alternatingRowColorsChanged](/docs/classes/classQskListView/#signal-alternatingrowcolorschanged)**() |
| void | **[preferredWidthFromColumnsChanged](/docs/classes/classQskListView/#signal-preferredwidthfromcolumnschanged)**() |
| void | **[textOptionsChanged](/docs/classes/classQskListView/#signal-textoptionschanged)**() |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setSelectedRow](/docs/classes/classQskListView/#slot-setselectedrow)**(int row) |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[alternatingRowColors](/docs/classes/classQskListView/#property-alternatingrowcolors)**  |
| SelectionMode | **[selectionMode](/docs/classes/classQskListView/#property-selectionmode)**  |
| int | **[selectedRow](/docs/classes/classQskListView/#property-selectedrow)**  |
| QskTextOptions | **[textOptions](/docs/classes/classQskListView/#property-textoptions)**  |
| bool | **[preferredWidthFromColumns](/docs/classes/classQskListView/#property-preferredwidthfromcolumns)**  |

## Public Subcontrols Documentation

### subcontrol Cell




### subcontrol Text




### subcontrol CellSelected




### subcontrol TextSelected




## Public Types Documentation

### enum SelectionMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoSelection | |   |
| SingleSelection | |   |
| MultiSelection | |   |




## Public Functions Documentation

### function QskListView

```cpp
QskListView(
    QQuickItem * parent =nullptr
)
```


### function ~QskListView

```cpp
~QskListView() override
```


### function setPreferredWidthFromColumns

```cpp
void setPreferredWidthFromColumns(
    bool on
)
```


### function preferredWidthFromColumns

```cpp
bool preferredWidthFromColumns() const
```


### function setAlternatingRowColors

```cpp
void setAlternatingRowColors(
    bool on
)
```


### function alternatingRowColors

```cpp
bool alternatingRowColors() const
```


### function setSelectionMode

```cpp
void setSelectionMode(
    SelectionMode mode
)
```


### function selectionMode

```cpp
SelectionMode selectionMode() const
```


### function setTextOptions

```cpp
void setTextOptions(
    const QskTextOptions & textOptions
)
```


### function textOptions

```cpp
QskTextOptions textOptions() const
```


### function selectedRow

```cpp
Q_INVOKABLE int selectedRow() const
```


### function rowCount

```cpp
virtual int rowCount() const =0
```


### function columnCount

```cpp
virtual int columnCount() const =0
```


### function columnWidth

```cpp
virtual qreal columnWidth(
    int col
) const =0
```


### function rowHeight

```cpp
virtual qreal rowHeight() const =0
```


### function valueAt

```cpp
virtual Q_INVOKABLE QVariant valueAt(
    int row,
    int col
) const =0
```


### function graphicFilterAt

```cpp
virtual QskColorFilter graphicFilterAt(
    int row,
    int col
) const
```


### function textSubControlAt

```cpp
virtual QskAspect::Subcontrol textSubControlAt(
    int row,
    int col
) const
```


## Protected Functions Documentation

### function keyPressEvent

```cpp
void keyPressEvent(
    QKeyEvent * event
) override
```


### function keyReleaseEvent

```cpp
void keyReleaseEvent(
    QKeyEvent * event
) override
```


### function mousePressEvent

```cpp
void mousePressEvent(
    QMouseEvent * event
) override
```


### function mouseReleaseEvent

```cpp
void mouseReleaseEvent(
    QMouseEvent * event
) override
```


### function updateScrollableSize

```cpp
void updateScrollableSize()
```


### function componentComplete

```cpp
void componentComplete() override
```


## Public Signals Documentation

### signal selectedRowChanged

```cpp
void selectedRowChanged(
    int row
)
```


### signal selectionModeChanged

```cpp
void selectionModeChanged()
```


### signal alternatingRowColorsChanged

```cpp
void alternatingRowColorsChanged()
```


### signal preferredWidthFromColumnsChanged

```cpp
void preferredWidthFromColumnsChanged()
```


### signal textOptionsChanged

```cpp
void textOptionsChanged()
```


## Public Slots Documentation

### slot setSelectedRow

```cpp
void setSelectedRow(
    int row
)
```


## Public Property Documentation

### property alternatingRowColors

```cpp
bool alternatingRowColors;
```


### property selectionMode

```cpp
SelectionMode selectionMode;
```


### property selectedRow

```cpp
int selectedRow;
```


### property textOptions

```cpp
QskTextOptions textOptions;
```


### property preferredWidthFromColumns

```cpp
bool preferredWidthFromColumns;
```


-------------------------------

Updated on  3 February 2021 at 15:05:44 CET