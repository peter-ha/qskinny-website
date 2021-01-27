---
title: QskLayoutChain
layout: docs

---


**Module:** **[Layouts](/docs/modules/group___layouts/)**



## Public Classes

|                | Name           |
| -------------- | -------------- |
| class | **[CellData](/docs/classes/class_qsk_layout_chain_1_1_cell_data/)**  |
| class | **[Segment](/docs/classes/class_qsk_layout_chain_1_1_segment/)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[FillMode](/docs/classes/class_qsk_layout_chain/#enum-fillmode)** { Leading = 1 << 0, Trailing = 1 << 1} |
| typedef QVector< Segment > | **[Segments](/docs/classes/class_qsk_layout_chain/#typedef-segments)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[QskLayoutChain](/docs/classes/class_qsk_layout_chain/#function-qsklayoutchain)**() |
| | **[~QskLayoutChain](/docs/classes/class_qsk_layout_chain/#function-~qsklayoutchain)**() |
| void | **[invalidate](/docs/classes/class_qsk_layout_chain/#function-invalidate)**() |
| void | **[reset](/docs/classes/class_qsk_layout_chain/#function-reset)**(int count, qreal constraint) |
| void | **[expandCell](/docs/classes/class_qsk_layout_chain/#function-expandcell)**(int index, const CellData & newCell) |
| void | **[expandCells](/docs/classes/class_qsk_layout_chain/#function-expandcells)**(int start, int end, const CellData & multiCell) |
| void | **[shrinkCell](/docs/classes/class_qsk_layout_chain/#function-shrinkcell)**(int index, const CellData & newCell) |
| void | **[finish](/docs/classes/class_qsk_layout_chain/#function-finish)**() |
| const CellData & | **[cell](/docs/classes/class_qsk_layout_chain/#function-cell)**(int index) const |
| bool | **[setSpacing](/docs/classes/class_qsk_layout_chain/#function-setspacing)**(qreal spacing) |
| qreal | **[spacing](/docs/classes/class_qsk_layout_chain/#function-spacing)**() const |
| void | **[setFillMode](/docs/classes/class_qsk_layout_chain/#function-setfillmode)**(int mode) |
| int | **[fillMode](/docs/classes/class_qsk_layout_chain/#function-fillmode)**() const |
| Segments | **[segments](/docs/classes/class_qsk_layout_chain/#function-segments)**(qreal size) const |
| QskLayoutHint | **[boundingHint](/docs/classes/class_qsk_layout_chain/#function-boundinghint)**() const |
| qreal | **[constraint](/docs/classes/class_qsk_layout_chain/#function-constraint)**() const |
| int | **[count](/docs/classes/class_qsk_layout_chain/#function-count)**() const |

## Public Types Documentation

### enum FillMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Leading | 1 << 0|   |
| Trailing | 1 << 1|   |




### typedef Segments

```cpp
typedef QVector< Segment > QskLayoutChain::Segments;
```


## Public Functions Documentation

### function QskLayoutChain

```cpp
QskLayoutChain()
```


### function ~QskLayoutChain

```cpp
~QskLayoutChain()
```


### function invalidate

```cpp
void invalidate()
```


### function reset

```cpp
void reset(
    int count,
    qreal constraint
)
```


### function expandCell

```cpp
void expandCell(
    int index,
    const CellData & newCell
)
```


### function expandCells

```cpp
void expandCells(
    int start,
    int end,
    const CellData & multiCell
)
```


### function shrinkCell

```cpp
void shrinkCell(
    int index,
    const CellData & newCell
)
```


### function finish

```cpp
void finish()
```


### function cell

```cpp
inline const CellData & cell(
    int index
) const
```


### function setSpacing

```cpp
bool setSpacing(
    qreal spacing
)
```


### function spacing

```cpp
inline qreal spacing() const
```


### function setFillMode

```cpp
inline void setFillMode(
    int mode
)
```


### function fillMode

```cpp
inline int fillMode() const
```


### function segments

```cpp
Segments segments(
    qreal size
) const
```


### function boundingHint

```cpp
inline QskLayoutHint boundingHint() const
```


### function constraint

```cpp
inline qreal constraint() const
```


### function count

```cpp
inline int count() const
```


-------------------------------

Updated on 26 January 2021 at 09:44:53 CET