---
title: QskListView
layout: docs

---


**Module:** **[Controls](/docs/modules/group___controls/)**



Inherits from QskScrollView

Inherited by [QskSimpleListBox](/docs/classes/class_qsk_simple_list_box/)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[SelectionMode](/docs/classes/class_qsk_list_view/#enum-selectionmode)** { NoSelection, SingleSelection, MultiSelection} |

## Public Slots

|                | Name           |
| -------------- | -------------- |
| void | **[setSelectedRow](/docs/classes/class_qsk_list_view/#slot-setselectedrow)**(int row) |

## Public Signals

|                | Name           |
| -------------- | -------------- |
| void | **[selectedRowChanged](/docs/classes/class_qsk_list_view/#signal-selectedrowchanged)**(int row) |
| void | **[selectionModeChanged](/docs/classes/class_qsk_list_view/#signal-selectionmodechanged)**() |
| void | **[alternatingRowColorsChanged](/docs/classes/class_qsk_list_view/#signal-alternatingrowcolorschanged)**() |
| void | **[preferredWidthFromColumnsChanged](/docs/classes/class_qsk_list_view/#signal-preferredwidthfromcolumnschanged)**() |
| void | **[textOptionsChanged](/docs/classes/class_qsk_list_view/#signal-textoptionschanged)**() |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskListView](/docs/classes/class_qsk_list_view/#function-qsklistview)**(QQuickItem * parent =nullptr) |
| | **[~QskListView](/docs/classes/class_qsk_list_view/#function-~qsklistview)**() override |
| void | **[setPreferredWidthFromColumns](/docs/classes/class_qsk_list_view/#function-setpreferredwidthfromcolumns)**(bool on) |
| bool | **[preferredWidthFromColumns](/docs/classes/class_qsk_list_view/#function-preferredwidthfromcolumns)**() const |
| void | **[setAlternatingRowColors](/docs/classes/class_qsk_list_view/#function-setalternatingrowcolors)**(bool on) |
| bool | **[alternatingRowColors](/docs/classes/class_qsk_list_view/#function-alternatingrowcolors)**() const |
| void | **[setSelectionMode](/docs/classes/class_qsk_list_view/#function-setselectionmode)**(SelectionMode mode) |
| SelectionMode | **[selectionMode](/docs/classes/class_qsk_list_view/#function-selectionmode)**() const |
| void | **[setTextOptions](/docs/classes/class_qsk_list_view/#function-settextoptions)**(const QskTextOptions & textOptions) |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_list_view/#function-textoptions)**() const |
| Q_INVOKABLE int | **[selectedRow](/docs/classes/class_qsk_list_view/#function-selectedrow)**() const |
| virtual int | **[rowCount](/docs/classes/class_qsk_list_view/#function-rowcount)**() const =0 |
| virtual int | **[columnCount](/docs/classes/class_qsk_list_view/#function-columncount)**() const =0 |
| virtual qreal | **[columnWidth](/docs/classes/class_qsk_list_view/#function-columnwidth)**(int col) const =0 |
| virtual qreal | **[rowHeight](/docs/classes/class_qsk_list_view/#function-rowheight)**() const =0 |
| virtual Q_INVOKABLE QVariant | **[valueAt](/docs/classes/class_qsk_list_view/#function-valueat)**(int row, int col) const =0 |
| virtual QskColorFilter | **[graphicFilterAt](/docs/classes/class_qsk_list_view/#function-graphicfilterat)**(int row, int col) const |
| virtual QskAspect::Subcontrol | **[textSubControlAt](/docs/classes/class_qsk_list_view/#function-textsubcontrolat)**(int row, int col) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| void | **[keyPressEvent](/docs/classes/class_qsk_list_view/#function-keypressevent)**(QKeyEvent * event) override |
| void | **[keyReleaseEvent](/docs/classes/class_qsk_list_view/#function-keyreleaseevent)**(QKeyEvent * event) override |
| void | **[mousePressEvent](/docs/classes/class_qsk_list_view/#function-mousepressevent)**(QMouseEvent * event) override |
| void | **[mouseReleaseEvent](/docs/classes/class_qsk_list_view/#function-mousereleaseevent)**(QMouseEvent * event) override |
| void | **[updateScrollableSize](/docs/classes/class_qsk_list_view/#function-updatescrollablesize)**() |
| void | **[componentComplete](/docs/classes/class_qsk_list_view/#function-componentcomplete)**() override |

## Public Properties

|                | Name           |
| -------------- | -------------- |
| bool | **[alternatingRowColors](/docs/classes/class_qsk_list_view/#property-alternatingrowcolors)**  |
| SelectionMode | **[selectionMode](/docs/classes/class_qsk_list_view/#property-selectionmode)**  |
| int | **[selectedRow](/docs/classes/class_qsk_list_view/#property-selectedrow)**  |
| QskTextOptions | **[textOptions](/docs/classes/class_qsk_list_view/#property-textoptions)**  |
| bool | **[preferredWidthFromColumns](/docs/classes/class_qsk_list_view/#property-preferredwidthfromcolumns)**  |

## Public Types Documentation

### enum SelectionMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| NoSelection | |   |
| SingleSelection | |   |
| MultiSelection | |   |




## Public Slots Documentation

### slot setSelectedRow

```cpp
void setSelectedRow(
    int row
)
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

Updated on 22 January 2021 at 17:05:49 CET